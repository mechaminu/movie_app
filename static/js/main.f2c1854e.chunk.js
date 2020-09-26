(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{37:function(e,t,a){e.exports=a(70)},59:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),i=a.n(o),l=a(8),c=a(2),s=a(10),m=a.n(s),u=a(19),v=a(12),d=a(13),p=a(17),g=a(16),E=a(35),f=a.n(E);a(59);var h=function(e){var t=e.title,a=e.year,n=e.image,o=e.genre,i=e.summary,c=e.rating;return r.a.createElement(l.b,{to:{pathname:"/movie_detail",state:{movie:e}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{className:"movie_image",src:n,alt:t,title:t}),r.a.createElement("div",{className:"movie_info"},r.a.createElement("div",{className:"movie_title"},t),r.a.createElement("div",{className:"movie_year"},a),r.a.createElement("div",{className:"movie_genre"},r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("div",{className:"movie_rating"},function(e){for(var t="",a=Math.round(e/10*5);a>0;a--)t+="\u2605";return(t+="\u2606\u2606\u2606\u2606\u2606").slice(0,5)+" ("+e+")"}(c))),r.a.createElement("div",{className:"movie_summary"},i.length>200?i.slice(0,200)+"...":i)))},y=(a(64),a(14)),N=a(15),b=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={count:2,isLoading:!0,movies:[]},e.getMovies=function(){var t=Object(u.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(u.a)(m.a.mark((function t(n){var r,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a+" \ud398\uc774\uc9c0 \uc601\ud654\ubaa9\ub85d \ub85c\ub529..."),e.setState({isLoading:!0}),t.next=4,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page="+a);case 4:r=t.sent,o=r.data.data.movies,o=e.state.movies.concat(o),e.setState({isLoading:!1,movies:o}),n();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("rendered"),this.getMovies(1),window.addEventListener("scroll",(function(){var t=document.documentElement.scrollTop,a=document.getElementsByClassName("movies")[0].scrollHeight;t+window.innerHeight>=a&&(e.state.isLoading||(console.log("\uc2a4\ud06c\ub864\uc774 \ub05d\uc5d0 \ub3c4\ub2ec\ud558\uc600\uc73c\ubbc0\ub85c \uc601\ud654\ubaa9\ub85d \ucd94\uac00 \uc2e4\uc2dc"),e.getMovies(e.state.count).then((function(){e.setState((function(e){return{count:e.count+1}}))}))))}))}},{key:"componentDidUpdate",value:function(){console.log("updated")}},{key:"componentWillUnmount",value:function(){console.log("Goodbye, cruel world...!")}},{key:"render",value:function(){return console.log("rendering"),r.a.createElement("div",{className:"container"},this.state.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_icon"},r.a.createElement(y.a,{icon:N.b,size:"5x",color:"white"})),r.a.createElement("span",{className:"loader_text"},"Loading...")):null,r.a.createElement("div",{className:"movies"},this.state.movies.map((function(e){return r.a.createElement(h,{key:e.id,title:e.title_english,year:e.year,image:e.medium_cover_image,rating:e.rating,genre:e.genres,summary:e.summary})}))))}}]),a}(r.a.Component);a(67);var _=function(e){return console.log(e),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"aboutWrapper"},r.a.createElement("div",{className:"about"},r.a.createElement("div",null,r.a.createElement("h1",null,"Simple infinite list of movies"),r.a.createElement("h3",null,"Created by Minwoo Lee"),r.a.createElement("h3",null,"Powered by React.js"),r.a.createElement("h3",null,"API from yts ",r.a.createElement("a",{style:{fontSize:"0.7em"},href:"https://yts-proxy.now.sh/api"},"(https://yts-proxy.now.sh/api)"))),r.a.createElement("div",{style:{marginTop:50}},r.a.createElement("a",{href:"https://github.com/minuuoo97/movie_app"},"https://github.com/minuuoo97/movie_app")),r.a.createElement("div",{style:{fontSize:"0.7em",marginTop:50,color:"gray"}},r.a.createElement("p",null,"\u201cThe length of a film should be directly related to the endurance of the human bladder.\u201d"),r.a.createElement("span",null,"- Alfred Hitchcock -")))))},w=(a(68),function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=e.props.location;if(void 0===t.state)return null;var a=t.state.movie,n=a.title,o=a.year,i=a.image,l=a.genre,c=a.summary,s=a.rating;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"movieDetail"},r.a.createElement("img",{className:"detail_image",src:i,alt:n,title:n}),r.a.createElement("div",{className:"detail_info"},r.a.createElement("div",{className:"detail_title"},n),r.a.createElement("div",{className:"detail_year"},o),r.a.createElement("div",{className:"detail_genre"},r.a.createElement("ul",null,l.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("div",{className:"detail_rating"},s),r.a.createElement("div",{className:"detail_summary"},c))))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(void 0===t.state),void 0===t.state&&a.push("/")}}]),a}(r.a.Component));a(69);var k=function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement(l.b,{to:"/"},r.a.createElement("div",{className:"logo_area"},r.a.createElement(y.a,{className:"logo",icon:N.a,size:"3x",color:"gray"}),r.a.createElement("span",{className:"logoText"},"CinemaList"))),r.a.createElement("div",{className:"menu_area"},r.a.createElement(l.b,{to:"/about"},"About")))};var j=function(){return r.a.createElement(l.a,null,r.a.createElement(k,null),r.a.createElement(c.a,{path:"/",exact:!0,component:b}),r.a.createElement(c.a,{path:"/about",component:_}),r.a.createElement(c.a,{path:"/movie_detail",component:w}))};i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f2c1854e.chunk.js.map