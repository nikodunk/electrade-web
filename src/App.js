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


      // this.articleSort()





  }


    articleSort(){
        var _articles = this.state.articles
        _articles.sort(function(a,b){
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return b.published - a.published;
        }.bind(this));
        this.setState(() => ({
          articles: _articles
        }));
      }



  render(){
    return (
          <div >
            sunboxlabs
            <div class="container">
              <div class="item1">
                stocks
              </div>
              <div class="item2">
                newest updates
                <News />
              </div>
              <div class="item3">
                guides
              </div>
            </div>
          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));



