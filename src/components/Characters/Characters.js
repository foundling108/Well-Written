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
        this.createCard = this.createCard.bind(this);
        this.getCards = this.getCards.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    componentDidMount() {
        this.getCards();
    }

    getCards() {
        axios.get('/api/cards/getChar')
        .then(res => {
            this.setState({
                cardArray: res.data
            })
        })
    }

    createCard() {
        axios.post('/api/cards/createChar')
        .then( (res) => {
            this.setState({
                cardArray: res.data
            })
        } )
    }

    editCard(char_id) {
        const { name, description } = this.state
        axios.put('/api/cards/updateChar', {char_id, name, description})
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
        axios.delete(`/api/cards/deleteChar/${id}`)
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
            character={el}
            deleteCard={_=>this.deleteCard(el.char_id)}
            editCard={_=>this.editCard(el.char_id)}
            handleNameChange={this.handleNameChange}
            handleDescriptionChange={this.handleDescriptionChange}
            userName={this.state.name}
            userDescription={this.state.description}/>
        ))

        return(

            <div className="Body">
            <div className="Header" id="Characters">
                Characters  
            </div>

                <section className='cards'>

                    {cards}
                    
                </section>

            <button className='add-button' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Characters;

function Card(props) {
    return(
        <div className='component-cards'>
        <div className='char-card'>
                <input placeholder="Character Name:" className="inputBoxes" value={props.userName} onChange={e => props.handleNameChange('name', e.target.value)}/>
                <textarea placeholder="describe them" name="text-input" id="chapter-text" cols="30" rows="2" value={props.userInput} onChange={e => props.handleDescriptionChange('description', e.target.value)}></textarea>
            <div className="cardFiller">
                <p>Character Name: {props.character.name}</p>
                <p id="description-value">{props.character.description}</p>
            </div>
        </div>
        <div className='card-buttons'>
            <button onClick={props.editCard}>save character</button>
            <button onClick={props.deleteCard}>delete character</button>
        </div>
    </div> 
    )
}


{/* <input placeholder="descibe them" className="inputBoxes" value={props.userDescription} onChange={e => props.handleDescriptionChange('description', e.target.value)}/>  */}