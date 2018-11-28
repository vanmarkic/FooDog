// categBurger = "";

// let reponse = [];

// const choppeCategories = async () => {
//   let response = await fetch("https://foodog.herokuapp.com/articles", {
//     method: "GET"
//   });
//   reponse = await response.json();
//   console.log(reponse.docs[0].tagForArticle[0]);
//   console.log(reponse);

//   for (i = 0; i < reponse.docs.length; i++) {

// //     const categories = .map()
//     console.log(reponse.docs[i].tagForArticle);

// //     cateBurger += /*html*/ ``

//   };

// }

// choppeCategories();

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

    <div class="navbar-start">

        <ul class="headerTags">

      <a class="navbar-item burgermenu">
        Community
      </a>

      <a class="navbar-item burgermenu" >
        Featured
      </a>
               
        <a class="navbar-item burgermenu">
          Lifestyle
        </a>
        
        <a class="navbar-item burgermenu">
            Nutrition
          </a>     
      
          <a class="navbar-item burgermenu">
            Uncategorized
          </a>     
      
            <a class="navbar-item burgermenu">
                Wellness
              </a>     
  </ul>
      
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
