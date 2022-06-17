import bodyParser from "body-parser";
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

app.get("/", (req, res) => {
  res.send("<h1>This is the DEV</h1>");

  const sql =
    "INSERT INTO Users(Username, Phone, isOnline, lastOpened, newOpen, createdAt) VALUES(?,?,?,?,?,?)";
  db.run(
    sql,
    ["Musawwir", 992985031200, true, new Date(), new Date(), new Date()],
    () => {
      console.log("Inserted!");
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlLogin = `SELECT * FROM Users WHERE Username = ?`;
  db.all(sqlLogin, username, async (err: any, result: any) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].auth_pass, (error, response) => {
        if (response) {
          res.send(result);
          console.log(req);
        }
      });
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
