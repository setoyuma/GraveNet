import React from 'react';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Logs from './pages/Logs';
import Experiments from './pages/Experiments';
import Skull from './pages/Skull';
import Community from './pages/Community';
import Lifeforms from './pages/Lifeforms';

const App = () => {
  return (
    <div className=' bg-background h-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logs' element={<Logs />} />
        {/* <Route path='/xjzvf' element={<Skull />} /> */}
        <Route path='/experiments' element={<Experiments />} />
        <Route path='/community' element={<Community />} />
        <Route path='/lifeforms' element={<Lifeforms />} />
      </Routes>
    </div>
  );
};

export default App;