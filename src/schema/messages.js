import Joi from 'joi';

const messagesSchema = {
  senderId: Joi.string()
    .min(3)
    .required(),
  receiverId: Joi.string().required(),
  message: Joi.string().required(),
};

export default messagesSchema;
