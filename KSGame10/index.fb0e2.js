window.__require=function t(e,o,n){function r(a,s){if(!o[a]){if(!e[a]){var c=a.split("/");if(c=c[c.length-1],!e[c]){var u="function"==typeof __require&&__require;if(!s&&u)return u(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var l=o[a]={exports:{}};e[a][0].call(l.exports,function(t){return r(e[a][1][t]||t)},l,l.exports,t,e,o,n)}return o[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<n.length;a++)r(n[a]);return r}({KSGame10:[function(t,e,o){"use strict";cc._RF.push(e,"4badf9fPMZAqoHhzg2/Zkuf","KSGame10");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(r,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function s(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,s)}c((n=n.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){var o,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return c([t,e])}}function c(i){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,u=c.ccclass,l=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.music=[],e.title0=null,e.title1=null,e.title2=null,e.title3=null,e.title4=null,e.Uboat=null,e.importlabel="",e.NumofAns=0,e}return r(e,t),e.prototype.onLoad=function(){var t=this;this.schedule(function(){return cc.audioEngine.play(t.music[1],!1,1)},3*Math.random()+3)},e.prototype.start=function(){console.log(this.Uboat),this.resData=window.KS.GetInfo(),this.currentData=this.resData.res[0],console.log(this.resData),this.updateTileShow()},e.prototype.onEnable=function(){},e.prototype.onDisable=function(){},e.prototype.inputImpot=function(t){console.log(t.target._name);var e=t.target._name;""===this.title3.string?this.title3.string=e:""===this.title4.string&&(this.title4.string=e),this.importlabel=this.importlabel+e},e.prototype.comfirm=function(){return a(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return this.importlabel!=this.currentData.result?[3,3]:(cc.log("ok"),this.NumofAns++,[4,this.moveUboat()]);case 1:return t.sent(),[4,window.KS.KSPlaySound(Math.random()>.5?1:2)];case 2:return t.sent(),this.nextRound(),this.cancel(),[3,5];case 3:return this.NumofAns=0,cc.log("not ok"),[4,window.KS.KSPlaySound(Math.random()>.5?3:4)];case 4:t.sent(),this.cancel(),t.label=5;case 5:return console.log("NumofAns:  "+this.NumofAns),[2]}})})},e.prototype.cancel=function(){this.importlabel="",this.title3.string="",this.title4.string=""},e.prototype.nextRound=function(){return a(this,void 0,void 0,function(){var t=this;return s(this,function(e){switch(e.label){case 0:return this.resData.res=this.resData.res.filter(function(e){return e!=t.currentData}),this.currentData=this.randomArray(this.resData.res),console.log(this.resData.res),0!=this.resData.res.length?[3,2]:[4,this.wait(3)];case 1:return e.sent(),this.close(),[3,3];case 2:this.updateTileShow(),this.initUboat(),e.label=3;case 3:return[2]}})})},e.prototype.close=function(){this.node.destroy(),window.KS.Close()},e.prototype.randomArray=function(t){return t[Math.floor(Math.random()*t.length)]},e.prototype.wait=function(t){return a(this,void 0,void 0,function(){return s(this,function(){return[2,new Promise(function(e){setTimeout(function(){e()},1e3*t)})]})})},e.prototype.update=function(){},e.prototype.catchNum=function(t){var e=t.match(/[^\xd7=]+/g);return e?{a1:e[0],a2:e[1],a3:e[2],a4:e[3]}:null},e.prototype.updateTileShow=function(){var t=this.catchNum(JSON.stringify(this.currentData.formula).slice(1,-1));console.log(t),this.title0.string="__"===t.a1?"":t.a1,this.title1.string="__"===t.a2?"":t.a2,this.title2.string="__"===t.a3?"":t.a3,this.title3.string="",this.title4.string=""},e.prototype.moveUboat=function(){var t=this;return new Promise(function(e){cc.audioEngine.play(t.music[0],!1,1),cc.tween(t.Uboat).to(2,{position:cc.v3(t.Uboat.x-1500,t.Uboat.y)},{easing:"sineInOut"}).call(function(){e()}).start()})},e.prototype.initUboat=function(){this.Uboat.setPosition(1300,this.Uboat.y),console.log(this.Uboat.position),cc.tween(this.Uboat).to(2,{position:cc.v3(-11.426,this.Uboat.y)},{easing:"sineInOut"}).start()},i([l([cc.AudioClip])],e.prototype,"music",void 0),i([l(cc.Label)],e.prototype,"title0",void 0),i([l(cc.Label)],e.prototype,"title1",void 0),i([l(cc.Label)],e.prototype,"title2",void 0),i([l(cc.Label)],e.prototype,"title3",void 0),i([l(cc.Label)],e.prototype,"title4",void 0),i([l(cc.Node)],e.prototype,"Uboat",void 0),i([u],e)}(cc.Component);o.default=p,cc._RF.pop()},{}]},{},["KSGame10"]);