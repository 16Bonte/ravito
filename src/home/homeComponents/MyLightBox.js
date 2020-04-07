import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import PetitDej from "../../medias/buffet2.jpg";
import Buffet from "../../medias/buffet3.jpg";
import SucréSalé from "../../medias/sucree.jpg";
import Brioches from "../../medias/brioches.jpg";

const options = {
    transitionTimingFunction: "linear(0,0,0.5,1)",
    slideTransitionSpeed: 300,
    showCaption: false,
    buttonsIconPadding: "1px",
    buttonsIconColor: "#42a62a",
    buttonsBackgroundColor: "transparent",
    enablePanzoom: false,
    hideControlsAfter: 0,
  }

let images1 = {
    height: '8rem',
    borderRadius: '5px',
    margin: '0.8rem'
}

let imageBlock = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
}



function MyLightBox() {
  return (
    <div className="MyLightBox">
      <SRLWrapper options={options}>
        <div  style={imageBlock}>
            <div>
              <img className='point' style={images1}  src={PetitDej} alt="Petit Déjeuner" />
            </div>         
            <div>
              <img className='point' style={images1} src={SucréSalé} alt="Sucré salé" />
            </div>
            <div>
              <img className='point' style={images1} src={Brioches} alt="Brioches" />
            </div>
            <div>
              <img className='point' style={images1} src={Buffet} alt="Buffet" />
            </div>
        </div>
      </SRLWrapper>
    </div>
  );
}
 
export default MyLightBox;