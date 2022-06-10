import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Customer from "./components/Customer";
import BankEmployee from "./components/BankEmployee";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";
import Transaction from "./components/Transaction";
import Createu from "./components/Createu";
import Createa from "./components/Createa";
import ViewUser from "./components/ViewUser";
import ViewAccount from "./components/ViewAccount";
import ViewTransaction from "./components/ViewTransaction";
import AdminProfile from "./components/AdminProfile";
import CustomerProfile from "./components/CustomerProfile";
import BankEmpProfile from "./components/BankEmpProfile";
import SignUp from "./components/SignUp";
import Accountview from "./components/Accountview";
import Userview from "./components/Userview";

// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/bankemployee" element={<BankEmployee />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/createuser" element={<Createu />} />
          <Route path="/createaccount" element={<Createa />} />
          <Route path="/viewuser" element={<ViewUser />} />
          <Route path="/viewaccount" element={<ViewAccount />} />
          <Route path="/viewtransaction" element={<ViewTransaction />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/customerprofile" element={<CustomerProfile />} />
          <Route path="/bankempprofile" element={<BankEmpProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/accountview" element={<Accountview />} />
          <Route path="/userview" element={<Userview />} />
          
        </Routes>
      </BrowserRouter>


      {/* <Router> */}

      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path={"/home"} element={<Home />} />
      </Routes> */}
      {/* </Router>  */}
      {/* <Router>
        <Routes>
          
          <Route path="/" component={Login} />
          
          <Route path="/home" component={Home} />
            
          
         
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
