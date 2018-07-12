import React, {Component} from 'react';
import './Progress.css';

import Cards from './../Cards/Cards';

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

            <div>
                {/* { Cards } */}
            </div>

            <button className='add-button'>+</button>
        </div>
        )
    }
}

export default Progress;