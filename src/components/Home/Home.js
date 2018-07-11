import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    


    render() {
        return(

        <div className="Body">
            <div className="Header" id="Home">
                Well-Written
                <div>
                    <h2 id="user">
                        "USERNAME"
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