import React, { useState, Fragment } from 'react';
import '../App.css';
import SideImg from '../medias/buffet0.jpg'
import NavBar from '../CommonCompo/NavBar'
import Footer from '../CommonCompo/Footer'
import FadeIn from 'react-fade-in'


let Contact = () => {

    let [form, setForm] = useState(false)

    let handle = () => {
        setForm(true)
    }

    let myButton = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
    }

    let formStyle = {
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gridTemplateColumns: '1fr 1fr',
        marginTop: '2rem'
    }

    let inputs = {
        margin: '1rem'
    }

    let myImg = {
        width: '100%',
        borderRadius: '5px'
    }

    return (
        <Fragment>
            <NavBar />
            <FadeIn>
                <div className='classicPages'>
                    {form
                        ?
                        <h1 className='headTitle contactSent'>Merci pour votre message  <br />Nous reprendrons contact avec vous dans les plus brefs délais</h1>
                        :
                        <Fragment>
                            <h1 className='headTitle'>Un devis, une demande, une info ? <br /> Contactez-nous !  </h1>
                            <div className='contactPage'>
                                <div>
                                    <form id="contact-form" onSubmit={handle} method="POST">
                                        <div style={formStyle}>
                                            <div style={inputs} className="form-group">
                                                <label >Nom</label>
                                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                                            </div>
                                            <div style={inputs} className="form-group">
                                                <label>Prénom</label>
                                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div style={inputs} className="form-group">
                                            <label >Entreprise</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div style={formStyle}>
                                            <div style={inputs} className="form-group">
                                                <label >Adresse mail</label>
                                                <input type="email" className="form-control" aria-describedby="emailHelp" />
                                            </div>
                                            <div style={inputs} className="form-group">
                                                <label >Téléphone</label>
                                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                                            </div>
                                        </div>

                                        <div style={inputs} className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" rows="5"></textarea>
                                        </div>
                                        <div style={myButton}>
                                            <button type="submit" className="btn btn-primary">Envoyer</button>
                                        </div>

                                    </form>
                                </div>
                                <div className='computerBlocks'>
                                    <img style={myImg} src={SideImg} alt="" />
                                </div>
                            </div>
                        </Fragment>
                    }
                    <Footer />
                </div>
            </FadeIn>
        </Fragment>
    )
}


export default Contact;