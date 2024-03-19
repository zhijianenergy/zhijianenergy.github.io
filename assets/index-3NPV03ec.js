import{u as Jd,t as Kd,c as Qd,a as $d,b as to,p as ep,d as tp,i as np,e as ip,f as z2,g as L6,r as s1,o as rp,h as i9,j as sp,k as k5,l as I6,m as no,n as op,q as R5,s as y2,v as P5,w as io,x as ap,y as lp,z as cp,A as up,B as k3,C as hp,D as fp,V as ki,E as Vi,F as dp,G as pp,T as mp,H as Xi,I as A4,J as Yi,K as gp,L as vp,M as b4,N as P9,O as F9,P as A5,Q as nt,_ as it,R as rt,S as st,U as P2,W as W1,X as Zi,Y as _p,Z as yp,$ as xp,a0 as Sp,a1 as Mp,a2 as Ep,a3 as Ap,a4 as bp,a5 as wp,a6 as K8,a7 as qi,a8 as Tp,a9 as Rp,aa as Cp,ab as ji}from"./index-6SiM9aHz.js";function Pp(i){return Jd(Kd(i).toLowerCase())}var Ji=Qd(function(i,e,t){return e=e.toLowerCase(),i+(t?Pp(e):e)});const Lp=i=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),Ip={name:"Carousel",common:$d,self:Lp},Dp=Ip;function Up(i){const{length:e}=i;return e>1&&(i.push(Ki(i[0],0,"append")),i.unshift(Ki(i[e-1],e-1,"prepend"))),i}function Ki(i,e,t){return to(i,{key:`carousel-item-duplicate-${e}-${t}`})}function Qi(i,e,t){return e===1?0:t?i===0?e-3:i===e-1?0:i-1:i}function Q8(i,e){return e?i+1:i}function Np(i,e,t){return i<0?null:i===0?t?e-1:null:i-1}function Bp(i,e,t){return i>e-1?null:i===e-1?t?0:null:i+1}function Op(i,e){return e&&i>3?i-2:i}function $i(i){return window.TouchEvent&&i instanceof window.TouchEvent}function er(i,e){let{offsetWidth:t,offsetHeight:n}=i;if(e){const s=getComputedStyle(i);t=t-parseFloat(s.getPropertyValue("padding-left"))-parseFloat(s.getPropertyValue("padding-right")),n=n-parseFloat(s.getPropertyValue("padding-top"))-parseFloat(s.getPropertyValue("padding-bottom"))}return{width:t,height:n}}function V3(i,e,t){return i<e?e:i>t?t:i}function Fp(i){if(i===void 0)return 0;if(typeof i=="number")return i;const e=/^((\d+)?\.?\d+?)(ms|s)?$/,t=i.match(e);if(t){const[,n,,s="ms"]=t;return Number(n)*(s==="ms"?1:1e3)}return 0}const ro=tp("n-carousel-methods"),zp=i=>{ep(ro,i)},ot=(i="unknown",e="component")=>{const t=np(ro);return t||ip(i,`\`${e}\` must be placed inside \`n-carousel\`.`),t},Gp={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Hp=z2({name:"CarouselDots",props:Gp,setup(i){const{mergedClsPrefixRef:e}=L6(i),t=s1([]),n=ot();function s(f,d){switch(f.key){case"Enter":case" ":f.preventDefault(),n.to(d);return}i.keyboard&&c(f)}function o(f){i.trigger==="hover"&&n.to(f)}function l(f){i.trigger==="click"&&n.to(f)}function c(f){var d;if(f.shiftKey||f.altKey||f.ctrlKey||f.metaKey)return;const p=(d=document.activeElement)===null||d===void 0?void 0:d.nodeName.toLowerCase();if(p==="input"||p==="textarea")return;const{code:m}=f,_=m==="PageUp"||m==="ArrowUp",x=m==="PageDown"||m==="ArrowDown",S=m==="PageUp"||m==="ArrowRight",y=m==="PageDown"||m==="ArrowLeft",g=n.isVertical(),P=g?_:S,E=g?x:y;!P&&!E||(f.preventDefault(),P&&!n.isNextDisabled()?(n.next(),h(n.currentIndexRef.value)):E&&!n.isPrevDisabled()&&(n.prev(),h(n.currentIndexRef.value)))}function h(f){var d;(d=t.value[f])===null||d===void 0||d.focus()}return rp(()=>t.value.length=0),{mergedClsPrefix:e,dotEls:t,handleKeydown:s,handleMouseenter:o,handleClick:l}},render(){const{mergedClsPrefix:i,dotEls:e}=this;return i9("div",{class:[`${i}-carousel__dots`,`${i}-carousel__dots--${this.dotType}`],role:"tablist"},sp(this.total,t=>{const n=t===this.currentIndex;return i9("div",{"aria-selected":n,ref:s=>e.push(s),role:"button",tabindex:"0",class:[`${i}-carousel__dot`,n&&`${i}-carousel__dot--active`],key:t,onClick:()=>{this.handleClick(t)},onMouseenter:()=>{this.handleMouseenter(t)},onKeydown:s=>{this.handleKeydown(s,t)}})}))}}),Wp=i9("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},i9("g",{fill:"none"},i9("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),kp=i9("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},i9("g",{fill:"none"},i9("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Vp=z2({name:"CarouselArrow",setup(i){const{mergedClsPrefixRef:e}=L6(i),{isVertical:t,isPrevDisabled:n,isNextDisabled:s,prev:o,next:l}=ot();return{mergedClsPrefix:e,isVertical:t,isPrevDisabled:n,isNextDisabled:s,prev:o,next:l}},render(){const{mergedClsPrefix:i}=this;return i9("div",{class:`${i}-carousel__arrow-group`},i9("div",{class:[`${i}-carousel__arrow`,this.isPrevDisabled()&&`${i}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Wp),i9("div",{class:[`${i}-carousel__arrow`,this.isNextDisabled()&&`${i}-carousel__arrow--disabled`],role:"button",onClick:this.next},kp))}}),w6="CarouselItem",Xp=i=>{var e;return((e=i.type)===null||e===void 0?void 0:e.name)===w6},Yp=z2({name:w6,setup(i){const{mergedClsPrefixRef:e}=L6(i),t=ot(Ji(w6),`n-${Ji(w6)}`),n=s1(),s=k5(()=>{const{value:d}=n;return d?t.getSlideIndex(d):-1}),o=k5(()=>t.isPrev(s.value)),l=k5(()=>t.isNext(s.value)),c=k5(()=>t.isActive(s.value)),h=k5(()=>t.getSlideStyle(s.value));I6(()=>{t.addSlide(n.value)}),no(()=>{t.removeSlide(n.value)});function f(d){const{value:p}=s;p!==void 0&&(t==null||t.onCarouselItemClick(p,d))}return{mergedClsPrefix:e,selfElRef:n,isPrev:o,isNext:l,isActive:c,index:s,style:h,handleClick:f}},render(){var i;const{$slots:e,mergedClsPrefix:t,isPrev:n,isNext:s,isActive:o,index:l,style:c}=this,h=[`${t}-carousel__slide`,{[`${t}-carousel__slide--current`]:o,[`${t}-carousel__slide--prev`]:n,[`${t}-carousel__slide--next`]:s}];return i9("div",{ref:"selfElRef",class:h,role:"option",tabindex:"-1","data-index":l,"aria-hidden":!o,style:c,onClickCapture:this.handleClick},(i=e.default)===null||i===void 0?void 0:i.call(e,{isPrev:n,isNext:s,isActive:o,index:l}))}}),Zp=op("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[R5("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[R5("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[y2("> img",`
 display: block;
 `)])]),R5("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[P5("dot",[R5("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[y2("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),P5("active",`
 background-color: var(--n-dot-color-active);
 `)])]),P5("line",[R5("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[y2("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),P5("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),R5("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[y2("svg",`
 height: 1em;
 width: 1em;
 `),y2("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),P5("vertical",`
 touch-action: pan-x;
 `,[R5("slides",`
 flex-direction: column;
 `),P5("fade",[R5("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),P5("card",[R5("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[P5("current",`
 transform: translateY(-50%) translateZ(0);
 `),P5("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),P5("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),P5("usercontrol",[R5("slides",[y2(">",[y2("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),P5("left",[R5("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[P5("line",[R5("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[P5("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),R5("dot",`
 margin: 4px 0;
 `)]),R5("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),P5("vertical",[R5("arrow",`
 transform: rotate(90deg);
 `)]),P5("show-arrow",[P5("bottom",[R5("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),P5("top",[R5("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),P5("left",[R5("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),P5("right",[R5("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),P5("left",[R5("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[y2("> *:first-child",`
 margin-bottom: 12px;
 `)])]),P5("right",[R5("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[P5("line",[R5("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[P5("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),R5("dot",`
 margin: 4px 0;
 `),R5("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[y2("> *:first-child",`
 margin-bottom: 12px;
 `)])]),P5("top",[R5("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[P5("line",[R5("dot",`
 margin: 0 4px;
 `)])]),R5("dot",`
 margin: 0 4px;
 `),R5("arrow-group",`
 top: 12px;
 right: 12px;
 `,[y2("> *:first-child",`
 margin-right: 12px;
 `)])]),P5("bottom",[R5("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[P5("line",[R5("dot",`
 margin: 0 4px;
 `)])]),R5("dot",`
 margin: 0 4px;
 `),R5("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[y2("> *:first-child",`
 margin-right: 12px;
 `)])]),P5("fade",[R5("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[P5("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),P5("card",[R5("slides",`
 perspective: 1000px;
 `),R5("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[P5("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),P5("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),P5("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),qp=["transitionDuration","transitionTimingFunction"],jp=Object.assign(Object.assign({},io.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let $8=!1;const Jp=z2({name:"Carousel",props:jp,setup(i){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=L6(i),n=s1(null),s=s1(null),o=s1([]),l={value:[]},c=k5(()=>i.direction==="vertical"),h=k5(()=>c.value?"height":"width"),f=k5(()=>c.value?"bottom":"right"),d=k5(()=>i.effect==="slide"),p=k5(()=>i.loop&&i.slidesPerView===1&&d.value),m=k5(()=>i.effect==="custom"),_=k5(()=>!d.value||i.centeredSlides?1:i.slidesPerView),x=k5(()=>m.value?1:i.slidesPerView),S=k5(()=>_.value==="auto"||i.slidesPerView==="auto"&&i.centeredSlides),y=s1({width:0,height:0}),g=k5(()=>{const{value:r0}=o;if(!r0.length)return[];const{value:E0}=S;if(E0)return r0.map(H5=>er(H5));const{value:H0}=x,{value:t5}=y,{value:u5}=h;let l5=t5[u5];if(H0!=="auto"){const{spaceBetween:H5}=i,E9=l5-(H0-1)*H5,I=1/Math.max(1,H0);l5=E9*I}const D5=Object.assign(Object.assign({},t5),{[u5]:l5});return r0.map(()=>D5)}),P=k5(()=>{const{value:r0}=g;if(!r0.length)return[];const{centeredSlides:E0,spaceBetween:H0}=i,{value:t5}=h,{[t5]:u5}=y.value;let l5=0;return r0.map(({[t5]:D5})=>{let H5=l5;return E0&&(H5+=(D5-u5)/2),l5+=D5+H0,H5})}),E=s1(!1),L=k5(()=>{const{transitionStyle:r0}=i;return r0?Xi(r0,qp):{}}),R=k5(()=>m.value?0:Fp(L.value.transitionDuration)),B=k5(()=>{const{value:r0}=o;if(!r0.length)return[];const E0=!(S.value||x.value===1),H0=D5=>{if(E0){const{value:H5}=h;return{[H5]:`${g.value[D5][H5]}px`}}};if(m.value)return r0.map((D5,H5)=>H0(H5));const{effect:t5,spaceBetween:u5}=i,{value:l5}=f;return r0.reduce((D5,H5,E9)=>{const I=Object.assign(Object.assign({},H0(E9)),{[`margin-${l5}`]:`${u5}px`});return D5.push(I),E.value&&(t5==="fade"||t5==="card")&&Object.assign(I,L.value),D5},[])}),G=k5(()=>{const{value:r0}=_,{length:E0}=o.value;if(r0!=="auto")return Math.max(E0-r0,0)+1;{const{value:H0}=g,{length:t5}=H0;if(!t5)return E0;const{value:u5}=P,{value:l5}=h,D5=y.value[l5];let H5=H0[H0.length-1][l5],E9=t5;for(;E9>1&&H5<D5;)E9--,H5+=u5[E9]-u5[E9-1];return V3(E9+1,1,t5)}}),q=k5(()=>Op(G.value,p.value)),b=Q8(i.defaultIndex,p.value),C=s1(Qi(b,G.value,p.value)),X=ap(lp(i,"currentIndex"),C),j=k5(()=>Q8(X.value,p.value));function H(r0){var E0,H0;r0=V3(r0,0,G.value-1);const t5=Qi(r0,G.value,p.value),{value:u5}=X;t5!==X.value&&(C.value=t5,(E0=i["onUpdate:currentIndex"])===null||E0===void 0||E0.call(i,t5,u5),(H0=i.onUpdateCurrentIndex)===null||H0===void 0||H0.call(i,t5,u5))}function Y(r0=j.value){return Np(r0,G.value,i.loop)}function Q(r0=j.value){return Bp(r0,G.value,i.loop)}function d0(r0){const E0=Z0(r0);return E0!==null&&Y()===E0}function J(r0){const E0=Z0(r0);return E0!==null&&Q()===E0}function e0(r0){return j.value===Z0(r0)}function p0(r0){return X.value===r0}function f0(){return Y()===null}function P0(){return Q()===null}function L0(r0){const E0=V3(Q8(r0,p.value),0,G.value);(r0!==X.value||E0!==j.value)&&H(E0)}function i0(){const r0=Y();r0!==null&&H(r0)}function g0(){const r0=Q();r0!==null&&H(r0)}function w0(){(!z||!p.value)&&i0()}function I0(){(!z||!p.value)&&g0()}let z=!1,V0=0;const J0=s1({});function A0(r0,E0=0){J0.value=Object.assign({},L.value,{transform:c.value?`translateY(${-r0}px)`:`translateX(${-r0}px)`,transitionDuration:`${E0}ms`})}function G0(r0=0){d.value?_0(j.value,r0):V0!==0&&(!z&&r0>0&&(z=!0),A0(V0=0,r0))}function _0(r0,E0){const H0=s0(r0);H0!==V0&&E0>0&&(z=!0),V0=s0(j.value),A0(H0,E0)}function s0(r0){let E0;return r0>=G.value-1?E0=u0():E0=P.value[r0]||0,E0}function u0(){if(_.value==="auto"){const{value:r0}=h,{[r0]:E0}=y.value,{value:H0}=P,t5=H0[H0.length-1];let u5;if(t5===void 0)u5=E0;else{const{value:l5}=g;u5=t5+l5[l5.length-1][r0]}return u5-E0}else{const{value:r0}=P;return r0[G.value-1]||0}}const N0={currentIndexRef:X,to:L0,prev:w0,next:I0,isVertical:()=>c.value,isHorizontal:()=>!c.value,isPrev:d0,isNext:J,isActive:e0,isPrevDisabled:f0,isNextDisabled:P0,getSlideIndex:Z0,getSlideStyle:K0,addSlide:R0,removeSlide:X0,onCarouselItemClick:i5};zp(N0);function R0(r0){r0&&o.value.push(r0)}function X0(r0){if(!r0)return;const E0=Z0(r0);E0!==-1&&o.value.splice(E0,1)}function Z0(r0){return typeof r0=="number"?r0:r0?o.value.indexOf(r0):-1}function K0(r0){const E0=Z0(r0);if(E0!==-1){const H0=[B.value[E0]],t5=N0.isPrev(E0),u5=N0.isNext(E0);return t5&&H0.push(i.prevSlideStyle||""),u5&&H0.push(i.nextSlideStyle||""),gp(H0)}}function i5(r0,E0){let H0=!z&&!O&&!c0;i.effect==="card"&&H0&&!e0(r0)&&(L0(r0),H0=!1),H0||(E0.preventDefault(),E0.stopPropagation())}let e5=null;function D(){e5&&(clearInterval(e5),e5=null)}function T(){D(),!i.autoplay||q.value<2||(e5=window.setInterval(g0,i.interval))}let t0=0,y0=0,x0=0,T0=0,O=!1,c0=!1;function $(r0){var E0;if($8||!(!((E0=s.value)===null||E0===void 0)&&E0.contains(vp(r0))))return;$8=!0,O=!0,c0=!1,T0=Date.now(),D(),r0.type!=="touchstart"&&!r0.target.isContentEditable&&r0.preventDefault();const H0=$i(r0)?r0.touches[0]:r0;c.value?y0=H0.clientY:t0=H0.clientX,i.touchable&&(b4("touchmove",document,C0),b4("touchend",document,B0),b4("touchcancel",document,B0)),i.draggable&&(b4("mousemove",document,C0),b4("mouseup",document,B0))}function C0(r0){const{value:E0}=c,{value:H0}=h,t5=$i(r0)?r0.touches[0]:r0,u5=E0?t5.clientY-y0:t5.clientX-t0,l5=y.value[H0];x0=V3(u5,-l5,l5),r0.cancelable&&r0.preventDefault(),d.value&&A0(V0-x0,0)}function B0(){const{value:r0}=j;let E0=r0;if(!z&&x0!==0&&d.value){const H0=V0-x0,t5=[...P.value.slice(0,G.value-1),u0()];let u5=null;for(let l5=0;l5<t5.length;l5++){const D5=Math.abs(t5[l5]-H0);if(u5!==null&&u5<D5)break;u5=D5,E0=l5}}if(E0===r0){const H0=Date.now()-T0,{value:t5}=h,u5=y.value[t5];x0>u5/2||x0/H0>.4?E0=Y(r0):(x0<-u5/2||x0/H0<-.4)&&(E0=Q(r0))}E0!==null&&E0!==r0?(c0=!0,H(E0),Yi(()=>{(!p.value||C.value!==X.value)&&G0(R.value)})):G0(R.value),Y0(),T()}function Y0(){O&&($8=!1),O=!1,t0=0,y0=0,x0=0,T0=0,A4("touchmove",document,C0),A4("touchend",document,B0),A4("touchcancel",document,B0),A4("mousemove",document,C0),A4("mouseup",document,B0)}function F0(){if(d.value&&z){const{value:r0}=j;_0(r0,0)}else T();d.value&&(J0.value.transitionDuration="0ms"),z=!1}function k0(r0){if(r0.preventDefault(),z)return;let{deltaX:E0,deltaY:H0}=r0;r0.shiftKey&&!E0&&(E0=H0);const t5=-1,u5=1,l5=(E0||H0)>0?u5:t5;let D5=0,H5=0;c.value?H5=l5:D5=l5;const E9=10;(H5*H0>=E9||D5*E0>=E9)&&(l5===u5&&!P0()?g0():l5===t5&&!f0()&&i0())}function r5(){y.value=er(n.value,!0),T()}function c5(){var r0,E0;S.value&&((E0=(r0=g.effect).scheduler)===null||E0===void 0||E0.call(r0),g.effect.run())}function V5(){i.autoplay&&D()}function W(){i.autoplay&&T()}I6(()=>{cp(T),requestAnimationFrame(()=>E.value=!0)}),no(()=>{Y0(),D()}),up(()=>{const{value:r0}=o,{value:E0}=l,H0=new Map,t5=l5=>H0.has(l5)?H0.get(l5):-1;let u5=!1;for(let l5=0;l5<r0.length;l5++){const D5=E0.findIndex(H5=>H5.el===r0[l5]);D5!==l5&&(u5=!0),H0.set(r0[l5],D5)}u5&&r0.sort((l5,D5)=>t5(l5)-t5(D5))}),k3(j,(r0,E0)=>{if(r0!==E0)if(T(),d.value){if(p.value){const{value:H0}=G;q.value>2&&r0===H0-2&&E0===1?r0=0:r0===1&&E0===H0-2&&(r0=H0-1)}_0(r0,R.value)}else G0()},{immediate:!0}),k3([p,_],()=>void Yi(()=>{H(j.value)})),k3(P,()=>{d.value&&G0()},{deep:!0}),k3(d,r0=>{r0?G0():(z=!1,A0(V0=0))});const o0=k5(()=>({onTouchstartPassive:i.touchable?$:void 0,onMousedown:i.draggable?$:void 0,onWheel:i.mousewheel?k0:void 0})),M0=k5(()=>Object.assign(Object.assign({},Xi(N0,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:q.value,currentIndex:X.value})),z0=k5(()=>({total:q.value,currentIndex:X.value,to:N0.to})),q0={getCurrentIndex:()=>X.value,to:L0,prev:i0,next:g0},I5=io("Carousel","-carousel",Zp,Dp,i,e),L5=k5(()=>{const{common:{cubicBezierEaseInOut:r0},self:{dotSize:E0,dotColor:H0,dotColorActive:t5,dotColorFocus:u5,dotLineWidth:l5,dotLineWidthActive:D5,arrowColor:H5}}=I5.value;return{"--n-bezier":r0,"--n-dot-color":H0,"--n-dot-color-focus":u5,"--n-dot-color-active":t5,"--n-dot-size":E0,"--n-dot-line-width":l5,"--n-dot-line-width-active":D5,"--n-arrow-color":H5}}),X5=t?hp("carousel",void 0,L5,i):void 0;return Object.assign(Object.assign({mergedClsPrefix:e,selfElRef:n,slidesElRef:s,slideVNodes:l,duplicatedable:p,userWantsControl:m,autoSlideSize:S,realIndex:j,slideStyles:B,translateStyle:J0,slidesControlListeners:o0,handleTransitionEnd:F0,handleResize:r5,handleSlideResize:c5,handleMouseenter:V5,handleMouseleave:W,isActive:p0,arrowSlotProps:M0,dotSlotProps:z0},q0),{cssVars:t?void 0:L5,themeClass:X5==null?void 0:X5.themeClass,onRender:X5==null?void 0:X5.onRender})},render(){var i;const{mergedClsPrefix:e,showArrow:t,userWantsControl:n,slideStyles:s,dotType:o,dotPlacement:l,slidesControlListeners:c,transitionProps:h={},arrowSlotProps:f,dotSlotProps:d,$slots:{default:p,dots:m,arrow:_}}=this,x=p&&fp(p())||[];let S=Kp(x);return S.length||(S=x.map(y=>i9(Yp,null,{default:()=>to(y)}))),this.duplicatedable&&(S=Up(S)),this.slideVNodes.value=S,this.autoSlideSize&&(S=S.map(y=>i9(ki,{onResize:this.handleSlideResize},{default:()=>y}))),(i=this.onRender)===null||i===void 0||i.call(this),i9("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${e}-carousel`,this.direction==="vertical"&&`${e}-carousel--vertical`,this.showArrow&&`${e}-carousel--show-arrow`,`${e}-carousel--${l}`,`${e}-carousel--${this.direction}`,`${e}-carousel--${this.effect}`,n&&`${e}-carousel--usercontrol`],style:this.cssVars},c,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),i9(ki,{onResize:this.handleResize},{default:()=>i9("div",{ref:"slidesElRef",class:`${e}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},n?S.map((y,g)=>i9("div",{style:s[g],key:g},dp(i9(mp,Object.assign({},h),{default:()=>y}),[[pp,this.isActive(g)]]))):S)}),this.showDots&&d.total>1&&Vi(m,d,()=>[i9(Hp,{key:o+l,total:d.total,currentIndex:d.currentIndex,dotType:o,trigger:this.trigger,keyboard:this.keyboard})]),t&&Vi(_,f,()=>[i9(Vp,null)]))}});function Kp(i){return i.reduce((e,t)=>(Xp(t)&&e.push(t),e),[])}const Qp={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},$p=A5("g",{fill:"none"},[A5("path",{d:"M10 3a7 7 0 1 1 0 14a7 7 0 0 1 0-14zm8 7a8 8 0 1 0-16 0a8 8 0 0 0 16 0zm-8-2.5A2.5 2.5 0 0 1 12.292 9H11.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.696a3.498 3.498 0 0 0-5.609-.53a.5.5 0 0 0 .746.667A2.493 2.493 0 0 1 10 7.5zm-3 4.304v.696a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.792a2.5 2.5 0 0 0 4.156.666a.5.5 0 0 1 .745.668A3.498 3.498 0 0 1 7 11.804z",fill:"currentColor"})],-1),em=[$p],tm=z2({name:"ArrowSyncCircle20Regular",render:function(e,t){return P9(),F9("svg",Qp,em)}}),nm={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},im=A5("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[A5("circle",{cx:"12",cy:"12",r:"9"}),A5("path",{d:"M12 7l4.76 3.45L15 16H9l-1.76-5.55z"}),A5("path",{d:"M12 7V3m3 13l2.5 3m-.74-8.55L20.5 9M9.06 16.05L6.5 19m.74-8.55L3.5 9"})],-1),rm=[im],sm=z2({name:"BallFootball",render:function(e,t){return P9(),F9("svg",nm,rm)}}),om={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},am=nt('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21"></path><path d="M12 18V7h3"></path><path d="M3 17v-5h9"></path><path d="M4 12V6l18-3v2"></path><path d="M8 12V8L4 6"></path></g>',1),lm=[am],cm=z2({name:"CarCrane",render:function(e,t){return P9(),F9("svg",om,lm)}}),um={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},hm=nt('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="17" r="2"></circle><path d="M21 17h-8"></path><path d="M9 17H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h10l4 4v8"></path><rect x="6" y="8" width="6" height="4" rx="1"></rect></g>',1),fm=[hm],dm=z2({name:"Caravan",render:function(e,t){return P9(),F9("svg",um,fm)}}),pm={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},mm=A5("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[A5("circle",{cx:"12",cy:"12",r:"9"}),A5("path",{d:"M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"}),A5("path",{d:"M12 6v2m0 8v2"})],-1),gm=[mm],vm=z2({name:"Coin",render:function(e,t){return P9(),F9("svg",pm,gm)}}),_m={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ym=nt('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path><path d="M17 4h4v4"></path><path d="M16 9l5-5"></path></g>',1),xm=[ym],Sm=z2({name:"ScreenShare",render:function(e,t){return P9(),F9("svg",_m,xm)}}),Mm={class:"logo-slider"},Em={class:"logo-slide-track"},Am=["src","alt"],bm={__name:"LogoSider",setup(i){const e=[{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"},{src:P2,label:"4Rivers.png",key:"4Rivers.png"}];return(t,n)=>(P9(),F9("div",Mm,[A5("div",Em,[(P9(),F9(rt,null,st(e,(s,o)=>A5("div",{key:`${o}-${s.key}`,class:"slide"},[A5("img",{src:s.src,alt:s.label},null,8,Am)])),64))])]))}},wm=it(bm,[["__scopeId","data-v-56a00233"],["__file","D:/code/official-web/src/components/LogoSider.vue"]]),Tm=i=>(Sp("data-v-9740c341"),i=i(),Mp(),i),Rm={class:"flex flex-col items-center py-10"},Cm=Tm(()=>A5("div",{class:"mb-20 mt-20"},[A5("div",{class:"text-4xl font-bold"},"服务类型")],-1)),Pm={class:"grid gap-x-4 gap-y-40 grid-cols-1 md:grid-cols-3"},Lm={class:"mr-4"},Im={class:"aspect-square icon-wrap"},Dm={class:"counter-content media-body"},Um={class:"text-2xl mb-2"},Nm={class:"text-zinc-500"},Bm={__name:"index",setup(i){const e=[{label:"氢能产业链",content:"灵活可配置的产业链，打造一体化综合能源站解决方案，布局氢能能源网络。",key:"",icon:sm},{label:"氢能源车辆应用及推广",content:"重卡推广、全链路运营监控，24小时安全保障，数据支撑管理优化，提高工作效率分析与决策。",key:"",icon:cm},{label:"数字化应用平台",content:"搭建全国范围的“零碳智慧物流科技”运营管理平台，实现大宗物流数字化管理，对运输进行标准化管理，建立统一的管理运输安全与协同多终端互联互通规范。",key:"",icon:Sm},{label:"零碳物流",content:"通过采用氢能源汽车，致力于运输过程中零碳排放量，提高能源利用效率。",key:"",icon:tm},{label:"氢能供货接单",content:"司机在线接单，灵活定制接单流程，贴合实际业务流，保证质量！",key:"",icon:_p},{label:"平台开源",content:"面向开发者开放接口、大数据平台、可视化平台，为友伤提供更完善的服务。",key:"",icon:yp},{label:"车金融",content:"包含融资租赁、保险、车后等",key:"",icon:dm},{label:"碳数据交易",content:"碳减排监测、碳积分",key:"",icon:vm}];return I6(()=>{}),(t,n)=>{const s=xp;return P9(),F9("div",Rm,[Cm,A5("div",Pm,[(P9(),F9(rt,null,st(e,(o,l)=>A5("div",{key:l,class:"flex flex-row"},[A5("div",Lm,[A5("div",Im,[W1(s,{size:"30",color:"#333",component:o.icon},null,8,["component"])])]),A5("div",Dm,[A5("div",Um,Zi(o.label),1),A5("p",Nm,Zi(o.content),1)])])),64))])])}}},tr=it(Bm,[["__scopeId","data-v-9740c341"],["__file","D:/code/official-web/src/views/home/components/ServiceList/index.vue"]]),Om="/assets/bg_01-13oqd7QH.jpg";var Fm=Object.defineProperty,zm=(i,e,t)=>e in i?Fm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,U0=(i,e,t)=>(zm(i,typeof e!="symbol"?e+"":e,t),t);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const at="152",x7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},S7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gm=0,nr=1,Hm=2,so=1,Wm=2,r1=3,w1=0,z9=1,o1=2,A1=0,q7=1,ir=2,rr=3,sr=4,km=5,k7=100,Vm=101,Xm=102,or=103,ar=104,Ym=200,Zm=201,qm=202,jm=203,oo=204,ao=205,Jm=206,Km=207,Qm=208,$m=209,eg=210,tg=0,ng=1,ig=2,Ge=3,rg=4,sg=5,og=6,ag=7,D6=0,lg=1,cg=2,l1=0,ug=1,hg=2,fg=3,dg=4,pg=5,lo=300,$7=301,e4=302,He=303,We=304,U6=306,ke=1e3,A2=1001,Ve=1002,O9=1003,lr=1004,ee=1005,d2=1006,mg=1007,X4=1008,$1=1009,gg=1010,vg=1011,co=1012,_g=1013,Y1=1014,Z1=1015,Y4=1016,yg=1017,xg=1018,j7=1020,Sg=1021,b2=1023,Mg=1024,Eg=1025,q1=1026,t4=1027,Ag=1028,bg=1029,wg=1030,Tg=1031,Rg=1033,te=33776,ne=33777,ie=33778,re=33779,cr=35840,ur=35841,hr=35842,fr=35843,Cg=36196,dr=37492,pr=37496,mr=37808,gr=37809,vr=37810,_r=37811,yr=37812,xr=37813,Sr=37814,Mr=37815,Er=37816,Ar=37817,br=37818,wr=37819,Tr=37820,Rr=37821,se=36492,Pg=36283,Cr=36284,Pr=36285,Lr=36286,uo=3e3,j1=3001,Lg=3200,Ig=3201,N6=0,Dg=1,J1="",v5="srgb",O2="srgb-linear",ho="display-p3",oe=7680,Ug=519,Xe=35044,Ir="300 es",Ye=1035;class n7{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const T9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dr=1234567;const F4=Math.PI/180,Z4=180/Math.PI;function B2(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(T9[i&255]+T9[i>>8&255]+T9[i>>16&255]+T9[i>>24&255]+"-"+T9[e&255]+T9[e>>8&255]+"-"+T9[e>>16&15|64]+T9[e>>24&255]+"-"+T9[t&63|128]+T9[t>>8&255]+"-"+T9[t>>16&255]+T9[t>>24&255]+T9[n&255]+T9[n>>8&255]+T9[n>>16&255]+T9[n>>24&255]).toLowerCase()}function c9(i,e,t){return Math.max(e,Math.min(t,i))}function lt(i,e){return(i%e+e)%e}function Ng(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bg(i,e,t){return i!==e?(t-i)/(e-i):0}function z4(i,e,t){return(1-t)*i+t*e}function Og(i,e,t,n){return z4(i,e,1-Math.exp(-t*n))}function Fg(i,e=1){return e-Math.abs(lt(i,e*2)-e)}function zg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wg(i,e){return i+Math.random()*(e-i)}function kg(i){return i*(.5-Math.random())}function Vg(i){i!==void 0&&(Dr=i);let e=Dr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xg(i){return i*F4}function Yg(i){return i*Z4}function Ze(i){return(i&i-1)===0&&i!==0}function Zg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qg(i,e,t,n,s){const o=Math.cos,l=Math.sin,c=o(t/2),h=l(t/2),f=o((e+n)/2),d=l((e+n)/2),p=o((e-n)/2),m=l((e-n)/2),_=o((n-e)/2),x=l((n-e)/2);switch(s){case"XYX":i.set(c*d,h*p,h*m,c*f);break;case"YZY":i.set(h*m,c*d,h*p,c*f);break;case"ZXZ":i.set(h*p,h*m,c*d,c*f);break;case"XZX":i.set(c*d,h*x,h*_,c*f);break;case"YXY":i.set(h*_,c*d,h*x,c*f);break;case"ZYZ":i.set(h*x,h*_,c*d,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function a1(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function G5(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jg={DEG2RAD:F4,RAD2DEG:Z4,generateUUID:B2,clamp:c9,euclideanModulo:lt,mapLinear:Ng,inverseLerp:Bg,lerp:z4,damp:Og,pingpong:Fg,smoothstep:zg,smootherstep:Gg,randInt:Hg,randFloat:Wg,randFloatSpread:kg,seededRandom:Vg,degToRad:Xg,radToDeg:Yg,isPowerOfTwo:Ze,ceilPowerOfTwo:Zg,floorPowerOfTwo:fo,setQuaternionFromProperEuler:qg,normalize:G5,denormalize:a1};class b0{constructor(e=0,t=0){b0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(c9(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class C5{constructor(){C5.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,o,l,c,h,f){const d=this.elements;return d[0]=e,d[1]=s,d[2]=c,d[3]=t,d[4]=o,d[5]=h,d[6]=n,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],c=n[3],h=n[6],f=n[1],d=n[4],p=n[7],m=n[2],_=n[5],x=n[8],S=s[0],y=s[3],g=s[6],P=s[1],E=s[4],L=s[7],R=s[2],B=s[5],G=s[8];return o[0]=l*S+c*P+h*R,o[3]=l*y+c*E+h*B,o[6]=l*g+c*L+h*G,o[1]=f*S+d*P+p*R,o[4]=f*y+d*E+p*B,o[7]=f*g+d*L+p*G,o[2]=m*S+_*P+x*R,o[5]=m*y+_*E+x*B,o[8]=m*g+_*L+x*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8];return t*l*d-t*c*f-n*o*d+n*c*h+s*o*f-s*l*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8],p=d*l-c*f,m=c*h-d*o,_=f*o-l*h,x=t*p+n*m+s*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=p*S,e[1]=(s*f-d*n)*S,e[2]=(c*n-s*l)*S,e[3]=m*S,e[4]=(d*t-s*h)*S,e[5]=(s*o-c*t)*S,e[6]=_*S,e[7]=(n*h-f*t)*S,e[8]=(l*t-n*o)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,c){const h=Math.cos(o),f=Math.sin(o);return this.set(n*h,n*f,-n*(h*l+f*c)+l+e,-s*f,s*h,-s*(-f*l+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ae.makeScale(e,t)),this}rotate(e){return this.premultiply(ae.makeRotation(-e)),this}translate(e,t){return this.premultiply(ae.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ae=new C5;function po(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function q4(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Ur={};function G4(i){i in Ur||(Ur[i]=!0,console.warn(i))}function J7(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function le(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jg=new C5().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Kg=new C5().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Qg(i){return i.convertSRGBToLinear().applyMatrix3(Kg)}function $g(i){return i.applyMatrix3(Jg).convertLinearToSRGB()}const ev={[O2]:i=>i,[v5]:i=>i.convertSRGBToLinear(),[ho]:Qg},tv={[O2]:i=>i,[v5]:i=>i.convertLinearToSRGB(),[ho]:$g},x2={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return O2},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ev[e],s=tv[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let M7;class mo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{M7===void 0&&(M7=q4("canvas")),M7.width=e.width,M7.height=e.height;const n=M7.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=M7}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=q4("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=J7(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(J7(t[n]/255)*255):t[n]=J7(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class go{constructor(e=null){this.isSource=!0,this.uuid=B2(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?o.push(ce(s[l].image)):o.push(ce(s[l]))}else o=ce(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function ce(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nv=0;class Y9 extends n7{constructor(e=Y9.DEFAULT_IMAGE,t=Y9.DEFAULT_MAPPING,n=A2,s=A2,o=d2,l=X4,c=b2,h=$1,f=Y9.DEFAULT_ANISOTROPY,d=J1){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=B2(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new b0(0,0),this.repeat=new b0(1,1),this.center=new b0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new C5,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(G4("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===j1?v5:J1),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ke:e.x=e.x-Math.floor(e.x);break;case A2:e.x=e.x<0?0:1;break;case Ve:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ke:e.y=e.y-Math.floor(e.y);break;case A2:e.y=e.y<0?0:1;break;case Ve:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return G4("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===v5?j1:uo}set encoding(e){G4("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===j1?v5:J1}}Y9.DEFAULT_IMAGE=null;Y9.DEFAULT_MAPPING=lo;Y9.DEFAULT_ANISOTROPY=1;class F5{constructor(e=0,t=0,n=0,s=1){F5.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const h=e.elements,f=h[0],d=h[4],p=h[8],m=h[1],_=h[5],x=h[9],S=h[2],y=h[6],g=h[10];if(Math.abs(d-m)<.01&&Math.abs(p-S)<.01&&Math.abs(x-y)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+S)<.1&&Math.abs(x+y)<.1&&Math.abs(f+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(f+1)/2,L=(_+1)/2,R=(g+1)/2,B=(d+m)/4,G=(p+S)/4,q=(x+y)/4;return E>L&&E>R?E<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(E),s=B/n,o=G/n):L>R?L<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(L),n=B/s,o=q/s):R<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),n=G/o,s=q/o),this.set(n,s,o,t),this}let P=Math.sqrt((y-x)*(y-x)+(p-S)*(p-S)+(m-d)*(m-d));return Math.abs(P)<.001&&(P=1),this.x=(y-x)/P,this.y=(p-S)/P,this.z=(m-d)/P,this.w=Math.acos((f+_+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e7 extends n7{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new F5(0,0,e,t),this.scissorTest=!1,this.viewport=new F5(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(G4("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===j1?v5:J1),this.texture=new Y9(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:d2,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vo extends Y9{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=O9,this.minFilter=O9,this.wrapR=A2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iv extends Y9{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=O9,this.minFilter=O9,this.wrapR=A2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u1{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,c){let h=n[s+0],f=n[s+1],d=n[s+2],p=n[s+3];const m=o[l+0],_=o[l+1],x=o[l+2],S=o[l+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=d,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=_,e[t+2]=x,e[t+3]=S;return}if(p!==S||h!==m||f!==_||d!==x){let y=1-c;const g=h*m+f*_+d*x+p*S,P=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const R=Math.sqrt(E),B=Math.atan2(R,g*P);y=Math.sin(y*B)/R,c=Math.sin(c*B)/R}const L=c*P;if(h=h*y+m*L,f=f*y+_*L,d=d*y+x*L,p=p*y+S*L,y===1-c){const R=1/Math.sqrt(h*h+f*f+d*d+p*p);h*=R,f*=R,d*=R,p*=R}}e[t]=h,e[t+1]=f,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,o,l){const c=n[s],h=n[s+1],f=n[s+2],d=n[s+3],p=o[l],m=o[l+1],_=o[l+2],x=o[l+3];return e[t]=c*x+d*p+h*_-f*m,e[t+1]=h*x+d*m+f*p-c*_,e[t+2]=f*x+d*_+c*m-h*p,e[t+3]=d*x-c*p-h*m-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,o=e._z,l=e._order,c=Math.cos,h=Math.sin,f=c(n/2),d=c(s/2),p=c(o/2),m=h(n/2),_=h(s/2),x=h(o/2);switch(l){case"XYZ":this._x=m*d*p+f*_*x,this._y=f*_*p-m*d*x,this._z=f*d*x+m*_*p,this._w=f*d*p-m*_*x;break;case"YXZ":this._x=m*d*p+f*_*x,this._y=f*_*p-m*d*x,this._z=f*d*x-m*_*p,this._w=f*d*p+m*_*x;break;case"ZXY":this._x=m*d*p-f*_*x,this._y=f*_*p+m*d*x,this._z=f*d*x+m*_*p,this._w=f*d*p-m*_*x;break;case"ZYX":this._x=m*d*p-f*_*x,this._y=f*_*p+m*d*x,this._z=f*d*x-m*_*p,this._w=f*d*p+m*_*x;break;case"YZX":this._x=m*d*p+f*_*x,this._y=f*_*p+m*d*x,this._z=f*d*x-m*_*p,this._w=f*d*p-m*_*x;break;case"XZY":this._x=m*d*p-f*_*x,this._y=f*_*p-m*d*x,this._z=f*d*x+m*_*p,this._w=f*d*p+m*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],c=t[5],h=t[9],f=t[2],d=t[6],p=t[10],m=n+c+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(d-h)*_,this._y=(o-f)*_,this._z=(l-s)*_}else if(n>c&&n>p){const _=2*Math.sqrt(1+n-c-p);this._w=(d-h)/_,this._x=.25*_,this._y=(s+l)/_,this._z=(o+f)/_}else if(c>p){const _=2*Math.sqrt(1+c-n-p);this._w=(o-f)/_,this._x=(s+l)/_,this._y=.25*_,this._z=(h+d)/_}else{const _=2*Math.sqrt(1+p-n-c);this._w=(l-s)/_,this._x=(o+f)/_,this._y=(h+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(c9(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,c=t._x,h=t._y,f=t._z,d=t._w;return this._x=n*d+l*c+s*f-o*h,this._y=s*d+l*h+o*c-n*f,this._z=o*d+l*f+n*h-s*c,this._w=l*d-n*c-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,l=this._w;let c=l*e._w+n*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=s,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*n+t*this._x,this._y=_*s+t*this._y,this._z=_*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(h),d=Math.atan2(f,c),p=Math.sin((1-t)*d)/f,m=Math.sin(t*d)/f;return this._w=l*p+this._w*m,this._x=n*p+this._x*m,this._y=s*p+this._y*m,this._z=o*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(o),n*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,c=e.z,h=e.w,f=h*t+l*s-c*n,d=h*n+c*t-o*s,p=h*s+o*n-l*t,m=-o*t-l*n-c*s;return this.x=f*h+m*-o+d*-c-p*-l,this.y=d*h+m*-l+p*-o-f*-c,this.z=p*h+m*-c+f*-l-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,c=t.y,h=t.z;return this.x=s*h-o*c,this.y=o*l-n*h,this.z=n*c-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ue.copy(this).projectOnVector(e),this.sub(ue)}reflect(e){return this.sub(ue.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(c9(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ue=new U,Nr=new u1;class R1{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($2.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($2.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$2.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),E7.copy(e.boundingBox),E7.applyMatrix4(e.matrixWorld),this.union(E7);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const o=s.attributes.position;for(let l=0,c=o.count;l<c;l++)$2.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint($2)}else s.boundingBox===null&&s.computeBoundingBox(),E7.copy(s.boundingBox),E7.applyMatrix4(e.matrixWorld),this.union(E7)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$2),$2.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(w4),X3.subVectors(this.max,w4),A7.subVectors(e.a,w4),b7.subVectors(e.b,w4),w7.subVectors(e.c,w4),x1.subVectors(b7,A7),S1.subVectors(w7,b7),z1.subVectors(A7,w7);let t=[0,-x1.z,x1.y,0,-S1.z,S1.y,0,-z1.z,z1.y,x1.z,0,-x1.x,S1.z,0,-S1.x,z1.z,0,-z1.x,-x1.y,x1.x,0,-S1.y,S1.x,0,-z1.y,z1.x,0];return!he(t,A7,b7,w7,X3)||(t=[1,0,0,0,1,0,0,0,1],!he(t,A7,b7,w7,X3))?!1:(Y3.crossVectors(x1,S1),t=[Y3.x,Y3.y,Y3.z],he(t,A7,b7,w7,X3))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$2).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($2).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Q2[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Q2[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Q2[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Q2[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Q2[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Q2[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Q2[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Q2[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Q2),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Q2=[new U,new U,new U,new U,new U,new U,new U,new U],$2=new U,E7=new R1,A7=new U,b7=new U,w7=new U,x1=new U,S1=new U,z1=new U,w4=new U,X3=new U,Y3=new U,G1=new U;function he(i,e,t,n,s){for(let o=0,l=i.length-3;o<=l;o+=3){G1.fromArray(i,o);const c=s.x*Math.abs(G1.x)+s.y*Math.abs(G1.y)+s.z*Math.abs(G1.z),h=e.dot(G1),f=t.dot(G1),d=n.dot(G1);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>c)return!1}return!0}const rv=new R1,T4=new U,fe=new U;class i7{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rv.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;T4.subVectors(e,this.center);const t=T4.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(T4,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fe.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(T4.copy(e.center).add(fe)),this.expandByPoint(T4.copy(e.center).sub(fe))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const e1=new U,de=new U,Z3=new U,M1=new U,pe=new U,q3=new U,me=new U;class B6{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,e1)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=e1.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(e1.copy(this.origin).addScaledVector(this.direction,t),e1.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){de.copy(e).add(t).multiplyScalar(.5),Z3.copy(t).sub(e).normalize(),M1.copy(this.origin).sub(de);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Z3),c=M1.dot(this.direction),h=-M1.dot(Z3),f=M1.lengthSq(),d=Math.abs(1-l*l);let p,m,_,x;if(d>0)if(p=l*h-c,m=l*c-h,x=o*d,p>=0)if(m>=-x)if(m<=x){const S=1/d;p*=S,m*=S,_=p*(p+l*m+2*c)+m*(l*p+m+2*h)+f}else m=o,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*h)+f;else m=-o,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*h)+f;else m<=-x?(p=Math.max(0,-(-l*o+c)),m=p>0?-o:Math.min(Math.max(-o,-h),o),_=-p*p+m*(m+2*h)+f):m<=x?(p=0,m=Math.min(Math.max(-o,-h),o),_=m*(m+2*h)+f):(p=Math.max(0,-(l*o+c)),m=p>0?o:Math.min(Math.max(-o,-h),o),_=-p*p+m*(m+2*h)+f);else m=l>0?-o:o,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(de).addScaledVector(Z3,m),_}intersectSphere(e,t){e1.subVectors(e.center,this.origin);const n=e1.dot(this.direction),s=e1.dot(e1)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,c,h;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),d>=0?(o=(e.min.y-m.y)*d,l=(e.max.y-m.y)*d):(o=(e.max.y-m.y)*d,l=(e.min.y-m.y)*d),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),p>=0?(c=(e.min.z-m.z)*p,h=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,h=(e.min.z-m.z)*p),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,e1)!==null}intersectTriangle(e,t,n,s,o){pe.subVectors(t,e),q3.subVectors(n,e),me.crossVectors(pe,q3);let l=this.direction.dot(me),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;M1.subVectors(this.origin,e);const h=c*this.direction.dot(q3.crossVectors(M1,q3));if(h<0)return null;const f=c*this.direction.dot(pe.cross(M1));if(f<0||h+f>l)return null;const d=-c*M1.dot(me);return d<0?null:this.at(d/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Z5{constructor(){Z5.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,o,l,c,h,f,d,p,m,_,x,S,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=l,g[9]=c,g[13]=h,g[2]=f,g[6]=d,g[10]=p,g[14]=m,g[3]=_,g[7]=x,g[11]=S,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Z5().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/T7.setFromMatrixColumn(e,0).length(),o=1/T7.setFromMatrixColumn(e,1).length(),l=1/T7.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),f=Math.sin(s),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const m=l*d,_=l*p,x=c*d,S=c*p;t[0]=h*d,t[4]=-h*p,t[8]=f,t[1]=_+x*f,t[5]=m-S*f,t[9]=-c*h,t[2]=S-m*f,t[6]=x+_*f,t[10]=l*h}else if(e.order==="YXZ"){const m=h*d,_=h*p,x=f*d,S=f*p;t[0]=m+S*c,t[4]=x*c-_,t[8]=l*f,t[1]=l*p,t[5]=l*d,t[9]=-c,t[2]=_*c-x,t[6]=S+m*c,t[10]=l*h}else if(e.order==="ZXY"){const m=h*d,_=h*p,x=f*d,S=f*p;t[0]=m-S*c,t[4]=-l*p,t[8]=x+_*c,t[1]=_+x*c,t[5]=l*d,t[9]=S-m*c,t[2]=-l*f,t[6]=c,t[10]=l*h}else if(e.order==="ZYX"){const m=l*d,_=l*p,x=c*d,S=c*p;t[0]=h*d,t[4]=x*f-_,t[8]=m*f+S,t[1]=h*p,t[5]=S*f+m,t[9]=_*f-x,t[2]=-f,t[6]=c*h,t[10]=l*h}else if(e.order==="YZX"){const m=l*h,_=l*f,x=c*h,S=c*f;t[0]=h*d,t[4]=S-m*p,t[8]=x*p+_,t[1]=p,t[5]=l*d,t[9]=-c*d,t[2]=-f*d,t[6]=_*p+x,t[10]=m-S*p}else if(e.order==="XZY"){const m=l*h,_=l*f,x=c*h,S=c*f;t[0]=h*d,t[4]=-p,t[8]=f*d,t[1]=m*p+S,t[5]=l*d,t[9]=_*p-x,t[2]=x*p-_,t[6]=c*d,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sv,e,ov)}lookAt(e,t,n){const s=this.elements;return e2.subVectors(e,t),e2.lengthSq()===0&&(e2.z=1),e2.normalize(),E1.crossVectors(n,e2),E1.lengthSq()===0&&(Math.abs(n.z)===1?e2.x+=1e-4:e2.z+=1e-4,e2.normalize(),E1.crossVectors(n,e2)),E1.normalize(),j3.crossVectors(e2,E1),s[0]=E1.x,s[4]=j3.x,s[8]=e2.x,s[1]=E1.y,s[5]=j3.y,s[9]=e2.y,s[2]=E1.z,s[6]=j3.z,s[10]=e2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],c=n[4],h=n[8],f=n[12],d=n[1],p=n[5],m=n[9],_=n[13],x=n[2],S=n[6],y=n[10],g=n[14],P=n[3],E=n[7],L=n[11],R=n[15],B=s[0],G=s[4],q=s[8],b=s[12],C=s[1],X=s[5],j=s[9],H=s[13],Y=s[2],Q=s[6],d0=s[10],J=s[14],e0=s[3],p0=s[7],f0=s[11],P0=s[15];return o[0]=l*B+c*C+h*Y+f*e0,o[4]=l*G+c*X+h*Q+f*p0,o[8]=l*q+c*j+h*d0+f*f0,o[12]=l*b+c*H+h*J+f*P0,o[1]=d*B+p*C+m*Y+_*e0,o[5]=d*G+p*X+m*Q+_*p0,o[9]=d*q+p*j+m*d0+_*f0,o[13]=d*b+p*H+m*J+_*P0,o[2]=x*B+S*C+y*Y+g*e0,o[6]=x*G+S*X+y*Q+g*p0,o[10]=x*q+S*j+y*d0+g*f0,o[14]=x*b+S*H+y*J+g*P0,o[3]=P*B+E*C+L*Y+R*e0,o[7]=P*G+E*X+L*Q+R*p0,o[11]=P*q+E*j+L*d0+R*f0,o[15]=P*b+E*H+L*J+R*P0,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],c=e[5],h=e[9],f=e[13],d=e[2],p=e[6],m=e[10],_=e[14],x=e[3],S=e[7],y=e[11],g=e[15];return x*(+o*h*p-s*f*p-o*c*m+n*f*m+s*c*_-n*h*_)+S*(+t*h*_-t*f*m+o*l*m-s*l*_+s*f*d-o*h*d)+y*(+t*f*p-t*c*_-o*l*p+n*l*_+o*c*d-n*f*d)+g*(-s*c*d-t*h*p+t*c*m+s*l*p-n*l*m+n*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8],p=e[9],m=e[10],_=e[11],x=e[12],S=e[13],y=e[14],g=e[15],P=p*y*f-S*m*f+S*h*_-c*y*_-p*h*g+c*m*g,E=x*m*f-d*y*f-x*h*_+l*y*_+d*h*g-l*m*g,L=d*S*f-x*p*f+x*c*_-l*S*_-d*c*g+l*p*g,R=x*p*h-d*S*h-x*c*m+l*S*m+d*c*y-l*p*y,B=t*P+n*E+s*L+o*R;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/B;return e[0]=P*G,e[1]=(S*m*o-p*y*o-S*s*_+n*y*_+p*s*g-n*m*g)*G,e[2]=(c*y*o-S*h*o+S*s*f-n*y*f-c*s*g+n*h*g)*G,e[3]=(p*h*o-c*m*o-p*s*f+n*m*f+c*s*_-n*h*_)*G,e[4]=E*G,e[5]=(d*y*o-x*m*o+x*s*_-t*y*_-d*s*g+t*m*g)*G,e[6]=(x*h*o-l*y*o-x*s*f+t*y*f+l*s*g-t*h*g)*G,e[7]=(l*m*o-d*h*o+d*s*f-t*m*f-l*s*_+t*h*_)*G,e[8]=L*G,e[9]=(x*p*o-d*S*o-x*n*_+t*S*_+d*n*g-t*p*g)*G,e[10]=(l*S*o-x*c*o+x*n*f-t*S*f-l*n*g+t*c*g)*G,e[11]=(d*c*o-l*p*o-d*n*f+t*p*f+l*n*_-t*c*_)*G,e[12]=R*G,e[13]=(d*S*s-x*p*s+x*n*m-t*S*m-d*n*y+t*p*y)*G,e[14]=(x*c*s-l*S*s-x*n*h+t*S*h+l*n*y-t*c*y)*G,e[15]=(l*p*s-d*c*s+d*n*h-t*p*h-l*n*m+t*c*m)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,c=e.y,h=e.z,f=o*l,d=o*c;return this.set(f*l+n,f*c-s*h,f*h+s*c,0,f*c+s*h,d*c+n,d*h-s*l,0,f*h-s*c,d*h+s*l,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,c=t._z,h=t._w,f=o+o,d=l+l,p=c+c,m=o*f,_=o*d,x=o*p,S=l*d,y=l*p,g=c*p,P=h*f,E=h*d,L=h*p,R=n.x,B=n.y,G=n.z;return s[0]=(1-(S+g))*R,s[1]=(_+L)*R,s[2]=(x-E)*R,s[3]=0,s[4]=(_-L)*B,s[5]=(1-(m+g))*B,s[6]=(y+P)*B,s[7]=0,s[8]=(x+E)*G,s[9]=(y-P)*G,s[10]=(1-(m+S))*G,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=T7.set(s[0],s[1],s[2]).length();const l=T7.set(s[4],s[5],s[6]).length(),c=T7.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],S2.copy(this);const f=1/o,d=1/l,p=1/c;return S2.elements[0]*=f,S2.elements[1]*=f,S2.elements[2]*=f,S2.elements[4]*=d,S2.elements[5]*=d,S2.elements[6]*=d,S2.elements[8]*=p,S2.elements[9]*=p,S2.elements[10]*=p,t.setFromRotationMatrix(S2),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,o,l){const c=this.elements,h=2*o/(t-e),f=2*o/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),m=-(l+o)/(l-o),_=-2*l*o/(l-o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,l){const c=this.elements,h=1/(t-e),f=1/(n-s),d=1/(l-o),p=(t+e)*h,m=(n+s)*f,_=(l+o)*d;return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=-2*d,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const T7=new U,S2=new Z5,sv=new U(0,0,0),ov=new U(1,1,1),E1=new U,j3=new U,e2=new U,Br=new Z5,Or=new u1;class O6{constructor(e=0,t=0,n=0,s=O6.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],f=s[5],d=s[9],p=s[2],m=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(c9(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-c9(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(c9(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-c9(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(c9(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-c9(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Br.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Br,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Or.setFromEuler(this),this.setFromQuaternion(Or,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}O6.DEFAULT_ORDER="XYZ";class ct{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let av=0;const Fr=new U,R7=new u1,t1=new Z5,J3=new U,R4=new U,lv=new U,cv=new u1,zr=new U(1,0,0),Gr=new U(0,1,0),Hr=new U(0,0,1),uv={type:"added"},Wr={type:"removed"};class u9 extends n7{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=B2(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=u9.DEFAULT_UP.clone();const e=new U,t=new O6,n=new u1,s=new U(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Z5},normalMatrix:{value:new C5}}),this.matrix=new Z5,this.matrixWorld=new Z5,this.matrixAutoUpdate=u9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=u9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ct,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return R7.setFromAxisAngle(e,t),this.quaternion.multiply(R7),this}rotateOnWorldAxis(e,t){return R7.setFromAxisAngle(e,t),this.quaternion.premultiply(R7),this}rotateX(e){return this.rotateOnAxis(zr,e)}rotateY(e){return this.rotateOnAxis(Gr,e)}rotateZ(e){return this.rotateOnAxis(Hr,e)}translateOnAxis(e,t){return Fr.copy(e).applyQuaternion(this.quaternion),this.position.add(Fr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zr,e)}translateY(e){return this.translateOnAxis(Gr,e)}translateZ(e){return this.translateOnAxis(Hr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(t1.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?J3.copy(e):J3.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),R4.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?t1.lookAt(R4,J3,this.up):t1.lookAt(J3,R4,this.up),this.quaternion.setFromRotationMatrix(t1),s&&(t1.extractRotation(s.matrixWorld),R7.setFromRotationMatrix(t1),this.quaternion.premultiply(R7.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wr)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Wr)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),t1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),t1.multiply(e.parent.matrixWorld)),e.applyMatrix4(t1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,o=this.children.length;s<o;s++){const l=this.children[s].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R4,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R4,cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++){const c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){const p=h[f];o(e.shapes,p)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(o(e.materials,this.material[h]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(o(e.animations,h))}}if(t){const c=l(e.geometries),h=l(e.materials),f=l(e.textures),d=l(e.images),p=l(e.shapes),m=l(e.skeletons),_=l(e.animations),x=l(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=s,n;function l(c){const h=[];for(const f in c){const d=c[f];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}u9.DEFAULT_UP=new U(0,1,0);u9.DEFAULT_MATRIX_AUTO_UPDATE=!0;u9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const M2=new U,n1=new U,ge=new U,i1=new U,C7=new U,P7=new U,kr=new U,ve=new U,_e=new U,ye=new U;let K3=!1;class p2{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),M2.subVectors(e,t),s.cross(M2);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){M2.subVectors(s,t),n1.subVectors(n,t),ge.subVectors(e,t);const l=M2.dot(M2),c=M2.dot(n1),h=M2.dot(ge),f=n1.dot(n1),d=n1.dot(ge),p=l*f-c*c;if(p===0)return o.set(-2,-1,-1);const m=1/p,_=(f*h-c*d)*m,x=(l*d-c*h)*m;return o.set(1-_-x,x,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,i1),i1.x>=0&&i1.y>=0&&i1.x+i1.y<=1}static getUV(e,t,n,s,o,l,c,h){return K3===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),K3=!0),this.getInterpolation(e,t,n,s,o,l,c,h)}static getInterpolation(e,t,n,s,o,l,c,h){return this.getBarycoord(e,t,n,s,i1),h.setScalar(0),h.addScaledVector(o,i1.x),h.addScaledVector(l,i1.y),h.addScaledVector(c,i1.z),h}static isFrontFacing(e,t,n,s){return M2.subVectors(n,t),n1.subVectors(e,t),M2.cross(n1).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return M2.subVectors(this.c,this.b),n1.subVectors(this.a,this.b),M2.cross(n1).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return p2.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return p2.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,o){return K3===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),K3=!0),p2.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}getInterpolation(e,t,n,s,o){return p2.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return p2.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return p2.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,c;C7.subVectors(s,n),P7.subVectors(o,n),ve.subVectors(e,n);const h=C7.dot(ve),f=P7.dot(ve);if(h<=0&&f<=0)return t.copy(n);_e.subVectors(e,s);const d=C7.dot(_e),p=P7.dot(_e);if(d>=0&&p<=d)return t.copy(s);const m=h*p-d*f;if(m<=0&&h>=0&&d<=0)return l=h/(h-d),t.copy(n).addScaledVector(C7,l);ye.subVectors(e,o);const _=C7.dot(ye),x=P7.dot(ye);if(x>=0&&_<=x)return t.copy(o);const S=_*f-h*x;if(S<=0&&f>=0&&x<=0)return c=f/(f-x),t.copy(n).addScaledVector(P7,c);const y=d*x-_*p;if(y<=0&&p-d>=0&&_-x>=0)return kr.subVectors(o,s),c=(p-d)/(p-d+(_-x)),t.copy(s).addScaledVector(kr,c);const g=1/(y+S+m);return l=S*g,c=m*g,t.copy(n).addScaledVector(C7,l).addScaledVector(P7,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hv=0;class G2 extends n7{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=B2(),this.name="",this.type="Material",this.blending=q7,this.side=w1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oo,this.blendDst=ao,this.blendEquation=k7,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ge,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oe,this.stencilZFail=oe,this.stencilZPass=oe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==q7&&(n.blending=this.blending),this.side!==w1&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _o={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},E2={h:0,s:0,l:0},Q3={h:0,s:0,l:0};function xe(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class d5{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=v5){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,x2.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=x2.workingColorSpace){return this.r=e,this.g=t,this.b=n,x2.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=x2.workingColorSpace){if(e=lt(e,1),t=c9(t,0,1),n=c9(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=xe(l,o,e+1/3),this.g=xe(l,o,e),this.b=xe(l,o,e-1/3)}return x2.toWorkingColorSpace(this,s),this}setStyle(e,t=v5){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=v5){const n=_o[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=J7(e.r),this.g=J7(e.g),this.b=J7(e.b),this}copyLinearToSRGB(e){return this.r=le(e.r),this.g=le(e.g),this.b=le(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=v5){return x2.fromWorkingColorSpace(R9.copy(this),e),Math.round(c9(R9.r*255,0,255))*65536+Math.round(c9(R9.g*255,0,255))*256+Math.round(c9(R9.b*255,0,255))}getHexString(e=v5){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=x2.workingColorSpace){x2.fromWorkingColorSpace(R9.copy(this),t);const n=R9.r,s=R9.g,o=R9.b,l=Math.max(n,s,o),c=Math.min(n,s,o);let h,f;const d=(c+l)/2;if(c===l)h=0,f=0;else{const p=l-c;switch(f=d<=.5?p/(l+c):p/(2-l-c),l){case n:h=(s-o)/p+(s<o?6:0);break;case s:h=(o-n)/p+2;break;case o:h=(n-s)/p+4;break}h/=6}return e.h=h,e.s=f,e.l=d,e}getRGB(e,t=x2.workingColorSpace){return x2.fromWorkingColorSpace(R9.copy(this),t),e.r=R9.r,e.g=R9.g,e.b=R9.b,e}getStyle(e=v5){x2.fromWorkingColorSpace(R9.copy(this),e);const t=R9.r,n=R9.g,s=R9.b;return e!==v5?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(E2),E2.h+=e,E2.s+=t,E2.l+=n,this.setHSL(E2.h,E2.s,E2.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(E2),e.getHSL(Q3);const n=z4(E2.h,Q3.h,t),s=z4(E2.s,Q3.s,t),o=z4(E2.l,Q3.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const R9=new d5;d5.NAMES=_o;class K1 extends G2{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new d5(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=D6,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const o9=new U,$3=new b0;class r9{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xe,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$3.fromBufferAttribute(this,t),$3.applyMatrix3(e),this.setXY(t,$3.x,$3.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)o9.fromBufferAttribute(this,t),o9.applyMatrix3(e),this.setXYZ(t,o9.x,o9.y,o9.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)o9.fromBufferAttribute(this,t),o9.applyMatrix4(e),this.setXYZ(t,o9.x,o9.y,o9.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)o9.fromBufferAttribute(this,t),o9.applyNormalMatrix(e),this.setXYZ(t,o9.x,o9.y,o9.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)o9.fromBufferAttribute(this,t),o9.transformDirection(e),this.setXYZ(t,o9.x,o9.y,o9.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=a1(t,this.array)),t}setX(e,t){return this.normalized&&(t=G5(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=a1(t,this.array)),t}setY(e,t){return this.normalized&&(t=G5(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=a1(t,this.array)),t}setZ(e,t){return this.normalized&&(t=G5(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=a1(t,this.array)),t}setW(e,t){return this.normalized&&(t=G5(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=G5(t,this.array),n=G5(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=G5(t,this.array),n=G5(n,this.array),s=G5(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=G5(t,this.array),n=G5(n,this.array),s=G5(s,this.array),o=G5(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xe&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yo extends r9{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xo extends r9{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class h9 extends r9{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fv=0;const f2=new Z5,Se=new u9,L7=new U,t2=new R1,C4=new R1,m9=new U;class K5 extends n7{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=B2(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(po(e)?xo:yo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new C5().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return f2.makeRotationFromQuaternion(e),this.applyMatrix4(f2),this}rotateX(e){return f2.makeRotationX(e),this.applyMatrix4(f2),this}rotateY(e){return f2.makeRotationY(e),this.applyMatrix4(f2),this}rotateZ(e){return f2.makeRotationZ(e),this.applyMatrix4(f2),this}translate(e,t,n){return f2.makeTranslation(e,t,n),this.applyMatrix4(f2),this}scale(e,t,n){return f2.makeScale(e,t,n),this.applyMatrix4(f2),this}lookAt(e){return Se.lookAt(e),Se.updateMatrix(),this.applyMatrix4(Se.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(L7).negate(),this.translate(L7.x,L7.y,L7.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new h9(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new R1);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];t2.setFromBufferAttribute(o),this.morphTargetsRelative?(m9.addVectors(this.boundingBox.min,t2.min),this.boundingBox.expandByPoint(m9),m9.addVectors(this.boundingBox.max,t2.max),this.boundingBox.expandByPoint(m9)):(this.boundingBox.expandByPoint(t2.min),this.boundingBox.expandByPoint(t2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new i7);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(t2.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const c=t[o];C4.setFromBufferAttribute(c),this.morphTargetsRelative?(m9.addVectors(t2.min,C4.min),t2.expandByPoint(m9),m9.addVectors(t2.max,C4.max),t2.expandByPoint(m9)):(t2.expandByPoint(C4.min),t2.expandByPoint(C4.max))}t2.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)m9.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(m9));if(t)for(let o=0,l=t.length;o<l;o++){const c=t[o],h=this.morphTargetsRelative;for(let f=0,d=c.count;f<d;f++)m9.fromBufferAttribute(c,f),h&&(L7.fromBufferAttribute(e,f),m9.add(L7)),s=Math.max(s,n.distanceToSquared(m9))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,o=t.normal.array,l=t.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new r9(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,f=[],d=[];for(let C=0;C<c;C++)f[C]=new U,d[C]=new U;const p=new U,m=new U,_=new U,x=new b0,S=new b0,y=new b0,g=new U,P=new U;function E(C,X,j){p.fromArray(s,C*3),m.fromArray(s,X*3),_.fromArray(s,j*3),x.fromArray(l,C*2),S.fromArray(l,X*2),y.fromArray(l,j*2),m.sub(p),_.sub(p),S.sub(x),y.sub(x);const H=1/(S.x*y.y-y.x*S.y);isFinite(H)&&(g.copy(m).multiplyScalar(y.y).addScaledVector(_,-S.y).multiplyScalar(H),P.copy(_).multiplyScalar(S.x).addScaledVector(m,-y.x).multiplyScalar(H),f[C].add(g),f[X].add(g),f[j].add(g),d[C].add(P),d[X].add(P),d[j].add(P))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let C=0,X=L.length;C<X;++C){const j=L[C],H=j.start,Y=j.count;for(let Q=H,d0=H+Y;Q<d0;Q+=3)E(n[Q+0],n[Q+1],n[Q+2])}const R=new U,B=new U,G=new U,q=new U;function b(C){G.fromArray(o,C*3),q.copy(G);const X=f[C];R.copy(X),R.sub(G.multiplyScalar(G.dot(X))).normalize(),B.crossVectors(q,X);const H=B.dot(d[C])<0?-1:1;h[C*4]=R.x,h[C*4+1]=R.y,h[C*4+2]=R.z,h[C*4+3]=H}for(let C=0,X=L.length;C<X;++C){const j=L[C],H=j.start,Y=j.count;for(let Q=H,d0=H+Y;Q<d0;Q+=3)b(n[Q+0]),b(n[Q+1]),b(n[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new r9(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const s=new U,o=new U,l=new U,c=new U,h=new U,f=new U,d=new U,p=new U;if(e)for(let m=0,_=e.count;m<_;m+=3){const x=e.getX(m+0),S=e.getX(m+1),y=e.getX(m+2);s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,y),d.subVectors(l,o),p.subVectors(s,o),d.cross(p),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),c.add(d),h.add(d),f.add(d),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(S,h.x,h.y,h.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,_=t.count;m<_;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),d.subVectors(l,o),p.subVectors(s,o),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)m9.fromBufferAttribute(e,t),m9.normalize(),e.setXYZ(t,m9.x,m9.y,m9.z)}toNonIndexed(){function e(c,h){const f=c.array,d=c.itemSize,p=c.normalized,m=new f.constructor(h.length*d);let _=0,x=0;for(let S=0,y=h.length;S<y;S++){c.isInterleavedBufferAttribute?_=h[S]*c.data.stride+c.offset:_=h[S]*d;for(let g=0;g<d;g++)m[x++]=f[_++]}return new r9(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new K5,n=this.index.array,s=this.attributes;for(const c in s){const h=s[c],f=e(h,n);t.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const h=[],f=o[c];for(let d=0,p=f.length;d<p;d++){const m=f[d],_=e(m,n);h.push(_)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],d=[];for(let p=0,m=f.length;p<m;p++){const _=f[p];d.push(_.toJSON(e.data))}d.length>0&&(s[h]=d,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const d=s[f];this.setAttribute(f,d.clone(t))}const o=e.morphAttributes;for(const f in o){const d=[],p=o[f];for(let m=0,_=p.length;m<_;m++)d.push(p[m].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,d=l.length;f<d;f++){const p=l[f];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vr=new Z5,L2=new B6,e6=new i7,Xr=new U,I7=new U,D7=new U,U7=new U,Me=new U,t6=new U,n6=new b0,i6=new b0,r6=new b0,Yr=new U,Zr=new U,qr=new U,s6=new U,o6=new U;class X9 extends u9{constructor(e=new K5,t=new K1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){t6.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const d=c[h],p=o[h];d!==0&&(Me.fromBufferAttribute(p,e),l?t6.addScaledVector(Me,d):t6.addScaledVector(Me.sub(t),d))}t.add(t6)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),e6.copy(n.boundingSphere),e6.applyMatrix4(o),L2.copy(e.ray).recast(e.near),!(e6.containsPoint(L2.origin)===!1&&(L2.intersectSphere(e6,Xr)===null||L2.origin.distanceToSquared(Xr)>(e.far-e.near)**2))&&(Vr.copy(o).invert(),L2.copy(e.ray).applyMatrix4(Vr),!(n.boundingBox!==null&&L2.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const S=p[_],y=o[S.materialIndex],g=Math.max(S.start,m.start),P=Math.min(l.count,Math.min(S.start+S.count,m.start+m.count));for(let E=g,L=P;E<L;E+=3){const R=l.getX(E),B=l.getX(E+1),G=l.getX(E+2);n=a6(this,y,e,L2,h,f,d,R,B,G),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=S.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let S=_,y=x;S<y;S+=3){const g=l.getX(S),P=l.getX(S+1),E=l.getX(S+2);n=a6(this,o,e,L2,h,f,d,g,P,E),n&&(n.faceIndex=Math.floor(S/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const S=p[_],y=o[S.materialIndex],g=Math.max(S.start,m.start),P=Math.min(c.count,Math.min(S.start+S.count,m.start+m.count));for(let E=g,L=P;E<L;E+=3){const R=E,B=E+1,G=E+2;n=a6(this,y,e,L2,h,f,d,R,B,G),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=S.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let S=_,y=x;S<y;S+=3){const g=S,P=S+1,E=S+2;n=a6(this,o,e,L2,h,f,d,g,P,E),n&&(n.faceIndex=Math.floor(S/3),t.push(n))}}}}function dv(i,e,t,n,s,o,l,c){let h;if(e.side===z9?h=n.intersectTriangle(l,o,s,!0,c):h=n.intersectTriangle(s,o,l,e.side===w1,c),h===null)return null;o6.copy(c),o6.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(o6);return f<t.near||f>t.far?null:{distance:f,point:o6.clone(),object:i}}function a6(i,e,t,n,s,o,l,c,h,f){i.getVertexPosition(c,I7),i.getVertexPosition(h,D7),i.getVertexPosition(f,U7);const d=dv(i,e,t,n,I7,D7,U7,s6);if(d){s&&(n6.fromBufferAttribute(s,c),i6.fromBufferAttribute(s,h),r6.fromBufferAttribute(s,f),d.uv=p2.getInterpolation(s6,I7,D7,U7,n6,i6,r6,new b0)),o&&(n6.fromBufferAttribute(o,c),i6.fromBufferAttribute(o,h),r6.fromBufferAttribute(o,f),d.uv1=p2.getInterpolation(s6,I7,D7,U7,n6,i6,r6,new b0),d.uv2=d.uv1),l&&(Yr.fromBufferAttribute(l,c),Zr.fromBufferAttribute(l,h),qr.fromBufferAttribute(l,f),d.normal=p2.getInterpolation(s6,I7,D7,U7,Yr,Zr,qr,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:c,b:h,c:f,normal:new U,materialIndex:0};p2.getNormal(I7,D7,U7,p.normal),d.face=p}return d}class $4 extends K5{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const c=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const h=[],f=[],d=[],p=[];let m=0,_=0;x("z","y","x",-1,-1,n,t,e,l,o,0),x("z","y","x",1,-1,n,t,-e,l,o,1),x("x","z","y",1,1,e,n,t,s,l,2),x("x","z","y",1,-1,e,n,-t,s,l,3),x("x","y","z",1,-1,e,t,n,s,o,4),x("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(h),this.setAttribute("position",new h9(f,3)),this.setAttribute("normal",new h9(d,3)),this.setAttribute("uv",new h9(p,2));function x(S,y,g,P,E,L,R,B,G,q,b){const C=L/G,X=R/q,j=L/2,H=R/2,Y=B/2,Q=G+1,d0=q+1;let J=0,e0=0;const p0=new U;for(let f0=0;f0<d0;f0++){const P0=f0*X-H;for(let L0=0;L0<Q;L0++){const i0=L0*C-j;p0[S]=i0*P,p0[y]=P0*E,p0[g]=Y,f.push(p0.x,p0.y,p0.z),p0[S]=0,p0[y]=0,p0[g]=B>0?1:-1,d.push(p0.x,p0.y,p0.z),p.push(L0/G),p.push(1-f0/q),J+=1}}for(let f0=0;f0<q;f0++)for(let P0=0;P0<G;P0++){const L0=m+P0+Q*f0,i0=m+P0+Q*(f0+1),g0=m+(P0+1)+Q*(f0+1),w0=m+(P0+1)+Q*f0;h.push(L0,i0,w0),h.push(i0,g0,w0),e0+=6}c.addGroup(_,e0,b),_+=e0,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $4(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function n4(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function B9(i){const e={};for(let t=0;t<i.length;t++){const n=n4(i[t]);for(const s in n)e[s]=n[s]}return e}function pv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function So(i){return i.getRenderTarget()===null?i.outputColorSpace:O2}const ut={clone:n4,merge:B9};var mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class T1 extends G2{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=n4(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mo extends u9{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Z5,this.projectionMatrix=new Z5,this.projectionMatrixInverse=new Z5}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class n2 extends Mo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Z4*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(F4*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Z4*2*Math.atan(Math.tan(F4*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(F4*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/h,t-=l.offsetY*n/f,s*=l.width/h,n*=l.height/f}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const N7=-90,B7=1;class vv extends u9{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new n2(N7,B7,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const o=new n2(N7,B7,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const l=new n2(N7,B7,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const c=new n2(N7,B7,e,t);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const h=new n2(N7,B7,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const f=new n2(N7,B7,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,-1),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,o,l,c,h,f]=this.children,d=e.getRenderTarget(),p=e.toneMapping,m=e.xr.enabled;e.toneMapping=l1,e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,o),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,c),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5),e.render(t,f),e.setRenderTarget(d),e.toneMapping=p,e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Eo extends Y9{constructor(e,t,n,s,o,l,c,h,f,d){e=e!==void 0?e:[],t=t!==void 0?t:$7,super(e,t,n,s,o,l,c,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _v extends e7{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(G4("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===j1?v5:J1),this.texture=new Eo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:d2}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $4(5,5,5),o=new T1({name:"CubemapFromEquirect",uniforms:n4(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:z9,blending:A1});o.uniforms.tEquirect.value=t;const l=new X9(s,o),c=t.minFilter;return t.minFilter===X4&&(t.minFilter=d2),new vv(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}const Ee=new U,yv=new U,xv=new C5;class k1{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ee.subVectors(n,t).cross(yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ee),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xv.getNormalMatrix(e),s=this.coplanarPoint(Ee).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const H1=new i7,l6=new U;class ht{constructor(e=new k1,t=new k1,n=new k1,s=new k1,o=new k1,l=new k1){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],o=n[1],l=n[2],c=n[3],h=n[4],f=n[5],d=n[6],p=n[7],m=n[8],_=n[9],x=n[10],S=n[11],y=n[12],g=n[13],P=n[14],E=n[15];return t[0].setComponents(c-s,p-h,S-m,E-y).normalize(),t[1].setComponents(c+s,p+h,S+m,E+y).normalize(),t[2].setComponents(c+o,p+f,S+_,E+g).normalize(),t[3].setComponents(c-o,p-f,S-_,E-g).normalize(),t[4].setComponents(c-l,p-d,S-x,E-P).normalize(),t[5].setComponents(c+l,p+d,S+x,E+P).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),H1.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),H1.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(H1)}intersectsSprite(e){return H1.center.set(0,0,0),H1.radius=.7071067811865476,H1.applyMatrix4(e.matrixWorld),this.intersectsSphere(H1)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(l6.x=s.normal.x>0?e.max.x:e.min.x,l6.y=s.normal.y>0?e.max.y:e.min.y,l6.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(l6)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ao(){let i=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Sv(i,e){const t=e.isWebGL2,n=new WeakMap;function s(f,d){const p=f.array,m=f.usage,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version}}function o(f,d,p){const m=d.array,_=d.updateRange;i.bindBuffer(p,f),_.count===-1?i.bufferSubData(p,0,m):(t?i.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count):i.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m.subarray(_.offset,_.offset+_.count)),_.count=-1),d.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(i.deleteBuffer(d.buffer),n.delete(f))}function h(f,d){if(f.isGLBufferAttribute){const m=n.get(f);(!m||m.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);p===void 0?n.set(f,s(f,d)):p.version<f.version&&(o(p.buffer,f,d),p.version=f.version)}return{get:l,remove:c,update:h}}class K7 extends K5{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,c=Math.floor(n),h=Math.floor(s),f=c+1,d=h+1,p=e/c,m=t/h,_=[],x=[],S=[],y=[];for(let g=0;g<d;g++){const P=g*m-l;for(let E=0;E<f;E++){const L=E*p-o;x.push(L,-P,0),S.push(0,0,1),y.push(E/c),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let P=0;P<c;P++){const E=P+f*g,L=P+f*(g+1),R=P+1+f*(g+1),B=P+1+f*g;_.push(E,L,B),_.push(L,R,B)}this.setIndex(_),this.setAttribute("position",new h9(x,3)),this.setAttribute("normal",new h9(S,3)),this.setAttribute("uv",new h9(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new K7(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rv="vec3 transformed = vec3( position );",Cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Iv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,f_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,v_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,__=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,b_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,D_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,B_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,W_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,fy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,dy=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,py=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ey=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ay=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,by=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,By=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,S5={alphamap_fragment:Mv,alphamap_pars_fragment:Ev,alphatest_fragment:Av,alphatest_pars_fragment:bv,aomap_fragment:wv,aomap_pars_fragment:Tv,begin_vertex:Rv,beginnormal_vertex:Cv,bsdfs:Pv,iridescence_fragment:Lv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Dv,clipping_planes_pars_fragment:Uv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Bv,color_fragment:Ov,color_pars_fragment:Fv,color_pars_vertex:zv,color_vertex:Gv,common:Hv,cube_uv_reflection_fragment:Wv,defaultnormal_vertex:kv,displacementmap_pars_vertex:Vv,displacementmap_vertex:Xv,emissivemap_fragment:Yv,emissivemap_pars_fragment:Zv,encodings_fragment:qv,encodings_pars_fragment:jv,envmap_fragment:Jv,envmap_common_pars_fragment:Kv,envmap_pars_fragment:Qv,envmap_pars_vertex:$v,envmap_physical_pars_fragment:h_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:r_,gradientmap_pars_fragment:s_,lightmap_fragment:o_,lightmap_pars_fragment:a_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:c_,lights_pars_begin:u_,lights_toon_fragment:f_,lights_toon_pars_fragment:d_,lights_phong_fragment:p_,lights_phong_pars_fragment:m_,lights_physical_fragment:g_,lights_physical_pars_fragment:v_,lights_fragment_begin:__,lights_fragment_maps:y_,lights_fragment_end:x_,logdepthbuf_fragment:S_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:A_,map_fragment:b_,map_pars_fragment:w_,map_particle_fragment:T_,map_particle_pars_fragment:R_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:P_,morphcolor_vertex:L_,morphnormal_vertex:I_,morphtarget_pars_vertex:D_,morphtarget_vertex:U_,normal_fragment_begin:N_,normal_fragment_maps:B_,normal_pars_fragment:O_,normal_pars_vertex:F_,normal_vertex:z_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:W_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:V_,output_fragment:X_,packing:Y_,premultiplied_alpha_fragment:Z_,project_vertex:q_,dithering_fragment:j_,dithering_pars_fragment:J_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:ey,shadowmap_vertex:ty,shadowmask_pars_fragment:ny,skinbase_vertex:iy,skinning_pars_vertex:ry,skinning_vertex:sy,skinnormal_vertex:oy,specularmap_fragment:ay,specularmap_pars_fragment:ly,tonemapping_fragment:cy,tonemapping_pars_fragment:uy,transmission_fragment:hy,transmission_pars_fragment:fy,uv_pars_fragment:dy,uv_pars_vertex:py,uv_vertex:my,worldpos_vertex:gy,background_vert:vy,background_frag:_y,backgroundCube_vert:yy,backgroundCube_frag:xy,cube_vert:Sy,cube_frag:My,depth_vert:Ey,depth_frag:Ay,distanceRGBA_vert:by,distanceRGBA_frag:wy,equirect_vert:Ty,equirect_frag:Ry,linedashed_vert:Cy,linedashed_frag:Py,meshbasic_vert:Ly,meshbasic_frag:Iy,meshlambert_vert:Dy,meshlambert_frag:Uy,meshmatcap_vert:Ny,meshmatcap_frag:By,meshnormal_vert:Oy,meshnormal_frag:Fy,meshphong_vert:zy,meshphong_frag:Gy,meshphysical_vert:Hy,meshphysical_frag:Wy,meshtoon_vert:ky,meshtoon_frag:Vy,points_vert:Xy,points_frag:Yy,shadow_vert:Zy,shadow_frag:qy,sprite_vert:jy,sprite_frag:Jy},D0={common:{diffuse:{value:new d5(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new C5},alphaMap:{value:null},alphaMapTransform:{value:new C5},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new C5}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new C5}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new C5}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new C5},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new C5},normalScale:{value:new b0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new C5},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new C5}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new C5}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new C5}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new d5(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new d5(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new C5}},sprite:{diffuse:{value:new d5(16777215)},opacity:{value:1},center:{value:new b0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new C5},alphaMap:{value:null},alphaTest:{value:0}}},V9={basic:{uniforms:B9([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.fog]),vertexShader:S5.meshbasic_vert,fragmentShader:S5.meshbasic_frag},lambert:{uniforms:B9([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new d5(0)}}]),vertexShader:S5.meshlambert_vert,fragmentShader:S5.meshlambert_frag},phong:{uniforms:B9([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new d5(0)},specular:{value:new d5(1118481)},shininess:{value:30}}]),vertexShader:S5.meshphong_vert,fragmentShader:S5.meshphong_frag},standard:{uniforms:B9([D0.common,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.roughnessmap,D0.metalnessmap,D0.fog,D0.lights,{emissive:{value:new d5(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:S5.meshphysical_vert,fragmentShader:S5.meshphysical_frag},toon:{uniforms:B9([D0.common,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.gradientmap,D0.fog,D0.lights,{emissive:{value:new d5(0)}}]),vertexShader:S5.meshtoon_vert,fragmentShader:S5.meshtoon_frag},matcap:{uniforms:B9([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,{matcap:{value:null}}]),vertexShader:S5.meshmatcap_vert,fragmentShader:S5.meshmatcap_frag},points:{uniforms:B9([D0.points,D0.fog]),vertexShader:S5.points_vert,fragmentShader:S5.points_frag},dashed:{uniforms:B9([D0.common,D0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:S5.linedashed_vert,fragmentShader:S5.linedashed_frag},depth:{uniforms:B9([D0.common,D0.displacementmap]),vertexShader:S5.depth_vert,fragmentShader:S5.depth_frag},normal:{uniforms:B9([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,{opacity:{value:1}}]),vertexShader:S5.meshnormal_vert,fragmentShader:S5.meshnormal_frag},sprite:{uniforms:B9([D0.sprite,D0.fog]),vertexShader:S5.sprite_vert,fragmentShader:S5.sprite_frag},background:{uniforms:{uvTransform:{value:new C5},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:S5.background_vert,fragmentShader:S5.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:S5.backgroundCube_vert,fragmentShader:S5.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:S5.cube_vert,fragmentShader:S5.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:S5.equirect_vert,fragmentShader:S5.equirect_frag},distanceRGBA:{uniforms:B9([D0.common,D0.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:S5.distanceRGBA_vert,fragmentShader:S5.distanceRGBA_frag},shadow:{uniforms:B9([D0.lights,D0.fog,{color:{value:new d5(0)},opacity:{value:1}}]),vertexShader:S5.shadow_vert,fragmentShader:S5.shadow_frag}};V9.physical={uniforms:B9([V9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new C5},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new C5},clearcoatNormalScale:{value:new b0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new C5},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new C5},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new C5},sheen:{value:0},sheenColor:{value:new d5(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new C5},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new C5},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new C5},transmissionSamplerSize:{value:new b0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new C5},attenuationDistance:{value:0},attenuationColor:{value:new d5(0)},specularColor:{value:new d5(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new C5},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new C5}}]),vertexShader:S5.meshphysical_vert,fragmentShader:S5.meshphysical_frag};const c6={r:0,b:0,g:0};function Ky(i,e,t,n,s,o,l){const c=new d5(0);let h=o===!0?0:1,f,d,p=null,m=0,_=null;function x(y,g){let P=!1,E=g.isScene===!0?g.background:null;switch(E&&E.isTexture&&(E=(g.backgroundBlurriness>0?t:e).get(E)),E===null?S(c,h):E&&E.isColor&&(S(E,1),P=!0),i.xr.getEnvironmentBlendMode()){case"opaque":P=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,l),P=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,l),P=!0;break}(i.autoClear||P)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===U6)?(d===void 0&&(d=new X9(new $4(1,1,1),new T1({name:"BackgroundCubeMaterial",uniforms:n4(V9.backgroundCube.uniforms),vertexShader:V9.backgroundCube.vertexShader,fragmentShader:V9.backgroundCube.fragmentShader,side:z9,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,G,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=E.colorSpace!==v5,(p!==E||m!==E.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,p=E,m=E.version,_=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new X9(new K7(2,2),new T1({name:"BackgroundMaterial",uniforms:n4(V9.background.uniforms),vertexShader:V9.background.vertexShader,fragmentShader:V9.background.fragmentShader,side:w1,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=E.colorSpace!==v5,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||m!==E.version||_!==i.toneMapping)&&(f.material.needsUpdate=!0,p=E,m=E.version,_=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null))}function S(y,g){y.getRGB(c6,So(i)),n.buffers.color.setClear(c6.r,c6.g,c6.b,g,l)}return{getClearColor:function(){return c},setClearColor:function(y,g=1){c.set(y),h=g,S(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,S(c,h)},render:x}}function Qy(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||o!==null,c={},h=y(null);let f=h,d=!1;function p(Y,Q,d0,J,e0){let p0=!1;if(l){const f0=S(J,d0,Q);f!==f0&&(f=f0,_(f.object)),p0=g(Y,J,d0,e0),p0&&P(Y,J,d0,e0)}else{const f0=Q.wireframe===!0;(f.geometry!==J.id||f.program!==d0.id||f.wireframe!==f0)&&(f.geometry=J.id,f.program=d0.id,f.wireframe=f0,p0=!0)}e0!==null&&t.update(e0,i.ELEMENT_ARRAY_BUFFER),(p0||d)&&(d=!1,q(Y,Q,d0,J),e0!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(e0).buffer))}function m(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function _(Y){return n.isWebGL2?i.bindVertexArray(Y):o.bindVertexArrayOES(Y)}function x(Y){return n.isWebGL2?i.deleteVertexArray(Y):o.deleteVertexArrayOES(Y)}function S(Y,Q,d0){const J=d0.wireframe===!0;let e0=c[Y.id];e0===void 0&&(e0={},c[Y.id]=e0);let p0=e0[Q.id];p0===void 0&&(p0={},e0[Q.id]=p0);let f0=p0[J];return f0===void 0&&(f0=y(m()),p0[J]=f0),f0}function y(Y){const Q=[],d0=[],J=[];for(let e0=0;e0<s;e0++)Q[e0]=0,d0[e0]=0,J[e0]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:d0,attributeDivisors:J,object:Y,attributes:{},index:null}}function g(Y,Q,d0,J){const e0=f.attributes,p0=Q.attributes;let f0=0;const P0=d0.getAttributes();for(const L0 in P0)if(P0[L0].location>=0){const g0=e0[L0];let w0=p0[L0];if(w0===void 0&&(L0==="instanceMatrix"&&Y.instanceMatrix&&(w0=Y.instanceMatrix),L0==="instanceColor"&&Y.instanceColor&&(w0=Y.instanceColor)),g0===void 0||g0.attribute!==w0||w0&&g0.data!==w0.data)return!0;f0++}return f.attributesNum!==f0||f.index!==J}function P(Y,Q,d0,J){const e0={},p0=Q.attributes;let f0=0;const P0=d0.getAttributes();for(const L0 in P0)if(P0[L0].location>=0){let g0=p0[L0];g0===void 0&&(L0==="instanceMatrix"&&Y.instanceMatrix&&(g0=Y.instanceMatrix),L0==="instanceColor"&&Y.instanceColor&&(g0=Y.instanceColor));const w0={};w0.attribute=g0,g0&&g0.data&&(w0.data=g0.data),e0[L0]=w0,f0++}f.attributes=e0,f.attributesNum=f0,f.index=J}function E(){const Y=f.newAttributes;for(let Q=0,d0=Y.length;Q<d0;Q++)Y[Q]=0}function L(Y){R(Y,0)}function R(Y,Q){const d0=f.newAttributes,J=f.enabledAttributes,e0=f.attributeDivisors;d0[Y]=1,J[Y]===0&&(i.enableVertexAttribArray(Y),J[Y]=1),e0[Y]!==Q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,Q),e0[Y]=Q)}function B(){const Y=f.newAttributes,Q=f.enabledAttributes;for(let d0=0,J=Q.length;d0<J;d0++)Q[d0]!==Y[d0]&&(i.disableVertexAttribArray(d0),Q[d0]=0)}function G(Y,Q,d0,J,e0,p0){n.isWebGL2===!0&&(d0===i.INT||d0===i.UNSIGNED_INT)?i.vertexAttribIPointer(Y,Q,d0,e0,p0):i.vertexAttribPointer(Y,Q,d0,J,e0,p0)}function q(Y,Q,d0,J){if(n.isWebGL2===!1&&(Y.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const e0=J.attributes,p0=d0.getAttributes(),f0=Q.defaultAttributeValues;for(const P0 in p0){const L0=p0[P0];if(L0.location>=0){let i0=e0[P0];if(i0===void 0&&(P0==="instanceMatrix"&&Y.instanceMatrix&&(i0=Y.instanceMatrix),P0==="instanceColor"&&Y.instanceColor&&(i0=Y.instanceColor)),i0!==void 0){const g0=i0.normalized,w0=i0.itemSize,I0=t.get(i0);if(I0===void 0)continue;const z=I0.buffer,V0=I0.type,J0=I0.bytesPerElement;if(i0.isInterleavedBufferAttribute){const A0=i0.data,G0=A0.stride,_0=i0.offset;if(A0.isInstancedInterleavedBuffer){for(let s0=0;s0<L0.locationSize;s0++)R(L0.location+s0,A0.meshPerAttribute);Y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=A0.meshPerAttribute*A0.count)}else for(let s0=0;s0<L0.locationSize;s0++)L(L0.location+s0);i.bindBuffer(i.ARRAY_BUFFER,z);for(let s0=0;s0<L0.locationSize;s0++)G(L0.location+s0,w0/L0.locationSize,V0,g0,G0*J0,(_0+w0/L0.locationSize*s0)*J0)}else{if(i0.isInstancedBufferAttribute){for(let A0=0;A0<L0.locationSize;A0++)R(L0.location+A0,i0.meshPerAttribute);Y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=i0.meshPerAttribute*i0.count)}else for(let A0=0;A0<L0.locationSize;A0++)L(L0.location+A0);i.bindBuffer(i.ARRAY_BUFFER,z);for(let A0=0;A0<L0.locationSize;A0++)G(L0.location+A0,w0/L0.locationSize,V0,g0,w0*J0,w0/L0.locationSize*A0*J0)}}else if(f0!==void 0){const g0=f0[P0];if(g0!==void 0)switch(g0.length){case 2:i.vertexAttrib2fv(L0.location,g0);break;case 3:i.vertexAttrib3fv(L0.location,g0);break;case 4:i.vertexAttrib4fv(L0.location,g0);break;default:i.vertexAttrib1fv(L0.location,g0)}}}}B()}function b(){j();for(const Y in c){const Q=c[Y];for(const d0 in Q){const J=Q[d0];for(const e0 in J)x(J[e0].object),delete J[e0];delete Q[d0]}delete c[Y]}}function C(Y){if(c[Y.id]===void 0)return;const Q=c[Y.id];for(const d0 in Q){const J=Q[d0];for(const e0 in J)x(J[e0].object),delete J[e0];delete Q[d0]}delete c[Y.id]}function X(Y){for(const Q in c){const d0=c[Q];if(d0[Y.id]===void 0)continue;const J=d0[Y.id];for(const e0 in J)x(J[e0].object),delete J[e0];delete d0[Y.id]}}function j(){H(),d=!0,f!==h&&(f=h,_(f.object))}function H(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:j,resetDefaultState:H,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:X,initAttributes:E,enableAttribute:L,disableUnusedAttributes:B}}function $y(i,e,t,n){const s=n.isWebGL2;let o;function l(f){o=f}function c(f,d){i.drawArrays(o,f,d),t.update(d,o,1)}function h(f,d,p){if(p===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](o,f,d,p),t.update(d,o,p)}this.setMode=l,this.render=c,this.renderInstances=h}function ex(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,L=l||e.has("OES_texture_float"),R=E&&L,B=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:s,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:P,vertexTextures:E,floatFragmentTextures:L,floatVertexTextures:R,maxSamples:B}}function tx(i){const e=this;let t=null,n=0,s=!1,o=!1;const l=new k1,c=new C5,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||n!==0||s;return s=m,n=p.length,_},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,_){const x=p.clippingPlanes,S=p.clipIntersection,y=p.clipShadows,g=i.get(p);if(!s||x===null||x.length===0||o&&!y)o?d(null):f();else{const P=o?0:n,E=P*4;let L=g.clippingState||null;h.value=L,L=d(x,m,E,_);for(let R=0;R!==E;++R)L[R]=t[R];g.clippingState=L,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,_,x){const S=p!==null?p.length:0;let y=null;if(S!==0){if(y=h.value,x!==!0||y===null){const g=_+S*4,P=m.matrixWorldInverse;c.getNormalMatrix(P),(y===null||y.length<g)&&(y=new Float32Array(g));for(let E=0,L=_;E!==S;++E,L+=4)l.copy(p[E]).applyMatrix4(P,c),l.normal.toArray(y,L),y[L+3]=l.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,y}}function nx(i){let e=new WeakMap;function t(l,c){return c===He?l.mapping=$7:c===We&&(l.mapping=e4),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const c=l.mapping;if(c===He||c===We)if(e.has(l)){const h=e.get(l).texture;return t(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const f=new _v(h.height/2);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",s),t(f.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class ft extends Mo{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,c-=d*this.view.offsetY,h=c-d*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const V7=4,jr=[.125,.215,.35,.446,.526,.582],X1=20,Ae=new ft,Jr=new d5;let be=null;const V1=(1+Math.sqrt(5))/2,O7=1/V1,Kr=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,V1,O7),new U(0,V1,-O7),new U(O7,0,V1),new U(-O7,0,V1),new U(V1,O7,0),new U(-V1,O7,0)];class Qr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){be=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ts(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=es(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(be),e.scissorTest=!1,u6(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$7||e.mapping===e4?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),be=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:d2,minFilter:d2,generateMipmaps:!1,type:Y4,format:b2,colorSpace:O2,depthBuffer:!1},s=$r(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$r(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(o)),this._blurMaterial=rx(o,e,t)}return s}_compileMaterial(e){const t=new X9(this._lodPlanes[0],e);this._renderer.compile(t,Ae)}_sceneToCubeUV(e,t,n,s){const c=new n2(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(Jr),d.toneMapping=l1,d.autoClear=!1;const _=new K1({name:"PMREM.Background",side:z9,depthWrite:!1,depthTest:!1}),x=new X9(new $4,_);let S=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,S=!0):(_.color.copy(Jr),S=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(c.up.set(0,h[g],0),c.lookAt(f[g],0,0)):P===1?(c.up.set(0,0,h[g]),c.lookAt(0,f[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,f[g]));const E=this._cubeSize;u6(s,P*E,g>2?E:0,E,E),d.setRenderTarget(s),S&&d.render(x,c),d.render(e,c)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===$7||e.mapping===e4;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ts()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=es());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new X9(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;u6(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,Ae)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Kr[(s-1)%Kr.length];this._blur(e,s-1,s,o,l)}t.autoClear=n}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,c){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new X9(this._lodPlanes[s],f),m=f.uniforms,_=this._sizeLods[n]-1,x=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*X1-1),S=o/x,y=isFinite(o)?1+Math.floor(d*S):X1;y>X1&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${X1}`);const g=[];let P=0;for(let G=0;G<X1;++G){const q=G/S,b=Math.exp(-q*q/2);g.push(b),G===0?P+=b:G<y&&(P+=2*b)}for(let G=0;G<g.length;G++)g[G]=g[G]/P;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=g,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:E}=this;m.dTheta.value=x,m.mipInt.value=E-n;const L=this._sizeLods[s],R=3*L*(s>E-V7?s-E+V7:0),B=4*(this._cubeSize-L);u6(t,R,B,3*L,2*L),h.setRenderTarget(t),h.render(p,Ae)}}function ix(i){const e=[],t=[],n=[];let s=i;const o=i-V7+1+jr.length;for(let l=0;l<o;l++){const c=Math.pow(2,s);t.push(c);let h=1/c;l>i-V7?h=jr[l-i+V7-1]:l===0&&(h=0),n.push(h);const f=1/(c-2),d=-f,p=1+f,m=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,x=6,S=3,y=2,g=1,P=new Float32Array(S*x*_),E=new Float32Array(y*x*_),L=new Float32Array(g*x*_);for(let B=0;B<_;B++){const G=B%3*2/3-1,q=B>2?0:-1,b=[G,q,0,G+2/3,q,0,G+2/3,q+1,0,G,q,0,G+2/3,q+1,0,G,q+1,0];P.set(b,S*x*B),E.set(m,y*x*B);const C=[B,B,B,B,B,B];L.set(C,g*x*B)}const R=new K5;R.setAttribute("position",new r9(P,S)),R.setAttribute("uv",new r9(E,y)),R.setAttribute("faceIndex",new r9(L,g)),e.push(R),s>V7&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $r(i,e,t){const n=new e7(i,e,t);return n.texture.mapping=U6,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function u6(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rx(i,e,t){const n=new Float32Array(X1),s=new U(0,1,0);return new T1({name:"SphericalGaussianBlur",defines:{n:X1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:A1,depthTest:!1,depthWrite:!1})}function es(){return new T1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:A1,depthTest:!1,depthWrite:!1})}function ts(){return new T1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:A1,depthTest:!1,depthWrite:!1})}function dt(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sx(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===He||h===We,d=h===$7||h===e4;if(f||d)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=e.get(c);return t===null&&(t=new Qr(i)),p=f?t.fromEquirectangular(c,p):t.fromCubemap(c,p),e.set(c,p),p.texture}else{if(e.has(c))return e.get(c).texture;{const p=c.image;if(f&&p&&p.height>0||d&&p&&s(p)){t===null&&(t=new Qr(i));const m=f?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,m),c.addEventListener("dispose",o),m.texture}else return null}}}return c}function s(c){let h=0;const f=6;for(let d=0;d<f;d++)c[d]!==void 0&&h++;return h===f}function o(c){const h=c.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function ox(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ax(i,e,t,n){const s={},o=new WeakMap;function l(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",l),delete s[m.id];const _=o.get(m);_&&(e.remove(_),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,t.memory.geometries++),m}function h(p){const m=p.attributes;for(const x in m)e.update(m[x],i.ARRAY_BUFFER);const _=p.morphAttributes;for(const x in _){const S=_[x];for(let y=0,g=S.length;y<g;y++)e.update(S[y],i.ARRAY_BUFFER)}}function f(p){const m=[],_=p.index,x=p.attributes.position;let S=0;if(_!==null){const P=_.array;S=_.version;for(let E=0,L=P.length;E<L;E+=3){const R=P[E+0],B=P[E+1],G=P[E+2];m.push(R,B,B,G,G,R)}}else{const P=x.array;S=x.version;for(let E=0,L=P.length/3-1;E<L;E+=3){const R=E+0,B=E+1,G=E+2;m.push(R,B,B,G,G,R)}}const y=new(po(m)?xo:yo)(m,1);y.version=S;const g=o.get(p);g&&e.remove(g),o.set(p,y)}function d(p){const m=o.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&f(p)}else f(p);return o.get(p)}return{get:c,update:h,getWireframeAttribute:d}}function lx(i,e,t,n){const s=n.isWebGL2;let o;function l(m){o=m}let c,h;function f(m){c=m.type,h=m.bytesPerElement}function d(m,_){i.drawElements(o,_,c,m*h),t.update(_,o,1)}function p(m,_,x){if(x===0)return;let S,y;if(s)S=i,y="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[y](o,_,c,m*h,x),t.update(_,o,x)}this.setMode=l,this.setIndex=f,this.render=d,this.renderInstances=p}function cx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(o/3);break;case i.LINES:t.lines+=c*(o/2);break;case i.LINE_STRIP:t.lines+=c*(o-1);break;case i.LINE_LOOP:t.lines+=c*o;break;case i.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ux(i,e){return i[0]-e[0]}function hx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function fx(i,e,t){const n={},s=new Float32Array(8),o=new WeakMap,l=new F5,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function h(f,d,p){const m=f.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let S=o.get(d);if(S===void 0||S.count!==x){let P=function(){H.dispose(),o.delete(d),d.removeEventListener("dispose",P)};S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,L=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,B=d.morphAttributes.position||[],G=d.morphAttributes.normal||[],q=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),L===!0&&(b=2),R===!0&&(b=3);let C=d.attributes.position.count*b,X=1;C>e.maxTextureSize&&(X=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const j=new Float32Array(C*X*4*x),H=new vo(j,C,X,x);H.type=Z1,H.needsUpdate=!0;const Y=b*4;for(let Q=0;Q<x;Q++){const d0=B[Q],J=G[Q],e0=q[Q],p0=C*X*4*Q;for(let f0=0;f0<d0.count;f0++){const P0=f0*Y;E===!0&&(l.fromBufferAttribute(d0,f0),j[p0+P0+0]=l.x,j[p0+P0+1]=l.y,j[p0+P0+2]=l.z,j[p0+P0+3]=0),L===!0&&(l.fromBufferAttribute(J,f0),j[p0+P0+4]=l.x,j[p0+P0+5]=l.y,j[p0+P0+6]=l.z,j[p0+P0+7]=0),R===!0&&(l.fromBufferAttribute(e0,f0),j[p0+P0+8]=l.x,j[p0+P0+9]=l.y,j[p0+P0+10]=l.z,j[p0+P0+11]=e0.itemSize===4?l.w:1)}}S={count:x,texture:H,size:new b0(C,X)},o.set(d,S),d.addEventListener("dispose",P)}let y=0;for(let P=0;P<m.length;P++)y+=m[P];const g=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",g),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}else{const _=m===void 0?0:m.length;let x=n[d.id];if(x===void 0||x.length!==_){x=[];for(let E=0;E<_;E++)x[E]=[E,0];n[d.id]=x}for(let E=0;E<_;E++){const L=x[E];L[0]=E,L[1]=m[E]}x.sort(hx);for(let E=0;E<8;E++)E<_&&x[E][1]?(c[E][0]=x[E][0],c[E][1]=x[E][1]):(c[E][0]=Number.MAX_SAFE_INTEGER,c[E][1]=0);c.sort(ux);const S=d.morphAttributes.position,y=d.morphAttributes.normal;let g=0;for(let E=0;E<8;E++){const L=c[E],R=L[0],B=L[1];R!==Number.MAX_SAFE_INTEGER&&B?(S&&d.getAttribute("morphTarget"+E)!==S[R]&&d.setAttribute("morphTarget"+E,S[R]),y&&d.getAttribute("morphNormal"+E)!==y[R]&&d.setAttribute("morphNormal"+E,y[R]),s[E]=B,g+=B):(S&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),y&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),s[E]=0)}const P=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",P),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:h}}function dx(i,e,t,n){let s=new WeakMap;function o(h){const f=n.render.frame,d=h.geometry,p=e.get(h,d);return s.get(p)!==f&&(e.update(p),s.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER)),p}function l(){s=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:l}}const bo=new Y9,wo=new vo,To=new iv,Ro=new Eo,ns=[],is=[],rs=new Float32Array(16),ss=new Float32Array(9),os=new Float32Array(4);function r4(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=ns[s];if(o===void 0&&(o=new Float32Array(s),ns[s]=o),e!==0){n.toArray(o,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(o,c)}return o}function f9(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function d9(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function F6(i,e){let t=is[e];t===void 0&&(t=new Int32Array(e),is[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function px(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f9(t,e))return;i.uniform2fv(this.addr,e),d9(t,e)}}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(f9(t,e))return;i.uniform3fv(this.addr,e),d9(t,e)}}function vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f9(t,e))return;i.uniform4fv(this.addr,e),d9(t,e)}}function _x(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(f9(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),d9(t,e)}else{if(f9(t,n))return;os.set(n),i.uniformMatrix2fv(this.addr,!1,os),d9(t,n)}}function yx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(f9(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),d9(t,e)}else{if(f9(t,n))return;ss.set(n),i.uniformMatrix3fv(this.addr,!1,ss),d9(t,n)}}function xx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(f9(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),d9(t,e)}else{if(f9(t,n))return;rs.set(n),i.uniformMatrix4fv(this.addr,!1,rs),d9(t,n)}}function Sx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f9(t,e))return;i.uniform2iv(this.addr,e),d9(t,e)}}function Ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(f9(t,e))return;i.uniform3iv(this.addr,e),d9(t,e)}}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f9(t,e))return;i.uniform4iv(this.addr,e),d9(t,e)}}function bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f9(t,e))return;i.uniform2uiv(this.addr,e),d9(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(f9(t,e))return;i.uniform3uiv(this.addr,e),d9(t,e)}}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f9(t,e))return;i.uniform4uiv(this.addr,e),d9(t,e)}}function Cx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||bo,s)}function Px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||To,s)}function Lx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ro,s)}function Ix(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wo,s)}function Dx(i){switch(i){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return vx;case 35674:return _x;case 35675:return yx;case 35676:return xx;case 5124:case 35670:return Sx;case 35667:case 35671:return Mx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return bx;case 36294:return wx;case 36295:return Tx;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Ix}}function Ux(i,e){i.uniform1fv(this.addr,e)}function Nx(i,e){const t=r4(e,this.size,2);i.uniform2fv(this.addr,t)}function Bx(i,e){const t=r4(e,this.size,3);i.uniform3fv(this.addr,t)}function Ox(i,e){const t=r4(e,this.size,4);i.uniform4fv(this.addr,t)}function Fx(i,e){const t=r4(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zx(i,e){const t=r4(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gx(i,e){const t=r4(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hx(i,e){i.uniform1iv(this.addr,e)}function Wx(i,e){i.uniform2iv(this.addr,e)}function kx(i,e){i.uniform3iv(this.addr,e)}function Vx(i,e){i.uniform4iv(this.addr,e)}function Xx(i,e){i.uniform1uiv(this.addr,e)}function Yx(i,e){i.uniform2uiv(this.addr,e)}function Zx(i,e){i.uniform3uiv(this.addr,e)}function qx(i,e){i.uniform4uiv(this.addr,e)}function jx(i,e,t){const n=this.cache,s=e.length,o=F6(t,s);f9(n,o)||(i.uniform1iv(this.addr,o),d9(n,o));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||bo,o[l])}function Jx(i,e,t){const n=this.cache,s=e.length,o=F6(t,s);f9(n,o)||(i.uniform1iv(this.addr,o),d9(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||To,o[l])}function Kx(i,e,t){const n=this.cache,s=e.length,o=F6(t,s);f9(n,o)||(i.uniform1iv(this.addr,o),d9(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||Ro,o[l])}function Qx(i,e,t){const n=this.cache,s=e.length,o=F6(t,s);f9(n,o)||(i.uniform1iv(this.addr,o),d9(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||wo,o[l])}function $x(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Bx;case 35666:return Ox;case 35674:return Fx;case 35675:return zx;case 35676:return Gx;case 5124:case 35670:return Hx;case 35667:case 35671:return Wx;case 35668:case 35672:return kx;case 35669:case 35673:return Vx;case 5125:return Xx;case 36294:return Yx;case 36295:return Zx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Qx}}class eS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Dx(t.type)}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=$x(t.type)}}class nS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const c=s[o];c.setValue(e,t[c.id],n)}}}const we=/(\w+)(\])?(\[|\.)?/g;function as(i,e){i.seq.push(e),i.map[e.id]=e}function iS(i,e,t){const n=i.name,s=n.length;for(we.lastIndex=0;;){const o=we.exec(n),l=we.lastIndex;let c=o[1];const h=o[2]==="]",f=o[3];if(h&&(c=c|0),f===void 0||f==="["&&l+2===s){as(t,f===void 0?new eS(c,i,e):new tS(c,i,e));break}else{let p=t.map[c];p===void 0&&(p=new nS(c),as(t,p)),t=p}}}class T6{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);iS(o,l,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const c=t[o],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function ls(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let rS=0;function sS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function oS(i){switch(i){case O2:return["Linear","( value )"];case v5:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function cs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+sS(i.getShaderSource(e),l)}else return s}function aS(i,e){const t=oS(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function lS(i,e){let t;switch(e){case ug:t="Linear";break;case hg:t="Reinhard";break;case fg:t="OptimizedCineon";break;case dg:t="ACESFilmic";break;case pg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(B4).join(`
`)}function uS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),l=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function B4(i){return i!==""}function us(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hs(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function qe(i){return i.replace(fS,dS)}function dS(i,e){const t=S5[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return qe(t)}const pS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fs(i){return i.replace(pS,mS)}function mS(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ds(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===so?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===r1&&(e="SHADOWMAP_TYPE_VSM"),e}function vS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $7:case e4:e="ENVMAP_TYPE_CUBE";break;case U6:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _S(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case e4:e="ENVMAP_MODE_REFRACTION";break}return e}function yS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case D6:e="ENVMAP_BLENDING_MULTIPLY";break;case lg:e="ENVMAP_BLENDING_MIX";break;case cg:e="ENVMAP_BLENDING_ADD";break}return e}function xS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function SS(i,e,t,n){const s=i.getContext(),o=t.defines;let l=t.vertexShader,c=t.fragmentShader;const h=gS(t),f=vS(t),d=_S(t),p=yS(t),m=xS(t),_=t.isWebGL2?"":cS(t),x=uS(o),S=s.createProgram();let y,g,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[x].filter(B4).join(`
`),y.length>0&&(y+=`
`),g=[_,x].filter(B4).join(`
`),g.length>0&&(g+=`
`)):(y=[ds(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(B4).join(`
`),g=[_,ds(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==l1?"#define TONE_MAPPING":"",t.toneMapping!==l1?S5.tonemapping_pars_fragment:"",t.toneMapping!==l1?lS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",S5.encodings_pars_fragment,aS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(B4).join(`
`)),l=qe(l),l=us(l,t),l=hs(l,t),c=qe(c),c=us(c,t),c=hs(c,t),l=fs(l),c=fs(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Ir?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ir?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=P+y+l,L=P+g+c,R=ls(s,s.VERTEX_SHADER,E),B=ls(s,s.FRAGMENT_SHADER,L);if(s.attachShader(S,R),s.attachShader(S,B),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S),i.debug.checkShaderErrors){const b=s.getProgramInfoLog(S).trim(),C=s.getShaderInfoLog(R).trim(),X=s.getShaderInfoLog(B).trim();let j=!0,H=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,R,B);else{const Y=cs(s,R,"vertex"),Q=cs(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+Y+`
`+Q)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(C===""||X==="")&&(H=!1);H&&(this.diagnostics={runnable:j,programLog:b,vertexShader:{log:C,prefix:y},fragmentShader:{log:X,prefix:g}})}s.deleteShader(R),s.deleteShader(B);let G;this.getUniforms=function(){return G===void 0&&(G=new T6(s,S)),G};let q;return this.getAttributes=function(){return q===void 0&&(q=hS(s,S)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.name=t.shaderName,this.id=rS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=B,this}let MS=0;class ES{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AS(e),t.set(e,n)),n}}class AS{constructor(e){this.id=MS++,this.code=e,this.usedTimes=0}}function bS(i,e,t,n,s,o,l){const c=new ct,h=new ES,f=[],d=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function y(b,C,X,j,H){const Y=j.fog,Q=H.geometry,d0=b.isMeshStandardMaterial?j.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||d0),e0=J&&J.mapping===U6?J.image.height:null,p0=x[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const f0=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,P0=f0!==void 0?f0.length:0;let L0=0;Q.morphAttributes.position!==void 0&&(L0=1),Q.morphAttributes.normal!==void 0&&(L0=2),Q.morphAttributes.color!==void 0&&(L0=3);let i0,g0,w0,I0;if(p0){const I5=V9[p0];i0=I5.vertexShader,g0=I5.fragmentShader}else i0=b.vertexShader,g0=b.fragmentShader,h.update(b),w0=h.getVertexShaderID(b),I0=h.getFragmentShaderID(b);const z=i.getRenderTarget(),V0=H.isInstancedMesh===!0,J0=!!b.map,A0=!!b.matcap,G0=!!J,_0=!!b.aoMap,s0=!!b.lightMap,u0=!!b.bumpMap,N0=!!b.normalMap,R0=!!b.displacementMap,X0=!!b.emissiveMap,Z0=!!b.metalnessMap,K0=!!b.roughnessMap,i5=b.clearcoat>0,e5=b.iridescence>0,D=b.sheen>0,T=b.transmission>0,t0=i5&&!!b.clearcoatMap,y0=i5&&!!b.clearcoatNormalMap,x0=i5&&!!b.clearcoatRoughnessMap,T0=e5&&!!b.iridescenceMap,O=e5&&!!b.iridescenceThicknessMap,c0=D&&!!b.sheenColorMap,$=D&&!!b.sheenRoughnessMap,C0=!!b.specularMap,B0=!!b.specularColorMap,Y0=!!b.specularIntensityMap,F0=T&&!!b.transmissionMap,k0=T&&!!b.thicknessMap,r5=!!b.gradientMap,c5=!!b.alphaMap,V5=b.alphaTest>0,W=!!b.extensions,o0=!!Q.attributes.uv1,M0=!!Q.attributes.uv2,z0=!!Q.attributes.uv3;return{isWebGL2:d,shaderID:p0,shaderName:b.type,vertexShader:i0,fragmentShader:g0,defines:b.defines,customVertexShaderID:w0,customFragmentShaderID:I0,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,instancing:V0,instancingColor:V0&&H.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:O2,map:J0,matcap:A0,envMap:G0,envMapMode:G0&&J.mapping,envMapCubeUVHeight:e0,aoMap:_0,lightMap:s0,bumpMap:u0,normalMap:N0,displacementMap:m&&R0,emissiveMap:X0,normalMapObjectSpace:N0&&b.normalMapType===Dg,normalMapTangentSpace:N0&&b.normalMapType===N6,metalnessMap:Z0,roughnessMap:K0,clearcoat:i5,clearcoatMap:t0,clearcoatNormalMap:y0,clearcoatRoughnessMap:x0,iridescence:e5,iridescenceMap:T0,iridescenceThicknessMap:O,sheen:D,sheenColorMap:c0,sheenRoughnessMap:$,specularMap:C0,specularColorMap:B0,specularIntensityMap:Y0,transmission:T,transmissionMap:F0,thicknessMap:k0,gradientMap:r5,opaque:b.transparent===!1&&b.blending===q7,alphaMap:c5,alphaTest:V5,combine:b.combine,mapUv:J0&&S(b.map.channel),aoMapUv:_0&&S(b.aoMap.channel),lightMapUv:s0&&S(b.lightMap.channel),bumpMapUv:u0&&S(b.bumpMap.channel),normalMapUv:N0&&S(b.normalMap.channel),displacementMapUv:R0&&S(b.displacementMap.channel),emissiveMapUv:X0&&S(b.emissiveMap.channel),metalnessMapUv:Z0&&S(b.metalnessMap.channel),roughnessMapUv:K0&&S(b.roughnessMap.channel),clearcoatMapUv:t0&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:y0&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:x0&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:T0&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:O&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:c0&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:$&&S(b.sheenRoughnessMap.channel),specularMapUv:C0&&S(b.specularMap.channel),specularColorMapUv:B0&&S(b.specularColorMap.channel),specularIntensityMapUv:Y0&&S(b.specularIntensityMap.channel),transmissionMapUv:F0&&S(b.transmissionMap.channel),thicknessMapUv:k0&&S(b.thicknessMap.channel),alphaMapUv:c5&&S(b.alphaMap.channel),vertexTangents:N0&&!!Q.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:o0,vertexUv2s:M0,vertexUv3s:z0,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(J0||c5),fog:!!Y,useFog:b.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:P0,morphTextureStride:L0,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:l1,useLegacyLights:i.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===o1,flipSided:b.side===z9,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:W&&b.extensions.derivatives===!0,extensionFragDepth:W&&b.extensions.fragDepth===!0,extensionDrawBuffers:W&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function g(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)C.push(X),C.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(P(C,b),E(C,b),C.push(i.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function P(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function E(b,C){c.disableAll(),C.isWebGL2&&c.enable(0),C.supportsVertexTextures&&c.enable(1),C.instancing&&c.enable(2),C.instancingColor&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.skinning&&c.enable(4),C.morphTargets&&c.enable(5),C.morphNormals&&c.enable(6),C.morphColors&&c.enable(7),C.premultipliedAlpha&&c.enable(8),C.shadowMapEnabled&&c.enable(9),C.useLegacyLights&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),b.push(c.mask)}function L(b){const C=x[b.type];let X;if(C){const j=V9[C];X=ut.clone(j.uniforms)}else X=b.uniforms;return X}function R(b,C){let X;for(let j=0,H=f.length;j<H;j++){const Y=f[j];if(Y.cacheKey===C){X=Y,++X.usedTimes;break}}return X===void 0&&(X=new SS(i,C,b,o),f.push(X)),X}function B(b){if(--b.usedTimes===0){const C=f.indexOf(b);f[C]=f[f.length-1],f.pop(),b.destroy()}}function G(b){h.remove(b)}function q(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:L,acquireProgram:R,releaseProgram:B,releaseShaderCache:G,programs:f,dispose:q}}function wS(){let i=new WeakMap;function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function t(o){i.delete(o)}function n(o,l,c){i.get(o)[l]=c}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function TS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ps(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ms(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(p,m,_,x,S,y){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:_,groupOrder:x,renderOrder:p.renderOrder,z:S,group:y},i[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=_,g.groupOrder=x,g.renderOrder=p.renderOrder,g.z=S,g.group=y),e++,g}function c(p,m,_,x,S,y){const g=l(p,m,_,x,S,y);_.transmission>0?n.push(g):_.transparent===!0?s.push(g):t.push(g)}function h(p,m,_,x,S,y){const g=l(p,m,_,x,S,y);_.transmission>0?n.unshift(g):_.transparent===!0?s.unshift(g):t.unshift(g)}function f(p,m){t.length>1&&t.sort(p||TS),n.length>1&&n.sort(m||ps),s.length>1&&s.sort(m||ps)}function d(){for(let p=e,m=i.length;p<m;p++){const _=i[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:c,unshift:h,finish:d,sort:f}}function RS(){let i=new WeakMap;function e(n,s){const o=i.get(n);let l;return o===void 0?(l=new ms,i.set(n,[l])):s>=o.length?(l=new ms,o.push(l)):l=o[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function CS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new d5};break;case"SpotLight":t={position:new U,direction:new U,color:new d5,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new d5,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new d5,groundColor:new d5};break;case"RectAreaLight":t={color:new d5,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function PS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new b0};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new b0};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new b0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let LS=0;function IS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function DS(i,e){const t=new CS,n=PS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)s.probe.push(new U);const o=new U,l=new Z5,c=new Z5;function h(d,p){let m=0,_=0,x=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let S=0,y=0,g=0,P=0,E=0,L=0,R=0,B=0,G=0,q=0;d.sort(IS);const b=p===!0?Math.PI:1;for(let X=0,j=d.length;X<j;X++){const H=d[X],Y=H.color,Q=H.intensity,d0=H.distance,J=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=Y.r*Q*b,_+=Y.g*Q*b,x+=Y.b*Q*b;else if(H.isLightProbe)for(let e0=0;e0<9;e0++)s.probe[e0].addScaledVector(H.sh.coefficients[e0],Q);else if(H.isDirectionalLight){const e0=t.get(H);if(e0.color.copy(H.color).multiplyScalar(H.intensity*b),H.castShadow){const p0=H.shadow,f0=n.get(H);f0.shadowBias=p0.bias,f0.shadowNormalBias=p0.normalBias,f0.shadowRadius=p0.radius,f0.shadowMapSize=p0.mapSize,s.directionalShadow[S]=f0,s.directionalShadowMap[S]=J,s.directionalShadowMatrix[S]=H.shadow.matrix,L++}s.directional[S]=e0,S++}else if(H.isSpotLight){const e0=t.get(H);e0.position.setFromMatrixPosition(H.matrixWorld),e0.color.copy(Y).multiplyScalar(Q*b),e0.distance=d0,e0.coneCos=Math.cos(H.angle),e0.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),e0.decay=H.decay,s.spot[g]=e0;const p0=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,p0.updateMatrices(H),H.castShadow&&q++),s.spotLightMatrix[g]=p0.matrix,H.castShadow){const f0=n.get(H);f0.shadowBias=p0.bias,f0.shadowNormalBias=p0.normalBias,f0.shadowRadius=p0.radius,f0.shadowMapSize=p0.mapSize,s.spotShadow[g]=f0,s.spotShadowMap[g]=J,B++}g++}else if(H.isRectAreaLight){const e0=t.get(H);e0.color.copy(Y).multiplyScalar(Q),e0.halfWidth.set(H.width*.5,0,0),e0.halfHeight.set(0,H.height*.5,0),s.rectArea[P]=e0,P++}else if(H.isPointLight){const e0=t.get(H);if(e0.color.copy(H.color).multiplyScalar(H.intensity*b),e0.distance=H.distance,e0.decay=H.decay,H.castShadow){const p0=H.shadow,f0=n.get(H);f0.shadowBias=p0.bias,f0.shadowNormalBias=p0.normalBias,f0.shadowRadius=p0.radius,f0.shadowMapSize=p0.mapSize,f0.shadowCameraNear=p0.camera.near,f0.shadowCameraFar=p0.camera.far,s.pointShadow[y]=f0,s.pointShadowMap[y]=J,s.pointShadowMatrix[y]=H.shadow.matrix,R++}s.point[y]=e0,y++}else if(H.isHemisphereLight){const e0=t.get(H);e0.skyColor.copy(H.color).multiplyScalar(Q*b),e0.groundColor.copy(H.groundColor).multiplyScalar(Q*b),s.hemi[E]=e0,E++}}P>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=D0.LTC_FLOAT_1,s.rectAreaLTC2=D0.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=D0.LTC_HALF_1,s.rectAreaLTC2=D0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=_,s.ambient[2]=x;const C=s.hash;(C.directionalLength!==S||C.pointLength!==y||C.spotLength!==g||C.rectAreaLength!==P||C.hemiLength!==E||C.numDirectionalShadows!==L||C.numPointShadows!==R||C.numSpotShadows!==B||C.numSpotMaps!==G)&&(s.directional.length=S,s.spot.length=g,s.rectArea.length=P,s.point.length=y,s.hemi.length=E,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=B+G-q,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=q,C.directionalLength=S,C.pointLength=y,C.spotLength=g,C.rectAreaLength=P,C.hemiLength=E,C.numDirectionalShadows=L,C.numPointShadows=R,C.numSpotShadows=B,C.numSpotMaps=G,s.version=LS++)}function f(d,p){let m=0,_=0,x=0,S=0,y=0;const g=p.matrixWorldInverse;for(let P=0,E=d.length;P<E;P++){const L=d[P];if(L.isDirectionalLight){const R=s.directional[m];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(g),m++}else if(L.isSpotLight){const R=s.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(g),x++}else if(L.isRectAreaLight){const R=s.rectArea[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(g),c.identity(),l.copy(L.matrixWorld),l.premultiply(g),c.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),S++}else if(L.isPointLight){const R=s.point[_];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(g),_++}else if(L.isHemisphereLight){const R=s.hemi[y];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(g),y++}}}return{setup:h,setupView:f,state:s}}function gs(i,e){const t=new DS(i,e),n=[],s=[];function o(){n.length=0,s.length=0}function l(p){n.push(p)}function c(p){s.push(p)}function h(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:o,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:h,setupLightsView:f,pushLight:l,pushShadow:c}}function US(i,e){let t=new WeakMap;function n(o,l=0){const c=t.get(o);let h;return c===void 0?(h=new gs(i,e),t.set(o,[h])):l>=c.length?(h=new gs(i,e),c.push(h)):h=c[l],h}function s(){t=new WeakMap}return{get:n,dispose:s}}class NS extends G2{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BS extends G2{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zS(i,e,t){let n=new ht;const s=new b0,o=new b0,l=new F5,c=new NS({depthPacking:Ig}),h=new BS,f={},d=t.maxTextureSize,p={[w1]:z9,[z9]:w1,[o1]:o1},m=new T1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new b0},radius:{value:4}},vertexShader:OS,fragmentShader:FS}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const x=new K5;x.setAttribute("position",new r9(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new X9(x,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let g=this.type;this.render=function(R,B,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||R.length===0)return;const q=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),X=i.state;X.setBlending(A1),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const j=g!==r1&&this.type===r1,H=g===r1&&this.type!==r1;for(let Y=0,Q=R.length;Y<Q;Y++){const d0=R[Y],J=d0.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",d0,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const e0=J.getFrameExtents();if(s.multiply(e0),o.copy(J.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(o.x=Math.floor(d/e0.x),s.x=o.x*e0.x,J.mapSize.x=o.x),s.y>d&&(o.y=Math.floor(d/e0.y),s.y=o.y*e0.y,J.mapSize.y=o.y)),J.map===null||j===!0||H===!0){const f0=this.type!==r1?{minFilter:O9,magFilter:O9}:{};J.map!==null&&J.map.dispose(),J.map=new e7(s.x,s.y,f0),J.map.texture.name=d0.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const p0=J.getViewportCount();for(let f0=0;f0<p0;f0++){const P0=J.getViewport(f0);l.set(o.x*P0.x,o.y*P0.y,o.x*P0.z,o.y*P0.w),X.viewport(l),J.updateMatrices(d0,f0),n=J.getFrustum(),L(B,G,J.camera,d0,this.type)}J.isPointLightShadow!==!0&&this.type===r1&&P(J,G),J.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(q,b,C)};function P(R,B){const G=e.update(S);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,_.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new e7(s.x,s.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(B,null,G,m,S,null),_.uniforms.shadow_pass.value=R.mapPass.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(B,null,G,_,S,null)}function E(R,B,G,q){let b=null;const C=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)b=C;else if(b=G.isPointLight===!0?h:c,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const X=b.uuid,j=B.uuid;let H=f[X];H===void 0&&(H={},f[X]=H);let Y=H[j];Y===void 0&&(Y=b.clone(),H[j]=Y),b=Y}if(b.visible=B.visible,b.wireframe=B.wireframe,q===r1?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:p[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=i.properties.get(b);X.light=G}return b}function L(R,B,G,q,b){if(R.visible===!1)return;if(R.layers.test(B.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===r1)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);const j=e.update(R),H=R.material;if(Array.isArray(H)){const Y=j.groups;for(let Q=0,d0=Y.length;Q<d0;Q++){const J=Y[Q],e0=H[J.materialIndex];if(e0&&e0.visible){const p0=E(R,e0,q,b);i.renderBufferDirect(G,null,j,p0,R,J)}}}else if(H.visible){const Y=E(R,H,q,b);i.renderBufferDirect(G,null,j,Y,R,null)}}const X=R.children;for(let j=0,H=X.length;j<H;j++)L(X[j],B,G,q,b)}}function GS(i,e,t){const n=t.isWebGL2;function s(){let W=!1;const o0=new F5;let M0=null;const z0=new F5(0,0,0,0);return{setMask:function(q0){M0!==q0&&!W&&(i.colorMask(q0,q0,q0,q0),M0=q0)},setLocked:function(q0){W=q0},setClear:function(q0,I5,L5,X5,r0){r0===!0&&(q0*=X5,I5*=X5,L5*=X5),o0.set(q0,I5,L5,X5),z0.equals(o0)===!1&&(i.clearColor(q0,I5,L5,X5),z0.copy(o0))},reset:function(){W=!1,M0=null,z0.set(-1,0,0,0)}}}function o(){let W=!1,o0=null,M0=null,z0=null;return{setTest:function(q0){q0?z(i.DEPTH_TEST):V0(i.DEPTH_TEST)},setMask:function(q0){o0!==q0&&!W&&(i.depthMask(q0),o0=q0)},setFunc:function(q0){if(M0!==q0){switch(q0){case tg:i.depthFunc(i.NEVER);break;case ng:i.depthFunc(i.ALWAYS);break;case ig:i.depthFunc(i.LESS);break;case Ge:i.depthFunc(i.LEQUAL);break;case rg:i.depthFunc(i.EQUAL);break;case sg:i.depthFunc(i.GEQUAL);break;case og:i.depthFunc(i.GREATER);break;case ag:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}M0=q0}},setLocked:function(q0){W=q0},setClear:function(q0){z0!==q0&&(i.clearDepth(q0),z0=q0)},reset:function(){W=!1,o0=null,M0=null,z0=null}}}function l(){let W=!1,o0=null,M0=null,z0=null,q0=null,I5=null,L5=null,X5=null,r0=null;return{setTest:function(E0){W||(E0?z(i.STENCIL_TEST):V0(i.STENCIL_TEST))},setMask:function(E0){o0!==E0&&!W&&(i.stencilMask(E0),o0=E0)},setFunc:function(E0,H0,t5){(M0!==E0||z0!==H0||q0!==t5)&&(i.stencilFunc(E0,H0,t5),M0=E0,z0=H0,q0=t5)},setOp:function(E0,H0,t5){(I5!==E0||L5!==H0||X5!==t5)&&(i.stencilOp(E0,H0,t5),I5=E0,L5=H0,X5=t5)},setLocked:function(E0){W=E0},setClear:function(E0){r0!==E0&&(i.clearStencil(E0),r0=E0)},reset:function(){W=!1,o0=null,M0=null,z0=null,q0=null,I5=null,L5=null,X5=null,r0=null}}}const c=new s,h=new o,f=new l,d=new WeakMap,p=new WeakMap;let m={},_={},x=new WeakMap,S=[],y=null,g=!1,P=null,E=null,L=null,R=null,B=null,G=null,q=null,b=!1,C=null,X=null,j=null,H=null,Y=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let d0=!1,J=0;const e0=i.getParameter(i.VERSION);e0.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(e0)[1]),d0=J>=1):e0.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(e0)[1]),d0=J>=2);let p0=null,f0={};const P0=i.getParameter(i.SCISSOR_BOX),L0=i.getParameter(i.VIEWPORT),i0=new F5().fromArray(P0),g0=new F5().fromArray(L0);function w0(W,o0,M0,z0){const q0=new Uint8Array(4),I5=i.createTexture();i.bindTexture(W,I5),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let L5=0;L5<M0;L5++)n&&(W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY)?i.texImage3D(o0,0,i.RGBA,1,1,z0,0,i.RGBA,i.UNSIGNED_BYTE,q0):i.texImage2D(o0+L5,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,q0);return I5}const I0={};I0[i.TEXTURE_2D]=w0(i.TEXTURE_2D,i.TEXTURE_2D,1),I0[i.TEXTURE_CUBE_MAP]=w0(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(I0[i.TEXTURE_2D_ARRAY]=w0(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I0[i.TEXTURE_3D]=w0(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),f.setClear(0),z(i.DEPTH_TEST),h.setFunc(Ge),R0(!1),X0(nr),z(i.CULL_FACE),u0(A1);function z(W){m[W]!==!0&&(i.enable(W),m[W]=!0)}function V0(W){m[W]!==!1&&(i.disable(W),m[W]=!1)}function J0(W,o0){return _[W]!==o0?(i.bindFramebuffer(W,o0),_[W]=o0,n&&(W===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=o0),W===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=o0)),!0):!1}function A0(W,o0){let M0=S,z0=!1;if(W)if(M0=x.get(o0),M0===void 0&&(M0=[],x.set(o0,M0)),W.isWebGLMultipleRenderTargets){const q0=W.texture;if(M0.length!==q0.length||M0[0]!==i.COLOR_ATTACHMENT0){for(let I5=0,L5=q0.length;I5<L5;I5++)M0[I5]=i.COLOR_ATTACHMENT0+I5;M0.length=q0.length,z0=!0}}else M0[0]!==i.COLOR_ATTACHMENT0&&(M0[0]=i.COLOR_ATTACHMENT0,z0=!0);else M0[0]!==i.BACK&&(M0[0]=i.BACK,z0=!0);z0&&(t.isWebGL2?i.drawBuffers(M0):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(M0))}function G0(W){return y!==W?(i.useProgram(W),y=W,!0):!1}const _0={[k7]:i.FUNC_ADD,[Vm]:i.FUNC_SUBTRACT,[Xm]:i.FUNC_REVERSE_SUBTRACT};if(n)_0[or]=i.MIN,_0[ar]=i.MAX;else{const W=e.get("EXT_blend_minmax");W!==null&&(_0[or]=W.MIN_EXT,_0[ar]=W.MAX_EXT)}const s0={[Ym]:i.ZERO,[Zm]:i.ONE,[qm]:i.SRC_COLOR,[oo]:i.SRC_ALPHA,[eg]:i.SRC_ALPHA_SATURATE,[Qm]:i.DST_COLOR,[Jm]:i.DST_ALPHA,[jm]:i.ONE_MINUS_SRC_COLOR,[ao]:i.ONE_MINUS_SRC_ALPHA,[$m]:i.ONE_MINUS_DST_COLOR,[Km]:i.ONE_MINUS_DST_ALPHA};function u0(W,o0,M0,z0,q0,I5,L5,X5){if(W===A1){g===!0&&(V0(i.BLEND),g=!1);return}if(g===!1&&(z(i.BLEND),g=!0),W!==km){if(W!==P||X5!==b){if((E!==k7||B!==k7)&&(i.blendEquation(i.FUNC_ADD),E=k7,B=k7),X5)switch(W){case q7:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ir:i.blendFunc(i.ONE,i.ONE);break;case rr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case q7:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ir:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,R=null,G=null,q=null,P=W,b=X5}return}q0=q0||o0,I5=I5||M0,L5=L5||z0,(o0!==E||q0!==B)&&(i.blendEquationSeparate(_0[o0],_0[q0]),E=o0,B=q0),(M0!==L||z0!==R||I5!==G||L5!==q)&&(i.blendFuncSeparate(s0[M0],s0[z0],s0[I5],s0[L5]),L=M0,R=z0,G=I5,q=L5),P=W,b=!1}function N0(W,o0){W.side===o1?V0(i.CULL_FACE):z(i.CULL_FACE);let M0=W.side===z9;o0&&(M0=!M0),R0(M0),W.blending===q7&&W.transparent===!1?u0(A1):u0(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const z0=W.stencilWrite;f.setTest(z0),z0&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),K0(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):V0(i.SAMPLE_ALPHA_TO_COVERAGE)}function R0(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function X0(W){W!==Gm?(z(i.CULL_FACE),W!==X&&(W===nr?i.cullFace(i.BACK):W===Hm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V0(i.CULL_FACE),X=W}function Z0(W){W!==j&&(d0&&i.lineWidth(W),j=W)}function K0(W,o0,M0){W?(z(i.POLYGON_OFFSET_FILL),(H!==o0||Y!==M0)&&(i.polygonOffset(o0,M0),H=o0,Y=M0)):V0(i.POLYGON_OFFSET_FILL)}function i5(W){W?z(i.SCISSOR_TEST):V0(i.SCISSOR_TEST)}function e5(W){W===void 0&&(W=i.TEXTURE0+Q-1),p0!==W&&(i.activeTexture(W),p0=W)}function D(W,o0,M0){M0===void 0&&(p0===null?M0=i.TEXTURE0+Q-1:M0=p0);let z0=f0[M0];z0===void 0&&(z0={type:void 0,texture:void 0},f0[M0]=z0),(z0.type!==W||z0.texture!==o0)&&(p0!==M0&&(i.activeTexture(M0),p0=M0),i.bindTexture(W,o0||I0[W]),z0.type=W,z0.texture=o0)}function T(){const W=f0[p0];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function t0(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function y0(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function x0(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function T0(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function O(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function c0(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function C0(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function B0(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Y0(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function F0(W){i0.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),i0.copy(W))}function k0(W){g0.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),g0.copy(W))}function r5(W,o0){let M0=p.get(o0);M0===void 0&&(M0=new WeakMap,p.set(o0,M0));let z0=M0.get(W);z0===void 0&&(z0=i.getUniformBlockIndex(o0,W.name),M0.set(W,z0))}function c5(W,o0){const z0=p.get(o0).get(W);d.get(o0)!==z0&&(i.uniformBlockBinding(o0,z0,W.__bindingPointIndex),d.set(o0,z0))}function V5(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},p0=null,f0={},_={},x=new WeakMap,S=[],y=null,g=!1,P=null,E=null,L=null,R=null,B=null,G=null,q=null,b=!1,C=null,X=null,j=null,H=null,Y=null,i0.set(0,0,i.canvas.width,i.canvas.height),g0.set(0,0,i.canvas.width,i.canvas.height),c.reset(),h.reset(),f.reset()}return{buffers:{color:c,depth:h,stencil:f},enable:z,disable:V0,bindFramebuffer:J0,drawBuffers:A0,useProgram:G0,setBlending:u0,setMaterial:N0,setFlipSided:R0,setCullFace:X0,setLineWidth:Z0,setPolygonOffset:K0,setScissorTest:i5,activeTexture:e5,bindTexture:D,unbindTexture:T,compressedTexImage2D:t0,compressedTexImage3D:y0,texImage2D:B0,texImage3D:Y0,updateUBOMapping:r5,uniformBlockBinding:c5,texStorage2D:$,texStorage3D:C0,texSubImage2D:x0,texSubImage3D:T0,compressedTexSubImage2D:O,compressedTexSubImage3D:c0,scissor:F0,viewport:k0,reset:V5}}function HS(i,e,t,n,s,o,l){const c=s.isWebGL2,h=s.maxTextures,f=s.maxCubemapSize,d=s.maxTextureSize,p=s.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let S;const y=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(D,T){return g?new OffscreenCanvas(D,T):q4("canvas")}function E(D,T,t0,y0){let x0=1;if((D.width>y0||D.height>y0)&&(x0=y0/Math.max(D.width,D.height)),x0<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const T0=T?fo:Math.floor,O=T0(x0*D.width),c0=T0(x0*D.height);S===void 0&&(S=P(O,c0));const $=t0?P(O,c0):S;return $.width=O,$.height=c0,$.getContext("2d").drawImage(D,0,0,O,c0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+O+"x"+c0+")."),$}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function L(D){return Ze(D.width)&&Ze(D.height)}function R(D){return c?!1:D.wrapS!==A2||D.wrapT!==A2||D.minFilter!==O9&&D.minFilter!==d2}function B(D,T){return D.generateMipmaps&&T&&D.minFilter!==O9&&D.minFilter!==d2}function G(D){i.generateMipmap(D)}function q(D,T,t0,y0,x0=!1){if(c===!1)return T;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let T0=T;return T===i.RED&&(t0===i.FLOAT&&(T0=i.R32F),t0===i.HALF_FLOAT&&(T0=i.R16F),t0===i.UNSIGNED_BYTE&&(T0=i.R8)),T===i.RG&&(t0===i.FLOAT&&(T0=i.RG32F),t0===i.HALF_FLOAT&&(T0=i.RG16F),t0===i.UNSIGNED_BYTE&&(T0=i.RG8)),T===i.RGBA&&(t0===i.FLOAT&&(T0=i.RGBA32F),t0===i.HALF_FLOAT&&(T0=i.RGBA16F),t0===i.UNSIGNED_BYTE&&(T0=y0===v5&&x0===!1?i.SRGB8_ALPHA8:i.RGBA8),t0===i.UNSIGNED_SHORT_4_4_4_4&&(T0=i.RGBA4),t0===i.UNSIGNED_SHORT_5_5_5_1&&(T0=i.RGB5_A1)),(T0===i.R16F||T0===i.R32F||T0===i.RG16F||T0===i.RG32F||T0===i.RGBA16F||T0===i.RGBA32F)&&e.get("EXT_color_buffer_float"),T0}function b(D,T,t0){return B(D,t0)===!0||D.isFramebufferTexture&&D.minFilter!==O9&&D.minFilter!==d2?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function C(D){return D===O9||D===lr||D===ee?i.NEAREST:i.LINEAR}function X(D){const T=D.target;T.removeEventListener("dispose",X),H(T),T.isVideoTexture&&x.delete(T)}function j(D){const T=D.target;T.removeEventListener("dispose",j),Q(T)}function H(D){const T=n.get(D);if(T.__webglInit===void 0)return;const t0=D.source,y0=y.get(t0);if(y0){const x0=y0[T.__cacheKey];x0.usedTimes--,x0.usedTimes===0&&Y(D),Object.keys(y0).length===0&&y.delete(t0)}n.remove(D)}function Y(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const t0=D.source,y0=y.get(t0);delete y0[T.__cacheKey],l.memory.textures--}function Q(D){const T=D.texture,t0=n.get(D),y0=n.get(T);if(y0.__webglTexture!==void 0&&(i.deleteTexture(y0.__webglTexture),l.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let x0=0;x0<6;x0++)i.deleteFramebuffer(t0.__webglFramebuffer[x0]),t0.__webglDepthbuffer&&i.deleteRenderbuffer(t0.__webglDepthbuffer[x0]);else{if(i.deleteFramebuffer(t0.__webglFramebuffer),t0.__webglDepthbuffer&&i.deleteRenderbuffer(t0.__webglDepthbuffer),t0.__webglMultisampledFramebuffer&&i.deleteFramebuffer(t0.__webglMultisampledFramebuffer),t0.__webglColorRenderbuffer)for(let x0=0;x0<t0.__webglColorRenderbuffer.length;x0++)t0.__webglColorRenderbuffer[x0]&&i.deleteRenderbuffer(t0.__webglColorRenderbuffer[x0]);t0.__webglDepthRenderbuffer&&i.deleteRenderbuffer(t0.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let x0=0,T0=T.length;x0<T0;x0++){const O=n.get(T[x0]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),l.memory.textures--),n.remove(T[x0])}n.remove(T),n.remove(D)}let d0=0;function J(){d0=0}function e0(){const D=d0;return D>=h&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+h),d0+=1,D}function p0(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function f0(D,T){const t0=n.get(D);if(D.isVideoTexture&&i5(D),D.isRenderTargetTexture===!1&&D.version>0&&t0.__version!==D.version){const y0=D.image;if(y0===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(y0.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V0(t0,D,T);return}}t.bindTexture(i.TEXTURE_2D,t0.__webglTexture,i.TEXTURE0+T)}function P0(D,T){const t0=n.get(D);if(D.version>0&&t0.__version!==D.version){V0(t0,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,t0.__webglTexture,i.TEXTURE0+T)}function L0(D,T){const t0=n.get(D);if(D.version>0&&t0.__version!==D.version){V0(t0,D,T);return}t.bindTexture(i.TEXTURE_3D,t0.__webglTexture,i.TEXTURE0+T)}function i0(D,T){const t0=n.get(D);if(D.version>0&&t0.__version!==D.version){J0(t0,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,t0.__webglTexture,i.TEXTURE0+T)}const g0={[ke]:i.REPEAT,[A2]:i.CLAMP_TO_EDGE,[Ve]:i.MIRRORED_REPEAT},w0={[O9]:i.NEAREST,[lr]:i.NEAREST_MIPMAP_NEAREST,[ee]:i.NEAREST_MIPMAP_LINEAR,[d2]:i.LINEAR,[mg]:i.LINEAR_MIPMAP_NEAREST,[X4]:i.LINEAR_MIPMAP_LINEAR};function I0(D,T,t0){if(t0?(i.texParameteri(D,i.TEXTURE_WRAP_S,g0[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,g0[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,g0[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,w0[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,w0[T.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==A2||T.wrapT!==A2)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,C(T.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==O9&&T.minFilter!==d2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const y0=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===O9||T.minFilter!==ee&&T.minFilter!==X4||T.type===Z1&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===Y4&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(D,y0.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function z(D,T){let t0=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",X));const y0=T.source;let x0=y.get(y0);x0===void 0&&(x0={},y.set(y0,x0));const T0=p0(T);if(T0!==D.__cacheKey){x0[T0]===void 0&&(x0[T0]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,t0=!0),x0[T0].usedTimes++;const O=x0[D.__cacheKey];O!==void 0&&(x0[D.__cacheKey].usedTimes--,O.usedTimes===0&&Y(T)),D.__cacheKey=T0,D.__webglTexture=x0[T0].texture}return t0}function V0(D,T,t0){let y0=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(y0=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(y0=i.TEXTURE_3D);const x0=z(D,T),T0=T.source;t.bindTexture(y0,D.__webglTexture,i.TEXTURE0+t0);const O=n.get(T0);if(T0.version!==O.__version||x0===!0){t.activeTexture(i.TEXTURE0+t0),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const c0=R(T)&&L(T.image)===!1;let $=E(T.image,c0,!1,d);$=e5(T,$);const C0=L($)||c,B0=o.convert(T.format,T.colorSpace);let Y0=o.convert(T.type),F0=q(T.internalFormat,B0,Y0,T.colorSpace);I0(y0,T,C0);let k0;const r5=T.mipmaps,c5=c&&T.isVideoTexture!==!0,V5=O.__version===void 0||x0===!0,W=b(T,$,C0);if(T.isDepthTexture)F0=i.DEPTH_COMPONENT,c?T.type===Z1?F0=i.DEPTH_COMPONENT32F:T.type===Y1?F0=i.DEPTH_COMPONENT24:T.type===j7?F0=i.DEPTH24_STENCIL8:F0=i.DEPTH_COMPONENT16:T.type===Z1&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===q1&&F0===i.DEPTH_COMPONENT&&T.type!==co&&T.type!==Y1&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Y1,Y0=o.convert(T.type)),T.format===t4&&F0===i.DEPTH_COMPONENT&&(F0=i.DEPTH_STENCIL,T.type!==j7&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=j7,Y0=o.convert(T.type))),V5&&(c5?t.texStorage2D(i.TEXTURE_2D,1,F0,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,F0,$.width,$.height,0,B0,Y0,null));else if(T.isDataTexture)if(r5.length>0&&C0){c5&&V5&&t.texStorage2D(i.TEXTURE_2D,W,F0,r5[0].width,r5[0].height);for(let o0=0,M0=r5.length;o0<M0;o0++)k0=r5[o0],c5?t.texSubImage2D(i.TEXTURE_2D,o0,0,0,k0.width,k0.height,B0,Y0,k0.data):t.texImage2D(i.TEXTURE_2D,o0,F0,k0.width,k0.height,0,B0,Y0,k0.data);T.generateMipmaps=!1}else c5?(V5&&t.texStorage2D(i.TEXTURE_2D,W,F0,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,B0,Y0,$.data)):t.texImage2D(i.TEXTURE_2D,0,F0,$.width,$.height,0,B0,Y0,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){c5&&V5&&t.texStorage3D(i.TEXTURE_2D_ARRAY,W,F0,r5[0].width,r5[0].height,$.depth);for(let o0=0,M0=r5.length;o0<M0;o0++)k0=r5[o0],T.format!==b2?B0!==null?c5?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,o0,0,0,0,k0.width,k0.height,$.depth,B0,k0.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,o0,F0,k0.width,k0.height,$.depth,0,k0.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c5?t.texSubImage3D(i.TEXTURE_2D_ARRAY,o0,0,0,0,k0.width,k0.height,$.depth,B0,Y0,k0.data):t.texImage3D(i.TEXTURE_2D_ARRAY,o0,F0,k0.width,k0.height,$.depth,0,B0,Y0,k0.data)}else{c5&&V5&&t.texStorage2D(i.TEXTURE_2D,W,F0,r5[0].width,r5[0].height);for(let o0=0,M0=r5.length;o0<M0;o0++)k0=r5[o0],T.format!==b2?B0!==null?c5?t.compressedTexSubImage2D(i.TEXTURE_2D,o0,0,0,k0.width,k0.height,B0,k0.data):t.compressedTexImage2D(i.TEXTURE_2D,o0,F0,k0.width,k0.height,0,k0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c5?t.texSubImage2D(i.TEXTURE_2D,o0,0,0,k0.width,k0.height,B0,Y0,k0.data):t.texImage2D(i.TEXTURE_2D,o0,F0,k0.width,k0.height,0,B0,Y0,k0.data)}else if(T.isDataArrayTexture)c5?(V5&&t.texStorage3D(i.TEXTURE_2D_ARRAY,W,F0,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,B0,Y0,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,F0,$.width,$.height,$.depth,0,B0,Y0,$.data);else if(T.isData3DTexture)c5?(V5&&t.texStorage3D(i.TEXTURE_3D,W,F0,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,B0,Y0,$.data)):t.texImage3D(i.TEXTURE_3D,0,F0,$.width,$.height,$.depth,0,B0,Y0,$.data);else if(T.isFramebufferTexture){if(V5)if(c5)t.texStorage2D(i.TEXTURE_2D,W,F0,$.width,$.height);else{let o0=$.width,M0=$.height;for(let z0=0;z0<W;z0++)t.texImage2D(i.TEXTURE_2D,z0,F0,o0,M0,0,B0,Y0,null),o0>>=1,M0>>=1}}else if(r5.length>0&&C0){c5&&V5&&t.texStorage2D(i.TEXTURE_2D,W,F0,r5[0].width,r5[0].height);for(let o0=0,M0=r5.length;o0<M0;o0++)k0=r5[o0],c5?t.texSubImage2D(i.TEXTURE_2D,o0,0,0,B0,Y0,k0):t.texImage2D(i.TEXTURE_2D,o0,F0,B0,Y0,k0);T.generateMipmaps=!1}else c5?(V5&&t.texStorage2D(i.TEXTURE_2D,W,F0,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,B0,Y0,$)):t.texImage2D(i.TEXTURE_2D,0,F0,B0,Y0,$);B(T,C0)&&G(y0),O.__version=T0.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function J0(D,T,t0){if(T.image.length!==6)return;const y0=z(D,T),x0=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+t0);const T0=n.get(x0);if(x0.version!==T0.__version||y0===!0){t.activeTexture(i.TEXTURE0+t0),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const O=T.isCompressedTexture||T.image[0].isCompressedTexture,c0=T.image[0]&&T.image[0].isDataTexture,$=[];for(let o0=0;o0<6;o0++)!O&&!c0?$[o0]=E(T.image[o0],!1,!0,f):$[o0]=c0?T.image[o0].image:T.image[o0],$[o0]=e5(T,$[o0]);const C0=$[0],B0=L(C0)||c,Y0=o.convert(T.format,T.colorSpace),F0=o.convert(T.type),k0=q(T.internalFormat,Y0,F0,T.colorSpace),r5=c&&T.isVideoTexture!==!0,c5=T0.__version===void 0||y0===!0;let V5=b(T,C0,B0);I0(i.TEXTURE_CUBE_MAP,T,B0);let W;if(O){r5&&c5&&t.texStorage2D(i.TEXTURE_CUBE_MAP,V5,k0,C0.width,C0.height);for(let o0=0;o0<6;o0++){W=$[o0].mipmaps;for(let M0=0;M0<W.length;M0++){const z0=W[M0];T.format!==b2?Y0!==null?r5?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,M0,0,0,z0.width,z0.height,Y0,z0.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,M0,k0,z0.width,z0.height,0,z0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):r5?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,M0,0,0,z0.width,z0.height,Y0,F0,z0.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,M0,k0,z0.width,z0.height,0,Y0,F0,z0.data)}}}else{W=T.mipmaps,r5&&c5&&(W.length>0&&V5++,t.texStorage2D(i.TEXTURE_CUBE_MAP,V5,k0,$[0].width,$[0].height));for(let o0=0;o0<6;o0++)if(c0){r5?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,0,0,0,$[o0].width,$[o0].height,Y0,F0,$[o0].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,0,k0,$[o0].width,$[o0].height,0,Y0,F0,$[o0].data);for(let M0=0;M0<W.length;M0++){const q0=W[M0].image[o0].image;r5?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,M0+1,0,0,q0.width,q0.height,Y0,F0,q0.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,M0+1,k0,q0.width,q0.height,0,Y0,F0,q0.data)}}else{r5?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,0,0,0,Y0,F0,$[o0]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,0,k0,Y0,F0,$[o0]);for(let M0=0;M0<W.length;M0++){const z0=W[M0];r5?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,M0+1,0,0,Y0,F0,z0.image[o0]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+o0,M0+1,k0,Y0,F0,z0.image[o0])}}}B(T,B0)&&G(i.TEXTURE_CUBE_MAP),T0.__version=x0.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function A0(D,T,t0,y0,x0){const T0=o.convert(t0.format,t0.colorSpace),O=o.convert(t0.type),c0=q(t0.internalFormat,T0,O,t0.colorSpace);n.get(T).__hasExternalTextures||(x0===i.TEXTURE_3D||x0===i.TEXTURE_2D_ARRAY?t.texImage3D(x0,0,c0,T.width,T.height,T.depth,0,T0,O,null):t.texImage2D(x0,0,c0,T.width,T.height,0,T0,O,null)),t.bindFramebuffer(i.FRAMEBUFFER,D),K0(T)?m.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,y0,x0,n.get(t0).__webglTexture,0,Z0(T)):(x0===i.TEXTURE_2D||x0>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&x0<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,y0,x0,n.get(t0).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function G0(D,T,t0){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let y0=i.DEPTH_COMPONENT16;if(t0||K0(T)){const x0=T.depthTexture;x0&&x0.isDepthTexture&&(x0.type===Z1?y0=i.DEPTH_COMPONENT32F:x0.type===Y1&&(y0=i.DEPTH_COMPONENT24));const T0=Z0(T);K0(T)?m.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,T0,y0,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,T0,y0,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,y0,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const y0=Z0(T);t0&&K0(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,y0,i.DEPTH24_STENCIL8,T.width,T.height):K0(T)?m.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,y0,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{const y0=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let x0=0;x0<y0.length;x0++){const T0=y0[x0],O=o.convert(T0.format,T0.colorSpace),c0=o.convert(T0.type),$=q(T0.internalFormat,O,c0,T0.colorSpace),C0=Z0(T);t0&&K0(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,C0,$,T.width,T.height):K0(T)?m.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C0,$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _0(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),f0(T.depthTexture,0);const y0=n.get(T.depthTexture).__webglTexture,x0=Z0(T);if(T.depthTexture.format===q1)K0(T)?m.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,y0,0,x0):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,y0,0);else if(T.depthTexture.format===t4)K0(T)?m.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,y0,0,x0):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,y0,0);else throw new Error("Unknown depthTexture format")}function s0(D){const T=n.get(D),t0=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(t0)throw new Error("target.depthTexture not supported in Cube render targets");_0(T.__webglFramebuffer,D)}else if(t0){T.__webglDepthbuffer=[];for(let y0=0;y0<6;y0++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[y0]),T.__webglDepthbuffer[y0]=i.createRenderbuffer(),G0(T.__webglDepthbuffer[y0],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),G0(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function u0(D,T,t0){const y0=n.get(D);T!==void 0&&A0(y0.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),t0!==void 0&&s0(D)}function N0(D){const T=D.texture,t0=n.get(D),y0=n.get(T);D.addEventListener("dispose",j),D.isWebGLMultipleRenderTargets!==!0&&(y0.__webglTexture===void 0&&(y0.__webglTexture=i.createTexture()),y0.__version=T.version,l.memory.textures++);const x0=D.isWebGLCubeRenderTarget===!0,T0=D.isWebGLMultipleRenderTargets===!0,O=L(D)||c;if(x0){t0.__webglFramebuffer=[];for(let c0=0;c0<6;c0++)t0.__webglFramebuffer[c0]=i.createFramebuffer()}else{if(t0.__webglFramebuffer=i.createFramebuffer(),T0)if(s.drawBuffers){const c0=D.texture;for(let $=0,C0=c0.length;$<C0;$++){const B0=n.get(c0[$]);B0.__webglTexture===void 0&&(B0.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&D.samples>0&&K0(D)===!1){const c0=T0?T:[T];t0.__webglMultisampledFramebuffer=i.createFramebuffer(),t0.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,t0.__webglMultisampledFramebuffer);for(let $=0;$<c0.length;$++){const C0=c0[$];t0.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,t0.__webglColorRenderbuffer[$]);const B0=o.convert(C0.format,C0.colorSpace),Y0=o.convert(C0.type),F0=q(C0.internalFormat,B0,Y0,C0.colorSpace,D.isXRRenderTarget===!0),k0=Z0(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,k0,F0,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,t0.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(t0.__webglDepthRenderbuffer=i.createRenderbuffer(),G0(t0.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(x0){t.bindTexture(i.TEXTURE_CUBE_MAP,y0.__webglTexture),I0(i.TEXTURE_CUBE_MAP,T,O);for(let c0=0;c0<6;c0++)A0(t0.__webglFramebuffer[c0],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+c0);B(T,O)&&G(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(T0){const c0=D.texture;for(let $=0,C0=c0.length;$<C0;$++){const B0=c0[$],Y0=n.get(B0);t.bindTexture(i.TEXTURE_2D,Y0.__webglTexture),I0(i.TEXTURE_2D,B0,O),A0(t0.__webglFramebuffer,D,B0,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D),B(B0,O)&&G(i.TEXTURE_2D)}t.unbindTexture()}else{let c0=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(c?c0=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(c0,y0.__webglTexture),I0(c0,T,O),A0(t0.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,c0),B(T,O)&&G(c0),t.unbindTexture()}D.depthBuffer&&s0(D)}function R0(D){const T=L(D)||c,t0=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let y0=0,x0=t0.length;y0<x0;y0++){const T0=t0[y0];if(B(T0,T)){const O=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,c0=n.get(T0).__webglTexture;t.bindTexture(O,c0),G(O),t.unbindTexture()}}}function X0(D){if(c&&D.samples>0&&K0(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],t0=D.width,y0=D.height;let x0=i.COLOR_BUFFER_BIT;const T0=[],O=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,c0=n.get(D),$=D.isWebGLMultipleRenderTargets===!0;if($)for(let C0=0;C0<T.length;C0++)t.bindFramebuffer(i.FRAMEBUFFER,c0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C0,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,c0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C0,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,c0.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,c0.__webglFramebuffer);for(let C0=0;C0<T.length;C0++){T0.push(i.COLOR_ATTACHMENT0+C0),D.depthBuffer&&T0.push(O);const B0=c0.__ignoreDepthValues!==void 0?c0.__ignoreDepthValues:!1;if(B0===!1&&(D.depthBuffer&&(x0|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(x0|=i.STENCIL_BUFFER_BIT)),$&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,c0.__webglColorRenderbuffer[C0]),B0===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[O]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[O])),$){const Y0=n.get(T[C0]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y0,0)}i.blitFramebuffer(0,0,t0,y0,0,0,t0,y0,x0,i.NEAREST),_&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,T0)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let C0=0;C0<T.length;C0++){t.bindFramebuffer(i.FRAMEBUFFER,c0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C0,i.RENDERBUFFER,c0.__webglColorRenderbuffer[C0]);const B0=n.get(T[C0]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,c0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C0,i.TEXTURE_2D,B0,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,c0.__webglMultisampledFramebuffer)}}function Z0(D){return Math.min(p,D.samples)}function K0(D){const T=n.get(D);return c&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function i5(D){const T=l.render.frame;x.get(D)!==T&&(x.set(D,T),D.update())}function e5(D,T){const t0=D.colorSpace,y0=D.format,x0=D.type;return D.isCompressedTexture===!0||D.format===Ye||t0!==O2&&t0!==J1&&(t0===v5?c===!1?e.has("EXT_sRGB")===!0&&y0===b2?(D.format=Ye,D.minFilter=d2,D.generateMipmaps=!1):T=mo.sRGBToLinear(T):(y0!==b2||x0!==$1)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",t0)),T}this.allocateTextureUnit=e0,this.resetTextureUnits=J,this.setTexture2D=f0,this.setTexture2DArray=P0,this.setTexture3D=L0,this.setTextureCube=i0,this.rebindTextures=u0,this.setupRenderTarget=N0,this.updateRenderTargetMipmap=R0,this.updateMultisampleRenderTarget=X0,this.setupDepthRenderbuffer=s0,this.setupFrameBufferTexture=A0,this.useMultisampledRTT=K0}function WS(i,e,t){const n=t.isWebGL2;function s(o,l=J1){let c;if(o===$1)return i.UNSIGNED_BYTE;if(o===yg)return i.UNSIGNED_SHORT_4_4_4_4;if(o===xg)return i.UNSIGNED_SHORT_5_5_5_1;if(o===gg)return i.BYTE;if(o===vg)return i.SHORT;if(o===co)return i.UNSIGNED_SHORT;if(o===_g)return i.INT;if(o===Y1)return i.UNSIGNED_INT;if(o===Z1)return i.FLOAT;if(o===Y4)return n?i.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===Sg)return i.ALPHA;if(o===b2)return i.RGBA;if(o===Mg)return i.LUMINANCE;if(o===Eg)return i.LUMINANCE_ALPHA;if(o===q1)return i.DEPTH_COMPONENT;if(o===t4)return i.DEPTH_STENCIL;if(o===Ye)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===Ag)return i.RED;if(o===bg)return i.RED_INTEGER;if(o===wg)return i.RG;if(o===Tg)return i.RG_INTEGER;if(o===Rg)return i.RGBA_INTEGER;if(o===te||o===ne||o===ie||o===re)if(l===v5)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===te)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ne)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ie)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===re)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===te)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ne)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ie)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===re)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===cr||o===ur||o===hr||o===fr)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===cr)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===ur)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===hr)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===fr)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Cg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===dr||o===pr)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===dr)return l===v5?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===pr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===mr||o===gr||o===vr||o===_r||o===yr||o===xr||o===Sr||o===Mr||o===Er||o===Ar||o===br||o===wr||o===Tr||o===Rr)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===mr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===gr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===vr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===_r)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===yr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===xr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Sr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Mr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Er)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Ar)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===br)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===wr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Tr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Rr)return l===v5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===se)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===se)return l===v5?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===Pg||o===Cr||o===Pr||o===Lr)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(o===se)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Cr)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Pr)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lr)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===j7?n?i.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:s}}class kS extends n2{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class g9 extends u9{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VS={type:"move"};class Te{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new g9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new g9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new g9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const S of e.hand.values()){const y=t.getJointPose(S,n),g=this._getHandJoint(f,S);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=d.position.distanceTo(p.position),_=.02,x=.005;f.inputState.pinching&&m>_+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=_-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(VS)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new g9;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class XS extends Y9{constructor(e,t,n,s,o,l,c,h,f,d){if(d=d!==void 0?d:q1,d!==q1&&d!==t4)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===q1&&(n=Y1),n===void 0&&d===t4&&(n=j7),super(null,s,o,l,c,h,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:O9,this.minFilter=h!==void 0?h:O9,this.flipY=!1,this.generateMipmaps=!1}}class YS extends n7{constructor(e,t){super();const n=this;let s=null,o=1,l=null,c="local-floor",h=1,f=null,d=null,p=null,m=null,_=null,x=null;const S=t.getContextAttributes();let y=null,g=null;const P=[],E=[],L=new Set,R=new Map,B=new n2;B.layers.enable(1),B.viewport=new F5;const G=new n2;G.layers.enable(2),G.viewport=new F5;const q=[B,G],b=new kS;b.layers.enable(1),b.layers.enable(2);let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i0){let g0=P[i0];return g0===void 0&&(g0=new Te,P[i0]=g0),g0.getTargetRaySpace()},this.getControllerGrip=function(i0){let g0=P[i0];return g0===void 0&&(g0=new Te,P[i0]=g0),g0.getGripSpace()},this.getHand=function(i0){let g0=P[i0];return g0===void 0&&(g0=new Te,P[i0]=g0),g0.getHandSpace()};function j(i0){const g0=E.indexOf(i0.inputSource);if(g0===-1)return;const w0=P[g0];w0!==void 0&&(w0.update(i0.inputSource,i0.frame,f||l),w0.dispatchEvent({type:i0.type,data:i0.inputSource}))}function H(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let i0=0;i0<P.length;i0++){const g0=E[i0];g0!==null&&(E[i0]=null,P[i0].disconnect(g0))}C=null,X=null,e.setRenderTarget(y),_=null,m=null,p=null,s=null,g=null,L0.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i0){o=i0,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i0){c=i0,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(i0){f=i0},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(i0){if(s=i0,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const g0={antialias:s.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(s,t,g0),s.updateRenderState({baseLayer:_}),g=new e7(_.framebufferWidth,_.framebufferHeight,{format:b2,type:$1,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let g0=null,w0=null,I0=null;S.depth&&(I0=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,g0=S.stencil?t4:q1,w0=S.stencil?j7:Y1);const z={colorFormat:t.RGBA8,depthFormat:I0,scaleFactor:o};p=new XRWebGLBinding(s,t),m=p.createProjectionLayer(z),s.updateRenderState({layers:[m]}),g=new e7(m.textureWidth,m.textureHeight,{format:b2,type:$1,depthTexture:new XS(m.textureWidth,m.textureHeight,w0,void 0,void 0,void 0,void 0,void 0,void 0,g0),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const V0=e.properties.get(g);V0.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await s.requestReferenceSpace(c),L0.setContext(s),L0.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Y(i0){for(let g0=0;g0<i0.removed.length;g0++){const w0=i0.removed[g0],I0=E.indexOf(w0);I0>=0&&(E[I0]=null,P[I0].disconnect(w0))}for(let g0=0;g0<i0.added.length;g0++){const w0=i0.added[g0];let I0=E.indexOf(w0);if(I0===-1){for(let V0=0;V0<P.length;V0++)if(V0>=E.length){E.push(w0),I0=V0;break}else if(E[V0]===null){E[V0]=w0,I0=V0;break}if(I0===-1)break}const z=P[I0];z&&z.connect(w0)}}const Q=new U,d0=new U;function J(i0,g0,w0){Q.setFromMatrixPosition(g0.matrixWorld),d0.setFromMatrixPosition(w0.matrixWorld);const I0=Q.distanceTo(d0),z=g0.projectionMatrix.elements,V0=w0.projectionMatrix.elements,J0=z[14]/(z[10]-1),A0=z[14]/(z[10]+1),G0=(z[9]+1)/z[5],_0=(z[9]-1)/z[5],s0=(z[8]-1)/z[0],u0=(V0[8]+1)/V0[0],N0=J0*s0,R0=J0*u0,X0=I0/(-s0+u0),Z0=X0*-s0;g0.matrixWorld.decompose(i0.position,i0.quaternion,i0.scale),i0.translateX(Z0),i0.translateZ(X0),i0.matrixWorld.compose(i0.position,i0.quaternion,i0.scale),i0.matrixWorldInverse.copy(i0.matrixWorld).invert();const K0=J0+X0,i5=A0+X0,e5=N0-Z0,D=R0+(I0-Z0),T=G0*A0/i5*K0,t0=_0*A0/i5*K0;i0.projectionMatrix.makePerspective(e5,D,T,t0,K0,i5),i0.projectionMatrixInverse.copy(i0.projectionMatrix).invert()}function e0(i0,g0){g0===null?i0.matrixWorld.copy(i0.matrix):i0.matrixWorld.multiplyMatrices(g0.matrixWorld,i0.matrix),i0.matrixWorldInverse.copy(i0.matrixWorld).invert()}this.updateCamera=function(i0){if(s===null)return;b.near=G.near=B.near=i0.near,b.far=G.far=B.far=i0.far,(C!==b.near||X!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,X=b.far);const g0=i0.parent,w0=b.cameras;e0(b,g0);for(let I0=0;I0<w0.length;I0++)e0(w0[I0],g0);w0.length===2?J(b,B,G):b.projectionMatrix.copy(B.projectionMatrix),p0(i0,b,g0)};function p0(i0,g0,w0){w0===null?i0.matrix.copy(g0.matrixWorld):(i0.matrix.copy(w0.matrixWorld),i0.matrix.invert(),i0.matrix.multiply(g0.matrixWorld)),i0.matrix.decompose(i0.position,i0.quaternion,i0.scale),i0.updateMatrixWorld(!0);const I0=i0.children;for(let z=0,V0=I0.length;z<V0;z++)I0[z].updateMatrixWorld(!0);i0.projectionMatrix.copy(g0.projectionMatrix),i0.projectionMatrixInverse.copy(g0.projectionMatrixInverse),i0.isPerspectiveCamera&&(i0.fov=Z4*2*Math.atan(1/i0.projectionMatrix.elements[5]),i0.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&_===null))return h},this.setFoveation=function(i0){h=i0,m!==null&&(m.fixedFoveation=i0),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=i0)},this.getPlanes=function(){return L};let f0=null;function P0(i0,g0){if(d=g0.getViewerPose(f||l),x=g0,d!==null){const w0=d.views;_!==null&&(e.setRenderTargetFramebuffer(g,_.framebuffer),e.setRenderTarget(g));let I0=!1;w0.length!==b.cameras.length&&(b.cameras.length=0,I0=!0);for(let z=0;z<w0.length;z++){const V0=w0[z];let J0=null;if(_!==null)J0=_.getViewport(V0);else{const G0=p.getViewSubImage(m,V0);J0=G0.viewport,z===0&&(e.setRenderTargetTextures(g,G0.colorTexture,m.ignoreDepthValues?void 0:G0.depthStencilTexture),e.setRenderTarget(g))}let A0=q[z];A0===void 0&&(A0=new n2,A0.layers.enable(z),A0.viewport=new F5,q[z]=A0),A0.matrix.fromArray(V0.transform.matrix),A0.matrix.decompose(A0.position,A0.quaternion,A0.scale),A0.projectionMatrix.fromArray(V0.projectionMatrix),A0.projectionMatrixInverse.copy(A0.projectionMatrix).invert(),A0.viewport.set(J0.x,J0.y,J0.width,J0.height),z===0&&(b.matrix.copy(A0.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),I0===!0&&b.cameras.push(A0)}}for(let w0=0;w0<P.length;w0++){const I0=E[w0],z=P[w0];I0!==null&&z!==void 0&&z.update(I0,g0,f||l)}if(f0&&f0(i0,g0),g0.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:g0.detectedPlanes});let w0=null;for(const I0 of L)g0.detectedPlanes.has(I0)||(w0===null&&(w0=[]),w0.push(I0));if(w0!==null)for(const I0 of w0)L.delete(I0),R.delete(I0),n.dispatchEvent({type:"planeremoved",data:I0});for(const I0 of g0.detectedPlanes)if(!L.has(I0))L.add(I0),R.set(I0,g0.lastChangedTime),n.dispatchEvent({type:"planeadded",data:I0});else{const z=R.get(I0);I0.lastChangedTime>z&&(R.set(I0,I0.lastChangedTime),n.dispatchEvent({type:"planechanged",data:I0}))}}x=null}const L0=new Ao;L0.setAnimationLoop(P0),this.setAnimationLoop=function(i0){f0=i0},this.dispose=function(){}}}function ZS(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,So(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,P,E,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(y,g):g.isMeshToonMaterial?(o(y,g),p(y,g)):g.isMeshPhongMaterial?(o(y,g),d(y,g)):g.isMeshStandardMaterial?(o(y,g),m(y,g),g.isMeshPhysicalMaterial&&_(y,g,L)):g.isMeshMatcapMaterial?(o(y,g),x(y,g)):g.isMeshDepthMaterial?o(y,g):g.isMeshDistanceMaterial?(o(y,g),S(y,g)):g.isMeshNormalMaterial?o(y,g):g.isLineBasicMaterial?(l(y,g),g.isLineDashedMaterial&&c(y,g)):g.isPointsMaterial?h(y,g,P,E):g.isSpriteMaterial?f(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===z9&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===z9&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const P=e.get(g).envMap;if(P&&(y.envMap.value=P,y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;const E=i.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*E,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function l(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function c(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,P,E){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*P,y.scale.value=E*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function p(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function m(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function _(y,g,P){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===z9&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function S(y,g){const P=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qS(i,e,t,n){let s={},o={},l=[];const c=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(P,E){const L=E.program;n.uniformBlockBinding(P,L)}function f(P,E){let L=s[P.id];L===void 0&&(x(P),L=d(P),s[P.id]=L,P.addEventListener("dispose",y));const R=E.program;n.updateUBOMapping(P,R);const B=e.render.frame;o[P.id]!==B&&(m(P),o[P.id]=B)}function d(P){const E=p();P.__bindingPointIndex=E;const L=i.createBuffer(),R=P.__size,B=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,R,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,L),L}function p(){for(let P=0;P<c;P++)if(l.indexOf(P)===-1)return l.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const E=s[P.id],L=P.uniforms,R=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let B=0,G=L.length;B<G;B++){const q=L[B];if(_(q,B,R)===!0){const b=q.__offset,C=Array.isArray(q.value)?q.value:[q.value];let X=0;for(let j=0;j<C.length;j++){const H=C[j],Y=S(H);typeof H=="number"?(q.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,b+X,q.__data)):H.isMatrix3?(q.__data[0]=H.elements[0],q.__data[1]=H.elements[1],q.__data[2]=H.elements[2],q.__data[3]=H.elements[0],q.__data[4]=H.elements[3],q.__data[5]=H.elements[4],q.__data[6]=H.elements[5],q.__data[7]=H.elements[0],q.__data[8]=H.elements[6],q.__data[9]=H.elements[7],q.__data[10]=H.elements[8],q.__data[11]=H.elements[0]):(H.toArray(q.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,q.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(P,E,L){const R=P.value;if(L[E]===void 0){if(typeof R=="number")L[E]=R;else{const B=Array.isArray(R)?R:[R],G=[];for(let q=0;q<B.length;q++)G.push(B[q].clone());L[E]=G}return!0}else if(typeof R=="number"){if(L[E]!==R)return L[E]=R,!0}else{const B=Array.isArray(L[E])?L[E]:[L[E]],G=Array.isArray(R)?R:[R];for(let q=0;q<B.length;q++){const b=B[q];if(b.equals(G[q])===!1)return b.copy(G[q]),!0}}return!1}function x(P){const E=P.uniforms;let L=0;const R=16;let B=0;for(let G=0,q=E.length;G<q;G++){const b=E[G],C={boundary:0,storage:0},X=Array.isArray(b.value)?b.value:[b.value];for(let j=0,H=X.length;j<H;j++){const Y=X[j],Q=S(Y);C.boundary+=Q.boundary,C.storage+=Q.storage}if(b.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=L,G>0){B=L%R;const j=R-B;B!==0&&j-C.boundary<0&&(L+=R-B,b.__offset=L)}L+=C.storage}return B=L%R,B>0&&(L+=R-B),P.__size=L,P.__cache={},this}function S(P){const E={boundary:0,storage:0};return typeof P=="number"?(E.boundary=4,E.storage=4):P.isVector2?(E.boundary=8,E.storage=8):P.isVector3||P.isColor?(E.boundary=16,E.storage=12):P.isVector4?(E.boundary=16,E.storage=16):P.isMatrix3?(E.boundary=48,E.storage=48):P.isMatrix4?(E.boundary=64,E.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),E}function y(P){const E=P.target;E.removeEventListener("dispose",y);const L=l.indexOf(E.__bindingPointIndex);l.splice(L,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete o[E.id]}function g(){for(const P in s)i.deleteBuffer(s[P]);l=[],s={},o={}}return{bind:h,update:f,dispose:g}}function jS(){const i=q4("canvas");return i.style.display="block",i}class Co{constructor(e={}){const{canvas:t=jS(),context:n=null,depth:s=!0,stencil:o=!0,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=l;let _=null,x=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=v5,this.useLegacyLights=!0,this.toneMapping=l1,this.toneMappingExposure=1;const g=this;let P=!1,E=0,L=0,R=null,B=-1,G=null;const q=new F5,b=new F5;let C=null,X=t.width,j=t.height,H=1,Y=null,Q=null;const d0=new F5(0,0,X,j),J=new F5(0,0,X,j);let e0=!1;const p0=new ht;let f0=!1,P0=!1,L0=null;const i0=new Z5,g0=new U,w0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function I0(){return R===null?H:1}let z=n;function V0(I,K){for(let a0=0;a0<I.length;a0++){const Z=I[a0],h0=t.getContext(Z,K);if(h0!==null)return h0}return null}try{const I={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${at}`),t.addEventListener("webglcontextlost",k0,!1),t.addEventListener("webglcontextrestored",r5,!1),t.addEventListener("webglcontextcreationerror",c5,!1),z===null){const K=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&K.shift(),z=V0(K,I),z===null)throw V0(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let J0,A0,G0,_0,s0,u0,N0,R0,X0,Z0,K0,i5,e5,D,T,t0,y0,x0,T0,O,c0,$,C0,B0;function Y0(){J0=new ox(z),A0=new ex(z,J0,e),J0.init(A0),$=new WS(z,J0,A0),G0=new GS(z,J0,A0),_0=new cx(z),s0=new wS,u0=new HS(z,J0,G0,s0,A0,$,_0),N0=new nx(g),R0=new sx(g),X0=new Sv(z,A0),C0=new Qy(z,J0,X0,A0),Z0=new ax(z,X0,_0,C0),K0=new dx(z,Z0,X0,_0),T0=new fx(z,A0,u0),t0=new tx(s0),i5=new bS(g,N0,R0,J0,A0,C0,t0),e5=new ZS(g,s0),D=new RS,T=new US(J0,A0),x0=new Ky(g,N0,R0,G0,K0,m,h),y0=new zS(g,K0,A0),B0=new qS(z,_0,A0,G0),O=new $y(z,J0,_0,A0),c0=new lx(z,J0,_0,A0),_0.programs=i5.programs,g.capabilities=A0,g.extensions=J0,g.properties=s0,g.renderLists=D,g.shadowMap=y0,g.state=G0,g.info=_0}Y0();const F0=new YS(g,z);this.xr=F0,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=J0.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=J0.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(X,j,!1))},this.getSize=function(I){return I.set(X,j)},this.setSize=function(I,K,a0=!0){if(F0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=I,j=K,t.width=Math.floor(I*H),t.height=Math.floor(K*H),a0===!0&&(t.style.width=I+"px",t.style.height=K+"px"),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(X*H,j*H).floor()},this.setDrawingBufferSize=function(I,K,a0){X=I,j=K,H=a0,t.width=Math.floor(I*a0),t.height=Math.floor(K*a0),this.setViewport(0,0,I,K)},this.getCurrentViewport=function(I){return I.copy(q)},this.getViewport=function(I){return I.copy(d0)},this.setViewport=function(I,K,a0,Z){I.isVector4?d0.set(I.x,I.y,I.z,I.w):d0.set(I,K,a0,Z),G0.viewport(q.copy(d0).multiplyScalar(H).floor())},this.getScissor=function(I){return I.copy(J)},this.setScissor=function(I,K,a0,Z){I.isVector4?J.set(I.x,I.y,I.z,I.w):J.set(I,K,a0,Z),G0.scissor(b.copy(J).multiplyScalar(H).floor())},this.getScissorTest=function(){return e0},this.setScissorTest=function(I){G0.setScissorTest(e0=I)},this.setOpaqueSort=function(I){Y=I},this.setTransparentSort=function(I){Q=I},this.getClearColor=function(I){return I.copy(x0.getClearColor())},this.setClearColor=function(){x0.setClearColor.apply(x0,arguments)},this.getClearAlpha=function(){return x0.getClearAlpha()},this.setClearAlpha=function(){x0.setClearAlpha.apply(x0,arguments)},this.clear=function(I=!0,K=!0,a0=!0){let Z=0;I&&(Z|=z.COLOR_BUFFER_BIT),K&&(Z|=z.DEPTH_BUFFER_BIT),a0&&(Z|=z.STENCIL_BUFFER_BIT),z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k0,!1),t.removeEventListener("webglcontextrestored",r5,!1),t.removeEventListener("webglcontextcreationerror",c5,!1),D.dispose(),T.dispose(),s0.dispose(),N0.dispose(),R0.dispose(),K0.dispose(),C0.dispose(),B0.dispose(),i5.dispose(),F0.dispose(),F0.removeEventListener("sessionstart",q0),F0.removeEventListener("sessionend",I5),L0&&(L0.dispose(),L0=null),L5.stop()};function k0(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function r5(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const I=_0.autoReset,K=y0.enabled,a0=y0.autoUpdate,Z=y0.needsUpdate,h0=y0.type;Y0(),_0.autoReset=I,y0.enabled=K,y0.autoUpdate=a0,y0.needsUpdate=Z,y0.type=h0}function c5(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function V5(I){const K=I.target;K.removeEventListener("dispose",V5),W(K)}function W(I){o0(I),s0.remove(I)}function o0(I){const K=s0.get(I).programs;K!==void 0&&(K.forEach(function(a0){i5.releaseProgram(a0)}),I.isShaderMaterial&&i5.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,a0,Z,h0,Q0){K===null&&(K=w0);const $0=h0.isMesh&&h0.matrixWorld.determinant()<0,a5=D5(I,K,a0,Z,h0);G0.setMaterial(Z,$0);let p5=a0.index,_5=1;Z.wireframe===!0&&(p5=Z0.getWireframeAttribute(a0),_5=2);const y5=a0.drawRange,M5=a0.attributes.position;let N5=y5.start*_5,s9=(y5.start+y5.count)*_5;Q0!==null&&(N5=Math.max(N5,Q0.start*_5),s9=Math.min(s9,(Q0.start+Q0.count)*_5)),p5!==null?(N5=Math.max(N5,0),s9=Math.min(s9,p5.count)):M5!=null&&(N5=Math.max(N5,0),s9=Math.min(s9,M5.count));const Z9=s9-N5;if(Z9<0||Z9===1/0)return;C0.setup(h0,Z,a5,a0,p5);let i2,Q5=O;if(p5!==null&&(i2=X0.get(p5),Q5=c0,Q5.setIndex(i2)),h0.isMesh)Z.wireframe===!0?(G0.setLineWidth(Z.wireframeLinewidth*I0()),Q5.setMode(z.LINES)):Q5.setMode(z.TRIANGLES);else if(h0.isLine){let b5=Z.linewidth;b5===void 0&&(b5=1),G0.setLineWidth(b5*I0()),h0.isLineSegments?Q5.setMode(z.LINES):h0.isLineLoop?Q5.setMode(z.LINE_LOOP):Q5.setMode(z.LINE_STRIP)}else h0.isPoints?Q5.setMode(z.POINTS):h0.isSprite&&Q5.setMode(z.TRIANGLES);if(h0.isInstancedMesh)Q5.renderInstances(N5,Z9,h0.count);else if(a0.isInstancedBufferGeometry){const b5=a0._maxInstanceCount!==void 0?a0._maxInstanceCount:1/0,s4=Math.min(a0.instanceCount,b5);Q5.renderInstances(N5,Z9,s4)}else Q5.render(N5,Z9)},this.compile=function(I,K){function a0(Z,h0,Q0){Z.transparent===!0&&Z.side===o1&&Z.forceSinglePass===!1?(Z.side=z9,Z.needsUpdate=!0,u5(Z,h0,Q0),Z.side=w1,Z.needsUpdate=!0,u5(Z,h0,Q0),Z.side=o1):u5(Z,h0,Q0)}x=T.get(I),x.init(),y.push(x),I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights(g.useLegacyLights),I.traverse(function(Z){const h0=Z.material;if(h0)if(Array.isArray(h0))for(let Q0=0;Q0<h0.length;Q0++){const $0=h0[Q0];a0($0,I,Z)}else a0(h0,I,Z)}),y.pop(),x=null};let M0=null;function z0(I){M0&&M0(I)}function q0(){L5.stop()}function I5(){L5.start()}const L5=new Ao;L5.setAnimationLoop(z0),typeof self<"u"&&L5.setContext(self),this.setAnimationLoop=function(I){M0=I,F0.setAnimationLoop(I),I===null?L5.stop():L5.start()},F0.addEventListener("sessionstart",q0),F0.addEventListener("sessionend",I5),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),F0.enabled===!0&&F0.isPresenting===!0&&(F0.cameraAutoUpdate===!0&&F0.updateCamera(K),K=F0.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,K,R),x=T.get(I,y.length),x.init(),y.push(x),i0.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),p0.setFromProjectionMatrix(i0),P0=this.localClippingEnabled,f0=t0.init(this.clippingPlanes,P0),_=D.get(I,S.length),_.init(),S.push(_),X5(I,K,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Y,Q),f0===!0&&t0.beginShadows();const a0=x.state.shadowsArray;if(y0.render(a0,I,K),f0===!0&&t0.endShadows(),this.info.autoReset===!0&&this.info.reset(),x0.render(_,I),x.setupLights(g.useLegacyLights),K.isArrayCamera){const Z=K.cameras;for(let h0=0,Q0=Z.length;h0<Q0;h0++){const $0=Z[h0];r0(_,I,$0,$0.viewport)}}else r0(_,I,K);R!==null&&(u0.updateMultisampleRenderTarget(R),u0.updateRenderTargetMipmap(R)),I.isScene===!0&&I.onAfterRender(g,I,K),C0.resetDefaultState(),B=-1,G=null,y.pop(),y.length>0?x=y[y.length-1]:x=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function X5(I,K,a0,Z){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)a0=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||p0.intersectsSprite(I)){Z&&g0.setFromMatrixPosition(I.matrixWorld).applyMatrix4(i0);const $0=K0.update(I),a5=I.material;a5.visible&&_.push(I,$0,a5,a0,g0.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||p0.intersectsObject(I))){I.isSkinnedMesh&&I.skeleton.frame!==_0.render.frame&&(I.skeleton.update(),I.skeleton.frame=_0.render.frame);const $0=K0.update(I),a5=I.material;if(Z&&($0.boundingSphere===null&&$0.computeBoundingSphere(),g0.copy($0.boundingSphere.center).applyMatrix4(I.matrixWorld).applyMatrix4(i0)),Array.isArray(a5)){const p5=$0.groups;for(let _5=0,y5=p5.length;_5<y5;_5++){const M5=p5[_5],N5=a5[M5.materialIndex];N5&&N5.visible&&_.push(I,$0,N5,a0,g0.z,M5)}}else a5.visible&&_.push(I,$0,a5,a0,g0.z,null)}}const Q0=I.children;for(let $0=0,a5=Q0.length;$0<a5;$0++)X5(Q0[$0],K,a0,Z)}function r0(I,K,a0,Z){const h0=I.opaque,Q0=I.transmissive,$0=I.transparent;x.setupLightsView(a0),f0===!0&&t0.setGlobalState(g.clippingPlanes,a0),Q0.length>0&&E0(h0,Q0,K,a0),Z&&G0.viewport(q.copy(Z)),h0.length>0&&H0(h0,K,a0),Q0.length>0&&H0(Q0,K,a0),$0.length>0&&H0($0,K,a0),G0.buffers.depth.setTest(!0),G0.buffers.depth.setMask(!0),G0.buffers.color.setMask(!0),G0.setPolygonOffset(!1)}function E0(I,K,a0,Z){if(L0===null){const a5=A0.isWebGL2;L0=new e7(1024,1024,{generateMipmaps:!0,type:J0.has("EXT_color_buffer_half_float")?Y4:$1,minFilter:X4,samples:a5&&c===!0?4:0})}const h0=g.getRenderTarget();g.setRenderTarget(L0),g.clear();const Q0=g.toneMapping;g.toneMapping=l1,H0(I,a0,Z),u0.updateMultisampleRenderTarget(L0),u0.updateRenderTargetMipmap(L0);let $0=!1;for(let a5=0,p5=K.length;a5<p5;a5++){const _5=K[a5],y5=_5.object,M5=_5.geometry,N5=_5.material,s9=_5.group;if(N5.side===o1&&y5.layers.test(Z.layers)){const Z9=N5.side;N5.side=z9,N5.needsUpdate=!0,t5(y5,a0,Z,M5,N5,s9),N5.side=Z9,N5.needsUpdate=!0,$0=!0}}$0===!0&&(u0.updateMultisampleRenderTarget(L0),u0.updateRenderTargetMipmap(L0)),g.setRenderTarget(h0),g.toneMapping=Q0}function H0(I,K,a0){const Z=K.isScene===!0?K.overrideMaterial:null;for(let h0=0,Q0=I.length;h0<Q0;h0++){const $0=I[h0],a5=$0.object,p5=$0.geometry,_5=Z===null?$0.material:Z,y5=$0.group;a5.layers.test(a0.layers)&&t5(a5,K,a0,p5,_5,y5)}}function t5(I,K,a0,Z,h0,Q0){I.onBeforeRender(g,K,a0,Z,h0,Q0),I.modelViewMatrix.multiplyMatrices(a0.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),h0.onBeforeRender(g,K,a0,Z,I,Q0),h0.transparent===!0&&h0.side===o1&&h0.forceSinglePass===!1?(h0.side=z9,h0.needsUpdate=!0,g.renderBufferDirect(a0,K,Z,h0,I,Q0),h0.side=w1,h0.needsUpdate=!0,g.renderBufferDirect(a0,K,Z,h0,I,Q0),h0.side=o1):g.renderBufferDirect(a0,K,Z,h0,I,Q0),I.onAfterRender(g,K,a0,Z,h0,Q0)}function u5(I,K,a0){K.isScene!==!0&&(K=w0);const Z=s0.get(I),h0=x.state.lights,Q0=x.state.shadowsArray,$0=h0.state.version,a5=i5.getParameters(I,h0.state,Q0,K,a0),p5=i5.getProgramCacheKey(a5);let _5=Z.programs;Z.environment=I.isMeshStandardMaterial?K.environment:null,Z.fog=K.fog,Z.envMap=(I.isMeshStandardMaterial?R0:N0).get(I.envMap||Z.environment),_5===void 0&&(I.addEventListener("dispose",V5),_5=new Map,Z.programs=_5);let y5=_5.get(p5);if(y5!==void 0){if(Z.currentProgram===y5&&Z.lightsStateVersion===$0)return l5(I,a5),y5}else a5.uniforms=i5.getUniforms(I),I.onBuild(a0,a5,g),I.onBeforeCompile(a5,g),y5=i5.acquireProgram(a5,p5),_5.set(p5,y5),Z.uniforms=a5.uniforms;const M5=Z.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(M5.clippingPlanes=t0.uniform),l5(I,a5),Z.needsLights=E9(I),Z.lightsStateVersion=$0,Z.needsLights&&(M5.ambientLightColor.value=h0.state.ambient,M5.lightProbe.value=h0.state.probe,M5.directionalLights.value=h0.state.directional,M5.directionalLightShadows.value=h0.state.directionalShadow,M5.spotLights.value=h0.state.spot,M5.spotLightShadows.value=h0.state.spotShadow,M5.rectAreaLights.value=h0.state.rectArea,M5.ltc_1.value=h0.state.rectAreaLTC1,M5.ltc_2.value=h0.state.rectAreaLTC2,M5.pointLights.value=h0.state.point,M5.pointLightShadows.value=h0.state.pointShadow,M5.hemisphereLights.value=h0.state.hemi,M5.directionalShadowMap.value=h0.state.directionalShadowMap,M5.directionalShadowMatrix.value=h0.state.directionalShadowMatrix,M5.spotShadowMap.value=h0.state.spotShadowMap,M5.spotLightMatrix.value=h0.state.spotLightMatrix,M5.spotLightMap.value=h0.state.spotLightMap,M5.pointShadowMap.value=h0.state.pointShadowMap,M5.pointShadowMatrix.value=h0.state.pointShadowMatrix);const N5=y5.getUniforms(),s9=T6.seqWithValue(N5.seq,M5);return Z.currentProgram=y5,Z.uniformsList=s9,y5}function l5(I,K){const a0=s0.get(I);a0.outputColorSpace=K.outputColorSpace,a0.instancing=K.instancing,a0.skinning=K.skinning,a0.morphTargets=K.morphTargets,a0.morphNormals=K.morphNormals,a0.morphColors=K.morphColors,a0.morphTargetsCount=K.morphTargetsCount,a0.numClippingPlanes=K.numClippingPlanes,a0.numIntersection=K.numClipIntersection,a0.vertexAlphas=K.vertexAlphas,a0.vertexTangents=K.vertexTangents,a0.toneMapping=K.toneMapping}function D5(I,K,a0,Z,h0){K.isScene!==!0&&(K=w0),u0.resetTextureUnits();const Q0=K.fog,$0=Z.isMeshStandardMaterial?K.environment:null,a5=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:O2,p5=(Z.isMeshStandardMaterial?R0:N0).get(Z.envMap||$0),_5=Z.vertexColors===!0&&!!a0.attributes.color&&a0.attributes.color.itemSize===4,y5=!!Z.normalMap&&!!a0.attributes.tangent,M5=!!a0.morphAttributes.position,N5=!!a0.morphAttributes.normal,s9=!!a0.morphAttributes.color,Z9=Z.toneMapped?g.toneMapping:l1,i2=a0.morphAttributes.position||a0.morphAttributes.normal||a0.morphAttributes.color,Q5=i2!==void 0?i2.length:0,b5=s0.get(Z),s4=x.state.lights;if(f0===!0&&(P0===!0||I!==G)){const A9=I===G&&Z.id===B;t0.setState(Z,I,A9)}let e9=!1;Z.version===b5.__version?(b5.needsLights&&b5.lightsStateVersion!==s4.state.version||b5.outputColorSpace!==a5||h0.isInstancedMesh&&b5.instancing===!1||!h0.isInstancedMesh&&b5.instancing===!0||h0.isSkinnedMesh&&b5.skinning===!1||!h0.isSkinnedMesh&&b5.skinning===!0||b5.envMap!==p5||Z.fog===!0&&b5.fog!==Q0||b5.numClippingPlanes!==void 0&&(b5.numClippingPlanes!==t0.numPlanes||b5.numIntersection!==t0.numIntersection)||b5.vertexAlphas!==_5||b5.vertexTangents!==y5||b5.morphTargets!==M5||b5.morphNormals!==N5||b5.morphColors!==s9||b5.toneMapping!==Z9||A0.isWebGL2===!0&&b5.morphTargetsCount!==Q5)&&(e9=!0):(e9=!0,b5.__version=Z.version);let w2=b5.currentProgram;e9===!0&&(w2=u5(Z,K,h0));let o4=!1,C1=!1,a4=!1;const v9=w2.getUniforms(),W2=b5.uniforms;if(G0.useProgram(w2.program)&&(o4=!0,C1=!0,a4=!0),Z.id!==B&&(B=Z.id,C1=!0),o4||G!==I){if(v9.setValue(z,"projectionMatrix",I.projectionMatrix),A0.logarithmicDepthBuffer&&v9.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),G!==I&&(G=I,C1=!0,a4=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const A9=v9.map.cameraPosition;A9!==void 0&&A9.setValue(z,g0.setFromMatrixPosition(I.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&v9.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||h0.isSkinnedMesh)&&v9.setValue(z,"viewMatrix",I.matrixWorldInverse)}if(h0.isSkinnedMesh){v9.setOptional(z,h0,"bindMatrix"),v9.setOptional(z,h0,"bindMatrixInverse");const A9=h0.skeleton;A9&&(A0.floatVertexTextures?(A9.boneTexture===null&&A9.computeBoneTexture(),v9.setValue(z,"boneTexture",A9.boneTexture,u0),v9.setValue(z,"boneTextureSize",A9.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const r7=a0.morphAttributes;if((r7.position!==void 0||r7.normal!==void 0||r7.color!==void 0&&A0.isWebGL2===!0)&&T0.update(h0,a0,w2),(C1||b5.receiveShadow!==h0.receiveShadow)&&(b5.receiveShadow=h0.receiveShadow,v9.setValue(z,"receiveShadow",h0.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(W2.envMap.value=p5,W2.flipEnvMap.value=p5.isCubeTexture&&p5.isRenderTargetTexture===!1?-1:1),C1&&(v9.setValue(z,"toneMappingExposure",g.toneMappingExposure),b5.needsLights&&H5(W2,a4),Q0&&Z.fog===!0&&e5.refreshFogUniforms(W2,Q0),e5.refreshMaterialUniforms(W2,Z,H,j,L0),T6.upload(z,b5.uniformsList,W2,u0)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(T6.upload(z,b5.uniformsList,W2,u0),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&v9.setValue(z,"center",h0.center),v9.setValue(z,"modelViewMatrix",h0.modelViewMatrix),v9.setValue(z,"normalMatrix",h0.normalMatrix),v9.setValue(z,"modelMatrix",h0.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const A9=Z.uniformsGroups;for(let s7=0,l4=A9.length;s7<l4;s7++)if(A0.isWebGL2){const n3=A9[s7];B0.update(n3,w2),B0.bind(n3,w2)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return w2}function H5(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function E9(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(I,K,a0){s0.get(I.texture).__webglTexture=K,s0.get(I.depthTexture).__webglTexture=a0;const Z=s0.get(I);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=a0===void 0,Z.__autoAllocateDepthBuffer||J0.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,K){const a0=s0.get(I);a0.__webglFramebuffer=K,a0.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,a0=0){R=I,E=K,L=a0;let Z=!0,h0=null,Q0=!1,$0=!1;if(I){const p5=s0.get(I);p5.__useDefaultFramebuffer!==void 0?(G0.bindFramebuffer(z.FRAMEBUFFER,null),Z=!1):p5.__webglFramebuffer===void 0?u0.setupRenderTarget(I):p5.__hasExternalTextures&&u0.rebindTextures(I,s0.get(I.texture).__webglTexture,s0.get(I.depthTexture).__webglTexture);const _5=I.texture;(_5.isData3DTexture||_5.isDataArrayTexture||_5.isCompressedArrayTexture)&&($0=!0);const y5=s0.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(h0=y5[K],Q0=!0):A0.isWebGL2&&I.samples>0&&u0.useMultisampledRTT(I)===!1?h0=s0.get(I).__webglMultisampledFramebuffer:h0=y5,q.copy(I.viewport),b.copy(I.scissor),C=I.scissorTest}else q.copy(d0).multiplyScalar(H).floor(),b.copy(J).multiplyScalar(H).floor(),C=e0;if(G0.bindFramebuffer(z.FRAMEBUFFER,h0)&&A0.drawBuffers&&Z&&G0.drawBuffers(I,h0),G0.viewport(q),G0.scissor(b),G0.setScissorTest(C),Q0){const p5=s0.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,p5.__webglTexture,a0)}else if($0){const p5=s0.get(I.texture),_5=K||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,p5.__webglTexture,a0||0,_5)}B=-1},this.readRenderTargetPixels=function(I,K,a0,Z,h0,Q0,$0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let a5=s0.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&$0!==void 0&&(a5=a5[$0]),a5){G0.bindFramebuffer(z.FRAMEBUFFER,a5);try{const p5=I.texture,_5=p5.format,y5=p5.type;if(_5!==b2&&$.convert(_5)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const M5=y5===Y4&&(J0.has("EXT_color_buffer_half_float")||A0.isWebGL2&&J0.has("EXT_color_buffer_float"));if(y5!==$1&&$.convert(y5)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(y5===Z1&&(A0.isWebGL2||J0.has("OES_texture_float")||J0.has("WEBGL_color_buffer_float")))&&!M5){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-Z&&a0>=0&&a0<=I.height-h0&&z.readPixels(K,a0,Z,h0,$.convert(_5),$.convert(y5),Q0)}finally{const p5=R!==null?s0.get(R).__webglFramebuffer:null;G0.bindFramebuffer(z.FRAMEBUFFER,p5)}}},this.copyFramebufferToTexture=function(I,K,a0=0){const Z=Math.pow(2,-a0),h0=Math.floor(K.image.width*Z),Q0=Math.floor(K.image.height*Z);u0.setTexture2D(K,0),z.copyTexSubImage2D(z.TEXTURE_2D,a0,0,0,I.x,I.y,h0,Q0),G0.unbindTexture()},this.copyTextureToTexture=function(I,K,a0,Z=0){const h0=K.image.width,Q0=K.image.height,$0=$.convert(a0.format),a5=$.convert(a0.type);u0.setTexture2D(a0,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,a0.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a0.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,a0.unpackAlignment),K.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Z,I.x,I.y,h0,Q0,$0,a5,K.image.data):K.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Z,I.x,I.y,K.mipmaps[0].width,K.mipmaps[0].height,$0,K.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Z,I.x,I.y,$0,a5,K.image),Z===0&&a0.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),G0.unbindTexture()},this.copyTextureToTexture3D=function(I,K,a0,Z,h0=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Q0=I.max.x-I.min.x+1,$0=I.max.y-I.min.y+1,a5=I.max.z-I.min.z+1,p5=$.convert(Z.format),_5=$.convert(Z.type);let y5;if(Z.isData3DTexture)u0.setTexture3D(Z,0),y5=z.TEXTURE_3D;else if(Z.isDataArrayTexture)u0.setTexture2DArray(Z,0),y5=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const M5=z.getParameter(z.UNPACK_ROW_LENGTH),N5=z.getParameter(z.UNPACK_IMAGE_HEIGHT),s9=z.getParameter(z.UNPACK_SKIP_PIXELS),Z9=z.getParameter(z.UNPACK_SKIP_ROWS),i2=z.getParameter(z.UNPACK_SKIP_IMAGES),Q5=a0.isCompressedTexture?a0.mipmaps[0]:a0.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Q5.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Q5.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,I.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,I.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,I.min.z),a0.isDataTexture||a0.isData3DTexture?z.texSubImage3D(y5,h0,K.x,K.y,K.z,Q0,$0,a5,p5,_5,Q5.data):a0.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(y5,h0,K.x,K.y,K.z,Q0,$0,a5,p5,Q5.data)):z.texSubImage3D(y5,h0,K.x,K.y,K.z,Q0,$0,a5,p5,_5,Q5),z.pixelStorei(z.UNPACK_ROW_LENGTH,M5),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,N5),z.pixelStorei(z.UNPACK_SKIP_PIXELS,s9),z.pixelStorei(z.UNPACK_SKIP_ROWS,Z9),z.pixelStorei(z.UNPACK_SKIP_IMAGES,i2),h0===0&&Z.generateMipmaps&&z.generateMipmap(y5),G0.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?u0.setTextureCube(I,0):I.isData3DTexture?u0.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?u0.setTexture2DArray(I,0):u0.setTexture2D(I,0),G0.unbindTexture()},this.resetState=function(){E=0,L=0,R=null,G0.reset(),C0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===v5?j1:uo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===j1?v5:O2}}class JS extends Co{}JS.prototype.isWebGL1Renderer=!0;class KS extends u9{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Po{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xe,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=B2()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=B2()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=B2()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const U9=new U;class N2{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)U9.fromBufferAttribute(this,t),U9.applyMatrix4(e),this.setXYZ(t,U9.x,U9.y,U9.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)U9.fromBufferAttribute(this,t),U9.applyNormalMatrix(e),this.setXYZ(t,U9.x,U9.y,U9.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)U9.fromBufferAttribute(this,t),U9.transformDirection(e),this.setXYZ(t,U9.x,U9.y,U9.z);return this}setX(e,t){return this.normalized&&(t=G5(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=G5(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=G5(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=G5(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=a1(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=a1(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=a1(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=a1(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=G5(t,this.array),n=G5(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=G5(t,this.array),n=G5(n,this.array),s=G5(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=G5(t,this.array),n=G5(n,this.array),s=G5(s,this.array),o=G5(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new r9(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new N2(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lo extends G2{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new d5(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let F7;const P4=new U,z7=new U,G7=new U,H7=new b0,L4=new b0,Io=new Z5,h6=new U,I4=new U,f6=new U,vs=new b0,Re=new b0,_s=new b0;class QS extends u9{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",F7===void 0){F7=new K5;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Po(t,5);F7.setIndex([0,1,2,0,2,3]),F7.setAttribute("position",new N2(n,3,0,!1)),F7.setAttribute("uv",new N2(n,2,3,!1))}this.geometry=F7,this.material=e!==void 0?e:new Lo,this.center=new b0(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),z7.setFromMatrixScale(this.matrixWorld),Io.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),G7.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&z7.multiplyScalar(-G7.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const l=this.center;d6(h6.set(-.5,-.5,0),G7,l,z7,s,o),d6(I4.set(.5,-.5,0),G7,l,z7,s,o),d6(f6.set(.5,.5,0),G7,l,z7,s,o),vs.set(0,0),Re.set(1,0),_s.set(1,1);let c=e.ray.intersectTriangle(h6,I4,f6,!1,P4);if(c===null&&(d6(I4.set(-.5,.5,0),G7,l,z7,s,o),Re.set(0,1),c=e.ray.intersectTriangle(h6,f6,I4,!1,P4),c===null))return;const h=e.ray.origin.distanceTo(P4);h<e.near||h>e.far||t.push({distance:h,point:P4.clone(),uv:p2.getInterpolation(P4,h6,I4,f6,vs,Re,_s,new b0),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function d6(i,e,t,n,s,o){H7.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(L4.x=o*H7.x-s*H7.y,L4.y=s*H7.x+o*H7.y):L4.copy(H7),i.copy(e),i.x+=L4.x,i.y+=L4.y,i.applyMatrix4(Io)}class e3 extends G2{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new d5(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ys=new U,xs=new U,Ss=new Z5,Ce=new B6,p6=new i7;class z6 extends u9{constructor(e=new K5,t=new e3){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)ys.fromBufferAttribute(t,s-1),xs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ys.distanceTo(xs);e.setAttribute("lineDistance",new h9(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),p6.copy(n.boundingSphere),p6.applyMatrix4(s),p6.radius+=o,e.ray.intersectsSphere(p6)===!1)return;Ss.copy(s).invert(),Ce.copy(e.ray).applyMatrix4(Ss);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=new U,d=new U,p=new U,m=new U,_=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){const g=Math.max(0,l.start),P=Math.min(x.count,l.start+l.count);for(let E=g,L=P-1;E<L;E+=_){const R=x.getX(E),B=x.getX(E+1);if(f.fromBufferAttribute(y,R),d.fromBufferAttribute(y,B),Ce.distanceSqToSegment(f,d,m,p)>h)continue;m.applyMatrix4(this.matrixWorld);const q=e.ray.origin.distanceTo(m);q<e.near||q>e.far||t.push({distance:q,point:p.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,l.start),P=Math.min(y.count,l.start+l.count);for(let E=g,L=P-1;E<L;E+=_){if(f.fromBufferAttribute(y,E),d.fromBufferAttribute(y,E+1),Ce.distanceSqToSegment(f,d,m,p)>h)continue;m.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(m);B<e.near||B>e.far||t.push({distance:B,point:p.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}const Ms=new U,Es=new U;class $S extends z6{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)Ms.fromBufferAttribute(t,s),Es.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ms.distanceTo(Es);e.setAttribute("lineDistance",new h9(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eM extends z6{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class G6 extends G2{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new d5(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const As=new Z5,je=new B6,m6=new i7,g6=new U;class pt extends u9{constructor(e=new K5,t=new G6){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),m6.copy(n.boundingSphere),m6.applyMatrix4(s),m6.radius+=o,e.ray.intersectsSphere(m6)===!1)return;As.copy(s).invert(),je.copy(e.ray).applyMatrix4(As);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,p=n.attributes.position;if(f!==null){const m=Math.max(0,l.start),_=Math.min(f.count,l.start+l.count);for(let x=m,S=_;x<S;x++){const y=f.getX(x);g6.fromBufferAttribute(p,y),bs(g6,y,h,s,e,t,this)}}else{const m=Math.max(0,l.start),_=Math.min(p.count,l.start+l.count);for(let x=m,S=_;x<S;x++)g6.fromBufferAttribute(p,x),bs(g6,x,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function bs(i,e,t,n,s,o,l){const c=je.distanceSqToPoint(i);if(c<t){const h=new U;je.closestPointToPoint(i,h),h.applyMatrix4(n);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;o.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:l})}}class H2{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const o=n.length;let l;t?l=t:l=e*n[o-1];let c=0,h=o-1,f;for(;c<=h;)if(s=Math.floor(c+(h-c)/2),f=n[s]-l,f<0)c=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,n[s]===l)return s/(o-1);const d=n[s],m=n[s+1]-d,_=(l-d)/m;return(s+_)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const l=this.getPoint(s),c=this.getPoint(o),h=t||(l.isVector2?new b0:new U);return h.copy(c).sub(l).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,s=[],o=[],l=[],c=new U,h=new Z5;for(let _=0;_<=e;_++){const x=_/e;s[_]=this.getTangentAt(x,new U)}o[0]=new U,l[0]=new U;let f=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);d<=f&&(f=d,n.set(1,0,0)),p<=f&&(f=p,n.set(0,1,0)),m<=f&&n.set(0,0,1),c.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],c),l[0].crossVectors(s[0],o[0]);for(let _=1;_<=e;_++){if(o[_]=o[_-1].clone(),l[_]=l[_-1].clone(),c.crossVectors(s[_-1],s[_]),c.length()>Number.EPSILON){c.normalize();const x=Math.acos(c9(s[_-1].dot(s[_]),-1,1));o[_].applyMatrix4(h.makeRotationAxis(c,x))}l[_].crossVectors(s[_],o[_])}if(t===!0){let _=Math.acos(c9(o[0].dot(o[e]),-1,1));_/=e,s[0].dot(c.crossVectors(o[0],o[e]))>0&&(_=-_);for(let x=1;x<=e;x++)o[x].applyMatrix4(h.makeRotationAxis(s[x],_*x)),l[x].crossVectors(s[x],o[x])}return{tangents:s,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mt extends H2{constructor(e=0,t=0,n=1,s=1,o=0,l=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=l,this.aClockwise=c,this.aRotation=h}getPoint(e,t){const n=t||new b0,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const l=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(l?o=0:o=s),this.aClockwise===!0&&!l&&(o===s?o=-s:o=o-s);const c=this.aStartAngle+e*o;let h=this.aX+this.xRadius*Math.cos(c),f=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=h-this.aX,_=f-this.aY;h=m*d-_*p+this.aX,f=m*p+_*d+this.aY}return n.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class C6 extends mt{constructor(e,t,n,s,o,l){super(e,t,n,n,s,o,l),this.isArcCurve=!0,this.type="ArcCurve"}}function gt(){let i=0,e=0,t=0,n=0;function s(o,l,c,h){i=o,e=c,t=-3*o+3*l-2*c-h,n=2*o-2*l+c+h}return{initCatmullRom:function(o,l,c,h,f){s(l,c,f*(c-o),f*(h-l))},initNonuniformCatmullRom:function(o,l,c,h,f,d,p){let m=(l-o)/f-(c-o)/(f+d)+(c-l)/d,_=(c-l)/d-(h-l)/(d+p)+(h-c)/p;m*=d,_*=d,s(l,c,m,_)},calc:function(o){const l=o*o,c=l*o;return i+e*o+t*l+n*c}}}const v6=new U,Pe=new gt,Le=new gt,Ie=new gt;class vt extends H2{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){const n=t,s=this.points,o=s.length,l=(o-(this.closed?0:1))*e;let c=Math.floor(l),h=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:h===0&&c===o-1&&(c=o-2,h=1);let f,d;this.closed||c>0?f=s[(c-1)%o]:(v6.subVectors(s[0],s[1]).add(s[0]),f=v6);const p=s[c%o],m=s[(c+1)%o];if(this.closed||c+2<o?d=s[(c+2)%o]:(v6.subVectors(s[o-1],s[o-2]).add(s[o-1]),d=v6),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let x=Math.pow(f.distanceToSquared(p),_),S=Math.pow(p.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(d),_);S<1e-4&&(S=1),x<1e-4&&(x=S),y<1e-4&&(y=S),Pe.initNonuniformCatmullRom(f.x,p.x,m.x,d.x,x,S,y),Le.initNonuniformCatmullRom(f.y,p.y,m.y,d.y,x,S,y),Ie.initNonuniformCatmullRom(f.z,p.z,m.z,d.z,x,S,y)}else this.curveType==="catmullrom"&&(Pe.initCatmullRom(f.x,p.x,m.x,d.x,this.tension),Le.initCatmullRom(f.y,p.y,m.y,d.y,this.tension),Ie.initCatmullRom(f.z,p.z,m.z,d.z,this.tension));return n.set(Pe.calc(h),Le.calc(h),Ie.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ws(i,e,t,n,s){const o=(n-e)*.5,l=(s-t)*.5,c=i*i,h=i*c;return(2*t-2*n+o+l)*h+(-3*t+3*n-2*o-l)*c+o*i+t}function tM(i,e){const t=1-i;return t*t*e}function nM(i,e){return 2*(1-i)*i*e}function iM(i,e){return i*i*e}function H4(i,e,t,n){return tM(i,e)+nM(i,t)+iM(i,n)}function rM(i,e){const t=1-i;return t*t*t*e}function sM(i,e){const t=1-i;return 3*t*t*i*e}function oM(i,e){return 3*(1-i)*i*i*e}function aM(i,e){return i*i*i*e}function W4(i,e,t,n,s){return rM(i,e)+sM(i,t)+oM(i,n)+aM(i,s)}class Do extends H2{constructor(e=new b0,t=new b0,n=new b0,s=new b0){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new b0){const n=t,s=this.v0,o=this.v1,l=this.v2,c=this.v3;return n.set(W4(e,s.x,o.x,l.x,c.x),W4(e,s.y,o.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lM extends H2{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){const n=t,s=this.v0,o=this.v1,l=this.v2,c=this.v3;return n.set(W4(e,s.x,o.x,l.x,c.x),W4(e,s.y,o.y,l.y,c.y),W4(e,s.z,o.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _t extends H2{constructor(e=new b0,t=new b0){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new b0){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b0){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cM extends H2{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uo extends H2{constructor(e=new b0,t=new b0,n=new b0){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b0){const n=t,s=this.v0,o=this.v1,l=this.v2;return n.set(H4(e,s.x,o.x,l.x),H4(e,s.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class No extends H2{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,s=this.v0,o=this.v1,l=this.v2;return n.set(H4(e,s.x,o.x,l.x),H4(e,s.y,o.y,l.y),H4(e,s.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bo extends H2{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new b0){const n=t,s=this.points,o=(s.length-1)*e,l=Math.floor(o),c=o-l,h=s[l===0?l:l-1],f=s[l],d=s[l>s.length-2?s.length-1:l+1],p=s[l>s.length-3?s.length-1:l+2];return n.set(ws(c,h.x,f.x,d.x,p.x),ws(c,h.y,f.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new b0().fromArray(s))}return this}}var Oo=Object.freeze({__proto__:null,ArcCurve:C6,CatmullRomCurve3:vt,CubicBezierCurve:Do,CubicBezierCurve3:lM,EllipseCurve:mt,LineCurve:_t,LineCurve3:cM,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:No,SplineCurve:Bo});class uM extends H2{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new _t(t,e))}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const l=s[o]-n,c=this.curves[o],h=c.getLength(),f=h===0?0:1-l/h;return c.getPointAt(f,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const l=o[s],c=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,h=l.getPoints(c);for(let f=0;f<h.length;f++){const d=h[f];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Oo[s.type]().fromJSON(s))}return this}}class Ts extends uM{constructor(e){super(),this.type="Path",this.currentPoint=new b0,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _t(this.currentPoint.clone(),new b0(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const o=new Uo(this.currentPoint.clone(),new b0(e,t),new b0(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,o,l){const c=new Do(this.currentPoint.clone(),new b0(e,t),new b0(n,s),new b0(o,l));return this.curves.push(c),this.currentPoint.set(o,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Bo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+c,t+h,n,s,o,l),this}absarc(e,t,n,s,o,l){return this.absellipse(e,t,n,n,s,o,l),this}ellipse(e,t,n,s,o,l,c,h){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+f,t+d,n,s,o,l,c,h),this}absellipse(e,t,n,s,o,l,c,h){const f=new mt(e,t,n,s,o,l,c,h);if(this.curves.length>0){const p=f.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(f);const d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fo extends Ts{constructor(e){super(e),this.uuid=B2(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ts().fromJSON(s))}return this}}const hM={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let o=zo(i,0,s,t,!0);const l=[];if(!o||o.next===o.prev)return l;let c,h,f,d,p,m,_;if(n&&(o=gM(i,e,o,t)),i.length>80*t){c=f=i[0],h=d=i[1];for(let x=t;x<s;x+=t)p=i[x],m=i[x+1],p<c&&(c=p),m<h&&(h=m),p>f&&(f=p),m>d&&(d=m);_=Math.max(f-c,d-h),_=_!==0?32767/_:0}return j4(o,l,t,c,h,_,0),l}};function zo(i,e,t,n,s){let o,l;if(s===TM(i,e,t,n)>0)for(o=e;o<t;o+=n)l=Rs(o,i[o],i[o+1],l);else for(o=t-n;o>=e;o-=n)l=Rs(o,i[o],i[o+1],l);return l&&H6(l,l.next)&&(K4(l),l=l.next),l}function t7(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(H6(t,t.next)||J5(t.prev,t,t.next)===0)){if(K4(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function j4(i,e,t,n,s,o,l){if(!i)return;!l&&o&&SM(i,n,s,o);let c=i,h,f;for(;i.prev!==i.next;){if(h=i.prev,f=i.next,o?dM(i,n,s,o):fM(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(f.i/t|0),K4(i),i=f.next,c=f.next;continue}if(i=f,i===c){l?l===1?(i=pM(t7(i),e,t),j4(i,e,t,n,s,o,2)):l===2&&mM(i,e,t,n,s,o):j4(t7(i),e,t,n,s,o,1);break}}}function fM(i){const e=i.prev,t=i,n=i.next;if(J5(e,t,n)>=0)return!1;const s=e.x,o=t.x,l=n.x,c=e.y,h=t.y,f=n.y,d=s<o?s<l?s:l:o<l?o:l,p=c<h?c<f?c:f:h<f?h:f,m=s>o?s>l?s:l:o>l?o:l,_=c>h?c>f?c:f:h>f?h:f;let x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=_&&X7(s,c,o,h,l,f,x.x,x.y)&&J5(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function dM(i,e,t,n){const s=i.prev,o=i,l=i.next;if(J5(s,o,l)>=0)return!1;const c=s.x,h=o.x,f=l.x,d=s.y,p=o.y,m=l.y,_=c<h?c<f?c:f:h<f?h:f,x=d<p?d<m?d:m:p<m?p:m,S=c>h?c>f?c:f:h>f?h:f,y=d>p?d>m?d:m:p>m?p:m,g=Je(_,x,e,t,n),P=Je(S,y,e,t,n);let E=i.prevZ,L=i.nextZ;for(;E&&E.z>=g&&L&&L.z<=P;){if(E.x>=_&&E.x<=S&&E.y>=x&&E.y<=y&&E!==s&&E!==l&&X7(c,d,h,p,f,m,E.x,E.y)&&J5(E.prev,E,E.next)>=0||(E=E.prevZ,L.x>=_&&L.x<=S&&L.y>=x&&L.y<=y&&L!==s&&L!==l&&X7(c,d,h,p,f,m,L.x,L.y)&&J5(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;E&&E.z>=g;){if(E.x>=_&&E.x<=S&&E.y>=x&&E.y<=y&&E!==s&&E!==l&&X7(c,d,h,p,f,m,E.x,E.y)&&J5(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;L&&L.z<=P;){if(L.x>=_&&L.x<=S&&L.y>=x&&L.y<=y&&L!==s&&L!==l&&X7(c,d,h,p,f,m,L.x,L.y)&&J5(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function pM(i,e,t){let n=i;do{const s=n.prev,o=n.next.next;!H6(s,o)&&Go(s,n,n.next,o)&&J4(s,o)&&J4(o,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),K4(n),K4(n.next),n=i=o),n=n.next}while(n!==i);return t7(n)}function mM(i,e,t,n,s,o){let l=i;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&AM(l,c)){let h=Ho(l,c);l=t7(l,l.next),h=t7(h,h.next),j4(l,e,t,n,s,o,0),j4(h,e,t,n,s,o,0);return}c=c.next}l=l.next}while(l!==i)}function gM(i,e,t,n){const s=[];let o,l,c,h,f;for(o=0,l=e.length;o<l;o++)c=e[o]*n,h=o<l-1?e[o+1]*n:i.length,f=zo(i,c,h,n,!1),f===f.next&&(f.steiner=!0),s.push(EM(f));for(s.sort(vM),o=0;o<s.length;o++)t=_M(s[o],t);return t}function vM(i,e){return i.x-e.x}function _M(i,e){const t=yM(i,e);if(!t)return e;const n=Ho(t,i);return t7(n,n.next),t7(t,t.next)}function yM(i,e){let t=e,n=-1/0,s;const o=i.x,l=i.y;do{if(l<=t.y&&l>=t.next.y&&t.next.y!==t.y){const m=t.x+(l-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=o&&m>n&&(n=m,s=t.x<t.next.x?t:t.next,m===o))return s}t=t.next}while(t!==e);if(!s)return null;const c=s,h=s.x,f=s.y;let d=1/0,p;t=s;do o>=t.x&&t.x>=h&&o!==t.x&&X7(l<f?o:n,l,h,f,l<f?n:o,l,t.x,t.y)&&(p=Math.abs(l-t.y)/(o-t.x),J4(t,i)&&(p<d||p===d&&(t.x>s.x||t.x===s.x&&xM(s,t)))&&(s=t,d=p)),t=t.next;while(t!==c);return s}function xM(i,e){return J5(i.prev,i,e.prev)<0&&J5(e.next,i,i.next)<0}function SM(i,e,t,n){let s=i;do s.z===0&&(s.z=Je(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,MM(s)}function MM(i){let e,t,n,s,o,l,c,h,f=1;do{for(t=i,i=null,o=null,l=0;t;){for(l++,n=t,c=0,e=0;e<f&&(c++,n=n.nextZ,!!n);e++);for(h=f;c>0||h>0&&n;)c!==0&&(h===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,c--):(s=n,n=n.nextZ,h--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;t=n}o.nextZ=null,f*=2}while(l>1);return i}function Je(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function EM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function X7(i,e,t,n,s,o,l,c){return(s-l)*(e-c)>=(i-l)*(o-c)&&(i-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(o-c)>=(s-l)*(n-c)}function AM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bM(i,e)&&(J4(i,e)&&J4(e,i)&&wM(i,e)&&(J5(i.prev,i,e.prev)||J5(i,e.prev,e))||H6(i,e)&&J5(i.prev,i,i.next)>0&&J5(e.prev,e,e.next)>0)}function J5(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function H6(i,e){return i.x===e.x&&i.y===e.y}function Go(i,e,t,n){const s=y6(J5(i,e,t)),o=y6(J5(i,e,n)),l=y6(J5(t,n,i)),c=y6(J5(t,n,e));return!!(s!==o&&l!==c||s===0&&_6(i,t,e)||o===0&&_6(i,n,e)||l===0&&_6(t,i,n)||c===0&&_6(t,e,n))}function _6(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function y6(i){return i>0?1:i<0?-1:0}function bM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Go(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function J4(i,e){return J5(i.prev,i,i.next)<0?J5(i,e,i.next)>=0&&J5(i,i.prev,e)>=0:J5(i,e,i.prev)<0||J5(i,i.next,e)<0}function wM(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ho(i,e){const t=new Ke(i.i,i.x,i.y),n=new Ke(e.i,e.x,e.y),s=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Rs(i,e,t,n){const s=new Ke(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function K4(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ke(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function TM(i,e,t,n){let s=0;for(let o=e,l=t-n;o<t;o+=n)s+=(i[l]-i[o])*(i[o+1]+i[l+1]),l=o;return s}class k4{static area(e){const t=e.length;let n=0;for(let s=t-1,o=0;o<t;s=o++)n+=e[s].x*e[o].y-e[o].x*e[s].y;return n*.5}static isClockWise(e){return k4.area(e)<0}static triangulateShape(e,t){const n=[],s=[],o=[];Cs(e),Ps(n,e);let l=e.length;t.forEach(Cs);for(let h=0;h<t.length;h++)s.push(l),l+=t[h].length,Ps(n,t[h]);const c=hM.triangulate(n,s);for(let h=0;h<c.length;h+=3)o.push(c.slice(h,h+3));return o}}function Cs(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ps(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class yt extends K5{constructor(e=new Fo([new b0(.5,.5),new b0(-.5,.5),new b0(-.5,-.5),new b0(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],o=[];for(let c=0,h=e.length;c<h;c++){const f=e[c];l(f)}this.setAttribute("position",new h9(s,3)),this.setAttribute("uv",new h9(o,2)),this.computeVertexNormals();function l(c){const h=[],f=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,_=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:_-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,P=t.UVGenerator!==void 0?t.UVGenerator:RM;let E,L=!1,R,B,G,q;g&&(E=g.getSpacedPoints(d),L=!0,m=!1,R=g.computeFrenetFrames(d,!1),B=new U,G=new U,q=new U),m||(y=0,_=0,x=0,S=0);const b=c.extractPoints(f);let C=b.shape;const X=b.holes;if(!k4.isClockWise(C)){C=C.reverse();for(let _0=0,s0=X.length;_0<s0;_0++){const u0=X[_0];k4.isClockWise(u0)&&(X[_0]=u0.reverse())}}const H=k4.triangulateShape(C,X),Y=C;for(let _0=0,s0=X.length;_0<s0;_0++){const u0=X[_0];C=C.concat(u0)}function Q(_0,s0,u0){return s0||console.error("THREE.ExtrudeGeometry: vec does not exist"),_0.clone().addScaledVector(s0,u0)}const d0=C.length,J=H.length;function e0(_0,s0,u0){let N0,R0,X0;const Z0=_0.x-s0.x,K0=_0.y-s0.y,i5=u0.x-_0.x,e5=u0.y-_0.y,D=Z0*Z0+K0*K0,T=Z0*e5-K0*i5;if(Math.abs(T)>Number.EPSILON){const t0=Math.sqrt(D),y0=Math.sqrt(i5*i5+e5*e5),x0=s0.x-K0/t0,T0=s0.y+Z0/t0,O=u0.x-e5/y0,c0=u0.y+i5/y0,$=((O-x0)*e5-(c0-T0)*i5)/(Z0*e5-K0*i5);N0=x0+Z0*$-_0.x,R0=T0+K0*$-_0.y;const C0=N0*N0+R0*R0;if(C0<=2)return new b0(N0,R0);X0=Math.sqrt(C0/2)}else{let t0=!1;Z0>Number.EPSILON?i5>Number.EPSILON&&(t0=!0):Z0<-Number.EPSILON?i5<-Number.EPSILON&&(t0=!0):Math.sign(K0)===Math.sign(e5)&&(t0=!0),t0?(N0=-K0,R0=Z0,X0=Math.sqrt(D)):(N0=Z0,R0=K0,X0=Math.sqrt(D/2))}return new b0(N0/X0,R0/X0)}const p0=[];for(let _0=0,s0=Y.length,u0=s0-1,N0=_0+1;_0<s0;_0++,u0++,N0++)u0===s0&&(u0=0),N0===s0&&(N0=0),p0[_0]=e0(Y[_0],Y[u0],Y[N0]);const f0=[];let P0,L0=p0.concat();for(let _0=0,s0=X.length;_0<s0;_0++){const u0=X[_0];P0=[];for(let N0=0,R0=u0.length,X0=R0-1,Z0=N0+1;N0<R0;N0++,X0++,Z0++)X0===R0&&(X0=0),Z0===R0&&(Z0=0),P0[N0]=e0(u0[N0],u0[X0],u0[Z0]);f0.push(P0),L0=L0.concat(P0)}for(let _0=0;_0<y;_0++){const s0=_0/y,u0=_*Math.cos(s0*Math.PI/2),N0=x*Math.sin(s0*Math.PI/2)+S;for(let R0=0,X0=Y.length;R0<X0;R0++){const Z0=Q(Y[R0],p0[R0],N0);z(Z0.x,Z0.y,-u0)}for(let R0=0,X0=X.length;R0<X0;R0++){const Z0=X[R0];P0=f0[R0];for(let K0=0,i5=Z0.length;K0<i5;K0++){const e5=Q(Z0[K0],P0[K0],N0);z(e5.x,e5.y,-u0)}}}const i0=x+S;for(let _0=0;_0<d0;_0++){const s0=m?Q(C[_0],L0[_0],i0):C[_0];L?(G.copy(R.normals[0]).multiplyScalar(s0.x),B.copy(R.binormals[0]).multiplyScalar(s0.y),q.copy(E[0]).add(G).add(B),z(q.x,q.y,q.z)):z(s0.x,s0.y,0)}for(let _0=1;_0<=d;_0++)for(let s0=0;s0<d0;s0++){const u0=m?Q(C[s0],L0[s0],i0):C[s0];L?(G.copy(R.normals[_0]).multiplyScalar(u0.x),B.copy(R.binormals[_0]).multiplyScalar(u0.y),q.copy(E[_0]).add(G).add(B),z(q.x,q.y,q.z)):z(u0.x,u0.y,p/d*_0)}for(let _0=y-1;_0>=0;_0--){const s0=_0/y,u0=_*Math.cos(s0*Math.PI/2),N0=x*Math.sin(s0*Math.PI/2)+S;for(let R0=0,X0=Y.length;R0<X0;R0++){const Z0=Q(Y[R0],p0[R0],N0);z(Z0.x,Z0.y,p+u0)}for(let R0=0,X0=X.length;R0<X0;R0++){const Z0=X[R0];P0=f0[R0];for(let K0=0,i5=Z0.length;K0<i5;K0++){const e5=Q(Z0[K0],P0[K0],N0);L?z(e5.x,e5.y+E[d-1].y,E[d-1].x+u0):z(e5.x,e5.y,p+u0)}}}g0(),w0();function g0(){const _0=s.length/3;if(m){let s0=0,u0=d0*s0;for(let N0=0;N0<J;N0++){const R0=H[N0];V0(R0[2]+u0,R0[1]+u0,R0[0]+u0)}s0=d+y*2,u0=d0*s0;for(let N0=0;N0<J;N0++){const R0=H[N0];V0(R0[0]+u0,R0[1]+u0,R0[2]+u0)}}else{for(let s0=0;s0<J;s0++){const u0=H[s0];V0(u0[2],u0[1],u0[0])}for(let s0=0;s0<J;s0++){const u0=H[s0];V0(u0[0]+d0*d,u0[1]+d0*d,u0[2]+d0*d)}}n.addGroup(_0,s.length/3-_0,0)}function w0(){const _0=s.length/3;let s0=0;I0(Y,s0),s0+=Y.length;for(let u0=0,N0=X.length;u0<N0;u0++){const R0=X[u0];I0(R0,s0),s0+=R0.length}n.addGroup(_0,s.length/3-_0,1)}function I0(_0,s0){let u0=_0.length;for(;--u0>=0;){const N0=u0;let R0=u0-1;R0<0&&(R0=_0.length-1);for(let X0=0,Z0=d+y*2;X0<Z0;X0++){const K0=d0*X0,i5=d0*(X0+1),e5=s0+N0+K0,D=s0+R0+K0,T=s0+R0+i5,t0=s0+N0+i5;J0(e5,D,T,t0)}}}function z(_0,s0,u0){h.push(_0),h.push(s0),h.push(u0)}function V0(_0,s0,u0){A0(_0),A0(s0),A0(u0);const N0=s.length/3,R0=P.generateTopUV(n,s,N0-3,N0-2,N0-1);G0(R0[0]),G0(R0[1]),G0(R0[2])}function J0(_0,s0,u0,N0){A0(_0),A0(s0),A0(N0),A0(s0),A0(u0),A0(N0);const R0=s.length/3,X0=P.generateSideWallUV(n,s,R0-6,R0-3,R0-2,R0-1);G0(X0[0]),G0(X0[1]),G0(X0[3]),G0(X0[1]),G0(X0[2]),G0(X0[3])}function A0(_0){s.push(h[_0*3+0]),s.push(h[_0*3+1]),s.push(h[_0*3+2])}function G0(_0){o.push(_0.x),o.push(_0.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return CM(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];n.push(c)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Oo[s.type]().fromJSON(s)),new yt(n,e.options)}}const RM={generateTopUV:function(i,e,t,n,s){const o=e[t*3],l=e[t*3+1],c=e[n*3],h=e[n*3+1],f=e[s*3],d=e[s*3+1];return[new b0(o,l),new b0(c,h),new b0(f,d)]},generateSideWallUV:function(i,e,t,n,s,o){const l=e[t*3],c=e[t*3+1],h=e[t*3+2],f=e[n*3],d=e[n*3+1],p=e[n*3+2],m=e[s*3],_=e[s*3+1],x=e[s*3+2],S=e[o*3],y=e[o*3+1],g=e[o*3+2];return Math.abs(c-d)<Math.abs(l-f)?[new b0(l,1-h),new b0(f,1-p),new b0(m,1-x),new b0(S,1-g)]:[new b0(c,1-h),new b0(d,1-p),new b0(_,1-x),new b0(y,1-g)]}};function CM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class P6 extends K5{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(l+c,Math.PI);let f=0;const d=[],p=new U,m=new U,_=[],x=[],S=[],y=[];for(let g=0;g<=n;g++){const P=[],E=g/n;let L=0;g===0&&l===0?L=.5/t:g===n&&h===Math.PI&&(L=-.5/t);for(let R=0;R<=t;R++){const B=R/t;p.x=-e*Math.cos(s+B*o)*Math.sin(l+E*c),p.y=e*Math.cos(l+E*c),p.z=e*Math.sin(s+B*o)*Math.sin(l+E*c),x.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),y.push(B+L,1-E),P.push(f++)}d.push(P)}for(let g=0;g<n;g++)for(let P=0;P<t;P++){const E=d[g][P+1],L=d[g][P],R=d[g+1][P],B=d[g+1][P+1];(g!==0||l>0)&&_.push(E,L,B),(g!==n-1||h<Math.PI)&&_.push(L,R,B)}this.setIndex(_),this.setAttribute("position",new h9(x,3)),this.setAttribute("normal",new h9(S,3)),this.setAttribute("uv",new h9(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new P6(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class PM extends K5{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new U,o=new U;if(e.index!==null){const l=e.attributes.position,c=e.index;let h=e.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let f=0,d=h.length;f<d;++f){const p=h[f],m=p.start,_=p.count;for(let x=m,S=m+_;x<S;x+=3)for(let y=0;y<3;y++){const g=c.getX(x+y),P=c.getX(x+(y+1)%3);s.fromBufferAttribute(l,g),o.fromBufferAttribute(l,P),Ls(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}}else{const l=e.attributes.position;for(let c=0,h=l.count/3;c<h;c++)for(let f=0;f<3;f++){const d=3*c+f,p=3*c+(f+1)%3;s.fromBufferAttribute(l,d),o.fromBufferAttribute(l,p),Ls(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new h9(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Ls(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class R6 extends G2{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new d5(16777215),this.specular=new d5(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new d5(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N6,this.normalScale=new b0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=D6,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LM extends G2{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new d5(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new d5(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N6,this.normalScale=new b0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=D6,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class IM extends G2{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new d5(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N6,this.normalScale=new b0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Is={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class DM{constructor(e,t,n){const s=this;let o=!1,l=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,o===!1&&s.onStart!==void 0&&s.onStart(d,l,c),o=!0},this.itemEnd=function(d){l++,s.onProgress!==void 0&&s.onProgress(d,l,c),l===c&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=f.length;p<m;p+=2){const _=f[p],x=f[p+1];if(_.global&&(_.lastIndex=0),_.test(d))return x}return null}}}const UM=new DM;class Wo{constructor(e){this.manager=e!==void 0?e:UM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class NM extends Wo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Is.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const c=q4("img");function h(){d(),Is.add(e,this),t&&t(this),o.manager.itemEnd(e)}function f(p){d(),s&&s(p),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){c.removeEventListener("load",h,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(e),c.src=e,c}}class V4 extends Wo{constructor(e){super(e)}load(e,t,n,s){const o=new Y9,l=new NM(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class xt extends u9{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new d5(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const De=new Z5,Ds=new U,Us=new U;class ko{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new b0(512,512),this.map=null,this.mapPass=null,this.matrix=new Z5,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ht,this._frameExtents=new b0(1,1),this._viewportCount=1,this._viewports=[new F5(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ds.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ds),Us.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Us),t.updateMatrixWorld(),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(De),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(De)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ns=new Z5,D4=new U,Ue=new U;class BM extends ko{constructor(){super(new n2(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new b0(4,2),this._viewportCount=6,this._viewports=[new F5(2,1,1,1),new F5(0,1,1,1),new F5(3,1,1,1),new F5(1,1,1,1),new F5(3,0,1,1),new F5(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),D4.setFromMatrixPosition(e.matrixWorld),n.position.copy(D4),Ue.copy(n.position),Ue.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ue),n.updateMatrixWorld(),s.makeTranslation(-D4.x,-D4.y,-D4.z),Ns.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ns)}}class OM extends xt{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new BM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class FM extends ko{constructor(){super(new ft(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zM extends xt{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(u9.DEFAULT_UP),this.updateMatrix(),this.target=new u9,this.shadow=new FM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class GM extends xt{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class HM extends K5{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class WM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bs(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bs();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bs(){return(typeof performance>"u"?Date:performance).now()}class Qe extends Po{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Vo{constructor(e,t,n=0,s=1/0){this.ray=new B6(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ct,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return $e(e,this,n,t),n.sort(Os),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)$e(e[s],this,n,t);return n.sort(Os),n}}function Os(i,e){return i.distance-e.distance}function $e(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let o=0,l=s.length;o<l;o++)$e(s[o],e,t,!0)}}class Fs{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(c9(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const zs=new U,x6=new U;class kM{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){zs.subVectors(e,this.start),x6.subVectors(this.end,this.start);const n=x6.dot(x6);let o=x6.dot(zs)/n;return t&&(o=c9(o,0,1)),o}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class VM extends $S{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new K5;s.setAttribute("position",new h9(t,3)),s.setAttribute("color",new h9(n,3));const o=new e3({vertexColors:!0,toneMapped:!1});super(s,o),this.type="AxesHelper"}setColors(e,t,n){const s=new d5,o=this.geometry.attributes.color.array;return s.set(e),s.toArray(o,0),s.toArray(o,3),s.set(t),s.toArray(o,6),s.toArray(o,9),s.set(n),s.toArray(o,12),s.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:at}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=at);const Gs={type:"change"},Ne={type:"start"},Hs={type:"end"};class XM extends n7{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:x7.ROTATE,MIDDLE:x7.DOLLY,RIGHT:x7.PAN},this.touches={ONE:S7.ROTATE,TWO:S7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",i5),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",i5),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gs),n.update(),o=s.NONE},this.update=function(){const O=new U,c0=new u1().setFromUnitVectors(e.up,new U(0,1,0)),$=c0.clone().invert(),C0=new U,B0=new u1,Y0=2*Math.PI;return function(){const k0=n.object.position;O.copy(k0).sub(n.target),O.applyQuaternion(c0),c.setFromVector3(O),n.autoRotate&&o===s.NONE&&b(G()),n.enableDamping?(c.theta+=h.theta*n.dampingFactor,c.phi+=h.phi*n.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let r5=n.minAzimuthAngle,c5=n.maxAzimuthAngle;return isFinite(r5)&&isFinite(c5)&&(r5<-Math.PI?r5+=Y0:r5>Math.PI&&(r5-=Y0),c5<-Math.PI?c5+=Y0:c5>Math.PI&&(c5-=Y0),r5<=c5?c.theta=Math.max(r5,Math.min(c5,c.theta)):c.theta=c.theta>(r5+c5)/2?Math.max(r5,c.theta):Math.min(c5,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=f,c.radius=Math.max(n.minDistance,Math.min(n.maxDistance,c.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),O.setFromSpherical(c),O.applyQuaternion($),k0.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),f=1,p||C0.distanceToSquared(n.object.position)>l||8*(1-B0.dot(n.object.quaternion))>l?(n.dispatchEvent(Gs),C0.copy(n.object.position),B0.copy(n.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",T),n.domElement.removeEventListener("pointerdown",u0),n.domElement.removeEventListener("pointercancel",R0),n.domElement.removeEventListener("wheel",K0),n.domElement.removeEventListener("pointermove",N0),n.domElement.removeEventListener("pointerup",R0),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",i5),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const l=1e-6,c=new Fs,h=new Fs;let f=1;const d=new U;let p=!1;const m=new b0,_=new b0,x=new b0,S=new b0,y=new b0,g=new b0,P=new b0,E=new b0,L=new b0,R=[],B={};function G(){return 2*Math.PI/60/60*n.autoRotateSpeed}function q(){return Math.pow(.95,n.zoomSpeed)}function b(O){h.theta-=O}function C(O){h.phi-=O}const X=function(){const O=new U;return function($,C0){O.setFromMatrixColumn(C0,0),O.multiplyScalar(-$),d.add(O)}}(),j=function(){const O=new U;return function($,C0){n.screenSpacePanning===!0?O.setFromMatrixColumn(C0,1):(O.setFromMatrixColumn(C0,0),O.crossVectors(n.object.up,O)),O.multiplyScalar($),d.add(O)}}(),H=function(){const O=new U;return function($,C0){const B0=n.domElement;if(n.object.isPerspectiveCamera){const Y0=n.object.position;O.copy(Y0).sub(n.target);let F0=O.length();F0*=Math.tan(n.object.fov/2*Math.PI/180),X(2*$*F0/B0.clientHeight,n.object.matrix),j(2*C0*F0/B0.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X($*(n.object.right-n.object.left)/n.object.zoom/B0.clientWidth,n.object.matrix),j(C0*(n.object.top-n.object.bottom)/n.object.zoom/B0.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(O){n.object.isPerspectiveCamera?f/=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*O)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(O){n.object.isPerspectiveCamera?f*=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/O)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function d0(O){m.set(O.clientX,O.clientY)}function J(O){P.set(O.clientX,O.clientY)}function e0(O){S.set(O.clientX,O.clientY)}function p0(O){_.set(O.clientX,O.clientY),x.subVectors(_,m).multiplyScalar(n.rotateSpeed);const c0=n.domElement;b(2*Math.PI*x.x/c0.clientHeight),C(2*Math.PI*x.y/c0.clientHeight),m.copy(_),n.update()}function f0(O){E.set(O.clientX,O.clientY),L.subVectors(E,P),L.y>0?Y(q()):L.y<0&&Q(q()),P.copy(E),n.update()}function P0(O){y.set(O.clientX,O.clientY),g.subVectors(y,S).multiplyScalar(n.panSpeed),H(g.x,g.y),S.copy(y),n.update()}function L0(O){O.deltaY<0?Q(q()):O.deltaY>0&&Y(q()),n.update()}function i0(O){let c0=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),c0=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),c0=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),c0=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),c0=!0;break}c0&&(O.preventDefault(),n.update())}function g0(){if(R.length===1)m.set(R[0].pageX,R[0].pageY);else{const O=.5*(R[0].pageX+R[1].pageX),c0=.5*(R[0].pageY+R[1].pageY);m.set(O,c0)}}function w0(){if(R.length===1)S.set(R[0].pageX,R[0].pageY);else{const O=.5*(R[0].pageX+R[1].pageX),c0=.5*(R[0].pageY+R[1].pageY);S.set(O,c0)}}function I0(){const O=R[0].pageX-R[1].pageX,c0=R[0].pageY-R[1].pageY,$=Math.sqrt(O*O+c0*c0);P.set(0,$)}function z(){n.enableZoom&&I0(),n.enablePan&&w0()}function V0(){n.enableZoom&&I0(),n.enableRotate&&g0()}function J0(O){if(R.length==1)_.set(O.pageX,O.pageY);else{const $=T0(O),C0=.5*(O.pageX+$.x),B0=.5*(O.pageY+$.y);_.set(C0,B0)}x.subVectors(_,m).multiplyScalar(n.rotateSpeed);const c0=n.domElement;b(2*Math.PI*x.x/c0.clientHeight),C(2*Math.PI*x.y/c0.clientHeight),m.copy(_)}function A0(O){if(R.length===1)y.set(O.pageX,O.pageY);else{const c0=T0(O),$=.5*(O.pageX+c0.x),C0=.5*(O.pageY+c0.y);y.set($,C0)}g.subVectors(y,S).multiplyScalar(n.panSpeed),H(g.x,g.y),S.copy(y)}function G0(O){const c0=T0(O),$=O.pageX-c0.x,C0=O.pageY-c0.y,B0=Math.sqrt($*$+C0*C0);E.set(0,B0),L.set(0,Math.pow(E.y/P.y,n.zoomSpeed)),Y(L.y),P.copy(E)}function _0(O){n.enableZoom&&G0(O),n.enablePan&&A0(O)}function s0(O){n.enableZoom&&G0(O),n.enableRotate&&J0(O)}function u0(O){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",N0),n.domElement.addEventListener("pointerup",R0)),t0(O),O.pointerType==="touch"?e5(O):X0(O))}function N0(O){n.enabled!==!1&&(O.pointerType==="touch"?D(O):Z0(O))}function R0(O){y0(O),R.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",N0),n.domElement.removeEventListener("pointerup",R0)),n.dispatchEvent(Hs),o=s.NONE}function X0(O){let c0;switch(O.button){case 0:c0=n.mouseButtons.LEFT;break;case 1:c0=n.mouseButtons.MIDDLE;break;case 2:c0=n.mouseButtons.RIGHT;break;default:c0=-1}switch(c0){case x7.DOLLY:if(n.enableZoom===!1)return;J(O),o=s.DOLLY;break;case x7.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;e0(O),o=s.PAN}else{if(n.enableRotate===!1)return;d0(O),o=s.ROTATE}break;case x7.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;d0(O),o=s.ROTATE}else{if(n.enablePan===!1)return;e0(O),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Ne)}function Z0(O){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;p0(O);break;case s.DOLLY:if(n.enableZoom===!1)return;f0(O);break;case s.PAN:if(n.enablePan===!1)return;P0(O);break}}function K0(O){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(O.preventDefault(),n.dispatchEvent(Ne),L0(O),n.dispatchEvent(Hs))}function i5(O){n.enabled===!1||n.enablePan===!1||i0(O)}function e5(O){switch(x0(O),R.length){case 1:switch(n.touches.ONE){case S7.ROTATE:if(n.enableRotate===!1)return;g0(),o=s.TOUCH_ROTATE;break;case S7.PAN:if(n.enablePan===!1)return;w0(),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case S7.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(),o=s.TOUCH_DOLLY_PAN;break;case S7.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V0(),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Ne)}function D(O){switch(x0(O),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;J0(O),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;A0(O),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_0(O),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;s0(O),n.update();break;default:o=s.NONE}}function T(O){n.enabled!==!1&&O.preventDefault()}function t0(O){R.push(O)}function y0(O){delete B[O.pointerId];for(let c0=0;c0<R.length;c0++)if(R[c0].pointerId==O.pointerId){R.splice(c0,1);return}}function x0(O){let c0=B[O.pointerId];c0===void 0&&(c0=new b0,B[O.pointerId]=c0),c0.set(O.pageX,O.pageY)}function T0(O){const c0=O.pointerId===R[0].pointerId?R[1]:R[0];return B[c0.pointerId]}n.domElement.addEventListener("contextmenu",T),n.domElement.addEventListener("pointerdown",u0),n.domElement.addEventListener("pointercancel",R0),n.domElement.addEventListener("wheel",K0,{passive:!1}),this.update()}}const Ws=new R1,S6=new U;class Xo extends HM{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new h9(e,3)),this.setAttribute("uv",new h9(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Qe(t,6,1);return this.setAttribute("instanceStart",new N2(n,3,0)),this.setAttribute("instanceEnd",new N2(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Qe(t,6,1);return this.setAttribute("instanceColorStart",new N2(n,3,0)),this.setAttribute("instanceColorEnd",new N2(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new PM(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new R1);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ws.setFromBufferAttribute(t),this.boundingBox.union(Ws))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new i7),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)S6.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(S6)),S6.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(S6));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Yo extends Xo{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}D0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new b0(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};V9.line={uniforms:ut.merge([D0.common,D0.fog,D0.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class St extends T1{constructor(e){super({type:"LineMaterial",uniforms:ut.clone(V9.line.uniforms),vertexShader:V9.line.vertexShader,fragmentShader:V9.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const ks=new U,Vs=new U,x9=new F5,S9=new F5,I2=new F5,Be=new U,Oe=new Z5,M9=new kM,Xs=new U,M6=new R1,E6=new i7,D2=new F5;let U2,Q1;function Ys(i,e,t){return D2.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),D2.multiplyScalar(1/D2.w),D2.x=Q1/t.width,D2.y=Q1/t.height,D2.applyMatrix4(i.projectionMatrixInverse),D2.multiplyScalar(1/D2.w),Math.abs(Math.max(D2.x,D2.y))}function YM(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,o=n.attributes.instanceEnd,l=Math.min(n.instanceCount,s.count);for(let c=0,h=l;c<h;c++){M9.start.fromBufferAttribute(s,c),M9.end.fromBufferAttribute(o,c),M9.applyMatrix4(t);const f=new U,d=new U;U2.distanceSqToSegment(M9.start,M9.end,d,f),d.distanceTo(f)<Q1*.5&&e.push({point:d,pointOnLine:f,distance:U2.origin.distanceTo(d),object:i,face:null,faceIndex:c,uv:null,uv1:null})}}function ZM(i,e,t){const n=e.projectionMatrix,o=i.material.resolution,l=i.matrixWorld,c=i.geometry,h=c.attributes.instanceStart,f=c.attributes.instanceEnd,d=Math.min(c.instanceCount,h.count),p=-e.near;U2.at(1,I2),I2.w=1,I2.applyMatrix4(e.matrixWorldInverse),I2.applyMatrix4(n),I2.multiplyScalar(1/I2.w),I2.x*=o.x/2,I2.y*=o.y/2,I2.z=0,Be.copy(I2),Oe.multiplyMatrices(e.matrixWorldInverse,l);for(let m=0,_=d;m<_;m++){if(x9.fromBufferAttribute(h,m),S9.fromBufferAttribute(f,m),x9.w=1,S9.w=1,x9.applyMatrix4(Oe),S9.applyMatrix4(Oe),x9.z>p&&S9.z>p)continue;if(x9.z>p){const E=x9.z-S9.z,L=(x9.z-p)/E;x9.lerp(S9,L)}else if(S9.z>p){const E=S9.z-x9.z,L=(S9.z-p)/E;S9.lerp(x9,L)}x9.applyMatrix4(n),S9.applyMatrix4(n),x9.multiplyScalar(1/x9.w),S9.multiplyScalar(1/S9.w),x9.x*=o.x/2,x9.y*=o.y/2,S9.x*=o.x/2,S9.y*=o.y/2,M9.start.copy(x9),M9.start.z=0,M9.end.copy(S9),M9.end.z=0;const S=M9.closestPointToPointParameter(Be,!0);M9.at(S,Xs);const y=jg.lerp(x9.z,S9.z,S),g=y>=-1&&y<=1,P=Be.distanceTo(Xs)<Q1*.5;if(g&&P){M9.start.fromBufferAttribute(h,m),M9.end.fromBufferAttribute(f,m),M9.start.applyMatrix4(l),M9.end.applyMatrix4(l);const E=new U,L=new U;U2.distanceSqToSegment(M9.start,M9.end,L,E),t.push({point:L,pointOnLine:E,distance:U2.origin.distanceTo(L),object:i,face:null,faceIndex:m,uv:null,uv1:null})}}}class qM extends X9{constructor(e=new Xo,t=new St({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let l=0,c=0,h=t.count;l<h;l++,c+=2)ks.fromBufferAttribute(t,l),Vs.fromBufferAttribute(n,l),s[c]=c===0?0:s[c-1],s[c+1]=s[c]+ks.distanceTo(Vs);const o=new Qe(s,2,1);return e.setAttribute("instanceDistanceStart",new N2(o,1,0)),e.setAttribute("instanceDistanceEnd",new N2(o,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=e.params.Line2!==void 0&&e.params.Line2.threshold||0;U2=e.ray;const l=this.matrixWorld,c=this.geometry,h=this.material;Q1=h.linewidth+o,c.boundingSphere===null&&c.computeBoundingSphere(),E6.copy(c.boundingSphere).applyMatrix4(l);let f;if(n)f=Q1*.5;else{const p=Math.max(s.near,E6.distanceToPoint(U2.origin));f=Ys(s,p,h.resolution)}if(E6.radius+=f,U2.intersectsSphere(E6)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),M6.copy(c.boundingBox).applyMatrix4(l);let d;if(n)d=Q1*.5;else{const p=Math.max(s.near,M6.distanceToPoint(U2.origin));d=Ys(s,p,h.resolution)}M6.expandByScalar(d),U2.intersectsBox(M6)!==!1&&(n?YM(this,t):ZM(this,s,t))}}class jM extends qM{constructor(e=new Yo,t=new St({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const b1=(i,e,t,n=1)=>{let s=e*Math.PI/180,o=t*Math.PI/180;s=-s;const l=i*n*Math.cos(o)*Math.cos(s),c=i*n*Math.sin(o),h=i*n*Math.cos(o)*Math.sin(s);return{x:l,y:c,z:h}},Zo=(i,e)=>{const t=new U(0,0,0),n=i.clone().sub(t),s=e.clone().sub(t),o=new U().crossVectors(n,s).normalize(),l=new u1().setFromUnitVectors(o,new U(0,0,1)),c=i.clone().applyQuaternion(l),h=e.clone().applyQuaternion(l),f=new U().addVectors(c,h).multiplyScalar(.5).normalize(),d=new u1().setFromUnitVectors(f,new U(0,1,0)),p=c.clone().applyQuaternion(d),m=h.clone().applyQuaternion(d);return{quaternion:l.clone().invert().multiply(d.clone().invert()),startPoint3D:p,endPoint3D:m}},et=(i,e,t)=>{const n=i.clone().sub(t).normalize(),s=e.clone().sub(t).normalize(),o=n.clone().dot(s);return Math.acos(o)},JM=(i,e,t)=>{const n=i.lengthSq(),s=e.lengthSq(),o=t.lengthSq(),l=i.x,c=i.y,h=e.x,f=e.y,d=t.x,p=t.y,m=l*f+h*p+d*c-l*p-h*c-d*f,_=(s*p+n*f+o*c-s*c-o*f-n*p)/m/2,x=(o*h+s*l+n*d-n*h-s*d-o*l)/m/2;return new U(_,x,0)};function KM(i,e){const t=(e.y-i.y)/(e.x-i.x);i.y-t*i.x;const n=-1/t,s=(e.x+i.x)/2,o=(e.y+i.y)/2,l=s-n*o,c=i.distanceTo(e);return QM(s,o,n,l,c/5)}function QM(i,e,t,n,s){const o=s/Math.sqrt(1+Math.pow(t,2)),l=s*t/Math.sqrt(1+Math.pow(t,2));return new U(i+o,e+l,0)}function $M(){let i=[];const e="0123456789abcdef";for(let t=0;t<36;t++)i[t]=e.substr(Math.floor(Math.random()*16),1);return i[14]="4",i[19]=e.substr(i[19]&3|8,1),i[8]=i[13]=i[18]=i[23]="-",i.join("")}var Q7=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return this.None(i)},Out:function(i){return this.None(i)},InOut:function(i){return this.None(i)}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var e=1.70158;return i===1?1:i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return i===0?0:--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}}),Bounce:Object.freeze({In:function(i){return 1-Q7.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Q7.Bounce.In(i*2)*.5:Q7.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(e){return Math.pow(e,i)},Out:function(e){return 1-Math.pow(1-e,i)},InOut:function(e){return e<.5?Math.pow(e*2,i)/2:(1-Math.pow(2-e*2,i))/2+.5}}}}),O4=function(){return performance.now()},eE=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=O4()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var o=this._tweens[n[s]],l=!t;o&&o.update(e,l)===!1&&!t&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),Y7={Linear:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),o=Y7.Utils.Linear;return e<0?o(i[0],i[1],n):e>1?o(i[t],i[t-1],t-n):o(i[s],i[s+1>t?t:s+1],n-s)},Bezier:function(i,e){for(var t=0,n=i.length-1,s=Math.pow,o=Y7.Utils.Bernstein,l=0;l<=n;l++)t+=s(1-e,n-l)*s(e,l)*i[l]*o(n,l);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),o=Y7.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(s=Math.floor(n=t*(1+e))),o(i[(s-1+t)%t],i[s],i[(s+1)%t],i[(s+2)%t],n-s)):e<0?i[0]-(o(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(o(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):o(i[s?s-1:0],i[s],i[t<s+1?t:s+1],i[t<s+2?t:s+2],n-s)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=Y7.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,s){var o=(t-i)*.5,l=(n-e)*.5,c=s*s,h=s*c;return(2*e-2*t+o+l)*h+(-3*e+3*t-2*o-l)*c+o*s+e}}},tE=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),tt=new eE,nE=function(){function i(e,t){t===void 0&&(t=tt),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Q7.Linear.None,this._interpolationFunction=Y7.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=tE.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},i.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},i.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},i.prototype.start=function(e,t){if(e===void 0&&(e=O4()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var o in this._valuesEnd)s[o]=this._valuesEnd[o];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},i.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},i.prototype._setupProperties=function(e,t,n,s,o){for(var l in n){var c=e[l],h=Array.isArray(c),f=h?"array":typeof c,d=!h&&Array.isArray(n[l]);if(!(f==="undefined"||f==="function")){if(d){var p=n[l];if(p.length===0)continue;for(var m=[c],_=0,x=p.length;_<x;_+=1){var S=this._handleRelativeValue(c,p[_]);if(isNaN(S)){d=!1,console.warn("Found invalid interpolation list. Skipping.");break}m.push(S)}d&&(n[l]=m)}if((f==="object"||h)&&c&&!d){t[l]=h?[]:{};var y=c;for(var g in y)t[l][g]=y[g];s[l]=h?[]:{};var p=n[l];if(!this._isDynamic){var P={};for(var g in p)P[g]=p[g];n[l]=p=P}this._setupProperties(y,t[l],p,s[l],o)}else(typeof t[l]>"u"||o)&&(t[l]=c),h||(t[l]*=1),d?s[l]=n[l].slice().reverse():s[l]=t[l]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=O4()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=O4()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return e===void 0&&(e=tt),this._group=e,this},i.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},i.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},i.prototype.easing=function(e){return e===void 0&&(e=Q7.Linear.None),this._easingFunction=e,this},i.prototype.interpolation=function(e){return e===void 0&&(e=Y7.Linear),this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=O4()),t===void 0&&(t=!0),this._isPaused)return!0;var n,s,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(e-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var l=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var c=0,h=this._chainedTweens.length;c<h;c++)this._chainedTweens[c].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,s){for(var o in n)if(t[o]!==void 0){var l=t[o]||0,c=n[o],h=Array.isArray(e[o]),f=Array.isArray(c),d=!h&&f;d?e[o]=this._interpolationFunction(c,s):typeof c=="object"&&c?this._updateProperties(e[o],l,c,s):(c=this._handleRelativeValue(l,c),typeof c=="number"&&(e[o]=l+(c-l)*s))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),F2=tt;F2.getAll.bind(F2);F2.removeAll.bind(F2);F2.add.bind(F2);F2.remove.bind(F2);var iE=F2.update.bind(F2),U4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i4={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(i,e){(function(){var t,n="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",p=1,m=2,_=4,x=1,S=2,y=1,g=2,P=4,E=8,L=16,R=32,B=64,G=128,q=256,b=512,C=30,X="...",j=800,H=16,Y=1,Q=2,d0=3,J=1/0,e0=9007199254740991,p0=17976931348623157e292,f0=NaN,P0=4294967295,L0=P0-1,i0=P0>>>1,g0=[["ary",G],["bind",y],["bindKey",g],["curry",E],["curryRight",L],["flip",b],["partial",R],["partialRight",B],["rearg",q]],w0="[object Arguments]",I0="[object Array]",z="[object AsyncFunction]",V0="[object Boolean]",J0="[object Date]",A0="[object DOMException]",G0="[object Error]",_0="[object Function]",s0="[object GeneratorFunction]",u0="[object Map]",N0="[object Number]",R0="[object Null]",X0="[object Object]",Z0="[object Promise]",K0="[object Proxy]",i5="[object RegExp]",e5="[object Set]",D="[object String]",T="[object Symbol]",t0="[object Undefined]",y0="[object WeakMap]",x0="[object WeakSet]",T0="[object ArrayBuffer]",O="[object DataView]",c0="[object Float32Array]",$="[object Float64Array]",C0="[object Int8Array]",B0="[object Int16Array]",Y0="[object Int32Array]",F0="[object Uint8Array]",k0="[object Uint8ClampedArray]",r5="[object Uint16Array]",c5="[object Uint32Array]",V5=/\b__p \+= '';/g,W=/\b(__p \+=) '' \+/g,o0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,M0=/&(?:amp|lt|gt|quot|#39);/g,z0=/[&<>"']/g,q0=RegExp(M0.source),I5=RegExp(z0.source),L5=/<%-([\s\S]+?)%>/g,X5=/<%([\s\S]+?)%>/g,r0=/<%=([\s\S]+?)%>/g,E0=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H0=/^\w*$/,t5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u5=/[\\^$.*+?()[\]{}|]/g,l5=RegExp(u5.source),D5=/^\s+/,H5=/\s/,E9=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,I=/\{\n\/\* \[wrapped with (.+)\] \*/,K=/,? & /,a0=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Z=/[()=,{}\[\]\/\s]/,h0=/\\(\\)?/g,Q0=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,$0=/\w*$/,a5=/^[-+]0x[0-9a-f]+$/i,p5=/^0b[01]+$/i,_5=/^\[object .+?Constructor\]$/,y5=/^0o[0-7]+$/i,M5=/^(?:0|[1-9]\d*)$/,N5=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s9=/($^)/,Z9=/['\n\r\u2028\u2029\\]/g,i2="\\ud800-\\udfff",Q5="\\u0300-\\u036f",b5="\\ufe20-\\ufe2f",s4="\\u20d0-\\u20ff",e9=Q5+b5+s4,w2="\\u2700-\\u27bf",o4="a-z\\xdf-\\xf6\\xf8-\\xff",C1="\\xac\\xb1\\xd7\\xf7",a4="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",v9="\\u2000-\\u206f",W2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r7="A-Z\\xc0-\\xd6\\xd8-\\xde",A9="\\ufe0e\\ufe0f",s7=C1+a4+v9+W2,l4="['’]",n3="["+i2+"]",Et="["+s7+"]",i3="["+e9+"]",At="\\d+",Jo="["+w2+"]",bt="["+o4+"]",wt="[^"+i2+s7+At+w2+o4+r7+"]",W6="\\ud83c[\\udffb-\\udfff]",Ko="(?:"+i3+"|"+W6+")",Tt="[^"+i2+"]",k6="(?:\\ud83c[\\udde6-\\uddff]){2}",V6="[\\ud800-\\udbff][\\udc00-\\udfff]",o7="["+r7+"]",Rt="\\u200d",Ct="(?:"+bt+"|"+wt+")",Qo="(?:"+o7+"|"+wt+")",Pt="(?:"+l4+"(?:d|ll|m|re|s|t|ve))?",Lt="(?:"+l4+"(?:D|LL|M|RE|S|T|VE))?",It=Ko+"?",Dt="["+A9+"]?",$o="(?:"+Rt+"(?:"+[Tt,k6,V6].join("|")+")"+Dt+It+")*",ea="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ta="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ut=Dt+It+$o,na="(?:"+[Jo,k6,V6].join("|")+")"+Ut,ia="(?:"+[Tt+i3+"?",i3,k6,V6,n3].join("|")+")",ra=RegExp(l4,"g"),sa=RegExp(i3,"g"),X6=RegExp(W6+"(?="+W6+")|"+ia+Ut,"g"),oa=RegExp([o7+"?"+bt+"+"+Pt+"(?="+[Et,o7,"$"].join("|")+")",Qo+"+"+Lt+"(?="+[Et,o7+Ct,"$"].join("|")+")",o7+"?"+Ct+"+"+Pt,o7+"+"+Lt,ta,ea,At,na].join("|"),"g"),aa=RegExp("["+Rt+i2+e9+A9+"]"),la=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ca=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ua=-1,Y5={};Y5[c0]=Y5[$]=Y5[C0]=Y5[B0]=Y5[Y0]=Y5[F0]=Y5[k0]=Y5[r5]=Y5[c5]=!0,Y5[w0]=Y5[I0]=Y5[T0]=Y5[V0]=Y5[O]=Y5[J0]=Y5[G0]=Y5[_0]=Y5[u0]=Y5[N0]=Y5[X0]=Y5[i5]=Y5[e5]=Y5[D]=Y5[y0]=!1;var W5={};W5[w0]=W5[I0]=W5[T0]=W5[O]=W5[V0]=W5[J0]=W5[c0]=W5[$]=W5[C0]=W5[B0]=W5[Y0]=W5[u0]=W5[N0]=W5[X0]=W5[i5]=W5[e5]=W5[D]=W5[T]=W5[F0]=W5[k0]=W5[r5]=W5[c5]=!0,W5[G0]=W5[_0]=W5[y0]=!1;var ha={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},fa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},da={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pa={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ma=parseFloat,ga=parseInt,Nt=typeof U4=="object"&&U4&&U4.Object===Object&&U4,va=typeof self=="object"&&self&&self.Object===Object&&self,_9=Nt||va||Function("return this")(),Y6=e&&!e.nodeType&&e,P1=Y6&&!0&&i&&!i.nodeType&&i,Bt=P1&&P1.exports===Y6,Z6=Bt&&Nt.process,r2=function(){try{var k=P1&&P1.require&&P1.require("util").types;return k||Z6&&Z6.binding&&Z6.binding("util")}catch{}}(),Ot=r2&&r2.isArrayBuffer,Ft=r2&&r2.isDate,zt=r2&&r2.isMap,Gt=r2&&r2.isRegExp,Ht=r2&&r2.isSet,Wt=r2&&r2.isTypedArray;function q9(k,l0,n0){switch(n0.length){case 0:return k.call(l0);case 1:return k.call(l0,n0[0]);case 2:return k.call(l0,n0[0],n0[1]);case 3:return k.call(l0,n0[0],n0[1],n0[2])}return k.apply(l0,n0)}function _a(k,l0,n0,W0){for(var h5=-1,U5=k==null?0:k.length;++h5<U5;){var a9=k[h5];l0(W0,a9,n0(a9),k)}return W0}function s2(k,l0){for(var n0=-1,W0=k==null?0:k.length;++n0<W0&&l0(k[n0],n0,k)!==!1;);return k}function ya(k,l0){for(var n0=k==null?0:k.length;n0--&&l0(k[n0],n0,k)!==!1;);return k}function kt(k,l0){for(var n0=-1,W0=k==null?0:k.length;++n0<W0;)if(!l0(k[n0],n0,k))return!1;return!0}function h1(k,l0){for(var n0=-1,W0=k==null?0:k.length,h5=0,U5=[];++n0<W0;){var a9=k[n0];l0(a9,n0,k)&&(U5[h5++]=a9)}return U5}function r3(k,l0){var n0=k==null?0:k.length;return!!n0&&a7(k,l0,0)>-1}function q6(k,l0,n0){for(var W0=-1,h5=k==null?0:k.length;++W0<h5;)if(n0(l0,k[W0]))return!0;return!1}function q5(k,l0){for(var n0=-1,W0=k==null?0:k.length,h5=Array(W0);++n0<W0;)h5[n0]=l0(k[n0],n0,k);return h5}function f1(k,l0){for(var n0=-1,W0=l0.length,h5=k.length;++n0<W0;)k[h5+n0]=l0[n0];return k}function j6(k,l0,n0,W0){var h5=-1,U5=k==null?0:k.length;for(W0&&U5&&(n0=k[++h5]);++h5<U5;)n0=l0(n0,k[h5],h5,k);return n0}function xa(k,l0,n0,W0){var h5=k==null?0:k.length;for(W0&&h5&&(n0=k[--h5]);h5--;)n0=l0(n0,k[h5],h5,k);return n0}function J6(k,l0){for(var n0=-1,W0=k==null?0:k.length;++n0<W0;)if(l0(k[n0],n0,k))return!0;return!1}var Sa=K6("length");function Ma(k){return k.split("")}function Ea(k){return k.match(a0)||[]}function Vt(k,l0,n0){var W0;return n0(k,function(h5,U5,a9){if(l0(h5,U5,a9))return W0=U5,!1}),W0}function s3(k,l0,n0,W0){for(var h5=k.length,U5=n0+(W0?1:-1);W0?U5--:++U5<h5;)if(l0(k[U5],U5,k))return U5;return-1}function a7(k,l0,n0){return l0===l0?Na(k,l0,n0):s3(k,Xt,n0)}function Aa(k,l0,n0,W0){for(var h5=n0-1,U5=k.length;++h5<U5;)if(W0(k[h5],l0))return h5;return-1}function Xt(k){return k!==k}function Yt(k,l0){var n0=k==null?0:k.length;return n0?$6(k,l0)/n0:f0}function K6(k){return function(l0){return l0==null?t:l0[k]}}function Q6(k){return function(l0){return k==null?t:k[l0]}}function Zt(k,l0,n0,W0,h5){return h5(k,function(U5,a9,z5){n0=W0?(W0=!1,U5):l0(n0,U5,a9,z5)}),n0}function ba(k,l0){var n0=k.length;for(k.sort(l0);n0--;)k[n0]=k[n0].value;return k}function $6(k,l0){for(var n0,W0=-1,h5=k.length;++W0<h5;){var U5=l0(k[W0]);U5!==t&&(n0=n0===t?U5:n0+U5)}return n0}function e8(k,l0){for(var n0=-1,W0=Array(k);++n0<k;)W0[n0]=l0(n0);return W0}function wa(k,l0){return q5(l0,function(n0){return[n0,k[n0]]})}function qt(k){return k&&k.slice(0,Qt(k)+1).replace(D5,"")}function j9(k){return function(l0){return k(l0)}}function t8(k,l0){return q5(l0,function(n0){return k[n0]})}function c4(k,l0){return k.has(l0)}function jt(k,l0){for(var n0=-1,W0=k.length;++n0<W0&&a7(l0,k[n0],0)>-1;);return n0}function Jt(k,l0){for(var n0=k.length;n0--&&a7(l0,k[n0],0)>-1;);return n0}function Ta(k,l0){for(var n0=k.length,W0=0;n0--;)k[n0]===l0&&++W0;return W0}var Ra=Q6(ha),Ca=Q6(fa);function Pa(k){return"\\"+pa[k]}function La(k,l0){return k==null?t:k[l0]}function l7(k){return aa.test(k)}function Ia(k){return la.test(k)}function Da(k){for(var l0,n0=[];!(l0=k.next()).done;)n0.push(l0.value);return n0}function n8(k){var l0=-1,n0=Array(k.size);return k.forEach(function(W0,h5){n0[++l0]=[h5,W0]}),n0}function Kt(k,l0){return function(n0){return k(l0(n0))}}function d1(k,l0){for(var n0=-1,W0=k.length,h5=0,U5=[];++n0<W0;){var a9=k[n0];(a9===l0||a9===d)&&(k[n0]=d,U5[h5++]=n0)}return U5}function o3(k){var l0=-1,n0=Array(k.size);return k.forEach(function(W0){n0[++l0]=W0}),n0}function Ua(k){var l0=-1,n0=Array(k.size);return k.forEach(function(W0){n0[++l0]=[W0,W0]}),n0}function Na(k,l0,n0){for(var W0=n0-1,h5=k.length;++W0<h5;)if(k[W0]===l0)return W0;return-1}function Ba(k,l0,n0){for(var W0=n0+1;W0--;)if(k[W0]===l0)return W0;return W0}function c7(k){return l7(k)?Fa(k):Sa(k)}function m2(k){return l7(k)?za(k):Ma(k)}function Qt(k){for(var l0=k.length;l0--&&H5.test(k.charAt(l0)););return l0}var Oa=Q6(da);function Fa(k){for(var l0=X6.lastIndex=0;X6.test(k);)++l0;return l0}function za(k){return k.match(X6)||[]}function Ga(k){return k.match(oa)||[]}var Ha=function k(l0){l0=l0==null?_9:u7.defaults(_9.Object(),l0,u7.pick(_9,ca));var n0=l0.Array,W0=l0.Date,h5=l0.Error,U5=l0.Function,a9=l0.Math,z5=l0.Object,i8=l0.RegExp,Wa=l0.String,o2=l0.TypeError,a3=n0.prototype,ka=U5.prototype,h7=z5.prototype,l3=l0["__core-js_shared__"],c3=ka.toString,O5=h7.hasOwnProperty,Va=0,$t=function(){var r=/[^.]+$/.exec(l3&&l3.keys&&l3.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),u3=h7.toString,Xa=c3.call(z5),Ya=_9._,Za=i8("^"+c3.call(O5).replace(u5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),h3=Bt?l0.Buffer:t,p1=l0.Symbol,f3=l0.Uint8Array,en=h3?h3.allocUnsafe:t,d3=Kt(z5.getPrototypeOf,z5),tn=z5.create,nn=h7.propertyIsEnumerable,p3=a3.splice,rn=p1?p1.isConcatSpreadable:t,u4=p1?p1.iterator:t,L1=p1?p1.toStringTag:t,m3=function(){try{var r=B1(z5,"defineProperty");return r({},"",{}),r}catch{}}(),qa=l0.clearTimeout!==_9.clearTimeout&&l0.clearTimeout,ja=W0&&W0.now!==_9.Date.now&&W0.now,Ja=l0.setTimeout!==_9.setTimeout&&l0.setTimeout,g3=a9.ceil,v3=a9.floor,r8=z5.getOwnPropertySymbols,Ka=h3?h3.isBuffer:t,sn=l0.isFinite,Qa=a3.join,$a=Kt(z5.keys,z5),l9=a9.max,b9=a9.min,el=W0.now,tl=l0.parseInt,on=a9.random,nl=a3.reverse,s8=B1(l0,"DataView"),h4=B1(l0,"Map"),o8=B1(l0,"Promise"),f7=B1(l0,"Set"),f4=B1(l0,"WeakMap"),d4=B1(z5,"create"),_3=f4&&new f4,d7={},il=O1(s8),rl=O1(h4),sl=O1(o8),ol=O1(f7),al=O1(f4),y3=p1?p1.prototype:t,p4=y3?y3.valueOf:t,an=y3?y3.toString:t;function A(r){if($5(r)&&!f5(r)&&!(r instanceof w5)){if(r instanceof a2)return r;if(O5.call(r,"__wrapped__"))return li(r)}return new a2(r)}var p7=function(){function r(){}return function(a){if(!j5(a))return{};if(tn)return tn(a);r.prototype=a;var u=new r;return r.prototype=t,u}}();function x3(){}function a2(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}A.templateSettings={escape:L5,evaluate:X5,interpolate:r0,variable:"",imports:{_:A}},A.prototype=x3.prototype,A.prototype.constructor=A,a2.prototype=p7(x3.prototype),a2.prototype.constructor=a2;function w5(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=P0,this.__views__=[]}function ll(){var r=new w5(this.__wrapped__);return r.__actions__=G9(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=G9(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=G9(this.__views__),r}function cl(){if(this.__filtered__){var r=new w5(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function ul(){var r=this.__wrapped__.value(),a=this.__dir__,u=f5(r),v=a<0,M=u?r.length:0,w=Mc(0,M,this.__views__),N=w.start,F=w.end,V=F-N,m0=v?F:N-1,v0=this.__iteratees__,S0=v0.length,O0=0,j0=b9(V,this.__takeCount__);if(!u||!v&&M==V&&j0==V)return Ln(r,this.__actions__);var s5=[];e:for(;V--&&O0<j0;){m0+=a;for(var g5=-1,o5=r[m0];++g5<S0;){var E5=v0[g5],T5=E5.iteratee,Q9=E5.type,D9=T5(o5);if(Q9==Q)o5=D9;else if(!D9){if(Q9==Y)continue e;break e}}s5[O0++]=o5}return s5}w5.prototype=p7(x3.prototype),w5.prototype.constructor=w5;function I1(r){var a=-1,u=r==null?0:r.length;for(this.clear();++a<u;){var v=r[a];this.set(v[0],v[1])}}function hl(){this.__data__=d4?d4(null):{},this.size=0}function fl(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function dl(r){var a=this.__data__;if(d4){var u=a[r];return u===h?t:u}return O5.call(a,r)?a[r]:t}function pl(r){var a=this.__data__;return d4?a[r]!==t:O5.call(a,r)}function ml(r,a){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=d4&&a===t?h:a,this}I1.prototype.clear=hl,I1.prototype.delete=fl,I1.prototype.get=dl,I1.prototype.has=pl,I1.prototype.set=ml;function k2(r){var a=-1,u=r==null?0:r.length;for(this.clear();++a<u;){var v=r[a];this.set(v[0],v[1])}}function gl(){this.__data__=[],this.size=0}function vl(r){var a=this.__data__,u=S3(a,r);if(u<0)return!1;var v=a.length-1;return u==v?a.pop():p3.call(a,u,1),--this.size,!0}function _l(r){var a=this.__data__,u=S3(a,r);return u<0?t:a[u][1]}function yl(r){return S3(this.__data__,r)>-1}function xl(r,a){var u=this.__data__,v=S3(u,r);return v<0?(++this.size,u.push([r,a])):u[v][1]=a,this}k2.prototype.clear=gl,k2.prototype.delete=vl,k2.prototype.get=_l,k2.prototype.has=yl,k2.prototype.set=xl;function V2(r){var a=-1,u=r==null?0:r.length;for(this.clear();++a<u;){var v=r[a];this.set(v[0],v[1])}}function Sl(){this.size=0,this.__data__={hash:new I1,map:new(h4||k2),string:new I1}}function Ml(r){var a=D3(this,r).delete(r);return this.size-=a?1:0,a}function El(r){return D3(this,r).get(r)}function Al(r){return D3(this,r).has(r)}function bl(r,a){var u=D3(this,r),v=u.size;return u.set(r,a),this.size+=u.size==v?0:1,this}V2.prototype.clear=Sl,V2.prototype.delete=Ml,V2.prototype.get=El,V2.prototype.has=Al,V2.prototype.set=bl;function D1(r){var a=-1,u=r==null?0:r.length;for(this.__data__=new V2;++a<u;)this.add(r[a])}function wl(r){return this.__data__.set(r,h),this}function Tl(r){return this.__data__.has(r)}D1.prototype.add=D1.prototype.push=wl,D1.prototype.has=Tl;function g2(r){var a=this.__data__=new k2(r);this.size=a.size}function Rl(){this.__data__=new k2,this.size=0}function Cl(r){var a=this.__data__,u=a.delete(r);return this.size=a.size,u}function Pl(r){return this.__data__.get(r)}function Ll(r){return this.__data__.has(r)}function Il(r,a){var u=this.__data__;if(u instanceof k2){var v=u.__data__;if(!h4||v.length<s-1)return v.push([r,a]),this.size=++u.size,this;u=this.__data__=new V2(v)}return u.set(r,a),this.size=u.size,this}g2.prototype.clear=Rl,g2.prototype.delete=Cl,g2.prototype.get=Pl,g2.prototype.has=Ll,g2.prototype.set=Il;function ln(r,a){var u=f5(r),v=!u&&F1(r),M=!u&&!v&&y1(r),w=!u&&!v&&!M&&_7(r),N=u||v||M||w,F=N?e8(r.length,Wa):[],V=F.length;for(var m0 in r)(a||O5.call(r,m0))&&!(N&&(m0=="length"||M&&(m0=="offset"||m0=="parent")||w&&(m0=="buffer"||m0=="byteLength"||m0=="byteOffset")||q2(m0,V)))&&F.push(m0);return F}function cn(r){var a=r.length;return a?r[v8(0,a-1)]:t}function Dl(r,a){return U3(G9(r),U1(a,0,r.length))}function Ul(r){return U3(G9(r))}function a8(r,a,u){(u!==t&&!v2(r[a],u)||u===t&&!(a in r))&&X2(r,a,u)}function m4(r,a,u){var v=r[a];(!(O5.call(r,a)&&v2(v,u))||u===t&&!(a in r))&&X2(r,a,u)}function S3(r,a){for(var u=r.length;u--;)if(v2(r[u][0],a))return u;return-1}function Nl(r,a,u,v){return m1(r,function(M,w,N){a(v,M,u(M),N)}),v}function un(r,a){return r&&R2(a,p9(a),r)}function Bl(r,a){return r&&R2(a,W9(a),r)}function X2(r,a,u){a=="__proto__"&&m3?m3(r,a,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[a]=u}function l8(r,a){for(var u=-1,v=a.length,M=n0(v),w=r==null;++u<v;)M[u]=w?t:W8(r,a[u]);return M}function U1(r,a,u){return r===r&&(u!==t&&(r=r<=u?r:u),a!==t&&(r=r>=a?r:a)),r}function l2(r,a,u,v,M,w){var N,F=a&p,V=a&m,m0=a&_;if(u&&(N=M?u(r,v,M,w):u(r)),N!==t)return N;if(!j5(r))return r;var v0=f5(r);if(v0){if(N=Ac(r),!F)return G9(r,N)}else{var S0=w9(r),O0=S0==_0||S0==s0;if(y1(r))return Un(r,F);if(S0==X0||S0==w0||O0&&!M){if(N=V||O0?{}:$n(r),!F)return V?dc(r,Bl(N,r)):fc(r,un(N,r))}else{if(!W5[S0])return M?r:{};N=bc(r,S0,F)}}w||(w=new g2);var j0=w.get(r);if(j0)return j0;w.set(r,N),Ri(r)?r.forEach(function(o5){N.add(l2(o5,a,u,o5,r,w))}):wi(r)&&r.forEach(function(o5,E5){N.set(E5,l2(o5,a,u,E5,r,w))});var s5=m0?V?R8:T8:V?W9:p9,g5=v0?t:s5(r);return s2(g5||r,function(o5,E5){g5&&(E5=o5,o5=r[E5]),m4(N,E5,l2(o5,a,u,E5,r,w))}),N}function Ol(r){var a=p9(r);return function(u){return hn(u,r,a)}}function hn(r,a,u){var v=u.length;if(r==null)return!v;for(r=z5(r);v--;){var M=u[v],w=a[M],N=r[M];if(N===t&&!(M in r)||!w(N))return!1}return!0}function fn(r,a,u){if(typeof r!="function")throw new o2(l);return M4(function(){r.apply(t,u)},a)}function g4(r,a,u,v){var M=-1,w=r3,N=!0,F=r.length,V=[],m0=a.length;if(!F)return V;u&&(a=q5(a,j9(u))),v?(w=q6,N=!1):a.length>=s&&(w=c4,N=!1,a=new D1(a));e:for(;++M<F;){var v0=r[M],S0=u==null?v0:u(v0);if(v0=v||v0!==0?v0:0,N&&S0===S0){for(var O0=m0;O0--;)if(a[O0]===S0)continue e;V.push(v0)}else w(a,S0,v)||V.push(v0)}return V}var m1=zn(T2),dn=zn(u8,!0);function Fl(r,a){var u=!0;return m1(r,function(v,M,w){return u=!!a(v,M,w),u}),u}function M3(r,a,u){for(var v=-1,M=r.length;++v<M;){var w=r[v],N=a(w);if(N!=null&&(F===t?N===N&&!K9(N):u(N,F)))var F=N,V=w}return V}function zl(r,a,u,v){var M=r.length;for(u=m5(u),u<0&&(u=-u>M?0:M+u),v=v===t||v>M?M:m5(v),v<0&&(v+=M),v=u>v?0:Pi(v);u<v;)r[u++]=a;return r}function pn(r,a){var u=[];return m1(r,function(v,M,w){a(v,M,w)&&u.push(v)}),u}function y9(r,a,u,v,M){var w=-1,N=r.length;for(u||(u=Tc),M||(M=[]);++w<N;){var F=r[w];a>0&&u(F)?a>1?y9(F,a-1,u,v,M):f1(M,F):v||(M[M.length]=F)}return M}var c8=Gn(),mn=Gn(!0);function T2(r,a){return r&&c8(r,a,p9)}function u8(r,a){return r&&mn(r,a,p9)}function E3(r,a){return h1(a,function(u){return j2(r[u])})}function N1(r,a){a=v1(a,r);for(var u=0,v=a.length;r!=null&&u<v;)r=r[C2(a[u++])];return u&&u==v?r:t}function gn(r,a,u){var v=a(r);return f5(r)?v:f1(v,u(r))}function L9(r){return r==null?r===t?t0:R0:L1&&L1 in z5(r)?Sc(r):Uc(r)}function h8(r,a){return r>a}function Gl(r,a){return r!=null&&O5.call(r,a)}function Hl(r,a){return r!=null&&a in z5(r)}function Wl(r,a,u){return r>=b9(a,u)&&r<l9(a,u)}function f8(r,a,u){for(var v=u?q6:r3,M=r[0].length,w=r.length,N=w,F=n0(w),V=1/0,m0=[];N--;){var v0=r[N];N&&a&&(v0=q5(v0,j9(a))),V=b9(v0.length,V),F[N]=!u&&(a||M>=120&&v0.length>=120)?new D1(N&&v0):t}v0=r[0];var S0=-1,O0=F[0];e:for(;++S0<M&&m0.length<V;){var j0=v0[S0],s5=a?a(j0):j0;if(j0=u||j0!==0?j0:0,!(O0?c4(O0,s5):v(m0,s5,u))){for(N=w;--N;){var g5=F[N];if(!(g5?c4(g5,s5):v(r[N],s5,u)))continue e}O0&&O0.push(s5),m0.push(j0)}}return m0}function kl(r,a,u,v){return T2(r,function(M,w,N){a(v,u(M),w,N)}),v}function v4(r,a,u){a=v1(a,r),r=ii(r,a);var v=r==null?r:r[C2(u2(a))];return v==null?t:q9(v,r,u)}function vn(r){return $5(r)&&L9(r)==w0}function Vl(r){return $5(r)&&L9(r)==T0}function Xl(r){return $5(r)&&L9(r)==J0}function _4(r,a,u,v,M){return r===a?!0:r==null||a==null||!$5(r)&&!$5(a)?r!==r&&a!==a:Yl(r,a,u,v,_4,M)}function Yl(r,a,u,v,M,w){var N=f5(r),F=f5(a),V=N?I0:w9(r),m0=F?I0:w9(a);V=V==w0?X0:V,m0=m0==w0?X0:m0;var v0=V==X0,S0=m0==X0,O0=V==m0;if(O0&&y1(r)){if(!y1(a))return!1;N=!0,v0=!1}if(O0&&!v0)return w||(w=new g2),N||_7(r)?Jn(r,a,u,v,M,w):yc(r,a,V,u,v,M,w);if(!(u&x)){var j0=v0&&O5.call(r,"__wrapped__"),s5=S0&&O5.call(a,"__wrapped__");if(j0||s5){var g5=j0?r.value():r,o5=s5?a.value():a;return w||(w=new g2),M(g5,o5,u,v,w)}}return O0?(w||(w=new g2),xc(r,a,u,v,M,w)):!1}function Zl(r){return $5(r)&&w9(r)==u0}function d8(r,a,u,v){var M=u.length,w=M,N=!v;if(r==null)return!w;for(r=z5(r);M--;){var F=u[M];if(N&&F[2]?F[1]!==r[F[0]]:!(F[0]in r))return!1}for(;++M<w;){F=u[M];var V=F[0],m0=r[V],v0=F[1];if(N&&F[2]){if(m0===t&&!(V in r))return!1}else{var S0=new g2;if(v)var O0=v(m0,v0,V,r,a,S0);if(!(O0===t?_4(v0,m0,x|S,v,S0):O0))return!1}}return!0}function _n(r){if(!j5(r)||Cc(r))return!1;var a=j2(r)?Za:_5;return a.test(O1(r))}function ql(r){return $5(r)&&L9(r)==i5}function jl(r){return $5(r)&&w9(r)==e5}function Jl(r){return $5(r)&&G3(r.length)&&!!Y5[L9(r)]}function yn(r){return typeof r=="function"?r:r==null?k9:typeof r=="object"?f5(r)?Mn(r[0],r[1]):Sn(r):Hi(r)}function p8(r){if(!S4(r))return $a(r);var a=[];for(var u in z5(r))O5.call(r,u)&&u!="constructor"&&a.push(u);return a}function Kl(r){if(!j5(r))return Dc(r);var a=S4(r),u=[];for(var v in r)v=="constructor"&&(a||!O5.call(r,v))||u.push(v);return u}function m8(r,a){return r<a}function xn(r,a){var u=-1,v=H9(r)?n0(r.length):[];return m1(r,function(M,w,N){v[++u]=a(M,w,N)}),v}function Sn(r){var a=P8(r);return a.length==1&&a[0][2]?ti(a[0][0],a[0][1]):function(u){return u===r||d8(u,r,a)}}function Mn(r,a){return I8(r)&&ei(a)?ti(C2(r),a):function(u){var v=W8(u,r);return v===t&&v===a?k8(u,r):_4(a,v,x|S)}}function A3(r,a,u,v,M){r!==a&&c8(a,function(w,N){if(M||(M=new g2),j5(w))Ql(r,a,N,u,A3,v,M);else{var F=v?v(U8(r,N),w,N+"",r,a,M):t;F===t&&(F=w),a8(r,N,F)}},W9)}function Ql(r,a,u,v,M,w,N){var F=U8(r,u),V=U8(a,u),m0=N.get(V);if(m0){a8(r,u,m0);return}var v0=w?w(F,V,u+"",r,a,N):t,S0=v0===t;if(S0){var O0=f5(V),j0=!O0&&y1(V),s5=!O0&&!j0&&_7(V);v0=V,O0||j0||s5?f5(F)?v0=F:t9(F)?v0=G9(F):j0?(S0=!1,v0=Un(V,!0)):s5?(S0=!1,v0=Nn(V,!0)):v0=[]:E4(V)||F1(V)?(v0=F,F1(F)?v0=Li(F):(!j5(F)||j2(F))&&(v0=$n(V))):S0=!1}S0&&(N.set(V,v0),M(v0,V,v,w,N),N.delete(V)),a8(r,u,v0)}function En(r,a){var u=r.length;if(u)return a+=a<0?u:0,q2(a,u)?r[a]:t}function An(r,a,u){a.length?a=q5(a,function(w){return f5(w)?function(N){return N1(N,w.length===1?w[0]:w)}:w}):a=[k9];var v=-1;a=q5(a,j9(n5()));var M=xn(r,function(w,N,F){var V=q5(a,function(m0){return m0(w)});return{criteria:V,index:++v,value:w}});return ba(M,function(w,N){return hc(w,N,u)})}function $l(r,a){return bn(r,a,function(u,v){return k8(r,v)})}function bn(r,a,u){for(var v=-1,M=a.length,w={};++v<M;){var N=a[v],F=N1(r,N);u(F,N)&&y4(w,v1(N,r),F)}return w}function ec(r){return function(a){return N1(a,r)}}function g8(r,a,u,v){var M=v?Aa:a7,w=-1,N=a.length,F=r;for(r===a&&(a=G9(a)),u&&(F=q5(r,j9(u)));++w<N;)for(var V=0,m0=a[w],v0=u?u(m0):m0;(V=M(F,v0,V,v))>-1;)F!==r&&p3.call(F,V,1),p3.call(r,V,1);return r}function wn(r,a){for(var u=r?a.length:0,v=u-1;u--;){var M=a[u];if(u==v||M!==w){var w=M;q2(M)?p3.call(r,M,1):x8(r,M)}}return r}function v8(r,a){return r+v3(on()*(a-r+1))}function tc(r,a,u,v){for(var M=-1,w=l9(g3((a-r)/(u||1)),0),N=n0(w);w--;)N[v?w:++M]=r,r+=u;return N}function _8(r,a){var u="";if(!r||a<1||a>e0)return u;do a%2&&(u+=r),a=v3(a/2),a&&(r+=r);while(a);return u}function x5(r,a){return N8(ni(r,a,k9),r+"")}function nc(r){return cn(y7(r))}function ic(r,a){var u=y7(r);return U3(u,U1(a,0,u.length))}function y4(r,a,u,v){if(!j5(r))return r;a=v1(a,r);for(var M=-1,w=a.length,N=w-1,F=r;F!=null&&++M<w;){var V=C2(a[M]),m0=u;if(V==="__proto__"||V==="constructor"||V==="prototype")return r;if(M!=N){var v0=F[V];m0=v?v(v0,V,F):t,m0===t&&(m0=j5(v0)?v0:q2(a[M+1])?[]:{})}m4(F,V,m0),F=F[V]}return r}var Tn=_3?function(r,a){return _3.set(r,a),r}:k9,rc=m3?function(r,a){return m3(r,"toString",{configurable:!0,enumerable:!1,value:X8(a),writable:!0})}:k9;function sc(r){return U3(y7(r))}function c2(r,a,u){var v=-1,M=r.length;a<0&&(a=-a>M?0:M+a),u=u>M?M:u,u<0&&(u+=M),M=a>u?0:u-a>>>0,a>>>=0;for(var w=n0(M);++v<M;)w[v]=r[v+a];return w}function oc(r,a){var u;return m1(r,function(v,M,w){return u=a(v,M,w),!u}),!!u}function b3(r,a,u){var v=0,M=r==null?v:r.length;if(typeof a=="number"&&a===a&&M<=i0){for(;v<M;){var w=v+M>>>1,N=r[w];N!==null&&!K9(N)&&(u?N<=a:N<a)?v=w+1:M=w}return M}return y8(r,a,k9,u)}function y8(r,a,u,v){var M=0,w=r==null?0:r.length;if(w===0)return 0;a=u(a);for(var N=a!==a,F=a===null,V=K9(a),m0=a===t;M<w;){var v0=v3((M+w)/2),S0=u(r[v0]),O0=S0!==t,j0=S0===null,s5=S0===S0,g5=K9(S0);if(N)var o5=v||s5;else m0?o5=s5&&(v||O0):F?o5=s5&&O0&&(v||!j0):V?o5=s5&&O0&&!j0&&(v||!g5):j0||g5?o5=!1:o5=v?S0<=a:S0<a;o5?M=v0+1:w=v0}return b9(w,L0)}function Rn(r,a){for(var u=-1,v=r.length,M=0,w=[];++u<v;){var N=r[u],F=a?a(N):N;if(!u||!v2(F,V)){var V=F;w[M++]=N===0?0:N}}return w}function Cn(r){return typeof r=="number"?r:K9(r)?f0:+r}function J9(r){if(typeof r=="string")return r;if(f5(r))return q5(r,J9)+"";if(K9(r))return an?an.call(r):"";var a=r+"";return a=="0"&&1/r==-J?"-0":a}function g1(r,a,u){var v=-1,M=r3,w=r.length,N=!0,F=[],V=F;if(u)N=!1,M=q6;else if(w>=s){var m0=a?null:vc(r);if(m0)return o3(m0);N=!1,M=c4,V=new D1}else V=a?[]:F;e:for(;++v<w;){var v0=r[v],S0=a?a(v0):v0;if(v0=u||v0!==0?v0:0,N&&S0===S0){for(var O0=V.length;O0--;)if(V[O0]===S0)continue e;a&&V.push(S0),F.push(v0)}else M(V,S0,u)||(V!==F&&V.push(S0),F.push(v0))}return F}function x8(r,a){return a=v1(a,r),r=ii(r,a),r==null||delete r[C2(u2(a))]}function Pn(r,a,u,v){return y4(r,a,u(N1(r,a)),v)}function w3(r,a,u,v){for(var M=r.length,w=v?M:-1;(v?w--:++w<M)&&a(r[w],w,r););return u?c2(r,v?0:w,v?w+1:M):c2(r,v?w+1:0,v?M:w)}function Ln(r,a){var u=r;return u instanceof w5&&(u=u.value()),j6(a,function(v,M){return M.func.apply(M.thisArg,f1([v],M.args))},u)}function S8(r,a,u){var v=r.length;if(v<2)return v?g1(r[0]):[];for(var M=-1,w=n0(v);++M<v;)for(var N=r[M],F=-1;++F<v;)F!=M&&(w[M]=g4(w[M]||N,r[F],a,u));return g1(y9(w,1),a,u)}function In(r,a,u){for(var v=-1,M=r.length,w=a.length,N={};++v<M;){var F=v<w?a[v]:t;u(N,r[v],F)}return N}function M8(r){return t9(r)?r:[]}function E8(r){return typeof r=="function"?r:k9}function v1(r,a){return f5(r)?r:I8(r,a)?[r]:ai(B5(r))}var ac=x5;function _1(r,a,u){var v=r.length;return u=u===t?v:u,!a&&u>=v?r:c2(r,a,u)}var Dn=qa||function(r){return _9.clearTimeout(r)};function Un(r,a){if(a)return r.slice();var u=r.length,v=en?en(u):new r.constructor(u);return r.copy(v),v}function A8(r){var a=new r.constructor(r.byteLength);return new f3(a).set(new f3(r)),a}function lc(r,a){var u=a?A8(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function cc(r){var a=new r.constructor(r.source,$0.exec(r));return a.lastIndex=r.lastIndex,a}function uc(r){return p4?z5(p4.call(r)):{}}function Nn(r,a){var u=a?A8(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function Bn(r,a){if(r!==a){var u=r!==t,v=r===null,M=r===r,w=K9(r),N=a!==t,F=a===null,V=a===a,m0=K9(a);if(!F&&!m0&&!w&&r>a||w&&N&&V&&!F&&!m0||v&&N&&V||!u&&V||!M)return 1;if(!v&&!w&&!m0&&r<a||m0&&u&&M&&!v&&!w||F&&u&&M||!N&&M||!V)return-1}return 0}function hc(r,a,u){for(var v=-1,M=r.criteria,w=a.criteria,N=M.length,F=u.length;++v<N;){var V=Bn(M[v],w[v]);if(V){if(v>=F)return V;var m0=u[v];return V*(m0=="desc"?-1:1)}}return r.index-a.index}function On(r,a,u,v){for(var M=-1,w=r.length,N=u.length,F=-1,V=a.length,m0=l9(w-N,0),v0=n0(V+m0),S0=!v;++F<V;)v0[F]=a[F];for(;++M<N;)(S0||M<w)&&(v0[u[M]]=r[M]);for(;m0--;)v0[F++]=r[M++];return v0}function Fn(r,a,u,v){for(var M=-1,w=r.length,N=-1,F=u.length,V=-1,m0=a.length,v0=l9(w-F,0),S0=n0(v0+m0),O0=!v;++M<v0;)S0[M]=r[M];for(var j0=M;++V<m0;)S0[j0+V]=a[V];for(;++N<F;)(O0||M<w)&&(S0[j0+u[N]]=r[M++]);return S0}function G9(r,a){var u=-1,v=r.length;for(a||(a=n0(v));++u<v;)a[u]=r[u];return a}function R2(r,a,u,v){var M=!u;u||(u={});for(var w=-1,N=a.length;++w<N;){var F=a[w],V=v?v(u[F],r[F],F,u,r):t;V===t&&(V=r[F]),M?X2(u,F,V):m4(u,F,V)}return u}function fc(r,a){return R2(r,L8(r),a)}function dc(r,a){return R2(r,Kn(r),a)}function T3(r,a){return function(u,v){var M=f5(u)?_a:Nl,w=a?a():{};return M(u,r,n5(v,2),w)}}function m7(r){return x5(function(a,u){var v=-1,M=u.length,w=M>1?u[M-1]:t,N=M>2?u[2]:t;for(w=r.length>3&&typeof w=="function"?(M--,w):t,N&&I9(u[0],u[1],N)&&(w=M<3?t:w,M=1),a=z5(a);++v<M;){var F=u[v];F&&r(a,F,v,w)}return a})}function zn(r,a){return function(u,v){if(u==null)return u;if(!H9(u))return r(u,v);for(var M=u.length,w=a?M:-1,N=z5(u);(a?w--:++w<M)&&v(N[w],w,N)!==!1;);return u}}function Gn(r){return function(a,u,v){for(var M=-1,w=z5(a),N=v(a),F=N.length;F--;){var V=N[r?F:++M];if(u(w[V],V,w)===!1)break}return a}}function pc(r,a,u){var v=a&y,M=x4(r);function w(){var N=this&&this!==_9&&this instanceof w?M:r;return N.apply(v?u:this,arguments)}return w}function Hn(r){return function(a){a=B5(a);var u=l7(a)?m2(a):t,v=u?u[0]:a.charAt(0),M=u?_1(u,1).join(""):a.slice(1);return v[r]()+M}}function g7(r){return function(a){return j6(zi(Fi(a).replace(ra,"")),r,"")}}function x4(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var u=p7(r.prototype),v=r.apply(u,a);return j5(v)?v:u}}function mc(r,a,u){var v=x4(r);function M(){for(var w=arguments.length,N=n0(w),F=w,V=v7(M);F--;)N[F]=arguments[F];var m0=w<3&&N[0]!==V&&N[w-1]!==V?[]:d1(N,V);if(w-=m0.length,w<u)return Yn(r,a,R3,M.placeholder,t,N,m0,t,t,u-w);var v0=this&&this!==_9&&this instanceof M?v:r;return q9(v0,this,N)}return M}function Wn(r){return function(a,u,v){var M=z5(a);if(!H9(a)){var w=n5(u,3);a=p9(a),u=function(F){return w(M[F],F,M)}}var N=r(a,u,v);return N>-1?M[w?a[N]:N]:t}}function kn(r){return Z2(function(a){var u=a.length,v=u,M=a2.prototype.thru;for(r&&a.reverse();v--;){var w=a[v];if(typeof w!="function")throw new o2(l);if(M&&!N&&I3(w)=="wrapper")var N=new a2([],!0)}for(v=N?v:u;++v<u;){w=a[v];var F=I3(w),V=F=="wrapper"?C8(w):t;V&&D8(V[0])&&V[1]==(G|E|R|q)&&!V[4].length&&V[9]==1?N=N[I3(V[0])].apply(N,V[3]):N=w.length==1&&D8(w)?N[F]():N.thru(w)}return function(){var m0=arguments,v0=m0[0];if(N&&m0.length==1&&f5(v0))return N.plant(v0).value();for(var S0=0,O0=u?a[S0].apply(this,m0):v0;++S0<u;)O0=a[S0].call(this,O0);return O0}})}function R3(r,a,u,v,M,w,N,F,V,m0){var v0=a&G,S0=a&y,O0=a&g,j0=a&(E|L),s5=a&b,g5=O0?t:x4(r);function o5(){for(var E5=arguments.length,T5=n0(E5),Q9=E5;Q9--;)T5[Q9]=arguments[Q9];if(j0)var D9=v7(o5),$9=Ta(T5,D9);if(v&&(T5=On(T5,v,M,j0)),w&&(T5=Fn(T5,w,N,j0)),E5-=$9,j0&&E5<m0){var n9=d1(T5,D9);return Yn(r,a,R3,o5.placeholder,u,T5,n9,F,V,m0-E5)}var _2=S0?u:this,K2=O0?_2[r]:r;return E5=T5.length,F?T5=Nc(T5,F):s5&&E5>1&&T5.reverse(),v0&&V<E5&&(T5.length=V),this&&this!==_9&&this instanceof o5&&(K2=g5||x4(K2)),K2.apply(_2,T5)}return o5}function Vn(r,a){return function(u,v){return kl(u,r,a(v),{})}}function C3(r,a){return function(u,v){var M;if(u===t&&v===t)return a;if(u!==t&&(M=u),v!==t){if(M===t)return v;typeof u=="string"||typeof v=="string"?(u=J9(u),v=J9(v)):(u=Cn(u),v=Cn(v)),M=r(u,v)}return M}}function b8(r){return Z2(function(a){return a=q5(a,j9(n5())),x5(function(u){var v=this;return r(a,function(M){return q9(M,v,u)})})})}function P3(r,a){a=a===t?" ":J9(a);var u=a.length;if(u<2)return u?_8(a,r):a;var v=_8(a,g3(r/c7(a)));return l7(a)?_1(m2(v),0,r).join(""):v.slice(0,r)}function gc(r,a,u,v){var M=a&y,w=x4(r);function N(){for(var F=-1,V=arguments.length,m0=-1,v0=v.length,S0=n0(v0+V),O0=this&&this!==_9&&this instanceof N?w:r;++m0<v0;)S0[m0]=v[m0];for(;V--;)S0[m0++]=arguments[++F];return q9(O0,M?u:this,S0)}return N}function Xn(r){return function(a,u,v){return v&&typeof v!="number"&&I9(a,u,v)&&(u=v=t),a=J2(a),u===t?(u=a,a=0):u=J2(u),v=v===t?a<u?1:-1:J2(v),tc(a,u,v,r)}}function L3(r){return function(a,u){return typeof a=="string"&&typeof u=="string"||(a=h2(a),u=h2(u)),r(a,u)}}function Yn(r,a,u,v,M,w,N,F,V,m0){var v0=a&E,S0=v0?N:t,O0=v0?t:N,j0=v0?w:t,s5=v0?t:w;a|=v0?R:B,a&=~(v0?B:R),a&P||(a&=~(y|g));var g5=[r,a,M,j0,S0,s5,O0,F,V,m0],o5=u.apply(t,g5);return D8(r)&&ri(o5,g5),o5.placeholder=v,si(o5,r,a)}function w8(r){var a=a9[r];return function(u,v){if(u=h2(u),v=v==null?0:b9(m5(v),292),v&&sn(u)){var M=(B5(u)+"e").split("e"),w=a(M[0]+"e"+(+M[1]+v));return M=(B5(w)+"e").split("e"),+(M[0]+"e"+(+M[1]-v))}return a(u)}}var vc=f7&&1/o3(new f7([,-0]))[1]==J?function(r){return new f7(r)}:q8;function Zn(r){return function(a){var u=w9(a);return u==u0?n8(a):u==e5?Ua(a):wa(a,r(a))}}function Y2(r,a,u,v,M,w,N,F){var V=a&g;if(!V&&typeof r!="function")throw new o2(l);var m0=v?v.length:0;if(m0||(a&=~(R|B),v=M=t),N=N===t?N:l9(m5(N),0),F=F===t?F:m5(F),m0-=M?M.length:0,a&B){var v0=v,S0=M;v=M=t}var O0=V?t:C8(r),j0=[r,a,u,v,M,v0,S0,w,N,F];if(O0&&Ic(j0,O0),r=j0[0],a=j0[1],u=j0[2],v=j0[3],M=j0[4],F=j0[9]=j0[9]===t?V?0:r.length:l9(j0[9]-m0,0),!F&&a&(E|L)&&(a&=~(E|L)),!a||a==y)var s5=pc(r,a,u);else a==E||a==L?s5=mc(r,a,F):(a==R||a==(y|R))&&!M.length?s5=gc(r,a,u,v):s5=R3.apply(t,j0);var g5=O0?Tn:ri;return si(g5(s5,j0),r,a)}function qn(r,a,u,v){return r===t||v2(r,h7[u])&&!O5.call(v,u)?a:r}function jn(r,a,u,v,M,w){return j5(r)&&j5(a)&&(w.set(a,r),A3(r,a,t,jn,w),w.delete(a)),r}function _c(r){return E4(r)?t:r}function Jn(r,a,u,v,M,w){var N=u&x,F=r.length,V=a.length;if(F!=V&&!(N&&V>F))return!1;var m0=w.get(r),v0=w.get(a);if(m0&&v0)return m0==a&&v0==r;var S0=-1,O0=!0,j0=u&S?new D1:t;for(w.set(r,a),w.set(a,r);++S0<F;){var s5=r[S0],g5=a[S0];if(v)var o5=N?v(g5,s5,S0,a,r,w):v(s5,g5,S0,r,a,w);if(o5!==t){if(o5)continue;O0=!1;break}if(j0){if(!J6(a,function(E5,T5){if(!c4(j0,T5)&&(s5===E5||M(s5,E5,u,v,w)))return j0.push(T5)})){O0=!1;break}}else if(!(s5===g5||M(s5,g5,u,v,w))){O0=!1;break}}return w.delete(r),w.delete(a),O0}function yc(r,a,u,v,M,w,N){switch(u){case O:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case T0:return!(r.byteLength!=a.byteLength||!w(new f3(r),new f3(a)));case V0:case J0:case N0:return v2(+r,+a);case G0:return r.name==a.name&&r.message==a.message;case i5:case D:return r==a+"";case u0:var F=n8;case e5:var V=v&x;if(F||(F=o3),r.size!=a.size&&!V)return!1;var m0=N.get(r);if(m0)return m0==a;v|=S,N.set(r,a);var v0=Jn(F(r),F(a),v,M,w,N);return N.delete(r),v0;case T:if(p4)return p4.call(r)==p4.call(a)}return!1}function xc(r,a,u,v,M,w){var N=u&x,F=T8(r),V=F.length,m0=T8(a),v0=m0.length;if(V!=v0&&!N)return!1;for(var S0=V;S0--;){var O0=F[S0];if(!(N?O0 in a:O5.call(a,O0)))return!1}var j0=w.get(r),s5=w.get(a);if(j0&&s5)return j0==a&&s5==r;var g5=!0;w.set(r,a),w.set(a,r);for(var o5=N;++S0<V;){O0=F[S0];var E5=r[O0],T5=a[O0];if(v)var Q9=N?v(T5,E5,O0,a,r,w):v(E5,T5,O0,r,a,w);if(!(Q9===t?E5===T5||M(E5,T5,u,v,w):Q9)){g5=!1;break}o5||(o5=O0=="constructor")}if(g5&&!o5){var D9=r.constructor,$9=a.constructor;D9!=$9&&"constructor"in r&&"constructor"in a&&!(typeof D9=="function"&&D9 instanceof D9&&typeof $9=="function"&&$9 instanceof $9)&&(g5=!1)}return w.delete(r),w.delete(a),g5}function Z2(r){return N8(ni(r,t,hi),r+"")}function T8(r){return gn(r,p9,L8)}function R8(r){return gn(r,W9,Kn)}var C8=_3?function(r){return _3.get(r)}:q8;function I3(r){for(var a=r.name+"",u=d7[a],v=O5.call(d7,a)?u.length:0;v--;){var M=u[v],w=M.func;if(w==null||w==r)return M.name}return a}function v7(r){var a=O5.call(A,"placeholder")?A:r;return a.placeholder}function n5(){var r=A.iteratee||Y8;return r=r===Y8?yn:r,arguments.length?r(arguments[0],arguments[1]):r}function D3(r,a){var u=r.__data__;return Rc(a)?u[typeof a=="string"?"string":"hash"]:u.map}function P8(r){for(var a=p9(r),u=a.length;u--;){var v=a[u],M=r[v];a[u]=[v,M,ei(M)]}return a}function B1(r,a){var u=La(r,a);return _n(u)?u:t}function Sc(r){var a=O5.call(r,L1),u=r[L1];try{r[L1]=t;var v=!0}catch{}var M=u3.call(r);return v&&(a?r[L1]=u:delete r[L1]),M}var L8=r8?function(r){return r==null?[]:(r=z5(r),h1(r8(r),function(a){return nn.call(r,a)}))}:j8,Kn=r8?function(r){for(var a=[];r;)f1(a,L8(r)),r=d3(r);return a}:j8,w9=L9;(s8&&w9(new s8(new ArrayBuffer(1)))!=O||h4&&w9(new h4)!=u0||o8&&w9(o8.resolve())!=Z0||f7&&w9(new f7)!=e5||f4&&w9(new f4)!=y0)&&(w9=function(r){var a=L9(r),u=a==X0?r.constructor:t,v=u?O1(u):"";if(v)switch(v){case il:return O;case rl:return u0;case sl:return Z0;case ol:return e5;case al:return y0}return a});function Mc(r,a,u){for(var v=-1,M=u.length;++v<M;){var w=u[v],N=w.size;switch(w.type){case"drop":r+=N;break;case"dropRight":a-=N;break;case"take":a=b9(a,r+N);break;case"takeRight":r=l9(r,a-N);break}}return{start:r,end:a}}function Ec(r){var a=r.match(I);return a?a[1].split(K):[]}function Qn(r,a,u){a=v1(a,r);for(var v=-1,M=a.length,w=!1;++v<M;){var N=C2(a[v]);if(!(w=r!=null&&u(r,N)))break;r=r[N]}return w||++v!=M?w:(M=r==null?0:r.length,!!M&&G3(M)&&q2(N,M)&&(f5(r)||F1(r)))}function Ac(r){var a=r.length,u=new r.constructor(a);return a&&typeof r[0]=="string"&&O5.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function $n(r){return typeof r.constructor=="function"&&!S4(r)?p7(d3(r)):{}}function bc(r,a,u){var v=r.constructor;switch(a){case T0:return A8(r);case V0:case J0:return new v(+r);case O:return lc(r,u);case c0:case $:case C0:case B0:case Y0:case F0:case k0:case r5:case c5:return Nn(r,u);case u0:return new v;case N0:case D:return new v(r);case i5:return cc(r);case e5:return new v;case T:return uc(r)}}function wc(r,a){var u=a.length;if(!u)return r;var v=u-1;return a[v]=(u>1?"& ":"")+a[v],a=a.join(u>2?", ":" "),r.replace(E9,`{
/* [wrapped with `+a+`] */
`)}function Tc(r){return f5(r)||F1(r)||!!(rn&&r&&r[rn])}function q2(r,a){var u=typeof r;return a=a??e0,!!a&&(u=="number"||u!="symbol"&&M5.test(r))&&r>-1&&r%1==0&&r<a}function I9(r,a,u){if(!j5(u))return!1;var v=typeof a;return(v=="number"?H9(u)&&q2(a,u.length):v=="string"&&a in u)?v2(u[a],r):!1}function I8(r,a){if(f5(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||K9(r)?!0:H0.test(r)||!E0.test(r)||a!=null&&r in z5(a)}function Rc(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function D8(r){var a=I3(r),u=A[a];if(typeof u!="function"||!(a in w5.prototype))return!1;if(r===u)return!0;var v=C8(u);return!!v&&r===v[0]}function Cc(r){return!!$t&&$t in r}var Pc=l3?j2:J8;function S4(r){var a=r&&r.constructor,u=typeof a=="function"&&a.prototype||h7;return r===u}function ei(r){return r===r&&!j5(r)}function ti(r,a){return function(u){return u==null?!1:u[r]===a&&(a!==t||r in z5(u))}}function Lc(r){var a=F3(r,function(v){return u.size===f&&u.clear(),v}),u=a.cache;return a}function Ic(r,a){var u=r[1],v=a[1],M=u|v,w=M<(y|g|G),N=v==G&&u==E||v==G&&u==q&&r[7].length<=a[8]||v==(G|q)&&a[7].length<=a[8]&&u==E;if(!(w||N))return r;v&y&&(r[2]=a[2],M|=u&y?0:P);var F=a[3];if(F){var V=r[3];r[3]=V?On(V,F,a[4]):F,r[4]=V?d1(r[3],d):a[4]}return F=a[5],F&&(V=r[5],r[5]=V?Fn(V,F,a[6]):F,r[6]=V?d1(r[5],d):a[6]),F=a[7],F&&(r[7]=F),v&G&&(r[8]=r[8]==null?a[8]:b9(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=M,r}function Dc(r){var a=[];if(r!=null)for(var u in z5(r))a.push(u);return a}function Uc(r){return u3.call(r)}function ni(r,a,u){return a=l9(a===t?r.length-1:a,0),function(){for(var v=arguments,M=-1,w=l9(v.length-a,0),N=n0(w);++M<w;)N[M]=v[a+M];M=-1;for(var F=n0(a+1);++M<a;)F[M]=v[M];return F[a]=u(N),q9(r,this,F)}}function ii(r,a){return a.length<2?r:N1(r,c2(a,0,-1))}function Nc(r,a){for(var u=r.length,v=b9(a.length,u),M=G9(r);v--;){var w=a[v];r[v]=q2(w,u)?M[w]:t}return r}function U8(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var ri=oi(Tn),M4=Ja||function(r,a){return _9.setTimeout(r,a)},N8=oi(rc);function si(r,a,u){var v=a+"";return N8(r,wc(v,Bc(Ec(v),u)))}function oi(r){var a=0,u=0;return function(){var v=el(),M=H-(v-u);if(u=v,M>0){if(++a>=j)return arguments[0]}else a=0;return r.apply(t,arguments)}}function U3(r,a){var u=-1,v=r.length,M=v-1;for(a=a===t?v:a;++u<a;){var w=v8(u,M),N=r[w];r[w]=r[u],r[u]=N}return r.length=a,r}var ai=Lc(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(t5,function(u,v,M,w){a.push(M?w.replace(h0,"$1"):v||u)}),a});function C2(r){if(typeof r=="string"||K9(r))return r;var a=r+"";return a=="0"&&1/r==-J?"-0":a}function O1(r){if(r!=null){try{return c3.call(r)}catch{}try{return r+""}catch{}}return""}function Bc(r,a){return s2(g0,function(u){var v="_."+u[0];a&u[1]&&!r3(r,v)&&r.push(v)}),r.sort()}function li(r){if(r instanceof w5)return r.clone();var a=new a2(r.__wrapped__,r.__chain__);return a.__actions__=G9(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function Oc(r,a,u){(u?I9(r,a,u):a===t)?a=1:a=l9(m5(a),0);var v=r==null?0:r.length;if(!v||a<1)return[];for(var M=0,w=0,N=n0(g3(v/a));M<v;)N[w++]=c2(r,M,M+=a);return N}function Fc(r){for(var a=-1,u=r==null?0:r.length,v=0,M=[];++a<u;){var w=r[a];w&&(M[v++]=w)}return M}function zc(){var r=arguments.length;if(!r)return[];for(var a=n0(r-1),u=arguments[0],v=r;v--;)a[v-1]=arguments[v];return f1(f5(u)?G9(u):[u],y9(a,1))}var Gc=x5(function(r,a){return t9(r)?g4(r,y9(a,1,t9,!0)):[]}),Hc=x5(function(r,a){var u=u2(a);return t9(u)&&(u=t),t9(r)?g4(r,y9(a,1,t9,!0),n5(u,2)):[]}),Wc=x5(function(r,a){var u=u2(a);return t9(u)&&(u=t),t9(r)?g4(r,y9(a,1,t9,!0),t,u):[]});function kc(r,a,u){var v=r==null?0:r.length;return v?(a=u||a===t?1:m5(a),c2(r,a<0?0:a,v)):[]}function Vc(r,a,u){var v=r==null?0:r.length;return v?(a=u||a===t?1:m5(a),a=v-a,c2(r,0,a<0?0:a)):[]}function Xc(r,a){return r&&r.length?w3(r,n5(a,3),!0,!0):[]}function Yc(r,a){return r&&r.length?w3(r,n5(a,3),!0):[]}function Zc(r,a,u,v){var M=r==null?0:r.length;return M?(u&&typeof u!="number"&&I9(r,a,u)&&(u=0,v=M),zl(r,a,u,v)):[]}function ci(r,a,u){var v=r==null?0:r.length;if(!v)return-1;var M=u==null?0:m5(u);return M<0&&(M=l9(v+M,0)),s3(r,n5(a,3),M)}function ui(r,a,u){var v=r==null?0:r.length;if(!v)return-1;var M=v-1;return u!==t&&(M=m5(u),M=u<0?l9(v+M,0):b9(M,v-1)),s3(r,n5(a,3),M,!0)}function hi(r){var a=r==null?0:r.length;return a?y9(r,1):[]}function qc(r){var a=r==null?0:r.length;return a?y9(r,J):[]}function jc(r,a){var u=r==null?0:r.length;return u?(a=a===t?1:m5(a),y9(r,a)):[]}function Jc(r){for(var a=-1,u=r==null?0:r.length,v={};++a<u;){var M=r[a];v[M[0]]=M[1]}return v}function fi(r){return r&&r.length?r[0]:t}function Kc(r,a,u){var v=r==null?0:r.length;if(!v)return-1;var M=u==null?0:m5(u);return M<0&&(M=l9(v+M,0)),a7(r,a,M)}function Qc(r){var a=r==null?0:r.length;return a?c2(r,0,-1):[]}var $c=x5(function(r){var a=q5(r,M8);return a.length&&a[0]===r[0]?f8(a):[]}),eu=x5(function(r){var a=u2(r),u=q5(r,M8);return a===u2(u)?a=t:u.pop(),u.length&&u[0]===r[0]?f8(u,n5(a,2)):[]}),tu=x5(function(r){var a=u2(r),u=q5(r,M8);return a=typeof a=="function"?a:t,a&&u.pop(),u.length&&u[0]===r[0]?f8(u,t,a):[]});function nu(r,a){return r==null?"":Qa.call(r,a)}function u2(r){var a=r==null?0:r.length;return a?r[a-1]:t}function iu(r,a,u){var v=r==null?0:r.length;if(!v)return-1;var M=v;return u!==t&&(M=m5(u),M=M<0?l9(v+M,0):b9(M,v-1)),a===a?Ba(r,a,M):s3(r,Xt,M,!0)}function ru(r,a){return r&&r.length?En(r,m5(a)):t}var su=x5(di);function di(r,a){return r&&r.length&&a&&a.length?g8(r,a):r}function ou(r,a,u){return r&&r.length&&a&&a.length?g8(r,a,n5(u,2)):r}function au(r,a,u){return r&&r.length&&a&&a.length?g8(r,a,t,u):r}var lu=Z2(function(r,a){var u=r==null?0:r.length,v=l8(r,a);return wn(r,q5(a,function(M){return q2(M,u)?+M:M}).sort(Bn)),v});function cu(r,a){var u=[];if(!(r&&r.length))return u;var v=-1,M=[],w=r.length;for(a=n5(a,3);++v<w;){var N=r[v];a(N,v,r)&&(u.push(N),M.push(v))}return wn(r,M),u}function B8(r){return r==null?r:nl.call(r)}function uu(r,a,u){var v=r==null?0:r.length;return v?(u&&typeof u!="number"&&I9(r,a,u)?(a=0,u=v):(a=a==null?0:m5(a),u=u===t?v:m5(u)),c2(r,a,u)):[]}function hu(r,a){return b3(r,a)}function fu(r,a,u){return y8(r,a,n5(u,2))}function du(r,a){var u=r==null?0:r.length;if(u){var v=b3(r,a);if(v<u&&v2(r[v],a))return v}return-1}function pu(r,a){return b3(r,a,!0)}function mu(r,a,u){return y8(r,a,n5(u,2),!0)}function gu(r,a){var u=r==null?0:r.length;if(u){var v=b3(r,a,!0)-1;if(v2(r[v],a))return v}return-1}function vu(r){return r&&r.length?Rn(r):[]}function _u(r,a){return r&&r.length?Rn(r,n5(a,2)):[]}function yu(r){var a=r==null?0:r.length;return a?c2(r,1,a):[]}function xu(r,a,u){return r&&r.length?(a=u||a===t?1:m5(a),c2(r,0,a<0?0:a)):[]}function Su(r,a,u){var v=r==null?0:r.length;return v?(a=u||a===t?1:m5(a),a=v-a,c2(r,a<0?0:a,v)):[]}function Mu(r,a){return r&&r.length?w3(r,n5(a,3),!1,!0):[]}function Eu(r,a){return r&&r.length?w3(r,n5(a,3)):[]}var Au=x5(function(r){return g1(y9(r,1,t9,!0))}),bu=x5(function(r){var a=u2(r);return t9(a)&&(a=t),g1(y9(r,1,t9,!0),n5(a,2))}),wu=x5(function(r){var a=u2(r);return a=typeof a=="function"?a:t,g1(y9(r,1,t9,!0),t,a)});function Tu(r){return r&&r.length?g1(r):[]}function Ru(r,a){return r&&r.length?g1(r,n5(a,2)):[]}function Cu(r,a){return a=typeof a=="function"?a:t,r&&r.length?g1(r,t,a):[]}function O8(r){if(!(r&&r.length))return[];var a=0;return r=h1(r,function(u){if(t9(u))return a=l9(u.length,a),!0}),e8(a,function(u){return q5(r,K6(u))})}function pi(r,a){if(!(r&&r.length))return[];var u=O8(r);return a==null?u:q5(u,function(v){return q9(a,t,v)})}var Pu=x5(function(r,a){return t9(r)?g4(r,a):[]}),Lu=x5(function(r){return S8(h1(r,t9))}),Iu=x5(function(r){var a=u2(r);return t9(a)&&(a=t),S8(h1(r,t9),n5(a,2))}),Du=x5(function(r){var a=u2(r);return a=typeof a=="function"?a:t,S8(h1(r,t9),t,a)}),Uu=x5(O8);function Nu(r,a){return In(r||[],a||[],m4)}function Bu(r,a){return In(r||[],a||[],y4)}var Ou=x5(function(r){var a=r.length,u=a>1?r[a-1]:t;return u=typeof u=="function"?(r.pop(),u):t,pi(r,u)});function mi(r){var a=A(r);return a.__chain__=!0,a}function Fu(r,a){return a(r),r}function N3(r,a){return a(r)}var zu=Z2(function(r){var a=r.length,u=a?r[0]:0,v=this.__wrapped__,M=function(w){return l8(w,r)};return a>1||this.__actions__.length||!(v instanceof w5)||!q2(u)?this.thru(M):(v=v.slice(u,+u+(a?1:0)),v.__actions__.push({func:N3,args:[M],thisArg:t}),new a2(v,this.__chain__).thru(function(w){return a&&!w.length&&w.push(t),w}))});function Gu(){return mi(this)}function Hu(){return new a2(this.value(),this.__chain__)}function Wu(){this.__values__===t&&(this.__values__=Ci(this.value()));var r=this.__index__>=this.__values__.length,a=r?t:this.__values__[this.__index__++];return{done:r,value:a}}function ku(){return this}function Vu(r){for(var a,u=this;u instanceof x3;){var v=li(u);v.__index__=0,v.__values__=t,a?M.__wrapped__=v:a=v;var M=v;u=u.__wrapped__}return M.__wrapped__=r,a}function Xu(){var r=this.__wrapped__;if(r instanceof w5){var a=r;return this.__actions__.length&&(a=new w5(this)),a=a.reverse(),a.__actions__.push({func:N3,args:[B8],thisArg:t}),new a2(a,this.__chain__)}return this.thru(B8)}function Yu(){return Ln(this.__wrapped__,this.__actions__)}var Zu=T3(function(r,a,u){O5.call(r,u)?++r[u]:X2(r,u,1)});function qu(r,a,u){var v=f5(r)?kt:Fl;return u&&I9(r,a,u)&&(a=t),v(r,n5(a,3))}function ju(r,a){var u=f5(r)?h1:pn;return u(r,n5(a,3))}var Ju=Wn(ci),Ku=Wn(ui);function Qu(r,a){return y9(B3(r,a),1)}function $u(r,a){return y9(B3(r,a),J)}function eh(r,a,u){return u=u===t?1:m5(u),y9(B3(r,a),u)}function gi(r,a){var u=f5(r)?s2:m1;return u(r,n5(a,3))}function vi(r,a){var u=f5(r)?ya:dn;return u(r,n5(a,3))}var th=T3(function(r,a,u){O5.call(r,u)?r[u].push(a):X2(r,u,[a])});function nh(r,a,u,v){r=H9(r)?r:y7(r),u=u&&!v?m5(u):0;var M=r.length;return u<0&&(u=l9(M+u,0)),H3(r)?u<=M&&r.indexOf(a,u)>-1:!!M&&a7(r,a,u)>-1}var ih=x5(function(r,a,u){var v=-1,M=typeof a=="function",w=H9(r)?n0(r.length):[];return m1(r,function(N){w[++v]=M?q9(a,N,u):v4(N,a,u)}),w}),rh=T3(function(r,a,u){X2(r,u,a)});function B3(r,a){var u=f5(r)?q5:xn;return u(r,n5(a,3))}function sh(r,a,u,v){return r==null?[]:(f5(a)||(a=a==null?[]:[a]),u=v?t:u,f5(u)||(u=u==null?[]:[u]),An(r,a,u))}var oh=T3(function(r,a,u){r[u?0:1].push(a)},function(){return[[],[]]});function ah(r,a,u){var v=f5(r)?j6:Zt,M=arguments.length<3;return v(r,n5(a,4),u,M,m1)}function lh(r,a,u){var v=f5(r)?xa:Zt,M=arguments.length<3;return v(r,n5(a,4),u,M,dn)}function ch(r,a){var u=f5(r)?h1:pn;return u(r,z3(n5(a,3)))}function uh(r){var a=f5(r)?cn:nc;return a(r)}function hh(r,a,u){(u?I9(r,a,u):a===t)?a=1:a=m5(a);var v=f5(r)?Dl:ic;return v(r,a)}function fh(r){var a=f5(r)?Ul:sc;return a(r)}function dh(r){if(r==null)return 0;if(H9(r))return H3(r)?c7(r):r.length;var a=w9(r);return a==u0||a==e5?r.size:p8(r).length}function ph(r,a,u){var v=f5(r)?J6:oc;return u&&I9(r,a,u)&&(a=t),v(r,n5(a,3))}var mh=x5(function(r,a){if(r==null)return[];var u=a.length;return u>1&&I9(r,a[0],a[1])?a=[]:u>2&&I9(a[0],a[1],a[2])&&(a=[a[0]]),An(r,y9(a,1),[])}),O3=ja||function(){return _9.Date.now()};function gh(r,a){if(typeof a!="function")throw new o2(l);return r=m5(r),function(){if(--r<1)return a.apply(this,arguments)}}function _i(r,a,u){return a=u?t:a,a=r&&a==null?r.length:a,Y2(r,G,t,t,t,t,a)}function yi(r,a){var u;if(typeof a!="function")throw new o2(l);return r=m5(r),function(){return--r>0&&(u=a.apply(this,arguments)),r<=1&&(a=t),u}}var F8=x5(function(r,a,u){var v=y;if(u.length){var M=d1(u,v7(F8));v|=R}return Y2(r,v,a,u,M)}),xi=x5(function(r,a,u){var v=y|g;if(u.length){var M=d1(u,v7(xi));v|=R}return Y2(a,v,r,u,M)});function Si(r,a,u){a=u?t:a;var v=Y2(r,E,t,t,t,t,t,a);return v.placeholder=Si.placeholder,v}function Mi(r,a,u){a=u?t:a;var v=Y2(r,L,t,t,t,t,t,a);return v.placeholder=Mi.placeholder,v}function Ei(r,a,u){var v,M,w,N,F,V,m0=0,v0=!1,S0=!1,O0=!0;if(typeof r!="function")throw new o2(l);a=h2(a)||0,j5(u)&&(v0=!!u.leading,S0="maxWait"in u,w=S0?l9(h2(u.maxWait)||0,a):w,O0="trailing"in u?!!u.trailing:O0);function j0(n9){var _2=v,K2=M;return v=M=t,m0=n9,N=r.apply(K2,_2),N}function s5(n9){return m0=n9,F=M4(E5,a),v0?j0(n9):N}function g5(n9){var _2=n9-V,K2=n9-m0,Wi=a-_2;return S0?b9(Wi,w-K2):Wi}function o5(n9){var _2=n9-V,K2=n9-m0;return V===t||_2>=a||_2<0||S0&&K2>=w}function E5(){var n9=O3();if(o5(n9))return T5(n9);F=M4(E5,g5(n9))}function T5(n9){return F=t,O0&&v?j0(n9):(v=M=t,N)}function Q9(){F!==t&&Dn(F),m0=0,v=V=M=F=t}function D9(){return F===t?N:T5(O3())}function $9(){var n9=O3(),_2=o5(n9);if(v=arguments,M=this,V=n9,_2){if(F===t)return s5(V);if(S0)return Dn(F),F=M4(E5,a),j0(V)}return F===t&&(F=M4(E5,a)),N}return $9.cancel=Q9,$9.flush=D9,$9}var vh=x5(function(r,a){return fn(r,1,a)}),_h=x5(function(r,a,u){return fn(r,h2(a)||0,u)});function yh(r){return Y2(r,b)}function F3(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new o2(l);var u=function(){var v=arguments,M=a?a.apply(this,v):v[0],w=u.cache;if(w.has(M))return w.get(M);var N=r.apply(this,v);return u.cache=w.set(M,N)||w,N};return u.cache=new(F3.Cache||V2),u}F3.Cache=V2;function z3(r){if(typeof r!="function")throw new o2(l);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function xh(r){return yi(2,r)}var Sh=ac(function(r,a){a=a.length==1&&f5(a[0])?q5(a[0],j9(n5())):q5(y9(a,1),j9(n5()));var u=a.length;return x5(function(v){for(var M=-1,w=b9(v.length,u);++M<w;)v[M]=a[M].call(this,v[M]);return q9(r,this,v)})}),z8=x5(function(r,a){var u=d1(a,v7(z8));return Y2(r,R,t,a,u)}),Ai=x5(function(r,a){var u=d1(a,v7(Ai));return Y2(r,B,t,a,u)}),Mh=Z2(function(r,a){return Y2(r,q,t,t,t,a)});function Eh(r,a){if(typeof r!="function")throw new o2(l);return a=a===t?a:m5(a),x5(r,a)}function Ah(r,a){if(typeof r!="function")throw new o2(l);return a=a==null?0:l9(m5(a),0),x5(function(u){var v=u[a],M=_1(u,0,a);return v&&f1(M,v),q9(r,this,M)})}function bh(r,a,u){var v=!0,M=!0;if(typeof r!="function")throw new o2(l);return j5(u)&&(v="leading"in u?!!u.leading:v,M="trailing"in u?!!u.trailing:M),Ei(r,a,{leading:v,maxWait:a,trailing:M})}function wh(r){return _i(r,1)}function Th(r,a){return z8(E8(a),r)}function Rh(){if(!arguments.length)return[];var r=arguments[0];return f5(r)?r:[r]}function Ch(r){return l2(r,_)}function Ph(r,a){return a=typeof a=="function"?a:t,l2(r,_,a)}function Lh(r){return l2(r,p|_)}function Ih(r,a){return a=typeof a=="function"?a:t,l2(r,p|_,a)}function Dh(r,a){return a==null||hn(r,a,p9(a))}function v2(r,a){return r===a||r!==r&&a!==a}var Uh=L3(h8),Nh=L3(function(r,a){return r>=a}),F1=vn(function(){return arguments}())?vn:function(r){return $5(r)&&O5.call(r,"callee")&&!nn.call(r,"callee")},f5=n0.isArray,Bh=Ot?j9(Ot):Vl;function H9(r){return r!=null&&G3(r.length)&&!j2(r)}function t9(r){return $5(r)&&H9(r)}function Oh(r){return r===!0||r===!1||$5(r)&&L9(r)==V0}var y1=Ka||J8,Fh=Ft?j9(Ft):Xl;function zh(r){return $5(r)&&r.nodeType===1&&!E4(r)}function Gh(r){if(r==null)return!0;if(H9(r)&&(f5(r)||typeof r=="string"||typeof r.splice=="function"||y1(r)||_7(r)||F1(r)))return!r.length;var a=w9(r);if(a==u0||a==e5)return!r.size;if(S4(r))return!p8(r).length;for(var u in r)if(O5.call(r,u))return!1;return!0}function Hh(r,a){return _4(r,a)}function Wh(r,a,u){u=typeof u=="function"?u:t;var v=u?u(r,a):t;return v===t?_4(r,a,t,u):!!v}function G8(r){if(!$5(r))return!1;var a=L9(r);return a==G0||a==A0||typeof r.message=="string"&&typeof r.name=="string"&&!E4(r)}function kh(r){return typeof r=="number"&&sn(r)}function j2(r){if(!j5(r))return!1;var a=L9(r);return a==_0||a==s0||a==z||a==K0}function bi(r){return typeof r=="number"&&r==m5(r)}function G3(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=e0}function j5(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function $5(r){return r!=null&&typeof r=="object"}var wi=zt?j9(zt):Zl;function Vh(r,a){return r===a||d8(r,a,P8(a))}function Xh(r,a,u){return u=typeof u=="function"?u:t,d8(r,a,P8(a),u)}function Yh(r){return Ti(r)&&r!=+r}function Zh(r){if(Pc(r))throw new h5(o);return _n(r)}function qh(r){return r===null}function jh(r){return r==null}function Ti(r){return typeof r=="number"||$5(r)&&L9(r)==N0}function E4(r){if(!$5(r)||L9(r)!=X0)return!1;var a=d3(r);if(a===null)return!0;var u=O5.call(a,"constructor")&&a.constructor;return typeof u=="function"&&u instanceof u&&c3.call(u)==Xa}var H8=Gt?j9(Gt):ql;function Jh(r){return bi(r)&&r>=-e0&&r<=e0}var Ri=Ht?j9(Ht):jl;function H3(r){return typeof r=="string"||!f5(r)&&$5(r)&&L9(r)==D}function K9(r){return typeof r=="symbol"||$5(r)&&L9(r)==T}var _7=Wt?j9(Wt):Jl;function Kh(r){return r===t}function Qh(r){return $5(r)&&w9(r)==y0}function $h(r){return $5(r)&&L9(r)==x0}var ef=L3(m8),tf=L3(function(r,a){return r<=a});function Ci(r){if(!r)return[];if(H9(r))return H3(r)?m2(r):G9(r);if(u4&&r[u4])return Da(r[u4]());var a=w9(r),u=a==u0?n8:a==e5?o3:y7;return u(r)}function J2(r){if(!r)return r===0?r:0;if(r=h2(r),r===J||r===-J){var a=r<0?-1:1;return a*p0}return r===r?r:0}function m5(r){var a=J2(r),u=a%1;return a===a?u?a-u:a:0}function Pi(r){return r?U1(m5(r),0,P0):0}function h2(r){if(typeof r=="number")return r;if(K9(r))return f0;if(j5(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=j5(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=qt(r);var u=p5.test(r);return u||y5.test(r)?ga(r.slice(2),u?2:8):a5.test(r)?f0:+r}function Li(r){return R2(r,W9(r))}function nf(r){return r?U1(m5(r),-e0,e0):r===0?r:0}function B5(r){return r==null?"":J9(r)}var rf=m7(function(r,a){if(S4(a)||H9(a)){R2(a,p9(a),r);return}for(var u in a)O5.call(a,u)&&m4(r,u,a[u])}),Ii=m7(function(r,a){R2(a,W9(a),r)}),W3=m7(function(r,a,u,v){R2(a,W9(a),r,v)}),sf=m7(function(r,a,u,v){R2(a,p9(a),r,v)}),of=Z2(l8);function af(r,a){var u=p7(r);return a==null?u:un(u,a)}var lf=x5(function(r,a){r=z5(r);var u=-1,v=a.length,M=v>2?a[2]:t;for(M&&I9(a[0],a[1],M)&&(v=1);++u<v;)for(var w=a[u],N=W9(w),F=-1,V=N.length;++F<V;){var m0=N[F],v0=r[m0];(v0===t||v2(v0,h7[m0])&&!O5.call(r,m0))&&(r[m0]=w[m0])}return r}),cf=x5(function(r){return r.push(t,jn),q9(Di,t,r)});function uf(r,a){return Vt(r,n5(a,3),T2)}function hf(r,a){return Vt(r,n5(a,3),u8)}function ff(r,a){return r==null?r:c8(r,n5(a,3),W9)}function df(r,a){return r==null?r:mn(r,n5(a,3),W9)}function pf(r,a){return r&&T2(r,n5(a,3))}function mf(r,a){return r&&u8(r,n5(a,3))}function gf(r){return r==null?[]:E3(r,p9(r))}function vf(r){return r==null?[]:E3(r,W9(r))}function W8(r,a,u){var v=r==null?t:N1(r,a);return v===t?u:v}function _f(r,a){return r!=null&&Qn(r,a,Gl)}function k8(r,a){return r!=null&&Qn(r,a,Hl)}var yf=Vn(function(r,a,u){a!=null&&typeof a.toString!="function"&&(a=u3.call(a)),r[a]=u},X8(k9)),xf=Vn(function(r,a,u){a!=null&&typeof a.toString!="function"&&(a=u3.call(a)),O5.call(r,a)?r[a].push(u):r[a]=[u]},n5),Sf=x5(v4);function p9(r){return H9(r)?ln(r):p8(r)}function W9(r){return H9(r)?ln(r,!0):Kl(r)}function Mf(r,a){var u={};return a=n5(a,3),T2(r,function(v,M,w){X2(u,a(v,M,w),v)}),u}function Ef(r,a){var u={};return a=n5(a,3),T2(r,function(v,M,w){X2(u,M,a(v,M,w))}),u}var Af=m7(function(r,a,u){A3(r,a,u)}),Di=m7(function(r,a,u,v){A3(r,a,u,v)}),bf=Z2(function(r,a){var u={};if(r==null)return u;var v=!1;a=q5(a,function(w){return w=v1(w,r),v||(v=w.length>1),w}),R2(r,R8(r),u),v&&(u=l2(u,p|m|_,_c));for(var M=a.length;M--;)x8(u,a[M]);return u});function wf(r,a){return Ui(r,z3(n5(a)))}var Tf=Z2(function(r,a){return r==null?{}:$l(r,a)});function Ui(r,a){if(r==null)return{};var u=q5(R8(r),function(v){return[v]});return a=n5(a),bn(r,u,function(v,M){return a(v,M[0])})}function Rf(r,a,u){a=v1(a,r);var v=-1,M=a.length;for(M||(M=1,r=t);++v<M;){var w=r==null?t:r[C2(a[v])];w===t&&(v=M,w=u),r=j2(w)?w.call(r):w}return r}function Cf(r,a,u){return r==null?r:y4(r,a,u)}function Pf(r,a,u,v){return v=typeof v=="function"?v:t,r==null?r:y4(r,a,u,v)}var Ni=Zn(p9),Bi=Zn(W9);function Lf(r,a,u){var v=f5(r),M=v||y1(r)||_7(r);if(a=n5(a,4),u==null){var w=r&&r.constructor;M?u=v?new w:[]:j5(r)?u=j2(w)?p7(d3(r)):{}:u={}}return(M?s2:T2)(r,function(N,F,V){return a(u,N,F,V)}),u}function If(r,a){return r==null?!0:x8(r,a)}function Df(r,a,u){return r==null?r:Pn(r,a,E8(u))}function Uf(r,a,u,v){return v=typeof v=="function"?v:t,r==null?r:Pn(r,a,E8(u),v)}function y7(r){return r==null?[]:t8(r,p9(r))}function Nf(r){return r==null?[]:t8(r,W9(r))}function Bf(r,a,u){return u===t&&(u=a,a=t),u!==t&&(u=h2(u),u=u===u?u:0),a!==t&&(a=h2(a),a=a===a?a:0),U1(h2(r),a,u)}function Of(r,a,u){return a=J2(a),u===t?(u=a,a=0):u=J2(u),r=h2(r),Wl(r,a,u)}function Ff(r,a,u){if(u&&typeof u!="boolean"&&I9(r,a,u)&&(a=u=t),u===t&&(typeof a=="boolean"?(u=a,a=t):typeof r=="boolean"&&(u=r,r=t)),r===t&&a===t?(r=0,a=1):(r=J2(r),a===t?(a=r,r=0):a=J2(a)),r>a){var v=r;r=a,a=v}if(u||r%1||a%1){var M=on();return b9(r+M*(a-r+ma("1e-"+((M+"").length-1))),a)}return v8(r,a)}var zf=g7(function(r,a,u){return a=a.toLowerCase(),r+(u?Oi(a):a)});function Oi(r){return V8(B5(r).toLowerCase())}function Fi(r){return r=B5(r),r&&r.replace(N5,Ra).replace(sa,"")}function Gf(r,a,u){r=B5(r),a=J9(a);var v=r.length;u=u===t?v:U1(m5(u),0,v);var M=u;return u-=a.length,u>=0&&r.slice(u,M)==a}function Hf(r){return r=B5(r),r&&I5.test(r)?r.replace(z0,Ca):r}function Wf(r){return r=B5(r),r&&l5.test(r)?r.replace(u5,"\\$&"):r}var kf=g7(function(r,a,u){return r+(u?"-":"")+a.toLowerCase()}),Vf=g7(function(r,a,u){return r+(u?" ":"")+a.toLowerCase()}),Xf=Hn("toLowerCase");function Yf(r,a,u){r=B5(r),a=m5(a);var v=a?c7(r):0;if(!a||v>=a)return r;var M=(a-v)/2;return P3(v3(M),u)+r+P3(g3(M),u)}function Zf(r,a,u){r=B5(r),a=m5(a);var v=a?c7(r):0;return a&&v<a?r+P3(a-v,u):r}function qf(r,a,u){r=B5(r),a=m5(a);var v=a?c7(r):0;return a&&v<a?P3(a-v,u)+r:r}function jf(r,a,u){return u||a==null?a=0:a&&(a=+a),tl(B5(r).replace(D5,""),a||0)}function Jf(r,a,u){return(u?I9(r,a,u):a===t)?a=1:a=m5(a),_8(B5(r),a)}function Kf(){var r=arguments,a=B5(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var Qf=g7(function(r,a,u){return r+(u?"_":"")+a.toLowerCase()});function $f(r,a,u){return u&&typeof u!="number"&&I9(r,a,u)&&(a=u=t),u=u===t?P0:u>>>0,u?(r=B5(r),r&&(typeof a=="string"||a!=null&&!H8(a))&&(a=J9(a),!a&&l7(r))?_1(m2(r),0,u):r.split(a,u)):[]}var ed=g7(function(r,a,u){return r+(u?" ":"")+V8(a)});function td(r,a,u){return r=B5(r),u=u==null?0:U1(m5(u),0,r.length),a=J9(a),r.slice(u,u+a.length)==a}function nd(r,a,u){var v=A.templateSettings;u&&I9(r,a,u)&&(a=t),r=B5(r),a=W3({},a,v,qn);var M=W3({},a.imports,v.imports,qn),w=p9(M),N=t8(M,w),F,V,m0=0,v0=a.interpolate||s9,S0="__p += '",O0=i8((a.escape||s9).source+"|"+v0.source+"|"+(v0===r0?Q0:s9).source+"|"+(a.evaluate||s9).source+"|$","g"),j0="//# sourceURL="+(O5.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ua+"]")+`
`;r.replace(O0,function(o5,E5,T5,Q9,D9,$9){return T5||(T5=Q9),S0+=r.slice(m0,$9).replace(Z9,Pa),E5&&(F=!0,S0+=`' +
__e(`+E5+`) +
'`),D9&&(V=!0,S0+=`';
`+D9+`;
__p += '`),T5&&(S0+=`' +
((__t = (`+T5+`)) == null ? '' : __t) +
'`),m0=$9+o5.length,o5}),S0+=`';
`;var s5=O5.call(a,"variable")&&a.variable;if(!s5)S0=`with (obj) {
`+S0+`
}
`;else if(Z.test(s5))throw new h5(c);S0=(V?S0.replace(V5,""):S0).replace(W,"$1").replace(o0,"$1;"),S0="function("+(s5||"obj")+`) {
`+(s5?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+S0+`return __p
}`;var g5=Gi(function(){return U5(w,j0+"return "+S0).apply(t,N)});if(g5.source=S0,G8(g5))throw g5;return g5}function id(r){return B5(r).toLowerCase()}function rd(r){return B5(r).toUpperCase()}function sd(r,a,u){if(r=B5(r),r&&(u||a===t))return qt(r);if(!r||!(a=J9(a)))return r;var v=m2(r),M=m2(a),w=jt(v,M),N=Jt(v,M)+1;return _1(v,w,N).join("")}function od(r,a,u){if(r=B5(r),r&&(u||a===t))return r.slice(0,Qt(r)+1);if(!r||!(a=J9(a)))return r;var v=m2(r),M=Jt(v,m2(a))+1;return _1(v,0,M).join("")}function ad(r,a,u){if(r=B5(r),r&&(u||a===t))return r.replace(D5,"");if(!r||!(a=J9(a)))return r;var v=m2(r),M=jt(v,m2(a));return _1(v,M).join("")}function ld(r,a){var u=C,v=X;if(j5(a)){var M="separator"in a?a.separator:M;u="length"in a?m5(a.length):u,v="omission"in a?J9(a.omission):v}r=B5(r);var w=r.length;if(l7(r)){var N=m2(r);w=N.length}if(u>=w)return r;var F=u-c7(v);if(F<1)return v;var V=N?_1(N,0,F).join(""):r.slice(0,F);if(M===t)return V+v;if(N&&(F+=V.length-F),H8(M)){if(r.slice(F).search(M)){var m0,v0=V;for(M.global||(M=i8(M.source,B5($0.exec(M))+"g")),M.lastIndex=0;m0=M.exec(v0);)var S0=m0.index;V=V.slice(0,S0===t?F:S0)}}else if(r.indexOf(J9(M),F)!=F){var O0=V.lastIndexOf(M);O0>-1&&(V=V.slice(0,O0))}return V+v}function cd(r){return r=B5(r),r&&q0.test(r)?r.replace(M0,Oa):r}var ud=g7(function(r,a,u){return r+(u?" ":"")+a.toUpperCase()}),V8=Hn("toUpperCase");function zi(r,a,u){return r=B5(r),a=u?t:a,a===t?Ia(r)?Ga(r):Ea(r):r.match(a)||[]}var Gi=x5(function(r,a){try{return q9(r,t,a)}catch(u){return G8(u)?u:new h5(u)}}),hd=Z2(function(r,a){return s2(a,function(u){u=C2(u),X2(r,u,F8(r[u],r))}),r});function fd(r){var a=r==null?0:r.length,u=n5();return r=a?q5(r,function(v){if(typeof v[1]!="function")throw new o2(l);return[u(v[0]),v[1]]}):[],x5(function(v){for(var M=-1;++M<a;){var w=r[M];if(q9(w[0],this,v))return q9(w[1],this,v)}})}function dd(r){return Ol(l2(r,p))}function X8(r){return function(){return r}}function pd(r,a){return r==null||r!==r?a:r}var md=kn(),gd=kn(!0);function k9(r){return r}function Y8(r){return yn(typeof r=="function"?r:l2(r,p))}function vd(r){return Sn(l2(r,p))}function _d(r,a){return Mn(r,l2(a,p))}var yd=x5(function(r,a){return function(u){return v4(u,r,a)}}),xd=x5(function(r,a){return function(u){return v4(r,u,a)}});function Z8(r,a,u){var v=p9(a),M=E3(a,v);u==null&&!(j5(a)&&(M.length||!v.length))&&(u=a,a=r,r=this,M=E3(a,p9(a)));var w=!(j5(u)&&"chain"in u)||!!u.chain,N=j2(r);return s2(M,function(F){var V=a[F];r[F]=V,N&&(r.prototype[F]=function(){var m0=this.__chain__;if(w||m0){var v0=r(this.__wrapped__),S0=v0.__actions__=G9(this.__actions__);return S0.push({func:V,args:arguments,thisArg:r}),v0.__chain__=m0,v0}return V.apply(r,f1([this.value()],arguments))})}),r}function Sd(){return _9._===this&&(_9._=Ya),this}function q8(){}function Md(r){return r=m5(r),x5(function(a){return En(a,r)})}var Ed=b8(q5),Ad=b8(kt),bd=b8(J6);function Hi(r){return I8(r)?K6(C2(r)):ec(r)}function wd(r){return function(a){return r==null?t:N1(r,a)}}var Td=Xn(),Rd=Xn(!0);function j8(){return[]}function J8(){return!1}function Cd(){return{}}function Pd(){return""}function Ld(){return!0}function Id(r,a){if(r=m5(r),r<1||r>e0)return[];var u=P0,v=b9(r,P0);a=n5(a),r-=P0;for(var M=e8(v,a);++u<r;)a(u);return M}function Dd(r){return f5(r)?q5(r,C2):K9(r)?[r]:G9(ai(B5(r)))}function Ud(r){var a=++Va;return B5(r)+a}var Nd=C3(function(r,a){return r+a},0),Bd=w8("ceil"),Od=C3(function(r,a){return r/a},1),Fd=w8("floor");function zd(r){return r&&r.length?M3(r,k9,h8):t}function Gd(r,a){return r&&r.length?M3(r,n5(a,2),h8):t}function Hd(r){return Yt(r,k9)}function Wd(r,a){return Yt(r,n5(a,2))}function kd(r){return r&&r.length?M3(r,k9,m8):t}function Vd(r,a){return r&&r.length?M3(r,n5(a,2),m8):t}var Xd=C3(function(r,a){return r*a},1),Yd=w8("round"),Zd=C3(function(r,a){return r-a},0);function qd(r){return r&&r.length?$6(r,k9):0}function jd(r,a){return r&&r.length?$6(r,n5(a,2)):0}return A.after=gh,A.ary=_i,A.assign=rf,A.assignIn=Ii,A.assignInWith=W3,A.assignWith=sf,A.at=of,A.before=yi,A.bind=F8,A.bindAll=hd,A.bindKey=xi,A.castArray=Rh,A.chain=mi,A.chunk=Oc,A.compact=Fc,A.concat=zc,A.cond=fd,A.conforms=dd,A.constant=X8,A.countBy=Zu,A.create=af,A.curry=Si,A.curryRight=Mi,A.debounce=Ei,A.defaults=lf,A.defaultsDeep=cf,A.defer=vh,A.delay=_h,A.difference=Gc,A.differenceBy=Hc,A.differenceWith=Wc,A.drop=kc,A.dropRight=Vc,A.dropRightWhile=Xc,A.dropWhile=Yc,A.fill=Zc,A.filter=ju,A.flatMap=Qu,A.flatMapDeep=$u,A.flatMapDepth=eh,A.flatten=hi,A.flattenDeep=qc,A.flattenDepth=jc,A.flip=yh,A.flow=md,A.flowRight=gd,A.fromPairs=Jc,A.functions=gf,A.functionsIn=vf,A.groupBy=th,A.initial=Qc,A.intersection=$c,A.intersectionBy=eu,A.intersectionWith=tu,A.invert=yf,A.invertBy=xf,A.invokeMap=ih,A.iteratee=Y8,A.keyBy=rh,A.keys=p9,A.keysIn=W9,A.map=B3,A.mapKeys=Mf,A.mapValues=Ef,A.matches=vd,A.matchesProperty=_d,A.memoize=F3,A.merge=Af,A.mergeWith=Di,A.method=yd,A.methodOf=xd,A.mixin=Z8,A.negate=z3,A.nthArg=Md,A.omit=bf,A.omitBy=wf,A.once=xh,A.orderBy=sh,A.over=Ed,A.overArgs=Sh,A.overEvery=Ad,A.overSome=bd,A.partial=z8,A.partialRight=Ai,A.partition=oh,A.pick=Tf,A.pickBy=Ui,A.property=Hi,A.propertyOf=wd,A.pull=su,A.pullAll=di,A.pullAllBy=ou,A.pullAllWith=au,A.pullAt=lu,A.range=Td,A.rangeRight=Rd,A.rearg=Mh,A.reject=ch,A.remove=cu,A.rest=Eh,A.reverse=B8,A.sampleSize=hh,A.set=Cf,A.setWith=Pf,A.shuffle=fh,A.slice=uu,A.sortBy=mh,A.sortedUniq=vu,A.sortedUniqBy=_u,A.split=$f,A.spread=Ah,A.tail=yu,A.take=xu,A.takeRight=Su,A.takeRightWhile=Mu,A.takeWhile=Eu,A.tap=Fu,A.throttle=bh,A.thru=N3,A.toArray=Ci,A.toPairs=Ni,A.toPairsIn=Bi,A.toPath=Dd,A.toPlainObject=Li,A.transform=Lf,A.unary=wh,A.union=Au,A.unionBy=bu,A.unionWith=wu,A.uniq=Tu,A.uniqBy=Ru,A.uniqWith=Cu,A.unset=If,A.unzip=O8,A.unzipWith=pi,A.update=Df,A.updateWith=Uf,A.values=y7,A.valuesIn=Nf,A.without=Pu,A.words=zi,A.wrap=Th,A.xor=Lu,A.xorBy=Iu,A.xorWith=Du,A.zip=Uu,A.zipObject=Nu,A.zipObjectDeep=Bu,A.zipWith=Ou,A.entries=Ni,A.entriesIn=Bi,A.extend=Ii,A.extendWith=W3,Z8(A,A),A.add=Nd,A.attempt=Gi,A.camelCase=zf,A.capitalize=Oi,A.ceil=Bd,A.clamp=Bf,A.clone=Ch,A.cloneDeep=Lh,A.cloneDeepWith=Ih,A.cloneWith=Ph,A.conformsTo=Dh,A.deburr=Fi,A.defaultTo=pd,A.divide=Od,A.endsWith=Gf,A.eq=v2,A.escape=Hf,A.escapeRegExp=Wf,A.every=qu,A.find=Ju,A.findIndex=ci,A.findKey=uf,A.findLast=Ku,A.findLastIndex=ui,A.findLastKey=hf,A.floor=Fd,A.forEach=gi,A.forEachRight=vi,A.forIn=ff,A.forInRight=df,A.forOwn=pf,A.forOwnRight=mf,A.get=W8,A.gt=Uh,A.gte=Nh,A.has=_f,A.hasIn=k8,A.head=fi,A.identity=k9,A.includes=nh,A.indexOf=Kc,A.inRange=Of,A.invoke=Sf,A.isArguments=F1,A.isArray=f5,A.isArrayBuffer=Bh,A.isArrayLike=H9,A.isArrayLikeObject=t9,A.isBoolean=Oh,A.isBuffer=y1,A.isDate=Fh,A.isElement=zh,A.isEmpty=Gh,A.isEqual=Hh,A.isEqualWith=Wh,A.isError=G8,A.isFinite=kh,A.isFunction=j2,A.isInteger=bi,A.isLength=G3,A.isMap=wi,A.isMatch=Vh,A.isMatchWith=Xh,A.isNaN=Yh,A.isNative=Zh,A.isNil=jh,A.isNull=qh,A.isNumber=Ti,A.isObject=j5,A.isObjectLike=$5,A.isPlainObject=E4,A.isRegExp=H8,A.isSafeInteger=Jh,A.isSet=Ri,A.isString=H3,A.isSymbol=K9,A.isTypedArray=_7,A.isUndefined=Kh,A.isWeakMap=Qh,A.isWeakSet=$h,A.join=nu,A.kebabCase=kf,A.last=u2,A.lastIndexOf=iu,A.lowerCase=Vf,A.lowerFirst=Xf,A.lt=ef,A.lte=tf,A.max=zd,A.maxBy=Gd,A.mean=Hd,A.meanBy=Wd,A.min=kd,A.minBy=Vd,A.stubArray=j8,A.stubFalse=J8,A.stubObject=Cd,A.stubString=Pd,A.stubTrue=Ld,A.multiply=Xd,A.nth=ru,A.noConflict=Sd,A.noop=q8,A.now=O3,A.pad=Yf,A.padEnd=Zf,A.padStart=qf,A.parseInt=jf,A.random=Ff,A.reduce=ah,A.reduceRight=lh,A.repeat=Jf,A.replace=Kf,A.result=Rf,A.round=Yd,A.runInContext=k,A.sample=uh,A.size=dh,A.snakeCase=Qf,A.some=ph,A.sortedIndex=hu,A.sortedIndexBy=fu,A.sortedIndexOf=du,A.sortedLastIndex=pu,A.sortedLastIndexBy=mu,A.sortedLastIndexOf=gu,A.startCase=ed,A.startsWith=td,A.subtract=Zd,A.sum=qd,A.sumBy=jd,A.template=nd,A.times=Id,A.toFinite=J2,A.toInteger=m5,A.toLength=Pi,A.toLower=id,A.toNumber=h2,A.toSafeInteger=nf,A.toString=B5,A.toUpper=rd,A.trim=sd,A.trimEnd=od,A.trimStart=ad,A.truncate=ld,A.unescape=cd,A.uniqueId=Ud,A.upperCase=ud,A.upperFirst=V8,A.each=gi,A.eachRight=vi,A.first=fi,Z8(A,function(){var r={};return T2(A,function(a,u){O5.call(A.prototype,u)||(r[u]=a)}),r}(),{chain:!1}),A.VERSION=n,s2(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),s2(["drop","take"],function(r,a){w5.prototype[r]=function(u){u=u===t?1:l9(m5(u),0);var v=this.__filtered__&&!a?new w5(this):this.clone();return v.__filtered__?v.__takeCount__=b9(u,v.__takeCount__):v.__views__.push({size:b9(u,P0),type:r+(v.__dir__<0?"Right":"")}),v},w5.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),s2(["filter","map","takeWhile"],function(r,a){var u=a+1,v=u==Y||u==d0;w5.prototype[r]=function(M){var w=this.clone();return w.__iteratees__.push({iteratee:n5(M,3),type:u}),w.__filtered__=w.__filtered__||v,w}}),s2(["head","last"],function(r,a){var u="take"+(a?"Right":"");w5.prototype[r]=function(){return this[u](1).value()[0]}}),s2(["initial","tail"],function(r,a){var u="drop"+(a?"":"Right");w5.prototype[r]=function(){return this.__filtered__?new w5(this):this[u](1)}}),w5.prototype.compact=function(){return this.filter(k9)},w5.prototype.find=function(r){return this.filter(r).head()},w5.prototype.findLast=function(r){return this.reverse().find(r)},w5.prototype.invokeMap=x5(function(r,a){return typeof r=="function"?new w5(this):this.map(function(u){return v4(u,r,a)})}),w5.prototype.reject=function(r){return this.filter(z3(n5(r)))},w5.prototype.slice=function(r,a){r=m5(r);var u=this;return u.__filtered__&&(r>0||a<0)?new w5(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),a!==t&&(a=m5(a),u=a<0?u.dropRight(-a):u.take(a-r)),u)},w5.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},w5.prototype.toArray=function(){return this.take(P0)},T2(w5.prototype,function(r,a){var u=/^(?:filter|find|map|reject)|While$/.test(a),v=/^(?:head|last)$/.test(a),M=A[v?"take"+(a=="last"?"Right":""):a],w=v||/^find/.test(a);M&&(A.prototype[a]=function(){var N=this.__wrapped__,F=v?[1]:arguments,V=N instanceof w5,m0=F[0],v0=V||f5(N),S0=function(E5){var T5=M.apply(A,f1([E5],F));return v&&O0?T5[0]:T5};v0&&u&&typeof m0=="function"&&m0.length!=1&&(V=v0=!1);var O0=this.__chain__,j0=!!this.__actions__.length,s5=w&&!O0,g5=V&&!j0;if(!w&&v0){N=g5?N:new w5(this);var o5=r.apply(N,F);return o5.__actions__.push({func:N3,args:[S0],thisArg:t}),new a2(o5,O0)}return s5&&g5?r.apply(this,F):(o5=this.thru(S0),s5?v?o5.value()[0]:o5.value():o5)})}),s2(["pop","push","shift","sort","splice","unshift"],function(r){var a=a3[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",v=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var M=arguments;if(v&&!this.__chain__){var w=this.value();return a.apply(f5(w)?w:[],M)}return this[u](function(N){return a.apply(f5(N)?N:[],M)})}}),T2(w5.prototype,function(r,a){var u=A[a];if(u){var v=u.name+"";O5.call(d7,v)||(d7[v]=[]),d7[v].push({name:a,func:u})}}),d7[R3(t,g).name]=[{name:"wrapper",func:t}],w5.prototype.clone=ll,w5.prototype.reverse=cl,w5.prototype.value=ul,A.prototype.at=zu,A.prototype.chain=Gu,A.prototype.commit=Hu,A.prototype.next=Wu,A.prototype.plant=Vu,A.prototype.reverse=Xu,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=Yu,A.prototype.first=A.prototype.head,u4&&(A.prototype[u4]=ku),A},u7=Ha();P1?((P1.exports=u7)._=u7,Y6._=u7):_9._=u7}).call(U4)})(i4,i4.exports);function Q4(i,e,t,n){const s={duration:2e3,delay:0,repeat:1/0};i4.exports.merge(s,n);const o=new nE(i);return o.to(e,s.duration),o.delay(s.delay),o.easing(Q7.Linear.None),o.onUpdate(function(l){t(l)}),o.start(),o.repeat(s.repeat),n&&n.onComplete&&o.onComplete(()=>{n.onComplete(n.data)}),o}function qo(i,e){i.userData={...i.userData,...e}}class rE{constructor(e,t){U0(this,"_config"),U0(this,"_store"),U0(this,"_currentData"),U0(this,"_currentConfig"),U0(this,"createPathLine",(n,s,o,l)=>{const h=new C6(n.x,n.y,s,o,l,!1).getSpacedPoints(200),f=new Yo;f.setPositions(h.map(m=>[m.x,m.y,0]).flat());const d=new St({color:new d5(this._currentConfig.pathStyle.color).getHex(),linewidth:(this._currentConfig.pathStyle.size||1)/1e3,vertexColors:!1,dashed:!1,alphaToCoverage:!1}),p=new jM(f,d);return p.name="pathLine",qo(p,this._currentData),p}),U0(this,"createShader",(n,s,o)=>{const l=new C6(0,0,n,s,o,!1).getSpacedPoints(200),c=new K5,h=l,f=[];for(let S=0;S<h.length;S++)f.push(S/h.length);const d=[],p=new d5(this._currentConfig.pathStyle.color),m=new d5(this._currentConfig.flyLineStyle.color);for(let S=0;S<h.length;S++){const y=p.lerp(m,S/h.length);d.push(y.r,y.g,y.b)}c.setFromPoints(h),c.attributes.percent=new r9(new Float32Array(f),1),c.attributes.color=new r9(new Float32Array(d),3);const _=new G6({vertexColors:!0,size:this._currentConfig.flyLineStyle.size||3}),x=new pt(c,_);return _.onBeforeCompile=function(S){S.vertexShader=S.vertexShader.replace("void main() {",["attribute float percent;","void main() {"].join(`
`)),S.vertexShader=S.vertexShader.replace("gl_PointSize = size;",["gl_PointSize = percent * size;"].join(`
`))},x.name="tadpolePointsMesh",x}),this._store=e,this._config=e.getConfig(),this._currentConfig={flyLineStyle:this._config.flyLineStyle,pathStyle:this._config.pathStyle},this._currentData=t,t.style&&Object.assign(this._currentConfig,t.style)}createMesh(e){const t=new g9,[n,s]=e,l=new U().addVectors(n,s).clone().multiplyScalar(.5).clone().normalize(),c=et(n,s,new U(0,0,0)),h=l.multiplyScalar(this._config.R+c*this._config.R*.2),f=JM(n,s,h),d=h.clone().sub(f).length(),p=et(n,new U(0,-1,0),f),m=-Math.PI/2+p,_=Math.PI-m,x=this.createPathLine(f,d,m,_),S=(_-m)/7,y=this.createShader(d,m,m+S);return y.position.y=f.y,y.name="tadpolePointsMesh",Q4({z:0},{z:_-m},g=>{y.rotation.z=g.z},{...this._currentConfig.flyLineStyle,data:this._currentData}),t.add(y),t.add(x),t.name="flyLine",t}create(e,t){const{quaternion:n,startPoint3D:s,endPoint3D:o}=Zo(e,t),l=this.createMesh([s,o]);return l.quaternion.multiply(n),l}}const sE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAABCtJREFUWIXVmU1oXFUUx3/zSptF4qYliNAUJB8tUnRhXSiSWhcmEekiXVi1C20Ximm7li5EsFDUrYsuBVeNCCroIgXF2iKtCRioIp1shIC1I0g7TUIS7d/FPTfz+vLu+5i8GewfLjP33vPxf3fu3HfuOTVJbAG9wLPAQeAxYAR4GOiz+bvAn8AN4FfgEvADsNS2R0llW03SuKQLkpZVHsumO262SvmvlVzhSeBd4Anr3wNmgW+BOVvJxdgK9gK7gWHgAHAIeAqIbH4eeA/4ouoVHpQ0E1ulRUlnJO1p4xfaY7qLMXsz5iNXv4iDlyXdNsMNSScl9bRBNNl6zFbDbN+WdHQrhGuSzsZW4TNJuyogmmy7zLbHWWXs7SyyH5uBfySd6gDRZDspad18ng+RDimfM8VlSYe7QNa3lyQtme9zRQkfja1sEbI1SaOSPpB0WdJNSavWbtrYhyZT5Bg7bL4l6ZU8woNq/cFO5xiOJB2XVFdx1E0nyrF92uTvKHF6JAX90TWdY/BRSddKEE3imtnI8jFtsjMhwpMm8Jek/gxDz6l1FG0FDbltEvKzU9Itk51MEq5J+tkmpzKMvCC3N6vCqqSxDH9vmdy8cdwgPGYTv0vaHlDeK7enqkbTbKf53G6cJBd7bLzT37DP88B6yht8G/Ap8FDhd35x9JntbSlz68YJ4HUAJPVKWpH0r6SBwJMe78DKJnEi4HvAuK1I6o1vh6sBhZrKHV3toq7wOX3VZMYiXPANLkRMwygwVNkGCGPIfKXBczsYAfutMxcQfrFKVjkI+fLc9ke44Brgt4DwM5VSysbTgXHPbTgC+q3zR0B4ODDeCYwExj23/pqkVWAH0AOspQj7+W5gzXgkscN4rEUpk/9rREDTvodeCn93iUuWL8+tGQEN6zwSEK5XSikbNwLjnlsjokVob0D4x0opZSPky3OrR8B16zwZEP66UkrZ+CYwfsA+r0e49BHA8wHhS8BClawCWMClsdJwaIOLigU/J7oQSxQKfiJcWulL3IlxLPCEn+BSUp3CnPlIwzEct6+AJf8U4/aUWQH8Prlgu2o0zXZeAD+hxBVp3ibeDihjSlVfkSYy/L1pcpuuSGUuoROqZqWbOWTjl9AjfjwpVPSav0/S7BbIziq8DXy7YLIX4+NJoUG1Lpp5+TSfSFkoQXRBxRIpp0z+jqShLMKofKoqkssvfCTpijanqq7Y3GgBoqhkqsq3ByoZiB7AdKsnHU9oT6szCe2dauXRpDYT2vH2qu4vGUypupLBlO4vGbyWp1fU+JDc8eKxKOkdtVeUGTDdeFHmohKnQaiVLXsdwZW9Hrf+PeAn4DtcrOHLXndtvg9X9hohXPZ6H/i8MIM2VsgXFqflIqiyWDHdrhQWk+jDlW5HcQmZYTaXbm/hVv4X4HvgMq1foDT+A+dj9DaZa2PgAAAAAElFTkSuQmCC",oE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu2dCdQ2SVXf6xqNCqKScUHFIFE0CVFJFAgJASXGiCgEUARxIaw5gpJoDkggCYkgYU4kDNuBYWRTdkGQHRwW2QYGhlW2kWXYhBmYzIAQQOWf83vn9kt/9VV13+qnn/XtOuc5z/t9T3d19a36V939WlraQoGFAlUK2EKbhQILBeoUWACy4dUh6e+klL7GP19d+JsR/XVK6W/8+5S/zexvNzzkE/24BSAzT7+kK6eUvjGl9E3+/bUZCL5qxUd+OQPPF1NKn0kpXc63mX1uxf6X23sUWAAycTlIgnYdCLpvgMGpsM3GyQNgjkEDeMxM2xzUvj57AUhw5iRxEnxHSumqDoyrBG/dlcs+66fM/00p/aWZcfIsbYQCC0AGCOTs0rc7MP7ega2mSwFKSumTC1u2COnhtS3pm1NK3+Kg4O+5G6wOgnftw/M6Ib70vY5N7TIHy6fMjL+X5hRYB7H3jriSAMS3+gd5YtXWsTMIznyOwWBmyAiTm6S+5gsAMd7uMwfbx3gv4WNmn5o80AO58cQCRNLXp5T+fkrpO1NK37DCfHbCcAeGy8wMTdPGmyQ0ZJx6fdCgOJja/iql9PGU0ofN7P9N7WSf7ztxAJEEGADGd6eU/m7j5GGD+ERK6dN+Muy8dqinbQM0Z6SUrpZSwhbT0r6UUvqIAwXQnJh2YgAiiQUCKABHywL5goPiE2YG67H3TRLsJEDh83UNL8QG8WHAYmacmAffDh4gklDLAgo+0YYM8cmU0sVmxmlxsE0Sp8q3pZTQ1rXIMAAF1gu18cG2gwWIC96cGFcPzh7am4tdOEUFeuKaJFTZnC4AJqrB+6ifKAcp0B8cQCQxuZwWGPUiDVsAOyHgWJpTYKHjFYQ4GIBIulJK6ftdzogs9IPe+SIEiFwz4SRGmH+fmX0+0v+uX3MQAJHEiQE4UN0ONYx0nTbmoHnnuRdeT5aDbR1bN6iEAQlyyl63sRfd6ZdzV5AfSCl918hAO+0LrBR2i602d3kHzJx6/e8O4CwwPuzCx9+74OouCbtKp/QY0wZ+LKX03n12ZdlbgEi6hp8aQ2pK9PedtmVjbuAOAGSh/gf7SweGVvtLB2jepwMN9gjkpuPPJgHkm1MHlKH3QU3OaXLRVneliQ/fO4BIQhUJO4UFvNZgpd7n2pW1WoBdmO2A0GmAUJ1uo6GSPtLEdcBZt/LBPRJgu5iTofWERR6goELfm7ZXAJF0TZ+IoR2LBXKhma1FVeunw7VSSv/EP/sw2e9MKfGBLmuJSHQVMXRhs6g1TkBA8sF9IBpj3AuAON/LDjWkusUhEOJ/YG7iS8Ip8PtSSv/QQTHGe889hLn6AxwA5T0ppb8wM2g2a5P0D3wTg2a1hmqdudq6PDj28jsPEEkc39d2F/Da+3B8szvORnBJyDaAgs8/SikRMLVKw4GRHZRApfy7/388g2dxSvLd/7v7P75XDd3lme8GKA4WZIVZmm9onCZDbDDg/HMzQ6u4s22nASIJIrNr19rs6kRJaMT+mYMCLdOUxk6NBgfgHn3mdh13+wQLsPsw7qknG4I/YLnAzBj3LC2ofn+PmV04ywPX0MnOAkTSD6aUvmfgndFOcUzPIoT7SfUjKaXrTKAzLMMpn3Xx+rWxuWwEC5p/Wl/nrSmlN8+1s7sQD3s85Av3ITN7R+tAN3H9TgJE0nXd07REA9go2Cl25pWbJEDIifFDDZ1xQsCavN/Zk7UoBBrGU7zUBWdYxO91VrHlhHm7nygfWnUc3C+Jkw6OoBafgrf0+XM8a84+dgogHvDzLwcc5XAPeeccwqULk5wYyDeRhtzQB8VeuXu7u38fLFFbzJ/7ibKy8sOVHWj/ag6kOIy+dlsBZ6VFsDMAcV+qGw4Iwx8wMyZrpeZyTSdjjPUF+9YHxUEEC3nQWB8sYy460KmTUVaWFySxKaHtKjWUB6/ZFV+unQCIswKcHLWGuwKGv8lNErz5jUeE/q5/WKa38DGzgwBFjXAOln+aUuITydyCivhVZobMNblJQi7BTajWOEm2zrpuHSDOm8Lq1No7zGwlPlgS4AMcY2wFQVIdME5U3ijP+9UBheCpoQa7CUheOxkhV8glyH8oY2oNZcEssubUcW4VIC4H1GQABOHzVwlzdX+tG7mQOkQjdPEdME50BkKPYe+Agg1qqKGk+LNV/Kw8/BelTE2BgK1kZfln7wAysntgtHq1mU0yXrmwz4kBOIY2AQgPG7WTKsapkzrXfa5qByw1eYFHsaH8mZ8ok7K5uFH2Xw3Ex6/MRUylyVZOEDdy3aAyaBIwv2rqC0lC+AQcQ7sfLNvrzey9U5+zyn3O98PvEy/Pd/9D1/De/Q+xK5duSx6ShKzAfA3ZpTiFYbtQakxqkpi3mhqY+dp4WO/GAeKL48crFCRn7JumUNd5aAj8LwbuZ4djEicDMDo29/JlLIwJFqIPhjFZqPYYeP8OOIAGuwHv8rp1e+0eHRVXLGA+Q24ur3MaT5LhJP3ogM/dKza9SWwUIL6If7Iy+5M1VW4Fv9mAcZFHwi8DjrVEuTnLeP2U0j9PKf3YRIt8FH+l67CAvzKldF5K6Q2rKjZqA3H3EUCC8bHWyB32gqnW+BEN10s3mXh7YwBx4Y+FU8piSKTf26asDkn/OKX0swPhtjjFAYzXTOl/YKHAbtwkpXS9lBLAmOKiMueQ8r4AzBtSSm9MKb18bsBIwmYFUGpeu9iQnmdm75rykpJ+uOKegtr9lZsq57BJgNTcR8gBy67X3CSxMG86cCO2E8AxpwMeYPw5/0x1Zmx+1xVvwBnxj/iY2fNW7Ov4dnfsBCTYNGrtRWYGUJubJE5jgtDytjG3lI0ARBLuBQQ75e2zZgZb0Nwk/ZuUUs24iPYLYLy+uePCDX7kd6BAq7NqQ4VN9B8fBM/u7y5JHRGJ3YfE2t3fLb5UtTGizu7AspLxtXuAJAR4gFILf8bo97IpRJME11FKaPdBMyO2Za1t7QAZ4CfJcv6nU/yqJN1qwLkQw9KfmBl88EpN0q17p8WUylFMIMY0PmjMjoAwtcSAl2bowIJmiQ2CDxtQa4P+HVCe1Xpzfr0k0pjefCAG5O1m9uzW57j/1k9UKndNlluj41grQDxEtjZ57PDNAU6SfrVyGvHO2DX+eJW4Zy8vcN+U0s83ODLybGQdgMCp1QnKWObX3iRh+e4UBOzmgGYooi8fEz5uz0wpPXCV8gyeL+CWA3YTdv0nthLEA7A4oUoN59W1hfCuDSCS8NissSNoWZozGUq6hxe3KREKiyuTPLlJ+umUEuAYUhX3++8WFjw277QTubY8hxWA4dMCdFS0gOSFk4l4hTp46JkU6XlEa/+uNud9Sg1jL57es7e1AMQRzyIr7WIctc0pYCTdZ8DTF5+dycKnGy7vl1K6Z5DCAPGZqwIy+KyVL/MFy6LlE2lnpZQesIphThLKjJqP3RfN7EGRgfSvcdehUtwOpze2oGaOZGwM6wJIzdhDBGCz9VrSvTzJWul9YNVeMfaitd8l/aKfGqiLh1p3WgCMSarLqWOc6z5XiXdAGYuD4R05TZ4y9fmSMAjXWKPPm9mZrX27Vb+kNZtsZB4aw+wAGZA7qCmBbr6pSfr3KSWSxJUai3VSjIi7pHBqINMMtb06LaLEbThVkBk4TSa5kHjsR+3kusjMHh8dc3edJGxOJVei2eWRWQHiQhqsVe5KwdHHEdiUZmbkmH7UFDkGIkv6NT81hrJuvNR3UBzxDrZJwqETuavm4cC7oxnkNHnUFEK4/ADNS62ZPXbNFuss99vCFYd1NltyurkBAs9ZWnTNfv2uW/+3JYqa2f0nThRBUwiIqIlrDV8nFsNDpjxjX++R9JsOlKGgKdS095gaLCWpNm8vabVZDcQRkUHmzXPNw2wAGRCgmt1IJKH9ukXlJR8yRRiTxI4DOIYMfU9zcKzdADXXBM7Zjxt0OU1uO9AvhkZAgsarqbnyBiCW2nPNjL7DbcAdZZIiqLgZh0czcKEnMmYB5pZU/HGwooZT80giSdsvVB53zhR1ngvijxxIBoEjI6dGMz88B/12rQ+X+wBKzSGR5Ap3nyLAu/r/zpV3frqZEfseap5SCJtPHlOPJwWs1soJy2c5QSSRBKFUguBtLd6zHmH4KxXqPGOK9kgSE/2AAYrDVwOOrYZ2hlbEBi9yFgba1WQHRnM/M3tg67Bcm3abyn1PaokgdO9iHBvz9jEzu6B1bPn1KwNkYIBNvKBPCEd7KWDmxVMcGiWdk1K6U4VIGPXuYmYru1msOgm7fL+72zzW41lKQ/19M6udCNVXc0fEnypcgELnaS0blqSa7Nu0Qc/OYnmqHlir/IhrMtx4nAjqXPx58sZRiUapqUk6193RS/eRmQNwzOoC3zTAPbrYXdsBSS0NLO70/7r1lSShOSt5LeBH9/ho3MeAYRrWnvUzuRzcSifIgD66KdB+gFDotXGoa2qS8MkqeQ/TDxF4t9qFlDJNL7Xliz01E1qsmuEPP6uh2PXiG0jCS7rkr9e0MQ4kAJlkf+sGOxkgA74x1BYP+/+7we6XCtQj8u8prYkbJA1lJUGOqSkAtrwE9+Pxkp6eUqrJD8nMmtaUJ2zAm6GUu/cPWwyUHh9Uqk8yyfePGWl6mf4UVmKHWZwgP5Twy7OPwFrlVlG0EE9odVmXRDx7zf/nTDO7934sw90epaQHp5Rw/yk1bF64GoWbu8rfoaAFJREErFYoW4qfcrBs+bqe7IYyCSADWUma/PMHfHWmGI4ek1K6a2VWbj0lFiE8wyfwQo/JqSk4zjazu7WQZcAw3ORrNxB/NCkrylSAYGzLExBj5ieJWMjm4YZFdo18DDg0NjnISQIYAKTUrj5nyG3LpB/6tR5yW3Mzv5uZnd1CA7dX5Y6IcCVwEyEPcLeN4D6Tuzt9tNUQOYnF8lgDAvbzRkmvFiPPLxcMUWi/IEY4hlzSvyNIqjIRZ0TZvZaJXK79CgWcrelChXPS3NLMnhOllwOOTTMPk3i/mf1BQz8Ym8mPljeSYjfF7DSfIBXzPjHWHIUhy6XnyiWmPG+E4IZVr95P7frr7WK9iegk79N1Xs+F7CmldsOWHL6uUibENm8vi/bjnh1o2/IY/ma3pyaAeI0Jjq+8hQPoPcs6gnl+BLbuEhzFxIGUnCNvZ2b4VS1tQxSQhJH3qYXH4aHw4y3Z+SWVuAtYeAT2UFb5gUQhiAHh2i6tACllJznKzRp1IHRC5gYntBSwVqGkbp684Lmeezefk0nuDxtaRwf9mAG3HkIGbhFNVuHeGbBaeQZH6hmGNj43HpZyM4c3cyYrDBBPGcoDJx9bXrzm9oVVQkrJcDpQSRgPyTiSN3aYOx70Ktzxl5P0uJQSHELenmVmGAVDzdOcllLUPjla9HNAHGBDD9V9aQEIIakl786w4CMJIx0CVL9RwPEJIap9JdgJz9y8sUvdLPri0ect17VRwDfSF1ROdzyAw0FXkjhF8oTZ7zYzjJWjbUChBDsfCpsOAWQO1dmAp+5To3HqbnXnpMnlDvjcn56avnSU0ssFTRTwnZvMKKV5unHUOu7x57crPDzs8euxRZNNElGAkKSsFCgfNr5UUsFQd/BJUepL4qQpxZAvhsAoETd03YAh8YlmxskQapIIf8h9vMIpngaM2qEEIlGAkKT5ytkbhc33nvm8RBT40lDxGjciPblAVWLT7x6i9nLRRikgCVa4FE9y+6gx2Iv4lORNlDqh0nwVt6jPmdnLxwgyChAvkUUS4byFHcAqqULxsvz9sQHyu+8CsFZ5ah4iAW/UEjsQed5yzTwU8BgfZMNcdoX/h9UKFcSRRExP7q8XTmU64Fh73liJvwhASiV7LzOzV0fI6LU7SkFL5M8NRXxJemglqdsdlzDZyCxs7xoP30WzlbezzOw/RkbmEavk/c0bwVo4NI42SZR4++bswtHS4hGAlLJrh91K3BUkr51BztpHR2o8eDpQtCJ5I+qsJMCNEmu5YLMUkIQBsZQIAq3jaJpTry3zH1JKefXdt0ZdWTzXQe5+MlpdYBAgA/XLQ8K5+9bcpTAdoRBaTyQNa5VHneFOzxF9IrOPbHZ5r/40t2ozj3lKITKjMI9kmh9sAyG6j4347g0I64P12McAUnL6Cgk3vG0l8RuL+zGRcEpJ/z2lVMql9FsnLW/V2ALa9d8979bvFcZ5fzP7H2Pj97BsXOhzkIUTz0kqKZsGuaExgJSqjmLYG9U8ebz6rxfi1c9tkF84IfIcstSoKyaUGyPy8vt2KSDpJYUMjqhsQ/VNXI7IY98Jr3h4JO7cNWK54XGwqnIVIJ5GFPkjbyHtlRuLqBXRb7zMIyPWbs+mUYpH50g+6HSg213G63u6pzktuRT9XCS7jFvpUennSUKoCTNa43JAm0XNw2K60iGAXKuQxYK09aEMIxXDIAXhQ2l2KoIdyaqr8dDrm9ql57koIOkZhTIMYYWLb5w/mI2nxXBIJpWvze7HCfLC0jsOAaSkFgtFZUnClf0/F1zanxPJ8O5hk2Rtz8ue3WZfanLMtaAOrR/fOAFJvyGkXzviEu+ZdAiS6zdc4f+3mfE92CquJ1WzRREgnmmiFNB0fiSRwsBLPCzIXv0Xsh0WdokQrzpGpOX37VJAUkm2vK+Z/e7YyJzN+o0VNl9yr1FxOW8EZJEs5JRWAwiCTH6MfdnMSvaI055Uifl4l5nlO0eRHpIwIOZJpkPajjECL79vnwIV7SRl1EhhO9okwWbnXhUtsSI3K8SawP6f5rpSA0gpKUMolagk4kU4AfK4EYrKj6ald9XwnxSoxBEcclEepfBywVYp4Ll5S4WPbh4ppeepRinx1m+Eff+umfE92CqpSoviQw0gJet5KKV8xbmMQcNejYY6SqKiUZ7AehHOx2Z9z36vCOu4sY9V/MK+9k0pJdisfBMOOb9WSnUUreqnAcTN+j9ToPerIyGTleOPfFmleOVTHuNev+wsV8qevwjnewaAseFWhHVy6MIpjHrpSsLNiDCMfgux8R6yjRIqb8/P3Z9KAMGhK3RziQiVKkIvNLNa1ovjbtxrk4zs/RY2JI1NyvL7blGgIqzfOeLlLel6BMnlbxSpPtZyCJQAQo7UvN7CoLWxG+RALTrYq9F0pJVyBYtwvlvrerbRVIT1UDkF9xOEzcpbqHalx7znpTZOK5dQAgjaq9wcH8qQ7U5peWD+J8zs0RGqVnaUn4lqzyLPWK7ZHQpIQpv0/KkcgyQ8fPOSGX8UcWKtVCY4zY2qBBBKWuUOYaHyuu4MlufNCrkke7x5bs3EgHQ1M6tl7tud2V5G0kwBSWeklKgFkhuErxWJW6+EUpCxZDRSsFKu/NI8OV0JIDctDHjQJbjHYpWyloQSUVcCa3CrLxVYaZ6M5YbdpIAkXN5vkI0uFAhXSXgdynpSCeX4GzN7UX8spwDEUzbiEpy3F0RS0EvCe5ddod/IVTWaeLgifyC73HM3p3YZ1RwUkHSWq2z73UXlkGsUcnB92swePjY2L70Bi5c3qmUdp9DNAUId8by2w2jUFU9wA+F/zZ7WYrwpuR8sKUTHZnrPf6+kLA1pLgeM0r8TNBiW7H1v6qc3zQFCSlC8ePst6qAIuPKaEFQapbbdYPMCKqWcq9+1JGQYo95+/+6JHUrZ/L8j6PdHxGpeYZmAvNEcvhXHxQvNjBqWRy0HCLrlPO43VG+wEv8BGnMtxWkzWjEa4VuTZ2Hc79WwjL5IAUmUzcjzNYeMw5IwaudcTzQ+hHxbeUDeJ/s2uxwgJRd3SqqNapEk4f2LBqzfou7tD0spIb/02+PMrFbCeVlqB0QBSaR/ynMqEyVYsnOc8uYVz3GUSi8bI5Fr0XIl0Cmu7zlASjG71P2gdvUYm0RS6pw9I3rwksC91PjIwXUHM8Mva2kHTgFJ+F/l+ZlZ5KVCTTlAvjWllCcOhE0qJRnM78VQmFftPSXnQg4QYr3zuh0UtRktqyYJ+QM5pGu4x//PyNxKwv8qd1++fsQ9JdL/cs1uU8DdRvLKyPhV5exP8UUk/bfMfZ2sn7WSfMd9eM7pvFjPl8yM2PmjlgOk5Cf/omBaFpKA9RNzfcHM/ldkaiQhUOUW0e8zMzInLu3AKSCJzIt/kb0mHhj9DbdKBUm/nVXIhU0i2eBg87RS2P367ZS4p2OAuMosd/5SRMimd0nEgPRPn8vN7P+MDdLv/WLh5LpqxHs40v9yzW5TwL1r89qB7OR57HjtBPlPKSVc4LvGvaPRib72EPJzgznOtUdxJX2AfF1KKQ+zPeW4qZG5YgO5xMxKdTxO6cZDKPOMEn9rZrn7wW7P8jK6lSggCbeiPL7jKsEQbWQQZJF+i9pCSmLFcfhtHyBXSSnlaX5CSeJ8kZOkod+wn+Su66cR0ctt5Zb2i80sVzevNAHLzbtNAUmko/22bJTXiJTlk3TnQllykjiMVpGqJJM7TgPUB8hVU0q51iCUpLri5h6q/eH2k7dmhMGfJhfad3uGl9GtRAFJhFPndq/rBPNdlWqIRN3eS6aN46ppfYCA3utnbwmbdN7Ym3sIY16XLuo0Rh263PuS6MVSNd2xoSy/7ykFJJEMMA/Uu4mZUcl4sFVK+0V9ACntkbNnx8kR+wDBXJ9nlYgmagD5ePL2W9TNneIoeQZFDIx5VsYxOi2/7zEFJP1xSinPdxXNuMh9eQWBp5sZFvoxcP1IoVTcBV1C7D5A8Iz8oay3i8zs7YGHAKy8fsMbg6nt8aU5O3tGyJtzbFzL7/tDgYo3912DvnxoX3GT6rdQ/RlJrHnWfr8dJyjpA4TaCTkPGKoDIgkreK4Bg006d2yKJN07pZTbS840M/5/aSeEApIenFK6V/a6v21m/P/YKUBC65w9QxP12sC9pQoGiAdHdpkFIGMUXH7fCAX2ASALi7WRpbA8pESBfWCxFiF9Wbtbo8A+COmLmndry2N58D6oeRdD4bJOt0aBfTAULq4mW1sey4P3wdVkcVZc1unWKLAPzop4Ui7u7ltbIif3wXvh7s70eCrIr8qmagmYOrlrdyNvvhcBUw6QJeR2I0tieUifAvsUcjt30oZHmNmnxpaDpFLShl8xsz8Yu3f5ff8pIOmXU0pPyt4kmrThW1JK98juXVvShrnT/jw76OxIaC4x7f1G8i+ydy/twCkgiez/edLBh5oZobSDzZ0Nb1UA11rS/sydOO48M3tx4CVxV8bdud/IKJ8XEh3ravl9Dykg6R0ppbyC8S3N7DljryPpp1JKxHT029oSx82devTDZva4wEtixSfkMm+UPij9/1iXy+97QgFJhFZTAiFv325mF4+9hiQSzlH0qd/Wlnp0m8mr31IIermFmZUq3o7Rbfl9TyggiTii52bDJdguLwN+2httI3n1lVNKc5c/OMfMPjo2X5JKcsiDzIx0Qks7UApIIj3PfbLXi8ofV08pkbCh39ZX/oCnSJq7gA61Rc4fm1+PK35adh3ZJYhZX9qBUkASMed5Np3bmtnTx15Z0nVTSnmNj2guBKqo5eluhwvoOEDmLsFGfO8om+QloD+YEeWvyTZvZnlSsTHaLb/vAQUk4SCLjPk12XCvGSwFDXuW51FYewm2uYt4hvKkOjhLcshNI5qwPVgPyxAzCrgG6pSSZymlkPzh6yXPB81/r72I5zbLQJf04UsZ6AOFVqUMdMj+tc0y0CSgzgPgmaLnm5nG5krS/QvXkOv0jYF7UdlRK6LfQuW4xvpeft89ClTKft8paBrAZpc71yYzK62/U15eErkYyMmbNxKNXNb/z1KV2/DNJZJLok56bvR5r5k9dWyKXA6hFMKVsmtD1YbG+l9+3x0KVKqKfZ6KT0H543YppR/I3gjjcp5j7bSXdu/h0CFwGkCctysVNzzOFTREZkkYG2+bXUOmbCrWXj42RZIomkMqyX57ppndZuze5ff9oYCkZ6SUfj4b8ZPMjGI6g00SmdypPpUnu35av75grRPPBJrngCsWq60BBCMNOuZ+oyDnBYHBM2hsF/ngn2dmbw7c/7MppZLWi52F/K1L23MKSCLvMpxC3m5uZs8bez1JZENknfRbS0VlNF954c9isdoaQL4npZT7QVGS4IVjg+d3SaQN/eHsWioGsWuMNkkAMbekLsL6KOX244KKcP4WM8tVtsUXkgQ3kSc3f5uZ5f58tfuRXfIN/B0l1q4GEAqX/GShd5wPIzUHS7l6v+RsViQlPSfQA7PnL8L6fqz/0VFWhPP7RoreeKkN2Ku8VGA0Fy+JqnPnRsb8UjOjkNMprQgQPwVKBsMPmRmel4NNEoYf6oXkFYKiVW+/34/gvIjOIqyPEX/Hf68I5xTPgYV+39jwK1VtWdjUA8GwPLY2S3a+S2tpSocAUqohTd3BUT97B1gp4zbH2LPGXsLvR+uVC/uLsB4h3g5fUxHOEa7RSo02SVQDyNn/UCUBX1fkkCZBSb/BnXyg9PAhgNQcF6N101H1ovLtN6rlUho6wmaVyiLQ143NjFoSS9szCkii5surCsOOljn4Bi/5/PVZH1Hr+RkppbwuOl293Mw+1wQQR1spwjCa8R2UwivmNo1zzezVkbmt8KrwisTOL23PKCCJ8sq5bBuWLSWxHsnk3m/YTjAhfGGMHJJKmdwHq6hVTxAHSKkkQlFfXBqcJFRxqOT67dKUEu4EpwlEeR8VbQeX/ZaZPWSMIMvvu0MBSb+ZUvq9wohC2klJyLP4XuGF229vjqiGfT2X7HvHpQ6mnCA1txMC6lnog00SumYK5OTtxcHSbgjpHMn5scizYbXeOTaG5fftU0AS7DbzmC/u1/k8IqSPrSU0T4TX5u2xXTWooQ7cdyt3b+eW09xL+v0MniCOOvjGfg1q/vt9ZvbesZfy+0vCOi7Ojw76dqGzfkHhWWHBLjLO5Zr1UUBSSeHCA28Wsa257xQJPPLKxy3COW4paEf77fIxeTYCkGa+rT8CSd+dUrpTgZSeKm4AABKOSURBVPyhElkOsoemlO5Z6OOOZvb49U3t0vOqFJBEcddSXoKzzCzPZFN8nKRSiT+upVTfRyJjdPkFjqjfRuXpCEDIO3SDwiCOK4GODVASaVly35ePmFnuuVsjEGPgiM6tp+9PKd3IzD4+Nobl981TQNJ3ppTQOH5v9nRchmCRR3Om+QbJBstG22/4Bj478lZepjyv4Mytrx8bwyhAfICEvaJi6zcCod4UHCCuK3coXPusiOHRx/CLKaUnF/qgHvbdI+NYrtksBSQ9MqX0a4Wn3t7MnhIZjSRsHqj88/aEiNevr50fTSmRkKTf/ipSYjoKkBL/FkJgNyK3oF47G+QHzCzPqFelm6QnpJRK3p4hPXpkQpZr5qGAG/RKrudPNLPSZll8sCQ8uzFa9xuq4WdGRiqpxgGF5OgoQDDMIKzn/i9FD8jSwCXxkrkbO5c+tUHgR+0Mq8XR3W/ErOMJSgrTpW2ZApJu6B7ZxJz3G6wwrNVRBdmxJomNuWRhxy2+aPnO+5RU8kzHL5DYdQzXgy0EEHpwF+Wcl+Sn10STKnjmkrzUNP5dnAyhJokjm6M7b+8hS0VE/Rx60HLRJAq4OpXyy8QF5e3uZvaoaMeSOGlgz/stlLXE12ypaho/vT8aOtECEGQQTpHcTZjsiW+LvLSka6WUbl+49hVmVnJBKHYrCX+uPB8r177KzPIUMpGhLdfMRAFJr+SUKHRHnuaSLFGbY/oopXx6spldGBmuJEIu8qyLxI1weoy6O/GMMEAckRh8rpkNjjh1HviZ4KBxQMx3ly+nlBC6PhzsA4EL20gp+94zzOwXIv0s18xLAUnksipFfpKtBpvHX0aeKIlFzemR16p5j5nludNqAPtG39DzNf7BFgNzK0AwGHKK5C38UEksbnTjuTzDsRcudyAJ6zogyXXbjO1MM7t3ZDKWa+ahgKQHp5TuVeiNJAiAA6t5qHk5hJydR254fAPISps5z2czHw397gbaBBA/RWrHFuxN0SMyp4okTP64HeftT1sEbUk11S/93jqqJw/N2nJRlQJu56qFMYRVur6+EPB/ovCwl9ViNgrrC090WLTJ4sAqAKkJPqNWyf6LVHYJAl5gtT4WXY+S7ptSekDl+qu39BV95nLdVyjg/na13Mv3M7M8MnQIaPjuwVrlmRZbuYuS9wfPDSuUJgPEUb6S6sz7uIYTIz/F0E+HjEjdS0g6p+LOwiVnLJqt9UDaNVafrvSOG0ieWHpwIM4R5P5SyLhsmhdF3kLSyiaJ/nOaWSxf3DXjC/mvRsMmewsbLUVJ4/ESM3t9hCC9vs6tZKbnkutFEmi3PO+kX+uJo2vJAAlAyuM2xsCBO1MpzgfWnQTXoSYJgOX5srh31K2k9IBJAHGQlMz3oJ2Iw1FXeO8DLQUCe+5nQ/ALu0apsMrQEY3xKNeyddffLqoBCc3ECb5IEprIWiJAFDa55XsMHFdzbiIPhcUREcEcLedo8xMN5U2+rsNuUflDVgEIVaFKDmAXm9kbRt/GL5CEdfyXCtdjdcXK/tloXw66ofSoTTxxy3NPyrUjMh+pP5vWlKSruLU8946ApH8Ytbr73LMeWZd5CzvWzgYQH9B1Crs/P1WD4EsLSRJhmKVY4SZfra5vSThR5pGM3c+4x/9G1FB0Uhb+2Ht6up2H+YlfupzIPriKplbxtaIPOJGXRjtzV6bc14/b8Rp/a7SfuQFCvDkLOw+iRxvFC0aNh4RTwmpx1OYt7JjWv1HSY1JKd60QBhdsQBLyAJhK3EO5zy3SgKNkA+M1zzazvErt6OtXHFi5D9Ya1mo0LNs3aoyCrMNc+4WvFeuQuPVJrek4rOz+pXIJXPrxSKrR3q6PHIJdIwcbl4TjjjOQABCAUmqwcL++2EqG143bOB5ecBDtbrybmZ3duvoq+QrohkX9lGgglAMEbqHEopFtMeSdURv/ygDxAZZynfJT0wDdIbKWpLpJm9EDXqnEdJ8eOM89cAm6OnWJeLATNqZSPEd3cahUc774JNW0l1yKq1A4B7O7peRpbuknlEt6DNhzAQTLJUdcroVgNyDBw6hbcW9BI2hRJ7HUSBxXSno8+J5uuScvcGmX4V4iEwHJEr57hec27C7gKHlvH3EH+FxFLdvZqY6ckGd17y55UaOCB24Dr4yc60ALCmsV8uwYWjyzAMRPEQx/eVgtP4W9fXsgwQ2llIGCS4ggHK2fXdi10I8/doCP5hYc4QDKicyW4tlHAEae0bJPTuS3u7TYu3rzioapdiKxkYaydvb6K7k98XOoVMfY6cHvswHEQVLjBZEhmuLGK3HsR+8UqSJUenkvnILVfcjtGhsOIDlRebc8bxXgyFPz9EmJv9Wd8ypMkYXm66NW/SkcX94DB9xASVPZJPuOjX1ugKDThtXKPXXRZnHkjSYXzo5jwmtrhr+HRLVkhdOEXYzFUGO5uAUVI0A56DSnng4UWpSy+XekY3ODFuFgp2we0TKROK7UMCxSNCncPDk664x++w2PX9ZZk+1s6MGzAsR3CRZ0XoKNn8LhuRlx75FSwrWl1M4xs5qj3CDB3UB5v0qMe/9eYp+RfUIx0OFZ3vKFrmJFFqjJA90IWbwPaDHYZfNHIaaaT9anzOwRraSohNHSDSXY8lLird2fcv3sAHGQlNxQ+AnD3xQh+z6FUgrdizRpPXJquYMcO2ieUii/lHF3YAlrWVaanZlvdi1hB4qSUa3/RN6RU6PJcTQDBzStaSW/aGYPan1FSYy75Moy2Z1koyeIA6RmuOHnJofGbvCSCMbJE2F3P4dSmdYI4ZkvOE1KyelKt+3VqdJwWnTvepafGqG8VSUCSaqlCuXyz5vZmRPAUXNEbDJMtzx3LSeIgwTDH64opVYsdzU2cFc/oi0rtSbXhMqkkuaU06Tk9lK6pTtVcG2h+lbN9Xvs1Wb9XRJp/lmgnOScGGOnRfd8ov44NUKl9gY2nJrrELdcNEWd7hWQ87og3RBIQRrKsNhK6LUBxEFCkoZSdgt+DpVzy19owALLpahnqec+mgp/YHJJmA1IWhYW3ZGA+Xz/4KpPaGeT5q518rrr3aiHGwgu49f1T16da6j7DuiAYzSR9ADtsINRf7wkg3LbVI+IWtk0+iROPZTEYQp91woQB0mp5BU/kV2CuIHmxSypFjtAv7gWvLDVVb5yoqAOpggQn5YF13VHKiJ2ZTRh704pccJ8egU1KfH3nA58iJoDFJx2tU1oaE0ABBK7UXwmVPVrqDNJ+NFxAudZRLrbmmN8fP0AupsUwmf5OVQScAowunvWDhB/SXa1kiNiuKRb4SQhqvEWlZcHdLimNAVdDeyM8L4dUEqZVFrngM3hCCwpJfj87u+ORetAwDcavO7feYx163O5ngwjHTDCwW0j4GDDIvAt96TobnuumfHc5iapVDKNfj6xiSC4jQDEQVKqVsVPn2nJidWnsFcMGkrxwwIAKOEY97EZdBavA0tNaTDWzaZ/x5u1A8VoHfLo4DweHWDkYbL9LkLVZysnOH3ntg4uHawKFR1/5LpNAoToQbJV5JVvGedkFZ3HAeCQWCIkfaPhACSzpiV1oZGwUnZPBOKoIByZlzmuQa44j1DTlBJl7z40R6ddH55elAWcu5h3l2AcpqpxKEVogUOomQpwgSf7TSjKcNV33hhA/BRhx63FKk9S/3q/WMRvXmHjOhrhkAhQVnJ/rhHcDY+ckviQbQMwHSBI+0nVpFD+29YF5N6zAKPmyHjE/pCbd6qSYiCunL4B++T4jtb33ShAfDHj61NzRGx2bOztaJxMTNyQipZdB5CE05y2ErQ3HmQuAMOHcADSJfHufHJXnOhjcKXAV4wPCbsvAAwOiKb4/egD+9dJgr588oyH/ctQSkDjULBT4eSoOSByaaj035R3q92zcYD0dvxaSOwlkfqFIzs5k5gngujfArtBlotQGbk5Ce7vT55jgNIHTQceLulA0AcDxe5D+WTXMF6yhMBK5omk+4/CDgEwJp9cblxEpVtqzQ6vc9BhKwDxRYK7QI1vx9mM3aLJubG3e7PDARLUoEPvCH/8lmgRnzkIvk99ePEatHZDWUqOcjM7OCbJBe58CFeBs2upNeU4mJPGWwOIg4QdqWYdRU8PSEJx7SWiSMLqDkiG+GVuZfdDDQlYhrKizEn7nezLC2YCCj5DpzDjR67DIBpK6laZI5QrgKNmZ5rkdTEXcbcKEAdJLQld946TU7b0ThQmgBNljPen+m4HlEk89FwTs+l+vA55B4y8mmw+HGQh2CkUApPbQO3Ars9Jyd4mD6hw49YB4iCBJy/VguiGvHKEmGeVByQRqzO8fweUrfD9c07yUF+ezqcDxlCwVNcN3gGAI1TKoPZsP91LEajdLdSM2TrtdwIgDhK0UGig8mKhHcFCNeXGFpYX8UGrlFe6Kt1KLD1CJ6wEybm3PmFj7xf53UFBwj5YT75LmWTyrnCVuWAOvycvrVYzLkJjHE934gTfGYA4SBgPBqKSWwqXICsgsE0S3vsz7gZGNGlRAx9sRR8s4RoTkUW77mskUdulD4oxdrMbEvYVNEiTDH4ZzTEqQu+abIOq+k27JAfuFEB6MkOt+AmXILRfONUIlS9Et4hzogwd9/lt+FL1wRLKRbxuEBTeDZapD4oWX663+4kxiwXePY7x7q55PISLMG2SjjsJED9NasExHX2wiMN2hVMKjfDi7GqcKLUYlqHb2fn4IOTj4k54MSDaWJPE4ie8Fa8ChGxO4dpJPDQu0nRyYswSX+HlCJjLmpcvY5nsRbFuAu8sQBwktfj2ji6AA5DM5j7iDnicKISLRnjz0hwBDgCDIEvMPEnMLplzMiVhUKPgDKCgrB1gaDkh+sOBjoTYImPM6dgJKADHEB1njyOfk847DRAHCQsAlqvmFMdl7NqwXZNtJgX2BL8xWAImmO8oz16bH4xoyDEIn/l3//+4H4UFz+O7/3f3f3wPuXtE1ghjINAIj2doN5t/kyTYKGg2lDUGORJwTEq6EXnBOa7ZeYA4SCA4C5WdstYgOKfJysJkASwsSE4UVMRM/NSdeo45W6UPTjZAgar2XWYGSGZtrvxgroY2NE5W5mq2DW3Wl+h1thcA6cYrCZYL4g/t5mRdZEdci+DsvD5gQU08lgllXfPW2i/sE2paQLEW2ciL17B5lOpzdOMFkABj1tQ8rcRouX6vAOKnCf46gGTo+MZdBNaB2hCzCPE1oro1mEXBB7mAbyIAt9GISGSDQN7hm2JGzWlaWwbuQjgKDuZkaD3BBgOO2ZK6tYxz6rV7B5DeaYKfFZNSC/PkUnYsBHjc6FdOZBwlsp8yHWi6bwygCKvINlPlGd4HWQHQY1A7AkEPDGs5HUrvLYmE5QjhfIbeh/BngDHZXytK93Vct7cA8dOEScIVG23OUGPhdEDZOt/rAOrA0v/utD0AgE8HhqPvdbFHLQvLBfAOGGOyGBoxVLgb25xa3iVy7V4DpHeaRNSJR5hyazwnCgFHSwtSQBKxK9AZdmps3cyufg8Oc/bLxl509geuq0NJsC6wXGMu2t0QUC8io0zOHriud9mlfj3rJDRF3R5pGBhhqWZTG0ceuq5rDgYgvdMEnp+dbkgl3KcnKkdOlLUKs+uawHX168qHE0/HgwNIDyjEmbTsfJd5jipCfk/kqeKnBZo4aEeSukg76JP4YAHSA0rHOw/5AuULAaESVeknD/1k8ZMC3y2AgdIj2jqlx0HLcgcPkB5QcPfmRAEoY9qX/iLBDQSwkLtr7ZlDoqtzles8TSgsKKAo5Smrdd9pA5Hd9srdfyq9TgxAekDBHtFpY1rtEfhTARJYMBbI5bsUu1BaBB5jzubAB9YJp8ZWPy7sLwjfyGoHETQWBcyJA0gPKNgcAAo2lBbWIqctdpUjsPiHtJiTsntEJ612nSQWPrJDBwi+a/EXkcfBamLLABhr9UiIDGYb15xYgPSJ7a7jnatILfVMy/zgTtEHDY6UR59VygswAElk/8ARsPv0wTDX2I9cVeZ20W8h4K5cuwAkmwl3ukNoBTCr7L7Vjb4DS+Wb+/oAyP9ex5xxCqLmRimxFifPXVnwreNYB7Fbx7Cz10tiR+4i86Jqz519n2xgqLWPIiH3zYFwkwReABKktiScIgELamPYmjnYmeDTZ7msY/tQywKK5sJFs4xizzpZADJxwnraIdiwThjm7ymVqCaOongbGSlhmTrlwdH3rmvb5iTAnH0tAJmTmlcI0WjE+qDBztDJEYCnVcWajxANGSDoBH/sNMdg2GfP2ZmnYpbuFoDMQsZ4J+7q3gdM/jedsfj7IDj+exdc3uNvu/9XLgDZ/zlc3mCNFFgAskbiLl3vPwX+P/I48fVbm9z+AAAAAElFTkSuQmCC";class Zs{constructor(e){U0(this,"_config"),U0(this,"_store"),U0(this,"_currentStyle"),U0(this,"_currentData"),U0(this,"createScatterMesh",t=>{const{geometry:n,material:s}=this.createScatter(),{mesh:o,size:l}=this.setMeshAttr(n,s,t);return o.name="scatter",Q4({size:l*1.5,opacity:0},{size:[l*2.8,l*3.5],opacity:[1,.1]},function(c){o.scale.set(c.size,c.size,c.size),o.material.opacity=c.opacity},{...this._currentStyle,data:this._currentData}),o}),U0(this,"createPointMesh",t=>{const{geometry:n,material:s}=this.createPoint(),{mesh:o}=this.setMeshAttr(n,s,t);return o.name="point",o}),U0(this,"createCustomMesh",t=>{var n;const{geometry:s,material:o}=this.createCustom(),{mesh:l,size:c}=this.setMeshAttr(s,o,t);l.name="scatter";const h=(n=this._currentStyle.customFigure)==null?void 0:n.animate;return h&&Q4(h.from,h.to,function(f){const{size:d,opacity:p}=f;d&&l.scale.set(d,d,d),p&&(l.material.opacity=p)},{...this._currentStyle,data:this._currentData}),l}),this._config=e.getConfig(),this._store=e,this._currentStyle=this._config.scatterStyle}setMeshAttr(e,t,{lon:n,lat:s,...o}){const l=new X9(e,t),c=t.name==="scatter"?this._config.R*1.001:this._config.R*1.002,h=this._currentStyle.size||this._config.scatterStyle.size||this._config.R*.05;if(l.scale.set(h*1.3,h*1.3,h*1.3),this._store.mode==="3d"){const{x:f,y:d,z:p}=b1(c,n,s);l.position.set(f,d,p);const m=new U(0,0,1),_=new U(f,d,p).normalize();l.quaternion.setFromUnitVectors(m,_)}else l.position.set(n,s,.1);return l.userData=o,{mesh:l,size:h}}createScatter(){const e=new K7(1,1),t=new V4().load(oE),n=new K1({map:t,transparent:!0,color:this._currentStyle.color,opacity:1,depthWrite:!1});return n.name="scatter",{geometry:e,material:n}}createPoint(){const e=new K7(1,1),t=new V4().load(sE),n=new K1({map:t,transparent:!0,color:this._currentStyle.color});return n.name="point",{geometry:e,material:n}}createCustom(){var e;const t=new K7(1,1),n=new V4().load((e=this._currentStyle.customFigure)==null?void 0:e.texture),s=new K1({map:n,transparent:!0,color:this._currentStyle.color,opacity:1,depthWrite:!1});return s.name="scatter",{geometry:t,material:s}}create(e){var t;e.style&&(this._currentStyle=e.style);const n=new g9;if((t=this._currentStyle.customFigure)!=null&&t.texture){const s=this.createCustomMesh(e);s.userData={...e},n.add(s)}else{const s=this.createPointMesh(e),o=this.createScatterMesh(e);s.userData={...e},o.userData={...e},n.add(s,o)}return n.name="pointScatter",n}}class aE{constructor(e,t){U0(this,"_config"),U0(this,"_store"),U0(this,"_currentData"),U0(this,"_currentConfig"),U0(this,"createPathLine",n=>{const s=new K5().setFromPoints(n),o=new e3({color:this._currentConfig.pathStyle.color}),l=new z6(s,o);return l.name="pathLine",qo(l,this._currentData),l}),U0(this,"createShader",(n,s)=>{const o=new K5,l=n.slice(0,s),c=[];for(let _=0;_<l.length;_++)c.push(_/l.length);const h=[],f=new d5(this._currentConfig.pathStyle.color),d=new d5(this._currentConfig.flyLineStyle.color);for(let _=0;_<l.length;_++){const x=f.lerp(d,_/l.length);h.push(x.r,x.g,x.b)}o.setFromPoints(l),o.attributes.percent=new r9(new Float32Array(c),1),o.attributes.color=new r9(new Float32Array(h),3);const p=new G6({vertexColors:!0,size:3}),m=new pt(o,p);return p.onBeforeCompile=function(_){_.vertexShader=_.vertexShader.replace("void main() {",["attribute float percent;","void main() {"].join(`
`)),_.vertexShader=_.vertexShader.replace("gl_PointSize = size;",["gl_PointSize = percent * size;"].join(`
`))},m.name="tadpolePointsMesh",m}),this._store=e,this._config=e.getConfig(),this._currentData=t,this._currentConfig={flyLineStyle:this._config.flyLineStyle,pathStyle:this._config.pathStyle},t.style&&Object.assign(this._currentConfig,t.style)}createMesh(e){const t=new g9,[n,s]=e,o=KM(n,s),c=new No(n,o,s).getSpacedPoints(200),h=this.createPathLine(c),f=40,d=this.createShader(c,f);return t.add(h,d),t.name="flyLine",Q4({index:0},{index:c.length-f},p=>{d.geometry.setFromPoints(c.slice(p.index,p.index+f))},{...this._currentConfig.flyLineStyle,data:this._currentData}),t}create(e,t){return this.createMesh([e,t])}}class lE{constructor(e,t){U0(this,"_config"),U0(this,"_store"),U0(this,"_currentData"),U0(this,"_currentConfig"),U0(this,"tadpolePointsMesh"),U0(this,"points",[]),U0(this,"tadpoleSize",40),U0(this,"calculateRoadPath",n=>{const s=new g9;return n.forEach((o,l,c)=>{l<c.length-1&&(this._store.mode==="2d"?this.calculateRoadPath2D([o,c[l+1]]):this.calculateArcPath([o,c[l+1]]))}),s.add(this.createPath(this.points)),this.tadpolePointsMesh=this.createShader(this.points),s.add(this.tadpolePointsMesh),s}),U0(this,"calculateRoadPath2D",n=>{const o=new vt(n).getPoints(200);this.points=[...this.points,...o]}),U0(this,"calculateArcPath",n=>{const[s,o]=n,{quaternion:l,startPoint3D:c,endPoint3D:h}=Zo(s,o),f=new U(0,0,0),d=et(c,new U(0,-1,0),f),p=-Math.PI/2+d,m=Math.PI-p,_=this.roadPathLine3D(p,m),x=this.generateLinePoints(_,l);this.points=[...this.points,...x]}),U0(this,"createShader",n=>{const s=new K5,o=n.slice(0,this.tadpoleSize),l=[];for(let m=0;m<o.length;m++)l.push(m/o.length);const c=[],h=new d5(this._currentConfig.flyLineStyle.color),f=new d5(this._currentConfig.flyLineStyle.color);for(let m=0;m<o.length;m++){const _=h.lerp(f,m/o.length);c.push(_.r,_.g,_.b)}s.setFromPoints(o),s.attributes.percent=new r9(new Float32Array(l),1),s.attributes.color=new r9(new Float32Array(c),3);const d=new G6({vertexColors:!0,size:3}),p=new pt(s,d);return d.onBeforeCompile=function(m){m.vertexShader=m.vertexShader.replace("void main() {",["attribute float percent;","void main() {"].join(`
`)),m.vertexShader=m.vertexShader.replace("gl_PointSize = size;",["gl_PointSize = percent * size;"].join(`