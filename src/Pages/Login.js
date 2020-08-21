import React from 'react'
import Layout from '../Components/Layout'

export default function Login() {
    return (
        <Layout>
            <section class="contact-inner-banner contact-us-banner">
                <div class="container col-md-3">
                    <div class="inner-text-main animate-top">
                        <h2 >Login</h2>
                    </div>
                    <div class="white-box-no-animate p-20">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            <a href="#" class="float-right">Forgot Password?</a>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign In</button>
                        <div class="mt-4">
                            Need an account? <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>
            <br />
        </Layout>
    )
}
