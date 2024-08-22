import { signup } from "./actions";

export function SignUpForm() {
  return (
    <form action={signup}>
      <input name="name" />
      <input name="email" />
      <input name="password" />

      <button type="submit">Sign up</button>
    </form>
  );
}
