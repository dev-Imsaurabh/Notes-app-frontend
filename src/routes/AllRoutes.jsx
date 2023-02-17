import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import SignupPage from "../pages/SignupPage";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes(){

    return <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/notes" element={<PrivateRoute ><NotesPage /></PrivateRoute>}></Route>

    </Routes>
}