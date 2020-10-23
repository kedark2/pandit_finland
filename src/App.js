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


class App extends React.Component {

  render() {
    let images = getData()
    console.log(images)
    return (
      <div>
        <Header></Header>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() =>
              <Home />} />
            <Route path="/gallery" render={() =>
              <div className="gallery">
                <Gall imgarr={images} />
              </div>} />
            <Route path="/about" render={() =>
              <About />} />
            <Route path="/contact" render={() =>
              <Contact />} />
            <Route path="/services" render={() =>
              <UserComponent />} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
