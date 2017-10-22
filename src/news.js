import React from 'react';
import firebase from 'firebase';
import TimeAgo from 'react-timeago'


var config = {
  // apiKey: "",
  authDomain: "sunfeed-73e4a.firebaseio.com/",
  databaseURL: "https://sunfeed-73e4a.firebaseio.com/",
  // storageBucket: "some-app.appspot.com",
};

firebase.initializeApp(config);


export default class News extends React.Component {
  constructor(props) {
    super(props);
    // this._articleSort = this._articleSort.bind(this)
    this._fbUpdate = this._fbUpdate.bind(this);

    this.state = {
      username: 'articles',
      items: []
    };
    this.ref = firebase.database().ref(this.state.username);
  }

  componentWillMount() {
    this.items = [{}];
    this.ref.on("value", (dataSnapshot) => {
      this.items = dataSnapshot.val()
      this.items = Object.keys(this.items).map(key => this.items[key])
      // this._articleSort(this.items)
      this.setState({
          items: this.items
      })
      console.log(this.state.items)
    })
    
  }

  // _articleSort(items){
  //     console.log('running')
  //     var _articles = items
  //     _articles.sort(function(a,b){
  //       return b.published - a.published;
  //       }.bind(this));
  //     this.setState(() => ({
  //       items: _articles
  //     }));
  //   }




  componentWillUnmount() {
    this.ref.off();
  };

  handleUpdate = (e, key) => {
    //  console.log(key, e)
     var _newData = this.state.items
     var _updated = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
     _newData[key].name = _updated
    //  console.log(_newData)
     this.setState({
       items: _newData
     })
     console.log(this.state)
     this._fbUpdate(this.state.items)
  };


  _getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }

  _fbUpdate(_newData){
    console.log('updating server...')
    this.ref.set(_newData)
    // this.componentWillMount()
  }

  render() {
    return (
      <div>
        {this.state.items.reverse().map(article => (
                  <div class="newsItem">
                    <p style={{paddingLeft: 10}}>
                      <a target="_blank" class="article" href={article.link} >{article.title}</a> &nbsp; 
                      <span class="source">{article.source}</span> 
                      &nbsp;&nbsp;&nbsp;
                      <span class="time">
                        <TimeAgo date={article.published} />
                      </span></p>
                  </div>
                ))}
      </div>
    )
  }
}
