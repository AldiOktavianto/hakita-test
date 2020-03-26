import React from 'react';
import { Link } from 'react-router';

class Signup extends React.Component {
    render() {
        return(
            <div className="mt4">

                <div className="titlebar">
                    <div className="pv4">
                        <div className="page-container">
                            <h1 className="white f60 ma0">Sign Up</h1>
                        </div>
                    </div>
                </div>

                <div className="pt5">
                    <div className="page-container form400">
                        <form>
                        <div className="flex flex-column mb3">
                                <label className="mb2">First name</label>
                                <input className="f14 input-form br3" type="text" />
                            </div>

                            <div className="flex flex-column mb3">
                                <label className="mb2">Last name</label>
                                <input className="f14 input-form br3" type="text" />
                            </div>

                            <div className="flex flex-column mb3">
                                <label className="mb2">Email</label>
                                <input className="f14 input-form br3" type="text" />
                            </div>

                            <div className="flex flex-column mb3">
                                <label className="mb2">Mobile number</label>
                                <input className="f14 input-form br3" type="text" />
                            </div>

                            <div className="flex flex-column mb3">
                                <label className="mb2">Password</label>
                                <input className="f14 input-form br3" type="password" />
                            </div>

                            <button className="w-100 white pv3 ph3 bg-blue2 ba border-color-blue2 br3">Register</button>
                            <div className="tc mt3">By registering, I agree with <a className="no-underline blue2">Terms & Conditions</a> and <a className="no-underline blue2">Privacy Policy</a> of Hakita.</div>
                            
                            <div className="center w-100 border-color-grey2 border-bottom mb4 mt4"></div>
                            <div className="tc">
                                <h3 className="f18">Already registered ? <Link className="no-underline blue2" to="signin">Login</Link></h3>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Signup;