import React from "react";
import { Login } from "../Helpers";
import { Register } from "../Components/Auth/Register";
import { useState } from "react";

export const Auth = ({ Authanticated, setUserData }: any) => {
  const [changeAuthState, setChangeAuthState] = useState<boolean>(false);

  const changeAuthStateToRegister = (get: boolean) => {
    setChangeAuthState(get);
  };
  return (
    <div className="__auth-component">
      {!changeAuthState ? (
        <Login
          setUserData={setUserData}
          Authanticated={Authanticated}
          changeAuthStateToRegister={changeAuthStateToRegister}
        />
      ) : (
        <Register changeAuthStateToRegister={changeAuthStateToRegister} />
      )}
    </div>
  );
};
