import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.TESTMAIL,
      pass: process.env.TESTMAILPASS,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.TESTMAIL,
    to: "shadhanm@gmail.com",
    subject: req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });

  res.status(200).json({ lol: "Lol" });
}
