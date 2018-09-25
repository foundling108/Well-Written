import React, {Component} from 'react';
import axios from 'axios';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: [],
            user_id: '',
            user_image: '',
            first_name: '',
            last_name: ''
        }
    }

    componentDidMount() {
        axios.get('/api/displayUser')
        .then(res => {
            this.setState({
                userInfo: res.data,
                user_id: res.data[0].user_id,
                user_image: res.data[0].user_image,
                first_name: res.data[0].first_name,
                last_name: res.data[0].last_name
            })
        })
    }

    toProgress = () => {
        this.props.history.push('/progress')
    }

    toChapters = () => {
        this.props.history.push('/chapters')
    }

    toCharacters = () => {
        this.props.history.push('/characters')
    }

    toLocations = () => {
        this.props.history.push('/locations')
    }

    render() {
        return(

        <div className="home-body">
            <div className="Home-header">
                <img id='user-image' src={this.state.user_image} alt="you"/>
                <h2 id="user">
                    {this.state.first_name}
                </h2>
            </div>

            <section className='home-cards'>
                <div className='home-component-cards'>
                        <button className='color-card' onClick={this.toProgress}>
                            Writing Progress
                            <p className='button-text'>
                                -Track Progress-
                            </p>
                        </button>
                </div>
                <div className='home-component-cards'>
                        <button className='color-card'>
                            Timeline
                            <p className='button-text'>
                                -Create Event-
                            </p>
                        </button>
                </div>
                <div className='home-component-cards'>
                        <button className='color-card' onClick={this.toChapters}>
                            Chapters
                            <p className='button-text'>
                                -Write or Link-
                            </p>
                        </button>
                </div>
                <div className='home-component-cards'>
                        <button className='color-card' onClick={this.toCharacters}>
                            Characters
                            <p className='button-text'>
                                -Create Character-
                            </p>
                        </button>
                </div>
                <div className='home-component-cards'>
                        <button className='color-card' onClick={this.toLocations}>
                            Locations
                            <p className='button-text'>
                                -Create Location-
                            </p>
                        </button>
                </div>
                <div className='home-component-cards'>
                        <button className='color-card'>
                            Notes
                            <p className='button-text'>
                                -Things to Remember-
                            </p>
                        </button>
                </div>
            </section>

        </div>

        )
    }
}


export default Home;