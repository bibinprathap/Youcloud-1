import { Component } from 'react';
import './Form2.css';
import cell from '../../Asset/images/cell.png';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
// import {Form, FormText} from 'react-bootstrap';
// import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import './Form2.css'
import eye from '../../Asset/images/eye.png';
import Fb from '../../Asset/images/Fb.png'
import Google from '../../Asset/images/Google.png'



const validEmailMail =(expression)=>{
    const regEp=/^([a-zA-Z0-9]{3,})@([a-z]+)\.([a-z]{2,5})$/
    if(regEp.test(expression)){
        return true;
    }
    return false;
 }


class Form2 extends Component {

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
                <div className="font_family_text">
                    <header className="nav-1 p-2">
                        <div className="head-1 container-fluid">
                            <span>Copyright @1996-2021 YouShop Ltd. All rights reserved</span>
                            <span>Terms of Use - Privacy Policy - Link to Us</span>                            
                        </div>
                    </header>

                    <section className="landing_screen-1 col-lg-12 px-4 px-sm-5">
                        <div className="row h-100 mobile_view_1">
                            <div className=" mobile_img-1 col-lg-6">
                                <div className="row">
                                    <img src={cell} alt="Phone" />
                                </div>
                            </div>


                            <div className="signin-1 p-4 p-md-5 col-sm-6">
                                <div className="">
                                    <h3 className="welcome_back"><strong>Welcome Back !</strong></h3>
                                    <p className="online">Online Grocery Shopping</p><br/>
                                    <form>
                                        <div className="form-group mb-4">
                                            <label htmlFor="email"><strong>Email</strong></label><br></br>
                                            <input type="email" name="email" id="email" placeholder="Enter your email" onChange={this.handleChange}/>
                                            {this.state.error.email.length>1?<span className="text-danger">{this.state.errors.email}</span>:""}
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="Password"><strong>Password</strong></label><br></br>
                                            <div className="position-relative">
                                                <input type="Password" name="password" id="Password" placeholder="Enter your password" className="password_place" onChange={this.handleChange} />
                                                {this.state.error.password.length>1?<span className="text-danger">{this.state.errors.password}</span>:""}
                                                <img className="position-absolute eye_image" src={eye}/>
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <div className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="row d-flex align-items-center">
                                                            <input type="checkbox" className="keep-signed-1" name="signed" />
                                                            <label for="signed" className="mb-0 keep_me_signed_font_color">&nbsp; Keep me signed</label>
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
                                    </form>
                                    <button className="button-1a"> Sign in</button>
                                    <div className="signin-divider mt-4 d-flex">
                                        <span className="or_font_color">Or</span><hr />
                                    </div>
                                    <br></br>
                                    <div>
                                        <button className="button-2a d-flex justify-content-between align-items-center w-100 px-2 px-md-5 flex-column flex-md-row"><img src={Google}/><div className="small d-md-none">Continue with Google</div><div className="d-none d-md-flex">Continue with Google</div></button>
                                    </div>
                                    <br></br>
                                    <div>
                                        <button className="button-2a d-flex justify-content-between align-items-center w-100 px-2 px-md-5 flex-column flex-md-row"><img src={Fb}/><div className="small d-md-none">Continue with Facebook</div><div className="d-none d-md-flex">Continue with Facebook</div></button>
                                    </div>
                                    <br></br>
                                    <div>
                                        <p className="dont_have_an_accountsize">Don't Have an Account? <a href="/Sign Up"> Sign Up</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                  </div>        
                </div>
            </div>
        );
    }
}

export default Form2;