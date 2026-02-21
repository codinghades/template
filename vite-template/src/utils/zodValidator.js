import { loginSchema } from './schemas';
import { validateFormWithZod } from './utils/zodValidator';

const handleSubmit = async (values) => {
  try {
    const validatedData = await validateFormWithZod(loginSchema, values);
    // Use validated data
  } catch (error) {
    // Handle validation errors
  }
};