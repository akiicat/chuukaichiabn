webpackJsonp([1],{"1uuo":function(e,t){},IJwD:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),l=i("RRo+"),a=i.n(l),n={name:"Player",data:function(){return{episode:1,seconds:0,duration:0,base:"https://storage.googleapis.com/chuukaichiban",type:"video/mp4",timestamps:["22:05","22:05","22:06","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05","22:05"],timestamps_sec:[],is_playing:!0,is_mute:!1,is_fullscreen:!1,volume:.5,sliderStyle:{width:"100px"},processStyle:{"background-color":"white"},bgStyle:{"background-color":"rgba(255,255,255,.3)"}}},computed:{episode_string:function(){return this.episode>=0&&this.episode<10?"0"+this.episode:""+this.episode},src:function(){return this.base+"/v1/"+this.episode_string+"/index.mp4"},player:function(){return document.getElementById("player")},volume_float:function(){return"string"==typeof this.volume?parseFloat(this.volume):this.volume},current_percentage:function(){var e=Math.round(1e4*this.seconds/this.duration);return a()(e)?e/100:"--.--"}},methods:{plus_episode:function(){this.episode++,this.episode>this.episode_length&&(this.episode,this.episode_length)},ntp:function(){this.timestamps_sec=this.timestamps.map(function(e){var t=e.split(":");return 60*+t[0]+ +t[1]});for(var e=this.timestamps_sec.reduce(function(e,t){return e+t}),t=Math.round(Date.now()/1e3)%e,i=1;t>this.timestamps_sec[i-1];)t-=this.timestamps_sec[i-1],i+=1;this.episode=i,this.seconds=t,console.log("episode: "+i),console.log("seconds: "+t)},player_play:function(){this.player.play(),this.is_playing=!0},player_pause:function(){this.player.pause(),this.is_playing=!1},player_toggle:function(){console.log("HI")(this.is_playing)?this.player_pause():this.player_play()},player_mute:function(){this.player.volume=0,this.$cookie.set("is_mute","true"),this.is_mute=!0},player_unmute:function(){this.player.volume=this.volume,this.$cookie.set("is_mute","false"),this.is_mute=!1},on_volume_change:function(e){this.$cookie.set("volume",e)},enter_fullscreen:function(){this.player.webkitEnterFullscreen()},exit_fullscreen:function(){this.player.webkitExitFullscreen()}},mounted:function(){var e=this;this.is_mute=this.$cookie.get("is_mute")||!1,this.volume=this.$cookie.get("volume")||.5,this.ntp(),this.player.src=this.src,this.player.currentTime=this.seconds,this.player.play(),this.player.onended=function(){e.plus_episode(),e.player.src=e.src,e.player.play()},setInterval(function(){e.seconds=e.player.currentTime,e.duration=e.player.duration},1e3);var t=document.querySelector(".video-container");console.log(t),t.onkeypress=function(t){console.log("HI"),0!=t.keyCode&&32!=t.keyCode||e.player_toggle()}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"video-container"},[this.$el?i("div",{staticClass:"player-header"},[i("span",[e._v("\n      第 "+e._s(this.episode_string)+" 集 -- \n      "+e._s(this.current_percentage)+" %\n    ")])]):e._e(),e._v(" "),i("video",{attrs:{id:"player"}},[i("source",{attrs:{src:e.src,type:e.type}}),e._v("\n    Your browser does not support HTML5 video.\n  ")]),e._v(" "),i("div",{staticClass:"player-nav"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!e.is_playing,expression:"!is_playing"}],on:{click:e.player_play}},[i("play-icon",{attrs:{fillColor:"white"}})],1),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.is_playing,expression:"is_playing"}],on:{click:e.player_pause}},[i("pause-icon",{attrs:{fillColor:"white"}})],1),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.is_mute&&e.volume_float>=.66,expression:"!is_mute && volume_float >= 0.66"}],on:{click:e.player_mute}},[i("volume-high",{attrs:{fillColor:"white"}})],1),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.is_mute&&e.volume_float<.66&&e.volume_float>=.33,expression:"!is_mute && volume_float <  0.66 && volume_float >= 0.33"}],on:{click:e.player_mute}},[i("volume-medium",{attrs:{fillColor:"white"}})],1),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.is_mute&&e.volume_float<.33&&e.volume_float>0,expression:"!is_mute && volume_float <  0.33 && volume_float >  0"}],on:{click:e.player_mute}},[i("volume-low",{attrs:{fillColor:"white"}})],1),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.is_mute||0==e.volume_float,expression:"is_mute || volume_float == 0"}],on:{click:e.player_unmute}},[i("volume-off",{attrs:{fillColor:"white"}})],1),e._v(" "),i("div",{staticClass:"slider",style:e.sliderStyle},[i("vue-slider",{ref:"slider",attrs:{min:0,max:1,interval:.01,tooltip:!1,width:e.sliderStyle.width,"process-style":e.processStyle,"bg-style":e.bgStyle},on:{callback:e.on_volume_change},model:{value:e.volume,callback:function(t){e.volume=t},expression:"volume"}})],1),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.is_fullscreen,expression:"!is_fullscreen"}],on:{click:e.enter_fullscreen}},[i("fullscreen",{attrs:{fillColor:"white"}})],1),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.is_fullscreen,expression:"is_fullscreen"}],on:{click:e.exit_fullscreen}},[i("fullscreen-exit",{attrs:{fillColor:"white"}})],1)])])},staticRenderFns:[]};var o={components:{Player:i("VU/8")(n,r,!1,function(e){i("TthF")},"data-v-da574df2",null).exports},data:function(){return{channel:"chuukaichiban",height:"100%",width:"100%",theme:"dark",frameBorder:0,scrolling:!0}},computed:{src:function(){var e="https://www.twitch.tv/"+this.channel+"/chat";return"dark"==this.theme&&(e+="?darkpopout"),e}},methods:{handleResize:function(){}},mounted:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"video"}},[t("player")],1),this._v(" "),t("div",{attrs:{id:"chat"}},[t("iframe",{attrs:{src:this.src,width:this.width,height:this.height,frameborder:this.frameBorder,scrolling:this.scrolling}})])])},staticRenderFns:[]};var u=i("VU/8")(o,c,!1,function(e){i("IJwD")},null,null).exports,h=i("/ocq"),p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("h1",[e._v(e._s(e.msg))]),e._v(" "),i("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),i("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),i("br"),e._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var v=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},p,!1,function(e){i("1uuo")},"data-v-d8ec41bc",null).exports;s.a.use(h.a);var d=new h.a({routes:[{path:"/",name:"HelloWorld",component:v}]}),m=(i("siN1"),{name:"play-icon",props:{title:{type:String,default:"Play icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}}),_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"material-design-icon play-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[t("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[t("title",[this._v(this._s(this.title))]),this._v(" "),t("path",{attrs:{d:"M8,5.14V19.14L19,12.14L8,5.14Z"}})])])},staticRenderFns:[]},f=i("VU/8")(m,_,!1,null,null,null).exports,g={name:"pause-icon",props:{title:{type:String,default:"Pause icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"material-design-icon pause-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[t("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[t("title",[this._v(this._s(this.title))]),this._v(" "),t("path",{attrs:{d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])])},staticRenderFns:[]},w=i("VU/8")(g,y,!1,null,null,null).exports,C={name:"volume-high-icon",props:{title:{type:String,default:"Volume high icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},V={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"material-design-icon volume-high-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[t("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[t("title",[this._v(this._s(this.title))]),this._v(" "),t("path",{attrs:{d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}})])])},staticRenderFns:[]},H=i("VU/8")(C,V,!1,null,null,null).exports,x={name:"volume-medium-icon",props:{title:{type:String,default:"Volume medium icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"material-design-icon volume-medium-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[t("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[t("title",[this._v(this._s(this.title))]),this._v(" "),t("path",{attrs:{d:"M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"}})])])},staticRenderFns:[]},k=i("VU/8")(x,b,!1,null,null,null).exports,M={name:"volume-low-icon",props:{title:{type:String,default:"Volume low icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"material-design-icon volume-low-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[t("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[t("title",[this._v(this._s(this.title))]),this._v(" "),t("path",{attrs:{d:"M7,9V15H11L16,20V4L11,9H7Z"}})])])},staticRenderFns:[]},L=i("VU/8")(M,S,!1,null,null,null).exports,E={name:"volume-off-icon",props:{title:{type:String,default:"Volume off icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},B={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"material-design-icon volume-off-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[t("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[t("title",[this._v(this._s(this.title))]),this._v(" "),t("path",{attrs:{d:"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"}})])])},staticRenderFns:[]},F=i("VU/8")(E,B,!1,null,null,null).exports,$={name:"fullscreen-icon",props:{title:{type:String,default:"Fullscreen icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"material-design-icon fullscreen-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[t("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[t("title",[this._v(this._s(this.title))]),this._v(" "),t("path",{attrs:{d:"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"}})])])},staticRenderFns:[]},N=i("VU/8")($,R,!1,null,null,null).exports,j={name:"fullscreen-exit-icon",props:{title:{type:String,default:"Fullscreen exit icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},U={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"material-design-icon fullscreen-exit-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[t("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[t("title",[this._v(this._s(this.title))]),this._v(" "),t("path",{attrs:{d:"M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z"}})])])},staticRenderFns:[]},T=i("VU/8")(j,U,!1,null,null,null).exports,Z=i("GDE4"),D=i.n(Z);s.a.component("play-icon",f),s.a.component("pause-icon",w),s.a.component("volume-high",H),s.a.component("volume-medium",k),s.a.component("volume-low",L),s.a.component("volume-off",F),s.a.component("fullscreen",N),s.a.component("fullscreen-exit",T),s.a.component("vue-slider",D.a);var I=i("K/Lq");s.a.use(I),s.a.config.productionTip=!1,new s.a({el:"#app",router:d,components:{App:u},template:"<App/>"})},TthF:function(e,t){},siN1:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1448eaffedbe7fdf3d98.js.map