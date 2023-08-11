import React from "react";
import './register.css';
import { useState } from "react";
import axios from 'axios'
import {Link, useNavigate } from "react-router-dom"

const Home = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {
            navigate('/login')
        }).catch(err => console.log(err))
    }
         
    return (
        <div class="form-box">
            <p class="cr">Create Account</p>
            <form onSubmit={handleSubmit}>
                <div class="input-main">
                    <label htmlFor="email">
                        Name
                        </label>
                        <br></br>
                        <input type="text" name="email" placeholder="Enter Name" autocomplete="off"  onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div class="input-main">
                    <label>
                        Email
                    </label>
                        <br></br>
                    <input type="email" placeholder="Enter Email" autocomplete="off" name="email" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div class="input-main">
                    <label >
                        Password
                    </label>
                        <br></br>
                    <input type="password" placeholder="Enter Password" autocomplete="off" name="password" onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                        <label><input type="checkbox"/>Remember Me</label>
                
                        <br></br>
                <button onClick={handleSubmit} class="sub" type="submit" >Register</button>
            </form>
            <p class="ll">Already have an acount?<Link to="/login">Login</Link></p>
        </div>
    )
}
    export default Home