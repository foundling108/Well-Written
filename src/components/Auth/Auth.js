import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
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

    // newUser = () => {
    //     let {username, password} = this.state;
    //     axios.get('/api/auth/get_users')
    //         .then(usernames => {
    //             let nameArray = usernames.data.map(val => {
    //                 return val.username
    //             })
    //             //Check to see if username already exists in the database
    //             if(nameArray.indexOf(username) === -1){
    //                 axios.post('/api/auth/create_user', {username: username, password: password})
    //                     .then( () => {
    //                         //Set the username and password fields to be blank
    //                         this.setState({
    //                         username: '',
    //                         password: ''
    //                         })
    //                     })
    //                     .catch(err => {
    //                         console.log("Unable to create new user.",err)
    //                     });
    //             }  else{
    //                 alert("This username is already taken.")
    //             }
    //         })
    //         .catch(err => {
    //             console.log("Unable to access username info.", err)
    //         })
    // }

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
            if( res.data === "valid" ) {
                this.props.updateUser(res.data);
                this.props.history.push('/home');
            }
            else {
                alert( "username and password do not match" )
            }
        })
        .catch(err => console.log(err))
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
                <h1 className='auth-title'>idigyo / Words</h1>
                <div className='auth-input'>
                    <input placeholder="Username:" value={this.state.username} onChange={e => this.handleChange('username', e.target.value)}/>
                </div>
                <div className='auth-input'>
                    <input placeholder="Password" value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)}/>
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