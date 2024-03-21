import{u as It,t as At,c as Lt,a as Dt,b as st,p as Mt,d as Vt,i as Nt,e as Tt,f as j,g as he,r as K,o as jt,h as _,j as Bt,k as g,l as ge,m as at,n as Ut,q as f,s as N,v,w as rt,x as Kt,y as Et,z as Wt,A as qt,B as fe,C as Ot,D as Zt,V as Oe,E as Ze,F as Ft,G as Jt,T as Xt,H as Fe,I as G,J as Je,K as Ht,L as Qt,M as ee,N as R,O as I,P as r,Q as Ae,_ as Le,R as De,S as Me,U as O,W as Xe,X as $t,Y as Yt,Z as Gt,$ as en,a0 as tn,a1 as nn,a2 as on,a3 as sn,a4 as an,a5 as te,a6 as He,a7 as rn,a8 as ln,a9 as cn,aa as Qe}from"./index-6lbSWbnb.js";function dn(e){return It(At(e).toLowerCase())}var $e=Lt(function(e,n,s){return n=n.toLowerCase(),e+(s?dn(n):n)});const un=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),fn={name:"Carousel",common:Dt,self:un},vn=fn;function pn(e){const{length:n}=e;return n>1&&(e.push(Ye(e[0],0,"append")),e.unshift(Ye(e[n-1],n-1,"prepend"))),e}function Ye(e,n,s){return st(e,{key:`carousel-item-duplicate-${n}-${s}`})}function Ge(e,n,s){return n===1?0:s?e===0?n-3:e===n-1?0:e-1:e}function Pe(e,n){return n?e+1:e}function hn(e,n,s){return e<0?null:e===0?s?n-1:null:e-1}function gn(e,n,s){return e>n-1?null:e===n-1?s?0:null:e+1}function xn(e,n){return n&&e>3?e-2:e}function et(e){return window.TouchEvent&&e instanceof window.TouchEvent}function tt(e,n){let{offsetWidth:s,offsetHeight:c}=e;if(n){const l=getComputedStyle(e);s=s-parseFloat(l.getPropertyValue("padding-left"))-parseFloat(l.getPropertyValue("padding-right")),c=c-parseFloat(l.getPropertyValue("padding-top"))-parseFloat(l.getPropertyValue("padding-bottom"))}return{width:s,height:c}}function ve(e,n,s){return e<n?n:e>s?s:e}function mn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,s=e.match(n);if(s){const[,c,,l="ms"]=s;return Number(c)*(l==="ms"?1:1e3)}return 0}const lt=Vt("n-carousel-methods"),wn=e=>{Mt(lt,e)},Ve=(e="unknown",n="component")=>{const s=Nt(lt);return s||Tt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),s},bn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},yn=j({name:"CarouselDots",props:bn,setup(e){const{mergedClsPrefixRef:n}=he(e),s=K([]),c=Ve();function l(x,p){switch(x.key){case"Enter":case" ":x.preventDefault(),c.to(p);return}e.keyboard&&b(x)}function h(x){e.trigger==="hover"&&c.to(x)}function C(x){e.trigger==="click"&&c.to(x)}function b(x){var p;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)return;const w=(p=document.activeElement)===null||p===void 0?void 0:p.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:z}=x,E=z==="PageUp"||z==="ArrowUp",W=z==="PageDown"||z==="ArrowDown",k=z==="PageUp"||z==="ArrowRight",P=z==="PageDown"||z==="ArrowLeft",A=c.isVertical(),B=A?E:k,H=A?W:P;!B&&!H||(x.preventDefault(),B&&!c.isNextDisabled()?(c.next(),S(c.currentIndexRef.value)):H&&!c.isPrevDisabled()&&(c.prev(),S(c.currentIndexRef.value)))}function S(x){var p;(p=s.value[x])===null||p===void 0||p.focus()}return jt(()=>s.value.length=0),{mergedClsPrefix:n,dotEls:s,handleKeydown:l,handleMouseenter:h,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Bt(this.total,s=>{const c=s===this.currentIndex;return _("div",{"aria-selected":c,ref:l=>n.push(l),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,c&&`${e}-carousel__dot--active`],key:s,onClick:()=>{this.handleClick(s)},onMouseenter:()=>{this.handleMouseenter(s)},onKeydown:l=>{this.handleKeydown(l,s)}})}))}}),_n=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Sn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Cn=j({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=he(e),{isVertical:s,isPrevDisabled:c,isNextDisabled:l,prev:h,next:C}=Ve();return{mergedClsPrefix:n,isVertical:s,isPrevDisabled:c,isNextDisabled:l,prev:h,next:C}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},_n),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Sn))}}),pe="CarouselItem",kn=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===pe},Rn=j({name:pe,setup(e){const{mergedClsPrefixRef:n}=he(e),s=Ve($e(pe),`n-${$e(pe)}`),c=K(),l=g(()=>{const{value:p}=c;return p?s.getSlideIndex(p):-1}),h=g(()=>s.isPrev(l.value)),C=g(()=>s.isNext(l.value)),b=g(()=>s.isActive(l.value)),S=g(()=>s.getSlideStyle(l.value));ge(()=>{s.addSlide(c.value)}),at(()=>{s.removeSlide(c.value)});function x(p){const{value:w}=l;w!==void 0&&(s==null||s.onCarouselItemClick(w,p))}return{mergedClsPrefix:n,selfElRef:c,isPrev:h,isNext:C,isActive:b,index:l,style:S,handleClick:x}},render(){var e;const{$slots:n,mergedClsPrefix:s,isPrev:c,isNext:l,isActive:h,index:C,style:b}=this,S=[`${s}-carousel__slide`,{[`${s}-carousel__slide--current`]:h,[`${s}-carousel__slide--prev`]:c,[`${s}-carousel__slide--next`]:l}];return _("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!h,style:b,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:c,isNext:l,isActive:h,index:C}))}}),zn=Ut("carousel",`
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
 `,[N("> img",`
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
 `,[N("&:focus",`
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
 `,[N("&:focus",`
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
 `,[N("svg",`
 height: 1em;
 width: 1em;
 `),N("&:hover",`
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
 `)])])]),v("usercontrol",[f("slides",[N(">",[N("div",`
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
 `,[N("> *:first-child",`
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
 `,[N("> *:first-child",`
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
 `,[N("> *:first-child",`
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
 `,[N("> *:first-child",`
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
 `)])])]),Pn=["transitionDuration","transitionTimingFunction"],In=Object.assign(Object.assign({},rt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const An=j({name:"Carousel",props:In,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=he(e),c=K(null),l=K(null),h=K([]),C={value:[]},b=g(()=>e.direction==="vertical"),S=g(()=>b.value?"height":"width"),x=g(()=>b.value?"bottom":"right"),p=g(()=>e.effect==="slide"),w=g(()=>e.loop&&e.slidesPerView===1&&p.value),z=g(()=>e.effect==="custom"),E=g(()=>!p.value||e.centeredSlides?1:e.slidesPerView),W=g(()=>z.value?1:e.slidesPerView),k=g(()=>E.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=K({width:0,height:0}),A=g(()=>{const{value:t}=h;if(!t.length)return[];const{value:o}=k;if(o)return t.map(y=>tt(y));const{value:a}=W,{value:d}=P,{value:u}=S;let i=d[u];if(a!=="auto"){const{spaceBetween:y}=e,L=i-(a-1)*y,ue=1/Math.max(1,a);i=L*ue}const m=Object.assign(Object.assign({},d),{[u]:i});return t.map(()=>m)}),B=g(()=>{const{value:t}=A;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:d}=S,{[d]:u}=P.value;let i=0;return t.map(({[d]:m})=>{let y=i;return o&&(y+=(m-u)/2),i+=m+a,y})}),H=K(!1),xe=g(()=>{const{transitionStyle:t}=e;return t?Fe(t,Pn):{}}),me=g(()=>z.value?0:mn(xe.value.transitionDuration)),Ne=g(()=>{const{value:t}=h;if(!t.length)return[];const o=!(k.value||W.value===1),a=m=>{if(o){const{value:y}=S;return{[y]:`${A.value[m][y]}px`}}};if(z.value)return t.map((m,y)=>a(y));const{effect:d,spaceBetween:u}=e,{value:i}=x;return t.reduce((m,y,L)=>{const ue=Object.assign(Object.assign({},a(L)),{[`margin-${i}`]:`${u}px`});return m.push(ue),H.value&&(d==="fade"||d==="card")&&Object.assign(ue,xe.value),m},[])}),D=g(()=>{const{value:t}=E,{length:o}=h.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=A,{length:d}=a;if(!d)return o;const{value:u}=B,{value:i}=S,m=P.value[i];let y=a[a.length-1][i],L=d;for(;L>1&&y<m;)L--,y+=u[L]-u[L-1];return ve(L+1,1,d)}}),ne=g(()=>xn(D.value,w.value)),it=Pe(e.defaultIndex,w.value),we=K(Ge(it,D.value,w.value)),T=Kt(Et(e,"currentIndex"),we),M=g(()=>Pe(T.value,w.value));function Q(t){var o,a;t=ve(t,0,D.value-1);const d=Ge(t,D.value,w.value),{value:u}=T;d!==T.value&&(we.value=d,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,d,u),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,d,u))}function oe(t=M.value){return hn(t,D.value,e.loop)}function se(t=M.value){return gn(t,D.value,e.loop)}function ct(t){const o=Z(t);return o!==null&&oe()===o}function dt(t){const o=Z(t);return o!==null&&se()===o}function Te(t){return M.value===Z(t)}function ut(t){return T.value===t}function je(){return oe()===null}function Be(){return se()===null}function be(t){const o=ve(Pe(t,w.value),0,D.value);(t!==T.value||o!==M.value)&&Q(o)}function ye(){const t=oe();t!==null&&Q(t)}function ae(){const t=se();t!==null&&Q(t)}function ft(){(!V||!w.value)&&ye()}function vt(){(!V||!w.value)&&ae()}let V=!1,q=0;const _e=K({});function re(t,o=0){_e.value=Object.assign({},xe.value,{transform:b.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function $(t=0){p.value?Se(M.value,t):q!==0&&(!V&&t>0&&(V=!0),re(q=0,t))}function Se(t,o){const a=Ue(t);a!==q&&o>0&&(V=!0),q=Ue(M.value),re(a,o)}function Ue(t){let o;return t>=D.value-1?o=Ke():o=B.value[t]||0,o}function Ke(){if(E.value==="auto"){const{value:t}=S,{[t]:o}=P.value,{value:a}=B,d=a[a.length-1];let u;if(d===void 0)u=o;else{const{value:i}=A;u=d+i[i.length-1][t]}return u-o}else{const{value:t}=B;return t[D.value-1]||0}}const Y={currentIndexRef:T,to:be,prev:ft,next:vt,isVertical:()=>b.value,isHorizontal:()=>!b.value,isPrev:ct,isNext:dt,isActive:Te,isPrevDisabled:je,isNextDisabled:Be,getSlideIndex:Z,getSlideStyle:gt,addSlide:pt,removeSlide:ht,onCarouselItemClick:xt};wn(Y);function pt(t){t&&h.value.push(t)}function ht(t){if(!t)return;const o=Z(t);o!==-1&&h.value.splice(o,1)}function Z(t){return typeof t=="number"?t:t?h.value.indexOf(t):-1}function gt(t){const o=Z(t);if(o!==-1){const a=[Ne.value[o]],d=Y.isPrev(o),u=Y.isNext(o);return d&&a.push(e.prevSlideStyle||""),u&&a.push(e.nextSlideStyle||""),Ht(a)}}function xt(t,o){let a=!V&&!ce&&!ze;e.effect==="card"&&a&&!Te(t)&&(be(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let le=null;function ie(){le&&(clearInterval(le),le=null)}function F(){ie(),!e.autoplay||ne.value<2||(le=window.setInterval(ae,e.interval))}let Ce=0,ke=0,U=0,Re=0,ce=!1,ze=!1;function Ee(t){var o;if(Ie||!(!((o=l.value)===null||o===void 0)&&o.contains(Qt(t))))return;Ie=!0,ce=!0,ze=!1,Re=Date.now(),ie(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=et(t)?t.touches[0]:t;b.value?ke=a.clientY:Ce=a.clientX,e.touchable&&(ee("touchmove",document,de),ee("touchend",document,J),ee("touchcancel",document,J)),e.draggable&&(ee("mousemove",document,de),ee("mouseup",document,J))}function de(t){const{value:o}=b,{value:a}=S,d=et(t)?t.touches[0]:t,u=o?d.clientY-ke:d.clientX-Ce,i=P.value[a];U=ve(u,-i,i),t.cancelable&&t.preventDefault(),p.value&&re(q-U,0)}function J(){const{value:t}=M;let o=t;if(!V&&U!==0&&p.value){const a=q-U,d=[...B.value.slice(0,D.value-1),Ke()];let u=null;for(let i=0;i<d.length;i++){const m=Math.abs(d[i]-a);if(u!==null&&u<m)break;u=m,o=i}}if(o===t){const a=Date.now()-Re,{value:d}=S,u=P.value[d];U>u/2||U/a>.4?o=oe(t):(U<-u/2||U/a<-.4)&&(o=se(t))}o!==null&&o!==t?(ze=!0,Q(o),Je(()=>{(!w.value||we.value!==T.value)&&$(me.value)})):$(me.value),We(),F()}function We(){ce&&(Ie=!1),ce=!1,Ce=0,ke=0,U=0,Re=0,G("touchmove",document,de),G("touchend",document,J),G("touchcancel",document,J),G("mousemove",document,de),G("mouseup",document,J)}function mt(){if(p.value&&V){const{value:t}=M;Se(t,0)}else F();p.value&&(_e.value.transitionDuration="0ms"),V=!1}function wt(t){if(t.preventDefault(),V)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const d=-1,u=1,i=(o||a)>0?u:d;let m=0,y=0;b.value?y=i:m=i;const L=10;(y*a>=L||m*o>=L)&&(i===u&&!Be()?ae():i===d&&!je()&&ye())}function bt(){P.value=tt(c.value,!0),F()}function yt(){var t,o;k.value&&((o=(t=A.effect).scheduler)===null||o===void 0||o.call(t),A.effect.run())}function _t(){e.autoplay&&ie()}function St(){e.autoplay&&F()}ge(()=>{Wt(F),requestAnimationFrame(()=>H.value=!0)}),at(()=>{We(),ie()}),qt(()=>{const{value:t}=h,{value:o}=C,a=new Map,d=i=>a.has(i)?a.get(i):-1;let u=!1;for(let i=0;i<t.length;i++){const m=o.findIndex(y=>y.el===t[i]);m!==i&&(u=!0),a.set(t[i],m)}u&&t.sort((i,m)=>d(i)-d(m))}),fe(M,(t,o)=>{if(t!==o)if(F(),p.value){if(w.value){const{value:a}=D;ne.value>2&&t===a-2&&o===1?t=0:t===1&&o===a-2&&(t=a-1)}Se(t,me.value)}else $()},{immediate:!0}),fe([w,E],()=>void Je(()=>{Q(M.value)})),fe(B,()=>{p.value&&$()},{deep:!0}),fe(p,t=>{t?$():(V=!1,re(q=0))});const Ct=g(()=>({onTouchstartPassive:e.touchable?Ee:void 0,onMousedown:e.draggable?Ee:void 0,onWheel:e.mousewheel?wt:void 0})),kt=g(()=>Object.assign(Object.assign({},Fe(Y,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ne.value,currentIndex:T.value})),Rt=g(()=>({total:ne.value,currentIndex:T.value,to:Y.to})),zt={getCurrentIndex:()=>T.value,to:be,prev:ye,next:ae},Pt=rt("Carousel","-carousel",zn,vn,e,n),qe=g(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:d,dotColorFocus:u,dotLineWidth:i,dotLineWidthActive:m,arrowColor:y}}=Pt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":u,"--n-dot-color-active":d,"--n-dot-size":o,"--n-dot-line-width":i,"--n-dot-line-width-active":m,"--n-arrow-color":y}}),X=s?Ot("carousel",void 0,qe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:c,slidesElRef:l,slideVNodes:C,duplicatedable:w,userWantsControl:z,autoSlideSize:k,realIndex:M,slideStyles:Ne,translateStyle:_e,slidesControlListeners:Ct,handleTransitionEnd:mt,handleResize:bt,handleSlideResize:yt,handleMouseenter:_t,handleMouseleave:St,isActive:ut,arrowSlotProps:kt,dotSlotProps:Rt},zt),{cssVars:s?void 0:qe,themeClass:X==null?void 0:X.themeClass,onRender:X==null?void 0:X.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:s,userWantsControl:c,slideStyles:l,dotType:h,dotPlacement:C,slidesControlListeners:b,transitionProps:S={},arrowSlotProps:x,dotSlotProps:p,$slots:{default:w,dots:z,arrow:E}}=this,W=w&&Zt(w())||[];let k=Ln(W);return k.length||(k=W.map(P=>_(Rn,null,{default:()=>st(P)}))),this.duplicatedable&&(k=pn(k)),this.slideVNodes.value=k,this.autoSlideSize&&(k=k.map(P=>_(Oe,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,c&&`${n}-carousel--usercontrol`],style:this.cssVars},b,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(Oe,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},c?k.map((P,A)=>_("div",{style:l[A],key:A},Ft(_(Xt,Object.assign({},S),{default:()=>P}),[[Jt,this.isActive(A)]]))):k)}),this.showDots&&p.total>1&&Ze(z,p,()=>[_(yn,{key:h+C,total:p.total,currentIndex:p.currentIndex,dotType:h,trigger:this.trigger,keyboard:this.keyboard})]),s&&Ze(E,x,()=>[_(Cn,null)]))}});function Ln(e){return e.reduce((n,s)=>(kn(s)&&n.push(s),n),[])}const Dn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Mn=r("g",{fill:"none"},[r("path",{d:"M10 3a7 7 0 1 1 0 14a7 7 0 0 1 0-14zm8 7a8 8 0 1 0-16 0a8 8 0 0 0 16 0zm-8-2.5A2.5 2.5 0 0 1 12.292 9H11.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.696a3.498 3.498 0 0 0-5.609-.53a.5.5 0 0 0 .746.667A2.493 2.493 0 0 1 10 7.5zm-3 4.304v.696a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.792a2.5 2.5 0 0 0 4.156.666a.5.5 0 0 1 .745.668A3.498 3.498 0 0 1 7 11.804z",fill:"currentColor"})],-1),Vn=[Mn],Nn=j({name:"ArrowSyncCircle20Regular",render:function(n,s){return R(),I("svg",Dn,Vn)}}),Tn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},jn=r("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M12 7l4.76 3.45L15 16H9l-1.76-5.55z"}),r("path",{d:"M12 7V3m3 13l2.5 3m-.74-8.55L20.5 9M9.06 16.05L6.5 19m.74-8.55L3.5 9"})],-1),Bn=[jn],Un=j({name:"BallFootball",render:function(n,s){return R(),I("svg",Tn,Bn)}}),Kn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},En=Ae('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21"></path><path d="M12 18V7h3"></path><path d="M3 17v-5h9"></path><path d="M4 12V6l18-3v2"></path><path d="M8 12V8L4 6"></path></g>',1),Wn=[En],qn=j({name:"CarCrane",render:function(n,s){return R(),I("svg",Kn,Wn)}}),On={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Zn=Ae('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="17" r="2"></circle><path d="M21 17h-8"></path><path d="M9 17H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h10l4 4v8"></path><rect x="6" y="8" width="6" height="4" rx="1"></rect></g>',1),Fn=[Zn],Jn=j({name:"Caravan",render:function(n,s){return R(),I("svg",On,Fn)}}),Xn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Hn=r("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"}),r("path",{d:"M12 6v2m0 8v2"})],-1),Qn=[Hn],$n=j({name:"Coin",render:function(n,s){return R(),I("svg",Xn,Qn)}}),Yn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Gn=Ae('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path><path d="M17 4h4v4"></path><path d="M16 9l5-5"></path></g>',1),eo=[Gn],to=j({name:"ScreenShare",render:function(n,s){return R(),I("svg",Yn,eo)}}),no="/assets/partner1-K0LNzNv_.webp",oo="/assets/partner2-utKT3h_0.webp",so="/assets/partner3-juFZo16q.webp",ao="/assets/partner4-o8_zy4jB.webp",ro="/assets/partner5-X0iYDps6.webp",lo="data:image/webp;base64,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",io={class:"logo-slider"},co={class:"logo-slide-track"},uo=["src","alt"],fo={__name:"LogoSider",setup(e){const n=[{src:no,label:"partner1.png",key:"partner1.png"},{src:oo,label:"partner2.png",key:"partner2.png"},{src:so,label:"partner3.png",key:"partner3.png"},{src:ao,label:"partner4.png",key:"partner4.png"},{src:ro,label:"partner5.png",key:"partner5.png"},{src:lo,label:"partner6.png",key:"partner6.png"}];return(s,c)=>(R(),I("div",io,[r("div",co,[(R(),I(De,null,Me(n,(l,h)=>r("div",{key:`${h}-${l.key}`,class:"slide"},[r("img",{src:l.src,alt:l.label},null,8,uo)])),64))])]))}},vo=Le(fo,[["__scopeId","data-v-56a00233"],["__file","D:/code/official-web/src/components/LogoSider.vue"]]),po=e=>(en("data-v-9740c341"),e=e(),tn(),e),ho={class:"flex flex-col items-center py-10"},go=po(()=>r("div",{class:"mb-20 mt-10"},[r("div",{class:"text-2xl font-bold md:text-2xl lg:text-4xl"},"服务类型")],-1)),xo={class:"grid gap-x-4 gap-y-20 grid-cols-1 md:grid-cols-3"},mo={class:"mr-4"},wo={class:"aspect-square icon-wrap"},bo={class:"counter-content media-body"},yo={class:"text-xl mb-2 md:text-2xl"},_o={class:"text-zinc-500"},So={__name:"index",setup(e){const n=[{label:"氢能产业链",content:"灵活可配置的产业链，打造一体化综合能源站解决方案，布局氢能能源网络。",key:"",icon:Un},{label:"氢能源车辆应用及推广",content:"重卡推广、全链路运营监控，24小时安全保障，数据支撑管理优化，提高工作效率分析与决策。",key:"",icon:qn},{label:"数字化应用平台",content:"搭建全国范围的“零碳智慧物流科技”运营管理平台，实现大宗物流数字化管理。",key:"",icon:to},{label:"零碳物流",content:"通过采用氢能源汽车，致力于运输过程中零碳排放量，提高能源利用效率。",key:"",icon:Nn},{label:"氢能供货接单",content:"司机在线接单，灵活定制接单流程，贴合实际业务流，保证质量！",key:"",icon:$t},{label:"平台开源",content:"面向开发者开放接口、大数据平台、可视化平台，为友伤提供更完善的服务。",key:"",icon:Yt},{label:"车金融",content:"包含融资租赁、保险、车后等",key:"",icon:Jn},{label:"碳数据交易",content:"碳减排监测、碳积分",key:"",icon:$n}];return ge(()=>{}),(s,c)=>{const l=Gt;return R(),I("div",ho,[go,r("div",xo,[(R(),I(De,null,Me(n,(h,C)=>r("div",{key:C,class:"flex flex-row"},[r("div",mo,[r("div",wo,[O(l,{size:"30",color:"#333",component:h.icon},null,8,["component"])])]),r("div",bo,[r("div",yo,Xe(h.label),1),r("p",_o,Xe(h.content),1)])])),64))])])}}},nt=Le(So,[["__scopeId","data-v-9740c341"],["__file","D:/code/official-web/src/views/home/components/ServiceList/index.vue"]]),Co="/assets/bg_01-13oqd7QH.jpg",ot="/assets/map-KJuJqI9c.png",ko={key:0,class:"flex flex-col items-center w-screen banner__inner overflow-hidden"},Ro=r("video",{src:"https://zhijianenergy.oss-cn-beijing.aliyuncs.com/geen_home_video-CqZrBKte.mp4",preload:"auto",autoplay:"",muted:"",loop:"",class:"mobile-video"},"your browser does not support the video tag",-1),zo={class:"w-full bg-white py-10 px-4 md:px-0"},Po={class:"def-container w-screen relative flex flex-col items-center"},Io=r("div",{class:"text-2xl leading-normal font-bold align-center"},"业务地图",-1),Ao=["src"],Lo={class:"w-full bg-white py-10 px-4 md:px-0"},Do={class:"def-container"},Mo={class:"px-4 mb-20 def-container"},Vo=r("div",{class:"section-title text-center position-relative pb-3 mx-auto",style:{"max-width":"600px"}},[r("div",{class:"text-2xl leading-normal font-bold mb-2 mt-28"},"合作伙伴")],-1),No={key:0,class:"w-screen h-screen"},To=r("video",{src:"https://zhijianenergy.oss-cn-beijing.aliyuncs.com/geen_home_video-CqZrBKte.mp4",preload:"auto",autoplay:"",muted:"",loop:"",class:"video"},"your browser does not support the video tag",-1),jo={class:"def-container w-screen mt-40 h-screen relative"},Bo=r("div",{class:"text-4xl leading-normal font-bold mb-2 mt-28 map-title"},"业务地图",-1),Uo=["src"],Ko={class:"w-full bg-white py-10 px-4 md:px-0"},Eo={class:"def-container"},Wo={class:"px-4 mb-20 def-container"},qo=r("div",{class:"section-title text-center position-relative pb-3 mx-auto",style:{"max-width":"600px"}},[r("div",{class:"text-4xl leading-normal font-bold mb-2 mt-28"},"合作伙伴")],-1),Oo={key:0,class:"w-screen h-screen"},Zo={__name:"index",setup(e){const{isMobile:n}=nn();on(),sn();const s=cn(),c=[{label:"新能源全链路精益运营商",content:"",key:"InformationSystem1",bg:Co,path:""}];let l=!1;console.log(l.value);const h=b=>{if(l)return;s.refs.carousel[0].getCurrentIndex()===4?(l=!0,s.refs.carousel[0].to(0),l=!1):b==="click"&&s.refs.carousel[0].next()};ge(()=>{!n.value&&window.addEventListener("wheel",h)}),an(()=>{window.removeEventListener("wheel",h)});const C=(b,S)=>{console.log(b),b===1&&S===3&&s.refs.carousel[0].to(0)};return(b,S)=>{const x=vo,p=An;return R(),I("div",null,[(R(),I(De,null,Me(c,w=>r("div",{key:w.key,class:"w-screen h-screen"},[te(n)?(R(),I("div",ko,[Ro,r("div",zo,[r("div",Po,[Io,r("img",{src:te(ot),alt:""},null,8,Ao)])]),r("div",Lo,[r("div",Do,[O(nt)])]),r("div",Mo,[Vo,O(x),O(Qe)]),te(n)?He("",!0):(R(),I("div",No))])):(R(),rn(p,{key:1,direction:"vertical",ref_for:!0,ref:"carousel","dot-type":"line","dot-placement":"right",touchable:"",mousewheel:"",loop:!1,"space-between":20,"onUpdate:currentIndex":C,"transition-style":{transitionDuration:"800ms"}},{default:ln(()=>[To,r("div",jo,[Bo,r("img",{src:te(ot),alt:""},null,8,Uo)]),r("div",Ko,[r("div",Eo,[O(nt)])]),r("div",Wo,[qo,O(x),O(Qe)]),te(n)?He("",!0):(R(),I("div",Oo))]),_:1},512))])),64))])}}},Jo=Le(Zo,[["__file","D:/code/official-web/src/views/home/index.vue"]]);export{Jo as default};
