import Paper from "@mui/material/Paper";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      Wecome to GigUp Login
      <Paper elevation={3}>
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
      </Paper>
    </div>
  );
}
