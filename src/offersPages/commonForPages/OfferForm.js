import React, { Component } from 'react'
import '../../App.css'
import Form from 'react-bootstrap/Form'
import "react-datepicker/dist/react-datepicker.css"
// import DatePicker from 'react-datepicker'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom';


class OfferForm extends Component {
    state = {
        startDate: new Date(),
    }

    nbOrders = event => {
        let newVal = event.target.value
        if (newVal < 1) {
            this.setState({ nbOrders: false })
        } else {
            this.setState({ nbOrders: event.target.value }, console.log(this.state))
        }
    }


    city = event => {
        this.setState({ city: event.target.value }, console.log(this.state))
    }


    render() {
        let inputsStyle = {
            height: '3rem',
            // textAlign: 'center',
            width: '8rem'
        }

        let inputSect = {
            display: 'flex'
        }


        let sendButton = {
            marginLeft: '30%',
            marginRight: '30%',
            marginTop: '4vh',
            marginBottom: '5vh',
            color: 'black',
            backgroundColor: 'white',
            border: 'none'
        }

        let tittle = {
            textAlign: 'center',
            marginTop: '3rem',
        }

        let rightCol = {
            textAlign: 'right',
        }

        let inputBut = {
            gridColumn: 'span 6',
            margin: 'auto'
        }

        let invoice = {
            display: 'flex',
            marginBottom: '2rem',
            justifyContent: 'center'
            // width: '100%'
        }

        let totalMenu = (Math.round(this.state.nbOrders * this.props.unit * 100) / 100).toFixed(2);
        let total = ((Math.round(this.state.nbOrders * this.props.unit * 100) / 100) + 50).toFixed(2)
        let totalTTC = (((Math.round(this.state.nbOrders * this.props.unit * 100) / 100) + 50) / 100 * 120).toFixed(2)


        return (
            <span className='contain'>
                <h4 style={tittle}>Simulez un devis !</h4> <br />
                <div style={inputSect}>
                    <div style={inputBut}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Ville</Form.Label>
                                <Form.Control as="select"
                                    style={inputsStyle}
                                    type="text"
                                    onChange={this.city}
                                >
                                    <option>Lyon</option>
                                    <option>Villeurbanne</option>
                                    {/* <option>Autres, sur </option> */}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                    <div style={inputBut}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Quantité (>10)</Form.Label>
                                <Form.Control style={inputsStyle}
                                    type="number"
                                    onChange={this.nbOrders}
                                    defaultValue={0}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <br />
                {this.state.nbOrders
                    ?
                    <FadeIn>
                        <div className='row' style={invoice}>
                            <div >
                                {this.state.nbOrders} {this.props.menu}<br />
                                Livraison & Retour matériel<br /><br />
                                <h4>Total HT:</h4>
                                <h4>Total TTC:</h4>

                            </div>
                            <div style={rightCol} >
                                {totalMenu + ' €'}<br />
                                50 €<br /><br />
                                <h4>{total} €</h4>
                                <h4>{totalTTC} €</h4>
                            </div>

                        </div>
                    </FadeIn>
                    :
                    ''
                }
                <Link to='/a-la-carte'>
                    <button className='btn-two' style={sendButton}>
                        Envoyer une demande
                </button><br /><br />
                </Link>
                <h4 style={tittle}>Vous pouvez également nous joindre directement au <br /> 04 20 20 20 20</h4> <br />


                {/* <h3> */}
                {/* <br />Total HT: {this.state.nbOrders ? totalHT + ' €' : ''} */}
                {/* <br />Total TTC: {this.state.nbOrders ? totalTTC + ' €' : ''}</h3> */}

                <div>

                </div>
            </span>
        )
    }
}

export default OfferForm