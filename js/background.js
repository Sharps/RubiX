!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports._vantaEffect=e():t._vantaEffect=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=12)}({0:function(t,e,i){"use strict";function s(t,e){for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function o(){return"undefined"!=typeof navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}i.d(e,"c",(function(){return s})),i.d(e,"e",(function(){return o})),i.d(e,"i",(function(){return n})),i.d(e,"h",(function(){return r})),i.d(e,"g",(function(){return h})),i.d(e,"f",(function(){return a})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return c})),i.d(e,"d",(function(){return u})),Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};const n=t=>t[Math.floor(Math.random()*t.length)];function r(t,e){return null==t&&(t=0),null==e&&(e=1),t+Math.random()*(e-t)}function h(t,e){return null==t&&(t=0),null==e&&(e=1),Math.floor(t+Math.random()*(e-t+1))}const a=t=>document.querySelector(t),l=t=>"number"==typeof t?"#"+("00000"+t.toString(16)).slice(-6):t,c=(t,e=1)=>{const i=l(t),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),o=s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null;return"rgba("+o.r+","+o.g+","+o.b+","+e+")"},u=t=>.299*t.r+.587*t.g+.114*t.b},1:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i(0);const o="object"==typeof window;let n=o&&window.THREE||{};o&&!window.VANTA&&(window.VANTA={});const r=o&&window.VANTA||{};r.register=(t,e)=>r[t]=t=>new e(t),r.version="0.5.15";const h=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};r.VantaBase=class{constructor(t={}){if(!o)return!1;r.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const e="function"==typeof this.getDefaultOptions?this.getDefaultOptions():this.defaultOptions;if(this.options=Object(s.c)({mouseControls:!0,touchControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1},e),(t instanceof HTMLElement||"string"==typeof t)&&(t={el:t}),Object(s.c)(this.options,t),this.options.THREE&&(n=this.options.THREE),this.el=this.options.el,null==this.el)h('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const t=this.el;if(this.el=Object(s.f)(t),!this.el)return void h("Cannot find element",t)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(t){return h("Init error",t),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(s.a)(this.options.backgroundColor)))}this.initMouse(),this.resize(),this.animationLoop();const i=window.addEventListener;i("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(i("scroll",this.windowMouseMoveWrapper),i("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(i("touchstart",this.windowTouchWrapper),i("touchmove",this.windowTouchWrapper))}setOptions(t={}){Object(s.c)(this.options,t)}prepareEl(){let t,e;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(t=0;t<this.el.childNodes.length;t++){const e=this.el.childNodes[t];if(e.nodeType===Node.TEXT_NODE){const t=document.createElement("span");t.textContent=e.textContent,e.parentElement.insertBefore(t,e),e.remove()}}for(t=0;t<this.el.children.length;t++)e=this.el.children[t],"static"===getComputedStyle(e).position&&(e.style.position="relative"),"auto"===getComputedStyle(e).zIndex&&(e.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}applyCanvasStyles(t,e={}){Object(s.c)(t.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object(s.c)(t.style,e),t.classList.add("vanta-canvas")}initThree(){n.WebGLRenderer?(this.renderer=new n.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new n.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}windowMouseMoveWrapper(t){const e=this.getCanvasElement();if(!e)return!1;const i=e.getBoundingClientRect(),s=t.clientX-i.left,o=t.clientY-i.top;s>=0&&o>=0&&s<=i.width&&o<=i.height&&(this.mouseX=s,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(s,o))}windowTouchWrapper(t){if(1===t.touches.length){const e=this.getCanvasElement();if(!e)return!1;const i=e.getBoundingClientRect(),s=t.touches[0].clientX-i.left,o=t.touches[0].clientY-i.top;s>=0&&o>=0&&s<=i.width&&o<=i.height&&(this.mouseX=s,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(s,o))}}triggerMouseMove(t,e){this.uniforms&&(this.uniforms.iMouse.value.x=t/this.scale,this.uniforms.iMouse.value.y=e/this.scale);const i=t/this.width,s=e/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(i,s)}setSize(){this.scale||(this.scale=1),Object(s.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const t=this.el.offsetHeight,e=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,s=e.top+i;return s-window.innerHeight<=i&&i<=s+t}animationLoop(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),"function"==typeof this.afterRender&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const t=window.removeEventListener;t("touchstart",this.windowTouchWrapper),t("touchmove",this.windowTouchWrapper),t("scroll",this.windowMouseMoveWrapper),t("mousemove",this.windowMouseMoveWrapper),t("resize",this.resize),window.cancelAnimationFrame(this.req),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null)}},e.b=r.VantaBase},12:function(t,e,i){"use strict";i.r(e);var s=i(1),o=i(0);let n="object"==typeof window&&window.THREE;class r extends s.b{static initClass(){this.prototype.defaultOptions={color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}constructor(t){n=t.THREE||n,super(t)}genPoint(t,e,i){let s;if(this.points||(this.points=[]),this.options.showDots){const t=new n.SphereGeometry(.25,12,12),e=new n.MeshLambertMaterial({color:this.options.color});s=new n.Mesh(t,e)}else s=new n.Object3D;return this.cont.add(s),s.ox=t,s.oy=e,s.oz=i,s.position.set(t,e,i),s.r=Object(o.h)(-2,2),this.points.push(s)}onInit(){this.cont=new n.Group,this.cont.position.set(0,0,0),this.scene.add(this.cont);let t=this.options.points,{spacing:e}=this.options;Object(o.e)()&&(t=~~(.75*t),e=~~(.65*e));const i=t*t*2;this.linePositions=new Float32Array(i*i*3),this.lineColors=new Float32Array(i*i*3);const s=Object(o.d)(new n.Color(this.options.color)),r=Object(o.d)(new n.Color(this.options.backgroundColor));this.blending=s>r?"additive":"subtractive";const h=new n.BufferGeometry;h.addAttribute("position",new n.BufferAttribute(this.linePositions,3).setDynamic(!0)),h.addAttribute("color",new n.BufferAttribute(this.lineColors,3).setDynamic(!0)),h.computeBoundingSphere(),h.setDrawRange(0,0);const a=new n.LineBasicMaterial({vertexColors:n.VertexColors,blending:"additive"===this.blending?n.AdditiveBlending:null,transparent:!0});this.linesMesh=new n.LineSegments(h,a),this.cont.add(this.linesMesh);for(let i=0;i<=t;i++)for(let s=0;s<=t;s++){const n=Object(o.g)(-3,3),r=(i-t/2)*e+Object(o.g)(-5,5);let h=(s-t/2)*e+Object(o.g)(-5,5);i%2&&(h+=.5*e),this.genPoint(r,n-Object(o.g)(5,15),h),this.genPoint(r+Object(o.g)(-5,5),n+Object(o.g)(5,15),h+Object(o.g)(-5,5))}this.camera=new n.PerspectiveCamera(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.scene.add(this.camera);const l=new n.AmbientLight(16777215,.75);return this.scene.add(l),this.spot=new n.SpotLight(16777215,1),this.spot.position.set(0,200,0),this.spot.distance=400,this.spot.target=this.cont,this.scene.add(this.spot)}onUpdate(){let t;null!=this.helper&&this.helper.update(),null!=this.controls&&this.controls.update();const e=this.camera;Math.abs(e.tx-e.position.x)>.01&&(t=e.tx-e.position.x,e.position.x+=.02*t),Math.abs(e.ty-e.position.y)>.01&&(t=e.ty-e.position.y,e.position.y+=.02*t),e.lookAt(new n.Vector3(0,0,0));let i=0,s=0,o=0;const r=new n.Color(this.options.backgroundColor),h=new n.Color(this.options.color),a=h.clone().sub(r);this.rayCaster&&this.rayCaster.setFromCamera(new n.Vector2(this.rcMouseX,this.rcMouseY),this.camera);for(let t=0;t<this.points.length;t++){let e,l;const c=this.points[t],u=(l=this.rayCaster?this.rayCaster.ray.distanceToPoint(c.position):1e3).clamp(5,15);if(c.scale.x=c.scale.y=c.scale.z=(.25*(15-u)).clamp(1,100),0!==c.r){let t=Math.atan2(c.position.z,c.position.x);e=Math.sqrt(c.position.z*c.position.z+c.position.x*c.position.x),t+=25e-5*c.r,c.position.x=e*Math.cos(t),c.position.z=e*Math.sin(t)}for(let l=t;l<this.points.length;l++){const t=this.points[l],u=c.position.x-t.position.x,p=c.position.y-t.position.y,d=c.position.z-t.position.z;if((e=Math.sqrt(u*u+p*p+d*d))<this.options.maxDistance){let l;const u=(2*(1-e/this.options.maxDistance)).clamp(0,1);l="additive"===this.blending?new n.Color(0).lerp(a,u):r.clone().lerp(h,u),this.linePositions[i++]=c.position.x,this.linePositions[i++]=c.position.y,this.linePositions[i++]=c.position.z,this.linePositions[i++]=t.position.x,this.linePositions[i++]=t.position.y,this.linePositions[i++]=t.position.z,this.lineColors[s++]=l.r,this.lineColors[s++]=l.g,this.lineColors[s++]=l.b,this.lineColors[s++]=l.r,this.lineColors[s++]=l.g,this.lineColors[s++]=l.b,o++}}}return this.linesMesh.geometry.setDrawRange(0,2*o),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0,.001*this.t}onMouseMove(t,e){const i=this.camera;i.oy||(i.oy=i.position.y,i.ox=i.position.x,i.oz=i.position.z);const s=Math.atan2(i.oz,i.ox),o=Math.sqrt(i.oz*i.oz+i.ox*i.ox),n=s+2*(t-.5)*(this.options.mouseCoeffX||1);i.tz=o*Math.sin(n),i.tx=o*Math.cos(n),i.ty=i.oy+50*(e-.5)*(this.options.mouseCoeffY||1),this.rayCaster,this.rcMouseX=2*t-1,this.rcMouseY=2*-t+1}onRestart(){this.scene.remove(this.linesMesh),this.points=[]}}r.initClass(),e.default=s.a.register("NET",r)}})}));