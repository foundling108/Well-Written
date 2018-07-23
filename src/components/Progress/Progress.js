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
    }

    componentDidMount() {
        //map over the card array and mount to the appropriate component on the button 'Add Card'
    }

    createCard() {
        axios.post('/api/cards/createProg')
        .then( (res) => {
            this.setState({
                cardArray: res.data
            })
        } )
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
            <Card props={el} />
        ))

        return(

            <div className="Body">
            <div className="Header" id="Progress">
                Writing Progress  
            </div>
                
                <section className='cards'>
                   
                    {cards}
                    
                </section>

            <button className='add-button'>+</button>
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
            <input value={this.state.logNum} onChange={e => this.handleChange('logNum', e.target.value)}/>
        </div>
        <div>
            <h1 className='comp-card-title'>
                Date: <input value={this.state.date} onChange={e => this.handleChange('date', e.target.value)}/>
            </h1>
                <p>
                    Word Count: 
                    <input value={this.state.inputCount} onChange={e => this.handleChange('inputCount', e.target.value)}/>
                </p>
        </div>
        <div className='card-buttons'>
            <button>edit log</button>
            <button>delete log</button>
        </div>
    </div> 
    )
}