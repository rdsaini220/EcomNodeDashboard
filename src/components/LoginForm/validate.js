import Joi from 'joi';

const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}')).required()
}).required();

export default loginSchema;