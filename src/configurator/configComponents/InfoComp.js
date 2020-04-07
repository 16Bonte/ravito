import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
var Link = require('react-router-dom').Link

class InfoComp extends Component {
    constructor() {
        super()

        this.state = {
            nom: '',
            prenom: ''
        }

    }

    handleName = event => {
        this.setState({ nom: event.target.value })
    }

    handleSurname = event => {
        this.setState({ prenom: event.target.value })
    }

    handleAddress = event => {
        this.setState({ adresse: event.target.value })
    }

    handleCp = event => {
        this.setState({ cP: event.target.value })
    }

    handleCity = event => {
        this.setState({ ville: event.target.value })
    }

    handleMail = event => {
        this.setState({ mail: event.target.value })
    }

    handlePhone = event => {
        this.setState({ phone: event.target.value })
    }

    handleMessage = event => {
        this.setState({ message: event.target.value })
    }

    sendInfoDad = () => {
        let infos = this.state
        this.props.upDateInfo(infos)
    }

    render() {
        let inputStyle = {
            padding: '0.3rem'
        }

        let inputMsg = {
            height: '10rem'
        }

        let myBut = {
            display: 'grid',
            justifyContent: 'left'
        }

        let duo = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        }

        let sendButDiv = {
            display: 'flex',
            justifyContent: 'center'
        }

        let sendBut = {
            marginTop: '2rem',
            marginBottom: '2rem',
            height: '3rem',
            width: '20rem',
            backgroundColor: 'white',
            border: 'none',
            fontSize: 'x-large',
            fontFamily: 'mainFont'
        }

        let myHr = {
            marginTop: '3rem',
            marginBottom: '3rem',
            borderTop: '5px solid #43a62a70'
        }

        return (
            <div className='cateBlock'>
                <h2 className='productKindTitle'>Vos Informations</h2>
                <Form>
                    <div style={duo}>
                        <div style={inputStyle}>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="string"
                                onChange={this.handleName}
                            />
                        </div>
                        <div style={inputStyle}>
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control
                                type="string"
                                onChange={this.handleSurname}
                            />
                        </div>
                    </div>
                    <div style={inputStyle}>
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control
                            type="string"
                            onChange={this.handleAddress}
                        />
                    </div>
                    <div style={duo}>
                        <div style={inputStyle}>
                            <Form.Label>Code postal</Form.Label>
                            <Form.Control
                                type="string"
                                onChange={this.handleCp}
                            />
                        </div>
                        <div style={inputStyle}>
                            <Form.Label>Ville</Form.Label>
                            <Form.Control
                                type="string"
                                onChange={this.handleCity}
                            />
                        </div>
                    </div>

                    <div style={duo}>
                        <div style={inputStyle}>
                            <Form.Label>Adresse Mail</Form.Label>
                            <Form.Control
                                type="string"
                                onChange={this.handleMail}
                            />
                        </div>
                        <div style={inputStyle}>
                            <Form.Label>Téléphone</Form.Label>
                            <Form.Control
                                type="string"
                                onChange={this.handlePhone}
                            />
                        </div>
                    </div>
                    <div style={inputStyle}>
                        <Form.Label>Message (Factulatif)</Form.Label>
                        <Form.Control
                            style={inputMsg}
                            type="string"
                            onChange={this.handleMessage}
                        />
                    </div>
                </Form>
                <div style={sendButDiv}>
                    <Link to='/commande-envoyee'>
                        <button
                            style={sendBut}
                            className='btn-two'
                        >Envoyer ma demande
                        </button>
                    </Link>
                </div>
                <hr style={myHr} />
                <div style={myBut}>
                    <button className='prevNextBut'
                        onClick={this.props.goDrink}
                    >Précédent</button>
                </div>
            </div>
        )
    }
}

export default InfoComp