import Joi from "joi";
import joiErrorMessages from "../joiErrorMessages";

const recoverPassSchema = Joi.object({
  email: Joi.string().email().required().messages(joiErrorMessages),
});

export default recoverPassSchema;
