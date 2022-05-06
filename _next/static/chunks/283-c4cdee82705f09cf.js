"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{7701:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(6076),r=n(3901),i=n(2660),s=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"internalType":"struct VoxelTowers.Property","name":"property","type":"tuple"}],"name":"addProperty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isPropertySetter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tower","type":"uint256"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"properties","type":"string"},{"internalType":"string","name":"imageLink","type":"string"}],"internalType":"struct VoxelTowers.BasePropsParams[]","name":"basePropsParams","type":"tuple[]"}],"name":"setBaseProperties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"str","type":"string"},{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"substring","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"string","name":"imageLink","type":"string"}],"name":"updateImageLink","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"updatePropertySetters","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),p=new a.CH(i.RY,s.Mt,new r.c(i.$G))},9384:function(e,t,n){n.d(t,{Q:function(){return p},g:function(){return o}});var a=n(4051),r=n.n(a);function i(e,t,n,a,r,i,s){try{var p=e[i](s),u=p.value}catch(y){return void n(y)}p.done?t(u):Promise.resolve(u).then(a,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function p(e){i(s,a,r,p,u,"next",e)}function u(e){i(s,a,r,p,u,"throw",e)}p(void 0)}))}}function p(e,t){return u.apply(this,arguments)}function u(){return(u=s(r().mark((function e(t,n){var a,i,s,p,u,o,d,l,m,c,f,T,b,v;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.queryFilter(t.filters.Transfer(n,null));case 2:return a=e.sent,e.next=5,t.queryFilter(t.filters.Transfer(null,n));case 5:for(i=e.sent,s=a.concat(i).sort((function(e,t){return e.blockNumber-t.blockNumber||e.transactionIndex-t.transactionIndex})),p=new Set,u=!0,o=!1,d=void 0,e.prev=9,l=s[Symbol.iterator]();!(u=(m=l.next()).done);u=!0)c=m.value,f=c.args,T=f.from,b=f.to,v=f.tokenId,y(b,n)?p.add(v.toString()):y(T,n)&&p.delete(v.toString());e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),o=!0,d=e.t0;case 17:e.prev=17,e.prev=18,u||null==l.return||l.return();case 20:if(e.prev=20,!o){e.next=23;break}throw d;case 23:return e.finish(20);case 24:return e.finish(17);case 25:return e.abrupt("return",p);case 26:case"end":return e.stop()}}),e,null,[[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function y(e,t){return e.toLowerCase()===t.toLowerCase()}var o=function(e){try{var t=e.split(",")[1],n=atob(t);return JSON.parse(n)}catch(a){console.log(a)}}}}]);