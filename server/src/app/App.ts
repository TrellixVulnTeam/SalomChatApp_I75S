import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
import express from "express";
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

export { app };
