// import { Button } from "bootstrap";
import { Component } from "react";
//import { Link } from 'react-router';
//import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
// import { Glyphicon } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook, AiFillCopyrightCircle } from 'react-icons/ai';
import cell from '../../Asset/images/cell.png';
import eye from '../../Asset/images/eye.png';
import Fb from '../../Asset/images/Fb.png'
import Google from '../../Asset/images/Google.png'
import { BsEyeSlash } from 'react-icons/bs';
// import Cell1 from '../Asset/images/Cell1.png';


const validEmailMail =(expression)=>{
    const regEp=/^([a-zA-Z0-9]{3,})@([a-z]+)\.([a-z]{2,5})$/
    if(regEp.test(expression)){
        return true;
    }
    return false;
 }


class Form extends Component {
    state = {
        error:{
            email:'',
            password:''
        },
        totalError:null,
        count: 2
    }
    handleChange = (event)=>{
        // console.log(event)
        const { name, value } = event.target;
        let errors= this.state.error
        switch (name){
            case "email":
                errors.email=validEmailMail(value)?"":"Email is invalid"
                console.log(value);
                break;
            case "password":
                errors.password= value.length<8?
                "Password should contains 8 characters":"";
                console.log(value);
                break;    
            default:
                break;    
        }
         this.setState({errors,[name]:value})
    }
    submitHandler =(event)=>{
        event.preventDefault();
        if(this.state.error.password.length === null ||  this.state.error.email.length === null ){
            this.setState({totalError:"Enter the Username and password"})
        }

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                    <header className="nav">
                        <div className="head container-fluid">
                            <span>Copyright<AiFillCopyrightCircle /> 1996-2021 YouShop Ltd. All rights reserved</span>
                            <span>Terms of Use - Privacy Policy - Link to Us</span>
                        </div>
                    </header>

                    <section className="landing_screen col-lg-12">
                        <div className="row h-100 mobile_view">
                            <div className=" mobile_img col-lg-6">
                                <div className="row">
                                    <img src={cell} alt="Phone" />
                                </div>
                            </div>


                            <div className="signin col-sm-6">
                                <div className="">
                                    <h3 className="welcome_back_size"><strong>Welcome Back !</strong></h3>
                                    <p className="online_size">Online Grocery Shopping</p><br />
                                    <form>
                                        <div className="form-group mb-4">
                                            <label className="Email_size" htmlFor="email"><strong>Email</strong></label><br></br>
                                            <input type="email"name="email" id="email" placeholder="Enter your email" onChange={this.handleChange} />
                                            {this.state.error.email.length>1?<span className="text-danger">{this.state.errors.email}</span>:""}
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="Password"><strong>Password</strong></label><br></br>
                                            <div className="position-relative">
                                                <input type="Password"name="password"id="Password" placeholder="Enter your password" className="password_place" onChange={this.handleChange}/>
                                                {this.state.error.password.length>1?<span className="text-danger">{this.state.errors.password}</span>:""}
                                                <img className="position-absolute eye_image" src={eye}/>
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">

                                            <div className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="row d-flex align-items-center">
                                                            <input type="checkbox" className="keep-signed" name="signed" />
                                                            <label for="signed" className="mb-0 keep_me_signed_color">&nbsp; Keep me signed</label>
                                                        </div>
                                                    </div>


                                                    <div className="col-sm-6">
                                                        <div className="row d-flex justify-content-end">
                                                            <a href="/forgotpassword">Forgot Password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <button className="button-1"> Sign In</button>
                                    <div className="signin-divider mt-4 d-flex">
                                        <span className="or_color">Or</span><hr />
                                    </div>
                                    <br></br>
                                    <div>
                                        <button className="button-2"><img src={Google} />&nbsp;&nbsp;&nbsp; Continue with Google</button>
                                    </div>
                                    <br></br>
                                    <div>
                                        <button className="button-2"><img src={Fb} />&nbsp; Continue with Facebook</button>
                                    </div>
                                    <br></br>
                                    <div>
                                        <p className="dont_have_an_account_size">Don't Have an Account? <a href="/SignUp"> Sign Up</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        );
    }
}

export default Form;



