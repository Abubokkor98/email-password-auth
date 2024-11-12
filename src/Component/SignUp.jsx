import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    // reset error message
    setErrorMessage("");
    // reset success message
    setSuccess(false);

    // terms validation
    if(!terms){
      setErrorMessage('Please accept our terms.');
      return;

    }

    // password validation
    if (password.length < 6) {
      setErrorMessage("Password should be 6 characters or longer");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "At least one uppercase, one lowercase, one especial character, one number"
      );
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    setSuccess(false);
  };
  return (
    <div className="w-6/12 mx-auto">
      <h1 className="text-4xl font-bold my-8">Sign-Up Now</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input type="checkbox" name="terms" className="checkbox checkbox-primary" />
                <span className="label-text ml-2">Remember me</span>
              </label>
            </div>
            <button className="btn btn-primary">Sign-Up</button>
          </div>
        </form>
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
        {success && <p className="text-green-700">Sign Up is successful</p>}
      </div>
    </div>
  );
}
