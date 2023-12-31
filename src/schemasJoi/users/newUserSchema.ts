import Joi from "joi";
import joiErrorMessages from "../joiErrorMessages";
import { AuthUser } from "../../types/registerUserTypes";

const newUserSchema: Joi.ObjectSchema<AuthUser> = Joi.object({
  username: Joi.string().required().min(2).max(20).messages(joiErrorMessages),
  email: Joi.string().email().required().messages(joiErrorMessages),
  password: Joi.string()
    .min(8)
    .max(30)
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
    )
    .required()
    .messages(joiErrorMessages),
});

export default newUserSchema;
