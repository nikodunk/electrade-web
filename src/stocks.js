import React from 'react';
import $ from 'jquery'


export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'articles',
      items: [{title: 'TSLA', price: '355.28', change: '-2.4'}]
    };
  }

  componentWillMount() {

      $.getJSON("http://finance.yahoo.com/webservice/v1/symbols/YHOO,AAPL/quote?format=json&view=detail", function(data){console.log(data)
      })

      // $.ajax({
      //   method: "GET",
      //   url: "http://finance.yahoo.com/webservice/v1/symbols/TSLA?format=json",
      //   dataType: "application/json",
      //   success: function(data){
      //       console.log('worked with this:' + data)
      //     }
      // })
  }



  componentWillUnmount() {

  };

  _getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }


  render() {
    return (
      <div>
        {this.state.items.map(stock => (
                  <div key={stock.title}>
                      {stock.title} &nbsp; 
                      <span class="source">{stock.price}</span> 
                      <span>{stock.change}</span>
                  </div>
                ))}
      </div>
    )
  }
}
