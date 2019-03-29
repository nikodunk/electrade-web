import React from 'react';



const model3Image = require('./img/model3.jpg')
const boltImage = require('./img/bolt.jpg')
const leafImage = require('./img/leaf.jpg')
const konaImage = require('./img/kona.jpg')
const etronImage = require('./img/etron.jpg')
const i3Image = require('./img/i3.jpg')
const fiatImage = require('./img/fiat.jpg')
const golfImage = require('./img/golf.jpg')

const bmwImage = require('./img/bmw330e.jpg')
const primeImage = require('./img/prime.jpg')
const voltImage = require('./img/volt.jpg')
const niroImage = require('./img/niro.jpg')



export default class PriceTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      leases: null,
      filteredLeases: null,
      region: 'CA(N)'
    };
  }

  componentWillMount() {
      this.setState({loading: true})
      this._getLeases()
  }



  componentWillUnmount() {

  };


  _onChange(newRegion){

    this.setState({region: newRegion, filteredLeases: null})
    setTimeout(() => this._filter(), 1)
  }



  _filter(){
    
    let filtered

    // filter by region
    filtered = this.state.leases.filter((item, index) => item["State"] === this.state.region )

    // deduplicate
    filtered = filtered.filter((thing, index, self) =>
                            index === self.findIndex((t) => (
                               t["Make and Model"] === thing["Make and Model"]
                          )))

    this.setState({filteredLeases: filtered})


  }


  _getLeases(){

      // GET CURRENT LEASES
      // fetch('http://localhost:8080/api/leases/get')
      fetch('https://electrade-server.herokuapp.com/api/leases/SF/get')
        .then((res) => { return res.json()})

        // set results as state
        .then((res) => {
              this.setState({leases: res});
        })

        .then(() => this._filter())
    }

  


  render() {
    return (
      <div>
        
      <div class="box">


          {this.state.filteredLeases ? 
            <table>
              <th style={{borderBottom: '1px solid lightgrey'}}>
                <td style={{width: 200}}>Make and model</td>
                <td>Year</td>
                <td>$/ mo</td>
                <td>Months</td>
                <td>Down + Acq Fee</td>
                <td>Miles / Yr</td>
                <td>$ Total</td>
                <td>$/ mo avg</td>
                <td>Dealer</td>
                <td>Expires</td>
              </th>


              {this.state.filteredLeases.map(item => (
                    <tr >
                          <a >
                                    <td style={{width: 200}}>
                                      <img  
                                          class="videoImage"
                                          src={
                                                  item.teaserImage === 'Bolt' ? boltImage : 
                                                  item.teaserImage === 'Leaf' ? leafImage : 
                                                  item.teaserImage === 'Etron' ? etronImage : 
                                                  item.teaserImage === 'Kona' ? konaImage : 
                                                  item.teaserImage === '500e' ? fiatImage : 
                                                  item.teaserImage === 'i3' ? i3Image : 
                                                  item.teaserImage === 'Golf' ? golfImage : 
                                                  item.teaserImage === '330e' ? bmwImage : 
                                                  item.teaserImage === 'Prime' ? primeImage : 
                                                  item.teaserImage === 'Volt' ? voltImage : 
                                                  item.teaserImage === 'Niro' ? niroImage : 
                                                  item.teaserImage === 'Model3' ? model3Image : 
                                                  null
                                                  } />
                                        <span><b>{item["Make and Model"]}</b></span>
                                    </td>
                                    <td>{item["Year"]}</td>
                                    <td>{item["$/mo"]}</td>
                                    <td>{item["months"]}</td>
                                    <td>{item["down+acq"]}</td>
                                    <td>{item["miles/yr"]}</td>
                                    <td>{item["$ total"]}</td>
                                    <td style={{color: '#98ff98'}}>{item["$/mo avg"]}</td>
                                    <td>{item["Dealer"]}</td>
                                    <td>{item["Exp"]}</td>
                          </a>
                      <hr />
                    </tr>
              ))}
          </table> : null }

      </div>
    </div>
  )}
}
