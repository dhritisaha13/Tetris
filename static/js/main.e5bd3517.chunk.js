(this["webpackJsonptetris-game"]=this["webpackJsonptetris-game"]||[]).push([[0],{13:function(t,e,n){t.exports=n.p+"static/media/bg.2810fe6b.png"},14:function(t,e,n){t.exports=n(22)},19:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(9),c=n.n(a),i=(n(19),n(1)),u=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},l=function(t,e,n){for(var r=n.x,o=n.y,a=0;a<t.tetromino.length;a+=1)for(var c=0;c<t.tetromino[a].length;c+=1)if(0!==t.tetromino[a][c]&&(!e[a+t.pos.y+o]||!e[a+t.pos.y+o][c+t.pos.x+r]||"clear"!==e[a+t.pos.y+o][c+t.pos.x+r][1]))return!0;return!1},f=n(2),s=n(3);function d(){var t=Object(f.a)(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tborder: 4px solid #333;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tcolor: ",";\n\tbackground: #000;\n\tfont-family: Pixel, Arial, Helvetica, sans-serif;\n\tfont-size: 0.8rem;\n"]);return d=function(){return t},t}var p=s.a.div(d(),(function(t){return t.gameOver?"red":"#999"})),m=function(t){var e=t.gameOver,n=t.text;return o.a.createElement(p,{gameOver:e},n)};function b(){var t=Object(f.a)(["\n\twidth: auto;\n\tbackground: rgba(",", 0.8);\n\tborder: ",";\n\tborder-bottom-color: rgba(",", 0.1);\n\tborder-right-color: rgba(",", 1);\n\tborder-top-color: rgba(",", 1);\n\tborder-left-color: rgba(",", 0.3);\n"]);return b=function(){return t},t}var h=s.a.div(b(),(function(t){return t.color}),(function(t){return 0===t.type?"0px solid":"4px solid"}),(function(t){return t.color}),(function(t){return t.color}),(function(t){return t.color}),(function(t){return t.color})),v={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},g=function(){var t="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return v[t]},x=o.a.memo((function(t){var e=t.type;return o.a.createElement(h,{type:e,color:v[e].color},console.log("rerender cell"))}));function O(){var t=Object(f.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: repeat(\n\t\t",",\n\t\tcalc(25vw / ",")\n\t);\n\tgrid-template-columns: repeat(",", 1fr);\n\tgrid-gap: 1px;\n\tborder: 2px solid #333;\n\twidth: 100%;\n\tmax-width: 25vw;\n\tbackground: #111;\n"]);return O=function(){return t},t}var y=s.a.div(O(),(function(t){return t.height}),(function(t){return t.width}),(function(t){return t.width})),j=function(t){var e=t.stage;return o.a.createElement(y,{width:e[0].length,height:e.length},e.map((function(t){return t.map((function(t,e){return o.a.createElement(x,{key:e,type:t[0]})}))})))};function E(){var t=Object(f.a)(["\n\tbox-sizing: border-box;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tborder: none;\n\tcolor:white;\n\tbackground: #333;\n\tfont-family: Pixel, Arial, Helvetica, sans-serif;\n\tfont-size: 1rem;\n\toutline: none;\n\tcursor: pointer;\n"]);return E=function(){return t},t}var w=s.a.button(E()),S=function(t){var e=t.callback;return o.a.createElement(w,{onClick:e},"Start Game")},k=n(13),I=n.n(k);function J(){var t=Object(f.a)(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\tpadding: 40px;\n\tmargin: 0 auto;\n\tmax-width: 900px;\n\n\taside{\n\t\twidth: 100%;\n\t\tmax-width: 200px;\n\t\tdisplay: block;\n\t\tpadding: 0 20px;\n\t}\n\t\n"]);return J=function(){return t},t}function A(){var t=Object(f.a)(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: url(",") #000;\n\tbackground-size: cover;\n\toverflow: hidden;\n"]);return A=function(){return t},t}var L=s.a.div(A(),I.a),T=s.a.div(J()),Z=n(6),C=function(t,e){var n=Object(r.useState)(u()),o=Object(i.a)(n,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),s=f[0],d=f[1];return Object(r.useEffect)((function(){d(0);var n=function(n){var r=n.map((function(t){return t.map((function(t){return"clear"===t[1]?[0,"clear"]:t}))}));return t.tetromino.forEach((function(e,n){e.forEach((function(e,o){0!==e&&(r[n+t.pos.y][o+t.pos.x]=[e,"".concat(t.collided?"merged":"clear")])}))})),t.collided?(e(),function(t){return t.reduce((function(e,n){return-1===n.findIndex((function(t){return 0===t[0]}))?(d((function(t){return t+1})),e.unshift(new Array(t[0].length).fill([0,"clear"])),e):(e.push(n),e)}),[])}(r)):r};c((function(t){return n(t)}))}),[t.collided,t.pos.x,t.pos.y,t.tetromino,e]),[a,c,s]};var z=function(){var t=Object(r.useState)(null),e=Object(i.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(!1),f=Object(i.a)(c,2),s=f[0],d=f[1],p=function(){var t=Object(r.useState)({pos:{x:0,y:0},tetromino:v[0].shape,collided:!1}),e=Object(i.a)(t,2),n=e[0],o=e[1],a=function(t,e){var n=t.map((function(e,n){return t.map((function(t){return t[n]}))}));return e>0?n.map((function(t){return t.reverse()})):n.reverse()},c=Object(r.useCallback)((function(){o({pos:{x:4,y:0},tetromino:g().shape,collided:!1})}),[]);return[n,function(t){var e=t.x,n=t.y,r=t.collided;o((function(t){return Object(Z.a)(Object(Z.a)({},t),{},{pos:{x:t.pos.x+=e,y:t.pos.y+=n},collided:r})}))},c,function(t,e){var r=JSON.parse(JSON.stringify(n));r.tetromino=a(r.tetromino,e);for(var c=r.pos.x,i=1;l(r,t,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-e),void(r.pos.x=c);o(r)}]}(),b=Object(i.a)(p,4),h=b[0],x=b[1],O=b[2],y=b[3],E=C(h,O),w=Object(i.a)(E,3),k=w[0],I=w[1],J=function(t){var e=Object(r.useState)(0),n=Object(i.a)(e,2),o=n[0],a=n[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],m=d[1],b=[40,100,300,1200],h=Object(r.useCallback)((function(){t>0&&(a((function(e){return e+b[t-1]*(p+1)})),f((function(e){return e+t})))}),[p,b,t]);return Object(r.useEffect)((function(){h()}),[h,t,o]),[o,a,l,f,p,m]}(w[2]),A=Object(i.a)(J,6),z=A[0],G=A[1],M=A[2],N=A[3],R=A[4],W=A[5];console.log("re-render");var B=function(t){l(h,k,{x:t,y:0})||x({x:t,y:0})},D=function(){M>10*(R+1)&&(W((function(t){return t+1})),a(1e3/(R+1)+200)),l(h,k,{x:0,y:1})?(h.pos.y<1&&(console.log("GAME OVER!"),d(!0),a(null)),x({x:0,y:0,collided:!0})):x({x:0,y:1,collided:!1})};!function(t,e){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=t}),[t]),Object(r.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){clearInterval(t)}}}),[e])}((function(){D()}),n);var H=function(t){var e=t.keyCode;s||(37===e?B(-1):39===e?B(1):40===e?(a(null),D()):38===e&&y(k,1))};return o.a.createElement(L,{role:"button",tabIndex:"0",onKeyDown:function(t){return H(t)},onKeyUp:function(t){var e=t.keyCode;s||40===e&&a(1e3/(R+1)+200)}},o.a.createElement(T,null,o.a.createElement(j,{stage:k}),o.a.createElement("aside",null,s?o.a.createElement(m,{gameOver:s,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(m,{text:"Score: ".concat(z)}),o.a.createElement(m,{text:"Rows: ".concat(M)}),o.a.createElement(m,{text:"Level: ".concat(R)})),o.a.createElement(S,{callback:function(){I(u()),a(1e3),O(),G(0),W(0),N(0),d(!1)}}))))},G=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h2",null,o.a.createElement("center",null,"Welcome to Tetris Game!")),o.a.createElement("h3",null,o.a.createElement("center",null,"Created by: ",o.a.createElement("a",{href:"https://dhritisaha.netlify.app"},"Dhriti Saha"))),o.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e5bd3517.chunk.js.map