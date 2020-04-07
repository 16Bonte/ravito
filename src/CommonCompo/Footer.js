import React, { Component, Fragment } from 'react'
import logo from '../medias/logoBot.png'
import '../App.css'

class Footer extends Component {
    render() {
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
                <div className='footer computerBlocks' style={footer}>
                    <h4>32 rue Marietton</h4>
                    <h4>69009 Lyon</h4>
                    <img style={logoStyle} src={logo} alt="Logo" />
                    <h4>04 20 20 20 20</h4>
                    <h4>projetfictif@gmail.com</h4>
                </div >
                <div className='mobileBlocks' style={footer}>
                    <h4>projetfictif@gmail.com</h4><br/>
                    <img style={logoStyle} src={logo} alt="Logo" /><br /><br/>
                    <h4>04 20 20 20 20</h4>

                </div >
            </Fragment>

        )
    }
}

export default Footer