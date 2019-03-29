import React from 'react';


export default class ListingCrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <div id="theForm">
        <form action="https://formspree.io/hello@sunboxlabs.com"
              method="POST"
              id="formspree">
            <input type="hidden" value={this.props.region} name="region" />
            <input type="hidden" value={this.props.car} name="car" />
            <input type="email" placeholder="your email" name="_replyto" />
            <button style={{width: '100%', padding: 10}} type="submit" value="Request"><b>Get this deal</b></button>
        </form>

      </div>
    )
  }
}



