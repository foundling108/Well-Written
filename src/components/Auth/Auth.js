import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateUser } from './../../dux/reducer';
import './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);

    }

    componentDidMount() {
        axios.get('/api/getUnsplash')
        .then( res => {
            let body = document.getElementById('body')
            body.style.background = `url(${res.data.urls.full})`
        })
    }

    handleChange(prop, val) {
        if(val.length < 20) {
            this.setState({
                [prop]: val
            })
        }
    }

    login() {
        axios.post('/api/auth/login', this.state)
        .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/home');
        })
    }

    signup() {
        axios.post('/api/auth/signup', this.state)
        .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/home');
        })
    }
    


    render() {
        return(

        <div className="Body" id='body'>
        
            <div className="Header-Auth" id="Auth">
                <h1 className='auth-title'>Well-Written</h1>
                <div className='auth-input'>
                    <p>Username:</p>
                    <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)}/>
                </div>
                <div className='auth-input'>
                    <p>Password:</p>
                    <input value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)}/>
                </div>
                <div className="button-box">
                    <button id="darkbuttons" onClick={this.login}> Login </button>
                    <button id="darkbuttons" onClick={this.signup}> Sign Up </button>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(null, { updateUser })(Auth);