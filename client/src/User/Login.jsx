import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link }  from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { Auth } from "../SvgImage/Auth";
import { Footer } from "../Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Login() {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:4000/api/login', { email:email, password:password });
            if(response.data==="Incorrect Password"){
                toast.error("Incorrect Password");
            }
            else if(response.data==="Please Register"){
                toast.error("Please Register");
            }
            else if(response.data==="success"){
                toast.success("Logined");
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
                            <h4>Login</h4>
                            <form class="row g-3" onSubmit={handleSubmit} >
                                <div class="col-md-8">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control"  onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="col-md-8">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                    <button class="btn btn-outline-secondary" ><Link class="nav-link" to="../User/register">New User</Link></button>
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

export default Login;