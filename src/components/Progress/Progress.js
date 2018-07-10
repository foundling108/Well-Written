import React, {Component} from 'react';
import './Progress.css';

class Progress extends Component {
    


    render() {
        return(

            <div className="Body">
            <div className="Header" id="Progress">
                Writing Progress  
            </div>

            <button className='add-button'>+</button>
        </div>
        )
    }
}

export default Progress;