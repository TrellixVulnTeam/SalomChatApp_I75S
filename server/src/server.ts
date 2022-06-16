import { app } from "./app/App";

const PORT = app.get("port");

app.listen(PORT, () => {
  console.log(`App is ran in port: ${PORT}`);
});
