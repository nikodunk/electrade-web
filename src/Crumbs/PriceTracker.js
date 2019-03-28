import React from 'react';



const model3Image = require('../img/model3.jpg')
const boltImage = require('../img/bolt.jpg')
const leafImage = require('../img/leaf.jpg')
const konaImage = require('../img/kona.jpg')
const etronImage = require('../img/etron.jpg')
const i3Image = require('../img/i3.jpg')
const fiatImage = require('../img/fiat.jpg')
const golfImage = require('../img/golf.jpg')

const bmwImage = require('../img/bmw330e.jpg')
const primeImage = require('../img/prime.jpg')
const voltImage = require('../img/volt.jpg')
const niroImage = require('../img/niro.jpg')



export default class PriceTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      region: 'SF Bay Area'
    };
  }

  componentWillMount() {
      this.setState({loading: true})
      this._getLeases()
  }



  componentWillUnmount() {

  };


  _getLeases(){

      // GET CURRENT LEASES
      // fetch('http://localhost:8080/api/leases/get')
      fetch('https://electrade-server.herokuapp.com/api/leases/SF/get')
        .then((res) => { return res.json()})
        
        // set results as state
        .then((res) => {
              this.setState({leases: res});
        })   
    }

  


  render() {
    return (
      <div class="box">
        <p>
          <span class="">
            <b>Best local Electric Vehicle lease deals around </b>
            <select>
              <option value="San Francisco, CA">San Francisco, CA</option>
            </select> 
          </span>
          <br />
          <hr />
        </p>

        {this.state.leases ? 
          <table>
            <th>
              <td>Image</td>
              <td>Make and model</td>
              <td>$/ mo</td>
              <td>Months</td>
              <td>Down + Acq Fee</td>
              <td>Miles / Yr</td>
              <td>$/ mo avg</td>
              <td>$ Total</td>
              {/*<td>Dealer</td>*/}
              <td>Expires</td>
            </th>

            {this.state.leases.map(item => (
                  <tr >
                        <a >
                                  <td>
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
                                                model3Image} />
                                  </td>
                                  <td><span>{item["Make and Model"]} {item["Year"]}</span></td>
                                  <td>{item["$"]["mo"]}</td>
                                  <td>{item["months"]}</td>
                                  <td>{item["down+acq"]}</td>
                                  <td>{item["miles"]["yr"]}</td>
                                  <td style={{color: '#98ff98'}}>{item["$"]["mo avg"]}</td>
                                  <td>{item["$ total"]}</td>
                                  {/*<td>{item["Dealer"]}</td>*/}
                                  <td>{item["Exp"]}</td>
                        </a>
                    <hr />
                  </tr>
            ))}
        </table> : null }
      </div>
  )}
}
