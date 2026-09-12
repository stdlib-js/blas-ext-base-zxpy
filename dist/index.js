"use strict";var y=function(v,t){return function(){try{return t||v((t={exports:{}}).exports,t),t.exports}catch(s){throw (t=0, s)}};};var c=y(function(I,d){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist'),o=5;function g(v,t,s,q,n,z,b){var a,i,r,e,x,p,f,u;if(v<=0)return n;if(a=j(t,0),i=j(n,0),r=q*2,e=b*2,x=s*2,p=z*2,s===1&&z===1){if(f=v%o,f>0)for(u=0;u<f;u++)i[e]+=a[r],i[e+1]+=a[r+1],r+=x,e+=p;if(v<o)return n;for(u=f;u<v;u+=o)i[e]+=a[r],i[e+1]+=a[r+1],i[e+2]+=a[r+2],i[e+3]+=a[r+3],i[e+4]+=a[r+4],i[e+5]+=a[r+5],i[e+6]+=a[r+6],i[e+7]+=a[r+7],i[e+8]+=a[r+8],i[e+9]+=a[r+9],r+=o*2,e+=o*2;return n}for(u=0;u<v;u++)i[e]+=a[r],i[e+1]+=a[r+1],r+=x,e+=p;return n}d.exports=g
});var R=y(function(J,w){
var l=require('@stdlib/strided-base-stride2offset/dist'),h=c();function k(v,t,s,q,n){return h(v,t,s,l(v,s),q,n,l(v,n))}w.exports=k
});var M=y(function(K,E){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),B=c();A(_,"ndarray",B);E.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=M(),m,O=D(C(__dirname,"./native.js"));F(O)?m=G:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
