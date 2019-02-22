import React from 'react';


export default class PriceTrackerNew extends React.Component {


  render() {
    return (
      <div class="box">  
                <p class=""><b>Other Guides</b></p>
                <ol>

                  <li>
                    <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                       target="_blank" href="https://sunboxlabs.com/200-apartment-solar-system/" rel="noopener noreferrer">
                    Project: $200 Off-Grid Solar For Apartments 
                    </a>&nbsp;
                  </li>
                  
                  <li>
                    <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                    target="_blank" href="https://sunboxlabs.com/burning-man-solar/" rel="noopener noreferrer">
                    Project: Burning Man System 
                    </a>&nbsp;
                  </li>
                  
                  <li>
                    <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                    target="_blank" href="https://sunboxlabs.com/what-will-solar-run/" rel="noopener noreferrer">
                    Project: Low-energy devices for an off-grid home 
                    </a>&nbsp;
                  </li>
                  
                  <li>
                    <a onclick="ga('send', 'event', 'Article', 'clicked', 'textlinks');"
                    target="_blank" href="https://sunboxlabs.com/200-solar-lithium-update/" rel="noopener noreferrer">
                    Simplified 100W Lithium System 
                    </a>&nbsp;
                  </li>
                  
                  
                </ol>
            </div>
    )
  }
}
