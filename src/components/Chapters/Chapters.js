import React, {Component} from 'react';
import axios from 'axios';
import './Chapters.css';

// import Cards from './../Cards/Cards';

class Chapters extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            editable: false,
            user_id: '',
            chapter_id: 0,
            chapter_title: '',
            chapter_content: '',
            cardsToDisplay: []
        }
    }

    componentDidMount(){
        axios.get('/api/getChapters')
        .then(res => {
            this.setState({
                cardsToDisplay: res.data,
                user_id: res.data[0].user_id,
                chapter_id: res.data[0].chapter_id,
                chapter_title: res.data[0].chapter_title,
                chapter_content: res.data[0].chapter_content
            })
        })
    }

    // editCard = (value) => {
    //     console.log('1111', value)
    //     const editable = this.state.editable;
    //     editable[value].role 

    //     this.forceUpdate();
    // }

    saveCard = () => {
        const { user_id, chapter_id, chapter_title, chapter_content } = this.state

        let stuff = { chapter_id, chapter_title, chapter_content, user_id }
        axios.put(`/api/saveChapters/${chapter_id}`, stuff)
        .then(res => {
            this.setState({
                editable: false
            })
        })
    }

    onUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }
    
    render() {

        const cards = this.state.cardsToDisplay.map((el, i) => {
            return(
                <div className="the-cards" key={el + i}>
                    <div className='left-content'>
                        <div className="title-div">
                            <div className='id-div'>
                                <p>Chapter</p>
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
        })

        return(

        <div className="chapters-body">
            <div className="chapters-header">
                Chapters  
            </div>
                <section className='content-cards'>  
                    {cards}
                </section>
            <button className='addButton' onClick={this.createCard}>+</button>
        </div>
        )
    }
}

export default Chapters;