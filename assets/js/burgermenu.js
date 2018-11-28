categBurger = "";


let reponse = [];

const choppeCategories = async () => {
  let response = await fetch("https://foodog.herokuapp.com/articles", {
    method: "GET"
  });
  reponse = await response.json();
  console.log(reponse.docs[0].tagForArticle[0]);
  console.log(reponse);  

  for (i = 0; i < reponse.docs.length; i++) {
   
//     const categories = .map()
    console.log(reponse.docs[i].tagForArticle);

//     cateBurger += /*html*/ ``

  };

  
}

choppeCategories();







// class Burger extends HTMLElement {
//   constructor() {
//     super();

//     let shadowDom = this.attachShadow({
//       mode: "open"
//     });

//     let linkStyle = document.createElement("link");
//     linkStyle.setAttribute("rel", "stylesheet");
//     linkStyle.setAttribute("href", "./assets/css/wellness.css");

//     let linkBulma = document.createElement("link");
//     linkBulma.setAttribute("rel", "stylesheet");
//     linkBulma.setAttribute(
//       "href",
//       "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css"
//     );

//     let linkFont = document.createElement("link");
//     linkFont.setAttribute("rel", "stylesheet");
//     linkFont.setAttribute(
//       "href",
//       "https://fonts.googleapis.com/css?family=Open+Sans:700,400,500,600"
//     );

//     let linkfontawesome = document.createElement("link");
//     linkfontawesome.setAttribute("rel", "stylesheet");
//     linkfontawesome.setAttribute(
//       "href",
//       "https://use.fontawesome.com/releases/v5.5.0/css/all.css"
//     );
//     linkfontawesome.setAttribute(
//       "integrity",
//       "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
//     );
//     linkfontawesome.setAttribute("crossorigin", "anonymous");

//     let linkAnimBurger = document.createElement("script");
//     linkAnimBurger.setAttribute("type","text/javascript");
//     linkAnimBurger.setAttribute("src","./assets/js/anim.js");
  

//     let burger = document.createElement("nav");
//     burger.setAttribute("class", "navbar is-hidden-desktop");

//     burger.innerHTML = /*html*/ `
                     
// <div class="navbar-brand">         
//     <a role="button" class="navbar-burger burger is-flex-tablet" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
//       <span aria-hidden="true"></span>
//       <span aria-hidden="true"></span>
//       <span aria-hidden="true"></span>
//     </a>
//   </div>

//   <div id="navbarBasicExample" class="navbar-menu">

//     <div class="navbar-start">

//       <a class="navbar-item burgermenu">
//         Community
//       </a>

//       <a class="navbar-item burgermenu" >
//         Featured
//       </a>
               
//         <a class="navbar-item burgermenu">
//           Lifestyle
//         </a>
        
//         <a class="navbar-item burgermenu">
//             Nutrition
//           </a>     
      
//           <a class="navbar-item burgermenu">
//             Uncategorized
//           </a>     
      
//             <a class="navbar-item burgermenu">
//                 Wellness
//               </a>     
            
      
//     </div>          
   
//       <form method="get" action="wellness.html">
//         <span class="ruby-search-input columns">
//           <input type="text" class="field column is-10" placeholder="Search and hit enter…" value="" name="s" title="Search for:">
//           <a href="" class=" column is-2 "> <i class="fa fa-search loupe"></i>
//           </a>                 
//         </span>
      
//     </form>
    
 
//   </div>
  

// `;

            // const $navbarBurgers = document.querySelector('.navbar-burger');
            // console.log(document.querySelector('.navbar-burger'));

            //  // Add a click event on each of them
            // $navbarBurgers.addEventListener('click', () => { 
            // const target = $navbarBurgers.dataset.target;
            // const $target = document.getElementById(target);

            // // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            // $navbarBurgers.classList.toggle('is-active');
            // $target.classList.toggle('is-active');
            // console.log("hello");
            // });

            
//             shadowDom.appendChild(linkAnimBurger);
//             shadowDom.appendChild(linkBulma);
//             shadowDom.appendChild(linkStyle);
//             shadowDom.appendChild(linkFont);
//             shadowDom.appendChild(linkfontawesome);
//             shadowDom.appendChild(burger);
//             // shadowDom.appendChild(linkAnimBurger);
            
//   }
// }

// customElements.define("burger-template", Burger);
