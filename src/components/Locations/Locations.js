import React, {Component} from 'react';
import axios from 'axios';
import './Locations.css';

import './../Cards/Cards.css'
import Cards from './../Cards/Cards.js'

class Locations extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user_id: '',
            location_id: 0,
            location_name: '',
            location_description: '',
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
        axios.get('/api/getLocations')
        .then(res => {
            if( res.data.length === 0 ){
            this.setState({
                cardsToDisplay: []
            })
            } else {
            this.setState({
                cardsToDisplay: res.data,
                user_id: res.data[0].user_id,
                location_id: res.data[0].location_id,
                location_name: res.data[0].location_name,
                location_description: res.data[0].location_description
            }, this.cardsMounted )}
        })
    }

    saveCard = (location_id, location_name, location_description) => {

        let stuff = { location_id, location_name, location_description }
        axios.put(`/api/saveLocations/${location_id}`, stuff)
        .then(res => {
            this.setState({
                cardsToDisplay: res.data,
            })
        })
    }

    deleteCard = (location_id) => {
        console.log('Delete:', location_id)
        axios.delete(`/api/deleteLocations/${location_id}`)
        .then( res => {
            console.log(res.data)
            this.mountToDisplay()
        })
    }

    cardsMounted() {
       return this.state.cardsToDisplay.map((el, i) => {
            return(
                <Cards key={el.location_id}
                cardContent={el.location_description} 
                id={el.location_id} 
                cardTitle={el.location_name} 
                saveCard={this.saveCard} deleteCard={this.deleteCard}/>
            )
        })
    }

    render() {
        return(

            <div className="location-body">
            <div className="location-header">
                Locations
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

export default Locations;