(this.webpackJsonpblogstartreact=this.webpackJsonpblogstartreact||[]).push([[0],{12:function(e,t,n){e.exports=n(27)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(1),o=n.n(a),u=(n(17),n(18),n(5)),i=n(6),l=n(10),m=n(7),s=n(11);n(19);function p(e){return c.a.createElement("div",null,e.valeur)}n(20);function E(e){return c.a.createElement("div",{className:"btnIncr",onClick:e.clicked},e.txt)}var f=n(2),d=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={compteur:0},n.calcul=function(e){"plus1"===e&&n.setState((function(e){return{compteur:e.compteur+1}})),"moins1"===e&&n.setState((function(e){return{compteur:e.compteur-1}}))},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"cont"},c.a.createElement("div",{className:"blocConmpt"},c.a.createElement(p,{valeur:this.props.ctr})),c.a.createElement("div",{className:"contBtn"},c.a.createElement(E,{txt:"Increment",clicked:this.props.increment}),c.a.createElement(E,{txt:"Decrement",clicked:this.props.decrement})))}}]),t}(r.Component),v=Object(f.b)((function(e){return{ctr:e.compteur}}),(function(e){return{increment:function(){return e({type:"INCREMENT"})},decrement:function(){return e({type:"DECREMENT"})}}}))(d);var b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null))},h=n(9),N={compteur:0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===t.type?{compteur:e.compteur+1}:"DECREMENT"===t.type?{compteur:e.compteur-1}:e},j=Object(h.a)(y);o.a.render(c.a.createElement(f.a,{store:j},c.a.createElement(b,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4641f413.chunk.js.map