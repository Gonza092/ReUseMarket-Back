import { ObjectSchema } from "joi";

const validateSchema = async (schema: ObjectSchema, data: string | object) => {
  try {
    await schema.validateAsync(data); // eslint-disable-next-line
  } catch (error: any) {
    error.httpStatusCode = 400;
    throw error;
  }
};

export default validateSchema;
