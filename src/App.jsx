import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./Pages/Auth/Signup";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import TestimonyForm from "./Pages/Users/DropTestimono";
import TestimonyView from "./Pages/Users/TestimonyView";
import Login from "./Pages/Auth/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<Signup />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        <Route path="/user/me" element={<AdminDashboard />} />
        <Route path="/testimony/me/:username" element={<TestimonyForm />} />
        <Route path="/testimonies/view/:username" element={<TestimonyView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
