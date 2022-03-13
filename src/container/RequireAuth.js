import React, { useEffect, useCallback } from "react";
import LoginSignup from "../Components/LoginSignup";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../Actions/Auth";
import CreateRestaurantForm from "./CreateRestaurantForm";

export const RequireAuth = ({ children }) => {
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const getUser = useCallback(async () => {
    try {
      await dispatch(loginAction());
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  useEffect(() => {
    getUser();
  }, [getUser]);
  if (!user.token) {
    return <LoginSignup />;
  }
  if (!user.user.store) {
    return <CreateRestaurantForm />;
  }
  return <>{children}</>;
};
