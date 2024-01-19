const setError = require("../helpers/customError.js");
const validateMongoDbId = require("../helpers/validateId.js");
const Recipient = require("../model/recipient.model.js");

const addRecipient = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    const existingEmail = await Recipient.findOne({ email });
    if (existingEmail) {
      return next(
        setError(400, "The recipients is already exits for this user")
      );
    }
    const recipient = new Recipient({
      firstName,
      lastName,
      email,
      userId: req.user._id,
    });

    await recipient.save();
    res
      .status(201)
      .json({ message: "Recipient added successfully", recipient });
  } catch (error) {
    next(error);
  }
};

const updateRecipient = async (req, res, next) => {
  try {
    const { recipientId } = req.params;
    const { firstName, lastName, email } = req.body;
    const validateId = validateMongoDbId(recipientId);
    if (!validateId) {
      return next(setError(400, "Invalid Recipient Id"));
    }
    const recipient = await Recipient.findById(recipientId);

    if (!recipient) {
      return next(setError(404, "Recipient not found"));
    }

    if (email && email !== recipient.email) {
      // Check if the new email already exists for the same user
      const existingRecipient = await Recipient.findOne({
        email,
        userId: req.user._id,
      });

      if (existingRecipient) {
        return next(
          setError(400, "The recipients already exists for this user")
        );
      }
    }

    const updatedRecipient = await Recipient.findByIdAndUpdate(
      recipientId,
      {
        $set: {
          firstName,
          lastName,
          email,
        },
      },
      {
        new: true,
      }
    );

    res
      .status(200)
      .json({ message: "Recipient updated successfully", updatedRecipient });
  } catch (error) {
    next(error);
  }
};

const deleteRecipient = async (req, res, next) => {
  try {
    const { recipientId } = req.params;
    const validateId = validateMongoDbId(recipientId);
    if (!validateId) {
      return next(setError(400, "Invalid Recipient Id"));
    }
    const recipient = await Recipient.findById(recipientId);

    if (!recipient) {
      return next(setError(404, "Recipient not found"));
    }

    const deletedRecipient = await Recipient.findByIdAndDelete(recipientId);

    res
      .status(200)
      .json({ message: "Recipient deleted successfully", deletedRecipient });
  } catch (error) {
    next(error);
  }
};

const getRecipientByUser = async (req, res, next) => {
  try {
    const recipients = await Recipient.find({ userId: req.user._id });
    res.status(200).json(recipients);
  } catch (error) {
    next(error);
  }
};
const getRecipientById = async (req, res, next) => {
  try {
    const { recipientId } = req.params;
    const validateId = validateMongoDbId(recipientId);
    if (!validateId) {
      return next(setError(400, "Invalid Recipient Id"));
    }
    const recipients = await Recipient.findById(recipientId);
    if (!recipients) {
      return next(setError(404, "Recipient not found"));
    }
    res.status(200).json(recipients);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addRecipient,
  updateRecipient,
  deleteRecipient,
  getRecipientByUser,
  getRecipientById,
};
