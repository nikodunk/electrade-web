import React from 'react';


export default class PriceTrackerNew extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    return (
      <div class="box">  
                <p><b>Other Guides</b></p>
                <ol>

                  <li>
                    <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                       target="_blank" href="https://sunboxlabs.com/200-apartment-solar-system/">
                    Project: $200 Off-Grid Solar For Apartments 
                    </a>&nbsp;
                  </li>
                  
                  <li>
                    <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                    target="_blank" href="https://sunboxlabs.com/burning-man-solar/">
                    Project: Burning Man System 
                    </a>&nbsp;
                  </li>
                  
                  <li>
                    <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                    target="_blank" href="https://sunboxlabs.com/what-will-solar-run/">
                    Project: Low-energy devices for an off-grid home 
                    </a>&nbsp;
                  </li>
                  
                  <li>
                    <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                    target="_blank" href="https://sunboxlabs.com/200-solar-lithium-update/">
                    Simplified 100W Lithium System 
                    </a>&nbsp;
                  </li>
                  
                  
                </ol>
            </div>
    )
  }
}
