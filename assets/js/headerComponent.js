var headerrr = document.querySelector(".header");
console.log('head :', headerrr);
let test = document.createElement("title");
test.innerHTML = `<h2 class="name">FooDog</h2>
<nav class="is-hidden-touch">
  <ul class="main-nav-inner">
    <li class="menu-item"><a href="nutrition.html">NUTRITION</a></li>
    <li class="menu-item"><a href="wellness.html">WELLNESS</a></li>
    <li class="menu-item"><a href="lifestyle.html">LIFESTYLE</a></li>
    <li class="menu-item"><a href="community.html">COMMUNITY</a></li>
  </ul>
</nav>`;

console.log('test :', test);
headerrr.appendChild(test);
