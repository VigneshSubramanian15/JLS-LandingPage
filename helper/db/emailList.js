import mongoose from "mongoose";

const emailListSchema = new mongoose.Schema(
  {
    email: String,
    ip: String,
    uaData: {
      ua: String,
      browser: {
        name: String,
        version: String,
        major: String,
      },
      engine: {
        name: String,
        version: String,
      },
      os: {
        name: String,
        version: String,
      },
      device: Object,
      cpu: Object,
    },
  },
  { timestamps: true }
);

export default mongoose.models.emaillist ||
  mongoose.model("emaillist", emailListSchema);
