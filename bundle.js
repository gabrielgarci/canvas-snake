!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/canvas-snake/",o(o.s=1)}([function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(0);var n,r=document.getElementById("playground"),i=r.getContext("2d"),c={x:30,y:15},a=1/c.x*r.width,l=a/2,d=function(e,t,o,n){i.beginPath(),i.arc(e,t,n,0,2*Math.PI),i.fillStyle=o,i.fill()},u={right:{oposite:"left",vector:[1,0]},left:{oposite:"right",vector:[-1,0]},top:{oposite:"bottom",vector:[0,-1]},bottom:{oposite:"top",vector:[0,1]}},y=function(e){if("number"==typeof e)switch(e){case 37:n="left";break;case 38:n="top";break;case 39:n="right";break;case 40:n="bottom"}else n=e},s=function(e,t){var o,r,i={x:e.body[0].x+u[e.direction].vector[0],y:e.body[0].y+u[e.direction].vector[1]},a=(o=i,r={},Object.keys(c).forEach((function(e){o[e]===c[e]?r[e]=1:0===o[e]?r[e]=c[e]-1:r[e]=o[e]})),r);return a.isFood=!1,!e.body.some((function(e){return e.x===a.x&&e.y===a.y}))&&(a.x===t.coords.x&&a.y===t.coords.y&&(a.isFood=!0,document.getElementById("points").innerHTML=e.body.length-3,t.replace(e)),e.body[e.body.length-1].isFood?e.body[e.body.length-1].isFood=!1:e.body.splice(-1,1),e.body.unshift(a),n&&n!==e.direction&&function(e,t){t!==u[e.direction].oposite&&(e.direction=t)}(e,n),!0)},f={coords:{},replace:function(e){f.coords.x=Math.floor(Math.random()*c.x),f.coords.y=Math.floor(Math.random()*c.y),(e.body.some((function(e){return e.x===f.coords.x&&e.y===f.coords.y}))||0===f.coords.x||0===f.coords.y)&&f.replace(e)}},b=f;function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var h,g={},v=function(){document.getElementById("points").innerHTML=0,g.direction="right",g.body=[{x:15,y:8,isFood:!1},{x:14,y:8,isFood:!1},{x:13,y:8,isFood:!1},{x:12,y:8,isFood:!1}],g.isAlive=!0,y("right"),b.replace(g),h=setInterval((function(){g.isAlive=s(g,b),g.isAlive||function(){clearInterval(h);var e=m(g.body),t=0,o=setInterval((function(){g.body=t%2?e:[],t<7?t+=1:(clearInterval(o),document.getElementById("playground").style.opacity=.5,document.getElementById("restartBtn").style.display="block")}),175)}()}),175),window.onkeydown=function(e){return y(e.keyCode)}},x=function(e,t){switch(o=g.body.length-1,n=[g.body[o-1].x-g.body[o].x,g.body[o-1].y-g.body[o].y],r=Object.keys(u).map((function(e){return u[e]})),c=r.indexOf(r.find((function(e){return e.vector[0]===n[0]&&e.vector[1]===n[1]}))),Object.keys(u)[c]){case"right":i.moveTo(e+l,t+l),i.lineTo(e+l,t-l),i.lineTo(e-l,t-l+a/2);break;case"left":i.moveTo(e-l,t+l),i.lineTo(e-l,t-l),i.lineTo(e+l,t-l+a/2);break;case"top":i.moveTo(e-l,t-l),i.lineTo(e+l,t-l),i.lineTo(e-l+a/2,t+l);break;case"bottom":i.moveTo(e-l,t+l),i.lineTo(e+l,t+l),i.lineTo(e-l+a/2,t-l)}var o,n,r,c;i.closePath()},k=function(e,t){return d(e,t,"black",a/5)},w=function(e,t){var o=1.5*a,n=o/2;switch(i.fillRect(e-n,t-n,o,o),g.direction){case"right":k(e+o*(1/3),t+(.1*o-l)),k(e+o*(1/3),t-(.1*o-l));break;case"left":k(e-o*(1/3),t+(.1*o-l)),k(e-o*(1/3),t-(.1*o-l));break;case"top":k(e+(.1*o-l),t-o*(1/3)),k(e-(.1*o-l),t-o*(1/3));break;case"bottom":k(e+(.1*o-l),t+o*(1/3)),k(e-(.1*o-l),t+o*(1/3))}},T=function(e,t){i.fillRect(e-l,t-l,a,a)},I=function e(){var t,o;i.clearRect(0,0,r.width,r.height),g.body.forEach((function(e,t){var o=e.x/c.x*r.width,n=e.y/c.y*r.height,l=0===t||t%2?"rgb(0, 102, 0)":"rgb(204, 204, 36)";if(e.isFood&&0!==t)d(o,n,l,a/1.25);else{switch(i.beginPath(),i.fillStyle=l,t){case 0:w(o,n);break;case g.body.length-1:x(o,n);break;default:T(o,n)}i.fill()}})),t=b.coords.x/c.x*r.width,o=b.coords.y/c.y*r.height,d(t,o,"red",a/1.5),window.requestAnimationFrame(e)};v(),document.getElementById("restartBtn").onclick=function(){document.getElementById("restartBtn").style.display="none",document.getElementById("playground").style.opacity=1,v()},document.body.onload=I()}]);