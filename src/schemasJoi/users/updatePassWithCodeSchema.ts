import Joi from "joi";
import joiErrorMessages from "../joiErrorMessages";

const updatePassWithCodeSchema = Joi.object({
  recoverPassCode: Joi.string().required().messages(joiErrorMessages),
  password: Joi.string()
    .min(8)
    .max(30)
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
    )
    .required()
    .messages(joiErrorMessages),
});

export default updatePassWithCodeSchema;
