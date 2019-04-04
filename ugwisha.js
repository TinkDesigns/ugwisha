(()=>{/* sheep */
const e=[],t=[e=>window.isOnline=e],n={},{parseEvents:s,getSchedule:o,getNote:i,saveScheduleData:a,prepareScheduleData:d,SCHEDULE_DATA_KEY:r,SCHEDULES_CALENDAR_ID:l,EVENTS_CALENDAR_ID:c,CALENDAR_KEYWORDS:u,GOOGLE_API_KEY:p,FIRST_DAY:m,LAST_DAY:h,DEFAULT_NAMES:g,DEFAULT_COLOURS:w,THEME_COLOUR:f,DEFAULT_FAVICON_URL:y,APP_NAME:v,PERIOD_OPTION_PREFIX:E,UPDATER_URL:b}=window.ugwishaOptions;try{window.storage=localStorage}catch(e){window.storage={getItem:e=>storage[e],setItem:(e,t)=>storage[e]=t,removeItem:e=>delete storage[e]}}try{window.options=JSON.parse(storage.getItem("[ugwisha] options")),"object"==typeof window.options&&null!==window.options||(window.options={})}catch(e){window.options={}}function L(){storage.setItem("[ugwisha] options",JSON.stringify(window.options))}const k={};window.location.search&&window.location.search.slice(1).split("&").forEach(e=>{const t=e.indexOf("=");~t?k[e.slice(0,t)]=e.slice(t+1):k[e]=!0});const C="jan. feb. mar. apr. may jun. jul. aug. sept. oct. nov. dec.".split(" "),T=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];function I(){!function(e){A(_),e.alternate&&_.appendChild(U("p",{classes:"alternate-note",html:"This is an alternate schedule"}));if(e.noSchool)return void _.appendChild(U("div",{classes:"no-school",children:[U("span",{html:"No school!"})]}));H={},W={},_.appendChild(O(e.map(e=>{const t=U("input",{classes:"period-name",attributes:{type:"text",placeholder:g[e.period],value:N(e.period)},listeners:{change(){j(e.period,t.value),L(),re(),H[e.period].forEach(e=>e!==t&&(e.value=t.value))},focus(){X.parentNode&&X.parentNode.removeChild(X),t.parentNode.insertBefore(X,t.nextElementSibling),Y.value="#"+(P(e.period)||w[e.period]||"000"),Y.disabled=q.checked=null===P(e.period),K=e.period},blur:J}});H[e.period]||(H[e.period]=[]),H[e.period].push(t);const n=i(e),s=U("div",{classes:["period",null===P(e.period)?"transparent":void 0],styles:{"--colour":null===P(e.period)?void 0:"#"+P(e.period)},children:[t,U("span",{classes:"time",html:R(e.start)+" &ndash; "+R(e.end)}),U("span",{classes:"duration",html:M(e.end-e.start,!1)+" long"}),n?U("span",{classes:"note",html:n}):void 0]});return W[e.period]||(W[e.period]=[]),W[e.period].push(s),s})))}(o(D));const e=D.getUTCDay(),t=[];for(let n=0;n<7;n++)t.push(o(new Date(D.getTime()-864e5*(e-n))));!function(e,t){const n=JSON.stringify(e);if(Q===n){for(let e=0;e<7;e++){const n=F.children[e];t===e?n.classList.add("week-preview-today"):n.classList.contains("week-preview-today")&&n.classList.remove("week-preview-today")}return}Q=n,A(F),F.appendChild(O(e.map((e,n)=>U("div",{classes:["week-preview-col",t===n?"week-preview-today":void 0],attributes:{tabindex:0},children:[U("span",{classes:"week-preview-cell week-preview-day-heading",html:z[n],attributes:{title:T[n],"aria-label":T[n]}}),...e.noSchool?[]:e.map(e=>U("span",{classes:["week-preview-cell","week-preview-period",null===P(e.period)?"week-preview-transparent":void 0],styles:{backgroundColor:null===P(e.period)?void 0:"#"+P(e.period)},attributes:{title:N(e.period),"aria-label":N(e.period)}})),e.alternate?U("span",{classes:"week-preview-cell week-preview-alternate",html:"*",attributes:{title:"Alternate schedule","aria-label":"This is an alternate schedule"}}):void 0],listeners:{click:()=>{D=e.date,I(),updateDateWrapperLink()},keydown(e){13===e.keyCode&&this.click()}}}))))}(t,e),Ce.innerHTML=C[D.getUTCMonth()]+" "+D.getUTCDate(),Te.innerHTML=T[e]}let D=k.day?new Date(k.day):x();function x(){return new Date(Date.UTC(...(e=>[e.getFullYear(),e.getMonth(),e.getDate()])(new Date)))}function S(e){return Array.isArray(e)?e.filter(e=>void 0!==e):(Object.keys(e).forEach(t=>void 0===e[t]&&delete e[t]),e)}function U(e,t={}){const n=document.createElement(e);return t.classes&&("string"==typeof t.classes?n.className=t.classes:S(t.classes).forEach(e=>n.classList.add(e))),t.children&&S(t.children).forEach(e=>n.appendChild("string"==typeof e?document.createTextNode(e):e)),t.attributes&&Object.keys(S(t.attributes)).forEach(e=>{void 0!==n[e]?n[e]=t.attributes[e]:n.setAttribute(e,t.attributes[e])}),t.listeners&&Object.keys(S(t.listeners)).forEach(e=>{n.addEventListener(e,t.listeners[e])}),t.styles&&Object.keys(S(t.styles)).forEach(e=>{"--"===e.slice(0,2)?n.style.setProperty(e,t.styles[e]):n.style[e]=t.styles[e]}),t.html&&(n.innerHTML=t.html),t.ripples&&Oe(n),n}function O(e){const t=document.createDocumentFragment();return S(e).forEach(e=>t.appendChild(e)),t}function A(e){for(;e.firstChild;)e.removeChild(e.firstChild)}document.addEventListener("DOMContentLoaded",()=>{e.forEach(e=>e()),UgwishaExtensions.start();let s=!1;document.addEventListener("keydown",e=>{9!==e.keyCode&&13!==e.keyCode||(document.body.classList.add("tab-focus"),s=!0)}),document.addEventListener("keyup",e=>{9!==e.keyCode&&13!==e.keyCode||(s=!1)}),document.addEventListener("focusin",()=>{s||document.body.classList.remove("tab-focus")});const o=document.getElementById("psa"),i=document.getElementById("psa-content"),a=document.getElementById("psa-close"),d=document.getElementById("last-psa");fetch("./psa.html?="+Date.now()).then(e=>e.text()).then(e=>{i.innerHTML=e;const n=e.slice(6,9);options.lastPSA&&options.lastPSA!==n&&(o.classList.remove("hidden"),a.focus()),options.lastPSA||(options.lastPSA=n,L()),a.addEventListener("click",()=>{o.classList.add("hidden"),options.lastPSA!==n&&(options.lastPSA=n,L(),!De&&e.includes("[REFETCH]")&&(De=!0,be().then(I))),d.focus()}),d.addEventListener("click",()=>{o.classList.remove("hidden"),a.focus()}),t.forEach(e=>e(!0))}).catch(()=>{document.getElementById("offline-msg").classList.remove("hidden");const e=document.getElementById("reload");e.tabindex=0,e.addEventListener("click",e=>{window.location.reload(),e.preventDefault()}),d.disabled=!0,options.natureLoaded||(document.getElementById("nature-back").disabled=!0),t.forEach(e=>e(!1))});let r=window.innerWidth,l=window.innerHeight;window.addEventListener("resize",()=>{r=window.innerWidth,l=window.innerHeight});const c=document.getElementById("jump");let u=!1;document.addEventListener("wheel",()=>{window.cancelAnimationFrame(u),u=!1},{passive:!0}),document.addEventListener("touchstart",()=>{window.cancelAnimationFrame(u),u=!1},{passive:!0}),document.addEventListener("scroll",()=>{window.scrollY>l/3?c.classList.add("up"):c.classList.remove("up")}),c.addEventListener("click",()=>{u&&window.cancelAnimationFrame(u),function(e){let t=window.scrollY;!function n(){Math.abs(t-e)>1?(t+=(e-t)/5,window.scrollTo(0,t),u=window.requestAnimationFrame(n)):(window.scrollTo(0,e),u=!1)}()}(c.classList.contains("up")?0:l-50)});const p=document.getElementById("settings"),g=document.getElementById("toggle-settings"),w=document.createTextNode("show settings");g.appendChild(w),g.addEventListener("click",()=>{p.classList.toggle("hidden"),w.nodeValue=p.classList.contains("hidden")?"show settings":"hide settings"});const f=document.getElementById("events-wrapper"),y={showDuration(e){e?document.body.classList.add("show-duration"):document.body.classList.remove("show-duration")},showTime(e){e?document.body.classList.add("show-time"):document.body.classList.remove("show-time")},metricTime(){I(),re()},showSELF(){I()},quickTransitions(e){e?document.body.classList.add("quick-transitions"):document.body.classList.remove("quick-transitions")},showEvents(e){e&&f.style.display&&fe(),f.style.display=e?null:"none"}};Array.from(document.getElementsByClassName("toggle-setting"),e=>{const t=e.dataset.option;void 0===options[t]&&(options[t]="true"===e.dataset.default),e.checked=options[t];const s=y[t]||n[t];s&&s(e.checked),e.addEventListener("change",()=>{options[t]=e.checked,s&&s(e.checked),L()})});const v=document.getElementById("date-wrapper"),E=document.getElementById("back-day"),b=document.getElementById("forth-day");v.addEventListener("click",e=>{window.history.pushState({},"",v.href),e.preventDefault()}),window.updateDateWrapperLink=(()=>{const e=D.getTime();E.disabled=e<=m,b.disabled=e>=h,v.href=(k["no-sw"]?"?no-sw&":"?")+"day="+D.toISOString().slice(0,10),fe()}),updateDateWrapperLink(),E.addEventListener("click",()=>{D.setUTCDate(D.getUTCDate()-1),I(),updateDateWrapperLink()}),b.addEventListener("click",()=>{D.setUTCDate(D.getUTCDate()+1),I(),updateDateWrapperLink()}),document.getElementById("today").addEventListener("click",()=>{D=x(),I(),updateDateWrapperLink()}),re(!0,0);const T=document.getElementById("date-selector"),S=document.getElementById("months"),A=document.getElementById("date-input"),B=document.getElementById("actually-select-date"),R=document.getElementById("error"),M=document.getElementById("cancel-select-date"),N=[],j=new Date(m),P=j.getUTCFullYear(),$=j.getUTCMonth(),_=new Date(Date.UTC(P,$,1));for(;_.getTime()<=h;)N.push(C[_.getUTCMonth()]+" "+_.getUTCFullYear()),_.setUTCMonth(_.getUTCMonth()+1);S.appendChild(O(N.map((e,t)=>U("option",{attributes:{value:t},html:e})))),document.getElementById("select-date").addEventListener("click",()=>{T.classList.remove("hidden"),S.value="CHOOSE",S.disabled=!1,A.disabled=!0,B.disabled=!0,R.innerHTML="",A.value=""}),S.addEventListener("change",()=>{S.disabled=!0,A.disabled=!1,B.disabled=!1,A.focus()}),M.addEventListener("click",()=>{T.classList.add("hidden"),S.disabled=!0,A.disabled=!0,B.disabled=!0}),B.addEventListener("click",()=>{const e=[];"CHOOSE"===S.value&&e.push("You did not choose a month.");const t=+A.value;isNaN(t)&&e.push("The date is not a number."),t%1!=0&&e.push("The date is not an integer.");const n=new Date(Date.UTC(P,$+ +S.value,t));(n.getTime()<m||n.getTime()>h)&&e.push("The date is not during the school year."),e.length?R.innerHTML=e.join("<br>")+"<br>You have issues.":(D=n,I(),updateDateWrapperLink(),M.click())})},{once:!0}),"serviceWorker"in navigator&&(k["no-sw"]||k["reset-sw"]?navigator.serviceWorker.getRegistrations().then(e=>{Promise.all(e.map(e=>e.unregister())).then(()=>{k["reset-sw"]?window.location=b:e.length&&window.location.reload()})}).catch(()=>void 0):window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&navigator.serviceWorker.controller&&(options.natureLoaded=!1,window.location.replace(b))})})},()=>{}),navigator.serviceWorker.addEventListener("message",({data:e})=>{e.type})},{once:!0})),window.createElement=U,window.createFragment=O,window.empty=A;const B=32;function R(e,t=!1){const n=Math.floor(e/60),s=("0"+e%60).slice(-2);let o=options.metricTime?`${n}:${s}`:`${(n+11)%12+1}:${s}`;return options.metricTime||t?o:`${o} ${n<12?"a":"p"}m`}function M(e,t=!1,n=!1){return t?(n&&e<60?"":Math.floor(e/60))+":"+("0"+e%60).slice(-2):e+" minute"+(1===e?"":"s")}function N(e){return options["periodName_"+E+e]}function j(e,t){return options["periodName_"+E+e]=t}function P(e){return options["periodColour_"+E+e]}function $(e,t){return options["periodColour_"+E+e]=t}let _,F,H,W,Y,q;function J(){setTimeout(()=>{_.contains(document.activeElement)||(X.parentNode.removeChild(X),K=null)},0)}const V=/([0-9a-f]{6})|([0-9a-f])([0-9a-f])([0-9a-f])/;function G(e){const t=V.exec(e.toLowerCase());if(t){return t[1]?t[1]:t.slice(2,5).map(e=>e+e).join("")}}let K=null;const X=U("div",{classes:"colour-picker",children:[Y=U("input",{classes:"colour-input select-input",attributes:{type:"text",placeholder:"#123ABC"},listeners:{change(){const e=G(Y.value);e?($(K,e),W[K].forEach(t=>t.style.setProperty("--colour","#"+e)),L(),re()):Y.value="#"+P(K)},blur:J}}),q=U("input",{attributes:{type:"checkbox",name:"colour-picker-checkbox"},listeners:{change(){Y.disabled=q.checked,q.checked?($(K,null),W[K].forEach(e=>{e.classList.add("transparent"),e.style.setProperty("--colour",null)})):($(K,G(Y.value)||w[K]||"000"),W[K].forEach(e=>{e.classList.remove("transparent"),e.style.setProperty("--colour","#"+P(K))})),L(),re()},blur:J}}),U("label",{attributes:{for:"colour-picker-checkbox"},html:"Transparent?"})]});const z=["S","M","T","W","&Theta;","F","S"];let Q;const Z=(new Date).getTimezoneOffset();const ee=U("canvas",{attributes:{width:B,height:B}}),te=ee.getContext("2d");let ne,se,oe,ie,ae,de;function re(e=!1,t=0){const n=Date.now();if(e&&n<t)return setTimeout(()=>re(!0,t),Math.min(t-n,1e3));const s=x(),i=s.toISOString().slice(0,10);de!==i&&(de=i,(ae=o(s)).noSchool&&(oe.style.opacity=0,ie.setAttribute("href",y),document.title=v));const a=function(e,t=0){const n=Date.now()+t,s=Math.floor((n/6e4-Z)%1440),o=n+6e4-n%6e4;if(e.noSchool)return{type:"time",value:s,nextMinute:o};const i=e.find(e=>e.end>s),a={secondCounter:null,nextMinute:o};if(i)a.period=i.period,i.start>s?(a.type="until",a.value=i.start-s):(a.type="left in",a.value=i.end-s,a.progress=(s-i.start)/(i.end-i.start)),a.value<=1&&(a.secondCounter=(()=>{const e=Date.now()+t;return{secondsLeft:60-e/1e3%60,stop:Math.floor((e/6e4-Z)%1440)>=(i.start>s?i.start:i.end)}}));else{const t=e[e.length-1];a.period=t.period,a.type="since",a.value=s-t.end}return a}(ae);if(ae.noSchool)ne.textContent=R(a.value,!0),se.textContent="";else if("left in"===a.type?(oe.style.opacity=1,oe.style.setProperty("--progress",100*a.progress+"%")):oe.style.opacity=0,se.innerHTML=a.type+" "+function(e){const t=P(e);let n='<span class="period-chip';return null===t&&(n+=" transparent"),n+='"',null!==t&&(n+=` style="--colour: #${t};"`),n+=`>${N(e)}</span>`}(a.period),"since"===a.type)ne.textContent=M(a.value,!0),ie.setAttribute("href",y),document.title=v;else if(function(e){te.clearRect(0,0,B,B),te.font="100px 'Roboto Condensed', sans-serif";const{width:t}=te.measureText(e),n=B/(t/100);te.fillStyle=f,te.fillRect(0,(B-1.2*n)/2,B,n),te.font=`${n}px 'Roboto Condensed', sans-serif`,te.fillStyle="white",te.fillText(e,B/2,B/2),ie.setAttribute("href",ee.toDataURL())}(M(a.value,!0,!0)),a.secondCounter){!function t(){const{secondsLeft:n,stop:s}=a.secondCounter();if(!s){const e=Math.round(10*n)/10+"";document.title=(ne.textContent=e+(e.includes(".")?"0".repeat(2-e.length+e.indexOf(".")):".0")+"s")+" "+a.type+" "+N(a.period)+" - "+v}window.requestAnimationFrame(e&&!s?t:re)}()}else document.title=(ne.textContent=M(a.value,!0))+" "+a.type+" "+N(a.period)+" - "+v;e&&setTimeout(()=>re(!0,a.nextMinute),Math.min(a.nextMinute-n,1e3))}function le(e){return Math.floor(Math.random()*e)}function ce(e){const t=U("div",{classes:"transition-background"});t.style.backgroundImage=document.body.style.backgroundImage;const n=setTimeout(()=>{document.body.removeChild(t)},1e4);t.addEventListener("animationend",()=>{document.body.removeChild(t),clearTimeout(n)}),document.body.insertBefore(t,document.body.firstChild),document.body.style.backgroundImage=e}e.push(()=>{_=document.getElementById("periods"),Object.keys(g).forEach(e=>{void 0===N(e)&&j(e,g[e])}),Object.keys(w).forEach(e=>{void 0===P(e)&&$(e,w[e])}),ne=document.getElementById("preview-time"),se=document.getElementById("preview-msg"),oe=document.getElementById("progress"),ie=document.getElementById("favicon"),te.textAlign="center",te.textBaseline="middle",F=document.getElementById("week-preview")});const ue="ugwisha-backgrounds";async function pe(e,t){const n=new Headers;n.append("pragma","no-cache"),n.append("Cache-Control","no-cache");const s=await fetch(e,{mode:"no-cors",headers:n,cache:"no-cache"}),o=await caches.open(ue);await o.delete(new Request(t)),await o.put(new Request(t),s)}e.push(()=>{const e=document.getElementById("set-back"),s=document.getElementById("reset-back"),o=document.getElementById("next-back");let i=null;function a(){i&&clearInterval(i),i=options.randomGradients?setTimeout(a,options.quickTransitions?5e3:1e4):null,ce(function(){const e=[le(256),le(256),le(256)],t=[le(256),le(256),le(256)];return`linear-gradient(${360*Math.random()}deg, rgb(${e.join(",")}), rgb(${t.join(",")}))`}())}const d=[],r=["nature","water","wallpaper"];r.forEach((e,t)=>{const n=[...r.slice(0,t),...r.slice(t+1)];d.push(e),d.push(e+","+n[0]),d.push(e+","+n[0]+","+n[1]),d.push(e+","+n[1]),d.push(e+","+n[1]+","+n[0])}),d.push(...d.map(e=>e+","+Date.now()));let l=-1;function c(){o.disabled=!0,l=(l+1)%d.length,pe("https://source.unsplash.com/random/1600x900/?"+d[l],"nature").then(()=>{ce(`url("nature?n=${Date.now()}")`),options.natureLoaded=!0,L(),o.disabled=!1}).catch(()=>{ce('url("./images/temp-sheep.png")'),o.disabled=!1})}function u(){options.natureLoaded?(ce(`url("nature?n=${Date.now()}")`),o.disabled=!1):c()}options.backgroundURL?(ce(`url("custom?n=${Date.now()}")`),s.disabled=!1):options.natureBackground?(ce(`url("nature?n=${Date.now()}")`),o.disabled=!1,caches.open(ue).then(e=>e.match("nature")).then(e=>{e||c()})):a(),e.addEventListener("click",()=>{const t=prompt("URL of image: (sorry for lack of proper UI)");t&&(e.disabled=!0,o.disabled=!0,pe(t,"custom").then(()=>{e.disabled=!1,s.disabled=!1,ce(`url("custom?n=${Date.now()}")`),options.backgroundURL=t,L(),i&&clearInterval(i)}).catch(()=>{e.disabled=!1,!options.backgroundURL&&options.natureBackground&&(o.disabled=!1),alert("The image couldn't be loaded. This might be because:\n- You are offline\n- The website hosting the image won't let Ugwisha load their images\n- There's something wrong with the URL\n(sorry again for lack of proper UI)")}))}),s.addEventListener("click",()=>{options.backgroundURL=null,L(),s.disabled=!0,o.disabled=!options.natureBackground,options.natureBackground?u():a()}),o.addEventListener("click",c),n.natureBackground=(e=>{options.backgroundURL||(e?(i&&clearInterval(i),u()):(a(),o.disabled=!0))}),n.randomGradients=(e=>{e?options.natureBackground||options.backgroundURL||a():i&&clearInterval(i)}),t.push(t=>{t||(o.disabled=e.disabled=!0)})});const me={},he="https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(c)+"/events?singleEvents=true&fields="+encodeURIComponent("items(description,end(date,dateTime),location,start(date,dateTime),summary)")+"&key="+p;function ge(e){return 60*e.getHours()+e.getMinutes()}function we(e,t=0){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()+t)}async function fe(){if(options.showEvents){const t=D.toISOString().slice(0,10);if(ke.innerHTML='<span class="events-message">Loading...</span>',!me[t]){const{items:e}=await fetch(`${he}&timeMin=${encodeURIComponent(we(D).toISOString())}&timeMax=${encodeURIComponent(we(D,1).toISOString())}`).then(e=>e.json()).catch(()=>(ke.innerHTML='<span class="events-message">Unable to fetch events.</span>',{items:null}));if(!e)return;me[t]=e,s(Le({items:e}),D)&&(storage.setItem(r,a()),I())}A(ke),ke.appendChild(me[t].length?O(me[t].map(t=>U("div",{classes:"event",children:[U("span",{classes:"event-name",children:[t.summary]}),U("span",{classes:"event-info",children:[t.start&&t.start.dateTime?U("span",{classes:"event-time",html:R(ge(new Date(t.start.dateTime)))+" &ndash; "+R(ge(new Date(t.end.dateTime)))}):void 0,t.location?U("span",{classes:"event-location",children:[t.location]}):void 0]}),t.description?U("span",{classes:"event-description",html:(e=t.description,e.replace(/(<.*?) style=(?:"[^"]*"|\S*)(.*?>)/g,"$1$2"))}):void 0]}))):U("span",{classes:"events-message",html:"Nothing happening today"}))}var e}const ye=new Date(m+252e5),ve=new Date(h+111599999),Ee="https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(l)+"/events?singleEvents=true&fields="+encodeURIComponent("items(description,end(date,dateTime),start(date,dateTime),summary)")+"&key="+p+`&timeMin=${encodeURIComponent(ye.toISOString())}&timeMax=${encodeURIComponent(ve.toISOString())}`;function be(){return Ie.disabled=!0,Promise.all(u.map(e=>fetch(Ee+"&q="+e).then(e=>e.json()))).then(e=>{const t={};e.map(Le).forEach(e=>e.forEach(e=>{t[e.date]||(t[e.date]=[]),t[e.date].push(e)}));const n=new Date(m),o=h;for(;n.getTime()<=o;)s(t[n.toISOString().slice(0,10)]||[],n),n.setUTCDate(n.getUTCDate()+1);storage.setItem(r,a()),Ie.disabled=!1})}function Le({items:e}){const t=[];return e.forEach(e=>{if(e.start.dateTime)t.push({summary:e.summary,description:e.description,date:e.start.dateTime.slice(0,10)});else{const n=new Date(e.start.date),s=new Date(e.end.date).getTime();for(;n.getTime()<s;)t.push({summary:e.summary,description:e.description,date:n.toISOString().slice(0,10)}),n.setUTCDate(n.getUTCDate()+1)}}),t}let ke,Ce,Te,Ie,De=!1;e.push(async()=>{if(ke=document.getElementById("events"),Ce=document.getElementById("date"),Te=document.getElementById("weekday"),(Ie=document.getElementById("fetch-alts")).addEventListener("click",()=>{De=!0,be().then(I)}),t.push(e=>{e||(Ie.disabled=!0)}),k["get-alts"]||!storage.getItem(r)){if(De=!0,await be(),k.then)return window.location.replace(k.then);ae=o(x()),re()}d(storage.getItem(r)),I()});let xe=[];function Se(){(xe=xe.filter(e=>e.animate())).length&&window.requestAnimationFrame(Se)}document.addEventListener("mouseup",()=>{xe.filter(e=>"mouse"===e.identifier).forEach(e=>e.dying=!0)}),document.addEventListener("touchend",e=>{Array.from(e.changedTouches).forEach(e=>{xe.filter(t=>t.identifier===e.identifier).forEach(e=>e.dying=!0)})},{passive:!0});class Ue{constructor(e,t,n,s){const o=document.createElement("div");o.classList.add("ripple");const i=e.getBoundingClientRect();o.style.left=t-i.left+"px",o.style.top=n-i.top+"px",e.appendChild(o),xe.push(this),this.parent=e,this.ripple=o,this.identifier=s,this.scale=0,this.dying=!1,this.dyingProgress=1,this.finalScale=Math.hypot(Math.max(t-i.left,i.left+i.width-t),Math.max(n-i.top,i.top+i.height-n))/5,1===xe.length&&Se()}animate(){return this.scale+=(this.finalScale-this.scale)/6,this.dying&&(this.dyingProgress-=.07),this.ripple.style.transform=`scale(${this.scale})`,this.ripple.style.opacity=this.dyingProgress,this.dyingProgress<=0&&this.parent.removeChild(this.ripple),this.dyingProgress>0}}function Oe(e){let t=!1;e.addEventListener("touchstart",n=>{t=!0,Array.from(n.changedTouches).forEach(t=>{new Ue(e,t.clientX,t.clientY,t.identifier)})},{passive:!0}),e.addEventListener("mousedown",n=>{t?t=!1:new Ue(e,n.clientX,n.clientY,"mouse")})}e.push(()=>{Array.from(document.getElementsByClassName("ripples")).forEach(e=>Oe(e))}),window.UgwishaExtensions=(()=>{const e="[ugwisha] extensions",n="[ugwisha] extensions.last",s="ugwisha-extensions",o={};let i,a,d,r,l=!1,c=null;const u=JSON.parse(storage.getItem(e)||'["./js/extensions/notes.js"]'),p=Promise.all(u.map(m));function m(e){return new Promise((t,n)=>{const s=document.createElement("script");s.onload=t,s.onerror=n,s.src=e,document.head.appendChild(s)}).then(()=>{caches.open(s).then(t=>t.add(e))})}let h=!1;const g={start:function(){l=!0,delete g.start,i=document.getElementById("extension-name"),a=document.getElementById("extension-icon"),d=document.getElementById("extension-menu"),r=document.getElementById("extension-wrapper"),g.switch=(e=>{if(e===c)return;if(!o[e]){if(!o.menu)return;e="menu"}if(c){const e=o[c];e.beforeRemove&&e.beforeRemove(),r.removeChild(e.wrapper),e.afterRemove&&e.afterRemove()}c=e;const t=o[e];i.textContent=t.name,t.icon?(a.style.backgroundImage=`url("${t.icon}")`,a.style.display=null):a.style.display="none",t.beforeAdd&&t.beforeAdd(),r.appendChild(t.wrapper),t.afterAdd&&t.afterAdd(),localStorage.setItem(n,e),d.disabled="menu"===e}),d.addEventListener("click",()=>{g.switch("menu")}),p.then(()=>g.switch(k.app||localStorage.getItem(n)||"menu")),t.push(e=>{e||(y.disabled=!0)})},register(t){if(o[t.id])throw new Error("Extension with same ID already exists: "+t.id);if("menu"!==t.id&&!u.includes(t.url))throw new Error("No extensions are loaded with this URL: "+t.url);if(o[t.id]=t,"menu"!==t.id){const n=U("div",{classes:"extension-item",children:[U("div",{classes:"kind-of-button extension-icon",styles:{backgroundImage:t.icon&&`url("${t.icon}")`},attributes:{tabindex:0},listeners:{click(a){if(h){delete o[t.id];const a=u.indexOf(t.url);~a&&(u.splice(a,1),storage.setItem(e,JSON.stringify(u))),f.removeChild(n);const d=w.find(e=>e[1]===t.url);d&&(d[2].disabled=!1),caches.open(s).then(e=>Promise.all([t.url,...i].map(t=>e.delete(t)))).then(()=>void 0)}else g.switch(t.id)},keydown(e){13===e.keyCode&&this.click()}},ripples:!0}),U("div",{classes:"extension-name",children:[t.name]})]});f.appendChild(n),t.styles&&document.head.appendChild(U("link",{attributes:{rel:"stylesheet",href:t.styles}}));const i=t.sources||[];t.icon&&i.push(t.icon),t.styles&&i.push(t.styles),i.length&&caches.open(s).then(e=>e.addAll(i))}}},w=[["Notes","./js/extensions/notes.js"],["Todo","./js/extensions/todo.js"],["Barcode","./js/extensions/barcode.js"],["Min. Score Calc.","./js/extensions/min-score.js"]],f=U("div",{classes:"extension-menu"}),y=U("select",{classes:"select-input extension-list",children:[U("option",{attributes:{value:"CHOOSE",disabled:!0},html:"Add app"}),U("option",{attributes:{value:"FROM_URL"},html:"From URL"}),...w.map(e=>e[2]=U("option",{attributes:{value:e[1],disabled:u.includes(e[1])},html:e[0]}))],attributes:{value:"CHOOSE"},listeners:{change(e){v.disabled="CHOOSE"===y.value}}}),v=U("button",{classes:"button extension-add",children:["Add"],attributes:{disabled:!0},listeners:{click(t){let n=y.value;"CHOOSE"!==n&&("FROM_URL"===n&&(n=prompt("Enter app URL:")),n&&function(t){u.includes(t)?Promise.reject(new Error("Extension already added")):(u.push(t),m(t).then(()=>{storage.setItem(e,JSON.stringify(u));const n=w.find(e=>e[1]===t);n&&(n[2].disabled=!0)}))}(n),y.value="CHOOSE",v.disabled=!0)}},ripples:!0});return g.register({id:"menu",wrapper:U("div",{children:[f,U("div",{classes:"extension-list-wrapper",children:[y,v]}),U("button",{classes:"button extension-remove",children:["Remove apps"],listeners:{click(e){(h=!h)?(f.classList.add("extension-remove-mode"),this.classList.add("extension-removing"),this.childNodes[0].nodeValue="Done"):(f.classList.remove("extension-remove-mode"),this.classList.remove("extension-removing"),this.childNodes[0].nodeValue="Remove apps")}},ripples:!0})]}),name:"Apps"}),g})();})()
