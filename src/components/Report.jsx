import React from 'react';
import ReportCell from './ReportCell';

class Report extends React.Component {
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

  // componentDidMount() {
  //   const { id } = this.props;
  //   const { total } = this.state;
  //   localStorage.setItem(`totalGeral${id}`, total);
  // }

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
        const { id } = this.props;
        localStorage.setItem(`totalGeral${id}`, total);
      }
    )
  }

  handleClickSub() {

  }

  render() {
    return (
      <>
        <ReportCell
        id={ 0 }
        reportName={ 'Dinheiro' }
        onChange={ this.handleChange }
        onClick={ this.handleClick }
        resumeP={ this.state.resume }
        totalP={ this.state.total}
        inputNameP={ this.state.inputName}
      />
      <ReportCell
        id={ 1 }
        reportName={ 'Pix' }
        onChange={ this.handleChange }
        onClick={ this.handleClick }
        resumeP={ this.state.resume }
        totalP={ this.state.total}
        inputNameP={ this.state.inputName}
      />
      <ReportCell
        id={ 2 }
        reportName={ 'Cartao de Crédito' }
        onChange={ this.handleChange }
        onClick={ this.handleClick }
        resumeP={ this.state.resume }
        totalP={ this.state.total}
        inputNameP={ this.state.inputName}
      />
      </>
    );
  }
}

export default Report;
