import{d as F,h as _,C as gt,D as ht,E as b,G as Ce,H as xt,I as ee,J as mt,K as yt,L as Ct,M as ce,O as $e,P as St,Q,A as Z,R as wt,F as Tt,S as Rt,T as Pt,U as zt,V as Lt,W as r,X as s,Y as w,Z as A,$ as $t,a0 as Bt,a1 as Be,a2 as Se,a3 as ne,a4 as Wt,a5 as oe,a6 as ie,e as _t,a7 as At,a8 as k,a9 as Et,aa as M,ab as q,ac as kt,ad as we,ae as se,af as J,ag as Mt,ah as Vt,ai as jt,aj as It,ak as Ht}from"./index-BffISxam.js";const Ot=Ce(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ce("&::-webkit-scrollbar",{width:0,height:0})]),Gt=F({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=_(null);function n(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const i=gt();return Ot.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ht,ssr:i}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...l){var y;(y=e.value)===null||y===void 0||y.scrollTo(...l)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Ft=/\s/;function Dt(e){for(var n=e.length;n--&&Ft.test(e.charAt(n)););return n}var Nt=/^\s+/;function Xt(e){return e&&e.slice(0,Dt(e)+1).replace(Nt,"")}var Te=NaN,Ut=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,Kt=/^0o[0-7]+$/i,qt=parseInt;function Re(e){if(typeof e=="number")return e;if(xt(e))return Te;if(ee(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ee(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Xt(e);var i=Yt.test(e);return i||Kt.test(e)?qt(e.slice(2),i?2:8):Ut.test(e)?Te:+e}var le=function(){return mt.Date.now()},Jt="Expected a function",Qt=Math.max,Zt=Math.min;function ea(e,n,i){var f,l,y,v,p,m,h=0,x=!1,L=!1,R=!0;if(typeof e!="function")throw new TypeError(Jt);n=Re(n)||0,ee(i)&&(x=!!i.leading,L="maxWait"in i,y=L?Qt(Re(i.maxWait)||0,n):y,R="trailing"in i?!!i.trailing:R);function g(c){var z=f,H=l;return f=l=void 0,h=c,v=e.apply(H,z),v}function T(c){return h=c,p=setTimeout(B,n),x?g(c):v}function C(c){var z=c-m,H=c-h,D=n-z;return L?Zt(D,y-H):D}function P(c){var z=c-m,H=c-h;return m===void 0||z>=n||z<0||L&&H>=y}function B(){var c=le();if(P(c))return $(c);p=setTimeout(B,C(c))}function $(c){return p=void 0,R&&f?g(c):(f=l=void 0,v)}function I(){p!==void 0&&clearTimeout(p),h=0,f=m=l=p=void 0}function W(){return p===void 0?v:$(le())}function u(){var c=le(),z=P(c);if(f=arguments,l=this,m=c,z){if(p===void 0)return T(m);if(L)return clearTimeout(p),p=setTimeout(B,n),g(m)}return p===void 0&&(p=setTimeout(B,n)),v}return u.cancel=I,u.flush=W,u}var ta="Expected a function";function de(e,n,i){var f=!0,l=!0;if(typeof e!="function")throw new TypeError(ta);return ee(i)&&(f="leading"in i?!!i.leading:f,l="trailing"in i?!!i.trailing:l),ea(e,n,{leading:f,maxWait:n,trailing:l})}const aa=F({name:"Add",render(){return b("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ra={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},na=e=>{const{textColor2:n,primaryColor:i,textColorDisabled:f,closeIconColor:l,closeIconColorHover:y,closeIconColorPressed:v,closeColorHover:p,closeColorPressed:m,tabColor:h,baseColor:x,dividerColor:L,fontWeight:R,textColor1:g,borderRadius:T,fontSize:C,fontWeightStrong:P}=e;return Object.assign(Object.assign({},ra),{colorSegment:h,tabFontSizeCard:C,tabTextColorLine:g,tabTextColorActiveLine:i,tabTextColorHoverLine:i,tabTextColorDisabledLine:f,tabTextColorSegment:g,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:f,tabTextColorBar:g,tabTextColorActiveBar:i,tabTextColorHoverBar:i,tabTextColorDisabledBar:f,tabTextColorCard:g,tabTextColorHoverCard:g,tabTextColorActiveCard:i,tabTextColorDisabledCard:f,barColor:i,closeIconColor:l,closeIconColorHover:y,closeIconColorPressed:v,closeColorHover:p,closeColorPressed:m,closeBorderRadius:T,tabColor:h,tabColorSegment:x,tabBorderColor:L,tabFontWeightActive:R,tabFontWeight:R,tabBorderRadius:T,paneTextColor:n,fontWeightStrong:P})},oa={name:"Tabs",common:yt,self:na},ia=oa,pe=Ct("n-tabs"),We={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ca=F({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:We,setup(e){ce(()=>{e.label!==void 0&&Q("tab-pane","`label` is deprecated, please use `tab` instead.")});const n=$e(pe,null);return n||St("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),sa=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Lt(We,["displayDirective"])),fe=F({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:sa,setup(e){const{mergedClsPrefixRef:n,valueRef:i,typeRef:f,closableRef:l,tabStyleRef:y,addTabStyleRef:v,tabClassRef:p,addTabClassRef:m,tabChangeIdRef:h,onBeforeLeaveRef:x,triggerRef:L,handleAdd:R,activateTab:g,handleClose:T}=$e(pe);return{trigger:L,mergedClosable:Z(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?l.value:C}),style:y,addStyle:v,tabClass:p,addTabClass:m,clsPrefix:n,value:i,type:f,handleClose(C){C.stopPropagation(),!e.disabled&&T(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){R();return}const{name:C}=e,P=++h.id;if(C!==i.value){const{value:B}=x;B?Promise.resolve(B(e.name,i.value)).then($=>{$&&h.id===P&&g(C)}):g(C)}}}},render(){const{internalAddable:e,clsPrefix:n,name:i,disabled:f,label:l,tab:y,value:v,mergedClosable:p,trigger:m,$slots:{default:h}}=this,x=l??y;return b("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${n}-tabs-tab-pad`}):null,b("div",Object.assign({key:i,"data-name":i,"data-disabled":f?!0:void 0},wt({class:[`${n}-tabs-tab`,v===i&&`${n}-tabs-tab--active`,f&&`${n}-tabs-tab--disabled`,p&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${n}-tabs-tab__label`},e?b(Tt,null,b("div",{class:`${n}-tabs-tab__height-placeholder`}," "),b(Rt,{clsPrefix:n},{default:()=>b(aa,null)})):h?h():typeof x=="object"?x:Pt(x??i)),p&&this.type==="card"?b(zt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:f}):null))}}),la=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[s("segment-type",[r("tabs-rail",[w("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),s("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),s("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),s("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),s("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),s("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[s("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),s("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),s("top, bottom",[r("tabs-nav-scroll-wrapper",[w("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),w("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),s("shadow-start",[w("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[w("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),s("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[w("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),w("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),s("shadow-start",[w("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[w("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[w("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),w("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("&.transition-disabled",`
 transition: none;
 `),s("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),w("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),w("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),w("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),s("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),s("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),s("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[s("line-type",[s("top",[A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),s("left",[A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),s("right",[A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),s("bottom",[A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),s("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[s("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),$t("disabled",[w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),s("closable","padding-right: 8px;"),s("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),s("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),s("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),s("top",[s("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),s("left",[s("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),s("right",[s("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),s("bottom",[s("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),da=Object.assign(Object.assign({},Be.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),fa=F({name:"Tabs",props:da,setup(e,{slots:n}){var i,f,l,y;ce(()=>{e.labelSize!==void 0&&Q("tabs","`label-size` is deprecated, please use `size` instead."),e.activeName!==void 0&&Q("tabs","`active-name` is deprecated, please use `value` instead."),e.onActiveNameChange!==void 0&&Q("tabs","`on-active-name-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:v,inlineThemeDisabled:p}=Bt(e),m=Be("Tabs","-tabs",la,ia,e,v),h=_(null),x=_(null),L=_(null),R=_(null),g=_(null),T=_(null),C=_(!0),P=_(!0),B=Se(e,["labelSize","size"]),$=Se(e,["activeName","value"]),I=_((f=(i=$.value)!==null&&i!==void 0?i:e.defaultValue)!==null&&f!==void 0?f:n.default?(y=(l=ne(n.default())[0])===null||l===void 0?void 0:l.props)===null||y===void 0?void 0:y.name:null),W=Wt($,I),u={id:0},c=Z(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});oe(W,()=>{u.id=0,N(),ve()});function z(){var a;const{value:t}=W;return t===null?null:(a=h.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${t}"]`)}function H(a){if(e.type==="card")return;const{value:t}=x;if(!t)return;const o=t.style.opacity==="0";if(a){const d=`${v.value}-tabs-bar--disabled`,{barWidth:S,placement:V}=e;if(a.dataset.disabled==="true"?t.classList.add(d):t.classList.remove(d),["top","bottom"].includes(V)){if(ue(["top","maxHeight","height"]),typeof S=="number"&&a.offsetWidth>=S){const E=Math.floor((a.offsetWidth-S)/2)+a.offsetLeft;t.style.left=`${E}px`,t.style.maxWidth=`${S}px`}else t.style.left=`${a.offsetLeft}px`,t.style.maxWidth=`${a.offsetWidth}px`;t.style.width="8192px",o&&(t.style.transition="none"),t.offsetWidth,o&&(t.style.transition="",t.style.opacity="1")}else{if(ue(["left","maxWidth","width"]),typeof S=="number"&&a.offsetHeight>=S){const E=Math.floor((a.offsetHeight-S)/2)+a.offsetTop;t.style.top=`${E}px`,t.style.maxHeight=`${S}px`}else t.style.top=`${a.offsetTop}px`,t.style.maxHeight=`${a.offsetHeight}px`;t.style.height="8192px",o&&(t.style.transition="none"),t.offsetHeight,o&&(t.style.transition="",t.style.opacity="1")}}}function D(){if(e.type==="card")return;const{value:a}=x;a&&(a.style.opacity="0")}function ue(a){const{value:t}=x;if(t)for(const o of a)t.style[o]=""}function N(){if(e.type==="card")return;const a=z();a?H(a):D()}function ve(a){var t;const o=(t=g.value)===null||t===void 0?void 0:t.$el;if(!o)return;const d=z();if(!d)return;const{scrollLeft:S,offsetWidth:V}=o,{offsetLeft:E,offsetWidth:Y}=d;S>E?o.scrollTo({top:0,left:E,behavior:"smooth"}):E+Y>S+V&&o.scrollTo({top:0,left:E+Y-V,behavior:"smooth"})}const X=_(null);let te=0,j=null;function _e(a){const t=X.value;if(t){te=a.getBoundingClientRect().height;const o=`${te}px`,d=()=>{t.style.height=o,t.style.maxHeight=o};j?(d(),j(),j=null):j=d}}function Ae(a){const t=X.value;if(t){const o=a.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,t.style.maxHeight=`${o}px`,t.style.height=`${Math.max(te,o)}px`};j?(j(),j=null,d()):j=d}}function Ee(){const a=X.value;if(a){a.style.maxHeight="",a.style.height="";const{paneWrapperStyle:t}=e;if(typeof t=="string")a.style.cssText=t;else if(t){const{maxHeight:o,height:d}=t;o!==void 0&&(a.style.maxHeight=o),d!==void 0&&(a.style.height=d)}}}const ge={value:[]},he=_("next");function ke(a){const t=W.value;let o="next";for(const d of ge.value){if(d===t)break;if(d===a){o="prev";break}}he.value=o,Me(a)}function Me(a){const{onActiveNameChange:t,onUpdateValue:o,"onUpdate:value":d}=e;t&&J(t,a),o&&J(o,a),d&&J(d,a),I.value=a}function Ve(a){const{onClose:t}=e;t&&J(t,a)}function xe(){const{value:a}=x;if(!a)return;const t="transition-disabled";a.classList.add(t),N(),a.classList.remove(t)}const O=_(null);function ae({transitionDisabled:a}){const t=h.value;if(!t)return;a&&t.classList.add("transition-disabled");const o=z();o&&O.value&&(O.value.style.width=`${o.offsetWidth}px`,O.value.style.height=`${o.offsetHeight}px`,O.value.style.transform=`translateX(${o.offsetLeft-t.offsetLeft-Mt(getComputedStyle(t).paddingLeft)}px)`,a&&O.value.offsetWidth),a&&t.classList.remove("transition-disabled")}oe([W],()=>{e.type==="segment"&&ie(()=>{ae({transitionDisabled:!1})})}),_t(()=>{e.type==="segment"&&ae({transitionDisabled:!0})});let me=0;function je(a){var t;if(a.contentRect.width===0&&a.contentRect.height===0||me===a.contentRect.width)return;me=a.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&xe(),o!=="segment"){const{placement:d}=e;re((d==="top"||d==="bottom"?(t=g.value)===null||t===void 0?void 0:t.$el:T.value)||null)}}const Ie=de(je,64);oe([()=>e.justifyContent,()=>e.size],()=>{ie(()=>{const{type:a}=e;(a==="line"||a==="bar")&&xe()})});const U=_(!1);function He(a){var t;const{target:o,contentRect:{width:d}}=a,S=o.parentElement.offsetWidth;if(!U.value)S<d&&(U.value=!0);else{const{value:V}=R;if(!V)return;S-d>V.$el.offsetWidth&&(U.value=!1)}re(((t=g.value)===null||t===void 0?void 0:t.$el)||null)}const Oe=de(He,64);function Ge(){const{onAdd:a}=e;a&&a(),ie(()=>{const t=z(),{value:o}=g;!t||!o||o.scrollTo({left:t.offsetLeft,top:0,behavior:"smooth"})})}function re(a){if(!a)return;const{placement:t}=e;if(t==="top"||t==="bottom"){const{scrollLeft:o,scrollWidth:d,offsetWidth:S}=a;C.value=o<=0,P.value=o+S>=d}else{const{scrollTop:o,scrollHeight:d,offsetHeight:S}=a;C.value=o<=0,P.value=o+S>=d}}const Fe=de(a=>{re(a.target)},64);At(pe,{triggerRef:k(e,"trigger"),tabStyleRef:k(e,"tabStyle"),tabClassRef:k(e,"tabClass"),addTabStyleRef:k(e,"addTabStyle"),addTabClassRef:k(e,"addTabClass"),paneClassRef:k(e,"paneClass"),paneStyleRef:k(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:k(e,"type"),closableRef:k(e,"closable"),valueRef:W,tabChangeIdRef:u,onBeforeLeaveRef:k(e,"onBeforeLeave"),activateTab:ke,handleClose:Ve,handleAdd:Ge}),Et(()=>{N(),ve()}),ce(()=>{const{value:a}=L;if(!a)return;const{value:t}=v,o=`${t}-tabs-nav-scroll-wrapper--shadow-start`,d=`${t}-tabs-nav-scroll-wrapper--shadow-end`;C.value?a.classList.remove(o):a.classList.add(o),P.value?a.classList.remove(d):a.classList.add(d)});const De={syncBarPosition:()=>{N()}},Ne=()=>{ae({transitionDisabled:!0})},ye=Z(()=>{const{value:a}=B,{type:t}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[t],d=`${a}${o}`,{self:{barColor:S,closeIconColor:V,closeIconColorHover:E,closeIconColorPressed:Y,tabColor:Xe,tabBorderColor:Ue,paneTextColor:Ye,tabFontWeight:Ke,tabBorderRadius:qe,tabFontWeightActive:Je,colorSegment:Qe,fontWeightStrong:Ze,tabColorSegment:et,closeSize:tt,closeIconSize:at,closeColorHover:rt,closeColorPressed:nt,closeBorderRadius:ot,[M("panePadding",a)]:K,[M("tabPadding",d)]:it,[M("tabPaddingVertical",d)]:st,[M("tabGap",d)]:lt,[M("tabGap",`${d}Vertical`)]:dt,[M("tabTextColor",t)]:bt,[M("tabTextColorActive",t)]:ct,[M("tabTextColorHover",t)]:ft,[M("tabTextColorDisabled",t)]:pt,[M("tabFontSize",a)]:ut},common:{cubicBezierEaseInOut:vt}}=m.value;return{"--n-bezier":vt,"--n-color-segment":Qe,"--n-bar-color":S,"--n-tab-font-size":ut,"--n-tab-text-color":bt,"--n-tab-text-color-active":ct,"--n-tab-text-color-disabled":pt,"--n-tab-text-color-hover":ft,"--n-pane-text-color":Ye,"--n-tab-border-color":Ue,"--n-tab-border-radius":qe,"--n-close-size":tt,"--n-close-icon-size":at,"--n-close-color-hover":rt,"--n-close-color-pressed":nt,"--n-close-border-radius":ot,"--n-close-icon-color":V,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":Y,"--n-tab-color":Xe,"--n-tab-font-weight":Ke,"--n-tab-font-weight-active":Je,"--n-tab-padding":it,"--n-tab-padding-vertical":st,"--n-tab-gap":lt,"--n-tab-gap-vertical":dt,"--n-pane-padding-left":q(K,"left"),"--n-pane-padding-right":q(K,"right"),"--n-pane-padding-top":q(K,"top"),"--n-pane-padding-bottom":q(K,"bottom"),"--n-font-weight-strong":Ze,"--n-tab-color-segment":et}}),G=p?kt("tabs",Z(()=>`${B.value[0]}${e.type[0]}`),ye,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:W,renderedNames:new Set,segmentCapsuleElRef:O,tabsPaneWrapperRef:X,tabsElRef:h,barElRef:x,addTabInstRef:R,xScrollInstRef:g,scrollWrapperElRef:L,addTabFixed:U,tabWrapperStyle:c,handleNavResize:Ie,mergedSize:B,handleScroll:Fe,handleTabsResize:Oe,cssVars:p?void 0:ye,themeClass:G==null?void 0:G.themeClass,animationDirection:he,renderNameListRef:ge,yScrollElRef:T,handleSegmentResize:Ne,onAnimationBeforeLeave:_e,onAnimationEnter:Ae,onAnimationAfterEnter:Ee,onRender:G==null?void 0:G.onRender},De)},render(){const{mergedClsPrefix:e,type:n,placement:i,addTabFixed:f,addable:l,mergedSize:y,renderNameListRef:v,onRender:p,paneWrapperClass:m,paneWrapperStyle:h,$slots:{default:x,prefix:L,suffix:R}}=this;p==null||p();const g=x?ne(x()).filter(u=>u.type.__TAB_PANE__===!0):[],T=x?ne(x()).filter(u=>u.type.__TAB__===!0):[],C=!T.length,P=n==="card",B=n==="segment",$=!P&&!B&&this.justifyContent;v.value=[];const I=()=>{const u=b("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},$?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),C?g.map((c,z)=>(v.value.push(c.props.name),be(b(fe,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0&&(!$||$==="center"||$==="start"||$==="end")}),c.children?{default:c.children.tab}:void 0)))):T.map((c,z)=>(v.value.push(c.props.name),be(z!==0&&!$?Le(c):c))),!f&&l&&P?ze(l,(C?g.length:T.length)!==0):null,$?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&l?b(se,{onResize:this.handleTabsResize},{default:()=>u}):u,P?b("div",{class:`${e}-tabs-pad`}):null,P?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},W=B?"top":i;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${y}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${W}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${W}`,`${e}-tabs-nav`]},we(L,u=>u&&b("div",{class:`${e}-tabs-nav__prefix`},u)),B?b(se,{onResize:this.handleSegmentResize},{default:()=>b("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},b("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},b("div",{class:`${e}-tabs-wrapper`},b("div",{class:`${e}-tabs-tab`}))),C?g.map((u,c)=>(v.value.push(u.props.name),b(fe,Object.assign({},u.props,{internalCreatedByPane:!0,internalLeftPadded:c!==0}),u.children?{default:u.children.tab}:void 0))):T.map((u,c)=>(v.value.push(u.props.name),c===0?u:Le(u))))}):b(se,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(W)?b(Gt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:I}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},I()))}),f&&l&&P?ze(l,!0):null,we(R,u=>u&&b("div",{class:`${e}-tabs-nav__suffix`},u))),C&&(this.animated&&(W==="top"||W==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:h,class:[`${e}-tabs-pane-wrapper`,m]},Pe(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Pe(g,this.mergedValue,this.renderedNames)))}});function Pe(e,n,i,f,l,y,v){const p=[];return e.forEach(m=>{const{name:h,displayDirective:x,"display-directive":L}=m.props,R=T=>x===T||L===T,g=n===h;if(m.key!==void 0&&(m.key=h),g||R("show")||R("show:lazy")&&i.has(h)){i.has(h)||i.add(h);const T=!R("if");p.push(T?Vt(m,[[jt,g]]):m)}}),v?b(It,{name:`${v}-transition`,onBeforeLeave:f,onEnter:l,onAfterEnter:y},{default:()=>p}):p}function ze(e,n){return b(fe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Le(e){const n=Ht(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function be(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ca as _,fa as a,fe as b};
