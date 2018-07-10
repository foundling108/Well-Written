import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { logout } from './../../dux/reducer';

import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        axios.post('/api/auth/logout')
        .then(res => {
            this(res => this.props.logout())
        })
    }

    render() {
        if (this.props.location.pathname !== '/') {

            return(
                
                <nav role="navigation">

                <div id="menuToggle">

                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>
                

                    <ul id="menu">
                            <div className="title">
                                Well-Written
                            </div>
                        <span></span>
                        <Link to='/home'><a href="#" id="hom"><li>HOME</li></a></Link>
                        <span></span>
                        <Link to='/chapters'><a href="#" id="chap"><li>CHAPTERS</li></a></Link>
                        <Link to='/progress'><a href="#" id="pro"><li>PROGRESS</li></a></Link>
                        <Link to='/characters'><a href="#" id="char"><li>CHARACTERS</li></a></Link>
                        <Link to='/locations'><a href="#" id="loc"><li>LOCATIONS</li></a></Link>
                        <span></span>
                        <Link to='/'><a href="#" id="logout"><li>LOGOUT</li></a></Link>
                    </ul>
              </div>
            </nav>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return state;
}

    export default withRouter(connect(mapStateToProps, {logout}) (Nav));