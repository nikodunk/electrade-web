import React from 'react';
import Iframe from 'react-iframe'


export default class Crumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {

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
      <div >
        <div class="iframe">
          <Iframe url="https://upscri.be/a543df/"
            width="450px"
            height="150px"
            display="initial"
            position="relative" />
        </div>
        
        <div class="hr"> </div>
        


          <b>guides</b>
          <ol>

            <li>
              <a target="_blank" href="/electricfeed/2017/06/20/200-apartment-solar-system.html">
              Project: $200 Off-Grid Solar For Apartments 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/09/06/burning-man-update.html">
              Project: Burning Man System 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/09/17/what-will-it-run.html">
              Project: Low-energy devices for an off-grid home 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/09/30/box-update.html">
              Project: Box Update 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/10/01/burning-man-solar-2.html">
              Project: For Burning Man / Camping (Lithium battery) 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/10/07/solarpi.html">
              Project: SolarPi 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/10/07/stock-sunjack-in-window.html">
              Project: sunjack stock in window 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/10/09/hurricane.html">
              Project: Hurricane Solar Lighting 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/10/10/build-it.html">
              Link: More than 500 renewable energy and conservation projects you can build 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/10/10/check-reddit.html">
              Link: The Reddit DIY Community 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/10/10/desert-power.html">
              Link: Desert power (without lots of generators) 
              </a>&nbsp;
            </li>
            
            <li> 
              <a target="_blank" href="/electricfeed/2017/10/10/full-rv.html">
              Link: Full RV Solar &amp; Inverter Install ~ From Start To Finish (Video) 
              </a>&nbsp;
            </li>
            
            <li>
              <a target="_blank" href="/electricfeed/2017/10/10/hackaday-solar.html">
              Link: Hackaday Solar Projects 
              </a>&nbsp;
            </li>
            
            <li> 
              <a target="_blank" href="/electricfeed/2017/10/16/solar-smartwatch.html">
              Link: LunaR, the world’s first solar powered smartwatch.  
              </a>&nbsp;
            </li>
            
          </ol>



        <form action="https://formspree.io/n.dunkel@gmail.com"
            method="POST">
            Submit new:
          <input type="text" placeholder="link or story" name="name" />
          <input type="email" placeholder="your email" name="_replyto" />
          <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}
// <input type="text" placeholder="link or story" name="name" />