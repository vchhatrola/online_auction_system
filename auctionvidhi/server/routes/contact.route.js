import express from 'express'
const router = express.Router();
// import { ContactUs } from '../models/ContactUs.modal';
import nodemailer from 'nodemailer'

router.post("/contact", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const newContactUs = new ContactUs({
    email 
  });
  await newContactUs.save();

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



  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Your request sent successfully." });
    }
  });
});
export { router as ContactRouter }