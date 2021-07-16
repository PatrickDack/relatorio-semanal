import React from 'react';

class ReportCell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputName: '',
      resume: [],
      total: 0,
    }
  }

  componentDidMount() {
    const { id, totalP } = this.props;
    localStorage.setItem(`totalGeral${id}`, totalP);

  }

  render() {
    const { reportName, totalP, resumeP, onChange, onClick } = this.props;
    const { inputName, resume, total } = this.state;
    return (
      <div className="report">
        <h2 className="title-report">{ reportName }</h2>
        <div className="input-container">
          <input name="inputName" type="text" onChange={ onChange } />
          <button type="button" onClick={ onClick }>Adicionar</button>
        </div>
        <div className="resume">
          {
            resumeP.map((value, index) => {
              let p;
              if(value) {
                p = <p key={ index }>{ `R$ ${ value.toFixed(2) }` }</p>
              }
              return p;
            })
          }
        </div>
        <h3 className="total">{ `Total R$ ${ totalP.toFixed(2) }` }</h3>
      </div>
    );
  }
}

export default ReportCell;
