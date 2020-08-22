import React from 'react'
import Layout from '../Components/Layout'

function Register() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section class="common-block">
                <div class="container col-md-3">
                    <div class="inner-text-main animate-top">
                        <h2 >Register</h2>
                    </div>
                    <div class="white-box-no-animate p-20">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Surname </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Date Of Birth </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Contact No </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I AGREE TO THE SITE'S TERMS AND CONDITIONS & PRIVACY POLICY.</label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Register</button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Register
