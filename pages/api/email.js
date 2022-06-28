import UAParser from "../../helper/ua";
import dbConnect from "../../helper/db/connect";
import EmailList from "../../helper/db/emailList";
const fs = require("fs");
export default function handler(req, res) {
  const { email } = req.body;
  const uaData = UAParser(req.headers["user-agent"]);
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (req.method === "POST") {
    return dbConnect()
      .then(() => {
        console.log("Connected to MongoDB");
        EmailList.findOne({ email }).then((data) => {
          if (data) {
            return res.status(401).send("Email already exist");
          }
          return EmailList.create({
            email,
            ip,
            uaData,
          }).then(() => res.status(201).send("ok"));
        });
      })
      .catch((err) => {
        console.log("connection error", err);
      });
  }
}
