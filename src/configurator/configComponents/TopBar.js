import React, {Component} from 'react'

class TopBar extends Component {
    render() {


        return(
            <span className='stateBar'>
                <span style={this.props.formule}>1. Formules</span>
                <span style={this.props.sucre}>2. Sucré</span>
                <span style={this.props.sale}>3. Salé</span>
                <span style={this.props.boisson}>4. Boissons</span>
                <span style={this.props.coord}>5. Coordonnées</span>
            </span>
        )
    }
}

export default TopBar