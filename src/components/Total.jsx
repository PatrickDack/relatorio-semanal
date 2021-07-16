import React from 'react';

class Total extends React.Component {
  render() {
    const { total, description } = this.props;
    return(
      <h3>{`${description} R$ ${total.toFixed(2)}`}</h3>
    );
  }
}

export default Total;
