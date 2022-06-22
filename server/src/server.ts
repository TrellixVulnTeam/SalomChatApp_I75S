import { app } from "./app/App";
import bcrypt, { hash } from "bcrypt";

const PORT = app.get("port");

// const decrypt = () => {
//   bcrypt.hash(
//     '{"username": "Nozimjon","password": "1234" }',
//     9,
//     (err, hash) => {
//       if (err) console.log(err);
//       console.log("This is the hash of server: ", hash);
//     }
//   );
// };

// decrypt();

app.listen(PORT, () => {
  console.log(`App is ran in port: ${PORT}`);
});
