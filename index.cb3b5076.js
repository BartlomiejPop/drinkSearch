!function(){var t,e,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};t=void 0!==o?o:"undefined"!=typeof window?window:i,e=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",l={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},r=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},d=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,m=function(s,d,m,p){if(!r("body"))return!1;e||y.Notify.init({});var u=c(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof p&&!Array.isArray(p)){var x={};"object"==typeof m?x=m:"object"==typeof p&&(x=p),e=c(!0,e,x)}var g,b,h=e[s.toLocaleLowerCase("en")];f++,"string"!=typeof d&&(d="Notiflix "+s),e.plainText&&(g=d,(b=t.document.createElement("div")).innerHTML=g,d=b.textContent||b.innerText||""),!e.plainText&&d.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>e.messageMaxLength&&(d=d.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);var v=t.document.getElementById(l.wrapID)||t.document.createElement("div");if(v.id=l.wrapID,v.style.width=e.width,v.style.zIndex=e.zindex,v.style.opacity=e.opacity,"center-center"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.top=e.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===e.position?(v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.left="auto"):"left-top"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===e.position?(v.style.left=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=e.distance,v.style.top=e.distance,v.style.left="auto",v.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(l.overlayID)||t.document.createElement("div");w.id=l.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=h.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(l.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(l.wrapID)||t.document.body.appendChild(v);var k=t.document.createElement("div");k.id=e.ID+"-"+f,k.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof m?"nx-with-close-button":"")+" "+("function"==typeof m?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=h.textColor,k.style.background=h.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof m&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?N:"");else{var I="";s===o?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+d+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var E=t.document.getElementById(l.wrapID);E.insertBefore(k,E.firstChild)}else t.document.getElementById(l.wrapID).appendChild(k);var S=t.document.getElementById(k.id);if(S){var C,z,L=function(){S.classList.add("nx-remove");var e=t.document.getElementById(l.overlayID);e&&v.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(C)},T=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),v.childElementCount<=0&&null!==v.parentNode){v.parentNode.removeChild(v);var e=t.document.getElementById(l.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(z)};if(e.closeButton&&"function"!=typeof m&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){L();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof m||e.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof m&&m(),L();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof m){var A=function(){C=setTimeout((function(){L()}),e.timeout),z=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};A(),e.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(C),clearTimeout(z)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),A()})))}}if(e.showOnlyTheLastOne&&f>0)for(var B=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+f+"])"),W=0;W<B.length;W++){var D=B[W];null!==D.parentNode&&D.parentNode.removeChild(D)}e=c(!0,e,u)},y={Notify:{init:function(o){e=c(!0,l,o),function(e,o){if(!r("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(d,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){m(o,t,e,i)},failure:function(t,e,o){m(i,t,e,o)},warning:function(t,e,o){m(n,t,e,o)},info:function(t,e,o){m(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}},"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof i?i=e(t):t.Notiflix=e(t);var n,a=document.getElementById("filter"),l=document.querySelector("#list"),s=document.querySelector(".add-drink"),r=document.querySelector(".add-drink-modal"),c=document.querySelector(".modal-shadow"),d=document.querySelector(".submit"),f=document.querySelector(".add-drink-input"),m=document.querySelector(".add-textarea"),y=document.querySelector(".span-popup"),p=document.querySelector(".description-modal"),u=document.querySelector(".description"),x=document.querySelector(".deleted-drinks"),g=document.querySelector(".deleted-drinks-modal"),b=document.querySelector(".deleted-drinks-list"),h=document.querySelector(".delete-popup-cancel"),v=document.querySelector(".delete-popup-remove"),w=document.querySelector(".delete-popup-div"),k=document.querySelector(".clear-storage"),N=document.querySelector(".delete-popup-text"),I=27,E=[],S=[],C=function(){if(""!==m.value&&""!==f.value){l.insertAdjacentHTML("beforeend","\n\t<li\n\t\t\t\t\t\t\tid=".concat(I,'\n\t\t\t\t\t\t\tdescription="').concat(m.value,'">\n\t\t\t\t\t\t\t').concat(f.value,'<i\n\t\t\t\t\t\t\t\tstyle="display: none"\n\t\t\t\t\t\t\t\tclass="fa-regular fa-square-minus"></i>\n\t\t\t\t\t\t</li>'));S.push({id:I,description:m.value,name:f.value}),localStorage.setItem("savedDrinks",JSON.stringify(S)),m.value="",f.value="",y.style.display="none",I++,z(),A(),i.Notify.success("Pomyślnie dodane napój")}else y.style.display="block"},z=function(){r.style.opacity="0",c.style.opacity="0",p.style.opacity="0",w.style.display="none",setTimeout((function(){g.style.display="none",r.style.display="none",c.style.display="none",p.style.display="none"}),"600")},L=function(t){console.log(document.getElementById(t));l.insertAdjacentHTML("beforeend","\n\t<li\n\t\t\t\t\t\t\tid=".concat(t,'\n\t\t\t\t\t\t\tdescription="').concat(document.getElementById(t).attributes[1].textContent,'">\n\t\t\t\t\t\t\t').concat(document.getElementById(t).textContent,'<i\n\t\t\t\t\t\t\t\tstyle="display: none"\n\t\t\t\t\t\t\t\tclass="fa-regular fa-square-minus"></i>\n\t\t\t\t\t\t</li>'));(document.querySelector(".class".concat(t)).remove(),E.forEach((function(e){e.id==t&&(E.splice(E.indexOf(e),1),S.push(e),localStorage.setItem("savedDrinks",JSON.stringify(S)))})),localStorage.setItem("drinksToDelete",JSON.stringify(E)),0===E.length&&(x.style.display="none",g.style.opacity="0",c.style.opacity="0",setTimeout((function(){g.style.display="none",c.style.display="none"}),"600"),b.innerHTML=""),screen.availWidth<1280)&&(document.getElementById(t).childNodes[1].style.display="block");A()},T=function(t){(N.textContent="Usunąć permamentnie?",w.style.display="flex",document.addEventListener("click",(function(e){if(e.target===h)w.style.display="none";else if(e.target===v){var o=document.querySelector(".class".concat(t));o.remove(),E.forEach((function(e){e.id==t&&(E.splice(E.indexOf(e),1),E=E.filter((function(e){return e.id!=t})),localStorage.setItem("drinksToDelete",JSON.stringify(E)),0===E.length&&(x.style.display="none",g.style.opacity="0",c.style.opacity="0",setTimeout((function(){g.style.display="none",c.style.display="none"}),"600"),b.innerHTML=""))})),w.style.display="none",+o.id>25&&i.Notify.success("Usunięto permamentnie.")}else e.target===c&&(w.style.display="none")})),screen.availWidth<1280)&&(document.getElementById(t).childNodes[1].style.display="block")};a.addEventListener("input",(function(t){var e=t.target.value.toLowerCase();document.querySelectorAll("li").forEach((function(t){return t.textContent.toLowerCase().includes(e)?t.style.display="flex":t.style.display="none"}))})),s.addEventListener("click",(function(){r.style.opacity="1",c.style.opacity="1",r.style.display="flex",c.style.display="block",y.style.display="none",c.addEventListener("click",z),d.addEventListener("click",(function(){C()}))})),x.addEventListener("click",(function(){g.style.display="flex",g.style.opacity="1",c.style.opacity="1",c.style.display="block",c.addEventListener("click",(function(){g.style.opacity="0",c.style.opacity="0",setTimeout((function(){g.style.display="none",c.style.display="none"}),"600"),b.innerHTML=""})),E.forEach((function(t){t&&((n=document.createElement("li")).innerHTML='<li id="'.concat(t.id,'" class="deleted-drink class').concat(t.id,'" description="').concat(t.description,'">').concat(t.name,'<div><button  class="save"><i class="fa-solid fa-share"></i></button><button class="delete-permament"><i class="fa-solid fa-xmark"></i></button></div></li>'),b.appendChild(n))}));var t=document.querySelectorAll(".save"),e=document.querySelectorAll(".delete-permament");t.forEach((function(t){return t.addEventListener("click",(function(t){L(+t.currentTarget.parentElement.parentElement.id)}))})),e.forEach((function(t){return t.addEventListener("click",(function(t){T(+t.currentTarget.parentElement.parentElement.id)}))}))})),k.addEventListener("click",(function(){N.textContent="Usunąć pamięć lokalną i zresetować aplikację?",w.style.display="flex",document.addEventListener("click",(function(t){t.target===v?(localStorage.clear(),w.style.display="none",i.Notify.success("Pamięć lokalna usunięta. Strona zostanie przywrócona do stanu pierwotnego po odświerzeniu.")):t.target===h&&(w.style.display="none")}))}));var A=function(){document.querySelectorAll("li").forEach((function(t){t.addEventListener("mouseover",(function(t){var e,o;e=+t.target.id,(o=document.getElementById(e).childNodes[1]).style.display="block",o.addEventListener("click",_.throttle((function(){document.getElementById(e)&&(E.push({id:document.getElementById(e).id,name:document.getElementById(e).innerText,description:document.getElementById(e).attributes[1].value}),console.log(E),localStorage.setItem("drinksToDelete",JSON.stringify(E)),S=S.filter((function(t){return+t.id!==e})),localStorage.setItem("savedDrinks",JSON.stringify(S))),document.getElementById(e).id<26&&i.Notify.info("Elementy początkowe nie mogą być usunięte permamentnie z listy. Usuwanie ich może doprowadzić do duplikacji"),l.removeChild(document.getElementById(e)),E.length>0&&(x.style.display="block")}),300))})),t.addEventListener("mouseleave",(function(t){var e,o;e=+t.target.id,o=document.getElementById(e).childNodes[1],screen.availWidth>1280&&(o.style.display="none")})),t.addEventListener("click",(function(t){var e,o;"I"!==t.target.nodeName&&(e=+t.target.id,o=document.getElementById(e).attributes[1].value,c.style.opacity="1",p.style.opacity="1",c.style.display="block",p.style.display="block",u.style.display="block",u.textContent=o,c.addEventListener("click",z))}))}))};localStorage.getItem("savedDrinks")&&(JSON.parse(localStorage.getItem("savedDrinks")).forEach((function(t){return S.push(t)})),JSON.parse(localStorage.getItem("savedDrinks")).forEach((function(t){return l.insertAdjacentHTML("beforeend","<li\n\t\t\t\t\t\t\tid=".concat(t.id,'\n\t\t\t\t\t\t\tdescription="').concat(t.description,'">\n\t\t\t\t\t\t\t').concat(t.name,'<i\n\t\t\t\t\t\t\t\tstyle="display: none"\n\t\t\t\t\t\t\t\tclass="fa-regular fa-square-minus"></i>\n\t\t\t\t\t\t</li>'))}))),localStorage.getItem("drinksToDelete")&&JSON.parse(localStorage.getItem("drinksToDelete")).forEach((function(t){return E.push(t)})),E.length&&(x.style.display="block"),I+=S.length,A()}();
//# sourceMappingURL=index.cb3b5076.js.map