import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';

// import { api } from './api/Api';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <section className="w-11/12 mx-auto max-w-screen-2xl min-h-[calc(100vh-80px)]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
