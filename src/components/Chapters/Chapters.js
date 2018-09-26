import React, {Component} from 'react';
import axios from 'axios';
import './Chapters.css';

// import Cards from './../Cards/Cards';

class Chapters extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user_id: '',
            chapter_id: 0,
            chapter_title: '',
            chapter_content: '',
            cardsToDisplay: []
        }
    }

    componentDidMount(){
        axios.get('/api/getChapters')
        .then(res => {
            this.setState({
                cardsToDisplay: res.data
            })
        })
    }
    
    render() {

        const cards = this.state.cardsToDisplay.map((el, i) => {
            return(
                <div className="the-cards" key={el + i}>
                    <div className="title-div">
                        <h3 className="the-h3">{el.chapter_title}</h3>
                    </div>
                    <hr/>
                    <button className="card-buttons" id='delete-button' onClick={() => {this.deleteCard(el.chapter_id)}}>X</button>
                        <div className="content-div">
                            <p className="content-ptag">{el.chapter_content}</p>
                        </div>
                    <button className="card-buttons" id="edit-button" onClick={() => {this.editCard(el.chapter_id)}}>EDIT</button>
                    <button className="card-buttons" id="cancel-button" onClick={() => {this.cancelEdit(el.chapter_id)}}>CANCEL</button>
                </div>
            )
        })

        return(

        <div className="chapters-body">
            <div className="chapters-header">
                Chapters  
            </div>
                <section className='content-cards'>  
                    {cards}
                </section>
            <button className='addButton' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Chapters;

// this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
// this.handleChapterChange = this.handleChapterChange.bind(this);
// this.createCard = this.createCard.bind(this);
// this.getCards = this.getCards.bind(this);
// this.editCard = this.editCard.bind(this);
// this.deleteCard = this.deleteCard.bind(this);


    // componentDidMount() {
    //         this.getCards();
    // }

    // getCards() {
    //     axios.get('/api/cards/getChap')
    //     .then(res => {
    //         this.setState({
    //             cardArray: res.data
    //         })
    //     })
    // }
    
    // editCard(chap_id) {
    //     const { description, input } = this.state
    //     axios.put('/api/cards/updateChap', {chap_id, description, input})
    //     .then( (res) => {
    //         this.setState({
    //             cardArray: res.data,
    //             description: '',
    //             input: ''
    //         })
    //     })
    // }
    
    
    // createCard() {
    //     axios.post('/api/cards/createChap')
    //     .then( (res) => {
    //         this.setState({
    //             cardArray: res.data
    //         })
    //     } )
    // }

    // deleteCard(id) {
    //     console.log('id ', id)
    //     axios.delete(`/api/cards/deleteChap/${id}`)
    //     .then( res => this.setState({
    //         cardArray: res.data
    //     }) );
    // }

    // handleDescriptionChange(prop, val) {
    //     if(val.length < 180) {
    //         this.setState({
    //             [prop]: val
    //         })
    //     }
    // }

    // handleChapterChange(prop, val) {
    //     if(val.length < 5000) {
    //         this.setState({
    //             [prop]: val
    //         })
    //     }
    // }