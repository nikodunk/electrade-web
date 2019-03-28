import React from 'react';



const model3Image = require('../img/model3.jpg')
const boltImage = require('../img/bolt.jpg')
const leafImage = require('../img/leaf.jpg')
const konaImage = require('../img/kona.jpg')
const etronImage = require('../img/etron.jpg')
const i3Image = require('../img/i3.jpg')
const fiatImage = require('../img/fiat.jpg')
const golfImage = require('../img/golf.jpg')



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
        </p>

        {this.state.leases ? 
          <table>
            <th>
              <td width="200">Make and model</td>
              <td>$/ mo avg</td>
            </th>

            {this.state.leases.map(item => (
                  <tr >
                    {/* {item.regions.indexOf(this.state.region) !== -1 ? */}
                        <a >
                                {/*<img  class="videoImage"
                                        src={
                                                item.teaserImage === 'Bolt' ? boltImage : 
                                                item.teaserImage === 'Leaf' ? leafImage : 
                                                item.teaserImage === 'Etron' ? etronImage : 
                                                item.teaserImage === 'Kona' ? konaImage : 
                                                item.teaserImage === '500e' ? fiatImage : 
                                                item.teaserImage === 'i3' ? i3Image : 
                                                item.teaserImage === 'Golf' ? golfImage : 
                                                model3Image} />
                                <p style={{}}>{item.title} for {item.price}</p>*/}

                                  <td width="200">{item["Make and Model"]}</td>
                                  <td>{item["$"]["mo avg"]}</td>

                        </a>
                    {/*: null }*/}
                  </tr>
            ))}
        </table> : null }
      </div>
  )}
}
