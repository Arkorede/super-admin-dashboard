import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Wallet from "./pages/dashboard/Wallet";
import Partners from "./pages/dashboard/Partners";
import LoanRequest from "./pages/dashboard/LoanRequest";
import Users from "./pages/dashboard/Users";
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
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="partners" element={<Partners />} />
        <Route path="loanrequest" element={<LoanRequest />} />
        <Route path="users" element={<Users />} />
        <Route path="loanhistory" element={<LoanHistory />} />
        <Route path="documents" element={<Documents />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
    // </Router>
  );
}
export default App;
