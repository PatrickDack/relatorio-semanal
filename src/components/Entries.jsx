import React from 'react';
import { connect } from 'react-redux';
import { addBillAction, addInputAction, updateTotalAction } from '../actions/actionCreators';
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
        const { total } = this.state;
        const { id, updateTotal } = this.props;
        updateTotal(total, id);
      }
    );
  }

  removeValue({ target }) {
    this.setState(({ resume }) => ({
      resume: resume.filter((value) => target.innerText !== `R$ ${parseFloat(value).toFixed(2)}`),
    }), () => {
        this.setState(({ resume }) => ({
          total: resume.reduce((acc, curr) => { acc += parseFloat(curr); return acc}, 0),
        }), () => {
            const { total } = this.state;
            const { id, updateTotal } = this.props;
            updateTotal(total, id);
          }
        );
      }
    );
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

const mapDispatchToProps = (dispatch) => ({
  addBill: (bill) => dispatch(addBillAction(bill)),
  addInput: (input) => dispatch(addInputAction(input)),
  updateTotal: (total, id) => dispatch(updateTotalAction(total, id)),
});

export default connect(null, mapDispatchToProps)(Entries);
