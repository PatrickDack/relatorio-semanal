import React from 'react';
import './App.css';
import Entries from './components/Entries';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Relatório Semanal</h1>
        <section className="report-list">
          <Entries reportName="Dinheiro" />
          <Entries reportName="Cartão de Crédito" />
          <Entries reportName="Cartão de Débito" />
        </section>
      </main>
    );
  }
}

export default App;
