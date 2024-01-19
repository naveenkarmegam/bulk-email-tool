const Mail = require("../model/mail.model.js");
const { sendServerMail } = require("../helpers/sendMail.js");
const validateMongoDbId = require("../helpers/validateId.js");
const setError = require("../helpers/customError.js");

const sendBulkMail = async (req, res, next) => {
  try {
    const { recipients, subject, content } = req.body;
    await sendServerMail(recipients.join(","), subject, content);
    const newMail = new Mail({
      recipients: recipients,
      userId: req.user._id,
      subject,
      content,
    });
    await newMail.save();
    res.status(200).json({ message: "Your mail sent successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteInboxMail = async (req, res, next) => {
  try {
    console.log(req.params);
    const { mailId } = req.params;
    const validateId = validateMongoDbId(mailId);
    if (!validateId) {
      return next(setError(400, "Invalid Mail Id"));
    }
    const mail = await Mail.findById(mailId);

    if (!mail) {
      return next(setError(404, "Mail not found"));
    }

    const deletedMail = await Mail.findByIdAndDelete(mailId);

    res.status(200).json({ message: "Mail deleted successfully", deletedMail });
  } catch (error) {
    next(error);
  }
};

const getMailsByUser = async (req, res, next) => {
  try {
    const mails = await Mail.find({ userId: req.user._id });
    res.status(200).json(mails);
  } catch (error) {
    next(error);
  }
};

const getMailById = async (req, res, next) => {
  try {
    const { mailId } = req.params;
    const validateId = validateMongoDbId(mailId);
    if (!validateId) {
      return next(setError(400, "Invalid Mail Id"));
    }
    const mail = await Mail.findById(mailId);
    if (!mail) {
      return next(setError(404, "Mail not found"));
    }
    res.status(200).json(mail);
  } catch (error) {
    next(error);
  }
};

module.exports = { sendBulkMail, deleteInboxMail, getMailsByUser, getMailById };
