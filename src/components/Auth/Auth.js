// const Blur = require('react-blur').default;

import React, {Component} from 'react';
import axios from 'axios';
import Blur from 'react-blur';
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
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    render() {
        return(
            <section>
                <Blur className="Body" id='body' img={this.state.img} blurRadius={200}>
                    <div className="Header-Auth" id="Auth">
                        <h1 className='auth-title'>idigyo / Words</h1>
                        <div className="button-box">
                            <button id="darkbuttons" onClick={this.login}> Login </button>
                        </div>
                    </div>
                </Blur>
            </section>
        )
    }
}

export default Auth;

// import { connect } from 'react-redux';
// import { updateUser } from './../../dux/reducer';

// constructor(props) {
//     super(props);

//     this.state = {
//         username: '',
//         password: ''
//     }
    
//     this.login = this.login.bind(this);
//     this.signup = this.signup.bind(this);

// }

    // handleChange(prop, val) {
    //     if(val.length < 20) {
    //         this.setState({
    //             [prop]: val
    //         })
    //     }
    // }

    // login() {
    //     axios.post('/api/auth/login', this.state)
    //     .then(res => {
    //         if( res.data === "valid" ) {
    //             this.props.updateUser(res.data);
    //             this.props.history.push('/home');
    //         }
    //         else {
    //             alert( "username and password do not match" )
    //         }
    //     })
    //     .catch(err => console.log(err))
    // }

    // signup() {
    //     axios.post('/api/auth/signup', this.state)
    //     .then(res => {
    //         this.props.updateUser(res.data);
    //         this.props.history.push('/home');
    //     })
    // }

//     render() {
//         return(

//         <div className="Body" id='body'>
        
//             <div className="Header-Auth" id="Auth">
//                 <h1 className='auth-title'>idigyo / Words</h1>
//                 <div className='auth-input'>
//                     <input placeholder="Username:" value={this.state.username} onChange={e => this.handleChange('username', e.target.value)}/>
//                 </div>
//                 <div className='auth-input'>
//                     <input placeholder="Password" value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)}/>
//                 </div>
//                 <div className="button-box">
//                     <button id="darkbuttons" onClick={this.login}> Login </button>
//                     <button id="darkbuttons" onClick={this.signup}> Sign Up </button>
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }