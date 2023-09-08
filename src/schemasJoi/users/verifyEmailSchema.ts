import Joi from "joi";
import joiErrorMessages from "../joiErrorMessages";

const verifyEmailSchema = Joi.object({
  code: Joi.string().length(64).required().messages(joiErrorMessages),
});

export default verifyEmailSchema;
