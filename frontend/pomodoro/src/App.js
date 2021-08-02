import React from 'react';
import './components/Header.js';
import Header from './components/Header';
import Modal from './components/Modal';

import Routes from './routes.js';

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Modal />
    </div>
  );
}
export default App;
