import React from 'react';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Logs from './pages/Logs';
import Experiments from './pages/Experiments';

const App = () => {
  return (
    <div className=' bg-background h-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logs' element={<Logs />} />
        <Route path='/experiments' element={<Experiments />} />
      </Routes>
    </div>
  );
};

export default App;