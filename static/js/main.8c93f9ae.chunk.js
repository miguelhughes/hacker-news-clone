(this["webpackJsonphacker-news-clone"]=this["webpackJsonphacker-news-clone"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var o=a(21),n=a.n(o),s=a(0),i=a.n(s),r=function(e){var t=e.text;return i.a.createElement("span",{className:"title"},t)},c=function(e){var t=e.url;return t?i.a.createElement("span",{className:"domain"},"(",t,")"):null},m=function(e){var t=e.title,a=e.domain;return i.a.createElement("div",{className:"story-header"},i.a.createElement(r,{text:t}),i.a.createElement(c,{url:a}))},l=function(e){var t=e.points;return i.a.createElement("span",{className:"Score"},t," points")},u=function(e){var t=e.name;return i.a.createElement("span",{className:"author"},"by ",t)},h=a(22),p=a.n(h),d=function(e){var t,a=e.time;return t=-1!==a.indexOf("ago")?a:p()(a).fromNow(),i.a.createElement("span",{className:"time"},t)},g=function(){return i.a.createElement("a",{className:"hide-button",href:"/"},"hide")},f=function(e){var t=e.count,a=t>0?t+" comments":"discuss";return i.a.createElement("a",{className:"count",href:"/"},a)},E=function(e){var t=e.story;return i.a.createElement("div",{className:"details"},i.a.createElement(l,{points:t.points}),i.a.createElement(u,{name:t.author}),i.a.createElement(d,{time:t.date}),"| ",i.a.createElement(g,null)," |",i.a.createElement(f,{count:t.comments}))},v=(a(35),a(36),function(){return i.a.createElement("a",{className:"vote-button",href:"/"},i.a.createElement("i",{className:"fa fa-caret-up"}))}),A=function(e){var t=e.position;return i.a.createElement("div",{className:"rank"},t,".",i.a.createElement(v,null))},y=function(e){var t=e.story;return i.a.createElement("div",{className:"story"},i.a.createElement(A,{position:t.position}),i.a.createElement("div",null,i.a.createElement(m,{title:t.title,domain:t.site}),i.a.createElement(E,{story:t})))},k=a(23),b=a.n(k),N=function(){return i.a.createElement("img",{className:"logo",src:b.a,alt:"y combinator logo"})},w=function(e){var t=e.children;return i.a.createElement("span",{className:"menu"},t)},j=function(){return i.a.createElement("span",{className:"login"},"login")},S=function(){return i.a.createElement("div",{className:"header"},i.a.createElement(N,null),i.a.createElement("span",{className:"nav"},i.a.createElement("span",{className:"heading"},"Hacker News"),i.a.createElement(w,null,i.a.createElement("a",{href:"/new"},"new"),i.a.createElement("a",{href:"/past"},"past"),i.a.createElement("a",{href:"/comments"},"comments"),i.a.createElement("a",{href:"/ask"},"ask"),i.a.createElement("a",{href:"/show"},"show"),i.a.createElement("a",{href:"/jobs"},"jobs"),i.a.createElement("a",{href:"/submit"},"submit"))),i.a.createElement(j,null))},C=a(11),H=a(24),O=a(25),x=a(28),B=a(27),W=a(26),D=a.n(W),F=function(e){Object(x.a)(a,e);var t=Object(B.a)(a);function a(){var e;return Object(H.a)(this,a),(e=t.call(this)).state={markdown:"loading..."},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.url&&fetch(this.props.url).then((function(e){return e.text()})).then((function(t){return e.setState({markdown:t})}))}},{key:"render",value:function(){var e=this.state.markdown;return i.a.createElement(D.a,{source:e,escapeHtml:!1})}}]),a}(s.Component),R=(a(121),function(e){var t=e.repoName,a=Object(s.useState)(!1),o=Object(C.a)(a,2),n=o[0],r=o[1],c=Object(s.useState)(!1),m=Object(C.a)(c,2),l=m[0],u=m[1],h="https://raw.githubusercontent.com/miguelhughes/".concat(t,"/master/README.md");var p="readme-viewer"+(n?" expanded":"");return l?null:i.a.createElement("div",{className:p},i.a.createElement("div",{className:"wrapper"},i.a.createElement("button",{onClick:function(){r((function(e){return!e}))},title:"show this sample's readme"},"about this"),i.a.createElement("button",{className:"linkButton",onClick:function(){u(!0)}},"X"),n&&i.a.createElement(F,{url:h})))}),T=function(e){var t=e.stories;return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,{repoName:"hacker-news-clone"}),i.a.createElement("div",{className:"story-container"},i.a.createElement(S,null),t.map((function(e){return i.a.createElement(y,{key:e.position,story:e})}))))},G=i.a.createElement(T,{stories:[{position:1,title:"There Are No Bugs, Just TODOs",site:"almad.blog",points:64,author:"Almad",date:"1 hour ago",comments:14},{position:2,title:"SimRefinery Recovered",site:"obscuritory.com",points:497,author:"velmu",date:"10 hours ago",comments:86},{position:3,title:"Why Is the Human Brain So Efficient? (2018)",site:"nautil.us",points:111,author:"rcshubhadeep",date:"5 hours ago",comments:72},{position:4,title:"Mental Wealth",site:"jjbeshara.com",points:144,author:"imartin2k",date:"6 hours ago",comments:102},{position:5,title:"People try to do right by each other, no matter the motivation, study finds",site:"phys.org",points:77,author:"pseudolus",date:"7 hours ago",comments:54},{position:6,title:"Ask HN: How do I reach making $1-1.5k/mo in 13 months?",points:198,author:"noddly",date:"2 hours ago",comments:129},{position:7,title:"Julia as a CLI Calculator",site:"krasjet.com",points:84,author:"krjt",date:"6 hours ago",comments:56},{position:8,title:"First photo of HS2 tunnel boring machines",site:"ianvisits.co.uk",points:74,author:"edward",date:"8 hours ago",comments:97},{position:9,title:"High-Speed Pool and Billiards Video Clips",site:"colostate.edu",points:21,author:"Tomte",date:"3 hours ago",comments:2},{position:10,title:"A History of Clojure [pdf]",site:"clojure.org",points:563,author:"puredanger",date:"22 hours ago",comments:315},{position:11,title:"Germany, France launch Gaia-X platform in bid for \u2018tech sovereignty\u2019",site:"politico.eu",points:151,author:"tpush",date:"6 hours ago",comments:356},{position:12,title:"Google2Csv is a simple Google scraper that saves the results on a CSV file",site:"github.com",points:10,author:"panos_sa",date:"1 hour ago",comments:3},{position:13,title:"Why So Many Police Are Handling the Protests Wrong",site:"themarshallproject.org",points:38,author:"epistasis",date:"57 minutes ago",comments:20},{position:14,title:"WeChat permanently closes account after user sets CCP-offensive password",site:"twitter.com",points:172,author:"drevil-v2",date:"2 hours ago",comments:82},{position:15,title:"Synthetic red blood cells mimic natural ones, and have new abilities",site:"acs.org",points:78,author:"headalgorithm",date:"13 hours ago",comments:14},{position:16,title:"Julialang Antipatterns",site:"ucc.asn.au",points:40,author:"ViralBShah",date:"8 hours ago",comments:1},{position:17,title:"Ask HN: How to Disagree with the Rest of Management?",points:9,author:"anonymous_smile",date:"1 hour ago",comments:14},{position:18,title:"Signal app downloads spike as US protesters seek message encryption",site:"qz.com",points:392,author:"pera",date:"12 hours ago",comments:307},{position:19,title:"The Beauty of Unix Pipelines",site:"prithu.xyz",points:561,author:"0x4FFC8F",date:"19 hours ago",comments:332},{position:20,title:"Ask HN: Have you ever gone without a computer or phone for an extended period?",points:120,author:"luddite99",date:"12 hours ago",comments:131},{position:21,title:"Kids and Time",site:"jefftk.com",points:38,author:"luu",date:"7 hours ago",comments:28},{position:22,title:"Open source 5G core network",site:"github.com",points:13,author:"polymorph1sm",date:"5 hours ago",comments:0},{position:23,title:"Ask HN: Which Coursera courses/specializations you recommend?",points:12,author:"quotz",date:"1 hour ago",comments:6},{position:24,title:"Containers from first principles",site:"fzakaria.com",points:69,author:"setheron",date:"12 hours ago",comments:9},{position:25,title:"Ask HN: Are my expectations on code quality and professionalism too high?",points:150,author:"veggiepulse",date:"5 hours ago",comments:184},{position:26,title:"Words that don't translate into English",site:"theguardian.com",points:64,author:"tintinnabula",date:"14 hours ago",comments:186},{position:27,title:"The Story Behind The Unmarked Federal Agents Occupying Washington, D.C",site:"politico.com",points:60,author:"Kapura",date:"1 hour ago",comments:13},{position:28,title:"The Go Compiler Needs to Be Smarter",site:"lemire.me",points:141,author:"hactually",date:"14 hours ago",comments:86},{position:29,title:"Homoiconicity Revisited",site:"expressionsofchange.org",points:37,author:"vanschelven",date:"10 hours ago",comments:34},{position:30,title:"macOS in QEMU in Docker",site:"github.com",points:460,author:"mjtlittle",date:"21 hours ago",comments:173}]});n.a.render(G,document.getElementById("root"))},23:function(e,t){e.exports="data:image/gif;base64,R0lGODlhEgASAKIAAP/jyvihV/aKLfmxc/////9mAAAAAAAAACH5BAAAAAAALAAAAAASABIAAAMpWLrc/jDKOQkRy8pBhuKeRAAKQFBBxwVUYY5twXVxodV3nLd77f9ASQIAOw=="},29:function(e,t,a){e.exports=a(122)},35:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.8c93f9ae.chunk.js.map