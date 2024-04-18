import express from 'express'
import bcrypt from 'bcrypt'
const router = express.Router();
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import { ContactUs } from '../models/ContactUs.modal.js';

router.post('/signup', async (req, res) => {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    address,
    adharCardNumber,
    role
  } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: 'User already existed.' });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
    firstName,
    lastName,
    phoneNumber,
    address,
    registrationDate: new Date(),
    adharCardNumber,
    role
  });

  await newUser.save();
  return res.json({ status: true, message: 'User is register successfully.' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.json({ message: "User is not registered" })
  }

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    return res.json({ message: "Password is incorrect." })
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '12h' })
  res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
  return res.json({ status: true, token: token, user: user, message: "Login is successfully." })
})

router.post('/chatJoin', async (req, res) => {
  const { username, _id } = req.body
  const user = await User.findOne({ username, _id })
  if (!user) {
    return res.json({ message: "User is not registered" })
  }

  return res.json({ status: true, user: user, message: "Login is successfully." })
})

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.json({ message: "User is not registered." })
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: '5m' })
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'chhatrolavidhi@gmail.com',
        pass: 'owtu oqct eaml xkwf'
      }
    });

    var mailOptions = {
      from: 'chhatrolavidhi@gmail.com',
      to: email,
      subject: 'Reset Password',
      text: `http://localhost:3001/resetpassword/${token}`
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        return res.json({ message: "error sending email" })
      } else {
        return res.json({ status: true, message: "email send" })
      }
    });

  } catch (err) {
    console.log(err)
  }
})

router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body
  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashpassword = await bcrypt.hash(password, 10)
    await User.findByIdAndUpdate({ _id: id }, { password: hashpassword })
    return res.json({ status: true, message: "updated password" })
  }
  catch (err) {
    return res.json("invalid token")
  }
})

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, massage: "no token" })
    }
    const user = await jwt.verify(token, process.env.KEY);
    next();
  } catch (err) {
    return res.json(err)
  }
}

router.get('/verify', verifyUser, (req, res) => {
  return res.json({ status: true, message: "authorized" })
});

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({ status: true })
});


router.post("/contact", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    text: `http://localhost:3001/contact`

  };
  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      return console.log(error);
    } else {
      return console.log("Server Running");
    }
  });
  const newContactUs = new ContactUs({
    name,
    email,
    message
  });
  await newContactUs.save();


  contactEmail.sendMail(mail, async (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {

      res.json({ status: "Your request sent successfully." });
    }
  });
});

router.post('/editProfile/:id', async (req, res) => {
  const userId = req.params.id;
  const {
    username,
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    adharCardNumber,
  } = req.body;

  try {
    const updatedProfile = await User.findByIdAndUpdate(userId, {
      username,
      email,
      firstName,
      lastName,
      phoneNumber,
      address,
      adharCardNumber,
    }, { new: true });

    if (!updatedProfile) {
      return res.status(404).json({ status: false, message: 'User not found.' });
    }

    return res.json({ status: true, message: 'User updated successfully.', data: updatedProfile });
  }
  catch (error) {
    return res.status(500).json({ status: false, message: 'Failed to update User.', error: error.message });
  }
});


export { router as UserRouter }

