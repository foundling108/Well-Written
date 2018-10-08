import React, {Component} from 'react';
import axios from 'axios';
import './Characters.css';

import './../Cards/Cards.css'
import Cards from './../Cards/Cards.js'

class Characters extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user_id: '',
            character_id: 0,
            character_name: '',
            character_description: '',
            cardsToDisplay: []
        }

        this.saveCard = this.saveCard.bind(this);
        this.mountToDisplay = this.mountToDisplay.bind(this);
        this.cardsMounted = this.cardsMounted.bind(this);
    }

    componentDidMount(){
        this.mountToDisplay()
    }

    mountToDisplay = () => {
        axios.get('/api/getCharacters')
        .then(res => {
            if( res.data.length === 0 ){
            this.setState({
                cardsToDisplay: []
            })
            } else {
            this.setState({
                cardsToDisplay: res.data,
                user_id: res.data[0].user_id,
                character_id: res.data[0].character_id,
                character_name: res.data[0].character_name,
                character_description: res.data[0].character_description
            }, this.cardsMounted )}
        })
    }

    saveCard = (character_id, character_name, character_description) => {

        let stuff = { character_id, character_name, character_description }
        axios.put(`/api/saveCharacters/${character_id}`, stuff)
        .then(res => {
            this.setState({
                cardsToDisplay: res.data,
            })
        })
    }

    deleteCard = (character_id) => {
        console.log('Delete:', character_id)
        axios.delete(`/api/deleteCharacters/${character_id}`)
        .then( res => {
            console.log(res.data)
            this.mountToDisplay()
        })
    }

    cardsMounted() {
       return this.state.cardsToDisplay.map((el, i) => {
            return(
                <Cards key={el.character_id}
                cardContent={el.character_description} 
                id={el.character_id} 
                cardTitle={el.character_name} 
                saveCard={this.saveCard} deleteCard={this.deleteCard}/>
            )
        })
    }

    render() {
        return(
        <div className="characters-body">
            <div className="characters-header">
                Characters  
            </div>
            {
                !this.state.cardsToDisplay.length
                ?
                <div className='nada'>
                    <p className='nada-p'>Nothing yet</p>
                </div>
                :
                <section className='content-cards'> 
                    {this.cardsMounted()}
                </section>
            }
            <button className='addButton' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Characters;