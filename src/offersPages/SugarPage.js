import React, { Component, Fragment } from 'react';
import '../App.css';
import NavBar from '../CommonCompo/NavBar'
import FadeIn from 'react-fade-in'
import 'bootstrap/dist/css/bootstrap.min.css';
import SugarImg from '../medias/sucree2.jpg'
import Footer from '../CommonCompo/Footer'
import CardTemp from './commonForPages/CardTemplate'
import OfferForm from './commonForPages/OfferForm'

class SugarPage extends Component {

    render() {

        let menu = <span>Formule Sucrée</span>

        let text = <span>
            <li>1 tarte de saison BIO "Alice"</li>
            <li>1 cookie d'Alice</li>
            <li>1 fruit de saison BIO</li>
            <li>1 jus de fruit bio "Margerie"</li>
            <li>Café et thé bio à volonté</li>
        </span>

        let text2 = <span>7,80€ HT par personne</span>

        let unit = 7.8

        return (
            <Fragment>
                <NavBar />
                <FadeIn>

                    <div className='classicPages singlePageSect'>
                        <div className=''>
                            <CardTemp
                                menu={menu}
                                cardImg={SugarImg}
                                cardText={text}
                                cardText2={text2}
                            />
                        </div>
                        <div className='' >
                            <OfferForm
                                menu={menu}
                                unit={unit}
                            />
                        </div>
                    </div>
                </FadeIn>
                <Footer />
            </Fragment>

        )
    }
}

export default SugarPage;