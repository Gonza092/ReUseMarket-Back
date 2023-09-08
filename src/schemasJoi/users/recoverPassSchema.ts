import Joi from "joi";
import joiErrorMessages from "../joiErrorMessages";
import { AuthUser } from "../../types/registerUserTypes";

const recoverPassSchema: Joi.ObjectSchema<AuthUser> = Joi.object({
  email: Joi.string().email().required().messages(joiErrorMessages),
});

export default recoverPassSchema;
