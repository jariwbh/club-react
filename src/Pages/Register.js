import React from 'react'
import Layout from '../Components/Layout'

function Register() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container col-md-3">
                    <div className="inner-text-main animate-top">
                        <h2 >Register</h2>
                    </div>
                    <div className="white-box-no-animate p-20">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Surname </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Date Of Birth </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Contact No </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">I AGREE TO THE SITE'S TERMS AND CONDITIONS & PRIVACY POLICY.</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Register
