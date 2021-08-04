import React from 'react';
import './components/Header.js';
import Header from './components/Header';
import Modal from './components/Modal';

import Routes from './routes.js';

function App() {
  return (
    <div>
      <Header />
      <Modal />
      <Routes />
    </div>
  );
}
export default App;
