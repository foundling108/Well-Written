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
            inputCount: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.createCard = this.createCard.bind(this);
        this.getCards = this.getCards.bind(this);
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

    editCard() {

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

    handleChange(prop, val) {
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
            props={el} 
            deleteCard={_=>this.deleteCard(el.log_id)}/>
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
            <p>Log Entry # </p>
            <input value={props.logNum} onChange={e => this.handleChange('logNum', e.target.value)}/>
        </div>
        <div>
            <h1 className='comp-card-title'>
                Date: <input value={props.date} onChange={e => this.handleChange('date', e.target.value)}/>
            </h1>
                <p>
                    Word Count: 
                    <input value={props.inputCount} onChange={e => this.handleChange('inputCount', e.target.value)}/>
                </p>
        </div>
        <div className='card-buttons'>
            <button>edit log</button>
            <button onClick={props.deleteCard}>delete log</button>
        </div>
    </div> 
    )
}