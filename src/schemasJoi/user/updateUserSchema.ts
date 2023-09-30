import Joi from "joi";
import joiErrorMessages from "../joiErrorMessages";

const updateUserSchema = Joi.object({
  newUsername: Joi.string().min(2).max(20).messages(joiErrorMessages),
  oldPassword: Joi.string().min(8).max(30).when("newPassword", {
    is: Joi.exist(),
    then: Joi.required(),
    otherwise: Joi.optional(),
  }),
  newPassword: Joi.string()
    .min(8)
    .max(30)
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
    )
    .messages(joiErrorMessages),
  repeatPassword: Joi.valid(Joi.ref("newPassword")).when("newPassword", {
    is: Joi.exist(),
    then: Joi.required(),
    otherwise: Joi.optional(),
  }),
  newBio: Joi.string().min(4),
});

export default updateUserSchema;
