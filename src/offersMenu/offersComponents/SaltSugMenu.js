import React, { Component } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

class SaltSug extends Component {
    render() {

        return (

            <div className='offerBanner offerBannersSugSalt' >
                <Link style={{ color: 'white', textDecoration: 'none' }} to='/pause-salee'>

                    <h1 className='textBanner'>La Pause Sucrée / Salée</h1>
                    <p>Duo de tarte salée de saison "Alice au pays"<br /> Yaourt et granola "Nü Morning" <br />Jus de fruit bio "Margerie" <br /> Un fruit bio de saison <br />Café et thé bio à volonté</p>
                    <h3>12,80€ HT par personne </h3>
                </Link>

            </div>
        )
    }
}

export default SaltSug