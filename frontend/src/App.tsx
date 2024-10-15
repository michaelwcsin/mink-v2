import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CustomerPage from "../Pages/CustomerPage/CustomerPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ManagerPage from "../Pages/ManagerPage/ManagerPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/manager" element={<ManagerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
