$.getJSON("http://finance.yahoo.com/webservice/v1/symbols/YHOO,AAPL/quote?format=json&view=detail", function(data){console.log(data)
      })

      $.ajax({
        method: "GET",
        url: "http://finance.yahoo.com/webservice/v1/symbols/TSLA?format=json",
        dataType: "application/json",
        success: function(data){
            console.log('worked with this:' + data)
          }
      })

      this.ref = firebase.database().ref('users');