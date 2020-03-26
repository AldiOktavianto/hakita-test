import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
    render() {
        return(
            <div className="mt4">

                <div className="titlebar">
                    <div className="pv4">
                        <div className="page-container">
                            <h1 className="white f60 ma0">Sign In</h1>
                        </div>
                    </div>
                </div>

                <div className="pt5">
                    <div className="page-container form400">
                        <form>
                            <div className="flex flex-column mb3">
                                <label className="mb2">Email</label>
                                <input className="f14 input-form br3" type="text" />
                            </div>

                            <div className="flex flex-column mb3">
                                <label className="mb2">Password</label>
                                <input className="f14 input-form br3" type="password" />
                            </div>

                            <div className="mb2"><a className="f14">Forgot password?</a></div>
                            <button className="w-100 white pv3 ph3 bg-blue2 ba border-color-blue2 br3">Sign In</button>
                        </form>
                        <div className="center w-100 border-color-grey2 border-bottom mb4 mt4"></div>
                        <div className="tc">
                            <h3 className="f18">Don’t have an account ? <Link className="no-underline blue2" to="signup">Sign up</Link></h3>
                        </div>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default Login;