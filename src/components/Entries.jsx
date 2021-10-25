import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Entries extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeValue = this.removeValue.bind(this);

    this.state = {
      inputValue: '',
      resume: [],
      total: 0,
    }
  }

  componentDidMount() {
    const { id } = this.props;
    const { total } = this.state;
    localStorage.setItem(`totalGeral${id}`, total);

    const totals = {
      dinheiro: 0,
      pix: 0,
      cheque: 0,
      cCredito: 0,
      cDebito: 0,
      saida: 0,
    };

    localStorage.setItem('totais', JSON.stringify(totals));
  }

  // componentDidUpdate() {
  //   const { resume } = this.state;
  //   this.setState({
  //     total: resume.reduce((acc, curr) => { acc += parseFloat(curr); return acc}, 0),
  //   });
  // }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value.replace(',', '.'),
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(({ inputValue, total, resume }) => ({
      resume: [...resume, inputValue],
      total: inputValue !== '' ? total + parseFloat(inputValue) : total + 0,
      inputValue: '',
    }), () => {
      const { total, resume } = this.state;
      const totais = JSON.parse(localStorage.getItem('totais'));
      totais['dinheiro'] = total;
      console.log(totais.dinheiro);
      localStorage.setItem('totais', JSON.stringify(totais));

      const { id, fn } = this.props;
      localStorage.setItem(`totalGeral${id}`, total);
      const d = parseFloat(localStorage.getItem(`totalGeral${0}`))
      const p = parseFloat(localStorage.getItem(`totalGeral${1}`))
      const ch = parseFloat(localStorage.getItem(`totalGeral${2}`))
      const cc = parseFloat(localStorage.getItem(`totalGeral${3}`))
      const cd = parseFloat(localStorage.getItem(`totalGeral${4}`))
      const s = parseFloat(localStorage.getItem(`totalGeral${5}`))
      localStorage.setItem('totalGeral', d+p+ch+cc+cd-s);
      localStorage.setItem('totalGeralB', d+p+ch+cc+cd);
      const tl = parseFloat(localStorage.getItem('totalGeral'));
      const tb = parseFloat(localStorage.getItem('totalGeralB'));
      // this.setState({total: resume.reduce((acc, curr) => { acc += parseFloat(curr); return acc}, 0)});
        fn(tl, tb);
      }
    )
  }

  removeValue({ target }) {
    console.log(target.innerText);
    const { resume } = this.state;
    this.setState(() => ({
      resume: resume.filter((value) => `R$ ${parseFloat(value).toFixed(2)}` !== target.innerText),
      total: resume.reduce((acc, curr) => { acc += parseFloat(curr); return acc}, 0),
    }));
  }

  render() {
    const { reportName } = this.props;
    const { resume, total, inputValue } = this.state;
    return (
      <div className="report">
        <h2 className="title-report">{ reportName }</h2>
        <form className="input-container">
          <input name="inputValue" type="text" value={ inputValue } onChange={ this.handleChange } />
          <Button type="submit" onClick={ (e) => this.handleClick(e) }>Adicionar</Button>
        </form>
        <div className="resume">
          {
            resume.map((value, index) => {
              if(value) {
                return (
                  <p key={ index } data-testid="resume" onClick={ this.removeValue }>
                    { `R$ ${ parseFloat(value).toFixed(2) }` }
                  </p>)
              }
            })
          }
        </div>
        <h3 className="total">{ `Total R$ ${ total.toFixed(2) }` }</h3>
      </div>
    );
  }
}

export default Entries;
