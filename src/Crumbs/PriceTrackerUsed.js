import React from 'react';


export default class PriceTrackerUsed extends React.Component {
  constructor(props) {
    super(props);
    this._getRandomColor = this._getRandomColor.bind(this);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
      fetch('https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/ssxDRduoSE3XdkzLv/lastExec/results?token=vDBYC8EeGdBZpYPrrrXLEjmwF')
        .then((res) => { return res.json()})
        
        // merge arrays from different sites
        .then(res =>  {   let finalArray = []
                           for (var i = 0; i < res.length; i++){
                                  if (i === 0) { finalArray = res[0].pageFunctionResult; }
                                  else { finalArray = finalArray.concat( res[i].pageFunctionResult ); }
                                } 
                           return finalArray
                        })

        // deduplicate
        .then((res) => {
                    res = res.filter((thing, index, self) =>
                      index === self.findIndex((t) => (
                         t.name === thing.name
                      ))
                    )
                    return res
        })

        // sort
        .then(res => {  
                  let newArray = res; for (var i = 0; i < res.length; i++){ newArray[i].price = parseInt(newArray[i].price.replace(',', '').replace('$', '')) }; 
                  return newArray.sort((a, b) => a.price - b.price)  })

        // set results as state
        .then((res) => {
                    this.setState({data: res}); 
                    // console.log(res)
        })
     
  }



  componentWillUnmount() {

  };

  _getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }


  render() {
    return (
      <div class="box">
        <p><b>Used Electric Vehicle Prices (updated daily)</b></p>
        {this.state.data.map(item => (
                  <a href={"https://www.edmunds.com"+item.link} target="_blank" >
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      
                      <div>
                        <span style={{color: 'dodgerblue', opacity: .4}}>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                      </div>
                      <div class="carName" key={item.name}>
                          <div>
                            {item.name.replace('USED', '')}
                          </div>
                      </div>

                    </div>
                  </a>                  
                ))}
      </div>
    )
  }
}
