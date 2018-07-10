import React, {Component} from 'react';
import './Characters.css';

class Characters extends Component {
    


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