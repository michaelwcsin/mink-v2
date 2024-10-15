import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/customer" element={<CustomerPage />} /> */}
        {/* <Route path="/manager" element={<ManagerPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
