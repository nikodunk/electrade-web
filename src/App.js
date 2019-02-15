import React from 'react'
import ReactDOM from 'react-dom'
import News from './News'
import './styles.css';
import PriceTrackerNew from './PriceTrackerNew'
import Crumbs from './Crumbs'



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
          <div >
            <div class="title">
              <span><img src="/electron.png" alt="" /> <b>electrification</b> | EV Price Tracker & News Aggregator</span>
              <span style={{paddingLeft: 'auto'}}><a href="https://itunes.apple.com/us/app/id1445602414" target="blank">Get the App</a></span>
            </div>
            
            <div class="container">

              <div class="prices">
                <b>New Electric Vehicle Prices (updated daily)</b>
                <div class="hr"></div>
                <PriceTrackerNew />
              </div>

              <div class="news">
                <b>Latest EV News</b>
                <div class="hr"></div>
                <News />
              </div>

              <div class="crumbs">
                  <Crumbs />
              </div>

            </div>

          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));



