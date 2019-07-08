(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(77)},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),i=a.n(r),o=a(41),c=a(20),l=a(16),m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"SET_TO_VISITED":return!0;default:return e}},u=Object(c.b)({visitationStatus:m}),h=(a(51),a(9)),d=a(10),p=a(12),f=a(11),v=a(13),b=a(17),g=a(1),y=a.n(g),E=a(3),w=function(e){this.canvas=e.canvas,this.ctx=e.ctx,this.particleColor=e.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*e.options.velocity,y:(Math.random()-.5)*e.options.velocity}};w.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},w.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=.7,this.ctx.arc(this.x,this.y,1.5,0,2*Math.PI),this.ctx.fill()};var x=function(e,t){this.canvasDiv=e,this.canvasDiv.size={width:this.canvasDiv.offsetWidth,height:this.canvasDiv.offsetHeight},t=void 0!==t?t:{},this.options={particleColor:void 0!==t.particleColor?t.particleColor:"#fff",background:void 0!==t.background?t.background:"#fff",interactive:void 0===t.interactive||t.interactive,velocity:this.setVelocity(t.velocity),density:this.setDensity(t.density)},this.init()};x.prototype.init=function(){if(this.bgDiv=document.createElement("div"),this.canvasDiv.appendChild(this.bgDiv),this.setStyles(this.bgDiv,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)?this.setStyles(this.bgDiv,{background:this.options.background}):/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background)&&this.setStyles(this.bgDiv,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"}),!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.canvasDiv.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvasDiv.size.width,this.canvas.height=this.canvasDiv.size.height,this.setStyles(this.canvasDiv,{position:"relative"}),this.setStyles(this.canvas,{"z-index":"20",position:"relative","background-color":"black"}),window.addEventListener("resize",function(){if(this.canvasDiv.offsetWidth===this.canvasDiv.size.width&&this.canvasDiv.offsetHeight===this.canvasDiv.size.height)return!1;this.canvas.width=this.canvasDiv.size.width=this.canvasDiv.offsetWidth,this.canvas.height=this.canvasDiv.size.height=this.canvasDiv.offsetHeight,clearTimeout(this.resetTimer),this.resetTimer=setTimeout(function(){this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new w(this));this.options.interactive&&this.particles.push(this.mouseParticle),requestAnimationFrame(this.update.bind(this))}.bind(this),500)}.bind(this)),this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new w(this));this.options.interactive&&(this.mouseParticle=new w(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle),this.canvas.addEventListener("mousemove",function(e){this.mouseParticle.x=e.clientX-this.canvas.offsetLeft,this.mouseParticle.y=e.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(e){this.mouseParticle.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.mouseParticle=new w(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle)}.bind(this))),requestAnimationFrame(this.update.bind(this))},x.prototype.update=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var e=0;e<this.particles.length;e++){this.particles[e].update(),this.particles[e].draw();for(var t=this.particles.length-1;t>e;t--){var a=Math.sqrt(Math.pow(this.particles[e].x-this.particles[t].x,2)+Math.pow(this.particles[e].y-this.particles[t].y,2));a>120||(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.particleColor,this.ctx.globalAlpha=(120-a)/120,this.ctx.lineWidth=.7,this.ctx.moveTo(this.particles[e].x,this.particles[e].y),this.ctx.lineTo(this.particles[t].x,this.particles[t].y),this.ctx.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},x.prototype.setVelocity=function(e){return"fast"===e?1:"slow"===e?.33:"none"===e?0:e||.66},x.prototype.setDensity=function(e){return"high"===e?5e3:"low"===e?2e4:isNaN(parseInt(e,10))?1e4:e},x.prototype.setStyles=function(e,t){for(var a in t)e.style[a]=t[a]};var N=x,k=(a(53),function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(r.findDOMNode)(this);new N(e,{density:1e4,velocity:.5})}},{key:"render",value:function(){var e=this.props,t=e.classes;e.id;return s.a.createElement("div",{className:t})}}]),t}(n.Component)),C=(a(54),a(55),function(e){var t=e.animate?"btn-group animate":"btn-group";console.log(t);var a=e.names.map(function(t,a){return s.a.createElement(l.b,{to:e.routes[a],key:a},s.a.createElement("button",{type:"button",className:"btn",key:a,onClick:e.click},t))});return s.a.createElement("div",{className:t,role:"group","aria-label":"buttons"},a)}),O=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={loadAnimation:!0},a.stopAnimation=Object(E.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({loadAnimation:!1});case 2:case"end":return e.stop()}},e)})),a.createCookie=function(e,t,a){var n;if(a){var s=new Date;s.setTime(s.getTime()+60*a*1e3),n="; expires="+s.toUTCString()}else n="";document.cookie="".concat(e,"=").concat(t).concat(n,"; path=/")},a.componentWillMount=function(){a.readCookie("animation-loaded")?a.setState({loadAnimation:!1}):(a.setState({loadAnimation:!0}),a.createCookie("animation-loaded","1",1))},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"readCookie",value:function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var s=a[n];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return null}},{key:"render",value:function(){console.log(this.state);var e=this.state.loadAnimation?"welcome-title-animate":"welcome-title";return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center align-items-center"},s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"col-2"},s.a.createElement(k,{id:"particles",classes:"particles-network"})),s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"row text-row justify-content-center align-items-center d-flex"},s.a.createElement("h1",{className:e},s.a.createElement("span",null,"C"),s.a.createElement("span",null,"o"),s.a.createElement("span",null,"m"),s.a.createElement("span",null,"p"),s.a.createElement("span",null,"u"),s.a.createElement("span",null,"t"),s.a.createElement("span",null,"e"),s.a.createElement("span",null,"r"),s.a.createElement("span",null," "),s.a.createElement("span",null,"S"),s.a.createElement("span",null,"c"),s.a.createElement("span",null,"i"),s.a.createElement("span",null,"e"),s.a.createElement("span",null,"n"),s.a.createElement("span",null,"c"),s.a.createElement("span",null,"e"),s.a.createElement("span",null," "),s.a.createElement("span",null,"O"),s.a.createElement("span",null,"r"),s.a.createElement("span",null,"i"),s.a.createElement("span",null,"e"),s.a.createElement("span",null,"n"),s.a.createElement("span",null,"t"),s.a.createElement("span",null,"a"),s.a.createElement("span",null,"t"),s.a.createElement("span",null,"i"),s.a.createElement("span",null,"o"),s.a.createElement("span",null,"n"),s.a.createElement("span",null," "),s.a.createElement("span",null,"2"),s.a.createElement("span",null,"0"),s.a.createElement("span",null,"1"),s.a.createElement("span",null,"9"),s.a.createElement("span",null,"!")),s.a.createElement(C,{names:["Register","Information"],routes:{0:"/register",1:"/information"},click:this.stopAnimation.bind(this),animate:this.state.loadAnimation}))),s.a.createElement("div",{className:"col-2"}))))}}]),t}(s.a.Component),P=a(18),S=a(15),j=a(40),A=a.n(j),M=function(e,t,a){return new Promise(function(n,s){return A.a[e.toLowerCase()](t,a).then(function(e){return n(e.data)}).catch(function(e){return console.log(e),s(e.response.data)})})},D=function(){var e=Object(E.a)(y.a.mark(function e(t){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("POST","http://localhost:4000/register",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),F=(a(74),function(e){var t,a=s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row d-flex justify-content-center"},s.a.createElement("div",{className:"col-2"},s.a.createElement(k,{id:"particles",classes:"particles-network"})),s.a.createElement("div",{className:"col-8 align-items-center d-flex"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"confirmation"},s.a.createElement("div",{className:"confirmation-instruction"},"Please review the information you have entered below. If anything is incorrect please return to the previous to page correct it."),s.a.createElement("div",{className:"text"},s.a.createElement("p",null,"Full name: ",e.info.name),s.a.createElement("p",null,"Email address: ",e.info.email),s.a.createElement("p",null,"Phone number: ",e.info.phone),s.a.createElement("p",null,"Shirt size:"," ".concat(e.info.shirt.charAt(0).toUpperCase()).concat(e.info.shirt.slice(1,e.info.shirt.length))),s.a.createElement("p",null,"Dietary restrictions: ",""===e.info.diet?"None":e.info.diet),s.a.createElement("p",null,"Accomodations: ",""===e.info.accom?"None":e.info.accom)),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-submit",onClick:e.register},"Confirm and register"),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-submit",onClick:e.back},"Return to registration page"))))),s.a.createElement("div",{className:"col-2"}))),n=s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row d-flex justify-content-center"},s.a.createElement("div",{className:"col-2"},s.a.createElement(k,{id:"particles",classes:"particles-network"})),s.a.createElement("div",{className:"col-8 align-items-center d-flex"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"success"},"Thank you for registering for the Computer Science Orientation. We have sent an email to you with regards to the next steps. To confirm your information and activate your spot for the orientation, please follow the instructions in your email. We want to ensure that you are the true owner of the email address given. Once again, thank you and we look forward to seeing you at the event in September!")))),s.a.createElement("div",{className:"col-2"}))),r=s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row d-flex justify-content-center"},s.a.createElement("div",{className:"col-2"},s.a.createElement(k,{id:"particles",classes:"particles-network"})),s.a.createElement("div",{className:"col-8 align-items-center d-flex"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"success"},"Thank you for registering for the Computer Science Orientation. Unfortunately, the email you used is already stored within our system, meaning that you might have registered already. If you believe that this is an error, please contact us at csorientation2019@gmail.com using the email you entered and describe this issue, mentioning this message. We will be happy to help you out!")))),s.a.createElement("div",{className:"col-2"})));return e.success.registered&&!e.success.problem?t=n:!e.success.registered&&e.success.problem&&"Email already exists"===e.success.problemMessage?t=r:e.success.registered||e.success.problem||(t=a),t}),T=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={info:{name:"",email:"",phone:"",shirt:"",diet:"",accom:""},submitted:!1,registered:!1,problem:!1,problemMessage:""},a.register=Object(E.a)(y.a.mark(function e(){var t,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=""!==a.state.info.diet&&""!==a.state.info.accom?a.state.info:""===a.state.info.diet&&""!==a.state.info.accom?Object(S.a)({},a.state.info,{diet:"None"}):""===a.state.info.accom&&""!==a.state.info.diet?Object(S.a)({},a.state.info,{accom:"None"}):Object(S.a)({},a.state.info,{diet:"None",accom:"None"}),e.next=3,D(t);case 3:if(n=e.sent,console.log("resp",n),"Registration email sent successfully!"!==n){e.next=10;break}return e.next=8,a.setState({registered:!0,problem:!1,problemMessage:""});case 8:e.next=13;break;case 10:if("Email already exists"!==n){e.next=13;break}return e.next=13,a.setState({registered:!1,problem:!0,problemMessage:n});case 13:case"end":return e.stop()}},e)})),a.handleChange=function(){var e=Object(E.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({info:Object(S.a)({},a.state.info,Object(P.a)({},t.target.name,t.target.value))});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.setSubmittedTrue=function(){a.setState({submitted:!0})},a.setSubmittedFalse=function(){a.setState({submitted:!1})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row d-flex justify-content-center"},s.a.createElement("div",{className:"col-2"},s.a.createElement(k,{id:"particles",classes:"particles-network"})),s.a.createElement("div",{className:"col-8 align-items-center d-flex"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("form",{onSubmit:this.setSubmittedTrue.bind(this)},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"name-field"},"Full name"),s.a.createElement("input",{type:"name",name:"name",value:this.state.info.name,onChange:this.handleChange,className:"form-control",id:"name-field",placeholder:"Your full name..."})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email-field"},"Email address"),s.a.createElement("input",{type:"email",name:"email",value:this.state.info.email,onChange:this.handleChange.bind(this),className:"form-control",id:"email-field",placeholder:"Your email address..."})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"phone-field"},"Phone number"),s.a.createElement("input",{type:"phone",name:"phone",value:this.state.info.phone,onChange:this.handleChange.bind(this),className:"form-control",id:"phone-field",placeholder:"Your phone number..."})),s.a.createElement("div",{className:"form-check-label"},s.a.createElement("label",{htmlFor:"shirt-size"},"Shirt size")),s.a.createElement("div",{className:"form-check",id:"shirt-size"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"shirt",onChange:this.handleChange.bind(this),id:"xs",value:"xtra-small"}),s.a.createElement("label",{className:"form-check-label",htmlFor:"xs"},"XS")),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"shirt",onChange:this.handleChange.bind(this),id:"sm",value:"small"}),s.a.createElement("label",{className:"form-check-label",htmlFor:"sm"},"S")),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"shirt",onChange:this.handleChange.bind(this),id:"md",value:"medium"}),s.a.createElement("label",{className:"form-check-label",htmlFor:"md"},"M")),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"shirt",onChange:this.handleChange.bind(this),id:"lg",value:"large"}),s.a.createElement("label",{className:"form-check-label",htmlFor:"lg"},"L")),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"shirt",onChange:this.handleChange.bind(this),id:"xl",value:"xtra-large"}),s.a.createElement("label",{className:"form-check-label",htmlFor:"xl"},"XL")),s.a.createElement("p",null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"food"},"Dietary restrictions"),s.a.createElement("textarea",{className:"form-control",id:"food",name:"diet",value:this.state.info.diet,onChange:this.handleChange.bind(this),rows:"3",placeholder:"Please inform us of any dietary  restrictions including allergies..."})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"accom"},"Accomodations"),s.a.createElement("textarea",{className:"form-control",id:"accom",name:"accom",value:this.state.info.accom,onChange:this.handleChange.bind(this),rows:"3",placeholder:"Please inform us of any accomodations you  will require..."}))),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-submit",onClick:this.setSubmittedTrue.bind(this)},"Submit")))),s.a.createElement("div",{className:"col-2"}))),t=s.a.createElement(F,{register:this.register.bind(this),back:this.setSubmittedFalse,info:this.state.info,success:{registered:this.state.registered,problem:this.state.problem,problemMessage:this.state.problemMessage}});return this.state.submitted?t:e}}]),t}(s.a.Component),z=(a(75),function(){var e=Object(E.a)(y.a.mark(function e(t){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("POST","https://frozen-brushlands-54091.herokuapp.com/activate",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),Y=function(){var e=Object(E.a)(y.a.mark(function e(t){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("POST","https://frozen-brushlands-54091.herokuapp.com/createPassword",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),L=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={info:{email:"",code:""},problem:!1,problemMessage:"",activated:!1,password:{newPassword:"",confirmPassword:""},passwordCreated:!1,passwordProblem:!1,passwordProblemMessage:"",passwordLoading:!1},a.handleActivationChange=function(){var e=Object(E.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({info:Object(S.a)({},a.state.info,Object(P.a)({},t.target.name,t.target.value))});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handlePasswordChange=function(){var e=Object(E.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({password:Object(S.a)({},a.state.password,Object(P.a)({},t.target.name,t.target.value))});case 2:console.log(a.state.password);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.activateAccount=function(){var e=Object(E.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.state.activated){e.next=34;break}if(""!==a.state.info.email&&""!==a.state.info.code){e.next=7;break}return e.next=5,a.setState({problem:!0,problemMessage:"Neither of the fields can be empty on submission. Please fill both fields."});case 5:e.next=34;break;case 7:return e.next=9,z(a.state.info);case 9:if(n=e.sent,console.log(n),"Success"!==n){e.next=16;break}return e.next=14,a.setState({problem:!1,problemMessage:"",activated:!0});case 14:e.next=34;break;case 16:if("Incorrect code"!==n){e.next=21;break}return e.next=19,a.setState({problem:!0,problemMessage:"The email and activation code combination doesn't match what we have on file. Please try again. If you believe that this is a mistake, please contact us at csorientation2019@gmail.com."});case 19:e.next=34;break;case 21:if("Expired code"!==n){e.next=26;break}return e.next=24,a.setState({problem:!0,problemMessage:"The activation code you entered has expired. Please re-register to get a new code."});case 24:e.next=34;break;case 26:if("Email not registered!"!==n){e.next=31;break}return e.next=29,a.setState({problem:!0,problemMessage:"The email you entered has not been registered. Please register before activating your account. If you believe that this is a mistake, please contact us at csorientation2019@gmail.com"});case 29:e.next=34;break;case 31:if("Account already created with code"!==n){e.next=34;break}return e.next=34,a.setState({problem:!0,problemMessage:"The code you used has already been used to activate an account with the email you entered. This means you already have an account, please log in with your email and password. If you believe that this is a mistake, please contact us at csorientation2019@gmail.com immediately!"});case 34:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.createAccount=function(){var e=Object(E.a)(y.a.mark(function e(t){var n,s,r,i,o,c,l,m;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.state.passwordCreated){e.next=42;break}if(!(a.state.password.newPassword.length<8||a.state.password.newPassword.length>30)){e.next=7;break}return e.next=5,a.setState({passwordProblem:!0,passwordProblemMessage:"Your password needs to be 8-30 characters in length. Your password is currently ".concat(a.state.password.newPassword.length," characters long.")});case 5:e.next=42;break;case 7:n=a.state.password.newPassword.split(""),s=!1,r=!1,i=!1,o=!1,c="/^[!@#$%^&*()_+-=[]{};':\"\\|,.<>/?]*$/",l=0;case 14:if(!(l<n.length)){e.next=21;break}if(isNaN(1*n[l])?c.includes(n[l])?o=!0:n[l]===n[l].toLowerCase()?r=!0:n[l]===n[l].toUpperCase()&&(s=!0):i=!0,!(s&&r&&i&&o)){e.next=18;break}return e.abrupt("break",21);case 18:l++,e.next=14;break;case 21:if(s&&r&&i&&o){e.next=26;break}return e.next=24,a.setState({passwordProblem:!0,passwordProblemMessage:"Your password needs to have at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol. Please ensure you have satisfied this requirement."});case 24:e.next=42;break;case 26:if(a.state.password.newPassword===a.state.password.confirmPassword){e.next=31;break}return e.next=29,a.setState({passwordProblem:!0,passwordProblemMessage:"The 2 passwords you entered do not match. Please try again."});case 29:e.next=42;break;case 31:return m=Object(S.a)({},a.state.info,{password:a.state.password.newPassword}),a.setState({passwordLoading:!0}),e.next=35,Y(m);case 35:if("Success"!==e.sent){e.next=41;break}return e.next=39,a.setState({passwordCreated:!0,passwordLoading:!1});case 39:e.next=42;break;case 41:a.setState({passwordLoading:!1});case 42:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=s.a.createElement("div",{className:"alert alert-danger alert-left",role:"alert"},this.state.problemMessage),a=s.a.createElement("div",{className:"alert alert-danger alert-left",role:"alert"},this.state.passwordProblemMessage),n=s.a.createElement("div",null,s.a.createElement("h1",{className:"activation-instructions"},"Before we create your account, please enter the information required below."),s.a.createElement("form",{className:"activation-form",onSubmit:this.activateAccount.bind(this)},this.state.problem?t:null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"activate-email"},"Email address: please enter the email you used to register for the orientation"),s.a.createElement("input",{type:"email",name:"email",value:this.state.info.email,onChange:this.handleActivationChange.bind(this),className:"form-control form-font-size",id:"activate-email","aria-describedby":"activate-email",placeholder:"Your email..."})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"activation-code"},"Activation code: please enter the activation code given to you via email. If you do not have such activation code, please register first!"),s.a.createElement("input",{type:"password",name:"code",value:this.state.info.code,onChange:this.handleActivationChange.bind(this),className:"form-control form-font-size",id:"activation-code",placeholder:"Your activation code..."})),s.a.createElement("button",{type:"submit",className:"btn btn-primary btn-submit"},"Submit"))),r=s.a.createElement("div",null,s.a.createElement("h1",{className:"activation-instructions"},"Before we create your account, please enter the information required below."),s.a.createElement("form",{className:"activation-form",onSubmit:this.createAccount.bind(this)},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"activate-email"},"Email address"),s.a.createElement("input",{type:"email",name:"email",value:this.state.info.email,readOnly:!0,className:"form-control form-font-size",id:"activate-email","aria-describedby":"activate-email",placeholder:"Your email..."})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"activation-code"},"Activation code"),s.a.createElement("input",{type:"password",name:"code",value:this.state.info.code,readOnly:!0,className:"form-control form-font-size",id:"activation-code",placeholder:"Your activation code..."})),this.state.passwordProblem?a:s.a.createElement("div",{className:"alert alert-success alert-left",role:"alert"},"You have successfully authenticated. Please create your account by entering in your password below to activate your registration. Your password must be 8-30 characters long, and needs to have at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol."),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"new-password"},"Password: please enter your new password to create your account."),s.a.createElement("input",{type:"password",name:"newPassword",value:this.state.password.newPassword,onChange:this.handlePasswordChange.bind(this),className:"form-control form-font-size",id:"new-password","aria-describedby":"new-password",placeholder:"Your new password..."})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"confirm-password"},"Confirm password: please re-enter the password you gave above to confirm."),s.a.createElement("input",{type:"password",name:"confirmPassword",value:this.state.password.confirmPassword,onChange:this.handlePasswordChange.bind(this),className:"form-control form-font-size",id:"confirm-password",placeholder:"Re-enter your password..."})),s.a.createElement("button",{type:"submit",className:"btn btn-primary btn-submit"},"Submit"))),i=s.a.createElement("h1",{className:"account-created"},"Your account has been created successfully!");return e=this.state.passwordLoading?s.a.createElement("div",{className:"spinner-border",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")):this.state.passwordCreated?i:r,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row d-flex justify-content-center"},s.a.createElement("div",{className:"col-2"},s.a.createElement(k,{id:"particles",classes:"particles-network"})),s.a.createElement("div",{className:"col-8 align-items-center d-flex"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},this.state.activated?e:n))),s.a.createElement("div",{className:"col-2"})))}}]),t}(s.a.Component),I=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b.c,null,s.a.createElement(b.a,{exact:!0,path:"/",render:function(){return s.a.createElement(O,null)}}),s.a.createElement(b.a,{exact:!0,path:"/register",render:function(){return s.a.createElement(T,null)}}),s.a.createElement(b.a,{exact:!0,path:"/activate",render:function(){return s.a.createElement(L,null)}})))},W=(a(76),function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(l.a,null,s.a.createElement(I,null))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=Object(c.c)(u);i.a.render(s.a.createElement(o.a,{store:q},s.a.createElement(l.a,null),s.a.createElement(W,null),s.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.0d313c87.chunk.js.map