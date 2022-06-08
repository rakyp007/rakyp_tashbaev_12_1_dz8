import React from "react";
import { Outlet } from "react-router-dom";
import Back from "../../components/back/Back";
const LayoutBack =(props) => (
    <div>
        <Back/>
        <Outlet/>
    </div>

);

export default LayoutBack;