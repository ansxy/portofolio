export default function (req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();
  //   const transporter = nodemailer.createTransport({
  //     port: 465,
  //     host: "smtp.gmail.com",
  //     auth: {
  //       user: "ansarfadillah20@gmail.com",
  //       pass: process.env.PASSWORD,
  //     },
  //     secure: true,
  //   });

  const mailData = {
    from: req.body.email,
    to: "bertrand.jenkins98@ethereal.email",
    subject: `Message from ${req.body.name} with Subject ${req.body.subject}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  try {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "bertrand.jenkins98@ethereal.email",
          pass: "89FN489G5AWtfT6hky",
        },
    });
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.error(err);
      } else {
        res.status(200).json({ status : 'success' });
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
