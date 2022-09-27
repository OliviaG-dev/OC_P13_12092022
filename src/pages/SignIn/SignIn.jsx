import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { getUserLogin } from "../../utils/services";
import checkForm from "../../utils/checkForm";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateToken } from "../../features/userSlice";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkBoxRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await getUserLogin({
      email: values.email,
      password: values.password,
    });
    const token = result?.data.body.token;

    dispatch(updateToken({ token }));
    if (checkBoxRef.current.checked) {
      localStorage.setItem("token", token);
    }
    navigate("/profile");
  };

  useEffect(() => {
    setErrors(checkForm(values),2000);
  }, [values] );

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <>
      <main className="main bg__dark">
        <section className="signin">
          {<FontAwesomeIcon icon={faCircleUser} className="signin__icon" />}
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
            <div className="signin__wrapper">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                required
              ></input>
            </div>
            {errors.email && <p className="signin__errors">{errors.email}</p>}

            <div className="signin__wrapper">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                required
              ></input>
            </div>

            {errors.password && (
              <p className="signin__errors">{errors.password}</p>
            )}
            <div className="signin__remember">
              <input id="remember-me" type="checkbox" ref={checkBoxRef}></input>
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="signin__submit" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignIn;
