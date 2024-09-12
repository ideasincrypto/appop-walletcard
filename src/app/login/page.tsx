import { redirect } from "next/navigation";
import { getSession, login, logout } from "../lib";

export default async function Page() {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/acm2024");
        }}
      >
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="text-slate-500"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/login");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
