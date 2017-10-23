import React from 'react'
import ReactDOM from 'react-dom'
import News from './news'
import Stocks from './stocks'



export default class App extends React.Component{

  onError(error){
    console.log(error)
  }

  constructor(props) {
    super(props);

    this.state = {
              articles: [
                  
                ]
        }
      
  }

  componentDidMount() {




  }
  
  render(){
    return (
          <div >
            <div class="title">
              <b>electricFeed</b> | your real-time mobility & energy news aggregator
            </div>
            <div class="container">
              <div class="left">
                <b>stocks</b>
                <Stocks />
              </div>
              <div class="news">
                <b>newest updates</b>
                <News />
              </div>
              <div class="right">
                <b>guides</b>
              </div>
            </div>
          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));



