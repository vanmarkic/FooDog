

class Burger extends HTMLElement {
  constructor() {
    super();

    let burger = document.createElement("nav");
    document.querySelector("burger-template").appendChild(burger);
    burger.setAttribute("class", "navbar is-hidden-desktop");

    burger.innerHTML = /*html*/ `
                     
<div class="navbar-brand">         
    <a role="button" class="navbar-burger burger is-flex-tablet" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">

    <div id="catlist" class="navbar-start">

    
     



      
    </div>          
   
      <form method="get" action="wellness.html">
        <span class="ruby-search-input columns">
          <input type="text" class="field column is-10" placeholder="Search and hit enter…" value="" name="s" title="Search for:">
          <a href="" class=" column is-2 "> <i class="fa fa-search loupe"></i>
          </a>                 
        </span>
      
    </form>
    
 
  </div>
  

`;
  }
}

customElements.define("burger-template", Burger);
