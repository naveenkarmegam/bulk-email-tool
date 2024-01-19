const setError = require("../helpers/customError.js");
const validateMongoDbId = require("../helpers/validateId.js");
const Template = require("../model/template.model.js");

const addTemplate = async (req, res, next) => {
  try {
    const { title, subject, content } = req.body;
    const template = new Template({
      title,
      subject,
      content,
      userId: req.user._id,
    });
    await template.save();
    res.status(201).json({
      message: "Template added successfully",
      template,
    });
  } catch (error) {
    next(error);
  }
};

const updateTemplate = async (req, res, next) => {
  try {
    const { templateId } = req.params;
    const validateId = validateMongoDbId(templateId);
    if (!validateId) {
      return next(setError(400, "Invalid Template Id"));
    }
    const findTemplate = await Template.findOne({ _id: templateId });
    if (!findTemplate) {
      return next(setError(404, "Template Not Found"));
    }
    const { title, subject, content } = req.body;
    const updatedTemplate = await Template.findByIdAndUpdate(
      templateId,
      {
        $set: {
          title,
          subject,
          content,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Template updated successfully",
      updatedTemplate,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTemplate = async (req, res, next) => {
  try {
    const { templateId } = req.params;
    const validateId = validateMongoDbId(templateId);
    if (!validateId) {
      return next(setError(400, "Invalid Template Id"));
    }
    const findTemplate = await Template.findOne({ _id: templateId });
    if (!findTemplate) {
      return next(setError(404, "Template Not Found"));
    }
    const deletedTemplate = await Template.findByIdAndDelete(templateId);
    res
      .status(200)
      .json({ message: "Template deleted successfully", deletedTemplate });
  } catch (error) {
    next(error);
  }
};
const getTemplateByUserId = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const findUserTemplate = await Template.find({ userId: _id });
    if (!findUserTemplate) {
      return next(setError(404, "Template Not Found"));
    }
    res.status(200).json(findUserTemplate);
  } catch (error) {
    next(error);
  }
};
const getTemplateById = async(req,res,next)=>{
    try {
        const {templateId}=req.params
        const validateId = validateMongoDbId(templateId)
        if(!validateId) {
            return next(setError(400, "Invalid Template Id"));
        }
        const findTemplate = await Template.findById(templateId)
        if(!findTemplate){
            return next(setError(404,'Template Not Found'))
        }
        res.status(200).json(findTemplate)
    } catch (error) {
        next(error)
    }
}
module.exports = {
  addTemplate,
  updateTemplate,
  deleteTemplate,
  getTemplateByUserId,
  getTemplateById
};
