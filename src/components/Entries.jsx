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
    const { wallet } = this.props;
    const { show, total } = this.state;
    return (
      <>
        <h2>{ wallet }</h2>
        <input name="inputName" type="text" onChange={ this.handleChange } />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar
        </button>
        <div>
          {
            show.map((value, index) => {
              if(value) {
                return <p key={ index }>{ `R$ ${ value }` }</p>
              }
            })
          }
        </div>
        <h3>{ `Total R$ ${ total.toFixed(2) }` }</h3>
      </>
    );
  }
}

export default Entries;
