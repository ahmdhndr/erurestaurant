!function(n){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);for(l&&l(e);p.length;)p.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,s=1;s<t.length;s++){var u=t[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},a={0:0},i=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([12,2,1]),t()}([,,,,,,,function(n,e,t){var r=t(2),a=t(8);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},function(n,e,t){(e=t(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Poppins:wght@300;400;600&display=swap);"]),e.push([n.i,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  color: #1b1a17;\n}\n\nimg {\n  display: block;\n}\n\nli {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.skip-link {\n  position: absolute;\n  top: -50px;\n  background: #1b1a17;\n  color: #f0a500;\n  padding: 8px;\n  border-radius: 4px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/* Header */\n.header-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f0a500;\n  padding: 10px 20px;\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  position: sticky;\n  top: 0;\n  left: 0;\n}\n\n.header-bar > .header-bar__title {\n  font-size: 26px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  user-select: none;\n  color: #1b1a17;\n}\n\n.header-bar > .hamburger-btn {\n  display: block;\n  border: 0;\n  background-color: transparent;\n}\n.header-bar > .hamburger-btn > svg {\n  display: block;\n  fill: #1b1a17;\n  margin: 0;\n}\n\n/* Nav */\n.nav-menu {\n  background: #f0a500;\n  max-width: 350px;\n  width: 100%;\n  position: fixed;\n  top: 63px;\n  transform: translate(-350px, 0);\n  transition: transform 300ms ease;\n}\n.nav-menu.show {\n  transform: translate(0, 0);\n}\n\n.nav-menu > .nav-menu__list {\n  display: grid;\n}\n\n.nav-menu > .nav-menu__list > .nav-menu__item {\n  text-align: center;\n  font-size: 20px;\n  padding: 10px 0;\n}\n\n.nav-menu > .nav-menu__list > .nav-menu__item:nth-child(even) {\n  border-top: 2px solid #1b1a17;\n  border-bottom: 2px solid #1b1a17;\n}\n\n.nav-menu > .nav-menu__list > .nav-menu__item a {\n  color: #1b1a17;\n  display: block;\n  padding: 10px;\n}\n\n/* Hero */\n.hero {\n  width: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.hero > .hero__image img {\n  width: 100%;\n  aspect-ratio: unset;\n  object-fit: cover;\n  object-position: center;\n}\n\n/* Main */\nmain {\n  /* max-width: 950px; */\n  width: 100%;\n  min-height: 100vh;\n  margin: 0 auto;\n  padding: 20px 30px;\n}\n\nmain > .main__title {\n  font-size: 22px;\n  margin-bottom: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\nmain > .content > .restaurant-list {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 30px;\n}\n\nmain > .content > .restaurant-list > .restaurant-list__item {\n  box-shadow: 2px 5px 10px 0 rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  border-radius: 8px;\n}\n\nmain > .content > .restaurant-list > .restaurant-list__item > .restaurant-figure > img {\n  width: 100%;\n  display: block;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  object-position: center;\n}\n\nmain > .content > .restaurant-list > .restaurant-list__item > .restaurant-content {\n  padding: 20px;\n}\n\nmain\n  > .content\n  > .restaurant-list\n  > .restaurant-list__item\n  > .restaurant-content\n  > .restaurant-content__text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\nmain\n  > .content\n  > .restaurant-list\n  > .restaurant-list__item\n  > .restaurant-content\n  > .restaurant-content__text\n  > .rating {\n  background: #1b1a17;\n  color: #f0a500;\n  padding: 5px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\nmain\n  > .content\n  > .restaurant-list\n  > .restaurant-list__item\n  > .restaurant-content\n  > .restaurant-content__text\n  > .rating\n  > span {\n  vertical-align: middle;\n}\n\nmain\n  > .content\n  > .restaurant-list\n  > .restaurant-list__item\n  > .restaurant-content\n  > .restaurant-content__title {\n  font-size: 20px;\n}\n\nmain\n  > .content\n  > .restaurant-list\n  > .restaurant-list__item\n  > .restaurant-content\n  > .restaurant-content__description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n\nmain > .content > .restaurant-list > .restaurant-list__item > .restaurant-detail__btn {\n  background: #f0a500;\n  text-align: center;\n}\n\nmain > .content > .restaurant-list > .restaurant-list__item > .restaurant-detail__btn > a {\n  padding: 20px;\n  display: block;\n  color: #1b1a17;\n  font-weight: 600;\n  font-size: 18px;\n  transition: color 300ms, background 300ms;\n}\n\nmain > .content > .restaurant-list > .restaurant-list__item > .restaurant-detail__btn > a:hover {\n  background: #1b1a17;\n  color: #f0a500;\n}\n\nmain > .content > h2 {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\nmain > .content > .restaurant-content__thumbnail > img {\n  width: 100%;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n  object-position: center;\n  margin: 20px 0;\n}\n\nmain > .content > .restaurant-content__info {\n  max-width: 750px;\n  width: 100%;\n  margin: 0 auto;\n}\n\nmain > .content > .restaurant-content__info > h3 {\n  margin: 10px 0;\n}\n\nmain > .content > .restaurant-content__info > .menu {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  justify-content: center;\n  text-align: center;\n  vertical-align: middle;\n  margin: 10px 0;\n}\n\nmain > .content > .restaurant-content__info > .menu > h4 {\n  padding: 5px;\n  border: 1px solid #1b1a17;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\nmain > .content > .restaurant-content__info > .review {\n  max-width: 500px;\n  width: 100%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n  background: rgba(240, 165, 0, 0.8);\n  border-radius: 5px;\n  padding: 10px;\n  margin-top: 10px;\n}\n\nmain > .restaurant-link {\n  margin: 30px 0 10px 0;\n}\n\nmain > .restaurant-link > a {\n  border-radius: 5px;\n  padding: 12px;\n  background: #f0a500;\n  color: #1b1a17;\n}\n\n/* Footer */\nfooter {\n  background: #f0a500;\n  padding: 10px 20px;\n  color: #1b1a17;\n  text-align: center;\n}\n\nfooter > p {\n  font-size: 14px;\n  margin: 10px 0;\n}\n\nfooter > p > a {\n  text-decoration: underline;\n  color: #1b1a17;\n  padding: 12px 0;\n}\n\n/* Like */\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #f0a500;\n  color: #1b1a17;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Input Search */\n.search-container {\n  width: 100%;\n  text-align: right;\n  margin-bottom: 10px;\n}\n\n.search-container > .input-search {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #f0a500;\n  font-size: 18px;\n  max-width: 400px;\n  width: 100%;\n}\n\n/* skeleton */\n.skeleton-container {\n  max-width: 365px;\n  box-shadow: 2px 5px 10px 0 rgba(0, 0, 0, 0.1);\n  background: #ffffff;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.skeleton-container > .skeleton-image > img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.skeleton-container > .skeleton-content {\n  padding: 20px;\n}\n\n.skeleton-container > .skeleton-content > .skeleton-header {\n  width: 70%;\n  height: 30px;\n  background: #eee;\n}\n\n.skeleton-container > .skeleton-content > .skeleton-desc {\n  width: 100%;\n  height: 30px;\n  background: #eee;\n  margin: 10px 0;\n}\n",""]),n.exports=e},function(n,e,t){var r=t(2),a=t(10);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},function(n,e,t){(e=t(3)(!1)).push([n.i,"@media screen and (min-width: 768px) {\n  /* Header */\n  .header-bar > .hamburger-btn {\n    display: none;\n  }\n\n  /* Hero */\n  .hero > .hero__image img {\n    aspect-ratio: 16/9;\n  }\n\n  /* Nav */\n  .nav-menu {\n    max-width: 1000px;\n    right: 0;\n  }\n\n  .nav-menu {\n    top: 4px;\n    right: 0;\n    transform: translate(0, 0);\n    background: transparent;\n  }\n\n  .nav-menu > .nav-menu__list {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .nav-menu > .nav-menu__list > .nav-menu__item {\n    font-size: 16px;\n    padding: 0;\n    margin-right: 20px;\n  }\n\n  .nav-menu > .nav-menu__list > .nav-menu__item:nth-child(even) {\n    border: transparent;\n  }\n\n  /* Main */\n  main > .content > .restaurant-list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  /* Nav */\n  .nav-menu {\n    top: 2px;\n  }\n  .nav-menu > .nav-menu__list > .nav-menu__item {\n    font-size: 18px;\n  }\n\n  /* Main */\n  main > .content > .restaurant-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  /* Hero */\n  .hero {\n    margin: 0 auto;\n    max-width: 1000px;\n  }\n\n  /* Main */\n  main > .content > .restaurant-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n",""]),n.exports=e},,function(n,e,t){"use strict";t.r(e);t(6),t(7),t(9);var r=t(4),a=t.n(r);function i(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}var o=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,a.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function s(n){i(o,r,a,s,u,"next",n)}function u(n){i(o,r,a,s,u,"throw",n)}s(void 0)}))});return function(){return e.apply(this,arguments)}}(),s={init:function(n){var e=this,t=n.button,r=n.drawer,a=n.content;t.addEventListener("click",(function(n){e._toggleDrawer(n,r)})),a.addEventListener("click",(function(n){e._closeDrawer(n,r)}))},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("show")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("show")}},u={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},c={SERVER_URL:"https://restaurant-api.dicoding.dev",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images",CACHE_NAME:"EruRestaurant-".concat(+new Date),DATABASE_NAME:"eru-restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"},l={LIST_RESTAURANT:"".concat(c.SERVER_URL,"/list"),DETAIL:function(n){return"".concat(c.SERVER_URL,"/detail/").concat(n)}};function d(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function p(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){d(i,r,a,o,s,"next",n)}function s(n){d(i,r,a,o,s,"throw",n)}o(void 0)}))}}function f(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var m=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r,a,i;return e=n,t=null,r=[{key:"listRestaurants",value:(i=p(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(l.LIST_RESTAURANT);case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.restaurants);case 7:case"end":return n.stop()}}),n)}))),function(){return i.apply(this,arguments)})},{key:"detailRestaurant",value:(a=p(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(l.DETAIL(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)}))),function(n){return a.apply(this,arguments)})}],t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}(),v=function(n){var e=n.imageUrl,t=n.altImage,r=n.defaultImg,a=void 0===r?"./images/heros/hero-image_2.jpg":r,i=n.displayContainer,o=void 0===i?"none":i,s="".concat(c.BASE_IMAGE_URL,"/medium/").concat(e);return document.getElementById("hero-image").style.display=o,document.getElementById("hero-image").dispatchEvent(new Event("load")),'\n    <div class="hero__image">\n      <picture>\n        <source width="480px" height="320px" media="(max-width: 700px)" srcset="'.concat(e?s:"./images/heros/hero-image_2-small.webp",'">\n        <source width="800px" height="533px" srcset="').concat(e?s:"./images/heros/hero-image_2-large.webp",'">\n        <img width="1350px" height="900px" src="').concat(e?s:a,'" alt="').concat(t,' Poster" />\n      </picture>\n    </div>\n  ')},h=function(n){var e=n.restaurant,t=n.foods,r=n.drinks,a=n.customerReviews;return'\n  <h2 class="restaurant-content__title">'.concat(e.name,'</h2>\n  <div class="restaurant-content__info">\n    <h3>Address</h3>\n    <p>').concat(e.address,", ").concat(e.city,"</p>\n    <h3>Description</h3>\n    <p>").concat(e.description,'</p>\n    <h3>Food Menu</h3>\n    <div class="menu">\n      ').concat(t.map((function(n){return"\n          <h4>".concat(n.name,"</h4>\n          ")})).join(""),'\n    </div>\n    <h3>Drink Menu</h3>\n    <div class="menu">\n      ').concat(r.map((function(n){return"\n          <h4>".concat(n.name,"</h4>\n          ")})).join(""),'\n    </div>\n    <div id="add-review"></div>\n    <h3>Review</h3>\n    ').concat(a.map((function(n){return'\n        <div class="review">\n          <h3>'.concat(n.name,"</h3>\n          <p>").concat(n.review,"</p>\n          <small>Posted on: ").concat(n.date,"</small>\n        </div>\n      ")})).join(""),"\n  </div>\n")},g=function(n){return'\n  <article class="restaurant-list__item">\n    <figure class="restaurant-figure">\n      <img class="lazyload" src="'.concat(c.BASE_IMAGE_URL,"/small/").concat(n.pictureId,'" alt="').concat(n.name,'" />\n    </figure>\n    <div class="restaurant-content">\n      <div class="restaurant-content__text">\n        <p class="rating">⭐️ <span>').concat(n.rating,'</span></p>\n        <p class="location">Location: ').concat(n.city,'</p>\n      </div>\n      <h3 class="restaurant-content__title">').concat(n.name||"-",'</h3>\n      <p class="restaurant-content__description">').concat(n.description,'</p>\n    </div>\n    <div class="restaurant-detail__btn">\n      <a href="',"/#/detail/".concat(n.id),'">Restaurant Detail</a>\n    </div>\n  </article>\n')},w=function(n){for(var e="",t=0;t<n;t+=1)e+='\n      <div class="skeleton-container">\n      <div class="skeleton-image">\n        <img src="./images/placeholder.png" alt="skeleton" />\n      </div>\n      <div class="skeleton-content">\n        <div class="skeleton-header"></div>\n        <div class="skeleton-desc"></div>\n        <div class="skeleton-desc"></div>\n        <div class="skeleton-desc"></div>\n      </div>\n    </div>\n    ';return e};function b(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function x(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){b(i,r,a,o,s,"next",n)}function s(n){b(i,r,a,o,s,"throw",n)}o(void 0)}))}}var _={render:function(){return x(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <h2 class="main__title">Best Restaurant List</h2>\n    <div class="content" id="restaurant">\n      <div id="restaurant-list" class="restaurant-list">\n        '.concat(w(6),'\n      </div>\n    </div>\n    <div class="restaurant-link">\n      <a href="#/restaurants">See All Restaurant</a>\n    </div>\n    '));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return x(regeneratorRuntime.mark((function n(){var e,t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.listRestaurants();case 2:e=n.sent,t=e.splice(0,6),document.getElementById("hero-image").innerHTML=v({imageUrl:!1,altImage:"Hero Restoran",displayContainer:"block"}),(r=document.querySelector("#restaurant-list")).innerHTML="",t.forEach((function(n){r.innerHTML+=g(n)}));case 9:case"end":return n.stop()}}),n)})))()}},y=t(5);function k(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function R(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){k(i,r,a,o,s,"next",n)}function s(n){k(i,r,a,o,s,"throw",n)}o(void 0)}))}}var E=c.DATABASE_NAME,P=c.DATABASE_VERSION,S=c.OBJECT_STORE_NAME,L=Object(y.a)(E,P,{upgrade:function(n){n.createObjectStore(S,{keyPath:"id"})}}),A={getRestaurant:function(n){return R(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,L;case 4:return e.abrupt("return",e.sent.get(S,n));case 5:case"end":return e.stop()}}),e)})))()},getAllRestaurants:function(){return R(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L;case 2:return n.abrupt("return",n.sent.getAll(S));case 3:case"end":return n.stop()}}),n)})))()},putRestaurant:function(n){return R(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.hasOwnProperty("id")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,L;case 4:return e.abrupt("return",e.sent.put(S,n));case 5:case"end":return e.stop()}}),e)})))()},deleteRestaurant:function(n){return R(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L;case 2:return e.abrupt("return",e.sent.delete(S,n));case 3:case"end":return e.stop()}}),e)})))()},searchRestaurants:function(n){var e=this;return R(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAllRestaurants();case 2:return t.abrupt("return",t.sent.filter((function(e){var t=(e.name||"-").toLowerCase().replace(/\s/g,""),r=n.toLowerCase().replace(/\s/g,"");return-1!==t.indexOf(r)})));case 3:case"end":return t.stop()}}),t)})))()}};function T(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var j=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getTemplate",value:function(){return document.getElementById("hero-image").innerHTML=v({imageUrl:!1,altImage:"",displayContainer:"none"}),'\n      <div class="search-container">\n        <input type="text" id="query" class="input-search" placeholder="Search favorite restaurants">\n      </div>\n      <h2 class="main__title">Your Favorites Restaurant</h2>\n      <div class="content" id="restaurant">\n        <div id="restaurant-list" class="restaurant-list">\n\n        </div>\n      </div>\n    '}},{key:"runWhenUserIsSearching",value:function(n){document.getElementById("query").addEventListener("keyup",(function(e){n(e.target.value)}))}},{key:"showFavoriteRestaurants",value:function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n=e.length?e.reduce((function(n,e){return n.concat(g(e))}),""):this._getEmptyRestaurantTemplate(),document.getElementById("restaurant-list").innerHTML=n,document.getElementById("restaurant-list").dispatchEvent(new Event("restaurants:updated"))}},{key:"_getEmptyRestaurantTemplate",value:function(){return'<div class="restaurant-list__item__not__found">No restaurant to show</div>'}}])&&T(e.prototype,t),r&&T(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();function B(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function M(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var C=function(){function n(e){var t=e.view,r=e.favoriteRestaurants;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._view=t,this._favoriteRestaurants=r,this._showFavoriteRestaurants()}var e,t,r,a,i;return e=n,(t=[{key:"_showFavoriteRestaurants",value:(a=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._favoriteRestaurants.getAllRestaurants();case 2:e=n.sent,this._displayRestaurants(e);case 4:case"end":return n.stop()}}),n,this)})),i=function(){var n=this,e=arguments;return new Promise((function(t,r){var i=a.apply(n,e);function o(n){B(i,t,r,o,s,"next",n)}function s(n){B(i,t,r,o,s,"throw",n)}o(void 0)}))},function(){return i.apply(this,arguments)})},{key:"_displayRestaurants",value:function(n){this._view.showFavoriteRestaurants(n)}}])&&M(e.prototype,t),r&&M(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();function I(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function O(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var U=function(){function n(e){var t=e.favoriteRestaurants,r=e.view;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._view=r,this._listenToSearchRequestByUser(),this._favoriteRestaurants=t}var e,t,r,a,i;return e=n,(t=[{key:"_listenToSearchRequestByUser",value:function(){var n=this;this._view.runWhenUserIsSearching((function(e){n._searchRestaurants(e)}))}},{key:"_searchRestaurants",value:(a=regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this._latestQuery=e.trim(),!(this.latestQuery.length>0)){n.next=7;break}return n.next=4,this._favoriteRestaurants.searchRestaurants(this.latestQuery);case 4:t=n.sent,n.next=10;break;case 7:return n.next=9,this._favoriteRestaurants.getAllRestaurants();case 9:t=n.sent;case 10:this._showFoundRestaurants(t);case 11:case"end":return n.stop()}}),n,this)})),i=function(){var n=this,e=arguments;return new Promise((function(t,r){var i=a.apply(n,e);function o(n){I(i,t,r,o,s,"next",n)}function s(n){I(i,t,r,o,s,"throw",n)}o(void 0)}))},function(n){return i.apply(this,arguments)})},{key:"_showFoundRestaurants",value:function(n){this._view.showFavoriteRestaurants(n)}},{key:"latestQuery",get:function(){return this._latestQuery}}])&&O(e.prototype,t),r&&O(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();function H(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function q(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){H(i,r,a,o,s,"next",n)}function s(n){H(i,r,a,o,s,"throw",n)}o(void 0)}))}}var D=new j;function z(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function N(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){z(i,r,a,o,s,"next",n)}function s(n){z(i,r,a,o,s,"throw",n)}o(void 0)}))}}var F={init:function(n){var e=this;return N(regeneratorRuntime.mark((function t(){var r,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.likeButtonContainer,a=n.restaurant,i=n.favoriteRestaurants,e._likeButtonContainer=r,e._restaurant=a,e._favoriteRestaurants=i,t.next=6,e._renderButton();case 6:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var n=this;return N(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._restaurant.id,e.next=3,n._isRestaurantExist(t);case 3:if(!e.sent){e.next=7;break}n._renderLiked(),e.next=8;break;case 7:n._renderLike();case 8:case"end":return e.stop()}}),e)})))()},_isRestaurantExist:function(n){var e=this;return N(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._favoriteRestaurants.getRestaurant(n);case 2:return r=t.sent,t.abrupt("return",!!r);case 4:case"end":return t.stop()}}),t)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",N(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._favoriteRestaurants.putRestaurant(n._restaurant);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",N(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._favoriteRestaurants.deleteRestaurant(n._restaurant.id);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))}};function W(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function Q(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){W(i,r,a,o,s,"next",n)}function s(n){W(i,r,a,o,s,"throw",n)}o(void 0)}))}}function V(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function J(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){V(i,r,a,o,s,"next",n)}function s(n){V(i,r,a,o,s,"throw",n)}o(void 0)}))}}var G={"/":_,"/list-restaurant":_,"/favorite":{render:function(){return q(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",D.getTemplate());case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return q(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:new C({view:D,favoriteRestaurants:A}),new U({view:D,favoriteRestaurants:A});case 2:case"end":return n.stop()}}),n)})))()}},"/detail/:id":{render:function(){return Q(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div id="restaurant" class="content"></div>\n      <div id="likeButtonContainer"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return Q(regeneratorRuntime.mark((function n(){var e,t,r,a,i,o,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.parseActiveUrlWithoutCombiner(),n.next=3,m.detailRestaurant(e.id);case 3:t=n.sent,r=t.restaurant,a=r.menus,i=a.foods,o=a.drinks,s=r.customerReviews,document.getElementById("hero-image").innerHTML=v({imageUrl:r.pictureId,altImage:r.name,displayContainer:"block"}),document.querySelector("#restaurant").innerHTML+=h({restaurant:r,foods:i,drinks:o,customerReviews:s}),F.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),favoriteRestaurants:A,restaurant:{id:r.id,name:r.name,description:r.description,pictureId:r.pictureId,rating:r.rating,city:r.city}}),window.scroll({top:0,behavior:"smooth"});case 13:case"end":return n.stop()}}),n)})))()}},"/restaurants":{render:function(){return J(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <h2 class="main__title">All Available Restaurant</h2>\n      <div class="content" id="restaurant">\n        <div id="restaurant-list" class="restaurant-list">\n          '.concat(w(20),"\n        </div>\n      </div>\n    "));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return J(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(e=document.querySelector("#restaurant-list")).innerHTML="",restaurants.forEach((function(n){e.innerHTML+=g(n)})),document.getElementById("hero-image").innerHTML=v({imageUrl:!1,altImage:"",displayContainer:"none"});case 5:case"end":return n.stop()}}),n)})))()}}};function Y(n,e,t,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,a)}function K(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var X=function(){function n(e){var t=e.button,r=e.drawer,a=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=t,this._drawer=r,this._content=a,this._initialAppShell()}var e,t,r,a,i;return e=n,(t=[{key:"_initialAppShell",value:function(){s.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.parseActiveUrlWithCombiner(),t=G[e],n.next=4,t.render();case 4:return this._content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:document.querySelector("#skip-to-content").addEventListener("click",(function(n){n.preventDefault(),document.querySelector("#main-content").focus()}));case 9:case"end":return n.stop()}}),n,this)})),i=function(){var n=this,e=arguments;return new Promise((function(t,r){var i=a.apply(n,e);function o(n){Y(i,t,r,o,s,"next",n)}function s(n){Y(i,t,r,o,s,"throw",n)}o(void 0)}))},function(){return i.apply(this,arguments)})}])&&K(e.prototype,t),r&&K(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}(),Z=(t(1),t(11),new X({button:document.querySelector("#hamburger"),drawer:document.querySelector("#drawer"),content:document.querySelector("#main-content")}));window.addEventListener("hashchange",(function(){Z.renderPage()})),window.addEventListener("load",(function(){Z.renderPage(),o()}))}]);