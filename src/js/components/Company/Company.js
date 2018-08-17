import React, { Component } from 'react';

class Company extends Component {

  render() {

    const { isFetching, error, data } = this.props.company;

    if (error) {
      return <h1>Error loading page! {error.message}</h1>;
    }

    if (isFetching) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <h1>{data.name} <small>Value: {data.value} # Shares: {data.shares}</small></h1>
      </div>
    )
  }
}

export default Company;