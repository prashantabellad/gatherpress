(()=>{"use strict";var e,t={110:(e,t,n)=>{const r=window.wp.blocks,s=window.moment;var i=n.n(s);const a=window.wp.i18n,o=window.wp.blockEditor,d=window.wp.components,c=window.wp.element,l=(e,t="")=>{for(const[n,r]of Object.entries(e)){let e=n;t&&(e+="_"+String(t));const s=new CustomEvent(e,{detail:r});dispatchEvent(s)}},m=window.wp.data,p=window.wp.apiFetch;var u=n.n(p);function h(){(0,m.dispatch)("core/editor")?.editPost({meta:{_non_existing_meta:!0}})}function f(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function g(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),r=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[r]=t}function v(){const e=i().tz(f("eventDetails.dateTime.datetime_end"),b());return"gatherpress_event"===(0,m.select)("core/editor")?.getCurrentPostType()&&i().tz(b()).valueOf()>e.valueOf()}function T(){const e="gatherpress_event_past",t=(0,m.dispatch)("core/notices");t.removeNotice(e),v()&&t.createNotice("warning",(0,a.__)("This event has already passed.","gatherpress"),{id:e,isDismissible:!1})}const x=window.wp.date,j=window.ReactJSXRuntime,D="YYYY-MM-DDTHH:mm:ss",_="YYYY-MM-DD HH:mm:ss",w=i().tz(b()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(D),z=i().tz(w,b()).add(2,"hours").format(D);function S(){return P(f("settings.dateFormat"))+" "+P(f("settings.timeFormat"))}function b(e=f("eventDetails.dateTime.timezone")){return i().tz.zone(e)?e:(0,a.__)("GMT","gatherpress")}function y(e=""){const t=/^([+-])(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e}function O(e,t=null){!function(e){const t=i().tz(f("eventDetails.dateTime.datetime_end"),b()).valueOf(),n=i().tz(e,b()).valueOf();n>=t&&E(i().tz(n,b()).add(2,"hours").format(D))}(e),g("eventDetails.dateTime.datetime_start",e),"function"==typeof t&&t(e),h()}function E(e,t=null){!function(e){const t=i().tz(f("eventDetails.dateTime.datetime_start"),b()).valueOf(),n=i().tz(e,b()).valueOf();n<=t&&O(i().tz(n,b()).subtract(2,"hours").format(D))}(e),g("eventDetails.dateTime.datetime_end",e),null!==t&&t(e),h()}function P(e){const t={d:"DD",D:"ddd",j:"D",l:"dddd",N:"E",S:"o",w:"e",z:"DDD",W:"W",F:"MMMM",m:"MM",M:"MMM",n:"M",t:"",L:"",o:"YYYY",Y:"YYYY",y:"YY",a:"a",A:"A",B:"",g:"h",G:"H",h:"hh",H:"HH",i:"mm",s:"ss",u:"SSS",e:"zz",I:"",O:"",P:"",T:"",Z:"",c:"",r:"",U:"X"};return String(e).split("").map(((e,n,r)=>{const s=r[n-1];return e in t&&"\\"!==s?t[e]:e})).join("")}const k=e=>{const{isSelected:t}=e,n=t?"none":"block";return(0,j.jsxs)("div",{style:{position:"relative"},children:[e.children,(0,j.jsx)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:n}})]})},C=e=>{const{dateTimeStart:t}=e;return i().tz(t,b()).format(S())},M=e=>{const{dateTimeEnd:t}=e;return i().tz(t,b()).format(S())},Y=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e,r=(0,x.getSettings)(),s=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,j.jsx)(d.DateTimePicker,{currentDate:t,onChange:e=>O(e,n),is12Hour:s})},F=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e,r=(0,x.getSettings)(),s=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,j.jsx)(d.DateTimePicker,{currentDate:t,onChange:e=>E(e,n),is12Hour:s})},$=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e;return(0,c.useEffect)((()=>{n(i().tz(function(){let e=f("eventDetails.dateTime.datetime_start");return e=""!==e?i().tz(e,b()).format(D):w,g("eventDetails.dateTime.datetime_start",e),e}(),b()).format(D)),l({setDateTimeStart:t}),T()})),(0,j.jsx)(d.PanelRow,{children:(0,j.jsxs)(d.Flex,{direction:"column",gap:"0",children:[(0,j.jsx)(d.FlexItem,{children:(0,j.jsx)("label",{htmlFor:"gatherpress-datetime-start",children:(0,a.__)("Start","gatherpress")})}),(0,j.jsx)(d.FlexItem,{children:(0,j.jsx)(d.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,j.jsx)(d.Button,{id:"gatherpress-datetime-start",onClick:n,"aria-expanded":e,isLink:!0,children:(0,j.jsx)(C,{dateTimeStart:t})}),renderContent:()=>(0,j.jsx)(Y,{dateTimeStart:t,setDateTimeStart:n})})})]})})},I=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e;return(0,c.useEffect)((()=>{n(i().tz(function(){let e=f("eventDetails.dateTime.datetime_end");return e=""!==e?i().tz(e,b()).format(D):z,g("eventDetails.dateTime.datetime_end",e),e}(),b()).format(D)),l({setDateTimeEnd:t}),T()})),(0,j.jsx)(d.PanelRow,{children:(0,j.jsxs)(d.Flex,{direction:"column",gap:"0",children:[(0,j.jsx)(d.FlexItem,{children:(0,j.jsx)("label",{htmlFor:"gatherpress-datetime-end",children:(0,a.__)("End","gatherpress")})}),(0,j.jsx)(d.FlexItem,{children:(0,j.jsx)(d.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,j.jsx)(d.Button,{id:"gatherpress-datetime-end",onClick:n,"aria-expanded":e,isLink:!0,children:(0,j.jsx)(M,{dateTimeEnd:t})}),renderContent:()=>(0,j.jsx)(F,{dateTimeEnd:t,setDateTimeEnd:n})})})]})})},H=e=>{const{timezone:t,setTimezone:n}=e,r=f("misc.timezoneChoices");return(0,c.useEffect)((()=>{n(f("eventDetails.dateTime.timezone"))}),[n]),(0,c.useEffect)((()=>{l({setTimezone:f("eventDetails.dateTime.timezone")})})),(0,j.jsx)(d.PanelRow,{children:(0,j.jsx)(d.SelectControl,{label:(0,a.__)("Time Zone","gatherpress"),value:y(t),onChange:e=>{e=function(e=""){const t=/^UTC([+-])(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const r=e.replace(t,"$2").padStart(2,"0");let s=e.replace(t,"$3");return""===s&&(s=":00"),s=s.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+r+s}return e}(e),n(e),g("eventDetails.dateTime.timezone",e),h()},children:Object.keys(r).map((e=>(0,j.jsx)("optgroup",{label:e,children:Object.keys(r[e]).map((t=>(0,j.jsx)("option",{value:t,children:r[e][t]},t)))},e)))})})},G=()=>{const[e,t]=(0,c.useState)(),[n,r]=(0,c.useState)(),[s,o]=(0,c.useState)();return function(){const e=(0,m.select)("core/editor").isSavingPost(),t=(0,m.select)("core/editor").isAutosavingPost();"gatherpress_event"===(0,m.select)("core/editor")?.getCurrentPostType()&&e&&!t&&u()({path:f("urls.eventRestApi")+"/datetime",method:"POST",data:{post_id:f("eventDetails.postId"),datetime_start:i().tz(f("eventDetails.dateTime.datetime_start"),b()).format(_),datetime_end:i().tz(f("eventDetails.dateTime.datetime_end"),b()).format(_),timezone:f("eventDetails.dateTime.timezone"),_wpnonce:f("misc.nonce")}}).then((()=>{!function(){const e="gatherpress_event_communcation",t=(0,m.dispatch)("core/notices");t.removeNotice(e),"publish"!==(0,m.select)("core/editor").getEditedPostAttribute("status")||v()||t.createNotice("success",(0,a.__)("Send an event update to members via email?","gatherpress"),{id:e,isDismissible:!0,actions:[{onClick:()=>{l({setOpen:!0})},label:(0,a.__)("Compose Message","gatherpress")}]})}()}))}(),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h3",{children:(0,a.__)("Date & time","gatherpress")}),(0,j.jsx)($,{dateTimeStart:e,setDateTimeStart:t}),(0,j.jsx)(I,{dateTimeEnd:n,setDateTimeEnd:r}),(0,j.jsx)(H,{timezone:s,setTimezone:o})]})},N=(e,t,n)=>{const r=P(f("settings.dateFormat")),s=P(f("settings.timeFormat")),o=f("settings.showTimezone")?"z":"",d=r+" "+s,c=b(n);let l=r+" "+s+" "+o;return i().tz(e,c).format(r)===i().tz(t,c).format(r)&&(l=s+" "+o),(0,a.sprintf)(/* translators: %1$s: datetime start, %2$s: datetime end, %3$s timezone. */ /* translators: %1$s: datetime start, %2$s: datetime end, %3$s timezone. */
(0,a.__)("%1$s to %2$s %3$s","gatherpress"),i().tz(e,c).format(d),i().tz(t,c).format(l),(m=b(m=c),(0,a.__)("GMT","gatherpress")!==m?"":function(e=""){return e.replace(":","")}(f("eventDetails.dateTime.timezone"))));var m},B=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"1.0.1","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"Displays the date and time for an event.","attributes":{"eventEnd":{"type":"string"},"eventStart":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,r.registerBlockType)(B,{edit:()=>{const e=(0,o.useBlockProps)(),[t,n]=(0,c.useState)(w),[r,s]=(0,c.useState)(z),[i,a]=(0,c.useState)(b());return((e,t="")=>{for(const[n,r]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{r(e.detail)}),!1)}})({setDateTimeEnd:s,setDateTimeStart:n,setTimezone:a}),(0,j.jsx)("div",{...e,children:(0,j.jsx)(k,{children:(0,j.jsxs)(d.Flex,{justify:"normal",align:"center",gap:"4",children:[(0,j.jsx)(d.FlexItem,{display:"flex",className:"gatherpress-event-date__icon",children:(0,j.jsx)(d.Icon,{icon:"clock"})}),(0,j.jsx)(d.FlexItem,{children:N(t,r,i)}),"string"==typeof(0,m.select)("core/editor")?.getCurrentPostType()&&(0,j.jsx)(o.InspectorControls,{children:(0,j.jsx)(d.PanelBody,{children:(0,j.jsx)(G,{})})})]})})})},save:()=>null})}},n={};function r(e){var s=n[e];if(void 0!==s)return s.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,s,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,s,i]=e[l],o=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(o=!1,i<a&&(a=i));if(o){e.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,s,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={532:0,4:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var s,i,[a,o,d]=n,c=0;if(a.some((t=>0!==e[t]))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(d)var l=d(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=r.O(void 0,[4],(()=>r(110)));s=r.O(s)})();