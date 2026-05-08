const nodemailer = require("nodemailer");

async function sendVerificationEmail(to, code) {
  // Configure transporter (example: Gmail SMTP)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",   // replace with your email
      pass: "your-app-password"       // use an app password, not your real password
    }
  });

  // Send mail
  await transporter.sendMail({
    from: '"My App" <your-email@gmail.com>',
    to,
    subject: "Your Verification Code",
    text: `Your verification code is: ${code}`
  });
}

module.exports = sendVerificationEmail;