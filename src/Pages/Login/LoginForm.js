import React, { useContext, useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./LoginForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Context, UserContext } from "../../Context/UserContext";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setsuccess] = useState("");
  const history = useHistory();
  let { setUserData } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setsuccess("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const crruntUser = userCredential.user;
      const idToken = await crruntUser.getIdToken();
      localStorage.setItem("userToken", idToken);
      history.push("/");
      setUserData(crruntUser);
      setsuccess("Login successfule");
      toast("Welcome");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email"
          type="email"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          required
          id="password"
          type="password"
          value={password}
        />
        <button type="submit" className="btn-color">
          Sign In
        </button>
      </form>
      {error.message && <h1 className="error-message">{error.message}</h1>}
    </>
  );
}
