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
        this.deleteCard = this.deleteCard.bind(this);
    }

    componentDidMount() {
        this.getCards();
    }

    getCards() {
        console.log('get cards')
        axios.get('/api/cards/getChap')
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

    editCard() {

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
            props={el} 
            deleteCard={_=>this.deleteCard(el.loc_id)}/>
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
            <input value={props.name} onChange={e => this.handleNameChange('name', e.target.value)}/>
        </div>
        <div>
            <h1 className='comp-card-title'>
                Description:
            </h1>
                <p>
                    <input value={props.description} onChange={e => this.handleDescriptionChange('description', e.target.value)}/>
                </p>
        </div>
        <div className='card-buttons'>s
            <button>edit location</button>
            <button onClick={props.deleteCard}>delete location</button>
        </div>
    </div>
    )
}