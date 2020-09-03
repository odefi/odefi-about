import React from 'react';
import HomeController from './controllers/HomeController';
import FeatureController from './controllers/FeatureController';
import WhyController from './controllers/WhyController';
import OurTeamController from './controllers/OurTeamController';
import FooderController from './controllers/FooderController';
import IntroduceController from './controllers/IntroduceController'
import OurPartnersController from './controllers/OurPartnersController'
import ReactFullpage from '@fullpage/react-fullpage';

import './assets/scss/style.scss';
import Header from './components/Header';
import $ from 'jquery'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 1,
            isMobile: false,
        }

        const width = $("body").width()

        if (width <= 768) {
            this.state.isMobile = true
        }

        this.state.pathname = window.location.pathname
    }

    componentDidMount() {
        if (this.state.pathname === '/ecosystem') {
            this.setState({
                currentIndex: 4
            })
        }

        if (this.state.pathname === '/features') {
            this.setState({
                currentIndex: 3
            })
        }
    }


    onScroll = (destination) => {
        this.setState({
            index: destination.index + 1,
        })
    }

    renderHomePage(move = null) {
        return (
            <React.Fragment>
                <Header />
                <ReactFullpage
                    navigation={true}
                    scrollingSpeed={1000} /* Options here */
                    onLeave={(origin, destination, direction) => this.onScroll(destination)}
                    render={({ state, fullpageApi }) => {
                        if (move && fullpageApi) {
                            fullpageApi.moveTo(move);
                        }
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <HomeController isActive={this.state.index === 1} />
                                </div>
                                <div className="section">
                                    <IntroduceController isActive={this.state.index === 2} />
                                </div>
                                <div className="section">
                                    <FeatureController isActive={this.state.index === 3} />
                                </div>
                                <div className="section">
                                    <WhyController isActive={this.state.index === 4} />
                                </div>
                                {/* <div className="section">
                                    <OurTeamController isActive={this.state.index === 5} />
                                </div> */}
                                <div className="section">
                                    <OurPartnersController isActive={this.state.index === 6} />
                                </div>
                                <div className="section">
                                    <FooderController isActive={this.state.index === 7} />
                                </div>
                            </ReactFullpage.Wrapper>

                        );
                    }}
                />
            </React.Fragment>
        )
    }

    renderPc = () => {

        if (this.state.currentIndex === 3) {
            return this.renderHomePage(3)
        }

        if (this.state.currentIndex === 4) {
            return this.renderHomePage(4)
        }

        return this.renderHomePage()
    }

    renderMobile() {
        const { pathname } = this.state

        return (
            <React.Fragment>
                <Header pathname={pathname} isMobile={this.state.isMobile} />
                <HomeController />
                <IntroduceController></IntroduceController>
                <FeatureController />
                <WhyController />
                <OurPartnersController></OurPartnersController>
                <FooderController />
            </React.Fragment>
        )
    }

    render() {
        const { isMobile } = this.state

        if (!isMobile) return this.renderPc()

        return this.renderMobile()
    }
}


export default App