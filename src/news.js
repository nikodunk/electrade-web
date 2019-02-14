import React from 'react';
import TimeAgo from 'react-timeago'


export default class News extends React.Component {
  constructor(props) {
    super(props);
    
    

    this.state = {
      data: []
    };

  }

  componentWillMount() {
    fetch('https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/Z79rSy82LB9BxDyaa/lastExec/results?token=u8HqK39BcB8PKAFsjMtb9Bnnh')
          .then(res => { return res.json()})

          // merge arrays from different sites
          .then(json =>  {   let finalArray = []
                             for (var i = 0; i < json.length; i++){
                                    if (i === 0) { finalArray = json[0].pageFunctionResult; }
                                    else { finalArray = finalArray.concat( json[i].pageFunctionResult ); }
                                  } 
                             return finalArray
                          })

          // sort by date
          .then(merged => {  return merged.sort((a,b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))  })

          // convert date to string
          .then(sorted => { 
                            for (var i = 0; i < sorted.length; i++){
                                    sorted[i].date = new Date(sorted[i].date * 1000)
                                    // sorted[i].date = sorted[i].date.substring(0, sorted[i].date.length - 6) + ' ' + sorted[i].date.substring(8)
                                    // console.log(sorted[i].date)
                                  } 
                            return sorted  
                          })

          // set results as state
          .then((sorted) => { 
                          this.setState({data: sorted}); 
                          console.log(sorted)

                          })
    
  }


  componentWillUnmount() {
    this.ref.off();
  };


  _getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }


  render() {
    return (
      <div>
        {this.state.data.map(item => (
          <a onclick="ga('send', 'event', 'NewsItem', 'clicked', 'textlinks');" target="_blank" class="item" href={item.link}>
                  <div key={item.text} class="newsItem">
                    <div>
                      <img 
                          src={item.image} 
                          alt="" 
                          class="newsImage" />
                    </div>
                    <div>
                      <p>
                        {item.text.substring(0, item.text.indexOf('http'))}&nbsp;
                        <span class="source"><i>{item.source}</i></span>
                      </p> 
                    </div>
                    <div class="newsItemRight">
                      <p class="time">
                        <TimeAgo date={item.date} />
                      </p>
                    </div>
                  </div>
          </a>
                ))}
      </div>
    )
  }
}
