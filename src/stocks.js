import React from 'react';



export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'articles',
      items: [{title: 'TSLA', price: '355.28', change: '-2.4'}]
    };
  }

  componentWillMount() {
 
      console.log(this.state.items)

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
                  <div>
                    <p style={{paddingLeft: 10}}>
                      {stock.title} &nbsp; 
                      <span class="source">{stock.price}</span> 
                      &nbsp;&nbsp;&nbsp;
                      <span>
                        {stock.change}
                      </span></p>
                  </div>
                ))}
      </div>
    )
  }
}
