import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="headerContainer" style={{backgroundImage:`url(${BannerImage})`}}>
                <h1>PiZZA MANiA</h1>
                <p>Pizza to fit any taste</p>
                <Link to="/menu">
                    <button>Order Now</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Home;
