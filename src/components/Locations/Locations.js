import React, {Component} from 'react';
import './Locations.css';

// import Cards from './../Cards/Cards';

class Locations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardArray: [],
            name: '',
            description: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }


    handleNameChange(prop, val) {
        if(val.length < 80) {
            this.setState({
                [prop]: val
            })
        }
    }

    handleDescriptionChange(prop, val) {
        if(val.length < 180) {
            this.setState({
                [prop]: val
            })
        }
    }


    render() {
        return(

            <div className="Body">
            <div className="Header" id="Locations">
                Locations
            </div>  

                <section className='cards'>

                <div className='component-cards'>
                    <div className='loc-card'>
                        <p>Name:</p>
                        <input value={this.state.name} onChange={e => this.handleNameChange('name', e.target.value)}/>
                    </div>
                    <div>
                        <h1 className='comp-card-title'>
                            Description:
                        </h1>
                            <p>
                                <input value={this.state.description} onChange={e => this.handleDescriptionChange('description', e.target.value)}/>
                            </p>
                    </div>
                    <div className='card-buttons'>
                        <button>edit location</button>
                        <button>delete location</button>
                    </div>
                </div>

                </section>

            <button className='add-button'>+</button>
        </div>
        )
    }
}

export default Locations;