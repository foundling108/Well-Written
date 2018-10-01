import React, { Component } from 'react';


class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editable: false  
        }
    }  

    

    render() {
        return(
            <div className="the-cards" key={el + i}>
                    <div className='left-content'>
                        <div className="title-div">
                            <div className='id-div'>
                                <input className="the-id" name='chapter_id' type="text" value={el.chapter_id} onChange={this.onUpdate}/>
                            </div>
                            <input className="the-title" name='chapter_title' type="text" value={el.chapter_title} onChange={this.onUpdate}/>
                        </div>
                    </div>
                    <hr className='the-line'/>
                    <div className='right-content'>
                        <button className="card-buttons" id='delete-button' onClick={() => {this.deleteCard(el.chapter_id)}}>X</button>
                        <div className="content-div">
                            <input className="the-content" name='chapter_content' type="text" value={el.chapter_content} onChange={this.onUpdate}/>
                        </div>
                        <div className='edit-save-cancel'>

                        {   !this.state.editable
                            ?
                            <button className="card-buttons" id="edit-button" onClick={() => {this.editCard(el.chapter_id)}}>EDIT</button>
                            :
                            <button className="card-buttons" id="save-button" onClick={() => {this.saveCard(el.chapter_id)}}>SAVE</button>
                        }
                            <button className="card-buttons" id="cancel-button" onClick={() => {this.cancelEdit(el.chapter_id)}}>CANCEL</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Cards;