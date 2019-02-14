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
              <img src="/electron.png" alt="" /> <b>electrification</b> | EV Price Tracker & News Aggregator
            </div>
            
            <div class="container">

              <div class="left">
                <b>New EV Price Tracker (updated daily)</b>
                <div class="hr"></div>
                <PriceTrackerNew />
              </div>

              <div class="news">
                <b>Latest Electric Vehicle News</b>
                <div class="hr"></div>
                <News />
              </div>

              <div class="right">
                  <Crumbs />
              </div>

            </div>

          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));



