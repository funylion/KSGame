window.__require=function t(e,n,r){function i(a,l){if(!n[a]){if(!e[a]){var s=a.split("/");if(s=s[s.length-1],!e[s]){var c="function"==typeof __require&&__require;if(!l&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){return i(e[a][1][t]||t)},u,u.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof __require&&__require,a=0;a<r.length;a++)i(r[a]);return i}({KSGame06:[function(t,e,n){"use strict";cc._RF.push(e,"8c1d506NHRMNa6RrKInY8z3","KSGame06");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function l(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,l)}s((r=r.apply(t,e||[])).next())})},l=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(l){o=[6,l],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,c=s.ccclass,u=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.title00=null,e.title01=null,e.title1=null,e.title20=null,e.title21=null,e.label=null,e.importlabel=null,e.labelTips=null,e.nullTitle=null,e}return i(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){this.resData=window.KS.GetInfo(),this.currentData=this.resData.res[0],console.log(this.resData),this.label.string="\u4f20\u5165\u6570\u636e\uff1a"+JSON.stringify(this.resData.res[0].formula),this.updateTileShow()},e.prototype.onEnable=function(){},e.prototype.onDisable=function(){},e.prototype.inputImpot=function(t){var e=t.target._name;""===this.title20.string?this.title20.string=e:""===this.title21.string&&(this.title21.string=e),this.importlabel.string=this.importlabel.string+e},e.prototype.comfirm=function(){return a(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return this.importlabel.string!=this.currentData.result?[3,2]:(cc.log("ok"),this.labelTips.string="\u771f\u68d2\uff01\u4f60\u771f\u5389\u5bb3\uff01",this.labelTips.node.opacity=255,[4,window.KS.KSPlaySound(Math.random()>.5?1:2)]);case 1:return t.sent(),this.nextRound(),[3,4];case 2:return this.labelTips.string="\u4e0d\u5bf9\u54e6\uff01\u518d\u627e\u627e\u5427\uff01",this.labelTips.node.opacity=255,cc.log("not ok"),[4,window.KS.KSPlaySound(Math.random()>.5?3:4)];case 3:t.sent(),this.cancel(),t.label=4;case 4:return[2]}})})},e.prototype.cancel=function(){this.importlabel.string="",this.title20.string="",this.title21.string=""},e.prototype.nextRound=function(){return a(this,void 0,void 0,function(){var t=this;return l(this,function(e){switch(e.label){case 0:return this.resData.res=this.resData.res.filter(function(e){return e!=t.currentData}),this.currentData=this.randomArray(this.resData.res),console.log(this.resData.res),0!=this.resData.res.length?[3,2]:(this.label.string="\u7ed3\u675f\u4e86",[4,this.wait(3)]);case 1:return e.sent(),this.close(),[3,3];case 2:this.label.string="\u4f20\u5165\u6570\u636e\uff1a"+JSON.stringify(this.currentData),this.updateTileShow(),e.label=3;case 3:return[2]}})})},e.prototype.close=function(){this.node.destroy(),window.KS.Close()},e.prototype.randomArray=function(t){return t[Math.floor(Math.random()*t.length)]},e.prototype.wait=function(t){return a(this,void 0,void 0,function(){return l(this,function(){return[2,new Promise(function(e){setTimeout(function(){e()},1e3*t)})]})})},e.prototype.update=function(t){this.labelTips.node.opacity-=100*t,this.labelTips.node.opacity<0&&(this.labelTips.node.opacity=0)},e.prototype.catchNum=function(t){var e=t.match(/[^+=]+/g);return e?{a1:e[0],a2:e[1],a3:e[2]}:null},e.prototype.updateTileShow=function(){var t=this.catchNum(JSON.stringify(this.currentData.formula).slice(1,-1));this.title00.string="__"===t.a1?"":t.a1[0],this.title01.string="__"===t.a1?"":t.a1[1],this.title1.string="__"===t.a2?"":t.a2,this.title20.string="__"===t.a3?"":t.a3[0],this.title21.string="__"===t.a3?"":t.a3[1]},o([u(cc.Label)],e.prototype,"title00",void 0),o([u(cc.Label)],e.prototype,"title01",void 0),o([u(cc.Label)],e.prototype,"title1",void 0),o([u(cc.Label)],e.prototype,"title20",void 0),o([u(cc.Label)],e.prototype,"title21",void 0),o([u(cc.Label)],e.prototype,"label",void 0),o([u(cc.Label)],e.prototype,"importlabel",void 0),o([u(cc.Label)],e.prototype,"labelTips",void 0),o([c],e)}(cc.Component);n.default=p,cc._RF.pop()},{}]},{},["KSGame06"]);