var header = document.querySelector(".header");

let test = document.createElement("div");

;
test.innerHTML =  /*html*/ `<h2 class="name">FooDog</h2>
<div class="is-hidden-touch">
  <ul class="main-nav-inner">
    <li class="menu-item"><a href="nutrition.html">NUTRITION</a></li>
    <li class="menu-item"><a href="wellness.html">WELLNESS</a></li>
    <li class="menu-item"><a href="lifestyle.html">LIFESTYLE</a></li>
    <li class="menu-item"><a href="community.html">COMMUNITY</a></li>
  </ul>
</div>`;

header.appendChild(test);
