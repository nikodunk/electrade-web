import React from 'react';
import $ from 'jquery'


export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this._getRandomColor = this._getRandomColor.bind(this);
    this.state = {
      username: 'articles',
      items: [
        {name: 'General Motors', cap: 67.730},
        {name: 'Tesla Inc.', cap: 56.300},
        {name: 'Vestas Wind', cap: 18.830},
        {name: 'Mobileye', cap: 15.000},
        {name: 'First Solar', cap: 4.820},
        {name: 'Nest (exit)', cap: 3.200},
        {name: 'Bloom Energy', cap: 2.870},
        {name: 'Gogoro', cap: 0.820},
        {name: 'Avantium', cap: 0.570},
        {name: 'Mosaic', cap: 0.440},
        {name: 'Vivint Solar', cap: 0.439},
        {name: 'Sonnen', cap: 0.180},
        {name: 'Brammo', cap: 0.150},
        {name: 'LimeBike', cap: 0.130},
        {name: 'Electron', cap: 0.120},
        {name: 'Aurora Flight Sciences', cap: 0.030},
        {name: 'Wunder Capital', cap: 0.020},
      ]
    };
  }

  componentWillMount() {

     
  }



  componentWillUnmount() {

  };

  _getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }


  render() {
    return (
      <ol style={{margin: 5, paddingLeft: 15}}>
        {this.state.items.map(unicorn => (
                  <li>
                    <div class="stock" key={unicorn.name}>
                        <div>
                          {unicorn.name}
                        </div>
                        <div class="newsItemRight">
                          <span style={{color: '#ffa07a', opacity: .4}}>${unicorn.cap.toFixed(2)}B</span>
                        </div>
                    </div>
                  </li>
                ))}
      </ol>
    )
  }
}
