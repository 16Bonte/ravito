import React, { Component } from 'react'


class MenuTemp extends Component {
    render() {
        
        let inter = {
            textAlign: 'center',
            // fontSize: 'small',
        }

        let tittle = {
            textAlign: 'center',
        }

        let myImg= {
            width:'100%',
            padding: '1rem'

        }

        return (
            <span>
                <h4 style={tittle}>{this.props.type}</h4> <br />
                <div className='cardTempl'>
                    <img style={myImg} src={this.props.cardImg} alt="menu"/>
                        <div style={inter}>
                            {this.props.cardText}
                        </div>
                </div>
            </span>
        )
    }
}

export default MenuTemp