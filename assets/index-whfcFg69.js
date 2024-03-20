import{u as It,t as Dt,c as Vt,a as Mt,b as at,p as Nt,d as Tt,i as Et,e as Bt,f as A,g as ge,r as O,o as At,h as y,j as Lt,k as g,l as xe,m as rt,n as jt,q as f,s as T,v,w as it,x as Ot,y as Ft,z as Xt,A as Kt,B as ve,C as Ut,D as Yt,V as Ue,E as Ye,F as Ht,G as Wt,T as Zt,H as He,I as ee,J as We,K as qt,L as Jt,M as te,N as R,O as P,P as r,Q as De,_ as Ve,R as Me,S as Ne,U as B,W as U,X as Ze,Y as Qt,Z as Gt,$ as en,a0 as tn,a1 as nn,a2 as on,a3 as sn,a4 as an,a5 as rn,a6 as ne,a7 as qe,a8 as ln,a9 as cn,aa as dn,ab as Je}from"./index-aH8rAFrD.js";function un(e){return It(Dt(e).toLowerCase())}var Qe=Vt(function(e,n,s){return n=n.toLowerCase(),e+(s?un(n):n)});const fn=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),vn={name:"Carousel",common:Mt,self:fn},hn=vn;function pn(e){const{length:n}=e;return n>1&&(e.push(Ge(e[0],0,"append")),e.unshift(Ge(e[n-1],n-1,"prepend"))),e}function Ge(e,n,s){return at(e,{key:`carousel-item-duplicate-${n}-${s}`})}function et(e,n,s){return n===1?0:s?e===0?n-3:e===n-1?0:e-1:e}function Pe(e,n){return n?e+1:e}function gn(e,n,s){return e<0?null:e===0?s?n-1:null:e-1}function xn(e,n,s){return e>n-1?null:e===n-1?s?0:null:e+1}function mn(e,n){return n&&e>3?e-2:e}function tt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function nt(e,n){let{offsetWidth:s,offsetHeight:c}=e;if(n){const i=getComputedStyle(e);s=s-parseFloat(i.getPropertyValue("padding-left"))-parseFloat(i.getPropertyValue("padding-right")),c=c-parseFloat(i.getPropertyValue("padding-top"))-parseFloat(i.getPropertyValue("padding-bottom"))}return{width:s,height:c}}function he(e,n,s){return e<n?n:e>s?s:e}function wn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,s=e.match(n);if(s){const[,c,,i="ms"]=s;return Number(c)*(i==="ms"?1:1e3)}return 0}const lt=Tt("n-carousel-methods"),_n=e=>{Nt(lt,e)},Te=(e="unknown",n="component")=>{const s=Et(lt);return s||Bt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),s},bn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},yn=A({name:"CarouselDots",props:bn,setup(e){const{mergedClsPrefixRef:n}=ge(e),s=O([]),c=Te();function i(x,h){switch(x.key){case"Enter":case" ":x.preventDefault(),c.to(h);return}e.keyboard&&_(x)}function p(x){e.trigger==="hover"&&c.to(x)}function k(x){e.trigger==="click"&&c.to(x)}function _(x){var h;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)return;const w=(h=document.activeElement)===null||h===void 0?void 0:h.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:$}=x,F=$==="PageUp"||$==="ArrowUp",X=$==="PageDown"||$==="ArrowDown",C=$==="PageUp"||$==="ArrowRight",z=$==="PageDown"||$==="ArrowLeft",I=c.isVertical(),L=I?F:C,q=I?X:z;!L&&!q||(x.preventDefault(),L&&!c.isNextDisabled()?(c.next(),S(c.currentIndexRef.value)):q&&!c.isPrevDisabled()&&(c.prev(),S(c.currentIndexRef.value)))}function S(x){var h;(h=s.value[x])===null||h===void 0||h.focus()}return At(()=>s.value.length=0),{mergedClsPrefix:n,dotEls:s,handleKeydown:i,handleMouseenter:p,handleClick:k}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return y("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Lt(this.total,s=>{const c=s===this.currentIndex;return y("div",{"aria-selected":c,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,c&&`${e}-carousel__dot--active`],key:s,onClick:()=>{this.handleClick(s)},onMouseenter:()=>{this.handleMouseenter(s)},onKeydown:i=>{this.handleKeydown(i,s)}})}))}}),Sn=y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),kn=y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Cn=A({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ge(e),{isVertical:s,isPrevDisabled:c,isNextDisabled:i,prev:p,next:k}=Te();return{mergedClsPrefix:n,isVertical:s,isPrevDisabled:c,isNextDisabled:i,prev:p,next:k}},render(){const{mergedClsPrefix:e}=this;return y("div",{class:`${e}-carousel__arrow-group`},y("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Sn),y("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},kn))}}),pe="CarouselItem",Rn=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===pe},$n=A({name:pe,setup(e){const{mergedClsPrefixRef:n}=ge(e),s=Te(Qe(pe),`n-${Qe(pe)}`),c=O(),i=g(()=>{const{value:h}=c;return h?s.getSlideIndex(h):-1}),p=g(()=>s.isPrev(i.value)),k=g(()=>s.isNext(i.value)),_=g(()=>s.isActive(i.value)),S=g(()=>s.getSlideStyle(i.value));xe(()=>{s.addSlide(c.value)}),rt(()=>{s.removeSlide(c.value)});function x(h){const{value:w}=i;w!==void 0&&(s==null||s.onCarouselItemClick(w,h))}return{mergedClsPrefix:n,selfElRef:c,isPrev:p,isNext:k,isActive:_,index:i,style:S,handleClick:x}},render(){var e;const{$slots:n,mergedClsPrefix:s,isPrev:c,isNext:i,isActive:p,index:k,style:_}=this,S=[`${s}-carousel__slide`,{[`${s}-carousel__slide--current`]:p,[`${s}-carousel__slide--prev`]:c,[`${s}-carousel__slide--next`]:i}];return y("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":k,"aria-hidden":!p,style:_,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:c,isNext:i,isActive:p,index:k}))}}),zn=jt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[f("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[f("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[T("> img",`
 display: block;
 `)])]),f("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[v("dot",[f("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 background-color: var(--n-dot-color-active);
 `)])]),v("line",[f("dot",`
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
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),f("arrow",`
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
 `,[T("svg",`
 height: 1em;
 width: 1em;
 `),T("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),v("vertical",`
 touch-action: pan-x;
 `,[f("slides",`
 flex-direction: column;
 `),v("fade",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),v("card",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[v("current",`
 transform: translateY(-50%) translateZ(0);
 `),v("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),v("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),v("usercontrol",[f("slides",[T(">",[T("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),v("left",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[v("line",[f("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),f("dot",`
 margin: 4px 0;
 `)]),f("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),v("vertical",[f("arrow",`
 transform: rotate(90deg);
 `)]),v("show-arrow",[v("bottom",[f("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),v("top",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("left",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("right",[f("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),v("left",[f("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("right",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[v("line",[f("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),f("dot",`
 margin: 4px 0;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("top",[f("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[v("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 top: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),v("bottom",[f("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[v("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),v("fade",[f("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[v("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),v("card",[f("slides",`
 perspective: 1000px;
 `),f("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[v("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),v("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),v("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Pn=["transitionDuration","transitionTimingFunction"],In=Object.assign(Object.assign({},it.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const Dn=A({name:"Carousel",props:In,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=ge(e),c=O(null),i=O(null),p=O([]),k={value:[]},_=g(()=>e.direction==="vertical"),S=g(()=>_.value?"height":"width"),x=g(()=>_.value?"bottom":"right"),h=g(()=>e.effect==="slide"),w=g(()=>e.loop&&e.slidesPerView===1&&h.value),$=g(()=>e.effect==="custom"),F=g(()=>!h.value||e.centeredSlides?1:e.slidesPerView),X=g(()=>$.value?1:e.slidesPerView),C=g(()=>F.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=O({width:0,height:0}),I=g(()=>{const{value:t}=p;if(!t.length)return[];const{value:o}=C;if(o)return t.map(b=>nt(b));const{value:a}=X,{value:d}=z,{value:u}=S;let l=d[u];if(a!=="auto"){const{spaceBetween:b}=e,D=l-(a-1)*b,fe=1/Math.max(1,a);l=D*fe}const m=Object.assign(Object.assign({},d),{[u]:l});return t.map(()=>m)}),L=g(()=>{const{value:t}=I;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:d}=S,{[d]:u}=z.value;let l=0;return t.map(({[d]:m})=>{let b=l;return o&&(b+=(m-u)/2),l+=m+a,b})}),q=O(!1),me=g(()=>{const{transitionStyle:t}=e;return t?He(t,Pn):{}}),we=g(()=>$.value?0:wn(me.value.transitionDuration)),Ee=g(()=>{const{value:t}=p;if(!t.length)return[];const o=!(C.value||X.value===1),a=m=>{if(o){const{value:b}=S;return{[b]:`${I.value[m][b]}px`}}};if($.value)return t.map((m,b)=>a(b));const{effect:d,spaceBetween:u}=e,{value:l}=x;return t.reduce((m,b,D)=>{const fe=Object.assign(Object.assign({},a(D)),{[`margin-${l}`]:`${u}px`});return m.push(fe),q.value&&(d==="fade"||d==="card")&&Object.assign(fe,me.value),m},[])}),V=g(()=>{const{value:t}=F,{length:o}=p.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=I,{length:d}=a;if(!d)return o;const{value:u}=L,{value:l}=S,m=z.value[l];let b=a[a.length-1][l],D=d;for(;D>1&&b<m;)D--,b+=u[D]-u[D-1];return he(D+1,1,d)}}),oe=g(()=>mn(V.value,w.value)),ct=Pe(e.defaultIndex,w.value),_e=O(et(ct,V.value,w.value)),E=Ot(Ft(e,"currentIndex"),_e),M=g(()=>Pe(E.value,w.value));function J(t){var o,a;t=he(t,0,V.value-1);const d=et(t,V.value,w.value),{value:u}=E;d!==E.value&&(_e.value=d,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,d,u),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,d,u))}function se(t=M.value){return gn(t,V.value,e.loop)}function ae(t=M.value){return xn(t,V.value,e.loop)}function dt(t){const o=Y(t);return o!==null&&se()===o}function ut(t){const o=Y(t);return o!==null&&ae()===o}function Be(t){return M.value===Y(t)}function ft(t){return E.value===t}function Ae(){return se()===null}function Le(){return ae()===null}function be(t){const o=he(Pe(t,w.value),0,V.value);(t!==E.value||o!==M.value)&&J(o)}function ye(){const t=se();t!==null&&J(t)}function re(){const t=ae();t!==null&&J(t)}function vt(){(!N||!w.value)&&ye()}function ht(){(!N||!w.value)&&re()}let N=!1,K=0;const Se=O({});function ie(t,o=0){Se.value=Object.assign({},me.value,{transform:_.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function Q(t=0){h.value?ke(M.value,t):K!==0&&(!N&&t>0&&(N=!0),ie(K=0,t))}function ke(t,o){const a=je(t);a!==K&&o>0&&(N=!0),K=je(M.value),ie(a,o)}function je(t){let o;return t>=V.value-1?o=Oe():o=L.value[t]||0,o}function Oe(){if(F.value==="auto"){const{value:t}=S,{[t]:o}=z.value,{value:a}=L,d=a[a.length-1];let u;if(d===void 0)u=o;else{const{value:l}=I;u=d+l[l.length-1][t]}return u-o}else{const{value:t}=L;return t[V.value-1]||0}}const G={currentIndexRef:E,to:be,prev:vt,next:ht,isVertical:()=>_.value,isHorizontal:()=>!_.value,isPrev:dt,isNext:ut,isActive:Be,isPrevDisabled:Ae,isNextDisabled:Le,getSlideIndex:Y,getSlideStyle:xt,addSlide:pt,removeSlide:gt,onCarouselItemClick:mt};_n(G);function pt(t){t&&p.value.push(t)}function gt(t){if(!t)return;const o=Y(t);o!==-1&&p.value.splice(o,1)}function Y(t){return typeof t=="number"?t:t?p.value.indexOf(t):-1}function xt(t){const o=Y(t);if(o!==-1){const a=[Ee.value[o]],d=G.isPrev(o),u=G.isNext(o);return d&&a.push(e.prevSlideStyle||""),u&&a.push(e.nextSlideStyle||""),qt(a)}}function mt(t,o){let a=!N&&!de&&!ze;e.effect==="card"&&a&&!Be(t)&&(be(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let le=null;function ce(){le&&(clearInterval(le),le=null)}function H(){ce(),!e.autoplay||oe.value<2||(le=window.setInterval(re,e.interval))}let Ce=0,Re=0,j=0,$e=0,de=!1,ze=!1;function Fe(t){var o;if(Ie||!(!((o=i.value)===null||o===void 0)&&o.contains(Jt(t))))return;Ie=!0,de=!0,ze=!1,$e=Date.now(),ce(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=tt(t)?t.touches[0]:t;_.value?Re=a.clientY:Ce=a.clientX,e.touchable&&(te("touchmove",document,ue),te("touchend",document,W),te("touchcancel",document,W)),e.draggable&&(te("mousemove",document,ue),te("mouseup",document,W))}function ue(t){const{value:o}=_,{value:a}=S,d=tt(t)?t.touches[0]:t,u=o?d.clientY-Re:d.clientX-Ce,l=z.value[a];j=he(u,-l,l),t.cancelable&&t.preventDefault(),h.value&&ie(K-j,0)}function W(){const{value:t}=M;let o=t;if(!N&&j!==0&&h.value){const a=K-j,d=[...L.value.slice(0,V.value-1),Oe()];let u=null;for(let l=0;l<d.length;l++){const m=Math.abs(d[l]-a);if(u!==null&&u<m)break;u=m,o=l}}if(o===t){const a=Date.now()-$e,{value:d}=S,u=z.value[d];j>u/2||j/a>.4?o=se(t):(j<-u/2||j/a<-.4)&&(o=ae(t))}o!==null&&o!==t?(ze=!0,J(o),We(()=>{(!w.value||_e.value!==E.value)&&Q(we.value)})):Q(we.value),Xe(),H()}function Xe(){de&&(Ie=!1),de=!1,Ce=0,Re=0,j=0,$e=0,ee("touchmove",document,ue),ee("touchend",document,W),ee("touchcancel",document,W),ee("mousemove",document,ue),ee("mouseup",document,W)}function wt(){if(h.value&&N){const{value:t}=M;ke(t,0)}else H();h.value&&(Se.value.transitionDuration="0ms"),N=!1}function _t(t){if(t.preventDefault(),N)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const d=-1,u=1,l=(o||a)>0?u:d;let m=0,b=0;_.value?b=l:m=l;const D=10;(b*a>=D||m*o>=D)&&(l===u&&!Le()?re():l===d&&!Ae()&&ye())}function bt(){z.value=nt(c.value,!0),H()}function yt(){var t,o;C.value&&((o=(t=I.effect).scheduler)===null||o===void 0||o.call(t),I.effect.run())}function St(){e.autoplay&&ce()}function kt(){e.autoplay&&H()}xe(()=>{Xt(H),requestAnimationFrame(()=>q.value=!0)}),rt(()=>{Xe(),ce()}),Kt(()=>{const{value:t}=p,{value:o}=k,a=new Map,d=l=>a.has(l)?a.get(l):-1;let u=!1;for(let l=0;l<t.length;l++){const m=o.findIndex(b=>b.el===t[l]);m!==l&&(u=!0),a.set(t[l],m)}u&&t.sort((l,m)=>d(l)-d(m))}),ve(M,(t,o)=>{if(t!==o)if(H(),h.value){if(w.value){const{value:a}=V;oe.value>2&&t===a-2&&o===1?t=0:t===1&&o===a-2&&(t=a-1)}ke(t,we.value)}else Q()},{immediate:!0}),ve([w,F],()=>void We(()=>{J(M.value)})),ve(L,()=>{h.value&&Q()},{deep:!0}),ve(h,t=>{t?Q():(N=!1,ie(K=0))});const Ct=g(()=>({onTouchstartPassive:e.touchable?Fe:void 0,onMousedown:e.draggable?Fe:void 0,onWheel:e.mousewheel?_t:void 0})),Rt=g(()=>Object.assign(Object.assign({},He(G,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:oe.value,currentIndex:E.value})),$t=g(()=>({total:oe.value,currentIndex:E.value,to:G.to})),zt={getCurrentIndex:()=>E.value,to:be,prev:ye,next:re},Pt=it("Carousel","-carousel",zn,hn,e,n),Ke=g(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:d,dotColorFocus:u,dotLineWidth:l,dotLineWidthActive:m,arrowColor:b}}=Pt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":u,"--n-dot-color-active":d,"--n-dot-size":o,"--n-dot-line-width":l,"--n-dot-line-width-active":m,"--n-arrow-color":b}}),Z=s?Ut("carousel",void 0,Ke,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:c,slidesElRef:i,slideVNodes:k,duplicatedable:w,userWantsControl:$,autoSlideSize:C,realIndex:M,slideStyles:Ee,translateStyle:Se,slidesControlListeners:Ct,handleTransitionEnd:wt,handleResize:bt,handleSlideResize:yt,handleMouseenter:St,handleMouseleave:kt,isActive:ft,arrowSlotProps:Rt,dotSlotProps:$t},zt),{cssVars:s?void 0:Ke,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:s,userWantsControl:c,slideStyles:i,dotType:p,dotPlacement:k,slidesControlListeners:_,transitionProps:S={},arrowSlotProps:x,dotSlotProps:h,$slots:{default:w,dots:$,arrow:F}}=this,X=w&&Yt(w())||[];let C=Vn(X);return C.length||(C=X.map(z=>y($n,null,{default:()=>at(z)}))),this.duplicatedable&&(C=pn(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(z=>y(Ue,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),y("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${k}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,c&&`${n}-carousel--usercontrol`],style:this.cssVars},_,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),y(Ue,{onResize:this.handleResize},{default:()=>y("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},c?C.map((z,I)=>y("div",{style:i[I],key:I},Ht(y(Zt,Object.assign({},S),{default:()=>z}),[[Wt,this.isActive(I)]]))):C)}),this.showDots&&h.total>1&&Ye($,h,()=>[y(yn,{key:p+k,total:h.total,currentIndex:h.currentIndex,dotType:p,trigger:this.trigger,keyboard:this.keyboard})]),s&&Ye(F,x,()=>[y(Cn,null)]))}});function Vn(e){return e.reduce((n,s)=>(Rn(s)&&n.push(s),n),[])}const Mn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Nn=r("g",{fill:"none"},[r("path",{d:"M10 3a7 7 0 1 1 0 14a7 7 0 0 1 0-14zm8 7a8 8 0 1 0-16 0a8 8 0 0 0 16 0zm-8-2.5A2.5 2.5 0 0 1 12.292 9H11.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.696a3.498 3.498 0 0 0-5.609-.53a.5.5 0 0 0 .746.667A2.493 2.493 0 0 1 10 7.5zm-3 4.304v.696a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.792a2.5 2.5 0 0 0 4.156.666a.5.5 0 0 1 .745.668A3.498 3.498 0 0 1 7 11.804z",fill:"currentColor"})],-1),Tn=[Nn],En=A({name:"ArrowSyncCircle20Regular",render:function(n,s){return R(),P("svg",Mn,Tn)}}),Bn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},An=r("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M12 7l4.76 3.45L15 16H9l-1.76-5.55z"}),r("path",{d:"M12 7V3m3 13l2.5 3m-.74-8.55L20.5 9M9.06 16.05L6.5 19m.74-8.55L3.5 9"})],-1),Ln=[An],jn=A({name:"BallFootball",render:function(n,s){return R(),P("svg",Bn,Ln)}}),On={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Fn=De('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21"></path><path d="M12 18V7h3"></path><path d="M3 17v-5h9"></path><path d="M4 12V6l18-3v2"></path><path d="M8 12V8L4 6"></path></g>',1),Xn=[Fn],Kn=A({name:"CarCrane",render:function(n,s){return R(),P("svg",On,Xn)}}),Un={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Yn=De('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="17" r="2"></circle><path d="M21 17h-8"></path><path d="M9 17H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h10l4 4v8"></path><rect x="6" y="8" width="6" height="4" rx="1"></rect></g>',1),Hn=[Yn],Wn=A({name:"Caravan",render:function(n,s){return R(),P("svg",Un,Hn)}}),Zn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},qn=r("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"}),r("path",{d:"M12 6v2m0 8v2"})],-1),Jn=[qn],Qn=A({name:"Coin",render:function(n,s){return R(),P("svg",Zn,Jn)}}),Gn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},eo=De('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path><path d="M17 4h4v4"></path><path d="M16 9l5-5"></path></g>',1),to=[eo],no=A({name:"ScreenShare",render:function(n,s){return R(),P("svg",Gn,to)}}),oo={class:"logo-slider"},so={class:"logo-slide-track"},ao=["src","alt"],ro={__name:"LogoSider",setup(e){const n=[{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"},{src:B,label:"4Rivers.png",key:"4Rivers.png"}];return(s,c)=>(R(),P("div",oo,[r("div",so,[(R(),P(Me,null,Ne(n,(i,p)=>r("div",{key:`${p}-${i.key}`,class:"slide"},[r("img",{src:i.src,alt:i.label},null,8,ao)])),64))])]))}},io=Ve(ro,[["__scopeId","data-v-56a00233"],["__file","D:/code/official-web/src/components/LogoSider.vue"]]),lo=e=>(tn("data-v-9740c341"),e=e(),nn(),e),co={class:"flex flex-col items-center py-10"},uo=lo(()=>r("div",{class:"mb-20 mt-10"},[r("div",{class:"text-2xl font-bold md:text-2xl lg:text-4xl"},"服务类型")],-1)),fo={class:"grid gap-x-4 gap-y-20 grid-cols-1 md:grid-cols-3"},vo={class:"mr-4"},ho={class:"aspect-square icon-wrap"},po={class:"counter-content media-body"},go={class:"text-xl mb-2 md:text-2xl"},xo={class:"text-zinc-500"},mo={__name:"index",setup(e){const n=[{label:"氢能产业链",content:"灵活可配置的产业链，打造一体化综合能源站解决方案，布局氢能能源网络。",key:"",icon:jn},{label:"氢能源车辆应用及推广",content:"重卡推广、全链路运营监控，24小时安全保障，数据支撑管理优化，提高工作效率分析与决策。",key:"",icon:Kn},{label:"数字化应用平台",content:"搭建全国范围的“零碳智慧物流科技”运营管理平台，实现大宗物流数字化管理。",key:"",icon:no},{label:"零碳物流",content:"通过采用氢能源汽车，致力于运输过程中零碳排放量，提高能源利用效率。",key:"",icon:En},{label:"氢能供货接单",content:"司机在线接单，灵活定制接单流程，贴合实际业务流，保证质量！",key:"",icon:Qt},{label:"平台开源",content:"面向开发者开放接口、大数据平台、可视化平台，为友伤提供更完善的服务。",key:"",icon:Gt},{label:"车金融",content:"包含融资租赁、保险、车后等",key:"",icon:Wn},{label:"碳数据交易",content:"碳减排监测、碳积分",key:"",icon:Qn}];return xe(()=>{}),(s,c)=>{const i=en;return R(),P("div",co,[uo,r("div",fo,[(R(),P(Me,null,Ne(n,(p,k)=>r("div",{key:k,class:"flex flex-row"},[r("div",vo,[r("div",ho,[U(i,{size:"30",color:"#333",component:p.icon},null,8,["component"])])]),r("div",po,[r("div",go,Ze(p.label),1),r("p",xo,Ze(p.content),1)])])),64))])])}}},ot=Ve(mo,[["__scopeId","data-v-9740c341"],["__file","D:/code/official-web/src/views/home/components/ServiceList/index.vue"]]),wo="/assets/bg_01-13oqd7QH.jpg",st="/assets/map-KJuJqI9c.png",_o={key:0,class:"flex flex-col items-center w-screen banner__inner overflow-hidden"},bo=r("video",{src:"https://zhijianenergy.oss-cn-beijing.aliyuncs.com/geen_home_video-CqZrBKte.mp4",preload:"auto",autoplay:"",muted:"",loop:"",class:"mobile-video"},"your browser does not support the video tag",-1),yo={class:"w-full bg-white py-10 px-4 md:px-0"},So={class:"def-container w-screen relative flex flex-col items-center"},ko=r("div",{class:"text-2xl leading-normal font-bold align-center"},"业务地图",-1),Co=["src"],Ro={class:"w-full bg-white py-10 px-4 md:px-0"},$o={class:"def-container"},zo={class:"px-4 mb-20 def-container"},Po=r("div",{class:"section-title text-center position-relative pb-3 mx-auto",style:{"max-width":"600px"}},[r("div",{class:"text-2xl leading-normal font-bold mb-2 mt-28"},"合作伙伴")],-1),Io={key:0,class:"w-screen h-screen"},Do=r("video",{src:"https://zhijianenergy.oss-cn-beijing.aliyuncs.com/geen_home_video-CqZrBKte.mp4",preload:"auto",autoplay:"",muted:"",loop:"",class:"video"},"your browser does not support the video tag",-1),Vo={class:"def-container w-screen mt-40 h-screen relative"},Mo=r("div",{class:"text-4xl leading-normal font-bold mb-2 mt-28 map-title"},"业务地图",-1),No=["src"],To={class:"w-full bg-white py-10 px-4 md:px-0"},Eo={class:"def-container"},Bo={class:"px-4 mb-20 def-container"},Ao=r("div",{class:"section-title text-center position-relative pb-3 mx-auto",style:{"max-width":"600px"}},[r("div",{class:"text-4xl leading-normal font-bold mb-2 mt-28"},"合作伙伴")],-1),Lo={key:0,class:"w-screen h-screen"},jo={__name:"index",setup(e){const{isMobile:n}=on();sn(),an();const s=dn(),c=[{label:"新能源全链路精益运营商",content:"",key:"InformationSystem1",bg:wo,path:""}];let i=!1;console.log(i.value);const p=_=>{if(i)return;s.refs.carousel[0].getCurrentIndex()===4?(i=!0,s.refs.carousel[0].to(0),i=!1):_==="click"&&s.refs.carousel[0].next()};xe(()=>{!n.value&&window.addEventListener("wheel",p)}),rn(()=>{window.removeEventListener("wheel",p)});const k=(_,S)=>{console.log(_),_===1&&S===3&&s.refs.carousel[0].to(0)};return(_,S)=>{const x=io,h=Dn;return R(),P("div",null,[(R(),P(Me,null,Ne(c,w=>r("div",{key:w.key,class:"w-screen h-screen"},[ne(n)?(R(),P("div",_o,[bo,r("div",yo,[r("div",So,[ko,r("img",{src:ne(st),alt:""},null,8,Co)])]),r("div",Ro,[r("div",$o,[U(ot)])]),r("div",zo,[Po,U(x),U(Je)]),ne(n)?qe("",!0):(R(),P("div",Io))])):(R(),ln(h,{key:1,direction:"vertical",ref_for:!0,ref:"carousel","dot-type":"line","dot-placement":"right",touchable:"",mousewheel:"",loop:!1,"space-between":20,"onUpdate:currentIndex":k,"transition-style":{transitionDuration:"800ms"}},{default:cn(()=>[Do,r("div",Vo,[Mo,r("img",{src:ne(st),alt:""},null,8,No)]),r("div",To,[r("div",Eo,[U(ot)])]),r("div",Bo,[Ao,U(x),U(Je)]),ne(n)?qe("",!0):(R(),P("div",Lo))]),_:1},512))])),64))])}}},Fo=Ve(jo,[["__file","D:/code/official-web/src/views/home/index.vue"]]);export{Fo as default};
