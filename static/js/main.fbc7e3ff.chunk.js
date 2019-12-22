(this["webpackJsonpreact-camera-control-example"]=this["webpackJsonpreact-camera-control-example"]||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),c=(n(16),n(1)),u=n.n(c),s=n(6),l=n(7),p=n(9),f=n(8),d=n(10),v=n(2),h=n.n(v),m=n(3),b=n.n(m),y=function(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,o){try{var i=t[a](o),c=i.value}catch(u){return void n(u)}if(!i.done)return Promise.resolve(c).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(c)}("next")}))}},w=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},x=function(e){function t(e){w(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={videoTrack:null,capabilities:null},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),k(t,[{key:"componentDidMount",value:function(){var e=y(u.a.mark((function e(){var t,n,r,a,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.video,r=t.audio,!navigator.mediaDevices){e.next=21;break}return e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({video:n,audio:r});case 5:return a=e.sent,o=a.getVideoTracks()[0],e.next=9,this.sleep(1e3);case 9:return i=o.getCapabilities(),this.setState({videoTrack:o,capabilities:i}),this.video.srcObject=a,e.next=14,this.video.play();case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0);case 19:e.next=22;break;case 21:console.error("Check browser compatibility - Chrome > 57");case 22:case"end":return e.stop()}}),e,this,[[2,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"sleep",value:function(){var e=y(u.a.mark((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"capture",value:function(){return new window.ImageCapture(this.state.videoTrack).takePhoto()}},{key:"zoom",value:function(){var e=y(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.videoTrack,!("zoom"in n.capabilities)){e.next=5;break}return e.next=4,r.applyConstraints({advanced:[{zoom:Number(t.target.value)}]});case 4:this.setState({videoTrack:r});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(null===this.state.videoTrack)return h.a.createElement("div",null,"Loading...");var t=this.state,n=t.videoTrack,r=t.capabilities,a=n.getSettings(),o="zoom"in r;return h.a.createElement("div",{style:j.preview},this.props.children,h.a.createElement("div",{style:j.slider},h.a.createElement("input",{type:"range",hidden:!o,min:o?r.zoom.min:0,max:o?r.zoom.max:0,step:o?r.zoom.step:0,value:o?a.zoom:0,onChange:function(t){return e.zoom(t)}})),h.a.createElement("video",{style:j.video,ref:function(t){e.video=t}}))}}]),t}(h.a.Component);x.propTypes={audio:b.a.bool,video:b.a.bool,children:b.a.element},x.defaultProps={audio:!1,video:!0,style:{},children:null};var j={preview:{position:"relative"},video:{width:"100%",height:"100%"},slider:{display:"flex",position:"absolute",justifyContent:"center",zIndex:1,bottom:0,width:"100%"}},O=x,C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).takePicture=function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(n.camera.capture());case 2:e=t.sent,n.img.src=URL.createObjectURL(e),n.img.onload=function(){URL.revokeObjectURL(n.src)};case 5:case"end":return t.stop()}}))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(O,{ref:function(t){e.camera=t}},a.a.createElement("div",{style:E.captureContainer,onClick:this.takePicture},a.a.createElement("div",{style:E.captureButton}))),a.a.createElement("img",{style:E.captureImage,ref:function(t){e.img=t},alt:""}))}}]),t}(r.Component),E={captureContainer:{display:"flex",position:"absolute",justifyContent:"center",zIndex:1,bottom:0,width:"100%"},captureButton:{backgroundColor:"#fff",borderRadius:"50%",height:28,width:28,color:"#000",margin:20},captureImage:{width:"100%"}};i.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.fbc7e3ff.chunk.js.map