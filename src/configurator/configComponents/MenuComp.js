import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import MenuTemp from './MenuTemp'
import breakImg from '../../medias/breakL.jpg'
import sugarImg from '../../medias/sucree.jpg'
import saltImg from '../../medias/sucresale.jpg'
import FadeIn from 'react-fade-in'

class MenuComp extends Component {

    nbBreak = event => {
        this.setState({ breaks: event.target.value }, () => { this.props.breaksInfo(this.state.breaks) })
    }

    nbSugar = event => {
        this.setState({ sugars: event.target.value }, () => { this.props.sugarInfo(this.state.sugars) })
    }

    nbSalt = event => {
        this.setState({ salts: event.target.value }, () => { this.props.saltInfo(this.state.salts) })
    }


    render() {

        let bol = {
            fontWeight: 'bold',
            textAlign: 'center'
        }
        let breakText = <span><br /> 1 brioche à l'ancienne "Grand-père"<br />
            1 part de Cake BIO "Alice"<br />
            1 jus de fruit bio "Margerie" <br />
            Café et thé bio à volonté.
            </span>

        let sugarText = <span><br /> 1 tarte de saison BIO "Alice"<br />
            1 cookie d'Alice<br />
            1 fruit de saison BIO <br />
            1 jus de fruit bio "Margerie"<br />
            Café et thé bio à volonté
            </span>

        let saltText = <span><br />Duo de tarte salée de saison "Alice au pays"<br />
            Yaourt et granola "Nü Morning"<br />
            1 fruit bio de saison<br />
            1 Jus de fruit bio "Margerie" <br />
            Café et thé bio à volonté
            </span>

        let inputStyle = {
            paddingLeft: '10%',
            paddingRight: '10%',
            display: 'flex'
        }

        let inputContent = {
            marginLeft: '1rem',
            width: '5rem',
            height: '2rem'
        }


        let myBut = {
            display: 'grid',
            justifyContent:'right'
        }






        return (
            <FadeIn>
                <div className='cateBlock'>
                <h2 className='productKindTitle'>Nos Formules</h2>
                    <div className='menuGrid'>
                        <div className='menuCard'>
                            <MenuTemp
                                type='Petit Déjeuner'
                                cardText={breakText}
                                cardImg={breakImg}
                            />
                            <h6 style={bol}>5,90€ HT par personne</h6>
                            <Form>
                                <Form.Group style={inputStyle} controlId="exampleForm.ControlInput1">
                                    <Form.Label>Quantité</Form.Label>
                                    <Form.Control
                                        style={inputContent}
                                        type="number"
                                        onChange={this.nbBreak}
                                        value={this.props.breaks}
                                        placeholder='0'
                                        min='0'
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='menuCard'>
                            <MenuTemp
                                type='Pause Sucrée'
                                cardText={sugarText}
                                cardImg={sugarImg}
                            />
                            <h6 style={bol}>7,80€ HT par personne</h6>
                            <Form>
                                <Form.Group style={inputStyle} controlId="exampleForm.ControlInput1">
                                    <Form.Label>Quantité</Form.Label>
                                    <Form.Control
                                        style={inputContent}
                                        type="number"
                                        onChange={this.nbSugar}
                                        placeholder='0'
                                        min='0'
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='menuCard'>
                            <MenuTemp
                                type='Pause Salée'
                                cardText={saltText}
                                cardImg={saltImg}
                            />
                            <h6 style={bol}>12,80€ HT par personne</h6>
                            <Form>
                                <Form.Group style={inputStyle} controlId="exampleForm.ControlInput1">
                                    <Form.Label>Quantité</Form.Label>
                                    <Form.Control
                                        style={inputContent}
                                        type="number"
                                        onChange={this.nbSalt}
                                        placeholder='0'
                                        min='0'
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>

                </div>
                    <div style={myBut}>
                        <button className='prevNextBut'
                            onClick={this.props.goSugar}
                        >Suivant</button>
                    </div>
            </FadeIn>
        )
    }
}

export default MenuComp

