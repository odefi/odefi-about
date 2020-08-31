import React, { Component } from 'react'
import Img from '../assets/img/Group 7651.svg'
class HomeController extends Component {
    render() {
        return (
            <div id="home" className="bg-garena">
                <div className="container">
                    <div className="content">
                        <p className="title">Scalable one-stop interchain DeFi platform owned by you</p>
                        <p className="description">Mirror the world of traditional financial services on decentralized world with scalability and autonomy. Ocean DeFi product hub is made from swapping, lending, & liquidating marketplace and you are the owner of all of them. Ocean DeFi is also powered by Empow Network, an ultra-fast blockchain tailor-made for the ecosystem of social finance applications</p>
                        <a href="https://chrome.google.com/webstore/detail/multi-wallet/nlgnepoeokdfodgjkjiblkadkjbdfmgd" target="_blank" rel="noopener noreferrer">Download wallet</a>
                        <a href="https://odefi.net/" target="_blank" rel="noopener noreferrer">Use ODEFI now</a>
                    </div>
                    <img src={Img} alt="photos"></img>
                </div>

            </div>
        )
    }

}

export default HomeController