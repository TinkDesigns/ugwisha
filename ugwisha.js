/* Approved by the sheep */
(()=>{const{parseEvents:e,getSchedule:t,getNote:n,saveScheduleData:s,prepareScheduleData:o,SCHEDULE_DATA_KEY:a,SCHEDULES_CALENDAR_ID:i,EVENTS_CALENDAR_ID:r,CALENDAR_KEYWORDS:d,GOOGLE_API_KEY:c,FIRST_DAY:l,LAST_DAY:u,DEFAULT_NAMES:p,DEFAULT_COLOURS:m,THEME_COLOUR:h,DEFAULT_FAVICON_URL:g,APP_NAME:v,PERIOD_OPTION_PREFIX:f,UPDATER_URL:w}=window.ugwishaOptions,y=[],E=[e=>window.isOnline=e],L={};window.UgwishaEvents={connection:new Promise(e=>E.push(e)),status:[]},window.Ugwisha={version:"dev"};try{window.storage=localStorage}catch(e){window.storage={getItem:e=>storage[e],setItem:(e,t)=>storage[e]=t,removeItem:e=>delete storage[e]}}try{window.options=JSON.parse(storage.getItem("[ugwisha] options")),"object"==typeof window.options&&null!==window.options||(window.options={})}catch(e){window.options={}}function k(){storage.setItem("[ugwisha] options",JSON.stringify(window.options))}window.options.save=k;const b={};window.location.search&&window.location.search.slice(1).split("&").forEach(e=>{const t=e.indexOf("=");~t?b[e.slice(0,t)]=e.slice(t+1):b[e]=!0});const C=["January","February","March","April","May","June","July","August","September","October","November","December"],T=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let I,x,D,S;function N(){!function(e){P(q),G=K=null,e.alternate&&q.appendChild(B("p",{className:"alternate-note"},["This is an alternate schedule."]));if(e.noSchool)return void q.appendChild(B("div",{className:"no-school",style:{backgroundImage:`url('./images/sheep/${function(e){const t=e/864e5%2==0,n=+e.toString(7)[9];return V[(t?0:7)+n]}(M().getTime())}')`}},[B("span",{},["No school!"])]));const t={};q.appendChild(R(e.map(e=>{const s=B("input",{className:"period-name",type:"text",placeholder:p[e.period],value:H(e.period),onchange(){Y(e.period,s.value),k(),de(),t[e.period].inputs.forEach(e=>e!==s&&(e.value=s.value))},onfocus(){if(K!==a){if(G){const e=G;j(e,!1),e.classList.add("disappear"),e.addEventListener("transitionend",()=>{e.parentNode.removeChild(e)},{once:!0})}G=function(e,t="00BCD4",n=!0,s="009688"){let o,a,i,r,d=_e(He(t||s));function c(t={}){const s=t.hex||Ye($e(d));o.value="#"+s,"initial"!==t.type&&e(n&&a.checked?null:s),i.style.backgroundColor=`hsl(${d.h}, 100%, 50%)`,i.style.setProperty("--x",100*d.s+"%"),i.style.setProperty("--y",100*(1-d.v)+"%"),r.style.backgroundImage=`linear-gradient(to bottom, ${Xe.map(e=>(function({r:e,g:t,b:n}){return`rgb(${e}, ${t}, ${n})`})($e({h:e,s:d.s,v:d.v}))).join(",")})`,r.style.setProperty("--val",d.h/360*100+"%")}const l=B("div",{className:"colour-picker picker"},[o=B("input",{className:"colour-input select-input",type:"text",placeholder:"#123ABC",onchange(){const e=function(e){const t=We.exec(e.toLowerCase());return t?t[1]?t[1]:t.slice(2,5).map(e=>e+e).join(""):null}(o.value);e?(d=_e(He(e)),n&&a.checked&&(a.checked=!1),c({type:"hex-input",hex:e})):o.value="#"+Ye($e(d))}}),B("div",{className:"colour-boxes-wrapper"},[i=B("div",{className:"colour-box"}),r=B("div",{className:"colour-slider"})]),n?B("label",{className:"colour-transparent-label"},[a=B("input",{className:"colour-transparent-checkbox",type:"checkbox",onchange:c}),"Transparent?"]):null]);n&&null===t&&(a.checked=!0);return qe(i,(e,t)=>{d.s=Je(e),d.v=1-Je(t),n&&a.checked&&(a.checked=!1),c({type:"square"})}),qe(r,(e,t)=>{d.h=360*Je(t),n&&a.checked&&(a.checked=!1),c({type:"hue"})}),c({type:"initial",hex:t||s}),l}(n=>{X(e.period,n),k(),de(),t[e.period].cards.forEach(e=>{null===n?(e.classList.add("transparent"),e.classList.remove("dark-text"),e.style.setProperty("--colour",null)):(e.classList.remove("transparent"),e.style.setProperty("--colour","#"+n),z(n)?e.classList.add("dark-text"):e.classList.remove("dark-text"))})},W(e.period),!0,m[e.period]||"000000"),s.parentNode.insertBefore(G,s.nextElementSibling),K=a}}}),o=n(e),a=B("div",{className:["period",null===W(e.period)?"transparent":z(W(e.period))?"dark-text":null],style:{"--colour":W(e.period)&&"#"+W(e.period)}},[s,B("span",{className:"time-duration"},[B("span",{className:"time",innerHTML:$(e.start)+" &ndash; "+$(e.end)}),B("span",{className:"duration"},[e.end-e.start+" min"]),o?B("span",{className:"note",innerHTML:o}):null])]);return t[e.period]||(t[e.period]={inputs:[],cards:[]}),t[e.period].inputs.push(s),t[e.period].cards.push(a),a})))}(t(A));const e=A.getUTCDay(),s=[];for(let n=0;n<7;n++)s.push(t(new Date(A.getTime()-864e5*(e-n))));var o,a;o=s,a=e,J.forEach((e,t)=>{a===t?e.wrapper.classList.add("week-preview-today"):e.wrapper.classList.remove("week-preview-today"),P(e.content);const n=o[t];n.alternate?e.wrapper.classList.add("week-preview-is-alternate"):e.wrapper.classList.remove("week-preview-is-alternate"),e.date=n.date,e.content.appendChild(R(n.noSchool?[]:n.map(e=>B("span",{className:["week-preview-cell","week-preview-period",null===W(e.period)?"week-preview-transparent":null],title:H(e.period),"aria-label":H(e.period),style:{backgroundColor:W(e.period)&&"#"+W(e.period)}}))))})}function U(){N(),S.innerHTML=C[A.getUTCMonth()]+" "+A.getUTCDate(),I.innerHTML=T[A.getUTCDay()];const e=A.getTime();x.disabled=e<=l,D.disabled=e>=u,I.href=(b["no-sw"]?"?no-sw&":"?")+"day="+A.toISOString().slice(0,10),we()}let A=b.day?new Date(b.day):M();function M(){return new Date(Date.UTC(...(e=>[e.getFullYear(),e.getMonth(),e.getDate()])(new Date)))}function O(e){return Array.isArray(e)?e.filter(e=>void 0!==e&&null!==e&&!1!==e):(Object.keys(e).forEach(t=>(void 0===e[t]||null===e[t]||!1===e[t])&&delete e[t]),e)}function B(e,t={},n=[]){const s=document.createElement(e);return Object.keys(O(t)).forEach(e=>{const n=t[e];if("data"===e)Object.keys(O(n)).forEach(e=>{s.dataset[e]=n[e]});else if("style"===e)Object.keys(O(n)).forEach(e=>{"--"===e.slice(0,2)?s.style.setProperty(e,n[e]):s.style[e]=n[e]});else if("ripple"===e)Fe(s);else if("on"===e.slice(0,2))s.addEventListener(e.slice(2),n);else{const t=Array.isArray(n)?O(n).join(" "):n.toString();void 0!==s[e]?s[e]=t:s.setAttribute(e,t)}}),Array.isArray(n)||(n=[n]),O(n).forEach(e=>{s.appendChild("object"!=typeof e?document.createTextNode(e):e)}),s}function R(e){const t=document.createDocumentFragment();return O(e).forEach(e=>t.appendChild(e)),t}function P(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function j(e,t=!0){e.querySelectorAll("a, input, button, select").forEach(e=>{e.tabIndex=t?0:-1})}document.addEventListener("DOMContentLoaded",()=>{S=document.getElementById("select-date"),I=document.getElementById("weekday"),x=document.getElementById("back-day"),D=document.getElementById("forth-day");const e=Array.from(document.getElementsByClassName("toggle-setting"));e.forEach(e=>{const t=e.dataset.option;void 0===options[t]&&(options[t]="true"===e.dataset.default)}),y.forEach(e=>e()),UgwishaExtensions.start();let t=!1;document.addEventListener("keydown",e=>{9!==e.keyCode&&13!==e.keyCode||(document.body.classList.add("tab-focus"),t=!0)}),document.addEventListener("keyup",e=>{9!==e.keyCode&&13!==e.keyCode||(t=!1)}),document.addEventListener("focusin",()=>{t||document.body.classList.remove("tab-focus")});const n=document.getElementById("psa"),s=document.getElementById("psa-content"),o=document.getElementById("psa-close"),a=document.getElementById("psa-btn"),i=/<!--\s*#(\d+)((?:\|[a-z0-9\-_=\.]*)*)\s*-->/gi;let r=!1;fetch("./psa.html?v="+Date.now()).then(e=>e.text()).then(e=>{s.innerHTML=e;const[,t,d]=i.exec(e),c={};d.split("|").forEach(e=>{if(e){const[t,n]=e.split("=");c[t]=n||!0}}),options.lastPSA&&options.lastPSA!==t&&(!c.HIDE_B4||+c.HIDE_B4<=Ugwisha.version||"dev"===Ugwisha.version)&&(n.classList.remove("hidden"),o.focus(),document.body.style.overflow="hidden"),options.lastPSA||(options.lastPSA=t,k()),o.addEventListener("click",()=>{r=!0,n.classList.add("disappear"),options.lastPSA!==t&&(options.lastPSA=t,k(),!Ie&&c.REFETCH&&(Ie=!0,ke().then(N))),a.focus(),document.body.style.overflow=null}),n.addEventListener("click",e=>{e.target===n&&o.click()}),n.addEventListener("keydown",e=>{27===e.keyCode&&o.click()}),n.addEventListener("transitionend",()=>{r&&n.classList.add("hidden")}),E.forEach(e=>e(!0))}).catch(()=>{document.getElementById("offline-msg").classList.remove("hidden");const e=document.getElementById("reload");e.tabIndex=0,e.addEventListener("click",e=>{window.location.reload(),e.preventDefault()}),a.disabled=!0,E.forEach(e=>e(!1))});let d=window.innerWidth,c=window.innerHeight;window.addEventListener("resize",()=>{d=window.innerWidth,c=window.innerHeight});const l=document.getElementById("jump");let u=!1;document.addEventListener("wheel",()=>{window.cancelAnimationFrame(u),u=!1},{passive:!0}),document.addEventListener("touchstart",()=>{window.cancelAnimationFrame(u),u=!1},{passive:!0}),document.addEventListener("scroll",()=>{window.scrollY>c/3?l.classList.add("up"):l.classList.remove("up")}),l.addEventListener("click",()=>{u&&window.cancelAnimationFrame(u),function(e){let t=window.scrollY;!function n(){Math.abs(t-e)>1?(t+=(e-t)/5,window.scrollTo(0,t),u=window.requestAnimationFrame(n)):(window.scrollTo(0,e),u=!1)}()}(l.classList.contains("up")?0:c-50)});let p=null,m=null;document.getElementById("tabs").addEventListener("click",e=>{if(e.target.dataset.for){let t=p;p&&(p.classList.remove("selected"),m.classList.remove("show"),p=null,m=null),t!==e.target&&("psa"===e.target.dataset.for?(r=!1,n.classList.remove("hidden"),n.classList.remove("disappear"),o.focus(),document.body.style.overflow="hidden"):(p=e.target,m=document.getElementById(e.target.dataset.for),e.target.classList.add("selected"),m.classList.add("show")))}});const h=document.getElementById("events-wrapper"),g={metricTime(){N(),de()},showSELF(){N(),re=null,de()},showEvents(e){e&&we(),h.style.display=e?null:"none"}};e.forEach(e=>{const t=e.dataset.option;e.checked=options[t];const n=g[t]||L[t];e.addEventListener("change",()=>{options[t]=e.checked,n&&n(e.checked),k()})}),options.showEvents||(h.style.display="none"),I.addEventListener("click",e=>{window.history.pushState({},"",I.href),e.preventDefault()}),x.addEventListener("click",()=>{A=new Date(A.getTime()-864e5),U()}),D.addEventListener("click",()=>{A=new Date(A.getTime()+864e5),U()}),document.getElementById("today").addEventListener("click",()=>{A=M(),U(),Be()});const v=document.getElementById("content"),f=document.getElementById("drag-handle");function w(e){const t="m"===e.type[0]?e:e.changedTouches[0];options.sidebarWidth=Math.max(250,Math.min(700,d-200,t.clientX-100)),v.style.setProperty("--custom-width",(options.sidebarWidth||250)+"px"),e.preventDefault()}function b(e){document.removeEventListener("mouseup"===e.type?"mousemove":"touchmove",w),document.removeEventListener(e.type,b),e.preventDefault(),k()}f.addEventListener("mousedown",e=>{document.addEventListener("mousemove",w),document.addEventListener("mouseup",b),e.preventDefault()}),f.addEventListener("touchstart",e=>{document.addEventListener("touchmove",w,{passive:!1}),document.addEventListener("touchend",b,{passive:!1}),e.preventDefault()},{passive:!1}),v.style.setProperty("--custom-width",(options.sidebarWidth||250)+"px")},{once:!0}),"serviceWorker"in navigator&&(b["no-sw"]||b["reset-sw"]?navigator.serviceWorker.getRegistrations().then(e=>{Promise.all(e.map(e=>e.unregister())).then(()=>{b["reset-sw"]?window.location=w:e.length&&window.location.reload()})}).catch(()=>void 0):window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&navigator.serviceWorker.controller&&(options.natureLoaded=!1,window.location.replace(w))})})},()=>{}),navigator.serviceWorker.addEventListener("message",({data:e})=>{e.type})},{once:!0})),window.Elem=B,window.Fragment=R,window.empty=P;const F=32;function $(e,t=!1){const n=Math.floor(e/60),s=("0"+e%60).slice(-2);let o=options.metricTime?`${n}:${s}`:`${(n+11)%12+1}:${s}`;return options.metricTime||t?o:`${o} ${n<12?"a":"p"}m`}function _(e,t=!1,n=!1){return t?(n&&e<60?"":Math.floor(e/60))+":"+("0"+e%60).slice(-2):e+" minute"+(1===e?"":"s")}function H(e){return options["periodName_"+f+e]}function Y(e,t){return options["periodName_"+f+e]=t}function W(e){return options["periodColour_"+f+e]}function X(e,t){return options["periodColour_"+f+e]=t}let q,J;Ugwisha.formatTime=$,Ugwisha.formatDuration=_,Ugwisha.getPdName=H,Ugwisha.getPdColour=W;const V=["left-sheep-curious.svg","left-sheep-running-sad-D.svg","left-sheep-standing-blowing-caterpillars.svg","right-sheep-D-mouth.svg","right-sheep-fishing.svg","right-sheep-hot-air-balloon.svg","right-sheep-sleeping.svg","standing-sheep-arms-out.svg","standing-sheep-classy.svg","standing-sheep-doing-ballet.svg","standing-sheep-flowers.svg","standing-sheep-hungry.svg","two-sheep-ice-cream.svg","two-sheep-stack.svg"];function z(e){const[t,n,s]=[e.slice(0,2),e.slice(2,4),e.slice(4)].map(e=>(e=parseInt(e,16)/255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4));return.2126*t+.7152*n+.0722*s>.179}let G,K;document.addEventListener("click",e=>{if(G&&!K.contains(e.target)){const e=G;j(e,!1),e.classList.add("disappear"),e.addEventListener("transitionend",()=>{e.parentNode.removeChild(e)},{once:!0}),G=K=null}});const Q=["S","M","T","W","&Theta;","F","S"];const Z=(new Date).getTimezoneOffset();const ee=B("canvas",{width:F,height:F}),te=ee.getContext("2d");let ne,se,oe,ae,ie,re;function de(e=!1,n=0){const s=Date.now();if(e&&s<n)return setTimeout(()=>de(!0,n),Math.min(n-s,1e3));const o=M(),a=o.toISOString().slice(0,10);re!==a&&(re=a,(ie=t(o)).noSchool&&(oe.style.opacity=0,ae.setAttribute("href",g),document.title=v));const i=function(e,t=0){const n=Date.now()+t,s=Math.floor((n/6e4-Z)%1440),o=n+6e4-n%6e4;if(e.noSchool)return{type:"time",value:s,nextMinute:o};const a=e.find(e=>e.end>s),i={secondCounter:null,nextMinute:o};if(a)i.period=a,a.start>s?(i.type="until",i.value=a.start-s):(i.type="left in",i.value=a.end-s,i.progress=(s-a.start)/(a.end-a.start)),i.value<=1&&(i.secondCounter=(()=>{const e=Date.now()+t;return{secondsLeft:60-e/1e3%60,stop:Math.floor((e/6e4-Z)%1440)>=(a.start>s?a.start:a.end)}}));else{const t=e[e.length-1];i.period=t,i.type="since",i.value=s-t.end}return i}(ie);if(ie.noSchool)ne.textContent=$(i.value,!0),se.textContent="";else{if("left in"===i.type?(oe.style.opacity=1,oe.style.setProperty("--progress",100*i.progress+"%")):oe.style.opacity=0,se.innerHTML=i.type+" "+function(e){const t=W(e);let n='<span class="period-chip';return null===t&&(n+=" transparent"),null!==t&&z(t)&&(n+=" dark-text"),n+='"',null!==t&&(n+=` style="--colour: #${t};"`),n+=`>${H(e)}</span>`}(i.period.period),"since"===i.type)ne.textContent=_(i.value,!0),ae.setAttribute("href",g),document.title=v;else if(function(e){te.clearRect(0,0,F,F),te.font="100px 'Roboto Condensed', sans-serif";const{width:t}=te.measureText(e),n=F/(t/100);te.fillStyle=h,te.fillRect(0,(F-1.2*n)/2,F,n),te.font=`${n}px 'Roboto Condensed', sans-serif`,te.fillStyle="white",te.fillText(e,F/2,F/2),ae.setAttribute("href",ee.toDataURL())}(_(i.value,!0,!0)),e&&i.secondCounter){!function t(){const{secondsLeft:n,stop:s}=i.secondCounter();if(!s){const e=Math.round(100*n)/100+"";document.title=(ne.textContent=e+(e.includes(".")?"0".repeat(3-e.length+e.indexOf(".")):".00")+"s")+" "+i.type+" "+H(i.period.period)+" - "+v}window.requestAnimationFrame(e&&!s?t:de)}()}else document.title=(ne.textContent=_(i.value,!0))+" "+i.type+" "+H(i.period.period)+" - "+v;e&&UgwishaEvents.status.forEach(e=>e(i,s))}e&&setTimeout(()=>de(!0,i.nextMinute),Math.min(i.nextMinute-s,1e3))}function ce(e){return Math.floor(Math.random()*e)}function le(e){if(!document.body)return;const t=B("div",{className:"transition-background"});t.style.backgroundImage=document.body.style.backgroundImage;const n=setTimeout(()=>{document.body.removeChild(t)},1e3*options.backgroundFade);t.addEventListener("animationend",()=>{document.body.removeChild(t),clearTimeout(n)}),document.body.insertBefore(t,document.body.firstChild),document.body.style.backgroundImage=e}y.push(()=>{q=document.getElementById("periods"),Object.keys(p).forEach(e=>{void 0===H(e)&&Y(e,p[e])}),Object.keys(m).forEach(e=>{void 0===W(e)&&X(e,m[e])}),ne=document.getElementById("preview-time"),se=document.getElementById("preview-msg"),oe=document.getElementById("progress"),ae=document.getElementById("favicon"),te.textAlign="center",te.textBaseline="middle",J=[];for(let e=0;e<7;e++){const t={};t.wrapper=B("div",{className:"week-preview-col",tabindex:0,onclick(){A=t.date,U()},onkeydown(e){13===e.keyCode&&this.click()}},[B("span",{className:"week-preview-cell week-preview-alternate",title:"Alternate schedule","aria-label":"This is an alternate schedule"},["*"]),B("span",{className:"week-preview-cell week-preview-day-heading",innerHTML:Q[e],title:T[e],"aria-label":T[e]}),t.content=B("div")]),J.push(t)}document.getElementById("week-preview").appendChild(R(J.map(({wrapper:e})=>e)));let e=null;q.addEventListener("touchstart",t=>{if(!e&&options.allowSliding){const n=t.changedTouches[0];e={id:n.identifier,startX:n.clientX,slide:!1}}}),q.addEventListener("touchmove",t=>{if(e){const n=Array.from(t.touches).find(t=>t.identifier===e.id);if(n){const t=n.clientX-e.startX;e.slide||Math.abs(t)>30&&(e.slide=!0),e.slide&&(q.style.transform=`translateX(${t/5}px)`,q.style.opacity=Math.abs(t)>60?.5:null)}}}),q.addEventListener("touchend",t=>{if(e){const n=Array.from(t.changedTouches).find(t=>t.identifier===e.id);if(n){const t=n.clientX-e.startX;t>60?x.click():t<-60&&D.click()}q.style.transform=null,q.style.opacity=null,e=null}})});let ue=null;function pe(){ue&&clearInterval(ue),ue=options.randomGradients?setTimeout(pe,1e3*options.backgroundLoop):null,le(function(){const e=[ce(256),ce(256),ce(256)],t=[ce(256),ce(256),ce(256)];return`linear-gradient(${360*Math.random()}deg, rgb(${e.join(",")}), rgb(${t.join(",")}))`}())}options.backgroundLoop||(options.backgroundLoop=options.quickTransitions?5:10),options.backgroundFade||(options.backgroundFade=options.quickTransitions?.5:5);let me=!1;window.Ugwisha.requestBackgroundControl=(()=>me?null:(me=!0,clearTimeout(ue),ue=!0,le)),window.Ugwisha.relinquishBackgroundControl=(e=>{if(e!==le)throw new Error("Fake");me=!1,pe()}),y.push(()=>{document.body.style.setProperty("--background-transition-speed",options.backgroundFade+"s"),me||pe()});const he={},ge="https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(r)+"/events?singleEvents=true&fields="+encodeURIComponent("items(description,end(date,dateTime),location,start(date,dateTime),summary)")+"&key="+c;function ve(e){return 60*e.getHours()+e.getMinutes()}function fe(e,t=0){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()+t)}async function we(){if(options.showEvents){const n=A.toISOString().slice(0,10);if(Ce.innerHTML='<span class="events-message">Loading...</span>',!he[n]){const{items:t}=await fetch(`${ge}&timeMin=${encodeURIComponent(fe(A).toISOString())}&timeMax=${encodeURIComponent(fe(A,1).toISOString())}`).then(e=>e.json()).catch(()=>(Ce.innerHTML='<span class="events-message">Unable to fetch events.</span>',{items:null}));if(!t)return;he[n]=t,e(be({items:t}),A)&&(storage.setItem(a,s()),N(),re=null,de())}P(Ce),Ce.appendChild(he[n].length?R(he[n].map(e=>B("div",{className:"event"},[B("span",{className:"event-name"},[e.summary]),B("span",{className:"event-info"},[e.start&&e.start.dateTime?B("span",{className:"event-time",innerHTML:$(ve(new Date(e.start.dateTime)))+" &ndash; "+$(ve(new Date(e.end.dateTime)))}):null,e.location?B("span",{className:"event-location"},[e.location]):null]),e.description?B("span",{className:"event-description",innerHTML:(t=e.description,t.replace(/(<.*?) style=(?:"[^"]*"|\S*)(.*?>)/g,"$1$2"))}):null]))):B("span",{className:"events-message"},["Nothing happening today"]))}var t}const ye=new Date(l+252e5),Ee=new Date(u+111599999),Le="https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(i)+"/events?singleEvents=true&fields="+encodeURIComponent("items(description,end(date,dateTime),start(date,dateTime),summary)")+"&key="+c+`&timeMin=${encodeURIComponent(ye.toISOString())}&timeMax=${encodeURIComponent(Ee.toISOString())}`;function ke(){return Te.disabled=!0,Promise.all(d.map(e=>fetch(Le+"&q="+e).then(e=>e.json()))).then(t=>{const n={};t.map(be).forEach(e=>e.forEach(e=>{n[e.date]||(n[e.date]=[]),n[e.date].push(e)}));const o=new Date(l),i=u;for(;o.getTime()<=i;)e(n[o.toISOString().slice(0,10)]||[],o),o.setUTCDate(o.getUTCDate()+1);storage.setItem(a,s()),Te.disabled=!1})}function be({items:e}){const t=[];return e.forEach(e=>{if(e.start.dateTime)t.push({summary:e.summary,description:e.description,date:e.start.dateTime.slice(0,10)});else{const n=new Date(e.start.date),s=new Date(e.end.date).getTime();for(;n.getTime()<s;)t.push({summary:e.summary,description:e.description,date:n.toISOString().slice(0,10)}),n.setUTCDate(n.getUTCDate()+1)}}),t}let Ce,Te,Ie=!1;y.push(async()=>{if(Ce=document.getElementById("events"),(Te=document.getElementById("fetch-alts")).addEventListener("click",()=>{Ie=!0,ke().then(N)}),E.push(e=>{e||(Te.disabled=!0)}),b["get-alts"]||!storage.getItem(a)){if(Ie=!0,await ke(),b.then)return window.location.replace(b.then);re=null}o(storage.getItem(a)),U(),de(!0,0)});const xe=[],De={},Se=24,Ne=6*Se;let Ue,Ae,Me,Oe;function Be(){Oe&&Oe.classList.remove("date-selector-selected");const e=De[A.toISOString().slice(0,10)];e&&(e.classList.add("date-selector-selected"),Oe=e,scrollTo(e,!0))}y.push(()=>{Ae=document.getElementById("date-selector");const e=document.getElementById("date-selector-days");Ue=document.getElementById("date-selector-month-year");let n=!1,s=!1;function o(t,n=!1){s&&window.cancelAnimationFrame(s);const o=Math.max(Math.min((+t.dataset.week+.5)*Se-Ne/2,e.scrollHeight-Ne),0);n&&(e.scrollTop=o),function t(){e.scrollTop+=(o-e.scrollTop)/5,s=window.requestAnimationFrame(t)}()}document.getElementById("date-selector-day-headings").appendChild(R(Q.map(e=>B("span",{className:"date-selector-day-heading",innerHTML:e})))),e.addEventListener("wheel",()=>{s&&window.cancelAnimationFrame(s)}),e.addEventListener("touchstart",()=>{s&&window.cancelAnimationFrame(s)}),e.addEventListener("scroll",()=>{const t=(e.scrollTop+Ne/2)/Se,n=xe.findIndex(e=>e.start>=t),s=xe[(~n?n:xe.length)-1];s&&s!==Me&&(Me&&Me.wrapper.classList.remove("date-selector-month-selected"),Me=s,s.wrapper.classList.add("date-selector-month-selected"),Ue.textContent=C[s.month]+" "+s.year)}),e.addEventListener("click",e=>{e.target.classList.contains("date-selector-day")&&!e.target.classList.contains("date-selector-out-of-bounds")&&(A=new Date(e.target.dataset.date),U(),Oe&&Oe.classList.remove("date-selector-selected"),e.target.classList.add("date-selector-selected"),Oe=e.target,o(e.target))}),e.addEventListener("keydown",e=>{if(e.keyCode>=37&&e.keyCode<=40){let t;switch(e.keyCode){case 37:t=-1;break;case 38:t=-7;break;case 39:t=1;break;case 40:t=7}const n=new Date(Date.UTC(A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate()+t));if(n.getTime()>=l&&n.getTime()<=u){A=n,U();const e=De[n.toISOString().slice(0,10)];e&&(Oe&&Oe.classList.remove("date-selector-selected"),e.classList.add("date-selector-selected"),Oe=e,o(e))}e.preventDefault()}else 27===e.keyCode&&(i=!0,Ae.classList.add("disappear"),a.focus())});const a=document.getElementById("select-date");a.addEventListener("click",s=>{n||(e.appendChild(function(){const e=document.createDocumentFragment(),t=new Date(l),n=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()-t.getUTCDay()));let s,o=-1;for(;n.getTime()<=u;){const t=n.getUTCMonth();if(0===n.getUTCDay()&&o++,s!==t){s=t;const a=B("span",{className:"date-selector-month"});e.appendChild(a),xe.push({month:t,year:n.getUTCFullYear(),wrapper:a,start:o})}const a=xe[xe.length-1],i=n.getTime(),r=n.getUTCDate();r<=5&&(a.start=o);const d=i<l||i>u,c=n.toISOString().slice(0,10),p=B("span",{className:["date-selector-day",d&&"date-selector-out-of-bounds"],data:{date:c,week:o}},[r]);d||(De[c]=p),a.wrapper.appendChild(p),n.setUTCDate(n.getUTCDate()+1)}return e}()),n=!0),function(){const e=M().toISOString().slice(0,10);Object.keys(De).forEach(n=>{const s=De[n],o=new Date(n),a=t(o);s.classList[a.noSchool?"add":"remove"]("date-selector-no-school"),s.classList[a.alternate?"add":"remove"]("date-selector-alternate"),s.classList[n===e?"add":"remove"]("date-selector-today")})}(),Be(),i=!1,Ae.classList.remove("hidden"),Ae.classList.remove("disappear"),e.focus(),s.stopPropagation()}),document.getElementById("cancel-select-date").addEventListener("click",()=>{i=!0,Ae.classList.add("disappear"),a.focus()}),document.addEventListener("click",e=>{Ae.classList.contains("hidden")||Ae.contains(e.target)||(i=!0,Ae.classList.add("disappear"))});let i=!1;Ae.addEventListener("transitionend",()=>{i&&Ae.classList.add("hidden")})});let Re=[];function Pe(){(Re=Re.filter(e=>e.animate())).length&&window.requestAnimationFrame(Pe)}document.addEventListener("mouseup",()=>{Re.filter(e=>"mouse"===e.identifier).forEach(e=>e.dying=!0)}),document.addEventListener("touchend",e=>{Array.from(e.changedTouches).forEach(e=>{Re.filter(t=>t.identifier===e.identifier).forEach(e=>e.dying=!0)})},{passive:!0});class je{constructor(e,t,n,s){const o=B("div",{className:"ripple"}),a=e.getBoundingClientRect();o.style.left=t-a.left+"px",o.style.top=n-a.top+"px",e.appendChild(o),Re.push(this),this.parent=e,this.ripple=o,this.identifier=s,this.scale=0,this.dying=!1,this.dyingProgress=1,this.finalScale=Math.hypot(Math.max(t-a.left,a.left+a.width-t),Math.max(n-a.top,a.top+a.height-n))/5,1===Re.length&&Pe()}animate(){return this.scale+=(this.finalScale-this.scale)/6,this.dying&&(this.dyingProgress-=.07),this.ripple.style.transform=`scale(${this.scale})`,this.ripple.style.opacity=this.dyingProgress,this.dyingProgress<=0&&this.parent.removeChild(this.ripple),this.dyingProgress>0}}function Fe(e){let t=!1;e.addEventListener("touchstart",n=>{t=!0,Array.from(n.changedTouches).forEach(t=>{new je(e,t.clientX,t.clientY,t.identifier)})},{passive:!0}),e.addEventListener("mousedown",n=>{t?t=!1:new je(e,n.clientX,n.clientY,"mouse")})}function $e({h:e,s:t,v:n}){const s=s=>{const o=(s+e/60)%6;return n-n*t*Math.max(Math.min(o,4-o,1),0)};return{r:255*s(5),g:255*s(3),b:255*s(1)}}function _e({r:e,g:t,b:n}){e/=255,t/=255,n/=255;const s=Math.min(e,t,n),o=Math.max(e,t,n),a=o-s;let i=o===s&&e===t&&t===n?0:o===e?60*(t-n)/a:o===t?60*(2+(n-e)/a):60*(4+(e-t)/a);return i<0&&(i+=360),{h:i,s:0===o&&0===s?0:a/o,v:o}}function He(e){return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4),16)}}function Ye({r:e,g:t,b:n}){return[e,t,n].map(e=>Math.floor(e).toString(16).padStart(2,"0")).join("")}y.push(()=>{Array.from(document.getElementsByClassName("ripples")).forEach(e=>Fe(e))}),window.UgwishaExtensions=(()=>{const e="[ugwisha] extensions",t="[ugwisha] extensions.last",n="ugwisha-extensions",s={};let o,a,i,r,d=!1,c=null;const l=JSON.parse(storage.getItem(e)||'["./js/extensions/notes.js"]'),u=Promise.all(l.map(p));function p(e){return new Promise((t,n)=>{document.head.appendChild(B("script",{onload:t,onerror:n,src:e}))}).then(()=>{caches.open(n).then(t=>t.add(e))})}let m=!1;const h={start:function(){d=!0,delete h.start,o=document.getElementById("extension-name"),a=document.getElementById("extension-icon"),i=document.getElementById("extension-menu"),r=document.getElementById("extension-wrapper"),h.switch=(e=>{if(e===c)return;if(!s[e]){if(!s.menu)return;e="menu"}if(c){const e=s[c];e.beforeRemove&&e.beforeRemove(),r.removeChild(e.wrapper),e.afterRemove&&e.afterRemove()}c=e;const n=s[e];o.textContent=n.name,n.icon?(a.style.backgroundImage=`url("${n.icon}")`,a.style.display=null):a.style.display="none",n.beforeAdd&&n.beforeAdd(),r.appendChild(n.wrapper),n.afterAdd&&n.afterAdd(),localStorage.setItem(t,e),i.disabled="menu"===e}),i.addEventListener("click",()=>{h.switch("menu")}),u.then(()=>h.switch(b.app||localStorage.getItem(t)||"menu")),window.UgwishaEvents.connection.then(e=>{e||(f.disabled=!0)})},register(t){if(s[t.id])throw new Error("Extension with same ID already exists: "+t.id);if("menu"!==t.id&&!l.includes(t.url))throw new Error("No extensions are loaded with this URL: "+t.url);if(s[t.id]=t,"menu"!==t.id){const o=B("div",{className:"extension-item"},[B("div",{className:"kind-of-button extension-icon",tabindex:0,ripple:!0,style:{backgroundImage:t.icon&&`url("${t.icon}")`},onclick(i){if(m){delete s[t.id];const i=l.indexOf(t.url);~i&&(l.splice(i,1),storage.setItem(e,JSON.stringify(l))),v.removeChild(o);const r=g.find(e=>e[1]===t.url);r&&(r[2].disabled=!1),caches.open(n).then(e=>Promise.all([t.url,...a].map(t=>e.delete(t)))).then(()=>void 0)}else h.switch(t.id)},onkeydown(e){13===e.keyCode&&this.click()}}),B("div",{className:"extension-name"},[t.name])]);v.appendChild(o),t.styles&&document.head.appendChild(B("link",{rel:"stylesheet",href:t.styles}));const a=t.sources||[];t.icon&&a.push(t.icon),t.styles&&a.push(t.styles),a.length&&caches.open(n).then(e=>e.addAll(a))}}},g=[["Background manager","./js/extensions/backgrounds.js"],["Notes","./js/extensions/notes.js"],["Todo","./js/extensions/todo.js"],["Barcode","./js/extensions/barcode.js"],["Min. Score Calc.","./js/extensions/min-score.js"],["Discord Webhook","./js/extensions/discord-webhook.js"],["Push Notifications","./js/extensions/notifications.js"],["Current Second","./js/extensions/current-second.js"]],v=B("div",{className:"extension-menu"}),f=B("select",{className:"select-input extension-list",value:"CHOOSE",onchange(e){w.disabled="CHOOSE"===f.value}},[B("option",{value:"CHOOSE",disabled:!0},["Add app"]),B("option",{value:"FROM_URL"},["From URL"]),...g.map(e=>e[2]=B("option",{value:e[1],disabled:l.includes(e[1])},[e[0]]))]),w=B("button",{className:"button extension-add",disabled:!0,ripple:!0,onclick(t){let n=f.value;"CHOOSE"!==n&&("FROM_URL"===n&&(n=prompt("Enter app URL:")),n&&function(t){l.includes(t)?Promise.reject(new Error("Extension already added")):(l.push(t),p(t).then(()=>{storage.setItem(e,JSON.stringify(l));const n=g.find(e=>e[1]===t);n&&(n[2].disabled=!0)}))}(n),f.value="CHOOSE",w.disabled=!0)}},["Add"]);return h.register({id:"menu",wrapper:B("div",{},[v,B("div",{className:"extension-list-wrapper"},[f,w]),B("button",{className:"button extension-remove",ripple:!0,onclick(e){(m=!m)?(v.classList.add("extension-remove-mode"),this.classList.add("extension-removing"),this.childNodes[0].nodeValue="Done"):(v.classList.remove("extension-remove-mode"),this.classList.remove("extension-removing"),this.childNodes[0].nodeValue="Remove apps")}},["Remove apps"])]),name:"Apps"}),h})();const We=/([0-9a-f]{6})|([0-9a-f])([0-9a-f])([0-9a-f])/i;const Xe=[0,60,120,180,240,300,360];function qe(e,t){let n;function s(e){const s="touch"===e.type.slice(0,5)?e.touches[0]:e;t((s.clientX-n.left)/n.width,(s.clientY-n.top)/n.height)}function o(t){n=e.getBoundingClientRect(),s(t),document.addEventListener("touchstart"===t.type?"touchmove":"mousemove",a,{passive:!1}),document.addEventListener("touchstart"===t.type?"touchend":"mouseup",i,{passive:!1}),t.stopPropagation(),t.preventDefault()}function a(e){s(e),e.preventDefault()}function i(e){document.removeEventListener("touchend"===e.type?"touchmove":"mousemove",a),document.removeEventListener(e.type,i),e.preventDefault()}e.addEventListener("mousedown",o,{passive:!1}),e.addEventListener("touchstart",o,{passive:!1})}function Je(e,t=0,n=1){return e>n?n:e<t?t:e}Ugwisha.version=1559775068890})();