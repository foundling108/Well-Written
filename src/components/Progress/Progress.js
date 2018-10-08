import React, {Component} from 'react';
import axios from 'axios';
import './Progress.css';

import './../Cards/Cards.css'
import Cards from './../Cards/Cards.js'

class Progress extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user_id: '',
            progress_id: 0,
            entry_date: '',
            word_count: '',
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
        axios.get('/api/getProgress')
        .then(res => {
            if( res.data.length === 0 ){
            this.setState({
                cardsToDisplay: []
            })
            } else {
            this.setState({
                cardsToDisplay: res.data,
                user_id: res.data[0].user_id,
                progress_id: res.data[0].progress_id,
                entry_date: res.data[0].entry_date,
                word_count: res.data[0].word_count
            }, this.cardsMounted )}
        })
    }

    saveCard = (progress_id, entry_date, word_count) => {

        let stuff = { progress_id, entry_date, word_count }
        axios.put(`/api/saveProgress/${progress_id}`, stuff)
        .then(res => {
            this.setState({
                cardsToDisplay: res.data,
            })
        })
    }

    deleteCard = (progress_id) => {
        console.log('Delete:', progress_id)
        axios.delete(`/api/deleteProgress/${progress_id}`)
        .then( res => {
            console.log(res.data)
            this.mountToDisplay()
        })
    }

    cardsMounted() {
       return this.state.cardsToDisplay.map((el, i) => {
            return(
                <Cards key={el.progress_id}
                cardContent={el.word_count} 
                id={el.progress_id} 
                cardTitle={el.entry_date} 
                saveCard={this.saveCard} deleteCard={this.deleteCard}/>
            )
        })
    }

    render() {
        return(

            <div className="proress-body">
            <div className="progress-header">
                Writing Progress  
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

export default Progress;
