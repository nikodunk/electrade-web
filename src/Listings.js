import React from 'react';

import PriceTracker from './Crumbs/PriceTracker'


export default class Crumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  componentWillMount() {

      
  }

  componentWillUnmount() {

  };

 

  render() {
    return (
      <div>
          
          <PriceTracker />

    </div>
    )
  }
}
