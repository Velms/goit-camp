"use strict";(self.webpackChunkgoit_camp=self.webpackChunkgoit_camp||[]).push([[55],{8055:function(n,e,i){i.r(e),i.d(e,{default:function(){return te}});var t=i(9439),r=i(2791),o=i(4420),s=i(5667),l=function(n){return n.adverts.adverts},c=function(n){return n.adverts.isLoading},a=function(n){return n.adverts.error},h=i(7234),d=i(3433),x=i(4942),p=i(1413);var u,g,f,j,v,m,w,b,Z,y,k,C,P,z,$,A,S,T,L,V,F,q,E,I,D,R,B,K,W,N,_,O,G,H,M,U,Y,J,Q,X,nn,en,tn=i.p+"static/media/sprite.870047835135e08214912d9c769e4c95.svg",rn=i(168),on=i(7924),sn=on.ZP.form(u||(u=(0,rn.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 360px;\n\n  & > :nth-child(4) {\n    margin-top: 32px;\n  }\n"]))),ln=on.ZP.label(g||(g=(0,rn.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: rgba(16, 24, 40, 0.6);\n\n  svg {\n    position: absolute;\n    width: 18px;\n    height: 20px;\n    left: 18px;\n    top: 45px;\n    fill: none;\n    stroke: #101828;\n  }\n\n  input {\n    padding: 18px;\n    padding-left: 44px;\n    background-color: #f7f7f7;\n    color: #101828;\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.25;\n    border-radius: 10px;\n    border: none;\n\n    &::placeholder {\n      color: rgba(16, 24, 40, 0.6);\n    }\n  }\n"]))),cn=on.ZP.p(f||(f=(0,rn.Z)(["\n  color: #475467;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  margin-top: 32px;\n  margin-bottom: 14px;\n"]))),an=on.ZP.label(j||(j=(0,rn.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  color: #101828;\n\n  hr {\n    background-color: rgba(16, 24, 40, 0.1);\n    display: block;\n    margin: 24px 0;\n    opacity: 0.2;\n  }\n"]))),hn=on.ZP.div(v||(v=(0,rn.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 10px;\n"]))),dn=on.ZP.div(m||(m=(0,rn.Z)(["\n  position: relative;\n  display: flex;\n  height: 95px;\n  align-items: center;\n  justify-content: center;\n  width: calc((100% - 2 * 13px) / 3);\n  border-radius: 10px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  cursor: pointer;\n\n  input {\n    width: 100px;\n    height: 80px;\n    padding: 15px;\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    transition: border 150ms linear;\n\n    &:checked + div {\n      border: 1px solid #e44848;\n    }\n  }\n"]))),xn=on.ZP.div(w||(w=(0,rn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n"]))),pn=on.ZP.button(b||(b=(0,rn.Z)(["\n  display: block;\n  width: 173px;\n  padding: 16px 60px;\n  border-radius: 200px;\n  background-color: #e44848;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.08px;\n  cursor: pointer;\n  margin-top: 64px;\n  margin-bottom: 24px;\n  transition: background-color 150ms linear;\n\n  &:hover {\n    background-color: #d84343;\n  }\n"]))),un=i(3329),gn=function(n){var e=n.handleSearch,i=n.filters,o=(0,r.useState)((0,p.Z)({location:"",equipment:[],type:""},i)),s=(0,t.Z)(o,2),l=s[0],c=s[1],a=(0,r.useState)(!1),h=(0,t.Z)(a,2),u=h[0],g=h[1],f=(0,r.useState)(!0),j=(0,t.Z)(f,2),v=j[0],m=j[1],w=["Kyiv","Lviv","Odesa","Poltava","Dnipro","Kharkiv","Sumy"],b=function(n,e){if(c((function(i){return(0,p.Z)((0,p.Z)({},i),{},(0,x.Z)({},n,e))})),"location"===n){var i=w.filter((function(n){return n.startsWith(e.toLowerCase())}));g(!0),0===i.length?m(!1):m(!0)}},Z=function(n){var e=n.target,i=e.value,t=e.checked,r=(0,d.Z)(l.equipment);r=t?[].concat((0,d.Z)(r),[i]):r.filter((function(n){return n!==i})),c((function(n){return(0,p.Z)((0,p.Z)({},n),{},{equipment:r})}))};return(0,un.jsxs)(sn,{onSubmit:function(n){n.preventDefault(),w.includes(l.location)?e(l):m(!1)},children:[(0,un.jsxs)(ln,{children:["Location",(0,un.jsx)("svg",{children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-map-pin")})}),(0,un.jsx)("input",{type:"text",placeholder:"City",value:l.location,onChange:function(n){return b("location",n.target.value)},onBlur:function(){return g(!1)},required:!0}),u&&!v&&(0,un.jsxs)("span",{children:["Please, enter a valid location: ",w.join(", "),"."]})]}),(0,un.jsx)(cn,{children:"Filters"}),(0,un.jsxs)(an,{children:["Vehicle equipment",(0,un.jsx)("hr",{}),(0,un.jsx)(hn,{children:[{value:"airConditioner",icon:"icon-AC",text:"AC"},{value:"transmission",icon:"icon-automatic",text:"Automatic"},{value:"kitchen",icon:"icon-kitchen",text:"Kitchen"},{value:"tv",icon:"icon-TV",text:"TV"},{value:"shower",icon:"icon-shower",text:"Shower/WC"}].map((function(n){var e=n.value,i=n.icon,t=n.text;return(0,un.jsxs)(dn,{children:[(0,un.jsx)("input",{type:"checkbox",name:"equipment",value:e,checked:l.equipment.includes(e),onChange:Z}),(0,un.jsxs)(xn,{children:[(0,un.jsx)("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#").concat(i)})}),t]})]},e)}))})]}),(0,un.jsxs)(an,{children:["Vehicle type",(0,un.jsx)("hr",{}),(0,un.jsx)(hn,{children:[{value:"van",icon:"icon-van",text:"Van"},{value:"fullyIntegrated",icon:"icon-fully-integrated",text:"Fully Integrated"},{value:"alcove",icon:"icon-alcove",text:"Alcove"}].map((function(n){var e=n.value,i=n.icon,t=n.text;return(0,un.jsxs)(dn,{children:[(0,un.jsx)("input",{type:"radio",name:"vehicleType",value:e,checked:l.type===e,onChange:function(n){return b("type",n.target.value)}}),(0,un.jsxs)(xn,{children:[(0,un.jsx)("svg",{width:"40",height:"28",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#").concat(i)})}),t]})]},e)}))})]}),(0,un.jsx)(pn,{type:"submit",children:"Search"})]})},fn=i(4164),jn=on.ZP.div(Z||(Z=(0,rn.Z)(["\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n"]))),vn=on.ZP.div(y||(y=(0,rn.Z)(["\n  position: relative;\n  z-index: 20;\n  background-color: #ffffff;\n  border-radius: 20px;\n  padding: 40px;\n  display: inline-flex;\n  flex-direction: column;\n  width: 90vh;\n  max-width: 902px;\n  max-height: 90vh;\n  gap: 24px;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 50px;\n    margin: 25px 0;\n  }\n"]))),mn=on.ZP.svg(k||(k=(0,rn.Z)(["\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  width: 32px;\n  height: 32px;\n  fill: none;\n  stroke: #101828;\n  cursor: pointer;\n"]))),wn=function(n){var e=n.onClose,i=n.children;return(0,r.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]),(0,fn.createPortal)((0,un.jsx)(jn,{onClick:function(n){n.currentTarget===n.target&&(e(),document.body.style.overflow="visible")},children:(0,un.jsxs)(vn,{children:[(0,un.jsx)(mn,{onClick:function(){e()},children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-close")})}),i]})}),document.getElementById("modal-root"))},bn=on.ZP.div(C||(C=(0,rn.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Zn=on.ZP.p(P||(P=(0,rn.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  margin-bottom: 10px;\n"]))),yn=on.ZP.div(z||(z=(0,rn.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n\n  p {\n    font-size: 16px;\n    line-height: 24px;\n    margin-bottom: 16px;\n  }\n"]))),kn=on.ZP.p($||($=(0,rn.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  margin-bottom: 24px;\n"]))),Cn=on.ZP.div(A||(A=(0,rn.Z)(["\n  overflow-y: auto;\n  max-height: 474px;\n\n  &::-webkit-scrollbar {\n    width: 3px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 50px;\n    margin: 15px 0;\n  }\n"]))),Pn=on.ZP.ul(S||(S=(0,rn.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  overflow-x: auto;\n  margin-bottom: 24px;\n\n  li {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    width: calc(100% / 3);\n    min-height: 300px;\n  }\n\n  img {\n    border-radius: 10px;\n    object-fit: cover;\n    width: 100%;\n    align-self: stretch;\n  }\n"]))),zn=on.ZP.p(T||(T=(0,rn.Z)(["\n  color: #475467;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n"]))),$n=on.ZP.div(L||(L=(0,rn.Z)(["\n  margin-top: 44px;\n  position: relative;\n\n  & hr {\n    display: block;\n    background-color: rgba(16, 24, 40, 0.2);\n    margin-top: 24px;\n    margin-bottom: 0;\n    opacity: 0.2;\n  }\n"]))),An=on.ZP.button(V||(V=(0,rn.Z)(["\n  margin-right: 40px;\n  color: #101828;\n  font-family: Inter;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n  cursor: pointer;\n\n  &.active::after {\n    position: absolute;\n    top: 45.5px;\n    display: block;\n    content: '';\n    width: 85px;\n    height: 4px;\n    background-color: #e44848;\n  }\n"]))),Sn=on.ZP.div(F||(F=(0,rn.Z)(["\n  display: flex;\n  gap: 24px;\n  margin-top: 44px;\n"]))),Tn=on.ZP.div(q||(q=(0,rn.Z)(["\n  max-width: 430px;\n\n  & hr {\n    display: block;\n    background-color: rgba(16, 24, 40, 0.1);\n    margin-top: 24px;\n    margin-bottom: 24px;\n    opacity: 0.2;\n  }\n"]))),Ln=on.ZP.ul(E||(E=(0,rn.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 44px;\n"]))),Vn=on.ZP.li(I||(I=(0,rn.Z)(["\n  display: flex;\n  padding: 12px 18px;\n  align-items: center;\n  gap: 8px;\n  border-radius: 100px;\n  background: #f2f4f7;\n  color: #101828;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n"]))),Fn=on.ZP.p(D||(D=(0,rn.Z)(["\n  color: #101828;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  margin-bottom: 24px;\n"]))),qn=on.ZP.ul(R||(R=(0,rn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n\n  & li {\n    text-align: center;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 24px;\n  }\n"]))),En=function(n){var e=n.advert,i=e.details,t=i.airConditioner,r=i.kitchen,o=i.beds,s=i.TV,l=i.CD,c=i.radio,a=i.shower,h=i.toilet,d=i.freezer,x=i.hob,p=i.microwave,u=i.gas,g=i.water;return(0,un.jsxs)(Tn,{children:[(0,un.jsxs)(Ln,{children:[(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-adults")})}),e.adults," adults"]}),(0,un.jsxs)(Vn,{style:{textTransform:"capitalize"},children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-automatic")})}),e.transmission]}),t>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-AC")})}),"AC"]}),(0,un.jsxs)(Vn,{style:{textTransform:"capitalize"},children:[(0,un.jsx)("svg",{width:"20",height:"20",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-petrol")})}),e.engine]}),r>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-kitchen")})}),"kitchen"]}),(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-beds")})}),o," beds"]}),t>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-air-conditioner")})}),t," air conditioner"]}),l>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-cd")})}),"CD"]}),c>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-radio")})}),"Radio"]}),s>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-TV")})}),"TV"]}),x>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-hob")})}),x," hob"]}),p>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-microwave")})}),"Microwave"]}),d>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-freezer")})}),"Freezer"]}),a>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-shower")})}),"Shower"]}),h>=1&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-toilet")})}),"Toilet"]}),u&&""!==u.trim()&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-gas")})}),u.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/,"$1 $2")," Gas"]}),g&&""!==g.trim()&&(0,un.jsxs)(Vn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-water")})}),g.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/,"$1 $2")," Water"]})]}),(0,un.jsx)(Fn,{children:"Vehicle details"}),(0,un.jsx)("hr",{}),(0,un.jsxs)("div",{children:[(0,un.jsxs)(qn,{children:[(0,un.jsx)("li",{children:"Form"}),(0,un.jsx)("li",{children:e.form.replace(/([a-z])([A-Z])/g,"$1 $2").charAt(0).toUpperCase()+e.form.replace(/([a-z])([A-Z])/g,"$1 $2").slice(1).toLowerCase()})]}),(0,un.jsxs)(qn,{children:[(0,un.jsx)("li",{children:"Length"}),(0,un.jsx)("li",{children:e.length.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/,"$1 $2")})]}),(0,un.jsxs)(qn,{children:[(0,un.jsx)("li",{children:"Width"}),(0,un.jsx)("li",{children:e.width.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/,"$1 $2")})]}),(0,un.jsxs)(qn,{children:[(0,un.jsx)("li",{children:"Height"}),(0,un.jsx)("li",{children:e.height.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/,"$1 $2")})]}),(0,un.jsxs)(qn,{children:[(0,un.jsx)("li",{children:"Tank"}),(0,un.jsx)("li",{children:e.tank.replace(/^(\d+\.?\d*)([a-zA-Z]*)$/,"$1 $2")})]}),(0,un.jsxs)(qn,{children:[(0,un.jsx)("li",{children:"Consumption"}),(0,un.jsx)("li",{children:e.consumption.replace(/(\d+\.?\d*)([a-zA-Z/]*$)/,"$1 $2")})]})]})]})},In=function(n){n.advert;return(0,un.jsx)("div",{children:"Reviews"})},Dn=function(n){var e=n.advert,i=(0,r.useState)(""),o=(0,t.Z)(i,2),s=o[0],l=o[1];return(0,un.jsxs)(bn,{children:[(0,un.jsx)(Zn,{children:e.name}),(0,un.jsxs)(yn,{children:[(0,un.jsxs)("p",{style:{textDecorationLine:"underline"},children:[(0,un.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-star")})}),e.rating," (",e.reviews.length," Reviews)"]}),(0,un.jsxs)("p",{children:[(0,un.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-map-pin")})}),e.location.split(",").reverse().join(", ")]})]}),(0,un.jsxs)(kn,{children:["\u20ac",e.price.toFixed(2)]}),(0,un.jsxs)(Cn,{children:[(0,un.jsx)(Pn,{children:e.gallery.length>0&&e.gallery.map((function(n){return(0,un.jsx)("li",{children:(0,un.jsx)("img",{src:n,alt:e.name})},n)}))}),(0,un.jsx)(zn,{children:e.description})]}),(0,un.jsxs)($n,{children:[(0,un.jsx)(An,{type:"button",onClick:function(){return l("features")},className:"features"===s?"active":"",children:"Features"}),(0,un.jsx)(An,{type:"button",onClick:function(){return l("reviews")},className:"reviews"===s?"active":"",children:"Reviews"}),(0,un.jsx)("hr",{})]}),"features"===s&&(0,un.jsxs)(Sn,{children:[(0,un.jsx)(En,{advert:e}),(0,un.jsx)(In,{advert:e})]}),"reviews"===s&&(0,un.jsxs)(Sn,{children:[(0,un.jsx)(En,{advert:e}),(0,un.jsx)(In,{advert:e})]})]})},Rn=on.ZP.img(B||(B=(0,rn.Z)(["\n  width: 290px;\n  height: 310px;\n  border-radius: 10px;\n  object-fit: cover;\n"]))),Bn=on.ZP.div(K||(K=(0,rn.Z)(["\n  display: flex;\n  width: 526px;\n  flex-direction: column;\n\n  > *:not(:first-child) {\n    margin-bottom: 24px;\n  }\n\n  > :last-child {\n    margin-bottom: 0;\n  }\n"]))),Kn=on.ZP.div(W||(W=(0,rn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Wn=on.ZP.p(N||(N=(0,rn.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n"]))),Nn=on.ZP.div(_||(_=(0,rn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 11px;\n"]))),_n=on.ZP.p(O||(O=(0,rn.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n"]))),On=on.ZP.div(G||(G=(0,rn.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n\n  p {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),Gn=on.ZP.p(H||(H=(0,rn.Z)(["\n  overflow: hidden;\n  color: #475467;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  line-height: 24px;\n  white-space: nowrap;\n"]))),Hn=on.ZP.ul(M||(M=(0,rn.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n"]))),Mn=on.ZP.li(U||(U=(0,rn.Z)(["\n  display: flex;\n  padding: 12px 18px;\n  align-items: center;\n  gap: 8px;\n  border-radius: 100px;\n  background: #f2f4f7;\n  color: #101828;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n"]))),Un=on.ZP.button(Y||(Y=(0,rn.Z)(["\n  display: block;\n  padding: 16px 40px;\n  width: 166px;\n  height: 56px;\n  border-radius: 200px;\n  background: #e44848;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.08px;\n  transition: background-color 150ms linear;\n\n  &:hover {\n    background-color: #d84343;\n  }\n"]))),Yn=function(n){var e=n.advert,i=(0,r.useState)(!1),o=(0,t.Z)(i,2),s=o[0],l=o[1];return(0,un.jsxs)(un.Fragment,{children:[(0,un.jsx)(Rn,{src:e.gallery[0],alt:e.name}),(0,un.jsxs)(Bn,{children:[(0,un.jsxs)(Kn,{children:[(0,un.jsx)(Wn,{children:e.name}),(0,un.jsxs)(Nn,{children:[(0,un.jsxs)(_n,{children:["\u20ac",e.price.toFixed(2)]}),(0,un.jsx)("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-heart")})})]})]}),(0,un.jsxs)(On,{children:[(0,un.jsxs)("p",{style:{textDecorationLine:"underline"},children:[(0,un.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-star")})}),e.rating," (",e.reviews.length," Reviews)"]}),(0,un.jsxs)("p",{children:[(0,un.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-map-pin")})}),e.location.split(",").reverse().join(", ")]})]}),(0,un.jsx)(Gn,{children:e.description}),(0,un.jsxs)(Hn,{children:[(0,un.jsxs)(Mn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-adults")})}),e.adults," adults"]}),(0,un.jsxs)(Mn,{style:{textTransform:"capitalize"},children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-automatic")})}),e.transmission]}),(0,un.jsxs)(Mn,{style:{textTransform:"capitalize"},children:[(0,un.jsx)("svg",{width:"20",height:"20",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-petrol")})}),e.engine]}),e.details.kitchen>=1&&(0,un.jsxs)(Mn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-kitchen")})}),"Kitchen"]}),(0,un.jsxs)(Mn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-beds")})}),e.details.beds," beds"]}),e.details.airConditioner>=1&&(0,un.jsxs)(Mn,{children:[(0,un.jsx)("svg",{width:"20",height:"20",fill:"none",children:(0,un.jsx)("use",{href:"".concat(tn,"#icon-AC")})}),"AC"]})]}),(0,un.jsx)(Un,{onClick:function(){l(!0),document.body.style.overflow="hidden"},children:"Show more"})]}),s&&(0,un.jsx)(wn,{isOpen:s,onClose:function(){l(!1)},children:(0,un.jsx)(Dn,{advert:e})})]})},Jn=i(9258),Qn=on.ZP.div(J||(J=(0,rn.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 64px;\n  margin-top: 30px;\n"]))),Xn=on.ZP.div(Q||(Q=(0,rn.Z)(["\n  width: 888px;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n"]))),ne=on.ZP.ul(X||(X=(0,rn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),ee=on.ZP.li(nn||(nn=(0,rn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  padding: 24px;\n"]))),ie=on.ZP.button(en||(en=(0,rn.Z)(["\n  padding: 16px 32px;\n  border-radius: 200px;\n  border: 1px solid rgba(71, 84, 103, 0.2);\n  color: #101828;\n  font-family: Inter;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.08px;\n  margin: 0 auto 24px;\n  transition: border 150ms linear;\n\n  &:hover {\n    border: 1px solid var(--Button, #e44848);\n  }\n"]))),te=function(){var n=(0,o.I0)(),e=(0,r.useState)({}),i=(0,t.Z)(e,2),d=i[0],x=i[1],p=(0,r.useState)(1),u=(0,t.Z)(p,2),g=u[0],f=u[1],j=(0,r.useState)(!0),v=(0,t.Z)(j,2),m=v[0],w=v[1],b=(0,o.v9)(c),Z=(0,o.v9)(a),y=(0,o.v9)(l);(0,r.useEffect)((function(){n((0,h.B)({page:g,limit:4})).then((function(){w(4===y.length)}))}),[n,g,y.length]);return(0,un.jsxs)(Qn,{children:[b&&(0,un.jsx)(Jn.Z,{}),Z&&(0,un.jsxs)("p",{children:["Error: ",Z]}),(0,un.jsx)(gn,{handleSearch:function(n){x(n),f(1)},filters:d}),(0,un.jsxs)(Xn,{children:[(0,un.jsx)(ne,{children:y.map((function(n){return(0,un.jsx)(ee,{children:(0,un.jsx)(Yn,{advert:n})},n._id)}))}),m&&!b&&(0,un.jsx)(ie,{onClick:function(){f((function(n){return n+1}));s.NY.scrollTo(0,{duration:1500,smooth:!0})},children:"Load more"})]})]})}}}]);
//# sourceMappingURL=55.dfae5790.chunk.js.map