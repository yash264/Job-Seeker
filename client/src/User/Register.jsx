import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link }  from "react-router-dom";
import { Auth } from "../SvgImage/Auth";
import { Footer } from "../Components/Footer";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Register() {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:4000/api/register', { name:name, email:email, password:password });
            if(response.data==="Email Already Exists"){
                toast.error("Email Already Exists");
            }
            else if(response.data==="registered"){
                toast.success("registered");
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3">
                            <Auth />
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            <h4>Register</h4>
                            <form class="row g-3" onSubmit={handleSubmit} >
                                <div class="col-md-8">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control"  onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="col-md-8">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control"  onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="col-md-8">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Register</button>
                                    <button class="btn btn-outline-secondary" ><Link class="nav-link" to="../User/login">Already Registered</Link></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default Register;