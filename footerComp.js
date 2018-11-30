

class Footer extends HTMLElement {
  constructor() {
        super();

    let footer = document.createElement("div");
    document.querySelector("footer-template").appendChild(footer);
    footer.setAttribute("class", "container-fluid");
    footer.innerHTML = /*html*/ `
             <div id="desktop-footer">
      <div>
        <h5>CATEGORIES</h5>
        <div id="footcat">
          <ul id="catlist">
            <!-- <li>
              <a
                href="http://digest.thefarmersdog.com/category/community/"
                target="_blank"
                >Community</a
              >
            </li>

            <li>
              <a
                href="http://digest.thefarmersdog.com/category/featured-sidebar"
                target="_blank"
                >Feature</a
              >
            </li>

            <li>
              <a
                href="http://digest.thefarmersdog.com/category/lifestyle/"
                target="_blank"
                >Lifestyle</a
              >
            </li>

            <li>
              <a
                href="http://digest.thefarmersdog.com/category/nutrition/"
                target="_blank"
                >Nutrition</a
              >
            </li>

            <li>
              <a
                href="http://digest.thefarmersdog.com/category/uncategorized/"
                target="_blank"
                >Uncategorized</a
              >
            </li>

            <li>
              <a
                href="http://digest.thefarmersdog.com/category/wellness/"
                target="_blank"      >Wellness</a
              >
            </li> -->
          </ul>
        </div>
      </div>
      <!--
        **************************Popular Post*****************************************
      -->

      <div>
        <h5>POPULAR POST</h5>

        <div class="featured-postContainer">


          <!-- ------------------------------------------------- -->
        </div>
      </div>
      <!--
        -------***************************Instagram************************************************************
      -->

      <div>
        <h5>INSTAGRAM</h5>
        <div id="grid-gallery">
          <!-- <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div>
          <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div>

          <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div>

          <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div>

          <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div>

          <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div>

          <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div>

          <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div>

          <div>
            <a target="_blank" href="dogf.jpg"> <img src="dogf.jpg"/></a>
          </div> -->
        </div>
      </div>
    </div>
    <!--
      ---*********************Social Media***************************************----
    -->

    <div id="socmedia">
      <a href="https://www.facebook.com" target="blank" rel="nofollow">
        <i class="fab fa-facebook-f"></i>
      </a>

      <a href="https://uk.linkedin.com" target="_blank" rel="nofollow">
        <i class="fab fa-linkedin-in"></i>
      </a>

      <a href="https://twitter.com" target="_blank" rel="nofollow">
        <i class="fab fa-twitter"></i>
      </a>

      <div><p>2017 &copy; The Farmer's Dog</p></div>
    </div>`;


    //   let reponse =[];

    // const choppeSaMere = async () => {
    //   let response = await fetch("https://foodog.herokuapp.com/articles", {
    //     method: "GET"
    //   });
    //  reponse = await response.json();
  
    // };

    // choppeSaMere().then((reponse) => {
    //   for (let i = 0; i < 2; i++) {
    //     // console.log(data.docs[i].text);
    //     document.querySelector(".featured-postContainer");
    //     let popular = document.createElement("div");
    //     // article.classList.add("article", "columns");

    //     console.log(document.querySelector(".featured-postContainer"));
    //     document.querySelector(".featured-postContainer").appendChild(popular);
    //     popular.innerHTML += /*html*/ `
    //                 <img class="column is-half" src="${
    //                   reponse.docs[i].imgUrl
    //                 }" alt="dogs" />

    //                 <div class="description column is-half">
                 

    //                   <div class="artitle">
    //                     <a href="single.html" class="uppercase">${
    //                       reponse.docs[i].title
    //                     }</a>
    //                   </div>                  

         
    //                 </div>`;
    //   }

    // });

    // shadowDom.appendChild(linkStyle);

    // shadowDom.appendChild(linkFont);
    // shadowDom.appendChild(linkfontawesome);
    // shadowDom.appendChild(footer);
  }
}

customElements.define("footer-template", Footer);
