import React, { Component } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";



class CardTemplate extends Component {
    render() {
        let myCard = {
            width: '100%',
            border: '0',
            padding: '2rem'
        }

        let inter = {
            marginTop: '2rem',
            lineHeight: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontWeight: 'bold',
        }

        let tittle = {
            textAlign: 'center',
            fontWeight: 'bold'
            // fontFamily: 'navPolice',
            // textShadow: '-0.5px 0 rgba(0, 0, 0, 0.692), 0 0.5px rgba(0, 0, 0, 0.692), 0.5px 0 rgba(0, 0, 0, 0.692), 0 -0.5px rgba(0, 0, 0, 0.692)'
        }

        let myImg = {
            marginTop: '-4rem',
            width: '100%',
            borderRadius: '10px'
        }

        const options = {
            transitionTimingFunction: "linear(0,0,0.5,1)",
            showCaption: false,
            buttonsIconPadding: "1px",
            buttonsIconColor: "transparent",
            buttonsBackgroundColor: "transparent",
            enablePanzoom: false,
            hideControlsAfter: 0,
            showThumbnails: false
        };

        return (
            <span>
                <h2 style={tittle}>{this.props.menu}</h2>
                <h3 style={tittle}>{this.props.cardText2}</h3> <br /><br />
                <div style={myCard}>
                    <SimpleReactLightbox
                        buttonsIconColor='transparent'
                        onClick={this.clickBox}>
                        <SRLWrapper options={options}>
                            <div >
                                <div>
                                    <img className='point' style={myImg} variant="top" alt='menu' src={this.props.cardImg} />
                                </div>
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                    <div >
                        <h5 style={inter}>
                            <div>{this.props.cardText}</div>
                            <div>{this.props.cardText1}</div>
                        </h5>
                    </div>
                </div>
            </span>
        )
    }
}

export default CardTemplate