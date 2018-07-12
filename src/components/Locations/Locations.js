import React, {Component} from 'react';
import './Locations.css';

class Locations extends Component {
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
            <div className="Header" id="Locations">
                Locations
            </div>  

            <button className='add-button'>+</button>
        </div>
        )
    }
}

export default Locations;