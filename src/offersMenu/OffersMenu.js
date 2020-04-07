import React, { Component } from 'react'
import '../App.css'
import NavBar from '../CommonCompo/NavBar'
import BreakMenu from './offersComponents/BreakMenu'
import SugarMenu from './offersComponents/SugarMenu'
import SaltSugMenu from './offersComponents/SaltSugMenu'
import Regular from './offersComponents/Regular'
import Footer from '../CommonCompo/Footer'
import FadeIn from 'react-fade-in'

class OffersMenu extends Component {

    render() {


        return (
            <span>
                <NavBar />
                <div className='classicPages'>
                    <FadeIn>
                        <h1 className='headTitle'> Les Offres Clés en Main du Ravito</h1>
                        <BreakMenu />
                        <SugarMenu />
                        <SaltSugMenu />
                        <Regular />
                    </FadeIn>
                    <Footer />
                </div>
            </span>

        )
    }
}


export default OffersMenu;
