import React, { Component, Fragment } from "react"
import NavBar from '../CommonCompo/NavBar'
import Carousel from './homeComponents/Carousel'
import Icons from './homeComponents/Icons'
import Presentation from './homeComponents/Presentation'
import Footer from '../CommonCompo/Footer'
import FadeIn from 'react-fade-in'
import '../App.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.botRef = React.createRef()
        this.topRef = React.createRef()
    }

    state = {
        down: false,
        up: false,
    }

    componentDidMount() {
        var isChrome = false;
        if (window.chrome && !window.opr){
            isChrome = true;
        }
        console.log(isChrome);
        this.prev = window.scrollY;
        var mq = window.matchMedia("(max-width: 1100px)");
        if (mq.matches) {
            console.log('no')
        }
        else {
            isChrome
            ?
            window.addEventListener('scroll', e => this.handleNavigation(e))
            :
            console.log('bla')
        }
    }

    handleNavigation = (e) => {
        if (window.location.pathname === '/') {
            const window = e.currentTarget;
            if (this.prev > window.scrollY) {
                this.setState({ down: false })
                if ((this.state.up === false) && (this.prev < 790)) {
                    this.setState({ up: true, down: false })
                    window.scrollTo(0, this.topRef.offsetTop)
                }
                console.log(this.prev)

            } else if (this.prev < window.scrollY) {
                if (this.state.down === false) {
                    console.log(this.prev, window.scrollY)
                    this.setState({ down: true, up: false })
                    window.scrollTo(0, this.botRef.offsetTop)
                }

            }
            this.prev = window.scrollY;
        } else {
            console.log('good')
        }

    }

    render() {
        return (
            <Fragment>
                <NavBar 
                ref={(ref) => this.topRef = ref}
                />
                <div className='classicPages'>
                    <FadeIn delay='300'>
                        <Carousel />
                        <Icons />
                    <Presentation />
                    </FadeIn>
                    <div ref={(ref) => this.botRef = ref}></div>
                    <Footer />

                </div>
            </Fragment>


        )
    }
}

export default Home