import React, {Component} from 'react';
import './Characters.css';

import Cards from './../Cards/Cards';

class Characters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: ''
        }
    }


    render() {
        return(

            <div className="Body">
            <div className="Header" id="Characters">
                Characters  
            </div>

            <div>
                {/* { Cards } */}
            </div>

            <button className='add-button'>+</button>
        </div>
        )
    }
}

export default Characters;