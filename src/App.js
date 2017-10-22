import React from 'react'
import ReactDOM from 'react-dom'
import News from './news'




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



      // $.get('http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json', function (data) {
      //     console.log(data)
      // });


  }
  
  render(){
    return (
          <div >
            sunboxlabs
            <div class="container">
              <div class="left">
                stocks
              </div>
              <div class="news">
                newest updates
                <News />
              </div>
              <div class="right">
                guides
              </div>
            </div>
          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));



