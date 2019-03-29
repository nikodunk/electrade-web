import React from 'react'
import ReactDOM from 'react-dom';
import News from './News'
import './styles.css';

import PriceTracker from './PriceTracker'


export default class App extends React.Component{

  onError(error){
    console.log(error)
  }

  constructor(props) {
    super(props);

    this.state = { }
      
  }

  componentDidMount() {


  }
  
  render(){
    return (
          <div>
            <div class="navbar">
              <span>
                <img src="/electron.png" alt="" />&nbsp;
                <span class="title"><b>electrification</b> | EV lease & news tracker.</span>
              </span>
              <span>
                <a class="AppButton title time" href="https://itunes.apple.com/us/app/id1445602414" target="blank">Get iOS App</a>
                &nbsp;
                <a class="AppButton title time" href="https://play.google.com/store/apps/details?id=com.bigset.electric" target="blank">Get Android App</a>
              </span>
            </div>
            


            <div class="container">

              <div class="news">
                <News />
              </div>

              <div class="listings">
                <PriceTracker />
              </div>

            </div>




          </div>
    )
  }




}


ReactDOM.render(<App />, document.getElementById('root'));