import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Fail from "../Fail/Error";
import Login from "../Login/Login";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="error" element={<Fail />}></Route>
      </Routes>
    </div>
  );
}
