import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/navigation.js'
import Logo from './components/logo/logo.js';
import Rank from './components/rank/Rank.js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.js';
import './App.css';
import 'tachyons';

const particlesOptions = {
    particles: {
          number: {
          value:90,
            density: {
                enable:true,
                value_area:800
            }
          }
  }
              
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles 
              className='particles'
              params={particlesOptions}

            />

        <Navigation />
        <Logo /> 
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
