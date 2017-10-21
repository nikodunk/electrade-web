import React from 'react'
import ReactDOM from 'react-dom'
import feed from 'feed-read'
import TimeAgo from 'react-timeago'


export default class App extends React.Component{

  onError(error){
    console.log(error)
  }

  constructor(props) {
    super(props);

    this.state = {
              articles: [
                  
                ]
        }
      
  }

  componentDidMount() {
      feed("https://electrek.co/feed/", function(err, articles) {
        if (err) throw err;

        var _articles = this.state.articles
        _articles.push.apply(_articles, articles)

        this.setState(() => ({
          articles
        }));

        }.bind(this)
      );

      feed("https://techcrunch.com/greentech/feed", function(err, articles) {
        if (err) throw err;

        var _articles = this.state.articles
        _articles.push.apply(_articles, articles)

        this.setState(() => ({
          articles: _articles
        }));

        }.bind(this)
      );


  }


  render(){
    return (
          <div >
            sunboxlabs
            <div class="container">
              <div class="item">
                stocks
              </div>
              <div class="item">
                newest updates
              {this.state.articles.map(article => (
                  <div>
                    <p style={{paddingLeft: 10}}>
                      <b>{article.title}</b> &nbsp;
                      <span style={{color: 'grey'}}>{article.feed.name}</span> &nbsp;&nbsp;&nbsp;
                      <span style={{border: '1px grey solid', padding: 3, borderRadius: 3}}><TimeAgo date={article.published} /></span></p>

                  <hr />
                  </div>
                ))}
              </div>
              <div class="item">
                guides
              </div>
            </div>
          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));



