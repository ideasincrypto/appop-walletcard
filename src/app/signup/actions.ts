'use server'

import { SignupFormSchema } from '@/app/_lib/definitions'

export async function signup(state, formData) {
  // 1. Validate fields
  const validationResult = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  // 2. Create user

  // 3. Create session
}
