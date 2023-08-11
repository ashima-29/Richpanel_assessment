import React from "react";
import './Sign.css';
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {
            console.log("login: " + res.data);
            if(res.data.Status === "Success") {
                if(res.data.role === "admin") {
                    navigate('/dashboard')
                } else {
                    navigate('/')
                }
            }
        }).catch(err => console.log(err))
    }
         
    return (
        <div class="box">
            <p class="cr">Login to your account</p>
            <form onSubmit={handleSubmit}>
                <div class="input-main">
                    <label htmlFor="name">Email</label>
                        <br></br>
                    <input type="email" placeholder="Enter Email" autocomplete="off" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="input-main">
                    <label htmlFor="name">
                        Password
                    </label>
                        <br></br>
                    <input type="password" placeholder="Enter Password" autocomplete="off" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                        <label><input type="checkbox"/>Remember Me</label>
                        <br></br>
            </form>
                <button class="s" type="submit" >Login </button>
            <p class ="ll">New to MyApp? <Link to="/register">Sign up</Link></p>
        </div>
    )
}
    export default Login