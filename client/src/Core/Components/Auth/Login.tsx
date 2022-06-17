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

export const Login = ({ changeAuthStateToRegister }: any) => {
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
  const navigate = useNavigate();

  const Login = () => {
    Axios.post("http://localhost:3001/login", {
      username: authantification.username,
      password: authantification.password,
    }).then((res) => {
      console.log(res);
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
