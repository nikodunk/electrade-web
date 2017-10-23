import React from 'react';
import $ from 'jquery'
import yahooFinance from 'yahoo-finance'


export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'articles',
      items: [{}]
    };
  }

  componentWillMount() {

      yahooFinance.quote({
        symbol: 'TSLA',
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        // console.log(quotes.price)
        var _items = this.state.items.slice(0)
        _items[0].symbol = quotes.price.symbol
        _items[0].price = quotes.price.regularMarketPrice
        _items[0].change = quotes.price.regularMarketChangePercent.toFixed(3) * 100;
        this.setState({items: _items})
      }.bind(this));
        
      
      // $.getJSON("http://finance.yahoo.com/webservice/v1/symbols/YHOO,AAPL/quote?format=json&view=detail", function(data){console.log(data)
      // })

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
                  <div class="" key={stock.symbol}>
                      <div>
                      {stock.symbol}  ${stock.price}</div>
                      <div class="newsItemRight"> {stock.change}%</div>
                  </div>
                ))}
      </div>
    )
  }
}
