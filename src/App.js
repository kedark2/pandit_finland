import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/content/Home'
import Gallery from './components/content/Gallery'
import About from './components/content/About/About'
import Contact from './components/content/Contact'
import ganesh from './pngegg.png'
import Gall from './components/content/Gallery/Gallery'
import getData from './data'
import UserService from './components/content/ServicePage/UserComponent'
import UserComponent from './components/content/ServicePage/UserComponent';
import Admin from './components/admin/Admin'
import ListServices from './components/admin/ListServices'


class App extends React.Component {


  render() {
    let images = getData()
    return (
      <div>
        <div className="app">
          <Header></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" render={() =>
                <Home />} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={ListServices} />
            </Switch>
          </div>
          <Footer />

        </div>

      </div>
    );
  }
}

export default App;
