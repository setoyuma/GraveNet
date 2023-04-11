import React from 'react';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Logs from './pages/Logs';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logs' element={<Logs />} />
      </Routes>
    </div>
  );
};

export default App;