import { Schema } from "zod";

export function validateDTO(data: any, schema: Schema): ErrorType {
  try {
    const validatedData = schema.parse(data);
    return { valid: true, data: validatedData };
  } catch (error: any) {
    console.log(error);
    const formattedErrors = error.errors.map((err: any) => {
      return {
        path: err.path[0], message: err.message
      }
    });
    return { valid: false, errors: formattedErrors };
  }
}