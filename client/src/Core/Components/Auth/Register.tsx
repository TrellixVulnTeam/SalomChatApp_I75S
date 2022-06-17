import { Input, Button } from "@mui/material";
import { useState } from "react";
import Axios from "axios";

export interface register {
  Phone: string;
  username: string;
  password: string;
}

export const Register = ({ changeAuthStateToRegister }: any) => {
  const [registration, setRegistration] = useState<register>({
    Phone: "",
    username: "",
    password: "",
  });

  const [step, setStep] = useState<boolean>(false);

  const nextStep = () => {
    if (registration.Phone.length >= 9) {
      setStep(true);
      console.log("Done!");
    }
  };

  const InputRegister = (key: string) => (newInput: any) => {
    setRegistration({
      ...registration,
      [key]: newInput.target.value,
    });
  };

  const SaveRegistration = () => {
    Axios.post("http://localhost:3001/register", {
      phone: registration.Phone,
      username: registration.username,
      password: registration.password,
    }).then((err) => {
      if (err) return console.log(err);
      console.log("Sent");
    });
  };

  return (
    <>
      {!step ? (
        <div className="step_One _register-component">
          <Input
            onChange={InputRegister("Phone")}
            value={registration.Phone}
            type="number"
            className="_input-fields"
            placeholder="Phone Number"
          />
          <Button
            variant="outlined"
            className="_input-fields"
            onClick={() => nextStep()}
          >
            Next
          </Button>
          <span
            className="_back-to-login"
            onClick={() => changeAuthStateToRegister(false)}
          >
            Back to login!
          </span>
        </div>
      ) : (
        <div className="step_two _register-component">
          <Input
            onChange={InputRegister("username")}
            value={registration.username}
            type="text"
            className="_input-fields"
            placeholder="Username"
          />
          <Input
            onChange={InputRegister("password")}
            value={registration.password}
            type="password"
            className="_input-fields"
            placeholder="Password"
          />
          <Button
            variant="contained"
            className="_input-fields"
            onClick={() => SaveRegistration()}
          >
            Done
          </Button>
        </div>
      )}
    </>
  );
};
