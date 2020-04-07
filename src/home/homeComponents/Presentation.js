import React, { Component, Fragment } from 'react'
import SimpleReactLightbox from "simple-react-lightbox";
import MyLightBox from './MyLightBox'
import '../../App.css'
import { Link } from 'react-router-dom';

class Presentation extends Component {


    render() {


        let myText = {
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingBottom: '4rem'
        }

        let tittle = {
            fontFamily: 'mainFont',
            textAlign: 'center',
            textShadow: '-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black',
            paddingTop: '5rem'
        }

        let about = {
            textAlign: 'center'
            // fontSize: 'larger'
        }

        let myBut = {
            // border: '1px solid black',
            textAlign: 'center',
            display: 'flex',
            marginBottom: '3rem',
            width: '16rem',
            fontFamily: 'mainFont',

        }

        let butText = {
            margin: 'auto',
            textAlign: 'center',
            color: 'black',
            textDecoration: 'none',
            outline:'none'

        }


        return (
            <Fragment>
                <div className='presentation'>

                    <div style={myText}>
                        <h1 style={tittle}>Le Ravito</h1><br />
                        <p style={about} >Le Ravito est un service de ravitaillement en entreprise. Nous montons des buffets sucrés et salés éphémères pour vos réunions, évenéments et cocktails. <br /> <br /> C’est une alternative ultra-fun, qualitative et responsable à vos besoins traiteurs. Toutes nos livraisons sont réalisées en vélo-cargo, nos produits sont 100% locaux, bio, frais et artisanaux. Le Ravito s’engage pour la réduction des déchets, en assurant l’absence de contenant à usage unique. <br /> <br />  De plus, nos livreurs à vélos effectuerons une boucle retour pour récupérer la vaisselle réutilisable. Notre service est labellisée LVED par la Ville de Lyon. Découvrez nos formules ou créez votre propre ravitaillement.</p>
                    </div>
                    <div className='homeButtons'>


                        <Link style={butText} to='/offres'>
                            <button
                                style={myBut} className='btn btn-two'>
                                <h3 style={butText}>Découvrez Nos Formules !</h3>
                            </button>
                        </Link>
                        <Link style={butText} to='/a-la-carte'>
                            <button style={myBut} className='btn btn-two'>
                                <h3 style={butText}>Configurez Votre Ravitaillement !</h3>
                            </button>

                        </Link>
                        <Link style={butText} to='/a-propos'>
                            <button style={myBut} className='btn btn-two'>
                                <h3 style={butText}>En Savoir Plus sur Le Ravito</h3>
                            </button>
                        </Link>

                    </div>

                </div>
                <SimpleReactLightbox
                    onClick={this.clickBox}>
                    <MyLightBox />
                </SimpleReactLightbox>
            </Fragment>
        )
    }
}

export default Presentation