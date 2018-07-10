import React, {Component} from 'react';
import './Chapters.css';

class Chapters extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return(

        <div className="Body">
            <div className="Header" id="Chapters">
                Chapters  
            </div>


                <button className='add-button'>+</button>

        </div>
        )
    }
}

export default Chapters;