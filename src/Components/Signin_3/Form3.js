import { Component } from 'react';
import './Form3.css';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import Nav from '../navigation/nav'

import Footer from '../Footer/footer'


// <span><AiFillCopyrightCircle/></span> 
// AiFillCopyrightCircle


const validEmailMail = (expression) => {
    const regEp = /^([a-zA-Z0-9]{3,})@([a-z]+)\.([a-z]{2,5})$/
    if (regEp.test(expression)) {
        return true;
    }
    return false;
}
class Form3 extends Component {
    state = {
        error: {
            email: '',
            password: ''
        },
        totalError: null,
        count: 2
    }
    handleChange = (event) => {
        //console.log(event)
        const { name, value } = event.target;
        let errors = this.state.error
        switch (name) {
            case "email":
                errors.email = validEmailMail(value) ? "" : "Email is invalid"
                break;
            case "password":
                errors.password = value.length < 8 ?
                    "Password should contains 8 characters" : "";
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value })
    }
    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.error.password.length === null || this.state.error.email.length === null) {
            this.setState({ totalError: "Enter the Username and password" })
        }

    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <Nav count={this.state.count} />
                    <div className="form_background">
                        <section>
                            <div className="form_border">
                                <p className="welcome">Welcome Back !</p>
                                <p className="stay">Stay signed in with your account to make searching easier</p><br />
                                <form>
                                    <div className="form-group mb-4">
                                        <label htmlFor="Email"><strong>Email</strong></label><br />
                                        <input type="email" name="email" id="Email" placeholder="Enter your email" onChange={this.handleChange} />
                                        {this.state.error.email.length > 1 ? <span className="text-danger">{this.state.errors.email}</span> : ""}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Password"><strong>Password</strong></label><br />
                                        <input type="password" name="password" id="Password" placeholder="Enter your password" onChange={this.handleChange} />
                                        {this.state.error.password.length > 1 ? <span className="text-danger">{this.state.errors.password}</span> : ""}
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="row d-flex align-items-center">
                                                        <input type="checkbox" className="keep-signed" name="signed" />
                                                        <label htmlFor="signed" className="mb-0">&nbsp; Keep me signed</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="row d-flex justify-content-end">
                                                        <a href="/Forgot Password">Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttonstyle">
                                        <button className="buttonstyle1" onClick={this.submitHandler}>Sign in</button>
                                    </div>
                                    <div>
                                        <span className="text-danger">{this.state.totalError !== null ? <span>{this.state.totalError}</span> : ""}</span>
                                    </div>
                                </form><br />
                                <div className="or">
                                    {/* <p>Or</p> */}
                                    <span>Or</span><hr />
                                </div>
                                <div className="mb-4 buttonstyle2">
                                    <button className="buttonstyle_google"><FcGoogle className="google_icon" />&nbsp;Continue with Google</button>
                                </div>
                                <div className="mb-4 buttonstyle2">
                                    <button className="buttonstyle_google"><AiFillFacebook className="google_icon" />&nbsp;Continue with Facebook</button>
                                </div>
                                <div className="newaccount">
                                    <p>Don't Have an Account?<a href="/Sign Up">&nbsp; Sign Up</a></p>
                                </div>
                            </div>
                        </section>
                        <footer>
                            <Footer />
                        </footer>
                    </div>
                </div>

            </div>
        );
    }
}

export default Form3;