import React from 'react';
import AddListingCrumb from './Crumbs/AddListingCrumb'
import PriceTrackerUsed from './Crumbs/PriceTrackerUsed'


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
          <AddListingCrumb />

          <PriceTrackerUsed />

    </div>
    )
  }
}
