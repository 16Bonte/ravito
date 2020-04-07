import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carou1 from '../../medias/Carou/2.jpg'
import carou2 from '../../medias/Carou/4.jpg'
import carou3 from '../../medias/Carou/3.jpg'
import imgMob from '../../medias/ravitaillement.jpg'
var Link = require('react-router-dom').Link


class Carousel extends React.Component {
    render() {

        let homeBan = {
            width: '100%',
            height: '100%',
            borderBottom: '4px solid #43a62a70',
        }

        var settings = {
            dots: true,
            accessibility: true,
        };


        return (
            <Fragment>
                <div className='computerBlocks'>
                    <Slider {...settings}>
                        <div className="carou">
                            <img style={homeBan} src={carou2} alt='bannière accueil' />
                            <Link to='/pause-salee'>
                                <div className="carouText top-right">
                                    <h1>Formule le Champion</h1>
                                    <h3>50% Sucré, 50% salé</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="carou">
                            <img style={homeBan} src={carou1} alt='bannière accueil' />
                            <Link to='/la-reguliere'>
                                <div className="bottom-right">
                                    <h1>Installer un coin ravitaillement</h1>
                                    <h3>Dans votre entreprise</h3>
                                </div>
                            </Link>
                        </div>

                        <div className="carou">
                            <img style={homeBan} src={carou3} alt='bannière accueil' />
                            <Link to='/pause-salee'>
                                <div className="carouText top-right">
                                    <h1>Formule Baroudeur</h1>
                                    <h3>Encas sucrés</h3>
                                </div>
                            </Link>
                        </div>
                    </Slider>
                </div>
                <div className='mobileBlocks'>
                    <img style={homeBan} src={imgMob} alt='bannière accueil' />
                </div>
            </Fragment>

        );
    }
}

export default Carousel