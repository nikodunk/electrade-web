import React from 'react';

import PriceTrackerUsed from './Crumbs/PriceTrackerUsed'
import Guides from './Crumbs/Guides'


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
        <div class="box" id="theForm">
          <p><b>Get Daily Price Updates!</b></p>
          <form>
                <input
                  id="myInput"
                  type="text"
                  name="email"
                  placeholder="youremail@example.com"
                />&nbsp;
                <button onClick={this.handleSubmit}>submit</button>
          </form>
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