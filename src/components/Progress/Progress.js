import React, {Component} from 'react';
import './Progress.css';

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logEntry: 0,
            date: '',
            wordCount: 0
        }
    }


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