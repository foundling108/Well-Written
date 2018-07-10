import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    


    render() {
        return(

        <div className="Body">
            <div className="Header" id="Home">
                Well-Written
                <div>
                    <p id="user">
                        "USERNAME"
                    </p>
                </div>
            </div>

            <section className='cards'>
                <div className='component-cards'>
                    <div className='color-card' id='chaptbox'>
                        <button id='chapbox'>Chapters</button>
                    </div>
                </div>
                <div className='component-cards'>
                    <div className='color-card' id='progrbox'>
                        <button id='progbox'>Writing Progress</button>
                    </div>
                </div>
                <div className='component-cards'>
                    <div className='color-card' id='charabox'>
                        <button id='charbox'>Characters</button>
                    </div>
                </div>
                <div className='component-cards'>
                    <div className='color-card' id='locabox'>
                       <button id='locbox'>Locations</button>
                    </div>
                </div>
            </section>

        </div>

        )
    }
}

export default Home;