import React, { Component } from 'react';


class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editable: false, 
            commandEdit: '',
            id: 0,
            cardTitle: '',
            cardContent: ''
        }
    }  

    componentDidMount(){
        this.setState({
            commandEdit: this.props.cardsToDisplay,
            id: this.props.id,
            cardTitle: this.props.cardTitle,
            cardContent: this.props.cardContent
        })
    }

    editButton = () => {
        this.state.editable
        ? 
        this.saveButton()
        :
        this.setState({
            editable: true
        })
    }

    saveButton = () => {
        this.props.saveCard(this.state.id, this.state.cardTitle, this.state.cardContent)
        this.setState({
            editable: false
        })
    }

    deleteButton = () => {
        this.props.deleteCard(this.props.i)
    }

    handleEditChange = (e) => {
        this.setState({
           commandEdit: e.target.value 
        })
    }

    
    onUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }

    

    render() {
        return(
            <div className="the-cards">
                    <div className='left-content'>
                        <div className="title-div">
                            <div className='id-div'>
                                <input className="the-id" name='id' type="text" value={this.state.id} onChange={this.onUpdate}/>
                            </div>
                            <input className="the-title" name='cardTitle' type="text" value={this.state.cardTitle} onChange={this.onUpdate}/>
                        </div>
                    </div>
                    <hr className='the-line'/>
                    <div className='right-content'>
                        <button className="card-buttons" id='delete-button' onClick={() => {this.props.deleteCard(this.props.id)}}>X</button>
                        <div className="content-div">
                            <input className="the-content" name='cardContent' type="text" value={this.state.cardContent} onChange={this.onUpdate}/>
                        </div>
                        <div className='edit-save-cancel'>

                        {   !this.state.editable
                            ?
                            <button className="card-buttons" id="edit-button" onClick={() => {this.editButton(this.props.id)}}>EDIT</button>
                            :
                            <button className="card-buttons" id="save-button" onClick={() => {this.saveButton()}}>SAVE</button>
                        }
                            <button className="card-buttons" id="cancel-button" onClick={() => {this.cancelEdit(this.props.id)}}>CANCEL</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Cards;