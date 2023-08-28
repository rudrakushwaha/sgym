import React, { useState, useContext } from 'react'
import img from "../assets/images/img-login.svg"
import { useNavigate } from "react-router-dom"
import { UserContext } from '../App'

const Login = () => {
    const {state,dispatch} = useContext(UserContext)
    
        // const context = useContext(UserContext)

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const loginUser = async (e) => {
        e.preventDefault()

        const response = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    email,
                    password
                })
        })

        console.log(response)
        const data = await response.json()

        if (data.error === "please fill the data") {
            alert("INVALID CREDENTIALS")
        } else if (data.error === "INAVLID CREDENTIALS") {
            alert("Invalid credentials")
        } else {
            dispatch({ type: "USER", payload: true })   //payload -->extra message
            alert("Login Successful")
            navigate("/")
        }



        // if(data.status===400 || !data){
        //   window.alert("Invalid Credentials")

        // }else{
        //   dispatch({type:"USER",payload:true})   //payload -->extra message
        //   window.alert("Login Successful")
        //   navigate("/")
        // }
    }

    return (
        <>
            <div class="login">
                <div class="login__content" >
                    <div class="login__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="login__form">


                        <form action="" method='POST' class="login__registre" id="login-in">
                            <h1 class="login__title">Sign In</h1>

                            <div className="login__box">
                                <i className='bx bx-at login__icon'></i>
                                <input type="text" name='email' id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Your Email" className="login__input" />
                            </div>

                            <div class="login__box">
                                <i class='bx bx-lock-alt login__icon'></i>
                                <input type="password" name='passowrd' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" class="login__input" />
                            </div>

                            {/* <a href="#" class="login__forgot">Forgot password?</a> */}

                            {/* <a href="user" class="login__button">Sign In</a> */}
                            <button type="submit" className='login__button' name='signin' id='signin' onClick={loginUser}>Sign In</button>

                            <div>
                                <span class="login__account">Don't have an Account ?</span>
                                <span class="login__signin" id="sign-up">Sign Up</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login