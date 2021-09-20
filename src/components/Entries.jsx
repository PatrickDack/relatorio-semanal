import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Entries extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: NaN,
      resume: [],
      total: 0,
    }
  }

  componentDidMount() {
    const { id } = this.props;
    const { total } = this.state;
    localStorage.setItem(`totalGeral${id}`, total);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: parseFloat(value.replace(',', '.')),
    });
  }

  handleClick() {
    this.setState(({ inputName, total, resume }) => ({
      resume: [...resume, inputName],
      total: !isNaN(inputName) ? total + inputName : total + 0,
      inputName: NaN,
      }), () => {
        const { total } = this.state;
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
        fn(tl, tb);
      }
    )
  }

  render() {
    const { reportName } = this.props;
    const { resume, total } = this.state;
    return (
      <div className="report">
        <h2 className="title-report">{ reportName }</h2>
        <div className="input-container">
          <input name="inputName" type="text" onChange={ this.handleChange } />
          <Button type="button" onClick={ this.handleClick }>Adicionar</Button>
        </div>
        <div className="resume">
          {
            resume.map((value, index) => {
              let p;
              if(value) {
                p = <p key={ index }>{ `R$ ${ value.toFixed(2) }` }</p>
              }
              return p;
            })
          }
        </div>
        <h3 className="total">{ `Total R$ ${ total.toFixed(2) }` }</h3>
      </div>
    );
  }
}

export default Entries;
