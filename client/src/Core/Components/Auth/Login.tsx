import { useState } from "react";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export interface auth {
  username: string;
  password: string;
}
export const LoginStyle = {
  width: "300px",
  padding: "10px",
  margin: "10px",
};

export const Login = ({
  changeAuthStateToRegister,
  Authanticated,
  setUserData,
}: any) => {
  const [authantification, setAuthantification] = useState<auth>({
    username: "",
    password: "",
  });

  const InputAuth = (key: string) => (newInput: any) => {
    setAuthantification({
      ...authantification,
      [key]: newInput.target.value,
    });
  };
  const token = localStorage.getItem("auth_token");
  if (!token) return <>false</>;

  const Login = async () => {
    await Axios.post("http://localhost:3001/login", {
      username: authantification.username,
      password: authantification.password,
    }).then((res) => {
      if (!res.data.auth) {
        console.log("Wrong Password or Username!");
        localStorage.setItem("auth_token", "Auth not found!");
      } else {
        Authanticated(res.data.auth);
        const response = res.data.result[0];
        const { id, Username, auth_pass } = response;
        setUserData(res.data.result[0]);
        localStorage.setItem(
          "uuid",
          JSON.stringify({ id: id, username: Username })
        );
        localStorage.setItem("auth_pwd", auth_pass);
        localStorage.setItem("auth_token", res.data.token);
      }
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Input
        type="text"
        onChange={InputAuth("username")}
        style={LoginStyle}
        placeholder="Username"
        value={authantification?.username}
      />
      <Input
        type="password"
        onChange={InputAuth("password")}
        style={LoginStyle}
        placeholder="Password"
        value={authantification?.password}
      />
      <Button variant="contained" style={LoginStyle} onClick={() => Login()}>
        Login
      </Button>
      <span>Don't have account yet?</span>
      <span
        className="create-account"
        onClick={() => changeAuthStateToRegister(true)}
      >
        Create an account
      </span>
    </div>
  );
};

export default Login;
