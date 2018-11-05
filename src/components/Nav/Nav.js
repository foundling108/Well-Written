import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        axios.post('/auth/logout')
        .then( ()=>{
            this.props.history.push('/');
        })
        }

        toHome = () => {
            this.props.history.push('/home')
        }

        toProgress = () => {
            this.props.history.push('/progress')
        }
    
        toChapters = () => {
            this.props.history.push('/chapters')
        }
    
        toCharacters = () => {
            this.props.history.push('/characters')
        }
    
        toLocations = () => {
            this.props.history.push('/locations')
        }
    

    render() {
        if (this.props.location.pathname !== '/') {

            return(
                
                <nav>

                <div id="menuToggle">

                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>
                

                    <ul className="menu">
                            <div className="nav-title">
                                Words
                            </div>
                        <li id='nav-home' onClick={this.toHome}>HOME</li>
                        <hr className='span-span'></hr>
                        <li id="pro" onClick={this.toProgress}>PROGRESS</li>
                        <li>TIMELINE</li>
                        <li id="chap" onClick={this.toChapters}>CHAPTERS</li>
                        <li id="char" onClick={this.toCharacters}>CHARACTERS</li>
                        <li id="loc" onClick={this.toLocations}>LOCATIONS</li>
                        <li>NOTES</li>
                        <hr className='span-span'></hr>
                        <li>CREDITS</li>
                        <li id="logout" onClick={this.logout}>LOGOUT</li>
                        <li>GO PREMIUM</li>
                    </ul>
              </div>
            </nav>
            )
        } else {
            return null
        }
    }
}

    export default withRouter(Nav);