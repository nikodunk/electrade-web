(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/model3.2b3bb081.jpg"},function(e,t,n){e.exports=n.p+"static/media/bolt.3b938641.jpg"},function(e,t,n){e.exports=n.p+"static/media/leaf.ce7844ba.jpg"},function(e,t,n){e.exports=n.p+"static/media/kona.91ed75b9.jpg"},function(e,t,n){e.exports=n.p+"static/media/etron.0ef0a743.jpg"},function(e,t,n){e.exports=n.p+"static/media/i3.4b334f0e.jpg"},function(e,t,n){e.exports=n.p+"static/media/fiat.61a9a223.jpg"},function(e,t,n){e.exports=n.p+"static/media/golf.f41734f7.jpg"},function(e,t,n){e.exports=n.p+"static/media/bmw330e.f4e6f276.jpg"},function(e,t,n){e.exports=n.p+"static/media/prime.6b50995d.jpg"},function(e,t,n){e.exports=n.p+"static/media/volt.3a3e8402.jpg"},function(e,t,n){e.exports=n.p+"static/media/niro.7d919d46.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),o=n.n(r),i=n(2),c=n(4),s=n(3),u=n(1),m=n(5),d=n(8),p=n.n(d),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={data:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/Z79rSy82LB9BxDyaa/lastExec/results?token=u8HqK39BcB8PKAFsjMtb9Bnnh").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<e.length;n++)t=0===n?e[0].pageFunctionResult:t.concat(e[n].pageFunctionResult);return t}).then(function(e){return e.sort(function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})}).then(function(e){for(var t=0;t<e.length;t++)e[t].date=new Date(1e3*e[t].date);return e}).then(function(t){e.setState({data:t})})}},{key:"componentWillUnmount",value:function(){this.ref.off()}},{key:"_getRandomColor",value:function(){return"#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).substr(-6)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("b",null,"Latest Electric Car News")),l.a.createElement("div",{class:"box"},this.state.data.map(function(e){return l.a.createElement("a",{onclick:"ga('send', 'event', 'NewsItem', 'clicked', 'textlinks');",target:"_blank",class:"item",href:e.link,rel:"noopener noreferrer"},l.a.createElement("div",{key:e.text,class:"newsItem"},l.a.createElement("div",null,l.a.createElement("img",{src:e.image,alt:"",class:"newsImage"})),l.a.createElement("div",null,l.a.createElement("p",null,e.text.substring(0,e.text.indexOf("http")),"\xa0",l.a.createElement("span",{class:"source"},l.a.createElement("i",null,e.source)))),l.a.createElement("div",{class:"newsItemRight"},l.a.createElement("p",{class:"time"},l.a.createElement(p.a,{date:e.date})))))})))}}]),t}(l.a.Component),h=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{id:"theForm"},l.a.createElement("form",{action:"https://formspree.io/hello@sunboxlabs.com",method:"POST",id:"formspree"},l.a.createElement("input",{type:"hidden",value:this.props.region,name:"region"}),l.a.createElement("input",{type:"hidden",value:this.props.car,name:"car"}),l.a.createElement("input",{style:{width:100},type:"email",placeholder:"your email",name:"_replyto"}),l.a.createElement("button",{type:"submit",value:"Request"},l.a.createElement("b",null,"Get introduction"))))}}]),t}(l.a.Component)),E=n(18),g=n(19),v=n(20),b=n(21),y=n(22),k=n(23),w=n(24),j=n(25),x=n(26),O=n(27),I=n(28),M=n(29),A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={data:[],loading:!1,leases:null,filteredLeases:null,region:"CA(N)"},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({loading:!0}),this._getLeases()}},{key:"componentWillUnmount",value:function(){}},{key:"_onChange",value:function(e){var t=this;e.preventDefault(),this.setState({region:e.target.value,filteredLeases:null}),setTimeout(function(){return t._filter()},1)}},{key:"_filter",value:function(){var e,t=this;e=(e=this.state.leases.filter(function(e,n){return e.State===t.state.region})).filter(function(e,t,n){return t===n.findIndex(function(t){return t["Make and Model"]===e["Make and Model"]})}),this.setState({filteredLeases:e})}},{key:"_getLeases",value:function(){var e=this;fetch("https://electrade-server.herokuapp.com/api/leases/all/get").then(function(e){return e.json()}).then(function(t){e.setState({leases:t})}).then(function(){return e._filter()})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("span",{class:""},l.a.createElement("b",null,"Best Electric Vehicle lease deals around "),l.a.createElement("select",{onChange:function(t){return e._onChange(t)}},l.a.createElement("option",{value:"CA(N)"},"Bay Area, CA"),l.a.createElement("option",{value:"CA(S)"},"Los Angeles Area, CA"),l.a.createElement("option",{value:"NY"},"New York"),l.a.createElement("option",{value:"CO"},"Colorado"),l.a.createElement("option",{value:"FL"},"Florida"),l.a.createElement("option",{value:"GA"},"Georgia"),l.a.createElement("option",{value:"IL"},"Illinois"),l.a.createElement("option",{value:"IL"},"Massachusetts"),l.a.createElement("option",{value:"MD"},"Maryland"),l.a.createElement("option",{value:"NJ"},"New Jersey"),l.a.createElement("option",{value:"OR"},"Oregon"),l.a.createElement("option",{value:"VA"},"Virginia"),l.a.createElement("option",{value:"WA"},"Washington")),"\xa0\xa0 \xa0 Last updated: March 22 2019 \xa0",l.a.createElement("a",{style:{color:"lightblue"},href:"http://ev-vin.blogspot.com/"},"Source")),l.a.createElement("br",null)),l.a.createElement("div",{class:"box"},this.state.filteredLeases?l.a.createElement("table",null,l.a.createElement("th",{style:{borderBottom:"1px solid lightgrey"}},l.a.createElement("td",{style:{width:200}},"Make, model, Year"),l.a.createElement("td",null,"$/ mo"),l.a.createElement("td",null,"Months"),l.a.createElement("td",null,"Down + Acq Fee"),l.a.createElement("td",null,"Miles / Yr"),l.a.createElement("td",null,"$ Total"),l.a.createElement("td",null,"$/ mo avg"),l.a.createElement("td",null,"Expires"),l.a.createElement("td",{style:{width:200}},"Contact")),this.state.filteredLeases.map(function(t){return l.a.createElement("tr",null,l.a.createElement("span",null,l.a.createElement("td",{style:{width:200}},l.a.createElement("img",{class:"videoImage",src:"Bolt"===t.teaserImage?g:"Leaf"===t.teaserImage?v:"Etron"===t.teaserImage?y:"Kona"===t.teaserImage?b:"500e"===t.teaserImage?w:"i3"===t.teaserImage?k:"Golf"===t.teaserImage?j:"330e"===t.teaserImage?x:"Prime"===t.teaserImage?O:"Volt"===t.teaserImage?I:"Niro"===t.teaserImage?M:"Model3"===t.teaserImage?E:null}),l.a.createElement("span",null,l.a.createElement("b",null,t["Make and Model"]),", ",t.Year)),l.a.createElement("td",null,t["$/mo"]),l.a.createElement("td",null,t.months),l.a.createElement("td",null,t["down+acq"]),l.a.createElement("td",null,t["miles/yr"]),l.a.createElement("td",null,t["$ total"]),l.a.createElement("td",{style:{color:"#98ff98"}},t["$/mo avg"]),l.a.createElement("td",null,t.Exp),l.a.createElement("td",{style:{width:200}},l.a.createElement(h,{region:e.state.region,car:t["Make and Model"]}))),l.a.createElement("hr",null))})):null))}}]),t}(l.a.Component),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onError",value:function(e){console.log(e)}}]),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"navbar"},l.a.createElement("span",null,l.a.createElement("img",{src:"/electron.png",alt:""}),"\xa0",l.a.createElement("span",{class:"title"},l.a.createElement("b",null,"electrification")," | EV lease & news tracker.")),l.a.createElement("span",null,l.a.createElement("a",{class:"AppButton title time",href:"https://itunes.apple.com/us/app/id1445602414",target:"blank"},"Get iOS App"),"\xa0",l.a.createElement("a",{class:"AppButton title time",href:"https://play.google.com/store/apps/details?id=com.bigset.electric",target:"blank"},"Get Android App"))),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"news"},l.a.createElement(f,null)),l.a.createElement("div",{class:"listings"},l.a.createElement(A,null))))}}]),t}(l.a.Component);o.a.render(l.a.createElement(C,null),document.getElementById("root"));var L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var N=document.getElementById("root");N.hasChildNodes()?Object(r.hydrate)(l.a.createElement(C,null),N):Object(r.render)(l.a.createElement(C,null),N),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");L?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):B(e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.515544cf.chunk.js.map