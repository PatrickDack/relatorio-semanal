import React from 'react';
import './App.css';
import Entries from './components/Entries';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Relatório Semanal</h1>
        <Entries wallet="Cartão de Crédito"/>
      </main>
    );
  }
}

export default App;
