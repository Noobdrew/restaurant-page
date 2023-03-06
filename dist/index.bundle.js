(()=>{"use strict";var e={666:(e,t,a)=>{function n(){const e=document.createElement("div");e.classList.add("home-page");const t=document.createElement("div");t.classList.add("title"),t.innerText="Mercelerri",e.appendChild(t);const a=document.createElement("div");a.classList.add("sub-title"),a.innerText="Le Croissant",t.appendChild(a);const n=document.createElement("div");n.classList.add("title-description"),n.innerText="Come and have one of the best croissants in France, made by the world renowned Gilles Marchal.",e.appendChild(n);const s=document.createElement("small");s.innerText=" Venez déguster l'un des meilleurs croissants de France, réalisé par le célèbre Gilles Marchal.",n.appendChild(s);const i=document.querySelector(".content");return i.appendChild(e),i.appendChild(e)}a.d(t,{Z:()=>n})},83:(e,t,a)=>{function n(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("menu-list");class a{constructor(e,t,a,n){this.frenchTitle=e,this.engTitle=t,this.itemPrice=a,this.menuDisc=n}}const n=[];let s=0;function i(){const e=document.createElement("div");e.classList.add("menu-item"),e.innerHTML=`\n    <div class="menu-title">\n    <div class="french-title">${n[s].frenchTitle}</div>\n    <div class="item-price">${n[s].itemPrice}</div>\n    </div>\n    <div class="eng-title">${n[s].engTitle}</div>\n    <div class="menu-description">${n[s].menuDisc}</div>\n    `,t.appendChild(e),s++}n[0]=new a("Croissant au beurre","(Butter Croissant)","1.50$","Croassant baked with homemade butter"),n[1]=new a("Croissant au Jambon et Fromage","(Croissant with Ham and Cheese)","3.50$","Croasssant baked with ham from free range turkeys and croissant cheese"),n[2]=new a("Pain au chocolat","(Chocolate Croassant)","2.50$","Croassant baked with Caribian chocolate"),n[3]=new a("Croissant aux Fraises ","(Strawberry Croissant)","2.50$","Croassant baked with local wild strawberries "),n[4]=new a("Croissant à la Pâte d'Amande","(Croissant with Almond Paste)","3.50$","Croassant baked with the best almands in France"),n[5]=new a("Croissant avec Glace","(Croissant with Ice Cream)","2.00$","Croassant filled with home made vanilla ice cream"),n[6]=new a("Croissant au bacon","(Croissant with Bacon)","2.50$","Croassant baked with free range bacon"),n[7]=new a("Croissant à la Mozzarella et au Basilic","(Croissant with Mozzarella and Basil)","3.00$","Croassant baked with organic mozzarella and wild basil"),n[8]=new a("Croissant à l'ail et au fromage","(Croissant with Garlic and Cheese)","2.50$","Croassant baked with Pont l'Évêque cheese and wild garlic");for(let e=0;e<n.length;e++)i();return e.appendChild(t)}a.d(t,{Z:()=>n}),console.log(n())}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=a(666),t=a(83);const n=document.querySelector(".home"),s=document.querySelector(".menu"),i=document.querySelector(".contact"),r=document.querySelector(".content");function c(a){a.target.classList.contains("active")||(n.classList.remove("active"),s.classList.remove("active"),i.classList.remove("active"),a.target.classList.add("active"),console.log(a.target),n.classList.contains("active")&&(r.innerHTML="",console.log("create home"),(0,e.Z)()),s.classList.contains("active")&&(r.innerHTML="",console.log("create menu"),(0,t.Z)()),i.classList.contains("active")&&(r.innerHTML="",console.log("create contacts")))}n.addEventListener("click",c),s.addEventListener("click",c),i.addEventListener("click",c)})()})();