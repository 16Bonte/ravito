import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home/Home';
import OffersMenu from './offersMenu/OffersMenu'
import BreakPage from './offersPages/BreakPage'
import SugarPage from './offersPages/SugarPage'
import SaltSugPage from './offersPages/SaltSugPage'
import RegularPage from './offersPages/RegularPage'
import About from './about/About'
import Contact from './contact/Contact'
import Configurator from './configurator/Configurator'
import SendComp from './configurator/configComponents/SendComp'
import ScrollToTop from './CommonCompo/ScrollToTop'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

let Root = () => (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/offres' component={OffersMenu} />
                <Route exact path='/a-la-carte' component={Configurator} />
                <Route exact path='/a-propos' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/petit-dejeuner' component={BreakPage} />
                <Route exact path='/pause-salee' component={SaltSugPage} />
                <Route exact path='/pause-sucree' component={SugarPage} />
                <Route exact path='/la-reguliere' component={RegularPage} />
                <Route exact path='/commande-envoyee' component={SendComp} />
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();