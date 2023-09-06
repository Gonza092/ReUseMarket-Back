import { ObjectSchema } from "joi";

const validateSchema = async (schema: ObjectSchema, data: string) => {
  try {
    await schema.validateAsync(data); // eslint-disable-next-line
  } catch (error: any) {
    error.httpStatus = 400;
    throw error;
  }
};

export default validateSchema;
