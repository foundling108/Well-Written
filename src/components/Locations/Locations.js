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

    componentDidMount() {
        this.getCards();
    }

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
        let cards = this.state.cardArray.map((el, i)=>(
            <Card 
            key={i}
            locations={el} 
            deleteCard={_=>this.deleteCard(el.loc_id)}
            editCard={_=>this.editCard(el.loc_id)}
            handleNameChange={this.handleNameChange}
            handleDescriptionChange={this.handleDescriptionChange}
            userName={this.state.name}
            userDescription={this.state.description}/>
        ))

        return(

            <div className="Body">
            <div className="Header" id="Locations">
                Locations
            </div>  

                <section className='cards'>
                  
                    {cards}
                    
                </section>

            <button className='add-button' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Locations;

function Card(props) {
    return(
        <div className='component-cards'>
        <div className='loc-card'>
            <p>Name:</p>
            <p>location id: {props.locations.loc_id}</p>
            <p className="cardFiller" >{props.locations.name}</p>
            <p className="cardFiller" >{props.locations.description}</p>
            <input className="inputBoxes" value={props.userName} onChange={e => props.handleNameChange('name', e.target.value)}/>
        </div>
        <div>
            <h1 className='comp-card-title'>
                Description:
            </h1>
                <p>
                    <input className="inputBoxes" value={props.userDescription} onChange={e => props.handleDescriptionChange('description', e.target.value)}/>
                </p>
        </div>
        <div className='card-buttons'>
            <button onClick={props.editCard}>edit location</button>
            <button onClick={props.deleteCard}>delete location</button>
        </div>
    </div>
    )
}