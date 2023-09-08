import Joi from "joi";
import joiErrorMessages from "../joiErrorMessages";

const loginUserSchema = Joi.object({
  username: Joi.string().required().messages(joiErrorMessages),
  password: Joi.string().max(30).required().messages(joiErrorMessages),
});

export default loginUserSchema;
