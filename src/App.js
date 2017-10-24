import React from 'react'
import ReactDOM from 'react-dom'
import News from './news'
import Stocks from './stocks'
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
              <img src="/sun.png" style={{maxHeight: 20}} /> <b>electricfeed</b> is a real-time <b>mobility & energy</b> news aggregator
            </div>
            <div class="container">
              <div class="left">
                <b>Mobility & Energy Leaderboard</b>
                <div class="hr"></div>
                
                <Stocks />
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



