import React, {Component} from 'react';
import './Characters.css';

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

            <button className='add-button'>+</button>
        </div>
        )
    }
}

export default Characters;