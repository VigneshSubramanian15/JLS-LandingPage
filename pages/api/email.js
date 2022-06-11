import UAParser from "../../helper/ua";

const fs = require("fs");
export default function handler(req, res) {
  const { email } = req.body;
  const uaData = UAParser(req.headers["user-agent"]);
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (req.method === "POST") {
    fs.appendFileSync(
      "./email/email.json",
      JSON.stringify({ email, ip, time: Date.now(), uaData }, null, 4) + ","
    );
    return res.status(200).json({ success: "success" });
  }
}
