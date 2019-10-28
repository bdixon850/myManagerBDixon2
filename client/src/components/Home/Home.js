import React, { Component } from 'react';
import professions from '../images/professions.jpg';
import CSS from '../components/Home.css'

const homeStyle = {
    'backgroundImage': `url(${professions})`, 
    'backgroundSize': 'cover',
    'overflow': 'hidden',
    // 'opacity': '0.5',
    'height': '500px',
    'backgroundRepeat': 'no-repeat',
    'textAlign': 'center',
    'borderRadius': '50%',

}


class Home extends Component {
    render () {
        return (
            <div className="home">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="jumbotron" style={homeStyle}>
                            <h1 className="display-4">Welcome to myManager</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
    
};

export default Home;

