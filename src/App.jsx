import React from 'react';
import './App.css';
import { Navigation } from './Navigation';

function App() {
  return (
    <>
      <Navigation />

      <section className="sec" id="box-1">
        <span>Home</span>
      </section>
      <section className="sec" id="box-2">
        <span>Contact</span>
      </section>
      <section className="sec" id="box-3">
        <span>About</span>
      </section>
    </>
  );
}

export default App;
