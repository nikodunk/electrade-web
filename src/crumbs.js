import React from 'react';
import Iframe from 'react-iframe'
import $ from 'jquery'
import firebase from 'firebase';


export default class Crumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

      this.ref = firebase.database().ref('users');
  }

  



  handleSubmit(e) {
      e.preventDefault();
      console.log('uas')
      var _input = document.getElementById("myInput").value
      console.log(_input)
      this.ref.push({
        email: _input
      });
      document.getElementById('theForm').style.display = 'none';
  }
  

  componentWillUnmount() {

  };

 

  render() {
    return (
      <div>
        <div class="box" id="theForm">
          <p><b>Ping me when new features are added!</b></p>
          <form>
                <input
                  id="myInput"
                  type="text"
                  name="email"
                  placeholder="youremail@example.com"
                />&nbsp;
                <button onClick={this.handleSubmit}>submit</button>
          </form>
        </div>
      
        <div class="box">  
          <p><b>Guides</b></p>
          <ol>

            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                 target="_blank" href="/2017/06/20/200-apartment-solar-system.html">
              Project: $200 Off-Grid Solar For Apartments 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/09/06/burning-man-update.html">
              Project: Burning Man System 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/09/17/what-will-it-run.html">
              Project: Low-energy devices for an off-grid home 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/09/30/box-update.html">
              Project: Box Update 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/01/burning-man-solar-2.html">
              Project: For Burning Man / Camping (Lithium battery) 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/07/solarpi.html">
              Project: SolarPi 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/07/stock-sunjack-in-window.html">
              Project: sunjack stock in window 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/09/hurricane.html">
              Project: Hurricane Solar Lighting 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/10/build-it.html">
              Link: More than 500 renewable energy and conservation projects you can build 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/10/check-reddit.html">
              Link: The Reddit DIY Community 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/10/desert-power.html">
              Link: Desert power (without lots of generators) 
              </a>&nbsp;
            </li>
            
            <li> 
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/10/full-rv.html">
              Link: Full RV Solar &amp; Inverter Install ~ From Start To Finish (Video) 
              </a>&nbsp;
            </li>
            
            <li>
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/10/hackaday-solar.html">
              Link: Hackaday Solar Projects 
              </a>&nbsp;
            </li>
            
            <li> 
              <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
              target="_blank" href="/2017/10/16/solar-smartwatch.html">
              Link: LunaR, the world’s first solar powered smartwatch.  
              </a>&nbsp;
            </li>
            
          </ol>
        <p>Submit new:</p><br />
        <form action="https://formspree.io/n.dunkel@gmail.com"
              method="POST"
              id="formspree">
            <input type="text" placeholder="link or story" name="name" />&nbsp;
            <input type="email" placeholder="your email" name="_replyto" />&nbsp;
            <button type="submit" value="Submit" >Submit</button>
        </form>
      </div>
    </div>
    )
  }
}
