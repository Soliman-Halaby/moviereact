(this.webpackJsonpmoviereact=this.webpackJsonpmoviereact||[]).push([[0],{111:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(37),c=s.n(n),r=(s(44),s(12)),o=s(2),l=s(4),j=s(5),m=s(7),d=s(6),h=(s.p,s.p+"static/media/arrowLeft.af031bd7.svg"),u=(s(45),s.p+"static/media/star-half-alt-solid.8f59757b.svg"),b=s.p+"static/media/star-regular.aa2a094b.svg",p=s.p+"static/media/star-solid.cbae9faf.svg",v=s.p+"static/media/star-of-life-solid.0572090b.svg",O=s(0),f=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=Math.round(this.props.rate/2*2)/2;this.props;return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)("div",{className:this.props.position,children:this.starRate(e)})})}},{key:"starRate",value:function(e){var t=[],s=e;if(0==s)for(var i=0;i<5;i++)t.push(Object(O.jsx)("img",{className:"staroflife",src:v}));else for(var a=0;a<5;a++)s>=1?(t.push(Object(O.jsx)("img",{className:"star",src:p})),s-=1):.5==s?(s=0,t.push(Object(O.jsx)("img",{className:"star",src:u}))):t.push(Object(O.jsx)("img",{className:"star",src:b}));return t}}]),s}(a.a.Component),x=(s(47),s.p+"static/media/externalLinkImg.6235632c.svg"),g=s(39),N=(s(48),function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={propsId:e.props.movieId.movieId,isLoading:!0,cast:{},errors:null,movieDetails:{cast:[]}},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.fetchCast()}},{key:"render",value:function(){return this.state.isLoading?Object(O.jsx)("p",{children:"Wait, I'm Loading !"}):(console.log(this.state.movieDetails),this.RenderImg())}},{key:"RenderImg",value:function(){return this.state.movieDetails.cast.map((function(e,t){if(t<5)return console.log(e),Object(O.jsx)(a.a.Fragment,{children:Object(O.jsxs)("div",{className:"castingContainer",children:[Object(O.jsx)("img",{className:"castingImg",src:"https://image.tmdb.org/t/p/original/"+e.profile_path}),Object(O.jsx)("span",{className:"actorName",children:e.name.split(" ")[0]}),Object(O.jsx)("span",{className:"foreName",children:e.name.split(" ")[1]})]})})}))}},{key:"fetchCast",value:function(){var e=this,t=this.state,s=t.isLoading;t.propsId,t.cast;if(s){var i="https://api.themoviedb.org/3/movie/"+this.props.movieId+"/credits";fetch(i,{method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(t){e.setState({movieDetails:t,isLoading:!1});for(var s=0;s<5;s++)fetch("https://api.themoviedb.org/3/person/"+t.cast[s].id,{method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(t){var s=t,i=Object(g.a)(e.state.movieDetails.cast);i.map((function(e,t){e.id==s.id&&(e.profile_path=s.profile_path)})),e.setState({movieDetails:{cast:i}})}))})).catch((function(t){e.setState({errors:t,isLoading:!1})}))}}}]),s}(a.a.Component));function y(e){return Object(O.jsxs)("div",{className:"filmDisplay",children:[Object(O.jsx)(r.b,{to:"/",className:"headerTabs",children:Object(O.jsx)("img",{className:"arrowLeft",alt:"Arrow Left",src:h})}),Object(O.jsx)("div",{className:"externalLink",children:Object(O.jsx)("a",{href:e.urlSrc,target:"_blank",children:Object(O.jsx)("img",{src:x})})}),Object(O.jsx)("img",{className:"filmImage",alt:"Film Image",src:e.src}),Object(O.jsxs)("div",{className:"filmInformation",children:[Object(O.jsx)("span",{className:"pageFilmTitle",children:e.title}),Object(O.jsx)("div",{className:"styleRate",children:Object(O.jsx)("span",{className:"pageFilmStyle",children:e.genres})}),Object(O.jsx)(f,{position:"ratingStart",rate:e.voteAve}),Object(O.jsxs)("div",{className:"moreInfo",children:[Object(O.jsx)("span",{className:"pageFilmDate",children:e.releasedYear}),Object(O.jsxs)("span",{className:"pageFilmDuration",children:[e.runtime," minutes"]})]}),Object(O.jsx)("span",{className:"pageFilmDescription",children:e.overview}),Object(O.jsx)("span",{className:"castingTitle",children:"Casting"}),Object(O.jsxs)("div",{className:"castingWrap",children:[console.log(e.movieId),Object(O.jsx)(N,{movieId:e.movieId})]})]})]})}s(54);var I=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,propsId:e.props.match.params.id,imgPath:"",runtime:0,voteAve:0,releasedYear:6666,overview:"",genres:"",urlSrc:"",movieId:0},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"render",value:function(){if(this.state.isLoading)return Object(O.jsx)("p",{children:"Loading..."});console.log(this.state.isLoading);this.state.propsId;return Object(O.jsx)(a.a.Fragment,{children:this.modifyDisplay()})}},{key:"fetchMovies",value:function(){var e=this,t=this.state,s=t.isLoading,i=t.propsId;if(s){fetch("https://api.themoviedb.org/3/movie/"+i,{methods:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(t){var s=t.genres[0];e.setState({title:t.original_title,imgPath:"https://image.tmdb.org/t/p/original/"+t.backdrop_path,runtime:t.runtime,voteAve:t.vote_average,releasedYear:t.release_date.substring(0,4),overview:t.overview,genres:s.name,urlSrc:t.homepage,movieId:t.id,isLoading:!1})})).catch((function(t){e.setState({errors:t,isLoading:!1})}))}}},{key:"modifyDisplay",value:function(){var e=this.state,t=e.title,s=e.imgPath,i=e.runtime,a=e.voteAve,n=e.releasedYear,c=e.overview,r=e.genres,o=e.urlSrc,l=e.movieId;return Object(O.jsx)(y,{src:s,title:t,runtime:i,voteAve:a,releasedYear:n,overview:c,genres:r,urlSrc:o,movieId:l})}}]),s}(a.a.Component),M=(s(26),s.p+"static/media/logo.a6057e0e.svg"),T=s(24),S=s.p+"static/media/loupe.f8d0b959.svg",C=s(19),J=s.n(C);s(28),s(88);function L(e){return Object(O.jsx)("div",{className:"videoTitleContainer",children:Object(O.jsxs)("div",{className:"filmInfo",children:[Object(O.jsx)("img",{draggable:"false",alt:e.alt,className:"imageFilm",src:e.src}),Object(O.jsxs)("div",{class:"infos center",children:[Object(O.jsx)(r.b,{to:"/film/"+e.movieId,className:"underlineNone",children:Object(O.jsx)("span",{className:"filmTitle center",children:e.filmTitle})}),Object(O.jsxs)("div",{class:"subcontainer",children:[Object(O.jsx)("span",{className:"filmStyle center",children:e.filmStyle}),Object(O.jsx)(f,{position:"ratingcenter",rate:e.filmGrade}),Object(O.jsxs)("span",{className:"rateText",children:[Object(O.jsx)("span",{children:e.filmGrade}),Object(O.jsx)("span",{children:"/10"})]})]})]})]})})}var z=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,lastString:"",movies:[],tabLen:0,errors:null},e}return Object(j.a)(s,[{key:"componentDidUpdate",value:function(){this.state.lastString!=this.props.movieName&&void 0!=typeof this.props.movieName&&this.fetchSearch(this.props.movieName)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.lastString,i=(e.movies,[]);return t||s!=this.props.movieName?Object(O.jsx)("p",{children:"Wait, I'm Loading !"}):(this.modifyCarousel(i),Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)(J.a,{mouseTracking:!0,items:i,responsive:{0:{items:1},500:{items:2},700:{items:3},900:{items:4},1100:{items:5},1300:{items:6},1500:{items:7},1800:{items:8},2e3:{items:9},2200:{items:10}},disableButtonsControls:!0,disableDotsControls:!0})}))}},{key:"fetchSearch",value:function(e){var t=this;void 0!=typeof e&&""!=e&&fetch("https://api.themoviedb.org/3/search/movie?&query=".concat(e),{methods:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(s){t.setState({movies:s.results,tabLen:s.results.length,lastString:e,isLoading:!1})})).catch((function(e){t.setState({errors:e,isLoading:!1})}))}},{key:"modifyCarousel",value:function(e){for(var t=function(e){return e.preventDefault()},s=this.state.movies,i=0;i<10;i++){var a=s[i],n=a.original_title,c="https://image.tmdb.org/t/p/original/"+a.poster_path,r=a.vote_average,o=a.id;e.push(Object(O.jsx)(L,{onDragStart:t,src:c,alt:n,filmTitle:n,filmStyle:"Action",filmGrade:r,onTen:"/10",movieId:o}))}}}]),s}(a.a.Component),D=(s(89),function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).changeSearchStatement=function(e){i.setState({used:!0,search:e.target.value.replace(" ","+")})},i.state={search:"",formatedString:"",used:!1},i}return Object(j.a)(s,[{key:"render",value:function(){var e;return this.state.used?Object(O.jsx)(a.a.Fragment,{children:Object(O.jsxs)("div",{className:"inputContainer",children:[Object(O.jsx)("img",{className:"iconLoupe",src:S,alt:"loupe"}),Object(O.jsxs)("div",{className:"form__group",children:[Object(O.jsx)("input",(e={type:"text",class:"form__field",placeholder:"Name",id:"name",name:"search"},Object(T.a)(e,"type","text"),Object(T.a)(e,"onChange",this.changeSearchStatement),e)),Object(O.jsx)(z,{movieName:this.state.search})]})]})}):Object(O.jsx)(a.a.Fragment,{children:Object(O.jsxs)("div",{className:"inputContainer",children:[Object(O.jsx)("img",{className:"iconLoupe",src:S,alt:"loupe"}),Object(O.jsx)("div",{className:"form__group",children:Object(O.jsx)("input",{type:"text",class:"form__field",placeholder:"Name",id:"name",name:"search",onChange:this.changeSearchStatement})})]})})}}]),s}(a.a.Component));var k=function(e){return Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("div",{className:"headerContainer",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)(r.b,{to:"/",children:Object(O.jsx)("img",{className:"logoImg",src:M,alt:"test"})})}),Object(O.jsx)("div",{className:"searchBar",children:Object(O.jsx)(D,{})})]})})};s(90);var Z=function(){return Object(O.jsx)("div",{className:"footerContainer",scroll:"no",children:Object(O.jsx)("div",{className:"footerText",children:Object(O.jsxs)("p",{className:"copyText",children:[" ",Object(O.jsx)("strong",{children:"Copyright"})," \xa92020 Projet React | Soliman .A | Robin .B | Chris .F | Valentin .H | Patxi .M | Gr\xe9goire .R |"]})})})},W=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[],tabLen:0,errors:null},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"render",value:function(){var e=[];return this.state.isLoading?Object(O.jsx)("p",{children:"Wait, I'm Loading !"}):(this.modifyCarousel(e),Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)(J.a,{mouseTracking:!0,items:e,responsive:{0:{items:1},340:{items:1},350:{items:1.7},420:{items:1.9},500:{items:1.9},700:{items:3},900:{items:4},1100:{items:5},1300:{items:6},1500:{items:7},1800:{items:8},2e3:{items:9},2200:{items:10}},disableButtonsControls:!0,disableDotsControls:!0})}))}},{key:"fetchMovies",value:function(){var e=this;if(this.state.isLoading){var t="https://api.themoviedb.org/3/movie/"+this.props.sortBy;fetch(t,{methods:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results,tabLen:t.results.length,isLoading:!1})})).catch((function(t){e.setState({errors:t,isLoading:!1})}))}}},{key:"modifyCarousel",value:function(e){for(var t=function(e){return e.preventDefault()},s=this.state.movies,i=0;i<10;i++){var a=s[i],n=a.original_title,c="https://image.tmdb.org/t/p/original/"+a.poster_path,r=a.vote_average,o=a.id;e.push(Object(O.jsx)(L,{onDragStart:t,src:c,alt:n,filmTitle:n,filmStyle:"Action",filmGrade:r,onTen:"/10",movieId:o}))}}}]),s}(a.a.Component);var G=function(e){return Object(O.jsx)("div",{className:"choseType",children:Object(O.jsxs)("div",{className:"elementType",children:[Object(O.jsx)("button",{class:"element select",children:Object(O.jsx)("span",{children:"Action"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Aventure"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Animation"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Com\xe9die Musicale"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Crime"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Documentaire"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Drame"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Famille"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Fantastique"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Film TV"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Guerre"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Horreur"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Myst\xe9rieux"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Populaire"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Histoire"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Romantique"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Science Fiction"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Thriller"})}),Object(O.jsx)("button",{class:"element",children:Object(O.jsx)("span",{children:"Western"})})]})})};s(91),s(92),a.a.Component,s(111);function w(){return Object(O.jsxs)("div",{className:"containerHome",children:[Object(O.jsx)(k,{}),Object(O.jsx)(G,{}),Object(O.jsxs)("div",{className:"filmPart",children:[Object(O.jsx)("span",{className:"titleCategorie",children:"Nouveaut\xe9"}),Object(O.jsx)(W,{sortBy:"upcoming"}),Object(O.jsx)("div",{className:"videoWrapper"})]}),Object(O.jsxs)("div",{className:"filmPart",children:[Object(O.jsx)("span",{className:"titleCategorie",children:"Top 10"}),Object(O.jsx)("div",{className:"videoWrapper",children:Object(O.jsx)(W,{sortBy:"top_rated"})})]}),Object(O.jsxs)("div",{className:"filmPart",children:[Object(O.jsx)("span",{className:"titleCategorie",children:"Populaire"}),Object(O.jsx)("div",{className:"videoWrapper",children:Object(O.jsx)(W,{sortBy:"popular"})})]}),Object(O.jsx)(Z,{})]})}function Y(e){Object(o.f)();return Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/film/:id",component:I,exact:!0}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:w})]})}s(112);var F=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(Y,{})})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,114)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))};c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),A()},26:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},54:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){}},[[113,1,2]]]);
//# sourceMappingURL=main.f5f073b5.chunk.js.map