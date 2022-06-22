import MessagesView from "../Msg/MessagesView";
import View from "../Msg/View";
import Sidebar from "../Sidebar/Sidebar";
import { Grid } from "@mui/material";
import { useState } from "react";

export interface Contact {
  name: string;
  id: Number;
}

export const Main = ({ logedUserData }: any) => {
  const [choosenChat, setChoosenChat] = useState<Contact>();

  const chosenChat = (user: any) => {
    setChoosenChat(user);
  };

  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <Sidebar logedUserData={logedUserData} chosenChat={chosenChat} />
        </Grid>
        <Grid item md={9}>
          {!choosenChat ? <View /> : <MessagesView chosenChat={choosenChat} />}
        </Grid>
      </Grid>
    </div>
  );
};
