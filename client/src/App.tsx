import { Layout } from "./Core/Helpers";
import { useEffect, useState } from "react";
import { Auth } from "./Core/Auth/Auth";
import { Routes, Route } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState<any>(false);
  const localStorageSavedUser: any = localStorage.getItem("passport");
  const localUserAuth = JSON.parse(localStorageSavedUser);

  if (!auth) {
    return <Auth />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
