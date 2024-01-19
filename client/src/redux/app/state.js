export const selectUser = (state) => state.user;

export const selectFunctionality = (state) => state.functionality;

export const selectRecipient = (state) => state.recipients;

export const selectMail = (state) => state.mail;

export const selectTemplate = (state) => state.templates;

export const selectRecipientById = (state, recipientId) =>
  state.recipients.recipients.find(
    (recipient) => recipient._id === recipientId
  );
  
export const selectTemplateById = (state, templateId) =>
  state.templates.templates.find((template) => template._id === templateId);
