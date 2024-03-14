import{u as kt,t as Rt,c as zt,a as Pt,b as Qe,p as $t,d as It,i as Dt,e as Vt,f as X,g as pe,r as j,o as Nt,h as _,j as Mt,k as p,l as $e,m as et,n as Tt,q as d,s as N,v as f,w as tt,x as Et,y as At,z as Bt,A as Lt,B as fe,C as jt,D as Ot,V as Fe,E as Ke,F as Xt,G as Ft,T as Kt,H as Ye,I as Q,J as Ue,K as Yt,L as Ut,M as ee,N as E,O as A,P as g,Q as nt,_ as Ie,R as De,S as Ve,U as T,W as te,X as We,Y as Wt,Z as Ht,$ as Zt,a0 as qt,a1 as Gt,a2 as Jt,a3 as Qt,a4 as en,a5 as tn,a6 as nn,a7 as on,a8 as sn}from"./index-B2tywex8.js";function an(e){return kt(Rt(e).toLowerCase())}var He=zt(function(e,o,s){return o=o.toLowerCase(),e+(s?an(o):o)});const rn=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),ln={name:"Carousel",common:Pt,self:rn},cn=ln;function un(e){const{length:o}=e;return o>1&&(e.push(Ze(e[0],0,"append")),e.unshift(Ze(e[o-1],o-1,"prepend"))),e}function Ze(e,o,s){return Qe(e,{key:`carousel-item-duplicate-${o}-${s}`})}function qe(e,o,s){return o===1?0:s?e===0?o-3:e===o-1?0:e-1:e}function ze(e,o){return o?e+1:e}function dn(e,o,s){return e<0?null:e===0?s?o-1:null:e-1}function fn(e,o,s){return e>o-1?null:e===o-1?s?0:null:e+1}function vn(e,o){return o&&e>3?e-2:e}function Ge(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Je(e,o){let{offsetWidth:s,offsetHeight:i}=e;if(o){const c=getComputedStyle(e);s=s-parseFloat(c.getPropertyValue("padding-left"))-parseFloat(c.getPropertyValue("padding-right")),i=i-parseFloat(c.getPropertyValue("padding-top"))-parseFloat(c.getPropertyValue("padding-bottom"))}return{width:s,height:i}}function ve(e,o,s){return e<o?o:e>s?s:e}function hn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,s=e.match(o);if(s){const[,i,,c="ms"]=s;return Number(i)*(c==="ms"?1:1e3)}return 0}const ot=It("n-carousel-methods"),pn=e=>{$t(ot,e)},Ne=(e="unknown",o="component")=>{const s=Dt(ot);return s||Vt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),s},gn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},xn=X({name:"CarouselDots",props:gn,setup(e){const{mergedClsPrefixRef:o}=pe(e),s=j([]),i=Ne();function c(m,v){switch(m.key){case"Enter":case" ":m.preventDefault(),i.to(v);return}e.keyboard&&S(m)}function h(m){e.trigger==="hover"&&i.to(m)}function y(m){e.trigger==="click"&&i.to(m)}function S(m){var v;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const b=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:R}=m,O=R==="PageUp"||R==="ArrowUp",F=R==="PageDown"||R==="ArrowDown",k=R==="PageUp"||R==="ArrowRight",z=R==="PageDown"||R==="ArrowLeft",P=i.isVertical(),B=P?O:k,Z=P?F:z;!B&&!Z||(m.preventDefault(),B&&!i.isNextDisabled()?(i.next(),C(i.currentIndexRef.value)):Z&&!i.isPrevDisabled()&&(i.prev(),C(i.currentIndexRef.value)))}function C(m){var v;(v=s.value[m])===null||v===void 0||v.focus()}return Nt(()=>s.value.length=0),{mergedClsPrefix:o,dotEls:s,handleKeydown:c,handleMouseenter:h,handleClick:y}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Mt(this.total,s=>{const i=s===this.currentIndex;return _("div",{"aria-selected":i,ref:c=>o.push(c),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,i&&`${e}-carousel__dot--active`],key:s,onClick:()=>{this.handleClick(s)},onMouseenter:()=>{this.handleMouseenter(s)},onKeydown:c=>{this.handleKeydown(c,s)}})}))}}),mn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),wn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),bn=X({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=pe(e),{isVertical:s,isPrevDisabled:i,isNextDisabled:c,prev:h,next:y}=Ne();return{mergedClsPrefix:o,isVertical:s,isPrevDisabled:i,isNextDisabled:c,prev:h,next:y}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},mn),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},wn))}}),he="CarouselItem",_n=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===he},yn=X({name:he,setup(e){const{mergedClsPrefixRef:o}=pe(e),s=Ne(He(he),`n-${He(he)}`),i=j(),c=p(()=>{const{value:v}=i;return v?s.getSlideIndex(v):-1}),h=p(()=>s.isPrev(c.value)),y=p(()=>s.isNext(c.value)),S=p(()=>s.isActive(c.value)),C=p(()=>s.getSlideStyle(c.value));$e(()=>{s.addSlide(i.value)}),et(()=>{s.removeSlide(i.value)});function m(v){const{value:b}=c;b!==void 0&&(s==null||s.onCarouselItemClick(b,v))}return{mergedClsPrefix:o,selfElRef:i,isPrev:h,isNext:y,isActive:S,index:c,style:C,handleClick:m}},render(){var e;const{$slots:o,mergedClsPrefix:s,isPrev:i,isNext:c,isActive:h,index:y,style:S}=this,C=[`${s}-carousel__slide`,{[`${s}-carousel__slide--current`]:h,[`${s}-carousel__slide--prev`]:i,[`${s}-carousel__slide--next`]:c}];return _("div",{ref:"selfElRef",class:C,role:"option",tabindex:"-1","data-index":y,"aria-hidden":!h,style:S,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:i,isNext:c,isActive:h,index:y}))}}),Sn=Tt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[N("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[d("dot",`
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
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),d("arrow",`
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
 `,[N("svg",`
 height: 1em;
 width: 1em;
 `),N("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),f("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[d("slides",[N(">",[N("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Cn=["transitionDuration","transitionTimingFunction"],kn=Object.assign(Object.assign({},tt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Pe=!1;const Rn=X({name:"Carousel",props:kn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=pe(e),i=j(null),c=j(null),h=j([]),y={value:[]},S=p(()=>e.direction==="vertical"),C=p(()=>S.value?"height":"width"),m=p(()=>S.value?"bottom":"right"),v=p(()=>e.effect==="slide"),b=p(()=>e.loop&&e.slidesPerView===1&&v.value),R=p(()=>e.effect==="custom"),O=p(()=>!v.value||e.centeredSlides?1:e.slidesPerView),F=p(()=>R.value?1:e.slidesPerView),k=p(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=j({width:0,height:0}),P=p(()=>{const{value:t}=h;if(!t.length)return[];const{value:n}=k;if(n)return t.map(w=>Je(w));const{value:a}=F,{value:l}=z,{value:u}=C;let r=l[u];if(a!=="auto"){const{spaceBetween:w}=e,$=r-(a-1)*w,de=1/Math.max(1,a);r=$*de}const x=Object.assign(Object.assign({},l),{[u]:r});return t.map(()=>x)}),B=p(()=>{const{value:t}=P;if(!t.length)return[];const{centeredSlides:n,spaceBetween:a}=e,{value:l}=C,{[l]:u}=z.value;let r=0;return t.map(({[l]:x})=>{let w=r;return n&&(w+=(x-u)/2),r+=x+a,w})}),Z=j(!1),ge=p(()=>{const{transitionStyle:t}=e;return t?Ye(t,Cn):{}}),xe=p(()=>R.value?0:hn(ge.value.transitionDuration)),Me=p(()=>{const{value:t}=h;if(!t.length)return[];const n=!(k.value||F.value===1),a=x=>{if(n){const{value:w}=C;return{[w]:`${P.value[x][w]}px`}}};if(R.value)return t.map((x,w)=>a(w));const{effect:l,spaceBetween:u}=e,{value:r}=m;return t.reduce((x,w,$)=>{const de=Object.assign(Object.assign({},a($)),{[`margin-${r}`]:`${u}px`});return x.push(de),Z.value&&(l==="fade"||l==="card")&&Object.assign(de,ge.value),x},[])}),I=p(()=>{const{value:t}=O,{length:n}=h.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:a}=P,{length:l}=a;if(!l)return n;const{value:u}=B,{value:r}=C,x=z.value[r];let w=a[a.length-1][r],$=l;for(;$>1&&w<x;)$--,w+=u[$]-u[$-1];return ve($+1,1,l)}}),ne=p(()=>vn(I.value,b.value)),st=ze(e.defaultIndex,b.value),me=j(qe(st,I.value,b.value)),M=Et(At(e,"currentIndex"),me),D=p(()=>ze(M.value,b.value));function q(t){var n,a;t=ve(t,0,I.value-1);const l=qe(t,I.value,b.value),{value:u}=M;l!==M.value&&(me.value=l,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,l,u),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,l,u))}function oe(t=D.value){return dn(t,I.value,e.loop)}function se(t=D.value){return fn(t,I.value,e.loop)}function at(t){const n=Y(t);return n!==null&&oe()===n}function rt(t){const n=Y(t);return n!==null&&se()===n}function Te(t){return D.value===Y(t)}function it(t){return M.value===t}function Ee(){return oe()===null}function Ae(){return se()===null}function we(t){const n=ve(ze(t,b.value),0,I.value);(t!==M.value||n!==D.value)&&q(n)}function be(){const t=oe();t!==null&&q(t)}function ae(){const t=se();t!==null&&q(t)}function lt(){(!V||!b.value)&&be()}function ct(){(!V||!b.value)&&ae()}let V=!1,K=0;const _e=j({});function re(t,n=0){_e.value=Object.assign({},ge.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function G(t=0){v.value?ye(D.value,t):K!==0&&(!V&&t>0&&(V=!0),re(K=0,t))}function ye(t,n){const a=Be(t);a!==K&&n>0&&(V=!0),K=Be(D.value),re(a,n)}function Be(t){let n;return t>=I.value-1?n=Le():n=B.value[t]||0,n}function Le(){if(O.value==="auto"){const{value:t}=C,{[t]:n}=z.value,{value:a}=B,l=a[a.length-1];let u;if(l===void 0)u=n;else{const{value:r}=P;u=l+r[r.length-1][t]}return u-n}else{const{value:t}=B;return t[I.value-1]||0}}const J={currentIndexRef:M,to:we,prev:lt,next:ct,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:at,isNext:rt,isActive:Te,isPrevDisabled:Ee,isNextDisabled:Ae,getSlideIndex:Y,getSlideStyle:ft,addSlide:ut,removeSlide:dt,onCarouselItemClick:vt};pn(J);function ut(t){t&&h.value.push(t)}function dt(t){if(!t)return;const n=Y(t);n!==-1&&h.value.splice(n,1)}function Y(t){return typeof t=="number"?t:t?h.value.indexOf(t):-1}function ft(t){const n=Y(t);if(n!==-1){const a=[Me.value[n]],l=J.isPrev(n),u=J.isNext(n);return l&&a.push(e.prevSlideStyle||""),u&&a.push(e.nextSlideStyle||""),Yt(a)}}function vt(t,n){let a=!V&&!ce&&!Re;e.effect==="card"&&a&&!Te(t)&&(we(t),a=!1),a||(n.preventDefault(),n.stopPropagation())}let ie=null;function le(){ie&&(clearInterval(ie),ie=null)}function U(){le(),!e.autoplay||ne.value<2||(ie=window.setInterval(ae,e.interval))}let Se=0,Ce=0,L=0,ke=0,ce=!1,Re=!1;function je(t){var n;if(Pe||!(!((n=c.value)===null||n===void 0)&&n.contains(Ut(t))))return;Pe=!0,ce=!0,Re=!1,ke=Date.now(),le(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=Ge(t)?t.touches[0]:t;S.value?Ce=a.clientY:Se=a.clientX,e.touchable&&(ee("touchmove",document,ue),ee("touchend",document,W),ee("touchcancel",document,W)),e.draggable&&(ee("mousemove",document,ue),ee("mouseup",document,W))}function ue(t){const{value:n}=S,{value:a}=C,l=Ge(t)?t.touches[0]:t,u=n?l.clientY-Ce:l.clientX-Se,r=z.value[a];L=ve(u,-r,r),t.cancelable&&t.preventDefault(),v.value&&re(K-L,0)}function W(){const{value:t}=D;let n=t;if(!V&&L!==0&&v.value){const a=K-L,l=[...B.value.slice(0,I.value-1),Le()];let u=null;for(let r=0;r<l.length;r++){const x=Math.abs(l[r]-a);if(u!==null&&u<x)break;u=x,n=r}}if(n===t){const a=Date.now()-ke,{value:l}=C,u=z.value[l];L>u/2||L/a>.4?n=oe(t):(L<-u/2||L/a<-.4)&&(n=se(t))}n!==null&&n!==t?(Re=!0,q(n),Ue(()=>{(!b.value||me.value!==M.value)&&G(xe.value)})):G(xe.value),Oe(),U()}function Oe(){ce&&(Pe=!1),ce=!1,Se=0,Ce=0,L=0,ke=0,Q("touchmove",document,ue),Q("touchend",document,W),Q("touchcancel",document,W),Q("mousemove",document,ue),Q("mouseup",document,W)}function ht(){if(v.value&&V){const{value:t}=D;ye(t,0)}else U();v.value&&(_e.value.transitionDuration="0ms"),V=!1}function pt(t){if(t.preventDefault(),V)return;let{deltaX:n,deltaY:a}=t;t.shiftKey&&!n&&(n=a);const l=-1,u=1,r=(n||a)>0?u:l;let x=0,w=0;S.value?w=r:x=r;const $=10;(w*a>=$||x*n>=$)&&(r===u&&!Ae()?ae():r===l&&!Ee()&&be())}function gt(){z.value=Je(i.value,!0),U()}function xt(){var t,n;k.value&&((n=(t=P.effect).scheduler)===null||n===void 0||n.call(t),P.effect.run())}function mt(){e.autoplay&&le()}function wt(){e.autoplay&&U()}$e(()=>{Bt(U),requestAnimationFrame(()=>Z.value=!0)}),et(()=>{Oe(),le()}),Lt(()=>{const{value:t}=h,{value:n}=y,a=new Map,l=r=>a.has(r)?a.get(r):-1;let u=!1;for(let r=0;r<t.length;r++){const x=n.findIndex(w=>w.el===t[r]);x!==r&&(u=!0),a.set(t[r],x)}u&&t.sort((r,x)=>l(r)-l(x))}),fe(D,(t,n)=>{if(t!==n)if(U(),v.value){if(b.value){const{value:a}=I;ne.value>2&&t===a-2&&n===1?t=0:t===1&&n===a-2&&(t=a-1)}ye(t,xe.value)}else G()},{immediate:!0}),fe([b,O],()=>void Ue(()=>{q(D.value)})),fe(B,()=>{v.value&&G()},{deep:!0}),fe(v,t=>{t?G():(V=!1,re(K=0))});const bt=p(()=>({onTouchstartPassive:e.touchable?je:void 0,onMousedown:e.draggable?je:void 0,onWheel:e.mousewheel?pt:void 0})),_t=p(()=>Object.assign(Object.assign({},Ye(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ne.value,currentIndex:M.value})),yt=p(()=>({total:ne.value,currentIndex:M.value,to:J.to})),St={getCurrentIndex:()=>M.value,to:we,prev:be,next:ae},Ct=tt("Carousel","-carousel",Sn,cn,e,o),Xe=p(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:a,dotColorActive:l,dotColorFocus:u,dotLineWidth:r,dotLineWidthActive:x,arrowColor:w}}=Ct.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":u,"--n-dot-color-active":l,"--n-dot-size":n,"--n-dot-line-width":r,"--n-dot-line-width-active":x,"--n-arrow-color":w}}),H=s?jt("carousel",void 0,Xe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:i,slidesElRef:c,slideVNodes:y,duplicatedable:b,userWantsControl:R,autoSlideSize:k,realIndex:D,slideStyles:Me,translateStyle:_e,slidesControlListeners:bt,handleTransitionEnd:ht,handleResize:gt,handleSlideResize:xt,handleMouseenter:mt,handleMouseleave:wt,isActive:it,arrowSlotProps:_t,dotSlotProps:yt},St),{cssVars:s?void 0:Xe,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:s,userWantsControl:i,slideStyles:c,dotType:h,dotPlacement:y,slidesControlListeners:S,transitionProps:C={},arrowSlotProps:m,dotSlotProps:v,$slots:{default:b,dots:R,arrow:O}}=this,F=b&&Ot(b())||[];let k=zn(F);return k.length||(k=F.map(z=>_(yn,null,{default:()=>Qe(z)}))),this.duplicatedable&&(k=un(k)),this.slideVNodes.value=k,this.autoSlideSize&&(k=k.map(z=>_(Fe,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${y}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,i&&`${o}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(Fe,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},i?k.map((z,P)=>_("div",{style:c[P],key:P},Xt(_(Kt,Object.assign({},C),{default:()=>z}),[[Ft,this.isActive(P)]]))):k)}),this.showDots&&v.total>1&&Ke(R,v,()=>[_(xn,{key:h+y,total:v.total,currentIndex:v.currentIndex,dotType:h,trigger:this.trigger,keyboard:this.keyboard})]),s&&Ke(O,m,()=>[_(bn,null)]))}});function zn(e){return e.reduce((o,s)=>(_n(s)&&o.push(s),o),[])}const Pn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},$n=g("g",{fill:"none"},[g("path",{d:"M10 3a7 7 0 1 1 0 14a7 7 0 0 1 0-14zm8 7a8 8 0 1 0-16 0a8 8 0 0 0 16 0zm-8-2.5A2.5 2.5 0 0 1 12.292 9H11.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.696a3.498 3.498 0 0 0-5.609-.53a.5.5 0 0 0 .746.667A2.493 2.493 0 0 1 10 7.5zm-3 4.304v.696a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.792a2.5 2.5 0 0 0 4.156.666a.5.5 0 0 1 .745.668A3.498 3.498 0 0 1 7 11.804z",fill:"currentColor"})],-1),In=[$n],Dn=X({name:"ArrowSyncCircle20Regular",render:function(o,s){return E(),A("svg",Pn,In)}}),Vn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Nn=g("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("circle",{cx:"12",cy:"12",r:"9"}),g("path",{d:"M12 7l4.76 3.45L15 16H9l-1.76-5.55z"}),g("path",{d:"M12 7V3m3 13l2.5 3m-.74-8.55L20.5 9M9.06 16.05L6.5 19m.74-8.55L3.5 9"})],-1),Mn=[Nn],Tn=X({name:"BallFootball",render:function(o,s){return E(),A("svg",Vn,Mn)}}),En={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},An=nt('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21"></path><path d="M12 18V7h3"></path><path d="M3 17v-5h9"></path><path d="M4 12V6l18-3v2"></path><path d="M8 12V8L4 6"></path></g>',1),Bn=[An],Ln=X({name:"CarCrane",render:function(o,s){return E(),A("svg",En,Bn)}}),jn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},On=nt('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path><path d="M17 4h4v4"></path><path d="M16 9l5-5"></path></g>',1),Xn=[On],Fn=X({name:"ScreenShare",render:function(o,s){return E(),A("svg",jn,Xn)}}),Kn={class:"logo-slider"},Yn={class:"logo-slide-track"},Un=["src","alt"],Wn={__name:"LogoSider",setup(e){const o=[{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"},{src:T,label:"4Rivers.png",key:"4Rivers.png"}];return(s,i)=>(E(),A("div",Kn,[g("div",Yn,[(E(),A(De,null,Ve(o,(c,h)=>g("div",{key:`${h}-${c.key}`,class:"slide"},[g("img",{src:c.src,alt:c.label},null,8,Un)])),64))])]))}},Hn=Ie(Wn,[["__scopeId","data-v-56a00233"],["__file","D:/code/official-web/src/components/LogoSider.vue"]]),Zn=e=>(qt("data-v-9740c341"),e=e(),Gt(),e),qn={class:"flex flex-col items-center py-10"},Gn=Zn(()=>g("div",{class:"mb-20 mt-20"},[g("div",{class:"text-4xl font-bold"},"服务类型")],-1)),Jn={class:"grid gap-x-4 gap-y-40 grid-cols-1 md:grid-cols-3"},Qn={class:"mr-4"},eo={class:"aspect-square icon-wrap"},to={class:"counter-content media-body"},no={class:"text-2xl mb-2"},oo={class:"text-zinc-500"},so={__name:"index",setup(e){const o=[{label:"氢能产业链",content:"灵活可配置的产业链，打造一体化综合能源站解决方案，布局氢能能源网络。",key:"",icon:Tn},{label:"氢能源车辆应用及推广",content:"重卡推广、全链路运营监控，24小时安全保障，数据支撑管理优化，提高工作效率分析与决策。",key:"",icon:Ln},{label:"数字化应用平台",content:"搭建全国范围的“零碳智慧物流科技”运营管理平台，实现大宗物流数字化管理，对运输进行标准化管理，建立统一的管理运输安全与协同多终端互联互通规范。",key:"",icon:Fn},{label:"零碳物流",content:"通过采用氢能源汽车，致力于运输过程中零碳排放量，提高能源利用效率。",key:"",icon:Dn},{label:"氢能供货接单",content:"司机在线接单，灵活定制接单流程，贴合实际业务流，保证质量！",key:"",icon:Wt},{label:"平台开源",content:"面向开发者开放接口、大数据平台、可视化平台，为友伤提供更完善的服务。",key:"",icon:Ht}];return $e(()=>{}),(s,i)=>{const c=Zt;return E(),A("div",qn,[Gn,g("div",Jn,[(E(),A(De,null,Ve(o,(h,y)=>g("div",{key:y,class:"flex flex-row"},[g("div",Qn,[g("div",eo,[te(c,{size:"30",color:"#333",component:h.icon},null,8,["component"])])]),g("div",to,[g("div",no,We(h.label),1),g("p",oo,We(h.content),1)])])),64))])])}}},ao=Ie(so,[["__scopeId","data-v-9740c341"],["__file","D:/code/official-web/src/views/home/components/ServiceList/index.vue"]]),ro="/assets/bg_01-DXeip3tA.jpg",io=g("video",{src:"https://zhijianenergy.oss-cn-beijing.aliyuncs.com/geen_home_video-CqZrBKte.mp4",preload:"auto",autoplay:"",muted:"",loop:"",class:"video"},"your browser does not support the video tag",-1),lo=["src"],co={class:"w-full bg-white py-10 px-4 md:px-0"},uo={class:"def-container"},fo={class:"px-4 mb-20 def-container"},vo=g("div",{class:"section-title text-center position-relative pb-3 mx-auto",style:{"max-width":"600px"}},[g("div",{class:"text-3xl md:text-6xl leading-normal font-bold mb-2 mt-28"},"合作伙伴")],-1),ho={__name:"index",setup(e){Jt(),Qt(),en();const o=[{label:"中国氢能源引领者",content:"",key:"InformationSystem1",bg:ro,path:""}];return(s,i)=>{const c=Hn,h=Rn;return E(),A("div",null,[(E(),A(De,null,Ve(o,y=>g("div",{key:y.key,class:"w-screen overflow-hidden h-screen"},[te(h,{direction:"vertical","dot-type":"line","dot-placement":"right",mousewheel:"","space-between":20,draggable:""},{default:tn(()=>[io,g("img",{class:"carousel-img w-screen h-screen",src:nn(on)},null,8,lo),g("div",co,[g("div",uo,[te(ao)])]),g("div",fo,[vo,te(c),te(sn)])]),_:1})])),64))])}}},go=Ie(ho,[["__file","D:/code/official-web/src/views/home/index.vue"]]);export{go as default};
