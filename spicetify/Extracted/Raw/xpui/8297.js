"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8297],{58243:(e,t,n)=>{n.d(t,{n:()=>Ce});var a=n(67294),r=n(50114),c=n(17213),o=n(69559),l=n(4236),i=n(13218),s=n(70296),u=n(67154),m=n.n(u),f=n(69518),h=n.n(f),d=n(62031),E=n(49058),g=n(5843),p=n(97605),y=n(20657),C=n(18261),v=n(4232),k=n(80507),T=n(25988),S=n(35410),b=n(86514),I=n(59823),_=n(20006),N=n(26010),B=n(69010),P=n(52759),w=n(69691);const x="rPV8BmHZXaGIGT2HwvBB",M="nlOU1unbFAd7ZHyeSMTH",H="jb9xD5ECTqKFK02qe3HZ",R="Z35BWOA10YGn5uc9YgAp",U="g3f_cI5usQX7ZOQyDtA9",L="jvWzgRWM_y_9FFTYRCcB",W="zXwER4Lsqq_e7fVVaPkZ",A="WWDxafTPs4AgThdcX5jN",D="CKxS_0I5yf3i15WAjzvE",O="Tzzq1pG_inwo_oSOdyjb",q="TbrIq3NG2VYFoAUMSmp9",z="JFDEiqT_8B5zeG_CDSdK",F="EzRmGRncgnv1zFgF4dqE",X="bPmmKmSPLKMhtJSaUJRX",G="vpQWUBWS_lXRLZMRJT7w",J="GSv7K805J9Jw7LB9tn2A",Y="Kcb74zm1aMqGfPxTwO5s",j="s9c9x_mJq197U2hBzGtV",K=a.memo((function({item:e}){const{useDownloading:t}=(0,a.useContext)(N.I),{currentAvailability:n}=t(e.uri),r=e.duration_ms??0,{isPlaying:c,isActive:o}=(0,w.$o)(e.uri),[l]=(0,P.z)(1e4,(t=>t.item?.uri===e.uri)),i=e.resume_point?.resume_position_ms??0,s=c||o?l:i,u=Math.round(100/(r/s)),m=n===B.V8.YES,f=r&&s>0;return m||f?a.createElement("div",{className:G},m?a.createElement(I.E,{iconSize:16,semanticColor:"textSubdued"}):null,f?a.createElement(_.k,{className:J,value:u,semanticColor:"essentialBase"}):null):null}));var V=n(94184),$=n.n(V),Q=n(52883),Z=n(28760),ee=n(43864),te=n(85592),ne=n(34325),ae=n(84242),re=n(54444),ce=n(99191),oe=n(56802),le=n(67892),ie=n(80418),se=n(49961);const ue=a.memo((function({images:e=[],fallbackIcon:t=d.U}){const n=(0,se.X)(e),r=n?.url?W:D;return a.createElement("div",{className:L},a.createElement("div",{className:r},a.createElement(ie.E,{className:A,src:n?.url,loading:"lazy",testid:"shortcut-image"},a.createElement(t,{"aria-hidden":!0}))))})),me=a.memo((function({index:e,item:t,fallbackIcon:n,showPlayButton:r,extraContent:c,onContextMenu:o=(()=>{}),onTouchStart:l=(()=>{}),onTouchEnd:i=(()=>{})}){const u=(0,Q.k6)(),m=(0,oe.o)(),{setColorFromUri:f,resetColor:d,clearColor:E}=(0,s.WQ)(),g=(0,ne.G3)(t.uri,t.release_date,t.resume_point?.resume_position_ms,t.resume_point?.fully_played),{spec:p,logger:y}=(0,re.fU)(ee.createDesktopShortcutsPlayNavCardEventFactory,{data:{position:e,uri:t.uri}}),{isPlaying:C,isActive:v,togglePlay:k}=(0,ae.n)({uri:t.uri},{featureIdentifier:"home",referrerIdentifier:"home"});const T=(0,a.useCallback)((()=>{m({targetUri:t.uri,intent:"navigate",type:"click"});const e=p.hitUiNavigate({destination:t.uri});y.logInteraction(e),u.push(h().from(t.uri).toURLPath(!0))}),[u,t.uri,y,m,p]),S=(0,a.useCallback)((()=>{f(t.uri)}),[t.uri,f]);(0,a.useEffect)((()=>()=>{E()}),[E]);const b=(0,re.Wi)(p),I=(0,ce.O1)([t.uri],t.name);return a.createElement("div",{ref:b,className:R,onContextMenu:o,onTouchStart:l,onTouchEnd:i,onMouseEnter:S,onMouseLeave:d},a.createElement("div",{className:U,onDragStart:I},a.createElement(ue,{images:t.images,fallbackIcon:n}),a.createElement("div",{className:O},a.createElement("div",{className:q},a.createElement("div",{className:z},g&&a.createElement(ne.Rd,{className:X}),a.createElement(le.r,{to:t.uri,onClick:T,title:t.name},a.createElement(Z.Dy,{as:"p",variant:"balladBold",className:F},t.name))),c||null),r&&a.createElement("div",{className:$()(Y,{[j]:C})},a.createElement(te.fh,{isPlaying:C,onClick:function(){m({targetUri:t.uri,intent:C?"pause":"play",type:"click"});const e=p.playButtonFactory();let n;n=C?e.hitPause({itemToBePaused:t.uri}):v?e.hitResume({itemToBeResumed:t.uri}):e.hitPlay({itemToBePlayed:t.uri});const a=y.logInteraction(n);k({loggingParams:a})}}))),a.createElement("div",{onClick:T,className:H})))})),fe=a.memo((function(e){return h().isCollection(e.item.uri)?a.createElement(me,m()({},e,{fallbackIcon:d.U})):a.createElement(C._,{menu:a.createElement(S.X,{uri:e.item.uri})},a.createElement(me,m()({},e,{fallbackIcon:d.U})))})),he=a.memo((function(e){return a.createElement(C._,{menu:a.createElement(v.Y,{uri:e.item.uri})},a.createElement(me,m()({},e,{fallbackIcon:E.c})))})),de=a.memo((function(e){return a.createElement(C._,{menu:a.createElement(k.m,{uri:e.item.uri})},a.createElement(me,m()({},e,{fallbackIcon:g.a})))})),Ee=a.memo((function(e){return a.createElement(C._,{menu:a.createElement(b.M,{uri:e.item.uri})},a.createElement(me,m()({},e,{fallbackIcon:p.J,showPlayButton:!1})))})),ge=a.memo((function(e){return a.createElement(C._,{menu:a.createElement(T.k,{uri:e.item.uri})},a.createElement(me,m()({},e,{fallbackIcon:p.J,extraContent:a.createElement(K,e)})))}));const pe=270,ye=a.memo((function({title:e,tagline:t,items:n}){const{fetchMultipleColors:r}=(0,s.WQ)(),[c,u]=(0,a.useState)({minWidth:pe,itemHeight:80,showPlayButton:!0}),m=!(0,l.k)(),f=(0,a.useRef)(null),d=e??(()=>{const e=(new Date).getHours();let t=y.ag.get("home.evening");return e>=5&&e<12?t=y.ag.get("home.morning"):e>=12&&e<18&&(t=y.ag.get("home.afternoon")),t})(),E=(0,a.useCallback)((()=>{if(!f.current)return;const e=f.current.offsetWidth,t=e<600?200:pe;const n=Math.min(Math.floor((e+24)/(t+24)),3);u({minWidth:t,showPlayButton:(e-24*(n-1))/n>=pe,itemHeight:e>=858?80:64})}),[]);if((0,o.a)((()=>{E()})),(0,a.useEffect)((()=>{E()}),[E]),(0,a.useEffect)((()=>{const e=n?.map(s.lh)||[];r(e)}),[n,r]),m||!n?.length)return null;const g=64===c.itemHeight?12:16;return a.createElement("section",{className:x,"aria-label":d,ref:f},a.createElement(i.r,{title:d,titleVariant:"alto",tagline:t}),a.createElement("div",{className:M,style:{"--min-column-width":`${c.minWidth}px`,"--column-gap":"24px","--row-gap":`${g}px`,"--item-height":`${c.itemHeight}px`}},n.filter(((e,t)=>t<6)).map(((e,t)=>{const n=function(e){const t=(h().from(e)||{}).type;switch(t){case h().Type.ARTIST:return de;case h().Type.ALBUM:case h().Type.COLLECTION_ALBUM:return he;case h().Type.PLAYLIST:case h().Type.PLAYLIST_V2:return fe;case h().Type.SHOW:return Ee;case h().Type.EPISODE:return ge;case h().Type.COLLECTION:return fe;default:return console.warn(`Unable to resolve entity shortcut from ${e} of type "${t||"unknown"}"`),Ee}}(e.uri);return a.createElement(n,{index:t,key:`${t}-${e.uri}`,item:e,showPlayButton:c.showPlayButton,shouldSetBackgroundColor:0===t})}))))})),Ce=(0,r.P)(ye,(()=>null),(e=>(0,c.v)({from:"HomeShortcutsGrid",error:e})))},47402:(e,t,n)=>{n.d(t,{M:()=>P});var a=n(67294),r=n(94184),c=n.n(r),o=n(46458),l=n(52883),i=n(69518),s=n.n(i),u=n(73012),m=n(28760),f=n(7438),h=n(10149),d=n(90884),E=n(20657),g=n(32648),p=n(64005),y=n(49023),C=n(54444),v=n(1393),k=n(15416);const T="g3Xinb8x23n81ejvS9Uj",S="x-searchInput-searchInputInput",b="XD3TMuMHmKsfbqieC6q_",I="x-searchInput-searchInputSearchIcon",_="x-searchInput-searchInputClearButton",N="t2K4_iLmAyDtH7mcT5Wy",B="mOLTJ2mxkzHJj6Y9_na_",P=a.memo((function({isSearchChipsEnabled:e=!1,onSearch:t=!0}){const n=(0,l.TH)(),r=(0,a.useRef)(null),i=(0,a.useRef)(null),P=(0,l.k6)(),w=(0,o.I0)(),[{category:x,query:M},H]=(0,k.l)(),[R,U]=(0,a.useState)(M),L=!!x,{scrollNodeRef:W}=a.useContext(g.VX),A=n.pathname.startsWith("/recent-searches"),D=L||A,{spec:O,logger:q}=(0,C.fU)(d.createDesktopSearchInputEventFactory,{}),z=(0,p.y)(((t,n,a)=>{e?H(t,x,!1,a):H(t,null,n,a),W.current&&(W.current.scrollTop=0)}),200),F=(0,a.useCallback)(((e=!1)=>{r.current!==document.activeElement&&(i.current=document.activeElement,r.current&&r.current.focus()),e&&r.current?.select()}),[]);(0,y.eY)(y.O4.SHOW_SEARCH,(()=>F(!0))),(0,a.useEffect)((()=>{!D&&t&&(e&&M||F())}),[M,F,P.location.key,t,D,e]);return a.createElement("div",{className:c()(T,{[b]:!t})},a.createElement("form",{onSubmit:e=>{e.preventDefault(),R&&q.logInteraction(O.keyStrokeSearch());const t=s().from(R);if(t)if(t.type===s().Type.AD){const e=s().idToHex(t.getBase62Id());if(t.getBase62Id()===e)return;w((0,v.HI)(e))}else P.push(t.toURLPath(!0));else R&&W.current?.querySelector("h1, h2, h3, h4")?.focus()},role:"search"},a.createElement(m.Dy,{variant:"mesto",as:"input",style:{color:u.Snx},ref:r,className:c()(S),value:R,maxLength:800,autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,onChange:e=>{const t=e.currentTarget.value,{interactionId:n}=q.logInteraction(O.keyStrokeChangeSearchQuery({searchQueryString:t}));U(t),z(t,D,n)},onKeyDown:e=>{if("Escape"===e.key)if(R){const{interactionId:e}=q.logInteraction(O.hitTextClear());U(""),z("",D,e)}else r.current&&r.current.blur(),i.current instanceof HTMLElement&&i.current.focus()},placeholder:t?E.ag.get("search.search-for-label"):E.ag.get("navbar.search"),onFocus:()=>{e||!D&&t||z(R,D)},"data-testid":"search-input"})),a.createElement("div",{className:N},a.createElement("span",{className:I},a.createElement(f.j,{className:B,"aria-hidden":!0})),R&&a.createElement("button",{className:_,onClick:()=>{r.current&&r.current.focus();const{interactionId:e}=q.logInteraction(O.hitTextClear());U(""),z("",D,e)},"aria-label":E.ag.get("search.a11y.clear-input")},a.createElement(h.k,{className:B}))))}))},15416:(e,t,n)=>{n.d(t,{l:()=>c});var a=n(67294),r=n(52883);function c(){const e=(0,r.k6)(),t=(0,r.$B)("/search/:query?/:category?"),n=(0,a.useCallback)((function(t,n,a,r){const c=r?{interactionId:r}:void 0,o=["/search"];t&&(o.push(encodeURIComponent(t)),n&&o.push(n));const l=o.join("/");a?e.push(l,c):e.replace(l,c)}),[e]),c=function(e){try{return decodeURIComponent(e)}catch{return e}}(t?.params.query||""),o=t?.params.category;return[{query:c,category:o},n]}},23060:(e,t,n)=>{n.d(t,{S:()=>i});var a=n(67294),r=n(87577),c=n(49207),o=n(28638),l=n(47402);const i=()=>(0,r.W6)(c.Jw)===c.pF.ONHOME?a.createElement(o.w,null,a.createElement(l.M,{onSearch:!1})):null}}]);
//# sourceMappingURL=8297.js.map