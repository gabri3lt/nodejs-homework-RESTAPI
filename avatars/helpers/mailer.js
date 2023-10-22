const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
};

const sendEmail = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport(config);
  const emailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject,
    text,
  };
  transporter
    .sendMail(emailOptions)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendEmail;
