import React, { Component } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'


class SugarMenu extends Component {
    render() {

        return (

            <div className='offerBannersSug offerBanner'>
                <Link style={{ color: 'white', textDecoration: 'none' }} to='/pause-sucree'>
                    <h1 className='textBanner'>La pause sucrée</h1>
                    <p>Une tarte de saison BIO "Alice" <br />Le cookie d'Alice <br />Un fruit de saison BIO <br />Un jus de fruit bio "Margerie"<br />Café et thé bio à volonté</p>
                    <h3>7,80€ HT par personne </h3>
                </Link>
            </div>
        )
    }
}

export default SugarMenu