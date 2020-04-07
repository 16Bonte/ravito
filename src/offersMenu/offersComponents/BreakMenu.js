import React, { Component } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'


class BreakFast extends Component {
  render() {

    return (
        <div className='offerBannersBreak offerBanner'>
        <Link style={{ color: 'white', textDecoration: 'none' }} to='/petit-dejeuner'>
          <h1 className='textBanner'>Le Petit Déjeuner</h1>
          <p>Une brioche à l'ancienne "Grand-père"<br /> Une part de Cake BIO "Alice"<br /> Une jus de fruit bio "Margerie" <br />Café et thé bio à volonté.</p>
          <h3>5,90€ HT par personne </h3>
          </Link>
        </div>
    )
  }
}

export default BreakFast