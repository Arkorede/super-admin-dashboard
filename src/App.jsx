import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import PrivateRoutes from "./util/PrivateRoutes";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Wallet from "./pages/dashboard/Wallet";
import Partner from "./pages/dashboard/Partner";
import Partners from "./pages/dashboard/Partners";
import PartnersView from "./pages/dashboard/PartnersView";
import LoanRequest from "./pages/dashboard/LoanRequest";
import Users from "./pages/dashboard/Users";
import User from "./pages/dashboard/User";
import LoanHistory from "./pages/dashboard/LoanHistory";
import Documents from "./pages/dashboard/Documents";
import Transactions from "./pages/dashboard/Transactions";
import Settings from "./pages/dashboard/Settings";
import "./App.css";

function App() {
  return (
    // <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      {/* <Route element={<PrivateRoutes />}> */}
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="partners/partner" element={<Partner />} />
        <Route path="partners" element={<Partners />} />
        <Route path="partners/:id" element={<PartnersView />} />
        <Route path="loanrequest" element={<LoanRequest />} />
        <Route path="users" element={<Users />} />
        <Route path="users/user" element={<User />} />
        <Route path="loanhistory" element={<LoanHistory />} />
        <Route path="documents" element={<Documents />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      {/* </Route> */}
    </Routes>
    // </Router>
  );
}
export default App;
