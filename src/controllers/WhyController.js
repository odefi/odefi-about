import React, { Component } from 'react'

import Img from '../assets/img/Group 7820.svg'
class WhyController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    title: "Synthetics",
                    content: "Any asset in any blockchain can have their synthetic version on Empow Network via trustless bridges connecting to other chains. The bridges are powered by a decentralized group of trustless custodians. All custodian are required to collateralize the coin or token that is being mirrored & the native coin of Empow Network (EM) with the Collateral-to-Deposit ratio over 100%."
                },
                {
                    title: "oUSD",
                    content: "A unique stablecoin backed by liquidable asset reserves. oUSD is used to accelerate the operation of Ocean DeFi especially the liquidating marketplace."
                },
                {
                    title: "Swapping",
                    content: "Once assets are represented on Empow Network, the synthetics can be crosschain traded to each other. The programmed pricing system of the DEX is Automated Market Making. Liquidity providers benefit from trading fee and yield farming. Swappers can benefit from the 'use mining' program, a unique rewarding program developed by Empow Network in which swappers earn ODEFI for participating in the marketplace."
                },
                {
                    title: "Lending",
                    content: "It allows for the lending of all synthetics, EM coin and tokens on Empow Network. With the aid of smart contracts, borrowers and lenders meet each other and store their coins & tokens allowing the issuance of oUSD. To create an efficient leding marketplace, Credit Score is utilized and measured based on amount of users' staked tokens, users' activity on Ocean DeFi and other Empow-based dapps."
                },
                {
                    title: "Liquidating",
                    content: "A marketplace where custodians, liquidity providers, lenders & stakers can liquidate their locked assets on swapping & lending marketplace to oUSD. The condition to have a faster deal there is to stake or hold more ODEFI. Liquidating market completes the one-stop Ocean DeFi platform."
                },
                {
                    title: "Automated Organization",
                    content: "The concept of DAO is applied and ODEFI will be used as the governance token of Ocean DeFi DAO. Staking or holding more token can bring many advantages for users within the ecosystem. They could be having privilege on liquidating market, gaining more reputation in community, getting more right to vote on important decisions affecting the platform"
                },
                {
                    title: "Empow.io, Heavenbook.io, Multi Wallet",
                    content: " are 2 social dapps that have existed on Empow Network prior to Ocean DeFi. They are the already-large-user-based (7,000 daily active users) places where Ocean DeFi can be integrated with to acquire new influxes of users. Used to interact with Ocean DeFi, Multi Wallet is the extension where you can store EM coin, Empow token, and convert outside assets to Empow-based synthetics."
                },
                {
                    title: "Empow Network",
                    content: "Empow Network is the staring point of everything. It is a blockchain tailor-made for the ecosystem of social & financial dapps with around 50,000 users currently. With the mainnet launched 6 months ago, Empow Network is released along with the Proof of Social Reputation consensus algorithm supporting fast & efficient transactions on the network. Based on Empow blockchain, Ocean DeFi leverages the hightlights of Empow Network, an advantage that could help the DeFi platform to acquire millions of users"
                },
            ]
        }
    }


    render() {
        var { data, detail } = this.state
        return (
            <div id="why" className="bg-garena">
                <div className="container">
                    <div className="left">
                        {data.map((value, index) => {
                            return (
                                <div onClick={() => { this.setState({ detail: index + 1 }) }} className="title">
                                    <p>{value.title}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="right">
                        <img src={Img} alt="photos" style={{ width: '100%', height: '100%', opacity: detail ? '0.4' : '1' }}></img>
                        {detail && <div className="detail">
                            <p style={{ fontSize: '24px', marginBottom: '15px' }}>{data[detail - 1].title}</p>
                            {detail !== 7 && <p>{data[detail - 1].content}</p>}
                            {detail === 7 && <p>
                                <a href='https://empow.io/' target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}>Empow.io</a> & 
                                <a href='https://heavenbook.io/' target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}> Heavenbook.io</a>
                                {data[detail - 1].content}
                            </p>}
                        </div>}
                    </div>
                </div>
            </div>
        )
    }

}

export default WhyController