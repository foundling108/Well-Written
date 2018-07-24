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
        console.log('get cards')
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
    // console.log('props: ', props)
    return (
        <div className='component-cards'>
        <div className='chap-card'>
            {/* <p> chapter id: {props.chapter.chap_id}</p> */}
            <p>Chapter Name: </p>
            <p className="cardFiller" >Chapter Name: {props.chapter.description}</p>
            <p className="cardFiller" > {props.chapter.input}</p>
            <input className="inputBoxes" value={props.userDescription} onChange={e => props.handleDescriptionChange('description', e.target.value)}/>
        </div>
        <div>
            <p>
                Text:
            </p>
                <p>
                <input className="inputBoxes" value={props.userInput} onChange={e => props.handleChapterChange('input', e.target.value)}/>
                </p>
        </div>
        <div className='card-buttons'>
            <button className="edit-delete" onClick={props.editCard}>edit chapter</button>
            <button className="edit-delete" onClick={props.deleteCard}>delete chapter</button>
        </div>
    </div>
    )
}