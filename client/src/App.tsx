import { Layout } from "./Core/Helpers";
import { useState } from "react";
import { Auth } from "./Core/Auth/Auth";
import { Routes, Route } from "react-router-dom";

function App() {
  const [logedUserData, SetLogedUserData] = useState<any>();

  const setUserData = (userdata: any) => {
    SetLogedUserData(userdata);
  };

  const [auth, setAuth] = useState<any>(false);
  const data = localStorage.getItem("uuid");
  const AuthData = data ? data : [];

  const Authanticated = (response: any) => {
    setAuth(response);
  };

  if (!auth) {
    return <Auth setUserData={setUserData} Authanticated={Authanticated} />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout logedUserData={logedUserData} />} />
      </Routes>
    </div>
  );
}

export default App;
