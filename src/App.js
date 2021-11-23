import React from 'react';
import './App.scss';
import Campaigns from './components/Campaigns';
import Hero from './components/Hero';
import Influencer from './components/Influencer';
import Testimonies from './components/Testimonials';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Hero />
      <Testimonies />
      <Campaigns />
      <Influencer />
    </div>
    </React.Fragment>
  );
}

export default App;
