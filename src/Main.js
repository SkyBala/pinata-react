import React from "react";
import { Outlet } from "react-router-dom";

import MobileHeader from "./components/footer/MobileHeader";
import Poisk from "./components/poisk/Poisk";


function Main() {

  return (
    <div>
      <Outlet/>
      <MobileHeader/>
      <Poisk/>
    </div>
  );
}

export default Main;
