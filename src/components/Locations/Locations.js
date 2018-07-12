import React, {Component} from 'react';
import './Locations.css';

import Cards from './../Cards/Cards';

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

            <div>
                {/* { Cards } */}
            </div>

            <button className='add-button'>+</button>
        </div>
        )
    }
}

export default Locations;