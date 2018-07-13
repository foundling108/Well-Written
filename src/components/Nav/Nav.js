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
        axios.get('/api/auth/logout')
        .then( ()=>{
            this.props.history.push('/');
        })
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
                

                    <ul id="menu">
                            <div className="title">
                                Well-Written
                            </div>
                        <span></span>
                        <Link to='/home'><a id="hom"><li>HOME</li></a></Link>
                        <span></span>
                        <Link to='/chapters'><a id="chap"><li>CHAPTERS</li></a></Link>
                        <Link to='/progress'><a id="pro"><li>PROGRESS</li></a></Link>
                        <Link to='/characters'><a id="char"><li>CHARACTERS</li></a></Link>
                        <Link to='/locations'><a id="loc"><li>LOCATIONS</li></a></Link>
                        <span></span>
                        <a id="logout"><li onClick={this.logout}>LOGOUT</li></a>
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