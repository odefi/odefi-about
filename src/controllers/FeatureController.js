import React, { Component } from 'react'
import IconDeDang from '../assets/img/icon-de-dang.svg'
import IconTienLoi from '../assets/img/icon-tien-loi.svg'
import IconAnToan from '../assets/img/icon-an-toan.svg'
import IconMinhBach from '../assets/img/icon-minh-bach.svg'
import IconBaoMat from '../assets/img/icon-bao-mat.svg'
import IconTuChu from '../assets/img/icon-tu-chu.svg'
import IconDaNenTang from '../assets/img/icon-da-nen-tang.svg'
import IconDaQuocGia from '../assets/img/icon-da-quoc-gia.svg'
import $ from 'jquery'

class FeatureController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataTop: [
                {
                    title: 'Trusstless bridges',
                    content: 'All assets in other blockchains are trustlessly represented in Ocean DeFi in the form of synthetics'
                },
                {
                    title: 'Interchain swaps',
                    content: 'Easily swap from one coin to another, even in different blockchain, with benefit from rewarding programs'
                },
                {
                    title: 'P2P lending',
                    content: 'Loan & borrow at the best rates. Credit Score is applied to create an efficient marketplace'
                },
                {
                    title: 'Secondary market',
                    content: 'Liquidate your locked assets to stablecoin anytime and anywhere - you always hold a flexibile position'
                }
            ],
            dataBottom: [
                {
                    title: 'Use mining & Yield farming',
                    content: 'Both demand & supply contributors of sub-marketplaces are rewarded with the native token of the protocol'
                },
                {
                    title: 'DAO-governed',
                    content: 'You are the governor of the product serving you. Ocean DeFi is of, for, and by Community'
                },
                {
                    title: 'Empow Network',
                    content: 'PoSR-based scalable decentralized network allows for a strong ecosystem of finance services & social interactions'
                },
                {
                    title: 'Social app integration',
                    content: 'Integrate with existing Empow dapps and bring unprecedented social DeFi experience '
                }

            ]
        }
    }

    componentDidUpdate() {
        if (this.props.isActive) {
            $("#feature li").addClass("animation");
        } else {
            $("#feature li").removeClass("animation");
        }
    }

    renderSelected(tilte, content) {
        return (
            <div className="selected">
                <p>{tilte}</p>
                <p>{content}</p>
            </div>
        )
    }

    renderDefault(titlte, index, type) {
        var img = '';
        if (type === 'top') {
            img = index === 0 ? IconDeDang : index === 1 ? IconTienLoi : index === 2 ? IconAnToan : IconMinhBach;
        }

        if (type === 'bottom') {
            img = index === 0 ? IconBaoMat : index === 1 ? IconTuChu : index === 2 ? IconDaNenTang : IconDaQuocGia;
        }

        return (
            <div className="default">
                <div className="logo">
                    <img src={img} alt="photos"></img>
                </div>
                <p>{titlte}</p>
            </div>
        )
    }

    renderFeature() {
        return (
            <div className="feature">
                <ul className="group-1">
                    {this.state.dataTop.map((value, index) => {
                        return (
                            <li key={index}>
                                {this.renderDefault(value.title, index, "top")}
                                {this.renderSelected(value.title, value.content)}
                            </li>
                        )
                    })}
                </ul>
                <ul className="group-2">
                    {this.state.dataBottom.map((value, index) => {
                        return (
                            <li key={index}>
                                {this.renderDefault(value.title, index, "bottom")}
                                {this.renderSelected(value.title, value.content)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div id="feature" className="bg-garena">
                <div className="container">
                    <p className="title">WHY SHOULD YOU CHOOSE ODEFI ?</p>
                    {this.renderFeature()}
                </div>
            </div>
        )
    }

}

export default FeatureController