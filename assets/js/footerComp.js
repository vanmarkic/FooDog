articles = "";


const choppeSaMere = async () => {
  let response = await fetch("https://foodog.herokuapp.com/articles", {
    method: "GET"
  });
  reponse = await response.json();
 
  for (let i = 0; i < 3; i++) {
            console.log(reponse.docs[i]._id)
            articles += /*html*/ `
                    <a href="article.html?id=${reponse.docs[i]._id}"><section class="topArticle col-lg-12 d-flex">
                        <figure class="col-lg-5">
                            <img class="img-responsive" src="${reponse.docs[i].imgUrl}"/>
                        </figure>
                        <article class="offset-lg-1 col-lg-6 d-flex">
                            <p>${reponse.docs[i].title}</p>
                        </article>
                    </section></a>`;
        }

};

choppeSaMere();



class FeaturedPost extends HTMLElement {
  constructor() {
    super();

    let shadowDom = this.attachShadow({
      mode: "open"
    });

    let linkStyle = document.createElement("link");
    linkStyle.setAttribute("rel", "stylesheet");
    linkStyle.setAttribute("href", "CSS/footer.css");

    let linkBoots = document.createElement("link");
    linkBoots.setAttribute("rel", "stylesheet");
    linkBoots.setAttribute(
      "href",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    );

    let linkFont = document.createElement("link");
    linkFont.setAttribute("rel", "stylesheet");
    linkFont.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans"
    );

    let linkfontawesome = document.createElement("link");
    linkfontawesome.setAttribute("rel", "stylesheet");
    linkfontawesome.setAttribute(
      "href",
      "https://use.fontawesome.com/releases/v5.5.0/css/all.css"
    );

    let footer = document.createElement("div");
    footer.setAttribute("class", "container-fluid");
    footer.innerHTML = /*html*/ `
            ${articles}
        `;

    shadowDom.appendChild(linkStyle);
    shadowDom.appendChild(linkBoots);
    shadowDom.appendChild(linkFont);
    shadowDom.appendChild(linkfontawesome);
    shadowDom.appendChild(footer);
  }
}
customElements.define("featured-post", FeaturedPost);

class Footer extends HTMLElement {
  constructor() {
    super();

    let shadowDom = this.attachShadow({
      mode: "open"
    });

            let linkStyle = document.createElement("link");
            linkStyle.setAttribute("rel", "stylesheet");
            linkStyle.setAttribute("href", "./assets/css/desktopFooter.css");

    let linkBoots = document.createElement("link");
    linkBoots.setAttribute("rel", "stylesheet");
    linkBoots.setAttribute(
      "href",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    );

    let linkFont = document.createElement("link");
    linkFont.setAttribute("rel", "stylesheet");
    linkFont.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans"
    );

    let linkfontawesome = document.createElement("link");
    linkfontawesome.setAttribute("rel", "stylesheet");
    linkfontawesome.setAttribute(
      "href",
      "https://use.fontawesome.com/releases/v5.5.0/css/all.css"
    );

    let footer = document.createElement("div");
    footer.setAttribute("class", "container-fluid");
    footer.innerHTML = /*html*/ `
             <div id="desktop-footer">
      <div>
        <h5>CATEGORIES</h5>
        <div id="categories">
          <ul>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
      <!--
        **************************Popular Post*****************************************
      -->

      <div>
        <h5>POPULAR POST</h5>
        <div class="featured-postContainer">
          <div class="post-item">
            <div>
              <a class="featImg" target="_blank" href=""> <img src="" /> </a>
              <a target="_blank" href=""></a>
            </div>
            <div class="text">
                      
            </div>
          </div>
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
    shadowDom.appendChild(linkStyle);
 
    shadowDom.appendChild(linkFont);
    shadowDom.appendChild(linkfontawesome);
    shadowDom.appendChild(footer);
  }
}

customElements.define("footer-template", Footer);
