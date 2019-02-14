import React from 'react'
import ReactDOM from 'react-dom'
import News from './news'
import PriceTrackerNew from './PriceTrackerNew'
import Crumbs from './crumbs'




export default class App extends React.Component{

  onError(error){
    console.log(error)
  }

  constructor(props) {
    super(props);

    this.state = { articles: [ ] }
      
  }

  componentDidMount() {




  }
  
  render(){
    return (
          <div >
            <div class="title">
              <img src="/sun.png" alt="" /> <b>electrification</b> | EV Price Tracker & News Aggregator
            </div>
            <div class="container">
              <div class="left">
                <b>New EV Price Tracker (updated daily)</b>
                <div class="hr"></div>
                <PriceTrackerNew />
              </div>
              <div class="news">
                <b>News, Projects</b>
                <div class="hr"></div>
                
                <News />
              </div>
              <div style={{backgroundColor: '#444'}} class="right">
                  <Crumbs />
              </div>
            </div>
          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));



