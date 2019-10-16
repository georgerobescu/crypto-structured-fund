(window["webpackJsonpcrypto-structured-fund-frontend"]=window["webpackJsonpcrypto-structured-fund-frontend"]||[]).push([[8],{1059:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a.n(n),r=a(32),c=a(51),u=a(0),i=a.n(u),o=a(11),s=a(194),m=a(860),E=a(874),d=a(22),f=a(875),b=a(849),F=a(876),h=a(877),p=a(914);function j(e){var t=e.data,a=t.fullProfitPrice,n=t.lossPrice,l=t.currentPrice;return i.a.createElement(p.e,null,i.a.createElement(p.b,{data:[t],barSize:40,barGap:40},i.a.createElement(p.i,{stroke:"#FFFFFF",width:80,padding:{top:30,bottom:30},axisLine:!1,tickLine:!1,tick:{fontWeight:500}},i.a.createElement(p.c,{value:"ETH Price",offset:10,position:"insideLeft",style:{textAnchor:"middle"},angle:-90,fill:"#FFFFFF",fontWeight:500})),i.a.createElement(p.a,{dataKey:"currentPrice",fill:"#00C8FF"}),i.a.createElement(p.a,{dataKey:"fullProfitPrice",fill:"#00FF8C"}),i.a.createElement(p.a,{dataKey:"lossPrice",fill:"#FF4D53"}),i.a.createElement(p.d,{y:a,stroke:"#FF4D53",strokeDasharray:"5 5"},i.a.createElement(p.c,{value:"Profit Price",fill:"#FFFFFF",fontWeight:500,position:"insideRight"})),i.a.createElement(p.d,{y:n,stroke:"#FF4D53",strokeDasharray:"5 5"},i.a.createElement(p.c,{value:"Break Even",fill:"#FFFFFF",fontWeight:500,position:"insideRight"})),i.a.createElement(p.d,{y:l,label:"Current Price",stroke:"#FF4D53",strokeDasharray:"5 5"},i.a.createElement(p.c,{value:"Current Price",fill:"#FFFFFF",fontWeight:500,position:"insideRight"}))))}var O=a(913),g=a(64),P=a.n(g);function v(){var e=Object(o.useWeb3Context)().account,t=Object(m.c)(),a=Object(m.b)(),n=a.allowance,p=a.approve,g=Object(u.useState)(!1),v=Object(c.a)(g,2),k=v[0],w=v[1],D=Object(E.k)(),y=D.purchaseExpiringDate,x=D.redeemStartingDate,C=Object(E.c)(),S=Object(E.l)(),H=Object(E.e)(),N=Object(E.j)(),A=Object(E.d)(),R=Object(m.f)("DAI","ETH"),T=Object(m.f)("ETH","USD"),W=Object(E.a)(),I=Object(E.b)(),M=Object(s.c)(),B=Object(u.useState)(""),L=Object(c.a)(B,2),U=L[0],K=L[1],J=Object(u.useMemo)((function(){return!!e}),[e]),z=Object(u.useMemo)((function(){return H&&N&&R?H.times(R).plus(N):null}),[H,N,R]),G=Object(u.useMemo)((function(){return H&&z?H.times(1.2).div(z):null}),[H,z]),Y=Object(u.useMemo)((function(){return H&&z?H.div(z):null}),[H,z]),q=Object(u.useMemo)((function(){return{fullProfitPrice:G?G.toNumber():0,lossPrice:Y?Y.toNumber():0,currentPrice:T?T.toNumber():0}}),[G,Y,T]),Q=Object(u.useCallback)(Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:e.sent.on("transactionHach",(function(){w(!0)})).on("receipt",(function(){w(!1)})).on("error",(function(){w(!1)}));case 4:case"end":return e.stop()}}),e)}))),[p]),V=Object(u.useCallback)(Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new P.a(U).times(1e18).toString(),e.next=3,W(t);case 3:e.sent.on("transactionHash",(function(e){M(e)})).on("error",(function(){K("")}));case 5:case"end":return e.stop()}}),e)}))),[W,U,M]),X=Object(u.useCallback)(Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new P.a(U).times(1e18).toString(),e.next=3,I(t);case 3:e.sent.on("transactionHash",(function(e){M(e)})).on("error",(function(){K("")}));case 5:case"end":return e.stop()}}),e)}))),[I,U,M]),Z=Date.now()<y,$=Date.now()>x;return i.a.createElement(f.a,null,i.a.createElement(f.b,null,i.a.createElement(F.a,{strong:!0},i.a.createElement(b.h,null,"Profit Rate"),i.a.createElement(b.d,null,S?"".concat(S.times(100).toString(),"%"):"-")),i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Pool (DAI)"),i.a.createElement(b.d,null,H?Object(d.a)(H,18):"-")),i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Investors"),i.a.createElement(b.d,null,A||"-"))),i.a.createElement(f.b,null,i.a.createElement(F.b,null,i.a.createElement(F.d,null,i.a.createElement(F.f,null,i.a.createElement(b.h,null,i.a.createElement(b.a,null,"Already Bought"," ",C?Object(d.a)(C,18):"0"," ","units.")),i.a.createElement(b.f,null,"Your Balance:"," ",t?Object(d.a)(t,18):"-"," DAI")),Z?i.a.createElement(h.b,null,i.a.createElement(h.c,null,i.a.createElement("input",{type:"number",placeholder:"0.0",value:U,onChange:function(e){K(e.target.value)}}),i.a.createElement("span",{className:"suffix"},"DAI")),n?n.lt(U)?i.a.createElement(h.a,{onClick:Q,disabled:!J},"Unlock"):k?i.a.createElement(h.a,{disabled:!0},"Pending..."):i.a.createElement(h.a,{onClick:V,disabled:!J},"Purchase"):i.a.createElement(h.a,{disabled:!0},"Purchase")):$?i.a.createElement(h.b,null,i.a.createElement(h.c,null,i.a.createElement("input",{type:"number",placeholder:"0.0",value:U,onChange:function(e){K(e.target.value)}}),i.a.createElement("span",{className:"suffix"},"ETH")),i.a.createElement(h.a,{onClick:X,disabled:!J},"Redeem")):i.a.createElement(F.f,null,i.a.createElement(b.f,null,"The fund is in the locked period."))),i.a.createElement(F.c,null,i.a.createElement(F.e,null,i.a.createElement("div",{className:"item"},i.a.createElement(O.a,null),i.a.createElement(b.g,null,"Purchase Due Date:"," ",y?Object(d.b)(y):"-")),i.a.createElement("div",{className:"item"},i.a.createElement(O.a,null),i.a.createElement(b.g,null,"Redeem Starting Date:"," ",x?Object(d.b)(x):"-")))))),i.a.createElement(f.b,{justifyBetween:!0},i.a.createElement(b.b,null,"Estimated Ether Price that you will get..."),i.a.createElement(b.f,null,"Unit: USD/ETH")),i.a.createElement(f.c,null,i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Current Price"),i.a.createElement(b.d,null,T?T.toFixed(2):"-")),i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Full Profits"),i.a.createElement(b.d,null,G?G.toFixed(2):"-")),i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Loss"),i.a.createElement(b.d,null,Y?Y.toFixed(2):"-"))),i.a.createElement(f.c,null,i.a.createElement(F.a,null,i.a.createElement("div",{style:{width:"90%",height:"300px"}},i.a.createElement(j,{data:q})))))}a.d(t,"default",(function(){return v}))}}]);
//# sourceMappingURL=8.e517bd05.chunk.js.map