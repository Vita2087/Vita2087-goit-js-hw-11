import{a as f,S as m,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50519901-1dec8c4abba0943f2b3355c3a",g="https://pixabay.com/api/";async function h(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p>Likes: ${t}</p>
        <p>Views: ${i}</p>
        <p>Comments: ${d}</p>
        <p>Downloads: ${p}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const u=document.querySelector(".form"),v=u.querySelector("input");u.addEventListener("submit",async s=>{s.preventDefault();const r=v.value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight"});return}w(),S();try{const o=await h(r);o.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(o.hits)}catch(o){a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{q()}});
//# sourceMappingURL=index.js.map
