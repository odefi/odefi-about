import React, { Component } from 'react'
import EmpowIcon from '../assets/img/Group 2006.svg'
import HeacenBookIcon from '../assets/img/Group 8125.svg'
import BIDIcon from '../assets/img/Group 8121.svg'
import MULTIWALLETIcon from '../assets/img/Group 8123.svg'
import SHIBIcon from '../assets/img/Group 8128.svg'
import CoinspeakerIcon from '../assets/img/Group 8126.svg'
class OurPartnersController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataTop: [
                {
                    title: 'EMPOW',
                    img: EmpowIcon,
                },
                {
                    title: 'HeavenBook',
                    img: HeacenBookIcon,
                },
                {
                    title: 'BID VENTURES',
                    img: BIDIcon,
                },

            ],
            dataBottom: [
                {
                    title: 'MULTI WALLET',
                    img: MULTIWALLETIcon,
                },
                {
                    title: '',
                    img: SHIBIcon,
                },
                {
                    title: '',
                    img: CoinspeakerIcon,
                },
            ]
        }
    }

    renderDefault(value, customer) {
        return (
            <div className="default">
                <div className="logo">
                    <img src={value.img} alt="photos"></img>
                </div>
                <p>{value.title}</p>
            </div>
        )
    }

    renderFeature() {
        return (
            <div className="our-partners">
                <p className="title">Our Partners</p>
                <ul className="group-1">
                    {this.state.dataTop.map((value, index) => {
                        return (
                            <li key={index}>
                                {this.renderDefault(value)}
                            </li>
                        )
                    })}
                </ul>
                <ul className="group-2">
                    {this.state.dataBottom.map((value, index) => {
                        return (
                            <li key={index}>
                                {this.renderDefault(value)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }


    render() {
        return (
            <div id="our-partners" className="bg-garena">
                <div className="container">

                    {this.renderFeature()}
                </div>
            </div>
        )
    }
}

export default OurPartnersController