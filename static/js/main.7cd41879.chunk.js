(this["webpackJsonpapp-prueba"]=this["webpackJsonpapp-prueba"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=(a(12),a(3)),l=a(4),s=a(6),u=a(5),m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Striata"))},p=function(e){return r.a.createElement("img",{src:e.imgUrl,className:"imgReact"})},d=function(e){return r.a.createElement("p",null,e.texto)},f=function(e){var t="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",a="React crea componentes , que son elementos HTML personalizados y reutilizables, para crear interfaces de usuario de manera r\xe1pida y eficiente. Adem\xe1s optimiza la forma en que se almacenan y manejan los datos.";return r.a.createElement("section",{className:"section"},r.a.createElement("p",null,e.date),r.a.createElement("p",null,"React, Es una librer\xeda de Javascript para crear interfaces de usuario (UI) en el front-end."),r.a.createElement(d,{texto:a}),r.a.createElement(p,{imgUrl:t}))},h=function(){return r.a.createElement("footer",{className:"foo"},r.a.createElement("p",null,"Todos los derechos reservados"))},v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tictac()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tictac",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(f,{date:this.state.date.toLocaleTimeString()}),r.a.createElement(h,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.7cd41879.chunk.js.map