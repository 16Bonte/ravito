import React, { Component, Fragment } from 'react';
import '../App.css';
import NavBar from '../CommonCompo/NavBar'
import TopBar from './configComponents/TopBar'
import Quote from './configComponents/Quote'
import MenuComp from './configComponents/MenuComp'
import SugarComp from './configComponents/SugarComp'
import SaltComp from './configComponents/SaltComp'
import DrinkComp from './configComponents/DrinkComp'
import InfoComp from './configComponents/InfoComp'
import SendComp from './configComponents/SendComp'
import Footer from '../CommonCompo/Footer'
import FadeIn from 'react-fade-in'
import base from '../base'
import emailjs from 'emailjs-com';

class AlaCarte extends Component {
  constructor() {
    super()
   
    this.state = {
      menu: true,
      sugar: false,
      salt: false,
      drink: false,
      infos: false,
      send: false,
      orders: [
        { kind: 'Petits déjeuners', num: 0, price: 5.9 },
        { kind: 'Pauses Sucrées', num: 0, price: 7.8 },
        { kind: 'Pauses Salées', num: 0, price: 12.8 }
      ]
    }
  }


  componentDidMount() {
    base.syncState('/products', {
      context: this,
      state: 'products'
    })
  }

  // MANAGE TOP BAR
  goMenu = () => {
    this.setState({ menu: true, sugar: false }, () => window.scrollTo(0, 0))
  }
  goSugar = () => {
    this.setState({ menu: false, salt: false, sugar: true }, () => window.scrollTo(0, 0))
  }
  goSalt = () => {
    this.setState({ drink: false, salt: true, sugar: false }, () => window.scrollTo(0, 0))
  }
  goDrink = () => {
    this.setState({ drink: true, salt: false, infos: false }, () => window.scrollTo(0, 0))
  }
  goInfo = () => {
    this.setState({ drink: false, send: false, infos: true }, () => window.scrollTo(0, 0))
  }
  goSend = () => {
    this.setState({ infos: false, send: true })
  }

  updateQuantities = prod => {
    let type = prod.kind
    let jojo = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      if (this.state.orders[i].kind === type) {
        // eslint-disable-next-line
        this.state.orders[i] = prod
        this.forceUpdate()
        console.log('geronimo', this.state)
        break
      } else {
        jojo ++
        if (jojo === this.state.orders.length) {
          this.state.orders.push(prod)
          console.log(this.state)
        }
      }
    }
  }

sendMail = (jojo) => {

  let email = 'cesar.bonte@gmail.com'
  let name ='Jojo'
  let data= jojo

  const template_params = {
    "email": email,
    "from_name": name,
    "to_name": "Alchemical Mind", 
    "message_html": data
};
 
emailjs.send('default_service','template_xk80ggqm', template_params
, 'user_lw3wtycNrhYXsw7w13YiC'
)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
    this.setState({
        submit:true
    })
   
}

breaksInfo = breaks => {
    // eslint-disable-next-line
    this.state.orders[0].num = parseFloat(breaks)
    this.forceUpdate()
    console.log(this.state)
  }

  sugarInfo = sugar => {
    // eslint-disable-next-line
    this.state.orders[1].num = parseFloat(sugar)
    this.forceUpdate()
    console.log(this.state)
  }

  saltInfo = salt => {
    // eslint-disable-next-line
    this.state.orders[2].num = parseFloat(salt)
    this.forceUpdate()
    console.log(this.state)
  }

  render() {

    // MANAGE STATE OF THE TOPBAR
    let menu
    let sugar
    let salt
    let drink
    let infos
    let send

    let selected = {
      borderBottom: '2px solid #42a62a',
      paddingBottom: '2rem',
      fontSize: 'larger',
      width: '8rem',
      whiteSpace: 'nowrap'


    }
    
    let nonSelected = {
      fontSize: 'small',
    }
    // MENU
    this.state.menu ? menu = selected : menu = nonSelected
    // SUGAR
    this.state.sugar ? sugar = selected : sugar = nonSelected
    // SALT
    this.state.salt ? salt = selected : salt = nonSelected
    // DRINK
    this.state.drink ? drink = selected : drink = nonSelected
    // INFOS
    this.state.infos ? infos = selected : infos = nonSelected
    // SEND
    this.state.send ? send = selected : send = nonSelected


    // let myQuote = {
    //   marginTop: '-4rem',
    //   width: '100%'
    // //   borderLeft: '1px solid green'
    // }

    // RENDER ITEMS SELECTED BY CLIENT
    // let items = this.state.orders.map((item, key) =>
    //   item.num > 0
    //     ?
    //     <div key={key} className='quoteGrid'>
    //       <div className=''>{item.num} {item.kind}</div>
    //       <div className=''>{(item.price * item.num).toFixed(2)} €</div>
    //     </div>
    //     :
    //     ''
    // )

    return (
      <Fragment>
        <NavBar />
        <div className='classicPages'>
        <FadeIn>
          <div className='configGrid'>
            <div>
              <TopBar
                formule={menu}
                sucre={sugar}
                sale={salt}
                boisson={drink}
                coord={infos}
                envoyer={send}
              />
              {this.state.menu ?
                <MenuComp
                  breaksInfo={this.breaksInfo}
                  sugarInfo={this.sugarInfo}
                  saltInfo={this.saltInfo}
                  goSugar={this.goSugar}
                  breaks={this.state.orders[0].num} />
                :
                ''}
              {this.state.sugar ?
                <SugarComp
                  goSalt={this.goSalt}
                  goMenu={this.goMenu} 
                  prod={this.state.products.sugar}
                  prodShare={this.state.products.sugarToShare}
                  updateQuantities={this.updateQuantities}
                  orderArr={this.state.orders}
                  />
                :
                ''
              }
              {this.state.salt ?
                <SaltComp
                  goDrink={this.goDrink}
                  goSugar={this.goSugar} 
                  prod={this.state.products.salt}
                  updateQuantities={this.updateQuantities}
                  orderArr={this.state.orders}
                  />
                :
                ''}
              {this.state.drink ?
                <DrinkComp
                  goSalt={this.goSalt}
                  goInfo={this.goInfo} 
                  prod={this.state.products.drinks}
                  updateQuantities={this.updateQuantities}
                  orderArr={this.state.orders}
                  />
                :
                ''}
              {this.state.infos ?
                <InfoComp
                  goDrink={this.goDrink} 
                  upDateInfo={this.receiveDetails}
                  />
                :
                ''}
              {this.state.send ?
                <SendComp />
                :
                ''}

            </div>
            <div className='quoteBlock'>
              <Quote
                // quantities={items}
                orders={this.state.orders}
              />
            </div>
          </div>
        </FadeIn>
        <Footer />
        </div>

      </Fragment>
    )
  }
}


export default AlaCarte;