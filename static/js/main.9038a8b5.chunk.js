(this.webpackJsonpquick_mart_survey=this.webpackJsonpquick_mart_survey||[]).push([[0],{132:function(e,t,a){e.exports=a(144)},137:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=(a(137),a(9)),o=a(32),u=a(33),m=a(35),s=a(34),p=a(194),h=a(193),d=a(208),E=a(83),v=a(199),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{title:"Enter User Details"}),r.a.createElement("br",null),r.a.createElement(E.a,{align:"center",variant:"h6",gutterBottom:!0,component:"div"},"Quick Mart - Survey"),r.a.createElement(d.a,{placeholder:"Enter Your First Name",label:"First Name",onChange:a("firstName"),defaultValue:t.firstName,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(d.a,{placeholder:"Enter Your Last Name",label:"Last Name",onChange:a("lastName"),defaultValue:t.lastName,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(d.a,{placeholder:"Enter Your District",label:"District",onChange:a("district"),defaultValue:t.district,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{align:"center"},r.a.createElement(v.a,{color:"primary",variant:"contained",onClick:this.continue},"Continue"))))}}]),a}(n.Component),f=a(13),g=a(116),y=a(210),O=a(220),j=a(217),x=a(216),w=["children","value","index"];function S(e){var t=e.children,a=e.value,r=e.index,l=Object(g.a)(e,w);return n.createElement("div",Object.assign({role:"tabpanel",hidden:a!==r,id:"vertical-tabpanel-".concat(r),"aria-labelledby":"vertical-tab-".concat(r)},l),a===r&&n.createElement(x.a,{sx:{p:3}},n.createElement(j.a,null,t)))}function k(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function C(){var e=n.useState(0),t=Object(f.a)(e,2),a=t[0],r=t[1];return n.createElement(h.a,null,n.createElement(n.Fragment,null,n.createElement(x.a,{sx:{flexGrow:1,bgcolor:"background.paper",display:"flex",height:400}},n.createElement(y.a,{orientation:"vertical",variant:"scrollable",value:a,onChange:function(e,t){r(t)},"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"}},n.createElement(O.a,Object.assign({label:"Item One"},k(0))),n.createElement(O.a,Object.assign({label:"Item Two"},k(1))),n.createElement(O.a,Object.assign({label:"Item Three"},k(2))),n.createElement(O.a,Object.assign({label:"Item Four"},k(3))),n.createElement(O.a,Object.assign({label:"Item Five"},k(4))),n.createElement(O.a,Object.assign({label:"Item Six"},k(5))),n.createElement(O.a,Object.assign({label:"Item Seven"},k(6)))),n.createElement(S,{value:a,index:0},"Item One"),n.createElement(S,{value:a,index:1},"Item Two"),n.createElement(S,{value:a,index:2},"Item Three"),n.createElement(S,{value:a,index:3},"Item Four"),n.createElement(S,{value:a,index:4},"Item Five"),n.createElement(S,{value:a,index:5},"Item Six"),n.createElement(S,{value:a,index:6},"Item Seven"))))}var N=a(215),I=a(198),F=a(205),W=a(206),D=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,c=e.city,i=e.bio;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{open:!0,fullWidth:!0,maxWidth:"sm"},r.a.createElement(p.a,{title:"Confirm User Data"}),r.a.createElement(I.a,null,r.a.createElement(F.a,null,r.a.createElement(W.a,{primary:"First Name",secondary:t})),r.a.createElement(F.a,null,r.a.createElement(W.a,{primary:"Last Name",secondary:a})),r.a.createElement(F.a,null,r.a.createElement(W.a,{primary:"Email",secondary:n})),r.a.createElement(F.a,null,r.a.createElement(W.a,{primary:"Occupation",secondary:l})),r.a.createElement(F.a,null,r.a.createElement(W.a,{primary:"City",secondary:c})),r.a.createElement(F.a,null,r.a.createElement(W.a,{primary:"Bio",secondary:i}))),r.a.createElement("br",null),r.a.createElement(v.a,{color:"secondary",variant:"contained",onClick:this.back},"Back"),r.a.createElement(v.a,{color:"primary",variant:"contained",onClick:this.continue},"Confirm & Continue"))))}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{open:!0,fullWidth:!0,maxWidth:"sm"},r.a.createElement(p.a,{title:"Success"}),r.a.createElement("h1",null,"Thank You For Your Submission"),r.a.createElement("p",null,"You will get an email with further instructions."))))}}]),a}(n.Component),B=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(a){e.setState(Object(i.a)({},t,a.target.value))}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(b,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(C,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(D,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(A,null);default:console.log("This is a multi-step form built with React.")}}}]),a}(n.Component),L=a(115),T=a(10),Y=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Add Product")}}]),a}(n.Component),R=a(14),V=a(200),_=a(213),G=a(218),M=a(219),q=a(209),J=a(112),P=a.n(J),Q=a(113),U=a.n(Q),z=Object(R.a)("div")((function(e){var t=e.theme;return Object(i.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(V.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(V.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),$=Object(R.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),H=Object(R.a)(q.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(i.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function K(){return n.createElement(x.a,{sx:{flexGrow:1}},n.createElement(_.a,{position:"static"},n.createElement(G.a,null,n.createElement(M.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2}},n.createElement(P.a,null)),n.createElement(j.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}}},"Quick Mart - Survey"),n.createElement(z,null,n.createElement($,null,n.createElement(U.a,null)),n.createElement(H,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})))))}var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null),r.a.createElement(L.a,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",element:r.a.createElement(B,null)}),r.a.createElement(T.a,{path:"/admin",element:r.a.createElement(Y,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[132,1,2]]]);
//# sourceMappingURL=main.9038a8b5.chunk.js.map