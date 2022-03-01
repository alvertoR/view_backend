const nodemailer = require("nodemailer");

const sendMail = async(infoMail) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          user: 'zetoma97@gmail.com',
          pass: 'gszjtdtvqboubwbp'
      }
    });

    await transporter.sendMail(infoMail);

    return {
      message: 'mail sent'
    }
}

module.exports = {
  sendMail
}