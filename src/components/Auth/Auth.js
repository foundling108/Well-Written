import React, {Component} from 'react';
import './Auth.css';

class Auth extends Component {
    


    render() {
        return(

        <div className="Body">
            
            <div className="Header" id="Auth">
                <p>USERNAME:</p>
                    <input type="text"/>
                <p>PASSWORD:</p>
                    <input type="text"/>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
        )
    }
}

export default Auth;