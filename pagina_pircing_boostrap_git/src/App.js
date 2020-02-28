import React from 'react';
import './App.css';
import '../src/componentes/Header';
import Header from '../src/componentes/Header';
import Main from '../src/componentes/Main';
import Footer from '../src/componentes/Footer';

function App() {
  return (
    //Se llama al componente Header, main y footer
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
