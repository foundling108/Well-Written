import React, { Component } from 'react';


class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardArray: [],
            name: '',
            description: '',
            input: '',
            inputCount: 0,
            date: '',
            logNum: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleChapter = this.handleChapter.bind(this);

    }  

    componentDidMount() {
        //map over the card array and mount to the appropriate component on the button 'Add Card'
    }

    handleChange(prop, val) {
        if(val.length < 20) {
            this.setState({
                [prop]: val
            })
        }
    }

    handleNameChange(prop, val) {
        if(val.length < 80) {
            this.setState({
                [prop]: val
            })
        }
    }

    handleDescriptionChange(prop, val) {
        if(val.length < 180) {
            this.setState({
                [prop]: val
            })
        }
    }

    handleChapter(prop, val) {
        if(val.length < 5000) {
            this.setState({
                [prop]: val
            })
        }
    }

    render() {
        return(
            <section className='cards'>
                <div className='component-cards'>
                    <div className='char+loc-card'>
                        <p>Name:</p>
                        <input value={this.state.name} onChange={e => this.handleNameChange('name', e.target.value)}/>
                    </div>
                    <div>
                        <h1>
                            Description:
                        </h1>
                            <p>
                                <input value={this.state.description} onChange={e => this.handleDescriptionChange('description', e.target.value)}/>
                            </p>
                    </div>
                </div>

                <div className='component-cards'>
                    <div className='prog-card' >
                        <p>Log Entry # </p>
                        <input value={this.state.logNum} onChange={e => this.handleChange('logNum', e.target.value)}/>
                    </div>
                    <div>
                        <h1>
                            Date: <input value={this.state.date} onChange={e => this.handleChange('date', e.target.value)}/>
                        </h1>
                            <p>
                                Word Count: 
                                <input value={this.state.inputCount} onChange={e => this.handleChange('inputCount', e.target.value)}/>
                            </p>
                    </div>
                </div>
                <div className='component-cards'>
                    <div className='chap-card'>
                        <p>Chapter Name: </p>
                        <input value={this.state.description} onChange={e => this.handleDescriptionChange('description', e.target.value)}/>
                    </div>
                    <div>
                        <h1>
                            Text:
                        </h1>
                            <p>
                            <input value={this.state.input} onChange={e => this.handleChapter('input', e.target.value)}/>
                            </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cards;