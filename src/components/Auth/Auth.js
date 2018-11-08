import React, {Component} from 'react';
import axios from 'axios';
// import Blur from 'react-blur';
import './Auth.css';

class Auth extends Component {
    constructor(props){
        super(props)

        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        axios.get('/api/getUnsplash')
        .then( res => {
            let body = document.getElementById('body')
            body.style.background = `url(${res.data.urls.full})`

            this.setState({
                img: body.style.background
            })
        })
    }
    
    login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;
        window.location = `http://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    render() {
        return(
            <section>
                    <div className="Header-Auth" id="Auth">
                        <h1 className='auth-title'>idigyo / Words</h1>
                        <div className="button-box">
                            <button id="darkbuttons" onClick={this.login}> Login </button>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Auth;