import React, { useState } from "react";

export default function AuthPage() {
  const [activeForm, setActiveForm] = useState("login");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [messages, setMessages] = useState({ login: "", signup: "" });

  // Switch between forms
  const switchForm = (form) => {
    setActiveForm(form);
    setMessages({ login: "", signup: "" });
  };

  // Handle Signup
  const signup = (e) => {
    e.preventDefault();
    const name = e.target.signupName.value.trim();
    const email = e.target.signupEmail.value.trim();
    const password = e.target.signupPassword.value.trim();

    if (name && email && password) {
      setSavedEmail(email);
      setSavedPassword(password);
      setMessages({ ...messages, signup: "Sign up successful!" });
    } else {
      setMessages({ ...messages, signup: "Invalid user!" });
    }
  };

  // Handle Login
  const login = (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value.trim();
    const password = e.target.loginPassword.value.trim();

    if (email === savedEmail && password === savedPassword) {
      setMessages({ ...messages, login: "Login successful!" });
      setTimeout(() => {
        window.location.href = "index.html"; // redirect
      }, 1200);
    } else {
      setMessages({ ...messages, login: "Invalid user!" });
    }
  };

  return (
    <div style={styles.body}>
      {/* Login Form */}
      {activeForm === "login" && (
        <div style={styles.container}>
          <h2>Login</h2>
          <form onSubmit={login}>
            <input type="email" name="loginEmail" placeholder="Email" />
            <input type="password" name="loginPassword" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <div
            style={{
              ...styles.message,
              color: messages.login.includes("success") ? "green" : "red",
            }}
          >
            {messages.login}
          </div>
          <div style={styles.links}>
            <a onClick={() => switchForm("signup")}>Sign Up</a> |{" "}
            <a onClick={() => switchForm("reset")}>Forgot Password?</a>
          </div>
        </div>
      )}

      {/* Signup Form */}
      {activeForm === "signup" && (
        <div style={styles.container}>
          <h2>Sign Up</h2>
          <form onSubmit={signup}>
            <input type="text" name="signupName" placeholder="Full Name" />
            <input type="email" name="signupEmail" placeholder="Email" />
            <input type="password" name="signupPassword" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
          <div
            style={{
              ...styles.message,
              color: messages.signup.includes("success") ? "green" : "red",
            }}
          >
            {messages.signup}
          </div>
          <div style={styles.links}>
            <a onClick={() => switchForm("login")}>Already have an account?</a>
          </div>
        </div>
      )}

      {/* Reset Form */}
      {activeForm === "reset" && (
        <div style={styles.container}>
          <h2>Reset Password</h2>
          <input type="email" placeholder="Enter your Email" />
          <button>Send Reset Link</button>
          <div style={styles.links}>
            <a onClick={() => switchForm("login")}>Back to Login</a>
          </div>
        </div>
      )}
    </div>
  );
}

// Inline CSS (same as your HTML <style>)
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
    background: "rgba(255,255,255,0.85)",
    padding: "25px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  message: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  links: {
    marginTop: "10px",
    cursor: "pointer",
    color: "#2575fc",
  },
};
