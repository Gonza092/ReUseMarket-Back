import joi from "joi";

import joiErrorMessages from "../joiErrorMessages";

import imgSchema from "../imgSchema";

const createItemSchema = joi.object({
  title: joi.string().required().max(50).messages(joiErrorMessages),
  category: joi
    .string()
    .valid(
      "electronic",
      "engine",
      "books",
      "clothes",
      "inmobilary",
      "sport",
      "House and garden",
      "other"
    )
    .required(),
  price: joi.number().required().messages(joiErrorMessages),
  description: joi.string().max(250).messages(joiErrorMessages),
  image: imgSchema.unknown(true).optional().messages(joiErrorMessages),
});

export default createItemSchema;
