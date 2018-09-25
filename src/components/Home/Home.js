import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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


    render() {
        return(

        <div className="home-body">
            <div className="Header" id="Home">
                idigyo / Words
                <div>
                    <h2 id="user">
                    </h2>
                </div>
            </div>

            <section className='cards'>
                <div className='component-cards'>
                    <div className='color-card' id='chaptbox'>
                        <Link to='/chapters'><button id='chapbox'>Chapters</button></Link>
                    </div>
                    <div className='box-content'>
                        <h1>
                            Write
                        </h1>
                            <p>
                                + create new chapters
                            </p>
                    </div>
                </div>
                <div className='component-cards'>
                    <div className='color-card' id='progrbox'>
                    <Link to='/progress'><button id='progbox'>Writing Progress</button></Link>
                    </div>
                    <div className='box-content'>
                        <h1>
                            Track Progress
                        </h1>
                            <p>
                                + create new log
                            </p>
                    </div>
                </div>
                <div className='component-cards'>
                    <div className='color-card' id='charabox'>
                    <Link to='/characters'><button id='charbox'>Characters</button></Link>
                    </div>
                    <div className='box-content'>
                        <h1>
                            Who's Who
                        </h1>
                            <p>
                                + create new characters
                            </p>
                    </div>
                </div>
                <div className='component-cards'>
                    <div className='color-card' id='locabox'>
                    <Link to='/locations'><button id='locbox'>Locations</button></Link>
                    </div>
                    <div className='box-content'>
                        <h1>
                            Where's Where
                        </h1>
                            <p>
                                + create new locations
                            </p>
                    </div>
                </div>
            </section>

        </div>

        )
    }
}


export default Home;