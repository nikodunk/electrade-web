import React from 'react';


export default class ListingCrumb extends React.Component {


  render() {
    return (
      <div class="box" id="theForm">
        
        <p class="title"><b>Add your EV Listing:</b></p>
        <form action="https://formspree.io/hello@sunboxlabs.com"
              method="POST"
              id="formspree">
            <input type="text" placeholder="Your Car" name="name" />&nbsp;
            <input type="email" placeholder="your email" name="_replyto" />&nbsp;
            <button type="submit" value="Submit"><b>+ Submit</b></button>
        </form>

        {/*<form>
              <input
                id="myInput"
                type="text"
                name="email"
                placeholder="youremail@example.com"
              />&nbsp;
              <button onClick={this.handleSubmit}>submit</button>
        </form>*/}
      </div>
    )
  }
}



