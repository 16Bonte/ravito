import React, { Component, Fragment } from 'react';
import '../App.css';
import NavBar from '../CommonCompo/NavBar'
import FadeIn from 'react-fade-in'
import 'bootstrap/dist/css/bootstrap.min.css';
import BreakImg from '../medias/buffet3.jpg'
import Footer from '../CommonCompo/Footer'
import { Link } from 'react-router-dom'

class RegularPage extends Component {

    render() {

        let myImg = {
            width: '100%',
            paddingRight: '1rem',
            paddingLeft: '1rem',
            marginBottom: '1rem'
        }

        let text = {
            fontFamily: 'mainFont',
            // padding: '2rem',
            // textShadow: '-0.5px 0 rgba(0, 0, 0, 0.692), 0 0.5px rgba(0, 0, 0, 0.692), 0.5px 0 rgba(0, 0, 0, 0.692), 0 -0.5px rgba(0, 0, 0, 0.692)',
            textAlign: 'center',
            paddingRight: '1rem',
            paddingLeft: '1rem',
            paddingTop: '2rem'
        }

        return (
            <Fragment>
                <NavBar />
                <div className='classicPages'>
                    <FadeIn>
                        <h1 className='headTitle'>La Reguliere</h1>

                        <div className='regular'>
                            <div>
                                <img style={myImg} src={BreakImg} alt="Buffet" />
                            </div>
                            <div>
                                <h5 style={text}>Installer un ravitaillement permanent au sein de vos locaux, c’est garantir une source d’énergie saine et un endroit fun et relaxant pour vos employés. <br /><br />Vous sélectionnez vos produits, nous vous ravitaillons automatiquement.<br /><br /> Votre ravito est personnalisable à l’infini. Choisissez parmi une centaine de produits sains, locaux, bio, frais, salés, sucrés, et insolites. <br/> Avec le Ravito, le plaisir vous conduira à la performance ! </h5>
                            </div>
                        </div>
                        <h3 style={text}>Contactez-nous au 04 20 20 20 20 ou via notre <Link to='/contact'>formulaire de contact</Link> </h3>
                    </FadeIn>
                    <Footer />

                </div>

            </Fragment>
        )
    }
}

export default RegularPage;