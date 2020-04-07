import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class SugarCard extends Component {
    state = {
        kind: this.props.name,
        num: 0,
        price: this.props.products[this.props.name].p
    }

    componentDidMount() {
        for (let i = 0; i < this.props.orderArr.length; i++) {
            if (this.props.orderArr[i].kind === this.state.kind) {
                this.setState({ num: this.props.orderArr[i].num })
                break
            }
        }
    }

    nbProd = event => {
        this.setState({ num: event.target.value }, () => this.props.updateQuantities(this.state))
    }

    render() {

        let cardTittle = {
            minHeight: '3rem',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
            borderBottom: '1px solid #0a71b4',
        }





        let myBreak = {
            height: '2.53rem'
        }



        let qtyText = {
            paddingTop: '0.4rem'
        }

        return (
            <div className='cardContain'>

                <h5 style={cardTittle}>{this.props.name}</h5>
                {this.props.products[this.props.name].nb ? <p >{this.props.products[this.props.name].nb} personnes</p> : <div style={myBreak}></div>}
                <p >{this.props.products[this.props.name].p} €  </p>
                <div className='quantityDiv'>
                    <div style={qtyText}>Quantité:</div>
                    <div>
                        <Form.Control
                            type="number"
                            value={this.state.num}
                            onChange={this.nbProd}
                            min='0'
                            placeholder='0'
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default SugarCard
