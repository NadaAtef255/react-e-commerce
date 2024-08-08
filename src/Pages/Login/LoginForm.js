import { useState } from "react";
import MyTitle from "../../Component/MyTitle";
import { Link } from "react-router-dom";

function LoginForm() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",

    passwordError: "",
  });

  const handleForm = (e) => {
    if (e.target.name === "name") {
      setDetails({
        ...details,
        name: e.target.value,
      });
      setErrors({
        ...errors,
        nameError:
          e.target.value.length === 0
            ? "Please, this field is required"
            : e.target.value.length < 5
            ? "Enter Valid Name"
            : "",
      });
    } else if (e.target.name === "email") {
      setDetails({
        ...details,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        emailError: !new RegExp(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        ).test(e.target.value)
          ? "Enter valid Email"
          : "",
      });
    } else if (e.target.name === "password") {
      setDetails({
        ...details,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordError:
          e.target.value.length === 0
            ? "Please, this field is required"
            : !new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/).test(
                e.target.value
              )
            ? "Enter Valid Password"
            : "",
      });
    }
  };
  const HandleSubmit = (e) => {
    if (!errors.nameError && !errors.emailError && !errors.passwordError) {
      e.preventDefault();
    }
  };

  return (
    <>
      <MyTitle head="Login Form" myColor="red" />
      <form onSubmit={(e) => HandleSubmit(e)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${errors.nameError && "border-danger"}`}
            name="name"
            value={details.name}
            onChange={(e) => handleForm(e)}
          />
          <label htmlFor="nameInput">Name</label>

          {errors.nameError && (
            <p className="text-danger">{errors.nameError}</p>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className={`form-control ${errors.emailError && "border-danger"}`}
            name="email"
            value={details.email}
            onChange={(e) => handleForm(e)}
          />
          <label htmlFor="emailInput">Email</label>
          {errors.emailError && (
            <p className="text-danger">{errors.emailError}</p>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className={`form-control ${
              errors.passwordError && "border-danger"
            }`}
            name="password"
            value={details.password}
            onChange={(e) => handleForm(e)}
          />
          <label htmlFor="passwordInput">Password</label>

          {errors.passwordError && (
            <p className="text-danger">{errors.passwordError}</p>
          )}
        </div>

        <button
          disabled={
            errors.nameError || errors.emailError || errors.passwordError
          }
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>

        <button type="submit" className="btn btn-danger">
          <Link className="nav-link active" aria-current="page" to="/register">
            Register
          </Link>
        </button>
      </form>
    </>
  );
}

export default LoginForm;
