const Mail = require("../model/mail.model.js");
const Recipient = require("../model/recipient.model.js");
const User = require("../model/user.model.js");

const getDashboardInfo = async (userId) => {
  try {

    const totalMailCount = await Mail.countDocuments();
    const totalUserCount = await User.countDocuments();
    const totalRecipientsCount = await Recipient.countDocuments();
    const userMailCount = await Mail.countDocuments({ userId });
    const recipientCount = await Recipient.countDocuments({ userId });

    return {
      totalMailCount,
      totalUserCount,
      totalRecipientsCount,
      userMailCount,
      recipientCount,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = getDashboardInfo;
