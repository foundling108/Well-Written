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

    }

    componentDidMount() {
        //map over the card array and mount to the appropriate component on the button 'Add Card'
    }

    createCard() {
        console.log('create card')
        axios.post('/api/cards/createChap')
        .then( (res) => {
            this.setState({
                cardArray: res.data
            })
        } )
    }

    editCard() {

    }

    deleteCard() {
        
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
            <Card props={el} />
        ))

        return(

        <div className="Body">
            <div className="Header" id="Chapters">
                Chapters  
            </div>

                <section className='cards'>
                    
                    {cards}

                 {/* <div className='component-cards'>
                    <div className='chap-card'>
                        <p>Chapter Name: </p>
                        <input value={this.state.description} onChange={e => this.handleDescriptionChange('description', e.target.value)}/>
                    </div>
                    <div>
                        <h1 className='comp-card-title'>
                            Text:
                        </h1>
                            <p>
                            <input value={this.state.input} onChange={e => this.handleChapter('input', e.target.value)}/>
                            </p>
                    </div>
                    <div className='card-buttons'>
                        <button>edit chapter</button>
                        <button>delete chapter</button>
                    </div>
                </div> */}
                    
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
            <p>Chapter Name: </p>
            <input value={props.description} onChange={e => this.handleDescriptionChange('description', e.target.value)}/>
        </div>
        <div>
            <h1 className='comp-card-title'>
                Text:
            </h1>
                <p>
                <input value={props.input} onChange={e => this.handleChapter('input', e.target.value)}/>
                </p>
        </div>
        <div className='card-buttons'>
            <button>edit chapter</button>
            <button>delete chapter</button>
        </div>
    </div>
    )
}