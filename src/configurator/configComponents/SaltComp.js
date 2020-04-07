import React, { Component } from 'react'
import SugarCard from './SugarCard'
import FadeIn from 'react-fade-in'

class SaltComp extends Component {


    updateQuantities = prod => {
        this.props.updateQuantities(prod)
    }

    render() {


        let productToShareCards = Object.keys(this.props.prod).map(key =>
            <div key={key}>
                <SugarCard
                    name={key}
                    products={this.props.prod}
                    updateQuantities={this.updateQuantities}
                    orderArr={this.props.orderArr}
                />
            </div>
        )




        return (
            <FadeIn>
                <div className='cateBlock'>
                    <h2 className='productKindTitle'> Salé à Partager</h2>
                        <div className='productGrid'>
                            {productToShareCards}
                        </div>
                    <div className='nextPrev'>
                        <div>
                            <button className='prevNextBut'
                                onClick={this.props.goSugar}
                            >
                                Précédent</button>
                        </div>
                        <div>
                            <button className='prevNextBut'
                                onClick={this.props.goDrink}
                            >Suivant</button>
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}


export default SaltComp