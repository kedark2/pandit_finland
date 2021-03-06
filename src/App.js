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
import getData from './data'
import UserService from './components/content/ServicePage/UserComponent'
import UserComponent from './components/content/ServicePage/UserComponent';
import Admin from './components/admin/Admin'
import ListServices from './components/admin/ListServices'
import Mantras from './components/content/Mantras'

class App extends React.Component {


  render() {
    let images = getData()
    return (
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div>
          <Header></Header>
          <div className="container" style={{ backgroundColor: "#f2f2f2", maxWidth: "1440px" }}>
            <Switch>
              <Route exact path="/" render={() =>
                <Home />} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/services" component={ListServices} />
              <Route path="/mantras" component={Mantras} />
            </Switch>
          </div>
          <Footer />

        </div>

      </div >
    );
  }
}

export default App;
