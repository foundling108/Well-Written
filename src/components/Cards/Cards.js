import React, { Component } from 'react';


class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            input: '',
            cardArray: []
        }

        

    }  

    componentDidMount() {
        //map over the card array and mount to the appropriate component on the button 'Add Card'
    }

    render() {
        return(
            <div>
                Cards
            </div>
        )
    }
}