import AppHeader from "../Components/Header/AppHeader";
import { Main } from "../Components/Main/Main";
import Layout from "../Layout/Layout";
import "../Styles/messageStyle.scss";
import "../Styles/LogedUser.scss";
import "../Styles/appheader.scss";
import "../Styles/sidebar.scss";
const savedMessageImage = require("../assets/img/savedMessage.webp");
// const savedMessageImage = require("../assets/img/saved.png");

const AppInfo: any = {
  name: "Salom",
  version: "1.0.1",
};

export { Layout, AppHeader, AppInfo, Main, savedMessageImage };
