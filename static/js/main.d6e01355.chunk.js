(this["webpackJsonphts-app-store"]=this["webpackJsonphts-app-store"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(16),r=a.n(i),o=(a(98),a(99),a(25)),s=a(9),d=a(134),l=a(5),j=a(136),b=a(137),u=a(138),m=a(139),x=a(140),O=a(151),h=a(152),p=a(141),g=a(53),f=a(51),v=a(72),y=a.n(v),T=a(142),k=a(22),N=a.n(k),I=a(31),C=a(18),S=a(2),A=Object(n.createContext)(),M=function(e){var t=e.reducer,a=e.initialstate,c=e.children;return Object(S.jsx)(A.Provider,{value:Object(n.useReducer)(t,a),children:c})},E=function(){return Object(n.useContext)(A)},w="ADD_TO_BASKET",D="REMOVE_ITEM",P="ADD_ITEM",R="LESS_ITEM",B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},L=function(e,t){switch(t.type){case"ADD_TO_BASKET":if(e.cantidadTotal>=0){for(var a in e.basket){if(e.basket[a].id===t.item.id)return console.log("repetido"),Object(C.a)(Object(C.a)({},e),{},{basket:Object(I.a)(e.basket)});console.log("Se agrega el producto de forma exitosa")}return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(I.a)(e.basket),[t.item]),cantidadTotal:e.cantidadTotal+1})}case"REMOVE_ITEM":var n=e.basket.findIndex((function(e){return e.id===t.id})),c=Object(I.a)(e.basket);return n>=0?c.splice(n,1):console.log("Can\xb4t remove product"),Object(C.a)(Object(C.a)({},e),{},{basket:c,cantidadTotal:e.cantidadTotal-1});case"ADD_ITEM":var i=e.basket.findIndex((function(e){return e.id===t.id})),r=Object(I.a)(e.basket);return i>=0&&(r[i].amountItem+=1,console.log(r[i].name),console.log(r[i].amountItem)),Object(C.a)(Object(C.a)({},e),{},{basket:r,arr:i,cantidadTotal:e.cantidadTotal+1});case"LESS_ITEM":var o=e.basket.findIndex((function(e){return e.id===t.id})),s=Object(I.a)(e.basket);return o>=0&&(s[o].amountItem-=1),Object(C.a)(Object(C.a)({},e),{},{basket:s,arr:o,cantidadTotal:e.cantidadTotal-1});default:return e}},F=Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:f.a[500]}}}));function G(e){var t=e.product,a=t.id,n=t.productType,i=t.name,r=t.title,d=t.description,f=t.image,v=t.price,k=t.rating,I=t.amountItem,C=F(),A=E(),M=Object(s.a)(A,2),D=(M[0].basket,M[1]),P=c.a.useState(!1),R=Object(s.a)(P,2),B=R[0],L=R[1];return Object(S.jsxs)(j.a,{className:C.root,children:[Object(S.jsx)(b.a,{avatar:Object(S.jsx)(h.a,{"aria-label":"recipe",className:C.avatar,children:Object(S.jsx)("h6",{children:"HT-s"})}),action:Object(S.jsx)(g.a,{className:C.action,variants:"h5",color:"textSecondary",children:N.a.formatMoney(v,"$")}),title:i,subheader:"in Stock"}),Object(S.jsx)(u.a,{className:C.media,image:f,title:"Producto - 1"}),Object(S.jsx)(m.a,{children:Object(S.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:r})}),Object(S.jsxs)(x.a,{disableSpacing:!0,children:[Object(S.jsx)(p.a,{"aria-label":"add to Cart",onClick:function(){D({type:w,item:{id:a,name:i,title:r,productType:n,image:f,price:v,rating:k,description:d,amountItem:I}})},children:Object(S.jsx)(T.a,{})}),Array(k).fill().map((function(e,t){return Object(S.jsx)("p",{children:" \u2606 "})})),Object(S.jsx)(p.a,{className:Object(l.a)(C.expand,Object(o.a)({},C.expandOpen,B)),onClick:function(){L(!B)},"aria-expanded":B,"aria-label":"show more",children:Object(S.jsx)(y.a,{})})]}),Object(S.jsx)(O.a,{in:B,timeout:"auto",unmountOnExit:!0,children:Object(S.jsx)(m.a,{children:Object(S.jsx)(g.a,{paragraph:!0,children:d})})})]})}var H=a(143),_=[{id:1,image:a.p+"static/media/ABLETON.9457a00c.png",name:"Percussive Afro House",title:"Percussive Afro House - Full Ableton Production Suite",description:"Fully Produced Tracks as Ableton Projects, 30 Ableton Instruments, sample pack of 150 one hits, 60+ MIDI files, and 140+ Loops + More!",price:12.99,rating:5,amountItem:1},{id:2,image:a.p+"static/media/DEEP.dc8fe59a.png",productType:"",name:"Arrangement Course",title:"Arrangement Course",description:"Practical lessons, tips, and tricks, to take your ideas from a loop to a fully produced song.",price:7.25,rating:4,amountItem:1},{id:3,image:a.p+"static/media/INTERSTELLAR.2704b740.png",productType:"",name:"Melodies",title:"How to Write Melodies",description:"Do you have problems writing catchy Melodies? Then this Step by Step guide is for you!",price:8.59,rating:5,amountItem:1},{id:4,image:a.p+"static/media/ORGANIC.5153a510.png",productType:"",name:"Organic House",title:"Woodlands - Organic House",description:"FStunning Organic Sounds About Woodlands Vol.1 // organic house Add some real organic crunch into your productions, full of life,...",price:2,rating:4,amountItem:1},{id:5,image:a.p+"static/media/MIXING.c3a4182e.png",productType:"",name:"Mixing",title:"A Course: Mixing A Track from Start To Finish",description:"Learn the Complete Mixing Process About this Course In this 5+ Hour Mixing Course we'll show you the complete mixing...",price:2.9,rating:5,amountItem:1},{id:6,image:a.p+"static/media/GROOVE.60bf1041.png",productType:"",name:"Groove",title:"Groove Course",description:"Make Your Drums Sound Professional About this Course This course is entirely dedicated to building professional sounding drum loops for...",price:2,rating:4,amountItem:1}],W=Object(d.a)((function(e){return{root:{flexGrow:1,margin:"50px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function V(){var e=W();return Object(S.jsx)("div",{className:e.root,children:Object(S.jsx)(H.a,{container:!0,spacing:3,children:_.map((function(e){return Object(S.jsx)(H.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(S.jsx)(G,{product:e},e.id)})}))})})}var J=a(77),$=a.n(J),z=a(76),K=a.n(z),Y=a(150),X=a(21),q=function(){var e=E(),t=Object(s.a)(e,2),a=t[0].basket,n=(t[1],E()),c=Object(s.a)(n,1)[0].cantidadTotal;return Object(S.jsx)("div",{className:"text-white d-flex mr-5 mt-1",size:"lg",children:Object(S.jsx)("div",{children:Object(S.jsx)(Y.a,{FiShoppingCart:!0,id:"collasible-ReactBootStrap.Nav-dropdown",children:Object(S.jsx)("div",{class:"container",style:{width:"100%",background:"#83c5be"},children:Object(S.jsxs)("div",{className:"sm-12 p-3",children:[Object(S.jsxs)("table",{className:"table md-12",children:[Object(S.jsx)("thead",{children:Object(S.jsx)("tr",{className:"col",children:Object(S.jsxs)("th",{children:[Object(S.jsx)("strong",{children:"CART LIST ITEMS"})," "]})})}),0==c?Object(S.jsx)("tfoot",{children:Object(S.jsx)("tr",{id:"footer",children:Object(S.jsx)("th",{scope:"row",colspan:"5",children:" No items yet!"})})}):null===a||void 0===a?void 0:a.map((function(e){return Object(S.jsxs)("div",{className:"d-flex m-2",children:[Object(S.jsx)("p",{className:"mr-3",children:e.name}),Object(S.jsx)("p",{className:"ml-auto",children:N.a.formatMoney(e.price)})]})}))]}),Object(S.jsx)(X.b,{to:"checkout-page",style:{textDecoration:"none"},children:Object(S.jsx)(p.a,{"aria-label":"show cart items",children:Object(S.jsx)("strong",{children:"go to CART"})})})]})})})})})},Q=function(e){var t=e.itemId,a=e.amountItem,c=Object(n.useState)([]),i=Object(s.a)(c,2),r=(i[0],i[1],Object(n.useState)(1)),o=Object(s.a)(r,2),d=o[0],l=(o[1],E()),j=Object(s.a)(l,2),b=(j[0].basket,j[1]),u=E();Object(s.a)(u,1)[0].arr;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"container d-flex justify-content-center ",children:[Object(S.jsx)("div",{className:"border",children:Object(S.jsx)("button",{className:"btn  btn-up btn-sm ",onClick:function(){d>0&&b({type:R,id:t})},children:"-"})}),Object(S.jsx)("p",{className:"ml-3 mr-3 mt-1 mb-0",children:a}),Object(S.jsx)("div",{className:"border",children:Object(S.jsx)("button",{className:"btn  btn-down btn-sm ",onClick:function(){if(15==d)return 15;b({type:P,id:t})},children:"+"})})]})})},U=Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"space-between",textAlign:"center"},cardRating:{display:"flex",marginLeft:"3px"},avatar:{backgroundColor:f.a[500]}}}));function Z(e){var t=e.product,a=t.id,n=t.name,i=t.title,r=(t.desciption,t.image),o=t.price,d=(t.rating,t.amountItem),l=U(),O=c.a.useState(!1),f=Object(s.a)(O,2),v=(f[0],f[1],E()),y=Object(s.a)(v,2),T=(y[0].basket,y[1]);return Object(S.jsxs)(j.a,{className:l.root,children:[Object(S.jsx)(b.a,{avatar:Object(S.jsx)(h.a,{"aria-label":"recipe",className:l.avatar,children:Object(S.jsx)("h6",{children:"HT-s"})}),action:Object(S.jsx)(g.a,{className:l.action,variants:"h5",color:"textSecondary",children:N.a.formatMoney(o,"$")}),title:n,subheader:"in Stock"}),Object(S.jsx)(u.a,{className:l.media,image:r,title:"Producto - 1"}),Object(S.jsx)(m.a,{children:Object(S.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:i})}),Object(S.jsxs)(x.a,{disableSpacing:!0,className:l.cardActions,children:[Object(S.jsx)("div",{className:"sm-12",children:Object(S.jsx)(Q,{itemId:a,amountItem:d},a)}),Object(S.jsx)(p.a,{children:Object(S.jsx)(K.a,{onClick:function(){return T({type:D,id:a})}})})]})]})}var ee=a(144),te=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"20vh"},button:{marginTop:"2rem"}}})),ae=function(){var e=te(),t=E(),a=Object(s.a)(t,2),n=a[0].basket,c=(a[1],E()),i=Object(s.a)(c,1)[0].cantidadTotal;console.log(n);B(n);return Object(S.jsxs)("div",{className:e.root,children:[Object(S.jsxs)("h5",{children:["Total item: ",i]}),Object(S.jsx)("h5",{children:N.a.formatMoney(B(n),"$")}),Object(S.jsx)(ee.a,{className:e.button,variant:"contained",color:"secondary",children:"Check Out"})]})},ne=Object(d.a)((function(e){return{root:{flexGrow:1,padding:"2rem",textDecoration:"none"},title:{flexGrow:1,textAlign:"center",marginRight:"10px"},menuButton:{color:"#83c5be"},link:Object(o.a)({textDecoration:"none"},"textDecoration","none")}})),ce=function(){var e=ne(),t=E(),a=Object(s.a)(t,2),n=a[0].basket,i=(a[1],E()),r=Object(s.a)(i,1)[0].cantidadTotal;function o(){return Object(S.jsx)(c.a.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e){return Object(S.jsx)(H.a,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(S.jsx)(Z,{product:e},e.id)})}))})}return Object(S.jsx)("div",{className:e.root,children:Object(S.jsx)(H.a,{item:!0,xs:12,container:!0,spacing:2,children:0==r?Object(S.jsxs)(H.a,{className:"",item:!0,xs:12,container:!0,spacing:2,children:[Object(S.jsx)(H.a,{item:!0,xs:2,spacing:2,children:Object(S.jsx)(X.b,{to:"/",className:e.link,style:{textDecoration:"none"},children:Object(S.jsxs)(p.a,{edge:"start",className:e.menuButton,"aria-label":"menu",children:[Object(S.jsx)($.a,{}),Object(S.jsx)("strong",{children:Object(S.jsx)("h4",{children:"Back to list"})})]})})}),Object(S.jsx)(H.a,{item:!0,xs:12,spacing:2,children:Object(S.jsx)(g.a,{variant:"h6",className:e.title,children:"Your Cart is Empty"})})]}):Object(S.jsxs)(H.a,{container:!0,spacing:3,children:[Object(S.jsx)(H.a,{item:!0,xs:12,children:Object(S.jsx)(g.a,{align:"center",gutterBottom:!0,variant:"h4",children:"Shopping Cart"})}),Object(S.jsx)(H.a,{item:!0,xs:12,sm:8,md:9,container:!0,spacing:2,children:Object(S.jsx)(o,{})}),Object(S.jsx)(H.a,{item:!0,xs:12,sm:4,md:3,children:Object(S.jsx)(g.a,{align:"center",gutterBottom:!0,variant:"h4",children:Object(S.jsx)(ae,{})})})]})})})},ie=a(145),re=a(146),oe=a(148),se=a(147),de=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"#ffffff",textAlign:"end",marginRight:"10px"},bgColor:{backgroundColor:"#263238"},link:{textDecoration:"none"}}}));function le(){var e=de(),t=E(),a=Object(s.a)(t,2),n=(a[0].basket,a[1],E()),c=Object(s.a)(n,1)[0].cantidadTotal;return Object(S.jsx)("div",{className:e.root,children:Object(S.jsx)(ie.a,{position:"static",className:e.bgColor,children:Object(S.jsxs)(re.a,{children:[Object(S.jsx)(X.b,{to:"/",className:e.link,style:{textDecoration:"none"},children:Object(S.jsx)(p.a,{edge:"start",className:e.menuButton,color:"primary","aria-label":"menu",children:Object(S.jsx)("strong",{children:Object(S.jsx)("h4",{children:"HT - store"})})})}),Object(S.jsx)(g.a,{variant:"h6",className:e.title,children:"Hello Juan"}),Object(S.jsx)(ee.a,{variant:"outlined",color:"primary",children:"Login"}),Object(S.jsx)(X.b,{to:"checkout-page",children:Object(S.jsxs)(p.a,{"aria-label":"show cart items",color:"primary",children:[Object(S.jsx)(se.a,{badgeContent:c,color:"secondary",children:Object(S.jsx)(oe.a,{fontSize:"large"})}),Object(S.jsx)(q,{})]})})]})})})}var je=a(11);var be=function(){return Object(S.jsx)(X.a,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)(le,{}),Object(S.jsxs)(je.c,{children:[Object(S.jsx)(je.a,{path:"/checkout-page",children:Object(S.jsx)(ce,{})}),Object(S.jsx)(je.a,{path:"/",children:Object(S.jsx)(V,{})})]})]})})},ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},me=a(149),xe=a(78),Oe=Object(xe.a)({palette:{primary:{main:"#cfd8dc"},secondary:{main:"#e63946"},white:{main:"white"}}});a(108);r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(M,{initialstate:{basket:[],cantidadTotal:0,amount:1,arr:0},reducer:L,children:Object(S.jsx)(me.a,{theme:Oe,children:Object(S.jsx)(be,{})})})}),document.getElementById("root")),ue()},98:function(e,t,a){},99:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.d6e01355.chunk.js.map