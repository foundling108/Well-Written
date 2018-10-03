import React, {Component} from 'react';
import axios from 'axios';
import './Chapters.css';

import './../Cards/Cards.css'
import Cards from './../Cards/Cards.js';


class Chapters extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            editable: false,
            user_id: '',
            chapter_id: 0,
            chapter_title: '',
            chapter_content: '',
            cardsToDisplay: []

        }

        this.saveCard = this.saveCard.bind(this);
    }

    componentDidMount(){
        axios.get('/api/getChapters')
        .then(res => {
            console.log(res.data)
            this.setState({
                cardsToDisplay: res.data,
                user_id: res.data[0].user_id,
                chapter_id: res.data[0].chapter_id,
                chapter_title: res.data[0].chapter_title,
                chapter_content: res.data[0].chapter_content
            })
        })
    }

    saveCard = (chapter_id, chapter_title, chapter_content) => {

        let stuff = { chapter_id, chapter_title, chapter_content }
        axios.put(`/api/saveChapters/${chapter_id}`, stuff)
        .then(res => {
            this.setState({
                cardsToDisplay: res.data,
            })
        })
    }

    deleteCard = (chapter_id) => {
        axios.delete(`/api/deleteChapters/${chapter_id}`)
        .then( res => {
            this.componentDidMount()
        })
    }

    
    render() {
        const cardsMounted = this.state.cardsToDisplay.map((el, i) => {
            return(
                <Cards key={el+i}
                cardContent={el.chapter_content} 
                id={el.chapter_id} 
                cardTitle={el.chapter_title} 
                saveCard={this.saveCard} deleteCard={this.deleteCard}/>
            )
        })

        return(

        <div className="chapters-body">
            <div className="chapters-header">
                Chapters  
            </div>
                <section className='content-cards'>  
                    {cardsMounted}
                </section>
            <button className='addButton' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Chapters;