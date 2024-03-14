import{d as F,h as A,C as St,D as Rt,E as b,G as Re,H as Tt,I as ee,J as wt,K as pe,L as Te,A as _,M as Pt,O as we,P as be,z as Pe,Q as ze,R as je,S as zt,T as Lt,U as $t,V as fe,W as Bt,X as Z,Y as _t,F as Wt,Z as At,$ as Ot,a0 as jt,a1 as kt,a2 as i,a3 as d,a4 as z,a5 as O,a6 as Et,a7 as Mt,a8 as ke,a9 as Le,aa as ne,ab as Vt,ac as ie,ad as oe,e as It,ae as k,af as Ht,ag as E,ah as q,ai as Dt,aj as $e,ak as le,al as Q,am as Gt,an as Ft,ao as Nt,ap as Xt,aq as Ut}from"./index-BN4jZ9aS.js";const Kt=Re(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Re("&::-webkit-scrollbar",{width:0,height:0})]),Yt=F({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=A(null);function t(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const l=St();return Kt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Rt,ssr:l}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...s){var S;(S=e.value)===null||S===void 0||S.scrollTo(...s)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Jt=/\s/;function qt(e){for(var t=e.length;t--&&Jt.test(e.charAt(t)););return t}var Qt=/^\s+/;function Zt(e){return e&&e.slice(0,qt(e)+1).replace(Qt,"")}var Be=NaN,ea=/^[-+]0x[0-9a-f]+$/i,ta=/^0b[01]+$/i,aa=/^0o[0-7]+$/i,ra=parseInt;function _e(e){if(typeof e=="number")return e;if(Tt(e))return Be;if(ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Zt(e);var l=ta.test(e);return l||aa.test(e)?ra(e.slice(2),l?2:8):ea.test(e)?Be:+e}var se=function(){return wt.Date.now()},na="Expected a function",ia=Math.max,oa=Math.min;function la(e,t,l){var c,s,S,g,v,y,m=0,C=!1,$=!1,L=!0;if(typeof e!="function")throw new TypeError(na);t=_e(t)||0,ee(l)&&(C=!!l.leading,$="maxWait"in l,S=$?ia(_e(l.maxWait)||0,t):S,L="trailing"in l?!!l.trailing:L);function h(p){var B=c,H=s;return c=s=void 0,m=p,g=e.apply(H,B),g}function n(p){return m=p,v=setTimeout(T,t),C?h(p):g}function u(p){var B=p-y,H=p-m,N=t-B;return $?oa(N,S-H):N}function R(p){var B=p-y,H=p-m;return y===void 0||B>=t||B<0||$&&H>=S}function T(){var p=se();if(R(p))return w(p);v=setTimeout(T,u(p))}function w(p){return v=void 0,L&&c?h(p):(c=s=void 0,g)}function I(){v!==void 0&&clearTimeout(v),m=0,c=y=s=v=void 0}function W(){return v===void 0?g:w(se())}function x(){var p=se(),B=R(p);if(c=arguments,s=this,y=p,B){if(v===void 0)return n(y);if($)return clearTimeout(v),v=setTimeout(T,t),h(y)}return v===void 0&&(v=setTimeout(T,t)),g}return x.cancel=I,x.flush=W,x}var sa="Expected a function";function de(e,t,l){var c=!0,s=!0;if(typeof e!="function")throw new TypeError(sa);return ee(l)&&(c="leading"in l?!!l.leading:c,s="trailing"in l?!!l.trailing:s),la(e,t,{leading:c,maxWait:t,trailing:s})}const da=F({name:"Add",render(){return b("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ca={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:{type:String,default:be},locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(zt("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},xa=F({name:"ConfigProvider",alias:["App"],props:ca,setup(e){const t=pe(Te,null),l=_(()=>{const{theme:n}=e;if(n===null)return;const u=t==null?void 0:t.mergedThemeRef.value;return n===void 0?u:u===void 0?n:Object.assign({},u,n)}),c=_(()=>{const{themeOverrides:n}=e;if(n!==null){if(n===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const u=t==null?void 0:t.mergedThemeOverridesRef.value;return u===void 0?n:Pt({},u,n)}}}),s=we(()=>{const{namespace:n}=e;return n===void 0?t==null?void 0:t.mergedNamespaceRef.value:n}),S=we(()=>{const{bordered:n}=e;return n===void 0?t==null?void 0:t.mergedBorderedRef.value:n}),g=_(()=>{const{icons:n}=e;return n===void 0?t==null?void 0:t.mergedIconsRef.value:n}),v=_(()=>{const{componentOptions:n}=e;return n!==void 0?n:t==null?void 0:t.mergedComponentPropsRef.value}),y=_(()=>{const{clsPrefix:n}=e;return n!==void 0?n:t?t.mergedClsPrefixRef.value:be}),m=_(()=>{var n;const{rtl:u}=e;if(u===void 0)return t==null?void 0:t.mergedRtlRef.value;const R={};for(const T of u)R[T.name]=Pe(T),(n=T.peers)===null||n===void 0||n.forEach(w=>{w.name in R||(R[w.name]=Pe(w))});return R}),C=_(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),$=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),L=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),h=_(()=>{const{value:n}=l,{value:u}=c,R=u&&Object.keys(u).length!==0,T=n==null?void 0:n.name;return T?R?`${T}-${ze(JSON.stringify(c.value))}`:T:R?ze(JSON.stringify(c.value)):""});return je(Te,{mergedThemeHashRef:h,mergedBreakpointsRef:C,mergedRtlRef:m,mergedIconsRef:g,mergedComponentPropsRef:v,mergedBorderedRef:S,mergedNamespaceRef:s,mergedClsPrefixRef:y,mergedLocaleRef:_(()=>{const{locale:n}=e;if(n!==null)return n===void 0?t==null?void 0:t.mergedLocaleRef.value:n}),mergedDateLocaleRef:_(()=>{const{dateLocale:n}=e;if(n!==null)return n===void 0?t==null?void 0:t.mergedDateLocaleRef.value:n}),mergedHljsRef:_(()=>{const{hljs:n}=e;return n===void 0?t==null?void 0:t.mergedHljsRef.value:n}),mergedKatexRef:_(()=>{const{katex:n}=e;return n===void 0?t==null?void 0:t.mergedKatexRef.value:n}),mergedThemeRef:l,mergedThemeOverridesRef:c,inlineThemeDisabled:$||!1,preflightStyleDisabled:L||!1}),{mergedClsPrefix:y,mergedBordered:S,mergedNamespace:s,mergedTheme:l,mergedThemeOverrides:c}},render(){var e,t,l,c;return this.abstract?(c=(l=this.$slots).default)===null||c===void 0?void 0:c.call(l):b(this.as||this.tag,{class:`${this.mergedClsPrefix||be}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),ba={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},fa=e=>{const{textColor2:t,primaryColor:l,textColorDisabled:c,closeIconColor:s,closeIconColorHover:S,closeIconColorPressed:g,closeColorHover:v,closeColorPressed:y,tabColor:m,baseColor:C,dividerColor:$,fontWeight:L,textColor1:h,borderRadius:n,fontSize:u,fontWeightStrong:R}=e;return Object.assign(Object.assign({},ba),{colorSegment:m,tabFontSizeCard:u,tabTextColorLine:h,tabTextColorActiveLine:l,tabTextColorHoverLine:l,tabTextColorDisabledLine:c,tabTextColorSegment:h,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:c,tabTextColorBar:h,tabTextColorActiveBar:l,tabTextColorHoverBar:l,tabTextColorDisabledBar:c,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:l,tabTextColorDisabledCard:c,barColor:l,closeIconColor:s,closeIconColorHover:S,closeIconColorPressed:g,closeColorHover:v,closeColorPressed:y,closeBorderRadius:n,tabColor:m,tabColorSegment:C,tabBorderColor:$,tabFontWeightActive:L,tabFontWeight:L,tabBorderRadius:n,paneTextColor:t,fontWeightStrong:R})},ua={name:"Tabs",common:Lt,self:fa},pa=ua,ve=$t("n-tabs"),Ee={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ya=F({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ee,setup(e){fe(()=>{e.label!==void 0&&Z("tab-pane","`label` is deprecated, please use `tab` instead.")});const t=pe(ve,null);return t||Bt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),va=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},kt(Ee,["displayDirective"])),ue=F({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:va,setup(e){const{mergedClsPrefixRef:t,valueRef:l,typeRef:c,closableRef:s,tabStyleRef:S,addTabStyleRef:g,tabClassRef:v,addTabClassRef:y,tabChangeIdRef:m,onBeforeLeaveRef:C,triggerRef:$,handleAdd:L,activateTab:h,handleClose:n}=pe(ve);return{trigger:$,mergedClosable:_(()=>{if(e.internalAddable)return!1;const{closable:u}=e;return u===void 0?s.value:u}),style:S,addStyle:g,tabClass:v,addTabClass:y,clsPrefix:t,value:l,type:c,handleClose(u){u.stopPropagation(),!e.disabled&&n(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){L();return}const{name:u}=e,R=++m.id;if(u!==l.value){const{value:T}=C;T?Promise.resolve(T(e.name,l.value)).then(w=>{w&&m.id===R&&h(u)}):h(u)}}}},render(){const{internalAddable:e,clsPrefix:t,name:l,disabled:c,label:s,tab:S,value:g,mergedClosable:v,trigger:y,$slots:{default:m}}=this,C=s??S;return b("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${t}-tabs-tab-pad`}):null,b("div",Object.assign({key:l,"data-name":l,"data-disabled":c?!0:void 0},_t({class:[`${t}-tabs-tab`,g===l&&`${t}-tabs-tab--active`,c&&`${t}-tabs-tab--disabled`,v&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:y==="click"?this.activateTab:void 0,onMouseenter:y==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${t}-tabs-tab__label`},e?b(Wt,null,b("div",{class:`${t}-tabs-tab__height-placeholder`}," "),b(At,{clsPrefix:t},{default:()=>b(da,null)})):m?m():typeof C=="object"?C:Ot(C??l)),v&&this.type==="card"?b(jt,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:c}):null))}}),ga=i("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[d("segment-type",[i("tabs-rail",[z("&.transition-disabled",[i("tabs-capsule",`
 transition: none;
 `)])])]),d("top",[i("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),d("left",[i("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),d("left, right",`
 flex-direction: row;
 `,[i("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),i("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),d("right",`
 flex-direction: row-reverse;
 `,[i("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),i("tabs-bar",`
 left: 0;
 `)]),d("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[i("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),i("tabs-bar",`
 top: 0;
 `)]),i("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[i("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),i("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[d("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),d("flex",[i("tabs-nav",`
 width: 100%;
 position: relative;
 `,[i("tabs-wrapper",`
 width: 100%;
 `,[i("tabs-tab",`
 margin-right: 0;
 `)])])]),i("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[O("prefix, suffix",`
 display: flex;
 align-items: center;
 `),O("prefix","padding-right: 16px;"),O("suffix","padding-left: 16px;")]),d("top, bottom",[i("tabs-nav-scroll-wrapper",[z("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),z("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),d("shadow-start",[z("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),d("shadow-end",[z("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),d("left, right",[i("tabs-nav-scroll-content",`
 flex-direction: column;
 `),i("tabs-nav-scroll-wrapper",[z("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),z("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),d("shadow-start",[z("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),d("shadow-end",[z("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[i("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[z("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),z("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),i("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),i("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),i("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),i("tabs-tab",`
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
 `,[d("disabled",{cursor:"not-allowed"}),O("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),O("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),i("tabs-bar",`
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
 `,[z("&.transition-disabled",`
 transition: none;
 `),d("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),i("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),i("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[z("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),z("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),z("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),z("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),z("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),i("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),d("line-type, bar-type",[i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[z("&:hover",{color:"var(--n-tab-text-color-hover)"}),d("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),d("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),i("tabs-nav",[d("line-type",[d("top",[O("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 bottom: -1px;
 `)]),d("left",[O("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 right: -1px;
 `)]),d("right",[O("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 left: -1px;
 `)]),d("bottom",[O("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 top: -1px;
 `)]),O("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-bar",`
 border-radius: 0;
 `)]),d("card-type",[O("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-tab",`
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
 `,[d("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[O("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Et("disabled",[z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),d("closable","padding-right: 8px;"),d("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),d("disabled","color: var(--n-tab-text-color-disabled);")]),i("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),d("left, right",[i("tabs-wrapper",`
 flex-direction: column;
 `,[i("tabs-tab-wrapper",`
 flex-direction: column;
 `,[i("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),d("top",[d("card-type",[i("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[d("active",`
 border-bottom: 1px solid #0000;
 `)]),i("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),d("left",[d("card-type",[i("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[d("active",`
 border-right: 1px solid #0000;
 `)]),i("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),d("right",[d("card-type",[i("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[d("active",`
 border-left: 1px solid #0000;
 `)]),i("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),d("bottom",[d("card-type",[i("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[d("active",`
 border-top: 1px solid #0000;
 `)]),i("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ha=Object.assign(Object.assign({},ke.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ca=F({name:"Tabs",props:ha,setup(e,{slots:t}){var l,c,s,S;fe(()=>{e.labelSize!==void 0&&Z("tabs","`label-size` is deprecated, please use `size` instead."),e.activeName!==void 0&&Z("tabs","`active-name` is deprecated, please use `value` instead."),e.onActiveNameChange!==void 0&&Z("tabs","`on-active-name-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:g,inlineThemeDisabled:v}=Mt(e),y=ke("Tabs","-tabs",ga,pa,e,g),m=A(null),C=A(null),$=A(null),L=A(null),h=A(null),n=A(null),u=A(!0),R=A(!0),T=Le(e,["labelSize","size"]),w=Le(e,["activeName","value"]),I=A((c=(l=w.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&c!==void 0?c:t.default?(S=(s=ne(t.default())[0])===null||s===void 0?void 0:s.props)===null||S===void 0?void 0:S.name:null),W=Vt(w,I),x={id:0},p=_(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ie(W,()=>{x.id=0,X(),he()});function B(){var r;const{value:a}=W;return a===null?null:(r=m.value)===null||r===void 0?void 0:r.querySelector(`[data-name="${a}"]`)}function H(r){if(e.type==="card")return;const{value:a}=C;if(!a)return;const o=a.style.opacity==="0";if(r){const f=`${g.value}-tabs-bar--disabled`,{barWidth:P,placement:M}=e;if(r.dataset.disabled==="true"?a.classList.add(f):a.classList.remove(f),["top","bottom"].includes(M)){if(ge(["top","maxHeight","height"]),typeof P=="number"&&r.offsetWidth>=P){const j=Math.floor((r.offsetWidth-P)/2)+r.offsetLeft;a.style.left=`${j}px`,a.style.maxWidth=`${P}px`}else a.style.left=`${r.offsetLeft}px`,a.style.maxWidth=`${r.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(ge(["left","maxWidth","width"]),typeof P=="number"&&r.offsetHeight>=P){const j=Math.floor((r.offsetHeight-P)/2)+r.offsetTop;a.style.top=`${j}px`,a.style.maxHeight=`${P}px`}else a.style.top=`${r.offsetTop}px`,a.style.maxHeight=`${r.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function N(){if(e.type==="card")return;const{value:r}=C;r&&(r.style.opacity="0")}function ge(r){const{value:a}=C;if(a)for(const o of r)a.style[o]=""}function X(){if(e.type==="card")return;const r=B();r?H(r):N()}function he(r){var a;const o=(a=h.value)===null||a===void 0?void 0:a.$el;if(!o)return;const f=B();if(!f)return;const{scrollLeft:P,offsetWidth:M}=o,{offsetLeft:j,offsetWidth:Y}=f;P>j?o.scrollTo({top:0,left:j,behavior:"smooth"}):j+Y>P+M&&o.scrollTo({top:0,left:j+Y-M,behavior:"smooth"})}const U=A(null);let te=0,V=null;function Me(r){const a=U.value;if(a){te=r.getBoundingClientRect().height;const o=`${te}px`,f=()=>{a.style.height=o,a.style.maxHeight=o};V?(f(),V(),V=null):V=f}}function Ve(r){const a=U.value;if(a){const o=r.getBoundingClientRect().height,f=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(te,o)}px`};V?(V(),V=null,f()):V=f}}function Ie(){const r=U.value;if(r){r.style.maxHeight="",r.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")r.style.cssText=a;else if(a){const{maxHeight:o,height:f}=a;o!==void 0&&(r.style.maxHeight=o),f!==void 0&&(r.style.height=f)}}}const me={value:[]},xe=A("next");function He(r){const a=W.value;let o="next";for(const f of me.value){if(f===a)break;if(f===r){o="prev";break}}xe.value=o,De(r)}function De(r){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":f}=e;a&&Q(a,r),o&&Q(o,r),f&&Q(f,r),I.value=r}function Ge(r){const{onClose:a}=e;a&&Q(a,r)}function ye(){const{value:r}=C;if(!r)return;const a="transition-disabled";r.classList.add(a),X(),r.classList.remove(a)}const D=A(null);function ae({transitionDisabled:r}){const a=m.value;if(!a)return;r&&a.classList.add("transition-disabled");const o=B();o&&D.value&&(D.value.style.width=`${o.offsetWidth}px`,D.value.style.height=`${o.offsetHeight}px`,D.value.style.transform=`translateX(${o.offsetLeft-a.offsetLeft-Gt(getComputedStyle(a).paddingLeft)}px)`,r&&D.value.offsetWidth),r&&a.classList.remove("transition-disabled")}ie([W],()=>{e.type==="segment"&&oe(()=>{ae({transitionDisabled:!1})})}),It(()=>{e.type==="segment"&&ae({transitionDisabled:!0})});let Ce=0;function Fe(r){var a;if(r.contentRect.width===0&&r.contentRect.height===0||Ce===r.contentRect.width)return;Ce=r.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&ye(),o!=="segment"){const{placement:f}=e;re((f==="top"||f==="bottom"?(a=h.value)===null||a===void 0?void 0:a.$el:n.value)||null)}}const Ne=de(Fe,64);ie([()=>e.justifyContent,()=>e.size],()=>{oe(()=>{const{type:r}=e;(r==="line"||r==="bar")&&ye()})});const K=A(!1);function Xe(r){var a;const{target:o,contentRect:{width:f}}=r,P=o.parentElement.offsetWidth;if(!K.value)P<f&&(K.value=!0);else{const{value:M}=L;if(!M)return;P-f>M.$el.offsetWidth&&(K.value=!1)}re(((a=h.value)===null||a===void 0?void 0:a.$el)||null)}const Ue=de(Xe,64);function Ke(){const{onAdd:r}=e;r&&r(),oe(()=>{const a=B(),{value:o}=h;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function re(r){if(!r)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:f,offsetWidth:P}=r;u.value=o<=0,R.value=o+P>=f}else{const{scrollTop:o,scrollHeight:f,offsetHeight:P}=r;u.value=o<=0,R.value=o+P>=f}}const Ye=de(r=>{re(r.target)},64);je(ve,{triggerRef:k(e,"trigger"),tabStyleRef:k(e,"tabStyle"),tabClassRef:k(e,"tabClass"),addTabStyleRef:k(e,"addTabStyle"),addTabClassRef:k(e,"addTabClass"),paneClassRef:k(e,"paneClass"),paneStyleRef:k(e,"paneStyle"),mergedClsPrefixRef:g,typeRef:k(e,"type"),closableRef:k(e,"closable"),valueRef:W,tabChangeIdRef:x,onBeforeLeaveRef:k(e,"onBeforeLeave"),activateTab:He,handleClose:Ge,handleAdd:Ke}),Ht(()=>{X(),he()}),fe(()=>{const{value:r}=$;if(!r)return;const{value:a}=g,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,f=`${a}-tabs-nav-scroll-wrapper--shadow-end`;u.value?r.classList.remove(o):r.classList.add(o),R.value?r.classList.remove(f):r.classList.add(f)});const Je={syncBarPosition:()=>{X()}},qe=()=>{ae({transitionDisabled:!0})},Se=_(()=>{const{value:r}=T,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],f=`${r}${o}`,{self:{barColor:P,closeIconColor:M,closeIconColorHover:j,closeIconColorPressed:Y,tabColor:Qe,tabBorderColor:Ze,paneTextColor:et,tabFontWeight:tt,tabBorderRadius:at,tabFontWeightActive:rt,colorSegment:nt,fontWeightStrong:it,tabColorSegment:ot,closeSize:lt,closeIconSize:st,closeColorHover:dt,closeColorPressed:ct,closeBorderRadius:bt,[E("panePadding",r)]:J,[E("tabPadding",f)]:ft,[E("tabPaddingVertical",f)]:ut,[E("tabGap",f)]:pt,[E("tabGap",`${f}Vertical`)]:vt,[E("tabTextColor",a)]:gt,[E("tabTextColorActive",a)]:ht,[E("tabTextColorHover",a)]:mt,[E("tabTextColorDisabled",a)]:xt,[E("tabFontSize",r)]:yt},common:{cubicBezierEaseInOut:Ct}}=y.value;return{"--n-bezier":Ct,"--n-color-segment":nt,"--n-bar-color":P,"--n-tab-font-size":yt,"--n-tab-text-color":gt,"--n-tab-text-color-active":ht,"--n-tab-text-color-disabled":xt,"--n-tab-text-color-hover":mt,"--n-pane-text-color":et,"--n-tab-border-color":Ze,"--n-tab-border-radius":at,"--n-close-size":lt,"--n-close-icon-size":st,"--n-close-color-hover":dt,"--n-close-color-pressed":ct,"--n-close-border-radius":bt,"--n-close-icon-color":M,"--n-close-icon-color-hover":j,"--n-close-icon-color-pressed":Y,"--n-tab-color":Qe,"--n-tab-font-weight":tt,"--n-tab-font-weight-active":rt,"--n-tab-padding":ft,"--n-tab-padding-vertical":ut,"--n-tab-gap":pt,"--n-tab-gap-vertical":vt,"--n-pane-padding-left":q(J,"left"),"--n-pane-padding-right":q(J,"right"),"--n-pane-padding-top":q(J,"top"),"--n-pane-padding-bottom":q(J,"bottom"),"--n-font-weight-strong":it,"--n-tab-color-segment":ot}}),G=v?Dt("tabs",_(()=>`${T.value[0]}${e.type[0]}`),Se,e):void 0;return Object.assign({mergedClsPrefix:g,mergedValue:W,renderedNames:new Set,segmentCapsuleElRef:D,tabsPaneWrapperRef:U,tabsElRef:m,barElRef:C,addTabInstRef:L,xScrollInstRef:h,scrollWrapperElRef:$,addTabFixed:K,tabWrapperStyle:p,handleNavResize:Ne,mergedSize:T,handleScroll:Ye,handleTabsResize:Ue,cssVars:v?void 0:Se,themeClass:G==null?void 0:G.themeClass,animationDirection:xe,renderNameListRef:me,yScrollElRef:n,handleSegmentResize:qe,onAnimationBeforeLeave:Me,onAnimationEnter:Ve,onAnimationAfterEnter:Ie,onRender:G==null?void 0:G.onRender},Je)},render(){const{mergedClsPrefix:e,type:t,placement:l,addTabFixed:c,addable:s,mergedSize:S,renderNameListRef:g,onRender:v,paneWrapperClass:y,paneWrapperStyle:m,$slots:{default:C,prefix:$,suffix:L}}=this;v==null||v();const h=C?ne(C()).filter(x=>x.type.__TAB_PANE__===!0):[],n=C?ne(C()).filter(x=>x.type.__TAB__===!0):[],u=!n.length,R=t==="card",T=t==="segment",w=!R&&!T&&this.justifyContent;g.value=[];const I=()=>{const x=b("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},w?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),u?h.map((p,B)=>(g.value.push(p.props.name),ce(b(ue,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:B!==0&&(!w||w==="center"||w==="start"||w==="end")}),p.children?{default:p.children.tab}:void 0)))):n.map((p,B)=>(g.value.push(p.props.name),ce(B!==0&&!w?Oe(p):p))),!c&&s&&R?Ae(s,(u?h.length:n.length)!==0):null,w?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},R&&s?b(le,{onResize:this.handleTabsResize},{default:()=>x}):x,R?b("div",{class:`${e}-tabs-pad`}):null,R?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},W=T?"top":l;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${S}-size`,w&&`${e}-tabs--flex`,`${e}-tabs--${W}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${W}`,`${e}-tabs-nav`]},$e($,x=>x&&b("div",{class:`${e}-tabs-nav__prefix`},x)),T?b(le,{onResize:this.handleSegmentResize},{default:()=>b("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},b("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},b("div",{class:`${e}-tabs-wrapper`},b("div",{class:`${e}-tabs-tab`}))),u?h.map((x,p)=>(g.value.push(x.props.name),b(ue,Object.assign({},x.props,{internalCreatedByPane:!0,internalLeftPadded:p!==0}),x.children?{default:x.children.tab}:void 0))):n.map((x,p)=>(g.value.push(x.props.name),p===0?x:Oe(x))))}):b(le,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(W)?b(Yt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:I}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},I()))}),c&&s&&R?Ae(s,!0):null,$e(L,x=>x&&b("div",{class:`${e}-tabs-nav__suffix`},x))),u&&(this.animated&&(W==="top"||W==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,y]},We(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):We(h,this.mergedValue,this.renderedNames)))}});function We(e,t,l,c,s,S,g){const v=[];return e.forEach(y=>{const{name:m,displayDirective:C,"display-directive":$}=y.props,L=n=>C===n||$===n,h=t===m;if(y.key!==void 0&&(y.key=m),h||L("show")||L("show:lazy")&&l.has(m)){l.has(m)||l.add(m);const n=!L("if");v.push(n?Ft(y,[[Nt,h]]):y)}}),g?b(Xt,{name:`${g}-transition`,onBeforeLeave:c,onEnter:s,onAfterEnter:S},{default:()=>v}):v}function Ae(e,t){return b(ue,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Oe(e){const t=Ut(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ce(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ya as _,Ca as a,xa as b,ue as c};
