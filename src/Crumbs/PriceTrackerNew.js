import React from 'react';


export default class PriceTrackerNew extends React.Component {
  constructor(props) {
    super(props);
    this._getRandomColor = this._getRandomColor.bind(this);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
      fetch('https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/dqChEgEi92GTiNG9a/lastExec/results?token=p7r3cZrnv5BnGn9c4kC7PpcPT')
            .then((res) => { return res.json()})
            
            // merge arrays from different sites
            .then(res =>  {   let finalArray = []
                               for (var i = 0; i < res.length; i++){
                                      if (i === 0) { finalArray = res[0].pageFunctionResult; }
                                      else { finalArray = finalArray.concat( res[i].pageFunctionResult ); }
                                    } 
                               return finalArray
                            })

            // add some stuff
            .then(res => {  
                      let newArray = res; 
                      for (var i = 0; i < res.length; i++){ 
                              newArray[i].price = parseInt(newArray[i].price.replace(',', '').replace('$', ''));
                              newArray[i].link = "https://www.edmunds.com"+newArray[i].link;
                      }; 
                      return newArray
                    }
            )

            // add teslas
            .then((res) => { res.push(
                                { name: 'NEW Tesla Model 3', price: '42900', image: 'https://www.tesla.com/tesla_theme/assets/img/model3/hero-img--touch.jpg?20170801', link: 'https://3.tesla.com/model3/design#battery'},
                                { name: 'NEW Tesla Model S', price: '85000', image: 'https://i0.wp.com/eastwest.thegadgetman.org.uk/wp-content/uploads/2017/07/tesla256.png?fit=256%2C256&ssl=1', link: 'https://www.tesla.com/modelx/design#battery'},
                                { name: 'NEW Tesla Model X', price: '88000', image: 'https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg', link: 'https://www.tesla.com/models/design#battery'}
                                ) 
                            return res
                          })

            // deduplicate
            .then((res) => {
                        res = res.filter((thing, index, self) =>
                          index === self.findIndex((t) => (
                             t.name === thing.name
                        )))
                        return res
            })

            // sort
            .then(res => {  
                      return res.sort((a, b) => a.price - b.price)  })

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
      <div style={{margin: 5, height: '100%'}}>
        <p class="title"><b>Used Electric Vehicle Prices (updated daily)</b></p>

        {this.state.data.map(item => (
                  <a href={"https://www.edmunds.com"+item.link} target="_blank" rel="noopener noreferrer">
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      
                      <div key={item.name} style={{flex: 1}}>
                            <img src={item.image} class="carImage" alt="Used Car Image" />
                      </div>


                      <div style={{flex: 1}}>
                        <span class="carPrice" >${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                      </div>

                      <div key={item.name} style={{flex: 4}}>
                          <div class="carName">
                            {item.name.replace('USED', '')}
                          </div>
                      </div>

                    </div>
                    <hr />
                  </a>                 
                ))}
      </div>
    )
  }
}
