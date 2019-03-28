import React from 'react';


export default class PriceTrackerUsed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
  }

  componentWillMount() {
      this._getUsedTeslaData()
  }



  componentWillUnmount() {

  };


  _getUsedTeslaData(){

    this.setState({loading: true})

    // GET SCRAPED TESLA RESULTS
    fetch('https://electrade-server.herokuapp.com/api/scrapes/get/'+'0')
      .then((res) => { return res.json()})

      // merge arrays from different pages
      .then(res =>  {   
                        let finalArray = []
                        for (var i = 0; i < res.length; i++){
                                if (i === 0) { finalArray = res[0].pageFunctionResult; }
                                else { finalArray = finalArray.concat( res[i].pageFunctionResult ); }
                              } 
                        return finalArray
                      })


      // edit properties of car object
      // .then(res => {
      //           // console.log(res)
      //           let newArray = res; 
      //           for (var i = 0; i < res.length; i++){ 
      //                   newArray[i].price = newArray[i].price.substring(0, 7);
      //           }; 
      //           return newArray
      //         }
      // )

      // sort
      // .then(res => {  
      //           let newArray = res; for (var i = 0; i < res.length; i++){ newArray[i].price = parseInt(newArray[i].price.replace(',', '').replace('$', '')) }; 
      //           return newArray.sort((a, b) => a.price - b.price)  })

      // set results as state
      .then((res) => {
            // console.log('USED TESLAS: ', res)
            this.setState({data: res, loading: false});
      })

      // .then(() => {
      //     // GET OWN LISTINGS
      //     fetch('https://electrade-server.herokuapp.com/api/listings/get/'+'0')
      //       .then((res) => res.json())
      //       .then((json) => { this.setState({data: json.concat(this.state.data), loading: false}); console.log('USED CAR DATA:',this.state.data) })
      // })   

  }


  render() {
    return (
      <div class="box">
        <p>
          <span class="">
            <b>Used Tesla Deals Near </b>
            <select>
              <option value="San Francisco, CA">San Francisco, CA</option>
            </select> 
          </span>
          <br />
        </p>


        {this.state.data.map(item => (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      
                      <div key={item.name} style={{flex: 1}}>
                            <img src={item.image} class="carImage" alt="Used Car Image" />
                      </div>

                      <div style={{flex: 3}}>
                        <span class="carPrice" >{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        <div class="carName">
                          {item.name}
                        </div>
                        <div class="source">
                          {item.location} | {item.miles}
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
