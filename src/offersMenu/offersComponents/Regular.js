import React, { Component } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'


class Regular extends Component {
  render() {

    return (
      <div className='offerBanner offerBannerRegular'>
        <Link style={{ color: 'white', textDecoration: 'none' }} to='/la-reguliere'>

          <h1>La régulière</h1>
          <p>Installer un ravitaillement permanent au sein de votre entreprise <br /> Rendez vos employés heureux et efficaces ! </p>
          <h3>Tarif sur devis <br/>Jusqu'à - 40%</h3>
        </Link>

      </div>
    )
  }
}

export default Regular