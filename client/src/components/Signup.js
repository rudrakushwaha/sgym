import React, { useState } from 'react'
// import "../img-login.svg"
// import img from "../assets/img/img-login.svg"
import img from "../assets/images/img-login.svg"

import { NavLink, useNavigate } from "react-router-dom"


const Signup = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  })

  let name, value;

  //storing data in a state
  const handleInputs = (e) => {
    // console.log(e)
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value })  //setting dynamic data name is just a variable
  }


  //sending data to backend /register
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;  //destrutring to get data instead of writing name=user.name etc. (similar for all fields)

    //if we write the full url then we get the core policy error but using only/register will give an error that localhost:300/register not found
    //  and it is obvious as /register page is in the backend which is localhost:5000 therefore to dhoka dena react we have added proxy in package.json file of client
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          name, email, phone, work, password, cpassword
        })
    })
    //  console.log(response)
    const data = await response.json()
    console.log(data)

    if (data.error === "enter full details") {
      alert("enter full details")
    } else if (data.error === "email already exist") {
      alert("Email entered already exist")
    } else if (data.error === "password are not matched") {
      alert("passwords are not matched")
    } else {
      alert("user registered successfully")
      navigate("/login")

    }

    //  if(data.status===422 || !data){
    //   window.alert("invalid registration")
    //   console.log("invalid registrtaion")
    //  }else{
    //   window.alert(" registration successful")
    //   console.log(" registrtaion successful")

    //   navigate("/login")
    //  }

  }

  // we have added the useSatw object to store the data of the user entered through form.initially we have taken value as an empty
  // and then added the handle input function to dynamically update the data in setUser hook
  return (
    <>
      <div class="login">
        <div class="login__content" >
          <div class="login__img">
            <img src={img} alt="" />
          </div>
          <div className="login__form">


            <form action="" method='POST' className="login__create register-form " id="login-up">
              <h1 className="login__title">Create Account</h1>

              <div className="login__box">
                <i className='bx bx-user login__icon'></i>
                <input type="text" name='name' id='name' autoComplete='off'
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Your Username" className="login__input" />
              </div>

              <div className="login__box">
                <i className='bx bx-at login__icon'></i>
                <input type="text" autoComplete='off' name='email' id='email'
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Your Email" className="login__input" />
              </div>

              <div className="login__box">
                {/* <i className='bx bx-user login__icon'></i> */}
                <i class='bx bx-phone login__icon'></i>
                <input type="number" autoComplete='off' name='phone' id='phone'
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Your Phone Number" className="login__input" />
              </div>
              {/* input:nu */}

              <div className="login__box">
                <i class='bx bx-briefcase login__icon'></i>
                <input type="text" autoComplete='off' name='work' id='work'
                  value={user.work}
                  onChange={handleInputs}
                  placeholder="Your Profession" className="login__input" />
              </div>

              <div className="login__box">
                <i className='bx bx-lock-alt login__icon'></i>
                <input type="password" autoComplete='off' name='password' id='password'
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Your Password" className="login__input" />
              </div>

              <div className="login__box">
                <i className='bx bx-lock-alt login__icon'></i>
                <input type="password" autoComplete='off' name='cpassword' id='cpassword'
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm your Password" className="login__input" />
              </div>


              <button type="submit" name='signup' id='signup' className="login__button" value="register" onClick={postData}> Sign Up</button>

              <div>
                <span className="login__account">Already have an Account ?</span>
                {/* <span className="login__signup" id="sign-in"> <a href="/login">Sign In</a> </span> */}
                <NavLink to="/login" className="login__signup" id="sign-in">Sign In</NavLink>
              </div>

            </form>
          </div>
        </div>
      </div>
      {/* <h1>hello</h1> */}
    </>
  )
}

export default Signup