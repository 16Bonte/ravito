import React, { Component, Fragment } from 'react';
import '../App.css';
import NavBar from '../CommonCompo/NavBar'
import FLB from '../medias/equipe.jpg'
import alice from '../medias/alice.png'
import auPain from '../medias/auPain.png'
import newTree from '../medias/newTree.png'
import Footer from '../CommonCompo/Footer'
import FadeIn from 'react-fade-in'

class About extends Component {

  render() {

    let pres = {
      paddingLeft: '2rem',
      paddingRight: '2rem',
      display: 'flex',
      textAlign: 'center'
    }

    let teamImg = {
      paddingTop: '2rem',
      borderRadius: '5px',
      width: '100%'
    }

    let myHr = {
      marginTop: '8rem',
      marginBottom: '8rem',
      borderTop: '5px solid #43a62a70'
    }

    let partners = {
      textAlign: 'center',
      fontFamily: 'mainFont',
      marginTop: '0',
      marginBottom: '7rem'
    }

    let photoStyle = {
      width: '80%',
      margin: 'auto',
      height: 'auto%',
      // marginBottom: '4rem',
      display: 'flex',
      alignItems: 'center'
    }


    let partnersText = {
      paddingLeft: '15%',
      paddingRight: '15%',
      textAlign: 'center'
    }

    let partnersTextDiv = {
      display: 'flex',
      alignItems: 'center'
    }


    return (
      <Fragment>
        <NavBar />
        <div className='classicPages'>
          <FadeIn>
          <h1 className='headTitle'>Qui sommes-nous ?</h1>
          <div className='presAbout'>
            <div style={pres}>
              <h5>Nous proposons à nos clients une offre de traiteur unique. <br />
                Le Ravito est un ravitaillement d'entreprise pensé et designé par les cyclistes. <br /><br />
                Fini le serveur, les croissants et le café "cheap". Chez le Ravito, nos produits sont délicieux, éthiques, bio et locaux. Lors de réunion, meeting, petit déjeuner, faites le plein d'energie avec un max de calories grâce à des produits sains et des sucres naturels. <br /><br />
                C'est l'alternative idéale à vous petits déjeuner, pause sucrées/salées. Inutile de préciser que notre offre est zéro déchet et que tous nos buffets sont livrés en vélo-cargo. <br /><br />Le Ravito a été créé par l'équipe de coursiers à vélo Fends La Bise, première société de coursier à vélo-cargo en région Rhône-Alpes. FLB, c'est 6 années d'expérience de transport de nourriture, de nutrition sportive et de clients responsables.
              </h5>
            </div>
            <div>
              <img style={teamImg} src={FLB} alt="equipe" />
            </div>
          </div>
          </FadeIn>
          <hr style={myHr} />
          <h1 style={partners}>Nos partenaires</h1>
          <div className='partnersBlock'>
            <div className='partners'>
              <div  className='imgAbout' style={photoStyle}>
                <img style={photoStyle} src={alice} alt="alice" />
              </div>
              <div style={partnersTextDiv}>
                <div>
                  <h3 style={partnersText} className='computerBlocks'>Alice au pays</h3>
                  <h6 style={partnersText}>Nunc consectetur ex sem, a suscipit dui hendrerit vel. Nullam quis elit tortor. Fusce vitae varius mauris. Vivamus semper odio id eros molestie viverra.<br /><br /> Maecenas dignissim metus in enim fermentum dapibus.  Praesent a neque rutrum, auctor nulla varius, laoreet nulla. Vestibulum dignissim neque risus, sed gravida leo cursus sed.</h6>
                </div>
              </div>
            </div>
            <hr className='betwPartners'/>
            <div className='partnersRev'>
              <div style={partnersTextDiv}>
                <div>
                  <h3 style={partnersText} className='computerBlocks'>Au Pain de Mon Grand Père</h3>
                  <h6 style={partnersText}>Nunc consectetur ex sem, a suscipit dui hendrerit vel. Nullam quis elit tortor. Fusce vitae varius mauris. Vivamus semper odio id eros molestie viverra.<br /><br /> Maecenas dignissim metus in enim fermentum dapibus.  Praesent a neque rutrum, auctor nulla varius, laoreet nulla. Vestibulum dignissim neque risus, sed gravida leo cursus sed.</h6>
                </div>
              </div>
              <div className='imgAbout changeOrder'   style={photoStyle}>
                <img style={photoStyle} src={auPain} alt="alice" />
              </div>
            </div>
            <hr className='betwPartners'/>
            <div className='partners'>
              <div className='imgAbout'  style={photoStyle}>
                <img style={photoStyle} src={newTree} alt="newTree" />
              </div>
              <div>
                <h3 style={partnersText} className='computerBlocks'>Newtree</h3>
                <h6 style={partnersText}>Nunc consectetur ex sem, a suscipit dui hendrerit vel. Nullam quis elit tortor. Fusce vitae varius mauris. Vivamus semper odio id eros molestie viverra.<br /><br /> Maecenas dignissim metus in enim fermentum dapibus.  Praesent a neque rutrum, auctor nulla varius, laoreet nulla. Vestibulum dignissim neque risus, sed gravida leo cursus sed.</h6>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}


export default About;