import { useState } from "react";
import { supabase } from "./supabase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const [message, setMessage] = useState("");

  async function handleAuth() {
    setMessage("");

    if (login) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Account created successfully. You can now log in.");
        setLogin(true);
        setPassword("");
      }
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>{login ? "Welcome Back" : "Create Account"}</h1>

        <p className="auth-subtitle">
          {login
            ? "Log in to access your Sticky Wall tasks."
            : "Create an account to get started."}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAuth();
          }}
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {login ? "Login" : "Sign Up"}
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <div className="auth-switch-container">
          <span>
            {login
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>

          <button
            className="auth-switch"
            onClick={() => {
              setLogin(!login);
              setMessage("");
            }}
          >
            {login ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
