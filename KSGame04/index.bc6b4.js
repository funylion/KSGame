window.__require=function t(e,n,i){function r(l,a){if(!n[l]){if(!e[l]){var s=l.split("/");if(s=s[s.length-1],!e[s]){var c="function"==typeof __require&&__require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+l+"'")}l=s}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){return r(e[l][1][t]||t)},u,u.exports,t,e,n,i)}return n[l].exports}for(var o="function"==typeof __require&&__require,l=0;l<i.length;l++)r(i[l]);return r}({KSGmae04:[function(t,e,n){"use strict";cc._RF.push(e,"de6c7C9XwNCybOumr20EPMO","KSGmae04");var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,l=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},l=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function l(t){try{s(i.next(t))}catch(e){o(e)}}function a(t){try{s(i.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(l,a)}s((i=i.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var n,i,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,i=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=e.call(t,l)}catch(a){o=[6,a],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,c=s.ccclass,u=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.title00=null,e.title01=null,e.title1=null,e.title20=null,e.title21=null,e.label=null,e.importlabel=null,e.labelTips=null,e}return r(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){this.resData=window.KS.GetInfo(),this.currentData=this.resData.res[0],console.log(this.resData),this.label.string="\u4f20\u5165\u6570\u636e\uff1a"+JSON.stringify(this.resData.res[0].formula),this.updateTileShow()},e.prototype.onEnable=function(){},e.prototype.onDisable=function(){},e.prototype.inputImpot=function(t){console.log(t.target._name);var e=t.target._name;""===this.title00.string||this.title00===this.nullTitle?(this.title00.string=this.title00.string+e,this.nullTitle=this.title00,console.log(this.title00.string)):""!==this.title1.string&&this.title1!==this.nullTitle||(this.title1.string=this.title1.string+e,this.nullTitle=this.title1)},e.prototype.comfirm=function(){return l(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return this.nullTitle.string!=this.currentData.result?[3,2]:(cc.log("ok"),this.labelTips.string="\u771f\u68d2\uff01\u4f60\u771f\u5389\u5bb3\uff01",this.labelTips.node.opacity=255,[4,window.KS.KSPlaySound(Math.random()>.5?1:2)]);case 1:return t.sent(),this.nextRound(),[3,4];case 2:return this.labelTips.string="\u4e0d\u5bf9\u54e6\uff01\u518d\u627e\u627e\u5427\uff01",this.labelTips.node.opacity=255,cc.log("not ok"),[4,window.KS.KSPlaySound(Math.random()>.5?3:4)];case 3:t.sent(),this.cancel(),t.label=4;case 4:return[2]}})})},e.prototype.cancel=function(){this.nullTitle.string=""},e.prototype.nextRound=function(){return l(this,void 0,void 0,function(){var t=this;return a(this,function(e){switch(e.label){case 0:return this.resData.res=this.resData.res.filter(function(e){return e!=t.currentData}),this.currentData=this.randomArray(this.resData.res),console.log(this.resData.res),0!=this.resData.res.length?[3,2]:(this.label.string="\u7ed3\u675f\u4e86",[4,this.wait(3)]);case 1:return e.sent(),this.close(),[3,3];case 2:this.label.string="\u4f20\u5165\u6570\u636e\uff1a"+JSON.stringify(this.currentData),this.updateTileShow(),e.label=3;case 3:return[2]}})})},e.prototype.close=function(){this.node.destroy(),window.KS.Close()},e.prototype.randomArray=function(t){return t[Math.floor(Math.random()*t.length)]},e.prototype.wait=function(t){return l(this,void 0,void 0,function(){return a(this,function(){return[2,new Promise(function(e){setTimeout(function(){e()},1e3*t)})]})})},e.prototype.update=function(t){this.labelTips.node.opacity-=100*t,this.labelTips.node.opacity<0&&(this.labelTips.node.opacity=0)},e.prototype.catchNum=function(t){var e=t.match(/[^+=]+/g);return e?{a1:e[0],a2:e[1],a3:e[2]}:null},e.prototype.updateTileShow=function(){var t=this.catchNum(JSON.stringify(this.currentData.formula).slice(1,-1));console.log("parsedFormula.a1: "+t.a1[0]),this.title00.string="__"===t.a1?"":t.a1[0],this.title01.string="__"===t.a1?"":t.a1[1],this.title1.string="__"===t.a2?"":t.a2,this.title20.string="__"===t.a3?"":t.a3[0],this.title21.string="__"===t.a3?"":t.a3[1]},o([u(cc.Label)],e.prototype,"title00",void 0),o([u(cc.Label)],e.prototype,"title01",void 0),o([u(cc.Label)],e.prototype,"title1",void 0),o([u(cc.Label)],e.prototype,"title20",void 0),o([u(cc.Label)],e.prototype,"title21",void 0),o([u(cc.Label)],e.prototype,"label",void 0),o([u(cc.Label)],e.prototype,"importlabel",void 0),o([u(cc.Label)],e.prototype,"labelTips",void 0),o([c],e)}(cc.Component);n.default=p,cc._RF.pop()},{}]},{},["KSGmae04"]);