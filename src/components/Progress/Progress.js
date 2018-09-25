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

    // componentDidMount() {
    //     this.getCards();
    // }

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
        return(

            <div className="proress-body">
            <div className="progress-header">
                Writing Progress  
            </div>
                
                <section className='cards'>
                   

                    
                </section>

            <button className='addButton' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Progress;
