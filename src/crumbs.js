import React from 'react';

import PriceTrackerUsed from './Crumbs/PriceTrackerUsed'
import Guides from './Crumbs/Guides'
import ListingCrumb from './Crumbs/ListingCrumb'


export default class Crumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {

      
  }

  
  handleSubmit(e) {
      e.preventDefault();
      console.log('uas')
      var _input = document.getElementById("myInput").value
      console.log(_input)
      this.ref.push({
        email: _input
      });
      document.getElementById('theForm').style.display = 'none';
  }
  

  componentWillUnmount() {

  };

 

  render() {
    return (
      <div>
        <div>
          <ListingCrumb />
        </div>

        <div>
          <PriceTrackerUsed />
        </div>
        
        <div>
          <Guides />
        </div>
    </div>
    )
  }
}
