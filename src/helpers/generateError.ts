const generateError = (message: string, status: number) => {
  const error = new Error(message) as CustomError;
  error.httpStatusCode = status;
  return error;
};

interface CustomError extends Error {
  httpStatusCode: number;
}

export { generateError, CustomError };
