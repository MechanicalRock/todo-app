import { Button } from "@mui/material";
import { Auth } from "aws-amplify";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useGlobalUserContext } from "../Components/context";
import Admin from "./Admin";
import Login from "./Login";
import Main from "./Main";

export default function Pages() {
  const { user } = useGlobalUserContext();

  return (
    <>
      <Routes>
        {!user && (
          <>
            <Route path="/" element={<Main />}></Route>
            <Route path="/admin" element={<Login />}></Route>
          </>
        )}
        {user && (
          <>
            <Route path="/" element={<Main />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </>
        )}
        ;
      </Routes>
    </>
  );
}
