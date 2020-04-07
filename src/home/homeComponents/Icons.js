import React, {Component} from 'react'
import Bocal from '../../medias/Icons/bocaux.png'
import Earth from '../../medias/Icons/planete.png'
import Velo from '../../medias/Icons/velo.png'
import Local from '../../medias/Icons/local.png'
import '../../App.css'

class Icons extends Component {
    render() {

        let iconStyle = {
            width: '20%',
            margin: 'auto'
        }

        return(
            <div  className='icons'>
                <div><img style={iconStyle} alt='Zero déchets' src={Bocal}/> <br/><br/><h5>Zero Déchets</h5> </div>
                <div><img style={iconStyle} alt='Local' src={Local}/> <br/><br/><h5>Local</h5> </div>
                <div><img style={iconStyle} alt='Velo' src={Velo}/> <br/><br/><h5>Livraison vélo</h5></div>
                <div><img style={iconStyle} alt='Raisonné' src={Earth}/> <br/><br/><h5>Raisonné</h5> </div>
            </div>
        )
    }
}

export default Icons