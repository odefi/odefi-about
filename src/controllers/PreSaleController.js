import React, { Component } from 'react'
import IconETH from '../assets/img/Group 8045.svg'
import IconTUSD from '../assets/img/Group 8074.svg'
import IconUSDT from '../assets/img/Group 8068.svg'
import IconUSDC from '../assets/img/Group 8075.svg'
class PreSaleController extends Component {
    render() {
        var percent = 50

        return (
            <div id="presale" className="bg-garena">
                <div className="container">
                    <div className="wapper">
                        <div className="left">
                            <div className="child">
                                <p>ETHERUM</p>
                                <img src={IconETH} alt="photos"></img>
                                <p>1 ETH = 443 ODEFI</p>
                            </div>

                            <div className="child">
                                <p>TrueUSD</p>
                                <img src={IconTUSD} alt="photos"></img>
                                <p>1 TUSD = 423 ODEFI</p>
                            </div>

                            <div className="child">
                                <p>USDT(ERC20)</p>
                                <img src={IconUSDT} alt="photos"></img>
                                <p>1 USDT = 443 ODEFI</p>
                            </div>

                            <div className="child">
                                <p>USDC</p>
                                <img src={IconUSDC} alt="photos"></img>
                                <p>1 USDC = 443 ODEFI</p>
                            </div>
                        </div>

                        <div className="right">
                            <p style={{ marginTop: 0 }}>CÒN LẠI 42123 TOKEN</p>
                            <button className="btn-percent">
                                <div className={`percent ${percent > 0 ? 'percent-red' : ''}`} style={{ width: `${percent}%` }} ></div>
                                <span>{percent.toFixed(2)}% SOLD</span>
                            </button>

                            <p>YOUR ETH BALANCE: 1221 ETH</p>
                            <div className="wape-input">
                                <input></input>
                                <button>ODEFI</button>
                            </div>

                            <p>BUY 4200 ODEFI = 5566 ETH</p>
                            <button className="purchase">PURCHASE</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default PreSaleController