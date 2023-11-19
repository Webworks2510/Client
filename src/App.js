import { Route, Routes } from 'react-router-dom';
import './global.css';
import React, { lazy, Suspense } from 'react';
import Home from './Pages/Home/Home';

//* Import Components by lazily
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <div className='ww-bg-white'>
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
      </div>

      {/* Routing Sections */}
      <div className='ww-bg-l-grey'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>

      {/* Footer Section */}
      <div className='ww-bg-l-grey'>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
