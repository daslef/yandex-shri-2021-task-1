(()=>{"use strict";function i(i,e,t,n=!1){return`<div class="podium__item__pic ${n&&"podium__item__pic--selected"}">\n            <picture>\n                <source srcset="./images/4x/${i}" media="(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)"/>\n                <source srcset="./images/3x/${i}" media="(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)"/>\n                <source srcset="./images/2x/${i}" media="(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)"/>\n                <img class="podium__item__photo" src="./images/1x/${i}">\n            </picture>\n        </div>\n        <div class="podium__item__name ${n&&"podium__item__name--selected"}">${e}</div>\n        <div class="podium__item__score ${n&&"podium__item__score--selected"}">${t}</div>`}function e({direction:i,selected:e}){return`<svg \n            width="64" \n            height="64" \n            class="vote__arrow vote__arrow${"up"==i?"--up":"--down"} ${!0===e?"vote__arrow--selected":""}" \n            viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path \n                    fill-rule="evenodd" \n                    clip-rule="evenodd" \n                    d="M32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2ZM32 -2.79753e-06C14.3269 -4.34256e-06 4.34256e-06 14.3269 2.79753e-06 32C1.2525e-06 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 -1.2525e-06 32 -2.79753e-06ZM4.99999 32C4.99999 17.0883 17.0883 4.99999 32 4.99999C46.9117 4.99999 59 17.0883 59 32C59 46.9117 46.9117 59 32 59C17.0883 59 4.99999 46.9117 4.99999 32ZM38.9393 36.0607C39.5251 36.6464 40.4749 36.6464 41.0607 36.0607C41.6464 35.4749 41.6464 34.5251 41.0607 33.9393L33.0607 25.9393C32.4749 25.3536 31.5251 25.3536 30.9393 25.9393L22.9393 33.9393C22.3536 34.5251 22.3536 35.4749 22.9393 36.0607C23.5251 36.6464 24.4749 36.6464 25.0607 36.0607L32 29.1213L38.9393 36.0607Z" \n                />\n        </svg>`}function t(i){return`<div class="heatmap__element">\n            <img class="heatmap__image" src="./images/${0==i?"min":i<=2?"mid":i<=4?"max":"extra"}-${theme}.svg" />\n        </div>`}window.renderTemplate=function(n,a){let s;var d;return"leaders"==n?s=function(e,t,n){let a;if(n){console.log(e,t,n);const i=t.map((i=>i.id)).indexOf(n);a={...t[i],index:i}}return document.addEventListener("orientationchange",(()=>{location.reload()})),`<div class="slide__content podium">\n            ${t.slice(0,5).map(((t,n)=>function({srcSuffix:e,name:t,score:n,place:a,emoji:s,selectedUser:d}){const _=a>=4?"-small":a>=2?"-medium":"-large",c=window.screen.orientation.type;let r,l;if(c.startsWith("portrait")&&1==a&&d?.index>2)r=function(e){const{name:t,avatar:n,valueText:a}=e;let s='<div class="podium__item__awards podium__item__awards--selected">👍</div>';return s+=i(n,t,a,!0),s+='<div class="podium__item__delimiter"></div>',s+=`<div class="podium__item__place podium__item__place--selected">${e.index+1}</div>`,s}(d);else if(c.startsWith("landscape")&&5==a&&d?.index>4){const{avatar:i,name:e,valueText:t,index:n}=d;n++,r=""}else r="";return l=1==a?s:d?.name===t?"👍":"",`<div class="podium__item">\n            <div class="podium__item__awards">${l}</div>\n            ${i(e,t,n)}\n            <div class="podium__item__bar podium__item__bar${_}">\n                <div class="podium__item__place">${a}</div>\n                ${r}\n            </div>\n        </div>`}({srcSuffix:t.avatar,name:t.name,score:t.valueText,place:n+1,emoji:e,selectedUser:a}))).join("")}\n        </div>`}(a.emoji,a.users,a.selectedUserId):"vote"==n?s=function(i,t,n){const a=i=>function({srcSuffix:i,name:e,selected:t}){return`<div class="vote__item ${t?"vote__item--selected":""}">\n            <div class="vote__item__awards">${t?"👍":""}</div>\n            <div class="vote__item__pic">\n                <picture>\n                    <source srcset="./images/4x/${i}" media="(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)"/>\n                    <source srcset="./images/3x/${i}" media="(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)"/>\n                    <source srcset="./images/2x/${i}" media="(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)"/>\n                    <img class="vote__item__photo" src="./images/1x/${i}">\n                </picture>\n            </div>\n            <div class="vote__item__name">${e}</div>\n        </div>`}({srcSuffix:i.avatar,name:i.name,selected:i.id===t});return`<div class="slide__content vote">\n            <div class="slide__row slide__row--left">\n                ${a(n[0])}\n                ${a(n[3])}\n                ${a(n[6])}\n            </div>\n            <div class="slide__row slide__row--middle">\n                ${e({direction:"up",selected:!1})}\n                ${a(n[1])}\n                ${a(n[4])}\n                ${e({direction:"down",selected:!0})}\n            </div>\n            <div class="slide__row slide__row--right">\n                ${a(n[2])}\n                ${a(n[5])}\n                ${a(n[7])}\n            </div>\n        </div>`}(a.emoji,a.selectedUserId,a.users):"chart"==n?s=function(i,e){const t=function(i){return`<div class="chart__leaders">${i.slice(0,2).map((i=>function({srcSuffix:i,name:e,value:t}){return`<div class="chart__person">\n            <div class="chart__person__pic">\n                <picture>\n                    <source srcset="./images/4x/${i}" media="(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)"/>\n                    <source srcset="./images/3x/${i}" media="(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)"/>\n                    <source srcset="./images/2x/${i}" media="(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)"/>\n                    <img class="chart__person__photo" src="./images/1x/${i}">\n                </picture>\n            </div>\n            <div class="chart__person__meta">\n                <div class="chart__person__name">${e}</div>\n                <div class="chart__person__value">${t}</div>\n            </div>\n        </div>`}({srcSuffix:i.avatar,name:i.name,value:i.valueText}))).join('<div class="chart__leaders__separator"></div>')}</div>`}(e);return`<div class="slide__content chart">\n            ${function(i){let e;for(const[t,n]of i.entries())if(n.hasOwnProperty("active")&&!0===n.active){e=t;break}const t=Math.max(e-6,0),n=Math.min(e+2,i.length),a=i.slice(t,n+1),s=Math.max(...a.map((i=>i.value)));return`<div class="chart__list">${a.map(((i,e)=>function({value:i,title:e,isCurrent:t,maxValue:n}){let a=i/n*66.7;return a=a<1?"8px":`${a}%`,`<div class="chart__item ${t?"chart__item--active":""}">\n            <div class="chart__item__value">${i>0?i:""}</div>\n            <div class="chart__item__bar" style="min-height:${a}"></div>\n            <div class="chart__item__title">${e}</div>\n        </div>`}({value:i.value,title:i.title,isCurrent:i.hasOwnProperty("active"),maxValue:s}))).join("")}</div>`}(i)}\n            ${t}\n        </div>`}(a.values,a.users):"diagram"==n?(a.totalText,a.differenceText,s=`<div class="slide__content diagram">\n            ${function(i,e,t){const n=t.map((i=>i.valueText)),a=s.reduce(((i,e)=>i+e),0),s=n.map((i=>i/a));return'<div class="diagram__donut">\n        </div>'}(0,0,d=a.categories)}\n            ${function(i){return`<div class="diagram__legend">${i.map((i=>function({title:i,value:e,difference:t}){return`<div class="legend__item">\n            <div class="legend__item__indicator"></div>\n            <div class="legend__item__title">${i}</div>\n            <div class="legend__item__values">\n                <div class="legend__item__diff">${t.slice(0,t.indexOf(" "))}</div>\n                <div class="legend__item__total">${e.slice(0,t.indexOf(" "))}</div>\n            </div>\n        </div>`}({title:i.title,value:i.valueText,difference:i.differenceText}))).join('<div class="diagram__legend__separator"></div>')}</div>`}(d)}\n        </div>`):"activity"==n&&(s=function(i){const e=document.body.className.substr(6),n=window.screen.orientation.type;return document.addEventListener("orientationchange",(()=>{location.reload()})),`<div class="slide__content activity">\n            ${function(i,e){let n=[];return n=e.startsWith("landscape")?function(i){const e=[],n=["mon","tue","wed","thu","fri","sat","sun"];for(const a of n){const s=[];i[a].map(((i,e)=>{e%2==1?s[s.length-1]+=i:s.push(i)}));const d=s.map((i=>t(i))),_='<div class="heatmap__gap"></div>';n.indexOf(a)%2==0?d.push(_):d.unshift(_),e.push(d)}return e}(i):function(i){const e=[];for(let n=0;n<24;n++){const a=[i.mon[n],i.tue[n],i.wed[n],i.thu[n],i.fri[n],i.sat[n],i.sun[n]].map((i=>t(i))),s='<div class="heatmap__gap"></div>';n%2==0?a.push(s):a.unshift(s),e.push(a)}return e}(i),`<div class="activity__heatmap">\n            ${n.map(((i,e)=>`<div class="heatmap__row" style="bottom: ${16.7*(23-e)}px;">\n            ${i.join("")}\n        </div>`)).join("")}\n        </div>`}(i.data,n)}\n            ${function(i,e){return`<div class="activity__legend">\n            <div class="activity__legend__item">\n                <div class="activity__legend__pic">\n                    <img src=./images/slider-unit-${i}.svg />\n                </div>\n                <div class="activity__legend__text">${e.startsWith("landscape")?"2 часа":"1 час"}</div>\n            </div>\n            <div class="activity__legend__item">\n                <div class="activity__legend__pic activity__legend__pic--min"></div>\n                <div class="activity__legend__text">0</div>\n            </div>\n            <div class="activity__legend__item">\n                <div class="activity__legend__pic activity__legend__pic--mid"></div>\n                <div class="activity__legend__text">1 — 2</div>\n            </div>\n            <div class="activity__legend__item">\n                <div class="activity__legend__pic activity__legend__pic--max"></div>\n                <div class="activity__legend__text">3 — 4</div>\n            </div>\n            <div class="activity__legend__item">\n                <div class="activity__legend__pic activity__legend__pic--extra"></div>\n                <div class="activity__legend__text">5 — 6</div>\n            </div>\n        </div>`}(e,n)}\n        </div>`}(a)),`<div class="slide">\n            <div class="slide__heading">${a.title}</div>\n            <div class="slide__subhead">${a.subtitle}</div>\n            ${s}\n        </div>`}})();