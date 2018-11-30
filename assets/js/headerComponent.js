var header = document.querySelector(".header");

let test = document.createElement("div");

;
test.innerHTML =  /*html*/ `<h2 class="name">FooDog</h2>
<div class="is-hidden-touch">
  <ul class="main-nav-inner">
   
  </ul>
</div>`;

header.appendChild(test);
