import React, { Component } from 'react'
import SugarCard from './SugarCard'
import FadeIn from 'react-fade-in'


class DrinkComp extends Component {

    componentDidMount() {
        console.log(this.props.prod)
    }

    updateQuantities = prod => {
        this.props.updateQuantities(prod)
    }

    render() {


        let productToShareCards = Object.keys(this.props.prod).map(key =>
            <div key={key} >
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
                    <h2 className='productKindTitle'>Nos Boissons</h2>
                    <div className='productGrid'>
                        {productToShareCards}
                    </div>
                    <div className='nextPrev'>
                        <div>
                            <button className='prevNextBut'
                                onClick={this.props.goSalt}
                            >
                                Précédent</button>
                        </div>
                        <div>
                            <button className='prevNextBut'
                                onClick={this.props.goInfo}
                            >Suivant</button>
                        </div>
                    </div>
                </div>
            </FadeIn>

        )
    }
}


export default DrinkComp