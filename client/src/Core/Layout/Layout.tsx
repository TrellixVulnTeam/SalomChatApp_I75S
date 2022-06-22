import React from "react";
import { AppHeader, Main } from "../Helpers";

const Layout = ({ logedUserData }: any) => {
  return (
    <div>
      {/* <AppHeader /> */}
      <Main logedUserData={logedUserData} />
    </div>
  );
};

export default Layout;
