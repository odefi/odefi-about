import React, { Component } from 'react'
import IconMobile from '../assets/img/icon-mobile.svg'
import IconClose from '../assets/img/icon-close.svg'
import LogoGithub from '../assets/img/IconGithub.svg'
import LogoM from '../assets/img/IconM.svg'
import LogoTelegram from '../assets/img/IconTelegram.svg'
import LogoTwitter from '../assets/img/IconTweett.svg'
import Logo from '../assets/img/logo.svg'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleMenu: false
        }
    };


    renderContact() {
        return (
            <div className="contact">
                <a href="https://t.me/Odefi" target="_blank" rel="noopener noreferrer">
                    <img src={LogoTelegram} alt="photos"></img>
                </a>
                <a href="https://twitter.com/ocean_defi" target="_blank" rel="noopener noreferrer">
                    <img src={LogoTwitter} alt="photos"></img>
                </a>
                <a href="https://medium.com/ocean-defi" target="_blank" rel="noopener noreferrer">
                    <img src={LogoM} alt="photos"></img>
                </a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={LogoGithub} alt="photos"></img>
                </a> */}
            </div>
        )
    }

    render() {

        const { toggleMenu } = this.state

        return (
            <div className="header">
                <div className="container">
                    <img src={toggleMenu ? IconClose : IconMobile} className="icon-mobile" alt="photos" onClick={() => this.setState({ toggleMenu: !toggleMenu })}></img>
                    {toggleMenu && <div className="ovelay-mobile"></div>}
                    <a className="waper-logo" href='/'>
                        <img src={Logo} alt="photos" style={{ width: '50px', height: '50px' }}></img>
                        <p>O D E F I</p>
                    </a>
                    <div className="right">
                        <ul className={`menu ${toggleMenu ? 'is-toggle' : ''}`}>
                            <a href='/' target="_blank" rel="noopener noreferrer">Home</a>
                            <a href='/features'>Features</a>
                            <a href='https://odefi.net' target="_blank" rel="noopener noreferrer">Pre-sale</a>
                            <a href='/ecosystem'>Ecosystem</a>
                            <a href='https://medium.com/ocean-defi' target="_blank" rel="noopener noreferrer">White Paper</a>
                            <a href='https://odefi.net' target="_blank" rel="noopener noreferrer">ODEFI Trade</a>
                        </ul>
                    </div>
                </div>
                {this.renderContact()}
            </div>
        );
    }
};

export default Header