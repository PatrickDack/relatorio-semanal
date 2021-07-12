import React from 'react';

class Entries extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: NaN,
      show: [],
      total: 0,
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: parseFloat(value.replace(',', '.')),
    });
  }

  handleClick() {
    const { inputName, total, show } = this.state;
    this.setState(() => ({
      show: [...show, inputName],
      total: !isNaN(inputName) ? total + inputName : total + 0,
      inputName: NaN,
      })
    )
  }

  render() {
    const { reportName } = this.props;
    const { show, total } = this.state;
    return (
      <div className="report">
        <h2 className="title-report">{ reportName }</h2>
        <div className="input-container">
          <input name="inputName" type="text" onChange={ this.handleChange } />
          <button type="button" onClick={ this.handleClick }>Adicionar</button>
        </div>
        <div className="resume">
          {
            show.map((value, index) => {
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
