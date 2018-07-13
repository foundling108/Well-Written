import React, {Component} from 'react';
import axios from 'axios';
import './Characters.css';

// import Cards from './../Cards/Cards';

class Characters extends Component {
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

    componentDidMount() {
        //database call based on user to verify whether or not the user has created a card, then mounts whatever was found. 
        //or returns null, meaning no card is mounted, leveing the componet page empty.
        axios.get('/api/card/getCards')


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
            <div className="Header" id="Characters">
                Characters  
            </div>

                <section className='cards'>
                    {this.state.cardArray.length
                ? <div className='component-cards'>
                    <div className='char-card'>
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
                        <button>edit character</button>
                        <button>delete character</button>
                    </div>
                </div> : null
                    }
                </section>

            <button className='add-button'>+</button>
        </div>
        )
    }
}

export default Characters;