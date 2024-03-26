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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/termsandconditions" element={<TermsAndConditions/>}></Route>
        <Route path="/AuctionDetails" element={<AuctionDetails />} />
        <Route path="/AuctionDescription/:id" element={<AuctionDescription />} />
        <Route path="/protocol" element={<ProtocolPage />} />
      <Route path="/Chat" element={<ChatMain/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App