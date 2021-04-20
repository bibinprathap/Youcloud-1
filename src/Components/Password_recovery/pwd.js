import { Component } from 'react'
import './pwd.css';
import Nav from '../navigation/nav'
import Footer from '../Footer/footer'

class Password extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container-fluid pwd_recovery_form">
                    <section className="row align-items-center justify-content-center">
                    <div className=" col-12 col-md-8 col-xl-5">
                    <div className="form_border p-3 p-md-5">
                            <div className="">
                                <p className="recovery">Recover your password</p>
                                <p className="instruct">Enter your email and we will send you instructions to generate a new password </p>
                            </div><br/>
                            <form>
                                <div className="form-group form_email">
                                    <label htmlFor="Email"><strong>Email address</strong></label><br />
                                    <input className="form_input" type="email" id="Email" name="email" placeholder="resetpassword@gmail.com"></input>
                                </div>
                                <div className="d-flex justify-content-between align-items-center w-100 px-2 px-md-3 px-xl-5 flex-column flex-md-row">
                                    <button className="signin_func">Sign In</button><a className="text-info my-2" href="/SignIn">Back to Log In</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Password;