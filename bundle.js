(()=>{"use strict";var e={224:(e,t,i)=>{e.exports=i.p+"75a92627dfb79a885d17.svg"},394:(e,t,i)=>{e.exports=i.p+"bcae1c66bd926e1444c4.svg"},779:(e,t,i)=>{e.exports=i.p+"d62e032be6b38f028aca.mp4"},691:(e,t,i)=>{e.exports=i.p+"87116b94ff0ec2ae0504.mp4"},973:(e,t,i)=>{e.exports=i.p+"e3bd008f056c1a2530ba.mp4"},915:(e,t,i)=>{e.exports=i.p+"bc053742fa1b8610e239.mp4"}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}i.p="",(()=>{const e=document.querySelector(".expand-aws-button"),t=document.querySelector(".aws-details");document.querySelector(".expand-aws").addEventListener("click",(()=>{"+"===e.innerText?e.innerText="—":e.innerText="+",t.classList.toggle("expanded-aws-details")}));var s=i(691),a=i(973),o=i(779),r=i(915);const n={github:{img:i(224),alt:"github"},website:{img:i(394),alt:"website"}},c=(e,t)=>`<a target="_blank" href=${t}><img src=${e.img} alt=${e.alt}></a>`,d=[{class:"spring",video:s,description:"Conceptualized by a psychologist, Hero’s Journey Interactive is a multimedia application serving clinical and research purposes. I played key roles in both development and deployment.",icons:`${c(n.github,"https://google.com")} ${c(n.website,"https://youtube.com")}`,stack:"Angular, AWS, Express/Node, Postgres"},{class:"summer",video:a,description:"ore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, c",icons:"icon icon",stack:"Angular, AWS, Express/Node, Postgres"},{class:"fall",video:o,description:"itecto beatae vitae dicta sunt explicabo. Neitecto beatae vitae dicta sunt explicabo. Ne",icons:"icon icon",stack:"angular, node, whatever"},{class:"winter",video:r,description:"re veritatis et quare veritatis et quare veritatis et qua",icons:"icon icon",stack:"angular, node, whatever"}];Number.prototype.mod=function(){const e=d.length;return(this%e+e)%e};const l=document.querySelector(".slider-frame"),p=[...document.querySelectorAll(".slider-button-container > input")],u=()=>{p.forEach((e=>e.disabled=!e.disabled))};let m=0;const v=e=>{u(),"previous"===e?m=(m-1).mod():"next"===e&&(m=(m+1).mod());let t=(e=>{const t=d[e];let i=document.createElement("div");return i.classList.add("slide",t.class,"init-fade"),i.innerHTML=`<video muted autoplay loop playsinline><source src=${t.video} type="video/mp4">Sorry, your browser does not support embedded videos</video><div class="work-copy"><p class="description-copy">${t.description}</p><div class="work-icon-container">${t.icons}</div><p class="stack-copy">${t.stack}</p></div>`,i})(m);l.appendChild(t);let i=t.children[0];i.addEventListener("loadeddata",(()=>{4===i.readyState&&(t.classList.add("end-fade"),setTimeout((()=>{"previous"!==e&&"next"!==e||l.children[1].remove(),u()}),400))}))};v("init"),p[0].addEventListener("click",(()=>v("previous"))),p[1].addEventListener("click",(()=>v("next"))),document.querySelector(".mail-container > input").addEventListener("click",(()=>{document.querySelector(".mail-container > span").classList.toggle("expanded-email")}))})()})();