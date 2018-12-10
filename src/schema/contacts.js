import Joi from 'joi';

const contactsSchema = {
  name: Joi.string()
    .min(3)
    .required(),
  phoneNumber: Joi.string()
    .max(3)
    .required(),
};

export default contactsSchema;
