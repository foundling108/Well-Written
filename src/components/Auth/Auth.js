import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
    constructor() {
        super();



    }
    


    render() {
        return(

        <div className="Body">
            <div className="Header-Auth" id="Auth">
                Well-Written
                <div className="button-box">
                    <button id="darkbuttons"><Link id='logbutton' to='/home'>Login</Link></button>
                    <button id="darkbuttons">Sign Up</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Auth;