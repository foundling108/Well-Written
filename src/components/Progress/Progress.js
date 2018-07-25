import React, {Component} from 'react';
import axios from 'axios';
import './Progress.css';

// import Cards from './../Cards/Cards';

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardArray: [],
            logNum: 0,
            date: '',
            word_count: 0
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
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
        axios.get('/api/cards/getProg')
        .then(res => {
            this.setState({
                cardArray: res.data
            })
        })
    }

    editCard(log_id) {
        const { logNum, word_count, date } = this.state
        axios.put('/api/cards/updateProg', {log_id, logNum, word_count, date})
        .then( (res) => [
            this.setState({
                cardArray: res.data,
                date: '',
                word_count: ''
            })
        ])
    }

    createCard() {
        axios.post('/api/cards/createProg')
        .then( (res) => {
            this.setState({
                cardArray: res.data
            })
        } )
    }

    deleteCard(id) {
        console.log('id ', id)
        axios.delete(`/api/cards/deleteProg/${id}`)
        .then( res => this.setState({
            cardArray: res.data
        }) );
    }

    handleDateChange(prop, val) {
        if(val.length < 20) {
            this.setState({
                [prop]: val
            })
        }
    }

    handleCountChange(prop, val) {
        if(val.length < 20) {
            this.setState({
                [prop]: val
            })
        }
    }


    render() {
        let cards = this.state.cardArray.map((el, i)=>(
            <Card 
            key={i}
            progress={el} 
            deleteCard={_=>this.deleteCard(el.log_id)}
            editCard={_=>this.editCard(el.log_id)}
            handleDateChange={this.handleDateChange}
            handleCountChange={this.handleCountChange}
            userLogNum={this.state.logNum}
            userword_count={this.state.word_count}
            userDate={this.state.date}/>
        ))

        return(

            <div className="Body">
            <div className="Header" id="Progress">
                Writing Progress  
            </div>
                
                <section className='cards'>
                   
                    {cards}
                    
                </section>

            <button className='add-button' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Progress;

function Card(props) {
    return(
        <div className='component-cards'>
        <div className='prog-card' >
                <input placeholder="Date" className="inputBoxes" value={props.userDate} onChange={e => props.handleDateChange('date', e.target.value)}/>
                <input placeholder="Total word count" className="inputBoxes" value={props.userword_count} onChange={e => props.handleCountChange('word_count', e.target.value)}/>
                <div className="cardFiller">
                    <p>{props.progress.date}</p>
                    <p>{props.progress.word_count}</p>
                </div>
        </div>
        <div>    
        </div>
        <div className='card-buttons'>
            <button onClick={props.editCard}>edit log</button>
            <button onClick={props.deleteCard}>delete log</button>
        </div>
    </div> 
    )
}


{/* <input className="inputBoxes" value={props.userLogNum} onChange={e => props.handleChange('logNum', e.target.value)}/> */}