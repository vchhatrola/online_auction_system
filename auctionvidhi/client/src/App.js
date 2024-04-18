import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import Forgotpassword from './Components/Forgotpassword'
import ResetPassword from './Components/ResetPassword'
import Contact from './Components/Contact'
import TermsAndConditions from './Components/TermsAndConditions'
import { AuctionDetails } from './Components/AuctionDetails'
import AuctionDescription from './Components/AuctionDescription'
import ProtocolPage from './Components/ProtocolPage'
import ChatMain from './Components/LiveChat/ChatMain'
import PrivateRoute from './PrivateRoute'
import { ToastContainer } from 'react-toastify'
import PageNotFound from './Components/PageNotFound'
// import AdminLogin from './Components/Admin/AdminLogin'
import AdminDashboard from './Components/Admin/AdminDashboard'
import UserList from './Components/Admin/UserList'
import ProductList from './Components/Admin/ProductList'
import Exit from './Components/LiveChat/Exit'
import Payment from './Components/LiveChat/Payment'
import UpdateAuction from './Components/Admin/UpdateAuction'
import EditProfile from './Components/Editprofile'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        autoClose={5000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
        <Route path="/termsandconditions" element={<TermsAndConditions />}></Route>

        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>}></Route>
        {/* <Route path="/EditProfile/:id" element={<PrivateRoute><EditProfile /></PrivateRoute>}></Route> */}
        {/* <Route path="/termsandconditions" element={<PrivateRoute><TermsAndConditions /></PrivateRoute>}></Route> */}
        <Route path="/AuctionDetails" element={<PrivateRoute><AuctionDetails /></PrivateRoute>} />
        <Route path="/AuctionDescription/:id" element={<PrivateRoute><AuctionDescription /></PrivateRoute>} />
        <Route path="/protocol" element={<PrivateRoute><ProtocolPage /></PrivateRoute>} />
        <Route path="/EditProfile/:id" element={<EditProfile />}></Route>

        {/* admin route */}
        {/* <Route path="/adminLogin" element={<AdminLogin />}></Route> */}
        <Route path="/adminDashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>}></Route>
        <Route path="/userList" element={<PrivateRoute><UserList /></PrivateRoute>}></Route>
        <Route path="/updateAuction/:id" element={<PrivateRoute><UpdateAuction /></PrivateRoute>}></Route>
        <Route path="/productList" element={<PrivateRoute><ProductList /></PrivateRoute>}></Route>

        <Route path="/Chat" element={<PrivateRoute><ChatMain /></PrivateRoute>}></Route>
        <Route path="/Exit" element={<PrivateRoute><Exit /></PrivateRoute>}></Route>
        <Route path="/Payment" element={<PrivateRoute><Payment /></PrivateRoute>}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App