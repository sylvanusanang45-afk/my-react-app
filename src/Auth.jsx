import { useState } from "react";
import { supabase } from "./supabase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
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
        setMessage("Account created successfully. Now switch to Login.");
      }
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h1>{login ? "Login" : "Create Account"}</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleAuth}>
          {login ? "Login" : "Sign Up"}
        </button>

        {message && <p>{message}</p>}

        <button
          className="auth-switch"
          onClick={() => {
            setLogin(!login);
            setMessage("");
          }}
        >
          {login
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </button>

      </div>
    </div>
  );
}

export default Auth;