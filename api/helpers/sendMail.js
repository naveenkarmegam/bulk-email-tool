const transporter = require("../config/nodemailer.js");

const sendServerMail = async (email,subject, content) => {
  try {
    await transporter.sendMail({
      from: 'noreply@iamnk.pro',
      to: email,
      subject,
      html: content,
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email. Sorry for, the inconvenience please try again after sometimes");
  }
};

module.exports = { sendServerMail };
