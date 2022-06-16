import { Navbar } from "react-bootstrap";
import { AppInfo } from "../../Helpers";

const AppHeader = () => {
  return (
    <div className="__appheader">
      <Navbar className="p-3 bg-primary">
        <Navbar.Brand className="__brand-text">{AppInfo.name}</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default AppHeader;
