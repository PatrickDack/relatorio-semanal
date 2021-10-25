import React from 'react';
import { connect } from 'react-redux';

class Total extends React.Component {
  render() {
    const { total } = this.props;

    const totalLiquido = total.reduce((acc, curr) => {return acc += curr}, 0);
    const totalBruto = total.reduce((acc, curr, index) => {
      if(index !== 5) acc += curr;
      return acc;
    }, 0);

    return(
      <>
        <h3>{`Total Bruto: R$ ${totalBruto.toFixed(2)}`}</h3>
        <h3>{`Total Liquido: R$ ${totalLiquido.toFixed(2)}`}</h3>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.reportReducer.total,
});

export default connect(mapStateToProps)(Total);
