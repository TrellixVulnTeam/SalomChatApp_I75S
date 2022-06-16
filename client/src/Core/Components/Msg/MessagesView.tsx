import { useRef } from "react";
import { Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import VerifiedIcon from "@mui/icons-material/Verified";
// import InputEmoji from "react-input-emoji";

const MessagesView = ({ chosenChat }: any) => {
  const AttachFile = useRef<HTMLInputElement>(null);

  const message = [
    {
      id: 1,
      text: "Hello",
      name: "user",
      senderID: 1,
      recieverID: 2,
      sentDate: new Date(),
      seen: false,
    },
  ];

  const attachFileButton = () => {
    AttachFile.current?.click();
    console.log(AttachFile);
  };

  return (
    <div>
      <div className="__msg-header">
        <span className="__reciever-name">
          {chosenChat.name}
          <VerifiedIcon className="verified" />
        </span>
        {chosenChat.isOnline && chosenChat.showOnlineStatus ? (
          <span style={{ color: "#e6005c" }}> Online</span>
        ) : (
          <span className="__last-seen">last seen recently</span>
        )}
      </div>
      <Divider />

      <div className="__message-field">
        {message.map((message: any, index: number) => (
          <div
            key={index}
            className="__msg-group-divider"
            style={{
              justifyContent: message.name === "reciever" ? "start" : "end",
            }}
          >
            <div className="__message-design-sender">
              <h6 className="">{message.text}</h6>
              <div className="__date-seen-box">
                <span>
                  {" "}
                  {new Date(message.sentDate).getHours()}
                  {":"}
                  {new Date(message.sentDate).getMinutes().toString().length ===
                  1
                    ? "0" + new Date(message.sentDate).getMinutes()
                    : new Date(message.sentDate).getMinutes()}
                  {new Date(message.sentDate).getHours() <= 12 ? " AM" : " PM"}
                </span>
                {!message.seen ? (
                  <CheckIcon className="__not-seen-message" />
                ) : (
                  <KeyboardDoubleArrowLeftIcon className="__seen-message" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="__send-messager">
        <AttachFileIcon
          className="__attachicon"
          onClick={() => attachFileButton()}
        />
        <input ref={AttachFile} type={"file"} style={{ display: "none" }} />
        <input
          type={"text"}
          className="_input_text-field"
          placeholder="Type a message"
        />
        <SentimentSatisfiedAltIcon className="__smiles" />
        <SendIcon className="__send-icon" />
      </div>
    </div>
  );
};

export default MessagesView;
