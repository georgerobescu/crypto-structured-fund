(window["webpackJsonpcrypto-structured-fund-frontend"]=window["webpackJsonpcrypto-structured-fund-frontend"]||[]).push([[8],{1059:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a.n(n),r=a(32),c=a(51),u=a(0),i=a.n(u),o=a(11),s=a(194),m=a(860),E=a(874),f=a(22),d=a(875),b=a(849),F=a(876),h=a(877),p=a(914);function j(e){var t=e.data,a=t.fullProfitPrice,n=t.lossPrice,l=t.currentPrice;return i.a.createElement(p.e,null,i.a.createElement(p.b,{data:[t],barSize:40,barGap:40},i.a.createElement(p.i,{stroke:"#FFFFFF",width:80,padding:{top:30,bottom:30},axisLine:!1,tickLine:!1,tick:{fontWeight:500}},i.a.createElement(p.c,{value:"ETH Price",offset:10,position:"insideLeft",style:{textAnchor:"middle"},angle:-90,fill:"#FFFFFF",fontWeight:500})),i.a.createElement(p.a,{dataKey:"currentPrice",fill:"#00C8FF"}),i.a.createElement(p.a,{dataKey:"fullProfitPrice",fill:"#00FF8C"}),i.a.createElement(p.a,{dataKey:"lossPrice",fill:"#FF4D53"}),i.a.createElement(p.d,{y:a,stroke:"#FF4D53",strokeDasharray:"5 5"},i.a.createElement(p.c,{value:"Profit Price",fill:"#FFFFFF",fontWeight:500,position:"insideRight"})),i.a.createElement(p.d,{y:n,stroke:"#FF4D53",strokeDasharray:"5 5"},i.a.createElement(p.c,{value:"Break Even",fill:"#FFFFFF",fontWeight:500,position:"insideRight"})),i.a.createElement(p.d,{y:l,label:"Current Price",stroke:"#FF4D53",strokeDasharray:"5 5"},i.a.createElement(p.c,{value:"Current Price",fill:"#FFFFFF",fontWeight:500,position:"insideRight"}))))}var O=a(913),g=a(64),v=a.n(g);function P(){var e=Object(o.useWeb3Context)().account,t=Object(m.c)(),a=Object(m.b)(),n=a.allowance,p=a.approve,g=Object(u.useState)(!1),P=Object(c.a)(g,2),k=(P[0],P[1]),w=Object(E.k)(),D=w.purchaseExpiringDate,y=w.redeemStartingDate,x=Object(E.c)(),C=Object(E.l)(),S=Object(E.e)(),H=Object(E.j)(),N=Object(E.d)(),A=Object(m.f)("DAI","ETH"),R=Object(m.f)("ETH","USD"),T=Object(E.a)(),W=Object(E.b)(),I=Object(s.c)(),M=Object(u.useState)(""),B=Object(c.a)(M,2),L=B[0],U=B[1],K=Object(u.useMemo)((function(){return!!e}),[e]),J=Object(u.useMemo)((function(){return S&&H&&A?S.times(A).plus(H):null}),[S,H,A]),z=Object(u.useMemo)((function(){return S&&J?S.times(1.2).div(J):null}),[S,J]),G=Object(u.useMemo)((function(){return S&&J?S.div(J):null}),[S,J]),Y=Object(u.useMemo)((function(){return{fullProfitPrice:z?z.toNumber():0,lossPrice:G?G.toNumber():0,currentPrice:R?R.toNumber():0}}),[z,G,R]),q=Object(u.useCallback)(Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p((function(e){I(e),k(!0)}),(function(e){k(!1)}),(function(){k(!1)})),k(!1);case 2:case"end":return e.stop()}}),e)}))),[p,I]),Q=Object(u.useCallback)(Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.a(L).times(1e18).toString(),e.next=3,T(t);case 3:e.sent.on("transactionHash",(function(e){I(e)})).on("error",(function(){U("")}));case 5:case"end":return e.stop()}}),e)}))),[T,L,I]),V=Object(u.useCallback)(Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.a(L).times(1e18).toString(),e.next=3,W(t);case 3:e.sent.on("transactionHash",(function(e){I(e)})).on("error",(function(){U("")}));case 5:case"end":return e.stop()}}),e)}))),[W,L,I]),X=Date.now()<D,Z=Date.now()>y;return i.a.createElement(d.a,null,i.a.createElement(d.b,null,i.a.createElement(F.a,{strong:!0},i.a.createElement(b.h,null,"Profit Rate"),i.a.createElement(b.d,null,C?"".concat(C.times(100).toString(),"%"):"-")),i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Pool (DAI)"),i.a.createElement(b.d,null,S?Object(f.a)(S,18):"-")),i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Investors"),i.a.createElement(b.d,null,N||"-"))),i.a.createElement(d.b,null,i.a.createElement(F.b,null,i.a.createElement(F.d,null,i.a.createElement(F.f,null,i.a.createElement(b.h,null,i.a.createElement(b.a,null,"Already Bought"," ",x?Object(f.a)(x,18):"0"," ","units.")),i.a.createElement(b.f,null,"Your Balance:"," ",t?Object(f.a)(t,18):"-"," DAI")),X?i.a.createElement(h.b,null,i.a.createElement(h.c,null,i.a.createElement("input",{type:"number",placeholder:"0.0",value:L,onChange:function(e){U(e.target.value)}}),i.a.createElement("span",{className:"suffix"},"DAI")),n?n.lt(L)?i.a.createElement(h.a,{onClick:q,disabled:!K},"Unlock"):i.a.createElement(h.a,{onClick:Q,disabled:!K},"Purchase"):i.a.createElement(h.a,{disabled:!0},"Purchase")):Z?i.a.createElement(h.b,null,i.a.createElement(h.c,null,i.a.createElement("input",{type:"number",placeholder:"0.0",value:L,onChange:function(e){U(e.target.value)}}),i.a.createElement("span",{className:"suffix"},"ETH")),i.a.createElement(h.a,{onClick:V,disabled:!K},"Redeem")):i.a.createElement(F.f,null,i.a.createElement(b.f,null,"The fund is in the locked period."))),i.a.createElement(F.c,null,i.a.createElement(F.e,null,i.a.createElement("div",{className:"item"},i.a.createElement(O.a,null),i.a.createElement(b.g,null,"Purchase Due Date:"," ",D?Object(f.b)(D):"-")),i.a.createElement("div",{className:"item"},i.a.createElement(O.a,null),i.a.createElement(b.g,null,"Redeem Starting Date:"," ",y?Object(f.b)(y):"-")))))),i.a.createElement(d.b,{justifyBetween:!0},i.a.createElement(b.b,null,"Estimated Ether Price that you will get..."),i.a.createElement(b.f,null,"Unit: USD/ETH")),i.a.createElement(d.c,null,i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Current Price"),i.a.createElement(b.d,null,R?R.toFixed(2):"-")),i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Full Profits"),i.a.createElement(b.d,null,z?z.toFixed(2):"-")),i.a.createElement(F.a,null,i.a.createElement(b.h,null,"Loss"),i.a.createElement(b.d,null,G?G.toFixed(2):"-"))),i.a.createElement(d.c,null,i.a.createElement(F.a,null,i.a.createElement("div",{style:{width:"90%",height:"300px"}},i.a.createElement(j,{data:Y})))))}a.d(t,"default",(function(){return P}))}}]);
//# sourceMappingURL=8.268ed8f8.chunk.js.map