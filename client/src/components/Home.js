import React from 'react';
import manager from '../images/managerImage.jpeg';

const homeStyle = {
    'backgroundImage': `url(${manager})`, 
    'backgroundSize': 'cover',
    'overflow': 'hidden',
    'height': '700px',
}


function Home () {
    return (
        <div style={homeStyle}>
            <h1>Welcome to the Home Page</h1>
        </div>
            // <div className="bd-example" id="caroMain">
            //     <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            //     <ol className="caurosel-indicators">
            //         <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            //         <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            //         <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            //     </ol>
            //     <div className="carousel-inner">
            //         <div className="carousel-item active" id="carousel1">
            //         <img src="/images/banner1.jpg" className="d-block w-100" id="carpic" alt="..."></img>
            //         <div className="carousel-caption d-sm-block">
            //             <h4>Meet your dog's new best friend</h4>
            //             <p>Use our world-famous dog matching algorithm to find the perfect pal for your dog!</p>
            //         </div>
            //     </div>
            //     <div className="carousel-item" id="carousel1">
            //         <img src="https://media.istockphoto.com/photos/project-manager-looking-at-ar-screen-gantt-chart-schedule-planning-picture-id847156808?k=6&m=847156808&s=612x612&w=0&h=nLjMWd2f1sCknNihuvXriCaL00NB1xB_hXW9rA6wBo0=" className="d-block w-100" id="carpic" alt="..."></img>
            //         <div className="carousel-caption d-sm-block">
            //             <h4>Manage your social calendar</h4>
            //             <p>Create, track, and manage your dog's play dates!</p>
            //         </div>
            //     </div>
            //     <div className="carousel-item" id="carousel1">
            //         <img src="/images/banner4.jpg" className="d-block w-100" id="carpic" alt="..."></img>
            //         <div className="carousel-caption d-sm-block">
            //             <h4>Get out and play</h4>
            //             <p>Socializing your dog means more playtime and exercise.</p>
            //         </div>
            //     </div>
            // </div>
            // <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            //     <span className="sr-only">Previous</span>
            // </a>
            // <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
            //     <span className="sr-only">Next</span>
            // </a>
                
            
            //     </div>
             
            // </div>

        
    )
};

export default Home;

