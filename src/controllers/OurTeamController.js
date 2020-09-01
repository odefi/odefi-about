import React, { Component } from 'react'

import Linkedin from '../assets/img/linkedin-logo.svg'
import LogoTelegram from '../assets/img/logo-telegram.svg'
import $ from 'jquery'
import Ava1 from '../assets/img/team-1.jpg'
import Ava2 from '../assets/img/team-2.jpg'
import Ava3 from '../assets/img/team-3.jpg'
import Ava4 from '../assets/img/team-4.jpg'
import Ava5 from '../assets/img/team-5.jpg'
import Ava6 from '../assets/img/team-6.jpg'
import Ava7 from '../assets/img/team-7.jpg'
import Ava8 from '../assets/img/team-8.jpg'


class OurTeamController extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataTop: [{
                name: 'Rober Ad',
                type: 'Project Lead',
                content: 'A serial entrepreneur & blockchain enthusiast, Robert has been active in the tech industry generally and blockchain space specifically for over 5 years. He thought of the idea of building an efficient ecosystem for decentralized applications back in 2017. He and his team finally made it happen by giving birth to Empow Network, the ultra-fast blockchain that can support nearly 10,000 TPS. He also stood behind the birth of Empow.io - the first visual social network in the blockchain space - with nearly 5,000 daily active users at the moment. In December 2019, comprehending the current problems in DeFi sector, he started Ocean DeFi as the all-in-one DeFi platform.',
                linkedin: 'https://www.linkedin.com/in/thinkerempow/',
                telegram: 'https://t.me/Thinkerqr'
            },
            {
                name: 'Han Jason',
                type: 'Marketing Lead',
                content: 'He has been in the crypto space for 3 years as an investor, community leader, and crypto writer. Now he is the admin of 2 crypto-focus communities in South East Asia with nearly 20K members each. He has a wide network within mainstream outlets in SEA since he was one of the first columnists writing about crypto & blockchain there back in 2017. He was also the Growth Project Owner at Incognito, a $13M-cap privacy project got funded by Binance X Fellowship. Han joined Empow Network’s team in mid 2019, contributing to the growth of the blockchain Empow and the dapp Empow.io. Now he is keeping his previous role at Ocean DeFi.',
                linkedin: 'https://www.linkedin.com/in/jason-han-3938261b5/'
            },
            {
                name: 'Shibashish Nandi',
                type: 'Advisor',
                content: 'Shibashish has been a crypto investor for 7 years. He also owns Coinspector, a crypto news outlet that has nearly 10,000 daily visitors, and a number of crypto news aggregators, He joined the Ocean DeFi’s advisor board in March 2020. wWth a wide network within the space & media advantages, Shibashish has brought many valuable benefits to Ocean DeFi.',
            },
            {
                name: 'Roman Andriychuk',
                type: 'Programming iOS, Android Lead',
                content: 'Roman has roughly 8 years of experience in mobile app programming. He was the Mobile Technical Leader of a number of fast-growing social lending & e-wallet mobile applications. He joined Empow Network & Ocean DeFi to lead the building of the Empow.io mobile app and Multi Wallet extension.',
                telegram: 'https://t.me/Romann_odefi'
            },
            {
                name: 'Ezhikov Vladislav',
                type: 'Blockchain Senior Engineer',
                content: 'Ezhikov has joined the blockchain space since 2015. He was one of the active contributors to old-time cryptocurrencies at the early stage. His main focus now is blockchain scalability & interoperability. Ezhikov has joined Empow Network in 2018 and successfully built the scalable Empow Network Blockchain.',
                telegram: 'https://t.me/Ezhikov_odefi'
            },
            {
                name: 'Stefan Janoski',
                type: 'Busniess Development Manager',
                content: 'A passionate startup builder with his strong start-DNA. He set foot in the blockchain space in 2018 and his role was the growth contributor to a number of well-known community-governed projects such as Monero, Decred, etc. In late 2019, He joined Ocean DeFi to help the project to develop the partnership network.',
                telegram: 'https://t.me/Stefan_odefi'
            },
            {
                name: 'Nick Benedict',
                type: 'Strategic Officer',
                content: 'As a Senior Staff Consultant, Nick has helped many IT firms including some blockchain companies in developing long-term strategies. Now he’s working at Empow Network and directly consulting the managing team on growth strategy, legal, and compliance matters.',
                telegram: 'https://t.me/Nick_odefi'
            },
            {
                name: 'Steven Travis Theron',
                type: 'Research Manager',
                content: "A blockchain guru & a crypto investor, Steven put his serious effort into researching the newest trends in the blockchain space. He started to dive into DeFi when he got to know about Uniswap back in early 2019. He joined Ocean DeFi & Empow Network in late 2019 and led the DeFi research team.",
                telegram: 'https://t.me/Steven_odefi'
            }]
        }
    }

    componentDidUpdate() {
        if (this.props.isActive) {
            $("#our-team li").addClass("animation");
        } else {
            $("#our-team li").removeClass("animation");
        }
    }

    renderSelected(tilte, content, linkedin, telegram = false) {
        return (
            <div className="selected">
                <p>{tilte}</p>
                <p style={{ fontWeight: 'normal', fontSize: ' 12px' }}>{content}</p>
                {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <img className="telegram2" src={Linkedin} alt="photos"></img>
                </a>}
                {
                    telegram &&
                    <a href={telegram} target="_blank" rel="noopener noreferrer">
                        <img className="telegram2" src={LogoTelegram} alt="photos"></img>
                    </a>
                }
            </div>
        )
    }

    renderDefault(titlte, content, index) {
        var img = '';

        switch (index) {
            case 0: img = Ava1; break;
            case 1: img = Ava2; break;
            case 2: img = Ava3; break;
            case 3: img = Ava4; break;
            case 4: img = Ava5; break;
            case 5: img = Ava6; break;
            case 6: img = Ava7; break;
            case 7: img = Ava8; break;
        }

        return (
            <div className="default">
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: 'auto' }}>
                    <img style={{ width: '100%' }} src={img} alt="photos"></img>
                </div>

                <p className="name">{titlte}</p>
                <p style={{ marginTop: '4px' }} className="content">{content}</p>
                {/* <div className="telegram">
                    <img src={Linkedin} alt="photos"></img>
                </div> */}

            </div>
        )
    }

    renderOurTeam() {
        return (
            <div className="our-team">
                <ul className="group-1">
                    {this.state.dataTop.map((value, index) => {
                        return (
                            <li key={index}>
                                {this.renderDefault(value.name, value.type, index)}
                                {this.renderSelected(value.name, value.content, value.linkedin, value.telegram)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div id="our-team" className="bg-garena">
                <div className="container">
                    <p className="title">Our team</p>
                    {this.renderOurTeam()}
                </div>
            </div>
        )
    }

}

export default OurTeamController