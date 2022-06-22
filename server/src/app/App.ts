import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import sqlite3 from "sqlite3";
import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import path from "path";

const app = express();

const dbPath = path.resolve(__dirname, "..", "db", "salom.db");

app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 3001);
app.use(bodyParser.urlencoded({ extended: true }));

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) console.log(err.message);
  console.log("Database Connection!");
});

// const verifyJWT = (request: any, response: any, next: any) => {
//   const token: any = request.headers["x-access-token"];

//   if (!token) {
//     response.send("Token not found!");
//   } else {
//     jwt.verify(token, "jwtSecret", (err: any, decoded: any) => {
//       if (err) {
//         response.json({ auth: false, message: "Auth failed!" });
//       } else {
//         request.userid = decoded.id;
//         next();
//       }
//     });
//   }
// };

// app.get("/isUserAuth", verifyJWT, (req, res) => {
//   res.send("You are Authed!");
// });

app.post("/login", (req: any, res: any) => {
  const { username, password } = req.body;

  const sqlLogin = `SELECT * FROM Users WHERE Username = ?`;
  db.all(sqlLogin, username, async (err: any, result: any) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].auth_pass, (error, response) => {
        if (response) {
          const { id } = result[0];
          const token = jwt.sign({ id }, "jwtSecret", {
            expiresIn: 300,
          });
          req.session = result;

          res.json({ auth: true, token: token, result: result });
        } else {
          res.json({ auth: false, message: "Wrong Username or Password!" });
        }
      });
    } else {
      res.json({ auth: false, message: "User not found!" });
    }
  });
});

app.post("/register", async (req, res) => {
  const phone = req.body.phone;
  const username = req.body.username;
  const password = req.body.password;
  const verified = false;
  const currentDate = new Date();
  const showOnlineStatus = true;
  const sqlRegister = `INSERT INTO Users(Username, Phone,isOnline, lastOpened, newOpen, createdAt,Verified, showOnlineStatus, auth_pass) VALUES(?,?,?,?,?,?,?,?,?)`;

  const salt = 10;

  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.run(
      sqlRegister,
      [
        username,
        phone,
        true,
        currentDate,
        currentDate,
        currentDate,
        verified,
        showOnlineStatus,
        hash,
      ],
      (err: any, result: any) => {
        if (err) console.log(err.message);
        res.send(result);
        console.log("New User Registered!");
      }
    );
  });
});

export { app };
