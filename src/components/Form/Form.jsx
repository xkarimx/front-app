import React, { useRef } from "react";
import "./form.css";
import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
// import axios  from 'axios';

export default function Form() {

    let name = useRef();
    let email =  useRef();
    let password = useRef();    
    let confirm = useRef();

    function handleSubmit (event){
            event.preventDefault();
            console.log(name)
            console.log(email)
            console.log(password)
            console.log(confirm)
    }
    


  return (
    <div className="register-fondo">
      <div className="register">
        <Wellcome />
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <input ref={name} type="text" name="name" id="name" />
            <Image src="./form-img/profile.svg" />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input ref={email} type="email" name="email" id="email" />
            <Image src="./form-img/@.svg" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input ref={password} type="password" name="password" id="password" />
            <Image src="./form-img/lock1.svg" />
          </fieldset>
          <fieldset>
            <legend>Confirm Password</legend>
            <input
            ref={confirm}
              type="password"
              name="confirm-password"
              id="confirm-password"
            />
            <Image src="./form-img/lock1.svg" />
          </fieldset>
          <fieldset className="notification-check">
            <input
              type="checkbox"
              name="email-notification"
              id="email-notification"
            />
            <label htmlFor="email-notification">
              Send notification to my email
            </label>
          </fieldset>
          <div>
            {" "}
            <a href="#" className="sign-up">
              Sign up
            </a>
          </div>
          <a href="#" className="sign-in-google">
            <Image src="./form-img/Google.svg" />
            <span>Sign in with Google</span>
          </a>
          <p>
            Already have an account?{" "}
            <a href="#" className="link">
              Log in
            </a>
          </p>
          <p>
            Go back to{" "}
            <a href="#" className="link">
              home page
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
