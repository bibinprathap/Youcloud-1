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
                    <section sytle={{ marginLeft: "30%" }}>
                        <div className="form_border">
                            <div className="">
                                <p className="recovery">Recover your password</p>
                                <p className="instruct">Enter your email and we will send you instructions to generate a new password </p>
                            </div><br/>
                            <form>
                                <div className="form-group form_email">
                                    <label htmlFor="Email"><strong>Email address</strong></label><br />
                                    <input className="form_input" type="email" id="Email" name="email" placeholder="resetpassword@gmail.com"></input>
                                </div>
                                <div>
                                    <button className="signin_func">Sign In</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/SignIn">Back to Log In</a>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Password;