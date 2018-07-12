import React, {Component} from 'react';
import './Chapters.css';

class Chapters extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            chapterNum: 0,
            description: '',
            input: '',
            chapArray: []
        }

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