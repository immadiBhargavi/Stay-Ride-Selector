import React, { useState } from "react";

const AuthPage = () => {
  const [form, setForm] = useState("login"); // "login", "signup", "reset"
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [msg, setMsg] = useState({ text: "", type: "" });

  // Inputs
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const switchForm = (target) => {
    setForm(target);
    setMsg({ text: "", type: "" });
  };

  const signup = () => {
    if (signupName && signupEmail && signupPassword) {
      setSavedEmail(signupEmail);
      setSavedPassword(signupPassword);
      setMsg({ text: "Sign up successful!", type: "success" });
    } else {
      setMsg({ text: "Invalid user!", type: "error" });
    }
  };

  const login = () => {
    if (loginEmail === savedEmail && loginPassword === savedPassword) {
      setMsg({ text: "Login successful!", type: "success" });
    } else {
      setMsg({ text: "Invalid user!", type: "error" });
    }
  };

  return (
    <div style={styles.body}>
      {/* LOGIN FORM */}
      {form === "login" && (
        <div style={styles.container}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={login} style={styles.button}>
            Login
          </button>
          {msg.text && (
            <div
              style={{
                ...styles.message,
                color: msg.type === "success" ? "green" : "red",
              }}
            >
              {msg.text}
            </div>
          )}
          <div style={styles.links}>
            <a onClick={() => switchForm("signup")} style={styles.link}>
              Sign Up
            </a>{" "}
            |{" "}
            <a onClick={() => switchForm("reset")} style={styles.link}>
              Forgot Password?
            </a>
          </div>
        </div>
      )}

      {/* SIGNUP FORM */}
      {form === "signup" && (
        <div style={styles.container}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={signup} style={styles.button}>
            Sign Up
          </button>
          {msg.text && (
            <div
              style={{
                ...styles.message,
                color: msg.type === "success" ? "green" : "red",
              }}
            >
              {msg.text}
            </div>
          )}
          <div style={styles.links}>
            <a onClick={() => switchForm("login")} style={styles.link}>
              Already have an account?
            </a>
          </div>
        </div>
      )}

      {/* RESET FORM */}
      {form === "reset" && (
        <div style={styles.container}>
          <h2>Reset Password</h2>
          <input type="email" placeholder="Enter your Email" style={styles.input} />
          <button style={styles.button}>Send Reset Link</button>
          <div style={styles.links}>
            <a onClick={() => switchForm("login")} style={styles.link}>
              Back to Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  body: {
    backgroundImage: `url("https://wallpapercave.com/wp/wp3598832.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    background: "rgba(255, 255, 255, 0.85)",
    padding: "25px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "8px",
    borderRadius: "5px",
    border: "none",
    background: "#2575fc",
    color: "white",
    cursor: "pointer",
  },
  links: {
    marginTop: "10px",
  },
  link: {
    cursor: "pointer",
    color: "#2575fc",
    textDecoration: "none",
  },
  message: {
    textAlign: "center",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default AuthPage;
