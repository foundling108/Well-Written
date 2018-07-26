import React, {Component} from 'react';
import axios from 'axios';
import './Chapters.css';

// import Cards from './../Cards/Cards';

class Chapters extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            chapterNum: 0,
            cardArray: [],
            description: '',
            input: ''
        }

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleChapterChange = this.handleChapterChange.bind(this);
        this.createCard = this.createCard.bind(this);
        this.getCards = this.getCards.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);

    }

    componentDidMount() {
            this.getCards();
        // axios.get('/api/card/getAllChaps')
        // .then( res => {
        //     this.setState({
        //         cardArray: res.data
        //     });
        // });
    }

    getCards() {
        axios.get('/api/cards/getChap')
        .then(res => {
            this.setState({
                cardArray: res.data
            })
        })
    }
    
    editCard(chap_id) {
        const { description, input } = this.state
        axios.put('/api/cards/updateChap', {chap_id, description, input})
        .then( (res) => {
            this.setState({
                cardArray: res.data,
                description: '',
                input: ''
            })
        })
    }
    
    
    createCard() {
        axios.post('/api/cards/createChap')
        .then( (res) => {
            this.setState({
                cardArray: res.data
            })
        } )
    }

    deleteCard(id) {
        console.log('id ', id)
        axios.delete(`/api/cards/deleteChap/${id}`)
        .then( res => this.setState({
            cardArray: res.data
        }) );
    }

    handleDescriptionChange(prop, val) {
        if(val.length < 180) {
            this.setState({
                [prop]: val
            })
        }
    }

    handleChapterChange(prop, val) {
        if(val.length < 5000) {
            this.setState({
                [prop]: val
            })
        }
    }


    render() {
        let cards = this.state.cardArray.map((el, i)=>(
            <Card 
            key={i}
            chapter={el} 
            deleteCard={_=>this.deleteCard(el.chap_id)}
            editCard={_=>this.editCard(el.chap_id)}
            handleDescriptionChange={this.handleDescriptionChange}
            handleChapterChange={this.handleChapterChange}
            userInput={this.state.input}
            userDescription={this.state.description}
            />
        ))

        return(

        <div className="Body">
            <div className="Header" id="Chapters">
                Chapters  
            </div>

                <section className='cards'>
                    
                    {cards}
                    
                </section>

                <button className='add-button' onClick={this.createCard}>+</button>

        </div>
        )
    }
}

export default Chapters;

function Card (props) {
    return (
        <div className='component-cards'>
        <div className='chap-card'>
            <input placeholder="Chapter Name:" className="inputBoxes" value={props.userDescription} onChange={e => props.handleDescriptionChange('description', e.target.value)}/>
            <textarea placeholder="start writing here" name="text-input" id="chapter-text" cols="30" rows="2" value={props.userInput} onChange={e => props.handleChapterChange('input', e.target.value)}></textarea>
            <div className="cardFiller" >
                <p>Chapter Name: {props.chapter.description} </p>
                <p id="input-value"> {props.chapter.input}</p>
            </div>
        <div className='card-buttons'>
            <button className="edit-delete" onClick={props.editCard}>save chapter</button>
            <button className="edit-delete" onClick={props.deleteCard}>delete chapter</button>
        </div>
        </div>
    </div>
    )
}


{/* <input placeholder="start writing here" className="inputBoxes" value={props.userInput} onChange={e => props.handleChapterChange('input', e.target.value)}/> */}
// console.log('props: ', props)
{/* <textarea className="cardFiller" name="cardText" id="ID01" cols="30" rows="10" value={props.chapter.input} > </textarea> */}
{/* <p> chapter id: {props.chapter.chap_id}</p> */}