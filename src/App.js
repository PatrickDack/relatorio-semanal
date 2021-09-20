import React from 'react';
import './App.css';
import Entries from './components/Entries';
import Total from './components/Total';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateTotal = this.updateTotal.bind(this);

    this.state = {
      totalBruto: 0,
      totalLiquido: 0,
    };
  }

  updateTotal(totalLiquido, totalBruto) {
    this.setState({
      totalLiquido,
      totalBruto,
    });
  }

  render() {
    return (
      <>
        <main>
          <h1 className="title">Ateliê Oral</h1>
          <h3 className="subtitle">Relatório Semanal</h3>
        <div className="total-container">
          <Total total={ this.state.totalBruto } description="Total Bruto"/>
          <Total total={ this.state.totalLiquido } description="Total Líquido"/>
        </div>
          <section className="report-list">
            <Entries reportName="Dinheiro" id={0} received={ this.state }  fn={ this.updateTotal }/>
            <Entries reportName="Pix" id={1} fn={ this.updateTotal } />
            <Entries reportName="Cheque" id={2} fn={ this.updateTotal } />
            <Entries reportName="Cartão Crédito" id={3} fn={ this.updateTotal } />
            <Entries reportName="Cartão de Débito" id={4} fn={ this.updateTotal } />
            <Entries reportName="Saída" id={5} fn={ this.updateTotal } />
          </section>
        </main>
        <footer>Versão 1.0</footer>
      </>
    );
  }
}

export default App;
