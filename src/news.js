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

  // handleUpdate = (e, key) => {
  //   //  console.log(key, e)
  //    var _newData = this.state.items
  //    var _updated = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
  //    _newData[key].name = _updated
  //   //  console.log(_newData)
  //    this.setState({
  //      items: _newData
  //    })
  //    console.log(this.state)
  //    this._fbUpdate(this.state.items)
  // };


  _getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }

  // _fbUpdate(_newData){
  //   console.log('updating server...')
  //   this.ref.set(_newData)
  //   // this.componentWillMount()
  // }

  render() {
    return (
      <div>
        {this.state.data.map(item => (
                  <div key={item.text} class="newsItem">
                    <div>
                      <p>
                        <a onclick="ga('send', 'event', 'NewsItem', 'clicked', 'textlinks');" 
                           target="_blank" class="item"
                           href={item.link}>
                          <img src="/sun.png" style={{maxHeight: 15, opacity: '.9'}} /> {item.text.substring(0, item.text.indexOf('http'))}&nbsp;<span class="source"><i>{item.source}</i></span>
                        </a>
                      </p> 
                    </div>
                    <div class="newsItemRight">
                      <p class="time">
                        <TimeAgo date={item.date} />
                      </p>
                    </div>
                  </div>
                ))}
      </div>
    )
  }
}
