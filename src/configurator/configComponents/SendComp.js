import React, { Fragment } from "react"
import NavBar from '../../CommonCompo/NavBar'
import logo from '../../medias/logoBot.png'
import FadeIn from 'react-fade-in'
import '../../App.css'

let SendCom = () => {

    let footer = {
        height: '6rem',
        borderTop: '1px solid #42a62a',
        marginBottom: '0',
        marginTop: '3vh',
        backgroundColor: 'white',
        paddingTop: '1.5rem',
        textAlign: 'center'
    }

    let logoStyle = {
        height: '65%'
    }


    return (
        <Fragment>
            <NavBar />
            <div className='classicPages'>
                <FadeIn>
                    <div className='receivedOrder'>
                        <h1 >Votre demande a bien été envoyé !</h1>
                        <h3>Notre équipe vous recontacte au plus vite pour vous en dire plus sur notre prestation</h3>
                    </div>
                </FadeIn>
                <div className='footer computerBlocks orderSentFooter' style={footer}>
                    <h4>32 rue Rabelais</h4>
                    <h4>69003 Lyon</h4>
                    <img style={logoStyle} src={logo} alt="Logo" />
                    <h4>04 56 88 22 92</h4>
                    <h4>leravito@gmail.com</h4>
                </div >
                <div className='mobileBlocks' style={footer}>
                    <h4>leravito@gmail.com</h4><br/>
                    <img style={logoStyle} src={logo} alt="Logo" /><br /><br/>
                    <h4>04 56 88 22 92</h4>

                </div >
            </div>


        </Fragment>

    )
}

export default SendCom