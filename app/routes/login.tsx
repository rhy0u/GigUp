import { useActionData } from "@remix-run/react";
import { login, createUserSession } from "~/utils/session.server";
import type { ActionArgs } from "@remix-run/node";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const password = form.get("password")?.toString();
  const username = form.get("username")?.toString();
  console.log({ password, username });

  if (username === undefined || password === undefined) return null;

  const user = await login({ password, username });

  if (!user) return null;

  return createUserSession(user.id, "");
}

export default function LoginPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      Login
      <form method="post">
        <div>
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            id="username-input"
            name="username"
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="pasword-input">Password</label>
          <input
            type="password"
            id="password-input"
            name="password"
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
