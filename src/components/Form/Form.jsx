import React, { useRef } from "react";
import "./form.css";
import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
import axios  from 'axios';


export default function Form() {
  let nameRef = useRef();
  let emailRef =  useRef();
  let passwordRef = useRef();    
  let confirmPasswordRef = useRef();

  const form = document.getElementById('formulario')

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let data = {
        [nameRef.current.name]: nameRef.current.value,
        [emailRef.current.name]: emailRef.current.value,
        [passwordRef.current.name]: passwordRef.current.value,
        [confirmPasswordRef.current.name]: confirmPasswordRef.current.value
        
    }
    
    let url = 'http://localhost:8080/users'
    if(passwordRef.current.value === confirmPasswordRef.current.value){
    try {
        await axios.post(
            url,    
            data    
        )
        form.reset()
        alert("Successful registration")
    } catch(error) {
        console.log(error)
        console.log('ocurrio un error')
    }
}else{
  alert("Passwords do not match")
}

  }
  return (
    <div className="register-fondo">
      <div className="register">
        <Wellcome />
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <input ref={nameRef} type="text" name="name" id="name" required />
            <Image src="./form-img/profile.svg" />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input ref={emailRef} type="email" name="email" id="email" required />
            <Image src="./form-img/@.svg" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input ref={passwordRef} type="password" name="password" id="password" required/>
            <Image src="./form-img/lock1.svg" />
          </fieldset>
          <fieldset>
            <legend>Confirm Password</legend>
            <input ref={confirmPasswordRef} type="password" name="confirm-password" id="confirm-password" required/>
            <Image src="./form-img/lock1.svg" />
          </fieldset>
          <fieldset className="notification-check">
            <input type="checkbox" name="email-notification" id="email-notification"/>
            <label htmlFor="email-notification">
              Send notification to my email
            </label>
          </fieldset>
          <div>
            {" "}
            <input type="submit" value="Sing Up" className="sign-up"/>
          </div>
          <button className="sign-in-google"><Image src="./form-img/Google.svg" />
            <span>Sign in with Google</span></button>
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
