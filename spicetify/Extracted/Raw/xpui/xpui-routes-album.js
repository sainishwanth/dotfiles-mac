"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2342],{89507:(e,i,n)=>{n.d(i,{E:()=>d});var a=n(74599),t=n(49966),l=n(23401),s=n(4637);const d=({album:e,index:i,artistURI:n})=>(0,s.jsx)(a.ZP,{value:"card",index:i,children:(0,s.jsx)(l.i,{index:i,latest:!1,showType:!0,...(0,t.B$)(e,n,e.name)})})},96725:(e,i,n)=>{n.d(i,{R:()=>m});var a=n(14950),t=n(74599),l=n(29819),s=n(49966),d=n(89507),r=n(3831),o=n(4637);const m=({albums:e,artistName:i,artistId:n,artistUri:m,className:c})=>e?(0,o.jsx)(t.ZP,{value:"shelf/albums",children:(0,o.jsx)(r.P,{total:e.totalCount,title:a.ag.get("rich-page.popular-albums-by-artist",{artist:i}),seeAllUri:`${(0,s.GJ)(n)}:discography:${l.VZ.Album.toLowerCase()}`,seeAllLabel:a.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:c,children:(0,s.Hr)(e.items).map(((e,i)=>(0,o.jsx)(d.E,{album:e,index:i,artistURI:m},e.uri)))})}):null},69265:(e,i,n)=>{n.d(i,{V:()=>o});var a=n(14950),t=n(74599),l=n(49966),s=n(7812),d=n(3831),r=n(4637);const o=({artistId:e,className:i,fansAlsoLike:n,title:o})=>(0,r.jsx)(t.ZP,{value:"shelf/fans-also-like",children:(0,r.jsx)(d.P,{total:n.length,title:o??a.ag.get("rich-page.fans-also-like"),seeAllUri:`${(0,l.GJ)(e)}:related`,className:i,children:n.map(((e,i)=>(0,r.jsx)(t.ZP,{value:"card",index:i,children:(0,r.jsx)(s.I,{index:i,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources||[]})},e.uri)))})})},10059:(e,i,n)=>{n.d(i,{j:()=>o});var a=n(59496),t=n(46810),l=n(14950),s=n(35387),d=n(2008),r=n(4637);const o=({artistName:e,artistUri:i,headerClassName:n,rowClassName:o,topTracks:m,topTracksTransformer:c,uri:u})=>{const k=(0,a.useMemo)((()=>m?.items.map((e=>c(e,u)))),[m?.items,c,u]),{usePlayContextItem:v}=(0,s.n)({uri:i},{featureIdentifier:"artist"});return k&&k.length>0?(0,r.jsxs)("div",{className:o,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(t.D,{variant:"mesto",children:l.ag.get("rich-page.popular-tracks")}),(0,r.jsx)(t.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:n,children:e})]}),(0,r.jsx)(d.k,{nrTracks:k.length,initialTracks:k,usePlayContextItem:v})]}):null}},36899:(e,i,n)=>{n.d(i,{y:()=>m});var a=n(14950),t=n(74599),l=n(29819),s=n(49966),d=n(89507),r=n(3831),o=n(4637);const m=({artistId:e,artistName:i,artistUri:n,className:m,singles:c})=>c?(0,o.jsx)(t.ZP,{value:"shelf/singles-and-eps",children:(0,o.jsx)(r.P,{total:c.totalCount,title:a.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:i}),seeAllUri:`${(0,s.GJ)(e)}:discography:${l.VZ.Single.toLowerCase()}`,seeAllLabel:a.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:m,children:(0,s.Hr)(c.items).map(((e,i)=>(0,o.jsx)(d.E,{album:e,index:i,artistURI:n},e.uri)))})}):null},80652:(e,i,n)=>{n.r(i),n.d(i,{default:()=>Je});var a=n(59496),t=n(61740),l=n(92053),s=n(46810),d=n(37249),r=n(92334),o=n(6948),m=n(44494),c=n(14950),u=n(47970),k=n(92295),v=n(1893),g=n(75667),S=n(23401),p=n(98816),N=n(54353),h=n(81555),y=n(80206),x=n(30283),F=n(58309),b=n(48021),j=n(92307),f=n(45447),A=n(63379),I=n(26929),C=n(4637);const T=({children:e,content:i,onIntercept:n=(()=>{})})=>{const t=(0,I.g)();let l;try{l=a.Children.only(e)}catch(i){return(0,C.jsx)(C.Fragment,{children:e})}return t?(0,C.jsx)(A.Nt,{trigger:"click",action:"open",placement:"bottom",offset:[0,20],content:i,children:a.cloneElement(l,{onClick:n})}):(0,C.jsx)(C.Fragment,{children:e})};var U=n(58866),D=n(48445),P=n(65718),w=n(74599),R=n(78706),V=n(49340);const L="WHINADihyTCx2VFxwY8X",E=({title:e,description:i})=>{const n=(0,t.I0)(),l=(0,P.qT)(),d=(0,V.o)();return(0,a.useEffect)((()=>{d({intent:"open-upsell",type:"view"})}),[d]),(0,C.jsx)(A.yv,{children:(0,C.jsxs)("div",{className:L,children:[(0,C.jsx)(s.D,{as:"p",variant:"cello",children:e}),(0,C.jsx)(s.D,{as:"p",variant:"mesto",children:i}),(0,C.jsxs)("div",{children:[(0,C.jsx)(U.o,{onClick:()=>{d({intent:"close-upsell",type:"click"}),l({type:"close"})},children:c.ag.get("action-trigger.button.not-now")}),(0,C.jsx)(D.D,{onClick:()=>{d({intent:"login",type:"click"}),n((0,R.sX)())},children:c.ag.get("login")})]})]})})},M=e=>(0,C.jsx)(w.ZP,{value:"tooltip-with-cta",children:(0,C.jsx)(E,{...e})}),_=({uri:e,...i})=>{const n=(0,j.j5)();return(0,C.jsx)(T,{content:(0,C.jsx)(M,{title:c.ag.get("action-trigger.save-library"),description:c.ag.get("action-trigger.save-album")}),onIntercept:()=>n.storeAction(b.wH,{operation:f.pT.ADD,uris:[e]}),children:(0,C.jsx)(k.H,{...i})})};var O=n(65403),B=n(88397);const Z={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumMerch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"merch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumMerchItem"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumMerchItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Merch"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"price"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]};var $=n(58743);const z="iEG0moJ3mt1_j9Lho7MA",q=({albumName:e,albumURI:i})=>{const{data:n}=(a={uri:i},t={cacheTime:5*B.y},(0,B.a)(Z,a,t));var a,t;const l=n?.albumUnion&&"merch"in n.albumUnion?n?.albumUnion?.merch?.items:[];return l&&l?.length>0?(0,C.jsx)("div",{className:"contentSpacing",children:(0,C.jsx)("div",{className:z,children:(0,C.jsx)($.s,{id:e,uri:i,merchItems:l,merchVariant:"Album page merch items"})})}):null};var H=n(27964),Q=n(22646),G=n(16905),J=n(71914),W=n(91829),X=n(92418),Y=n(97360),K=n(63821),ee=n(69539),ie=n(35387),ne=n(5221),ae=n(882),te=n(69544),le=n(81091),se=n(5666),de=n(94386),re=n(20251);var oe=n(87960);const me=864e5,ce=365.25*me,ue=3.5;var ke=n(95495),ve=n(75390),ge=n(75193),Se=n(77803),pe=n(95804),Ne=n(470),he=n(63459),ye=n(89846),xe=n(49917);const Fe=({releases:e})=>(0,C.jsx)(ye.v,{children:e.map((e=>(0,C.jsx)(xe.s,{role:"menuitem",to:(0,he.EC)(e.uri).toURLPath(!0),children:e.name},e.uri)))});var be=n(44886);const je={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRichAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTopTracks"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richPopularReleases"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richAlbums"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richSinglesAndEps"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"relatedContent"}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTopTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistDiscography"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"4"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}}]}}]}}]}}]}},...be.rD.definitions,...be.rA.definitions,{kind:"FragmentDefinition",name:{kind:"Name",value:"richPopularReleases"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistDiscography"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"popularReleasesAlbums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richAlbums"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistDiscography"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richSinglesAndEps"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistDiscography"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"singles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"relatedContent"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"relatedContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"relatedArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"discoveredOn"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"relatedArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RelatedContent"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"relatedArtists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"discoveredOn"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RelatedContent"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"discoveredOnV2"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Playlist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"images"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}}]}}]}}]}}]}}]}}]};var fe=n(96725),Ae=n(49966),Ie=n(25078),Ce=n(3831);const Te=({artistId:e,className:i,discoveredOn:n})=>{if(!n)return null;const a=n.filter((e=>(e=>"Playlist"===e?.__typename)(e.data))).map((e=>({...e.data})));return(0,C.jsx)(w.ZP,{value:"shelf/discovered-on",children:(0,C.jsx)(Ce.P,{title:c.ag.get("discovered_on"),total:n.length,seeAllUri:`${(0,Ae.GJ)(e)}:discovered-on`,className:i,children:a.map(((e,i)=>{const n=e;return(0,C.jsx)(Ie.Z,{index:i,uri:n.uri,name:n.name,authorName:n.name,description:n.description||"",images:n.images?.items?.[0]?.sources||[]},n.uri)}))})})};var Ue=n(69265);const De=({artistName:e,artistUri:i,className:n,popularReleases:a})=>(0,C.jsx)(w.ZP,{value:"shelf/popular-releases",children:(0,C.jsx)(Ce.P,{total:a.length,title:c.ag.get("rich-page.popular-releases-by-artist",{artist:e}),className:n,children:a.map(((n,a)=>(0,C.jsx)(w.ZP,{value:"card",index:a,children:(0,C.jsx)(S.i,{index:a,showType:!0,...(0,Ae.B$)(n,i,e)})},n.uri)))})});var Pe=n(10059),we=n(36899),Re=n(75673);const Ve="FKHM7enSR0Ny_2IocKZA",Le=(0,a.memo)((function(e){const{artistId:i,artistName:n,artistUri:a}=e,{albumId:t=""}=(0,l.UO)(),s=(0,he.jy)(t).toURI(),d=(r={uri:s},(0,B.a)(je,r,o));var r,o;if(d.loading||!d.data?.albumUnion)return(0,C.jsx)(F.h,{hasError:null!==d.error,errorMessage:c.ag.get("error.not_found.title.album")});const m=d.data.albumUnion.artists.items[0];if(!m)throw new Error("Missing artist in data.");const{discoveredOnV2:u,relatedArtists:k}=m.relatedContent,{topTracks:v,popularReleasesAlbums:g,albums:S,singles:p}=m.discography,N={artistId:i,artistName:n,artistUri:a};return(0,C.jsxs)("div",{className:"contentSpacing",children:[(0,C.jsx)(Pe.j,{rowClassName:Ve,artistUri:a,artistName:n,topTracks:v,topTracksTransformer:Re.X7,uri:s}),(0,C.jsx)(De,{className:Ve,artistUri:a,artistName:n,popularReleases:g.items}),(0,C.jsx)(fe.R,{albums:S,className:Ve,...N}),(0,C.jsx)(we.y,{singles:p,className:Ve,...N}),(0,C.jsx)(Ue.V,{artistId:i,className:Ve,fansAlsoLike:k.items}),(0,C.jsx)(Te,{className:Ve,discoveredOn:u.items,artistId:i})]})}));var Ee=n(70579),Me=n(97766);const _e="album-albumPage-sectionWrapper",Oe="zddjxV2lX9ukNM5QXloA",Be="lVqlPjQLuQhK2flsxB78",Ze="O_EguRjsZ4uI1hHamkOA",$e="jcaQQxoVnuuhtVwDJU1R",ze="x-album-releasesDropdown",qe="in4OjUTflcsoj9RUpf05",He=a.lazy((()=>n.e(2984).then(n.bind(n,2984))));function Qe(e){switch(e){case Me.V.Single:return c.ag.get("single");case Me.V.Ep:return c.ag.get("ep");case Me.V.Compilation:return c.ag.get("compilation");case Me.V.Album:default:return c.ag.get("album")}}const Ge=({uri:e,album:i})=>{const n=(0,l.TH)(),F=(0,V.o)(),b=(0,Q.k)(),j=(0,ee.y)(),{spec:f,logger:A,UBIFragment:I}=(0,te.fU)(m.createDesktopAlbumEventFactory,{data:{uri:e}}),T=(0,a.useMemo)((()=>f.trackListFactory()),[f]),U=(0,a.useMemo)((()=>f.moreByArtistShelfFactory()),[f]),D=a.useMemo((()=>f.actionBarFactory()),[f]),P=i.moreAlbumsByArtist,[w,R]=(0,ee.Z)(e),L=(0,ge.E)(),[E,M]=(0,ne.j)([se.k.RichAlbumPageUI,se.k.RichAlbumPageData],n),B=(0,o.W6)(le.F3),Z=B===le.Wp.VARIANT_UI||E;const $=(e=>e===le.Wp.VARIANT_DATA)(B)||M,z=parseInt(new URLSearchParams((0,l.TH)().search).get("index")||"0",10),K=(0,H.Y)(e),{usePlayContextItem:he,togglePlay:ye,isPlaying:xe,isActive:be}=(0,ie.n)({uri:K},{featureIdentifier:"album"}),je=(0,a.useCallback)((()=>{const i=(0,J.aK)({isPlaying:xe,isActive:be,spec:D.playButtonFactory(),logger:A,uri:e});ye({loggingParams:i})}),[xe,be,ye,D,A,e]),fe=(0,a.useCallback)((async()=>{let i;const n=D.saveButtonFactory();i=w?n.hitDislike({itemToBeDisliked:e}):n.hitLike({itemToBeLiked:e}),A.logInteraction(i),F({targetUri:e,intent:w?"unsave":"save",type:"click"});try{await R(!w)}catch{}}),[F,e,w,R,D,A]),Ae=(0,a.useCallback)(((e,i)=>{if(f){const e=f.headerFactory().artistNameFactory().hitUiNavigate({destination:i.creator.uri});A.logInteraction(e)}}),[A,f]),Ie=(0,a.useCallback)((()=>new URLSearchParams(n.search.slice(1)).get("highlight")||""),[n.search]),Ce=i.uri,Te=i.name,Ue=i.albumType,De=i.release?.date,Pe=i.nrTracks,we=i.images,Re=i.extractedColors?.colorRaw.hex,Ve=i.artists,Ee=Ve[0],Me=i.isPlayable,Ge=i.isCatalogueRestricted,Je=i.copyright.items,We=i.courtesyLine,Xe=i.duration.durationMs,Ye=i.duration.isEstimate,Ke=Ie(),ei=(0,t.v9)(Ne.Gg),ii=(0,t.v9)(pe.br),ni=(0,t.v9)(pe.yE),ai=ei.overrides?.locale??c.ag.getLocale(),ti=(0,re.S9)({localeFeatureFlag:ii,entityFeatureFlag:ni,locale:ai,type:"locale"});(0,G.Y5)(Re||null);const li=(0,a.useCallback)((()=>{const e=(0,ae.OT)({albumName:Te,albumType:Ue,albumArtists:Ve.map((e=>e.name)).join(c.ag.getSeparator()),shouldLocalize:ti,i18n:c.ag}),i=c.ag.get("album.page-title",Te);return Z?e:i}),[Te,Ue,Ve,ti,Z]),si=(0,t.v9)(Ne.n5),di=(0,t.v9)(Se.rZ),ri=ei.isAnonymous;(0,ve.M)({category:"ralph_cookie_test",action:"remote-config-response",remoteConfigProperty:le.F3,label:"dwp",context:e,country:si?di:"",spt:!0,isAnonymous:ri});const oi=function(e){return(0,a.useMemo)((()=>{if(!e?.date)return null;if("day"===e.precision){const i=new Date(e.date),n=(new Date).getTime()-i.getTime(),a=n%ce;return a<me*ue||a>ce-me*ue?Math.round(n/ce):null}return null}),[e])}(i.release);return(0,C.jsxs)("section",{className:_e,"data-testid":"album-page",children:[(0,C.jsx)(N.$,{children:li()}),null!==oi?(0,C.jsx)(a.Suspense,{fallback:null,children:(0,C.jsx)(He,{colorLight:i?.extractedColors?.colorLight.hex,colorDark:i?.extractedColors?.colorDark.hex,name:Te,years:oi})}):null,(0,C.jsxs)(h.gF,{backgroundColor:Re,children:[(0,C.jsxs)(y.W,{children:[(0,C.jsx)(O.$,{size:"md",onClick:()=>ye(),disabled:!Me,isPlaying:xe,uri:e}),(0,C.jsx)(x.i,{text:Te,dragUri:e,dragLabel:Te})]}),(0,C.jsx)(W._P,{menu:(0,C.jsx)(p.Y,{uri:i.uri,artistUri:Ve?.[0]?.uri,sharingInfo:i.sharingInfo}),children:(0,C.jsx)(h.Oz,{dragUri:Ce,images:we,name:Te,placeholderType:"album"})}),(0,C.jsxs)(h.sP,{children:[(0,C.jsx)(s.D,{variant:"mestoBold",children:Qe(Ue)}),(0,C.jsx)(W._P,{menu:(0,C.jsx)(p.Y,{uri:i.uri,artistUri:Ve?.[0]?.uri,sharingInfo:i.sharingInfo}),children:(0,C.jsx)(h.xd,{dragUri:i.uri,dragLabel:i.name,children:Te})}),(0,C.jsx)(h.QS,{creators:Ve,onCreatorClick:Ae,releaseDate:De,totalTracks:Pe,durationMilliseconds:Xe,isEstimatedDuration:Ye})]})]}),(0,C.jsx)(u.o,{backgroundColor:Re,children:(0,C.jsxs)(u.F,{children:[(0,C.jsx)(O.$,{onClick:je,disabled:!Me,isPlaying:xe,size:"lg",uri:e}),(0,C.jsx)(_,{isAdded:!!w,onClick:fe,disabled:!b&&!j?.getCapabilities().canModifyOffline,size:k.q.md,uri:e}),(0,C.jsx)(v.o,{uri:e,isFollowing:!!w,onClick:(i,n)=>(0,J.l7)(n,D.downloadButtonFactory(),A,e),onFollow:fe,size:v.q.md}),(0,C.jsx)(X.y,{onShow:()=>(0,J.qq)(D,A),menu:(0,C.jsx)(p.Y,{uri:i.uri,artistUri:Ve?.[0]?.uri,sharingInfo:i.sharingInfo}),children:(0,C.jsx)(g.z,{label:c.ag.get("more.label.context",Te)})})]})}),Ge?(0,C.jsxs)("div",{className:Oe,children:[(0,C.jsx)(s.D,{as:"h2",variant:"cello",className:Be,children:c.ag.get("windowed.product-album-header")}),(0,C.jsx)("div",{className:Ze,children:c.ag.get("windowed.product-album-description")})]}):null,(0,C.jsxs)("div",{className:"contentSpacing",children:[(0,C.jsx)(I,{spec:T,children:(0,C.jsx)(oe.L,{ariaLabel:Te,nrTracks:Pe,discs:i.discs,albumUri:Ce,highlightUri:Ke,scrollToIndex:z,usePlayContextItem:he,initalTracks:i.items})}),(0,C.jsxs)("div",{className:qe,children:[(0,C.jsxs)("div",{children:[De&&(0,C.jsx)(s.D,{as:"p",variant:"mesto",children:(0,de.BI)((0,de.RX)(De),ai,{year:"numeric",month:"long",day:"numeric"})}),(0,C.jsx)(Y.k,{copyrights:Je,courtesyLine:We})]}),i.releases.items.length>0&&(0,C.jsx)(W.xV,{menu:(0,C.jsx)(Fe,{releases:i.releases.items}),children:(e,n,a)=>(0,C.jsxs)("button",{ref:a,className:ze,type:"button",onClick:n,children:[(0,C.jsx)(s.D,{variant:"mesto",children:c.ag.get("album-page.more-releases",i.releases.items.length)}),e?(0,C.jsx)(d.U,{iconSize:16}):(0,C.jsx)(r.i,{iconSize:16})]})})]})]}),(0,C.jsx)(q,{albumName:Te,albumURI:Ce}),L&&(Z||$)?(0,C.jsx)("div",{"data-testid":"rich-album",hidden:$,children:(0,C.jsx)(Le,{artistId:Ee?.id,artistName:Ee?.name,artistUri:Ee?.uri})}):(0,C.jsx)(C.Fragment,{children:P?.length>0&&(0,C.jsx)("div",{className:"contentSpacing",children:(0,C.jsx)(I,{spec:U,children:(0,C.jsx)(ke.q,{index:0,id:"more-albums",className:$e,title:c.ag.get("album-page.more-by-artist",Ve?.[0]?.name),total:P.length,seeAllUri:`${Ve?.[0]?.uri.replace("artist","app:artist")}:discography`,seeAllLabel:c.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,children:P.map(((e,i)=>(0,C.jsx)(S.i,{index:i,artists:Ve,images:e.images||[],name:e.name,uri:e.uri,year:e.year,type:e.albumType,sharingInfo:e.sharingInfo},e.uri)))})})})})]})},Je=a.memo((function(){const{albumId:e}=(0,l.UO)(),i=`spotify:album:${e}`,{loading:n,error:a,data:t,canLoadOffline:s}=(0,Ee.j)(i);return n||!t?(0,C.jsx)(F.h,{hasError:null!==a,loadOffline:s,errorMessage:c.ag.get("error.not_found.title.album")}):(0,C.jsx)(K.fd,{surface:K.Tg.ALBUM,uris:[i],children:(0,C.jsx)(Ge,{uri:i,album:t})})}))},75390:(e,i,n)=>{n.d(i,{M:()=>m});var a=n(59496),t=n(67052),l=n(67242),s=n(6948),d=n(50821),r=n(19666),o=n(16232);const m=({category:e,action:i,remoteConfigProperty:n,defaultVariant:m,label:c,context:u,country:k,spt:v=!1,isAnonymous:g=!1})=>{const S=(0,s.W6)(n),p=(0,o.s4)();(0,a.useEffect)((()=>{if(!S||!c)return;const n={category:e,action:i,variant:m??S,label:c,os:(0,d.y)(),...u&&{context:u},...k&&{country:k},...v&&{sp_t:(0,r.vQ)("sp_t")}};g?p.send((0,l.k)(n)):p.send((0,t.x)(n))}),[S,c,e,i,u,k,v,g,p,m])}},97360:(e,i,n)=>{n.d(i,{k:()=>s});var a=n(46810);const t="rTMkDBDp47Eo12ZEQv4U";var l=n(4637);const s=({copyrights:e,courtesyLine:i})=>{const n=(e||[]).map(((e,i)=>{const n=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let t;return t="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,l.jsx)(a.D,{as:"p",variant:"finale",dir:"auto",children:`${t} ${n}`},i)}));return i&&n.unshift((0,l.jsx)(a.D,{as:"p",variant:"finale",dir:"auto",children:i},n.length)),(0,l.jsx)("div",{className:t,children:n})}},5221:(e,i,n)=>{n.d(i,{j:()=>t,vI:()=>a});const a=(e,i)=>{const n=i?new URLSearchParams(i.search):void 0;return"1"===n?.get(e)},t=(e,i)=>e.map((e=>a(e,i)))},5666:(e,i,n)=>{n.d(i,{k:()=>a});let a=function(e){return e.UnauthLyrics="ulotw",e.InternalTrackLinks="itl",e.RichAlbumPageUI="ralphui",e.RichAlbumPageData="ralphdata",e.PathfinderAlbumPage="pfap",e.I18nSEO="i18nSEO",e.RTPFeaturedArtists="rtpv2p1",e.RTPTrackCredits="rtpv2p2",e.Canonicals="atc",e.BlendParty="bp",e.BlendPartyV2="bpv2",e.VideoPodcastShowTitleTag="vidpodshow",e.I18nAdditionalPages="i18nap",e}({})}}]);
//# sourceMappingURL=xpui-routes-album.js.map