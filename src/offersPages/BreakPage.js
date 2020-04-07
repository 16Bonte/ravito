import React, { Component, Fragment } from 'react';
import '../App.css';
import NavBar from '../CommonCompo/NavBar'
import FadeIn from 'react-fade-in'
import 'bootstrap/dist/css/bootstrap.min.css';
import BreakImg from '../medias/breakfast.jpg'
import Footer from '../CommonCompo/Footer'
import CardTemp from './commonForPages/CardTemplate'
import OfferForm from './commonForPages/OfferForm'

class BreakPage extends Component {

  render() {

    let menu = <span>Petit Déjeuner</span>

    let text = <span><li>1 brioche à l'ancienne "Grand-père"</li>
      <li>1 part de Cake BIO "Alice"</li> 
        <li>1 jus de fruit bio "Margerie" </li>
        <li>Café et thé bio à volonté</li>
    </span>

    let text2 = <span>5,90€ HT par personne</span>

    let unit = 5.9




    return (
      <Fragment>
        <NavBar />
        <FadeIn>

          <div className='classicPages singlePageSect'>
            <div className=''>
              <CardTemp
                menu={menu}
                cardImg={BreakImg}
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

export default BreakPage;