import React, { Component } from 'react'
import { Fragment } from 'react'

class Quote extends Component {

    displayTotal = () => {
        let prices = {
            textAlign: 'right'
        }

        let total = 0
        let totalTTC = 0
        let deliver = 0

        let totalSect = {
            marginTop: '1rem',
            borderTop: '2px solid green',
            paddingTop: '1rem'
        }

        this.props.orders.forEach((item) => {
            if (item.num > 0) {
                deliver = 50
                total += (item.price * item.num) + deliver
                totalTTC += ((item.price * item.num) / 100 * 110) + deliver
            }
            return
        }
        )
        return (
            <div style={totalSect}>
                <div className='quoteGrid'>
                    <h6>Livraison & Retour :</h6>
                    <h6 style={prices}>{deliver.toFixed(2)} €</h6>
                </div>
                <div className='quoteGrid'>
                    <h6>Total HT:</h6>
                    <h6 style={prices}>{total.toFixed(2)} €</h6>
                </div>
                <div className='quoteGrid'>
                    <h6>Total TTC:</h6>
                    <h6 style={prices}>{totalTTC.toFixed(2)} €</h6>
                </div>
            </div>

        )
    }


    render() {




        let calcu = {
            textAlign: 'center',
            marginBottom: '2rem'
        }

        let prices = {
            textAlign: 'right'
        }

        let items = this.props.orders.map((item, key) =>
            item.num > 0
                ?
                <div key={key} className='quoteGrid'>
                    <div>{item.num} {item.kind}</div>
                    <div style={prices}>{(item.price * item.num).toFixed(2)} €</div>
                </div>
                :
                ''
        )

        return (
            <Fragment>
            <div className='quoteContainer'>
            <h3 style={calcu}>Devis</h3>
                <div>
                    {items}
                </div>
                <this.displayTotal />
            </div>
            </Fragment>

        )
    }
}

export default Quote