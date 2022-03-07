import React, { useState } from "react";
import CreateRestaurantForm from "./CreateRestaurantForm";
import { useSelector } from "react-redux";

import Dashboard from "./Dashboard";
import LoginSignup from "../Components/LoginSignup";
import { LayoutWithNav } from "../Components/Layout";

const MainApp = () => {
  const user = useSelector((state) => state.auth);
  if (!user.token) {
    return <LoginSignup />;
  }
  if (!user.user.store) {
    return <CreateRestaurantForm />;
  }

  return (
    <LayoutWithNav activeTab={"dashboard"}>
      <Dashboard />
    </LayoutWithNav>
  );
};
export default MainApp;
