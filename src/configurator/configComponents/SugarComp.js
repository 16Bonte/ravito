import React, { Component } from 'react'
import SugarCard from './SugarCard'
import FadeIn from 'react-fade-in'


class SugarComp extends Component {

    componentDidMount() {
        console.log(this.props.prod)
    }

    updateQuantities = prod => {
        this.props.updateQuantities(prod)
    }

    render() {


        // let products = this.props.prod

        let productCards = Object.keys(this.props.prod).map(key =>
            <div key={key}>
                <SugarCard
                    name={key}
                    products={this.props.prod}
                    updateQuantities={this.updateQuantities}
                    orderArr={this.props.orderArr}
                />
            </div>
        )

        let productToShareCards = Object.keys(this.props.prodShare).map(key =>
            <div key={key}>
                <SugarCard
                    name={key}
                    products={this.props.prodShare}
                    updateQuantities={this.updateQuantities}
                    orderArr={this.props.orderArr}
                />
            </div>
        )




        return (
            <FadeIn>
                <div className='cateBlock'>
                    <div>
                        <h2 className='productKindTitle'>Sucré à Partager</h2>
                        <div className='productGrid'>
                            {productToShareCards}
                        </div>
                        <h2 className='productKindTitle'>Sucré à l'Unité</h2>
                        <div className='productGrid'>
                            {productCards}
                        </div>
                    </div>
                </div>
                <div className='nextPrev'>
                    <div>
                        <button className='prevNextBut'
                            onClick={this.props.goMenu}
                        >
                            Précédent</button>
                    </div>
                    <div>
                        <button className='prevNextBut'
                            onClick={this.props.goSalt}
                        >Suivant</button>
                    </div>
                </div>
            </FadeIn>


        )
    }
}


export default SugarComp