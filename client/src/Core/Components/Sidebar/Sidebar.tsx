import React, { useState } from "react";
import { Avatar, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppInfo } from "../../Helpers";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
import VerifiedIcon from "@mui/icons-material/Verified";
import { savedMessageImage } from "../../Helpers";

const Sidebar = ({ chosenChat, logedUserData }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const Users: any[] = [
    {
      name: "Mom",
      last: "Don't forget that",
      time: "23:48 PM",
      isOnline: true,
      showOnlineStatus: true,
      verified: true,
    },
    {
      name: "Ibrohim",
      last: "Akajon",
      time: "8:43 AM",
      isOnline: false,
      showOnlineStatus: false,
      verified: false,
    },
    {
      name: "Sulton",
      last: "How are you bro",
      time: "19:20 PM",
      isOnline: true,
      showOnlineStatus: true,
      verified: false,
    },
    {
      name: "Shahrom",
      last: "Kai safo brem brat",
      time: "11:48 AM",
      isOnline: false,
      showOnlineStatus: false,
      verified: false,
    },
    {
      name: "Yusuf",
      last: "Hi Sir",
      time: "9:27 AM",
      isOnline: false,
      showOnlineStatus: false,
      verified: false,
    },
    {
      name: "Oisha",
      last: "??",
      time: "11:48 AM",
      isOnline: false,
      showOnlineStatus: false,
      verified: false,
    },
    {
      name: "Umar",
      last: "You have to think about that",
      time: "Week ago",
      isOnline: false,
      showOnlineStatus: false,
      verified: false,
    },
    {
      name: "Malika",
      last: "You know, that",
      time: "20:12 PM",
      isOnline: false,
      showOnlineStatus: false,
      verified: true,
    },
  ];

  return (
    <>
      <div>
        <div className="__search-user">
          <MenuIcon onClick={() => setOpen(!open)} className="__menu" />
          <input
            type={"text"}
            className="__search-field"
            placeholder="Search"
          />
        </div>
        <Divider />
        <div className="__sidebar">
          {/* Here is the saved Message Component */}
          <div onClick={() => chosenChat({ name: "Saved Messages" })}>
            <div className="__users-list">
              <Avatar alt="SavedMessageImage" src={savedMessageImage} />
              <div className="__user-name">
                <span className="username">Saved Messages</span>
                <span className="__last-message">
                  Here is last saved message
                </span>
              </div>
              <div className="__time">
                <span className="last-message-date">Here is time</span>
              </div>
            </div>
          </div>
          {/* End of saved message Component */}
          {Users.map((value: any, index: number) => (
            <div key={index} onClick={() => chosenChat(value)}>
              <div className="__users-list">
                <Avatar alt={value.name} src="type-image" />
                <div className="__user-name">
                  <span className="username">
                    {value.name}
                    {value.verified && <VerifiedIcon className="verified" />}
                  </span>
                  <span className="__last-message">{value.last}</span>
                </div>
                <div className="__time">
                  <span className="last-message-date">{value.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="__loged-user-info">
          <div className="__avatar">
            <Avatar />
            <span className="-user-name">
              {logedUserData.Name || logedUserData.Username}
            </span>
          </div>
          <Divider />
          <div className="__settings">...</div>
          <div className="__salom-info">
            <h6>
              {AppInfo.name} Desktop - <span>About</span>
            </h6>
            <span>Version {AppInfo.version}</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
