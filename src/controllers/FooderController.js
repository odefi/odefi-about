import React, { Component } from 'react'
import Phone from '../assets/img/phone.svg'
import Location from '../assets/img/location.svg'

import Empow from '../assets/img/Group 8067.svg'

class FooderController extends Component {

    render() {
        return (
            <div id="fooder" className="bg-garena">
                <div className="container">
                    <div className="subscribe">
                        <p>SUBSCRIBE TO THE ODEFI NEWS </p>
                        <div>
                            <input placeholder="Enter your email address..."></input>
                            <button>Subscribe</button>
                        </div>
                    </div>


                </div>
                <div className="bg">
                    <div className="waper">
                        <div className="group">
                            <div className="child-group">
                                <p style={{ fontSize: '32px', fontWeight: 'bold' }}>ODEFI</p>
                                <img src={Empow} alt="photos"></img>
                            </div>

                            <p style={{ width: '350px',fontSize: 16, lineHeight: "30px" }}>Community-governed, full-stack, social-integrated DeFi hub on Empow Network</p>
                        </div>
                        <div className="group">
                            <a className="title" href="https://odefi.org/" target="_blank" rel="noopener noreferrer">About Us</a>
                            <a href="/faq" target="_blank">Question</a>
                            <a href="https://twitter.com/ocean_defi" target="_blank" rel="noopener noreferrer">News</a>
                        </div>
                        <div className="group">
                            <p className="title">Resource</p>
                            <a href="https://medium.com/ocean-defi" target="_blank">Whitepaper</a>
                            <p>Our clients</p>
                        </div>
                        <div className="group">
                            <p className="title">Contact</p>
                            <div className="child">
                                <img src={Phone} alt="photos"></img>
                                <p>business@odefi.net</p>
                            </div>
                            <div className="child">
                                <img src={Location} alt="photos"></img>
                                <a href="https://t.me/oceandefi" target="_blank" rel="noopener noreferrer">Contact Us</a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }

}

export default FooderController