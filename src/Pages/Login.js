import React from 'react'
import Layout from '../Components/Layout'
import { Link } from 'react-router-dom'

export default function Login() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container col-md-3">
                    <div className="inner-text-main animate-top">
                        <h2 >Login</h2>
                    </div>
                    <div className="white-box-no-animate p-20">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            <a href="#" className="float-right">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                        <div className="mt-4">
                            Need an account? <Link to="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
