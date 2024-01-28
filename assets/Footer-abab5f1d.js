import{_ as n,o as l,c as r,g as p,b as o,n as s,d as b,p as _,e as f,f as m,r as h,a as g,F as $,t as x}from"./index-ca7eafbb.js";const w={props:{breakpoint:{type:Number,default:568}},data:()=>({open:!1,mobile:!1}),created(){this.onResize(),window.addEventListener("resize",this.onResize)},beforeDestroy(){window.removeEventListener("resize",this.onResize)},methods:{onResize(){this.mobile=window.innerWidth<this.breakpoint}}},y=e=>(_("data-v-b1fd79d7"),e=e(),f(),e),k=y(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 cursor-pointer"},[o("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})],-1)),z=m("<li data-v-b1fd79d7> Home </li><li data-v-b1fd79d7> About </li><li data-v-b1fd79d7> More <ul data-v-b1fd79d7><li data-v-b1fd79d7> Blog </li><li data-v-b1fd79d7> Docs <ul data-v-b1fd79d7><li data-v-b1fd79d7> Introduction </li><li data-v-b1fd79d7> How it works </li><li data-v-b1fd79d7> FAQ <ul data-v-b1fd79d7><li data-v-b1fd79d7> A </li><li data-v-b1fd79d7> B </li><li data-v-b1fd79d7> C </li></ul></li></ul></li><li data-v-b1fd79d7> Discussion </li></ul></li><li data-v-b1fd79d7> Contact </li>",4);function C(e,t,i,u,c,a){return l(),r("div",{class:s([{mobile:e.mobile},"topmenu w-full inline-block"])},[k,p(e.$slots,"logo",{},()=>[b(" Logo comes here ")]),o("menu",null,[p(e.$slots,"default",{},()=>[z])])],2)}const M=n(w,[["render",C],["__scopeId","data-v-b1fd79d7"]]);const A={components:{TopMenu:M},data:()=>({}),computed:{route(){return this.$route.path}},methods:{open(e){location.href=e}}},T={class:"bg-gray-500 h-12 w-full block top-0 sticky text-right shadow border-slate-300 border-b"};function N(e,t,i,u,c,a){const v=h("TopMenu");return l(),r($,null,[o("nav",T,[o("div",{style:{width:"83px","background-size":"contain","background-repeat":"no-repeat","margin-left":"10px",cursor:"pointer",float:"left",height:"35px","margin-top":"7px","margin-bottom":"7px"},onClick:t[0]||(t[0]=d=>e.$router.push("/")),class:"rounded-full logo"}),o("button",{onClick:t[1]||(t[1]=d=>e.$router.push("/")),class:s([{active:a.route==="/"},"text-slate-200 hover:text-slate-50"])}," Home ",2),b(),o("button",{onClick:t[2]||(t[2]=d=>e.$router.push("/about")),class:s([{active:a.route==="/about"},"text-slate-200 hover:text-slate-50"])}," About ",2),o("button",{onClick:t[3]||(t[3]=d=>e.$router.push("/contact")),class:s([{active:a.route==="/contact"},"text-slate-200 hover:text-slate-50"])}," Contact ",2)]),g(v)],64)}const V=n(A,[["render",N],["__scopeId","data-v-e398246b"]]),B={data:()=>({})},F={style:{width:"100%","text-align":"center","box-sizing":"border-box",display:"inline-block"},class:"border-slate-300 border-t text-xs md:text-md sm:text-sm px-6 py-8 bg-gray-500"},H={class:"text-slate-200 pb-3"};function I(e,t,i,u,c,a){return l(),r("footer",F,[o("p",H," © All rights reserved - Your Company "+x(new Date().getUTCFullYear()),1)])}const D=n(B,[["render",I]]);export{D as F,V};