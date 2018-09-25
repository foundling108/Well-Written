import React, {Component} from 'react';
import axios from 'axios';
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
        this.createCard = this.createCard.bind(this);
        this.getCards = this.getCards.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    // componentDidMount() {
    //     this.getCards();
    // }

    getCards() {
        console.log('get cards')
        axios.get('/api/cards/getloc')
        .then(res => {
            this.setState({
                cardArray: res.data
            })
        })
    }

    createCard() {
        axios.post('/api/cards/createLoc')
        .then( (res) => {
            this.setState({
                cardArray: res.data
            })
        } )
    }

    editCard(loc_id) {
        const { name, description } = this.state
        axios.put('/api/cards/updateLoc', {loc_id, name, description})
        .then( (res) => {
            this.setState({
                cardArray: res.data,
                name: '',
                description: ''
            })
        })
    }

    deleteCard(id) {
        console.log('id ', id)
        axios.delete(`/api/cards/deleteLoc/${id}`)
        .then( res => this.setState({
            cardArray: res.data
        }) );
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

            <div className="location-body">
            <div className="location-header">
                Locations
            </div>  

                <section className='cards'>
                  

                    
                </section>

            <button className='addButton' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Locations;