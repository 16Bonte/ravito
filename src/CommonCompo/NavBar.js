import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../medias/logo.png'
import '../App.css'
var Link = require('react-router-dom').Link


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.botRef = React.createRef()
        this.topRef = React.createRef()
    }

    state = {
        active: 'fullMenu'
    }

    componentDidMount() {

        let isChrome = false;
        if (window.chrome && !window.opr){
            isChrome = true;
        }
        this.prev = window.scrollY;
        let mq = window.matchMedia("(max-width: 1100px)");
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
        const window = e.currentTarget;
        if (this.prev > window.scrollY) {
            console.log(this.prev, window.scrollY)
            if (window.scrollY < 220) {
                this.setState({ active: 'fullMenu' })
            }
        } else if (this.prev < window.scrollY) {
            this.setState({ active: 'smallMenu' })

        }
        this.prev = window.scrollY;
    }


    render() {

        // let navLinks = {
        //     paddingRight: "50px",
        //     letterSpacing: '1px',
        //     textAlign: 'right',
        //     fontFamily: "mainFont",
        //     fontSize: '25px',
        //     textShadow: '-0.1px 0 rgb(41, 41, 41), 0 0.1px rgb(41, 41, 41), 0.1px 0 rgb(41, 41, 41), 0 -0.1px rgb(41, 41, 41)'
        // };



        return (
            <Navbar fixed="top" className='navBarSets' expand="lg">
                <Navbar.Brand href="./"><img className={this.state.active} src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className='navLinks' to='/'>
                            <div >Home</div>
                        </Link>
                        <Link className='navLinks' to='/offres'>
                            <div >Nos Offres</div>
                        </Link >
                        <Link className='navLinks' to='/a-la-carte'>
                            <div >À la carte</div>
                        </Link>
                        <Link className='navLinks' to='/a-propos'>
                            <div >À propos</div>
                        </Link>
                        <Link className='navLinks' to='/contact'>
                            <div >Contact</div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar