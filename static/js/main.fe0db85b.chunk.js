(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(12),r=a.n(s),i=(a(18),a(19),a(0));function o(){return Object(i.jsx)("footer",{class:"page-footer",children:Object(i.jsx)("div",{class:"footer-copyright",children:Object(i.jsxs)("div",{class:"container",children:["\xa9 ",(new Date).getFullYear()," Khasanov K",Object(i.jsx)("a",{class:"grey-text text-lighten-4 right",href:"https://t.me/khasanoff_dev",children:"Telegram"})]})})})}var l=a(3),h=a(4),j=a(6),d=a(5),b=a(7),u=a(8),p=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={text:"",movies:[]},e.searchMovies=function(t){fetch("https://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search})}))},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(i.jsx)("nav",{children:Object(i.jsxs)("div",{className:"nav-wrapper container",children:[Object(i.jsxs)("a",{href:"/",className:"brand-logo",children:[Object(i.jsx)(b.a,{icon:u.c}),"Movie App"]}),Object(i.jsx)("ul",{className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",children:Object(i.jsx)(b.a,{icon:u.a})})})})]})})}}]),a}(c.a.Component),v=a(13);function O(e){var t=e.Title,a=e.Year,n=e.imdbID,c=e.Type,s=e.Poster;return Object(i.jsxs)("div",{className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(i.jsx)("img",{className:"activator",src:s})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[a,Object(i.jsx)("span",{className:"right",children:c})]})]})]},n)}function m(e){var t=e.movies,a=void 0===t?[]:t;return Object(i.jsx)("div",{className:"asa",children:a.length?a.map((function(e){return Object(i.jsx)(O,Object(v.a)({},e),e.imdbID)})):Object(i.jsx)("h3",{children:"NOT FOUND"})})}var f=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"Hacker",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{class:"input-field",children:[Object(i.jsx)("input",{placeholder:"Search",type:"text",className:"validate",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(i.jsxs)("button",{className:"btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:[Object(i.jsx)(b.a,{icon:u.b}),"Search"]})]}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{onChange:this.handleFilter,className:"with-gap",name:"group3",type:"radio","data-type":"all",checked:"all"===this.state.type}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{onChange:this.handleFilter,className:"with-gap",name:"group3",type:"radio","data-type":"movie",checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"Movies only"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{onChange:this.handleFilter,className:"with-gap",name:"group3",type:"radio","data-type":"series",checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"Series only"})]})]})]})}}]),a}(c.a.Component),x=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],loading:!0},e.searchMovies=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=".concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=hacker").then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container content",children:[Object(i.jsx)(f,{searchMovies:this.searchMovies}),this.state.loading?Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})}):Object(i.jsx)(m,{movies:this.state.movies})]})}}]),a}(c.a.Component);var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p,{}),Object(i.jsx)(x,{}),Object(i.jsx)(o,{})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fe0db85b.chunk.js.map