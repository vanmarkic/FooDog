url = new URLSearchParams(window.location.search);
const urlId = url.get('id');

// const choppeCategories = async () => {
//             let response = await fetch("https://foodog.herokuapp.com/articles", {
//               method: "GET"
//             });
//             reponse = await response.json();
          
//             let arr = [];
          
//             for (i = 0; i < reponse.docs.length; i++) {
//               reponse.docs[i].tagForArticle.forEach(e => {
//                 if (!arr.includes(e)) {
//                   arr.push(e);
//                 }
//               });
//             }
          
//             arr.forEach(element => {
//               let burgertag = document.createElement("a");
//               burgertag.id = element;
//               burgertag.classList.add("burgermenu", "navbar-item");
          
//               let headerTag = document.createElement("li");
//               headerTag.id = element;
//               headerTag.classList.add("menu-item");
          
//               burgertag.innerHTML += /*html*/ `
//           ${element.toUpperCase()}
//           `;
          
//               headerTag.innerHTML += /*html*/ `
//           <a id="${element}" href="#" class="">${element.toUpperCase()}</a>    
//           `;
          
             
             
//             });
//           };

let reponse = [];

const choppeArticle = async () => {
            let response = await fetch(`https://foodog.herokuapp.com/articles?`, {
                        method: "GET"
            });
            reponse = await response.json();

            console.log(reponse.docs);
            
            let fetchedArticles = new Array();     

            fetch("https://foodog.herokuapp.com/articles").then(res => res.json())
            .then(data => data.docs.forEach(element => {fetchedArticles.push(element)}));    

            fetch("https://foodog.herokuapp.com/articles?page=2").then(res => res.json())
            .then(data => data.docs.forEach(element => {fetchedArticles.push(element)}));   

            fetch("https://foodog.herokuapp.com/articles?page=3").then(res => res.json())
            .then(data => data.docs.forEach(element => {fetchedArticles.push(element)}));          
            let article = new Array();     
            article = fetchedArticles.filter(art => art._id === urlId.toString());

            console.log(urlId.toString());

            console.log(fetchedArticles);

            console.log(fetchedArticles[0]);

          

}

choppeArticle();

 console.log(fetchedArticles);








class Article extends HTMLElement {
            constructor() {
              super();

            // let response;

            //   choppeArticle(urlId).then(resolve,reject) {

            //   };

              

              
          
              let art = document.createElement("div");
              document.querySelector("article-template").appendChild(art);
            //   burger.setAttribute("class", "navbar is-hidden-desktop");
          
              art.innerHTML = /*html*/ `                     
          
            <br>
                <p class="categories">CATEGORIES</p>
                <h2 style="text-align: center;">Title of the Article</h2>
                <br>

                <img src="$" alt="" class="imageSinglePage">


                <br>
                <br>

                <div class="sub-image">
                    <div class="columns is-mobile is-desktop is-tablet">
                        <div class="column is-5-tablet is-5 is-offset-0-desktop is-offset-0-tablet author">
                            <div class="columns">
                            
       
                                  
                        
                               <div class="column  is-offset-0-desktop">
                                    <img class="roundFarmer" src="./assets/images/farmer.png" alt="">
                                   <span class="authName">
                                        by : THE FARMER'S DOG |
                                   </span> 
                               </div> 
                            </div>
                        </div>
                        <div class="column is-5-mobile is-offset-2-mobile is-offset-0-tablet is-offset-3-desktop social-icons">

                            <a class="button is-dark comment-icon"><i class="fa fa-comment fa-1x"> Comment</i></a>
                            <a><img src="./assets/images/facebook.svg" alt=""></a>
                            <a><img src="./assets/images/twitter.svg" alt=""></a>
                            <a><img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Pinterest.svg" alt=""></a>
                        </div>
                    </div>

                </div>
                <div class="block">
                    
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi veritatis molestiae repellat
                            maiores
                            necessitatibus sed quisquam consectetur laborum, dicta porro delectus cumque mollitia
                            officiis in
                            dolorem asperiores nesciunt, natus quia.</p>
                        <p>
                            Corporis, veniam. Nihil quia nam facere eveniet aperiam. Eum laudantium adipisci laboriosam
                            aspernatur repellendus eius ab voluptatum alias? Maiores fuga totam dolores enim
                            voluptatibus
                            delectus nobis nam obcaecati reprehenderit? Beatae?
                        </p>
                    
                </div>
                <section>
                    <div class="share-block">
                        <div class="columns is-mobile">
                            <div style="text-align:center" class="column is-offset-0 ">

                                <a class="button is-dark social-comment"><i class="fa fa-comment "> 0 COMMENT</i></a>
                                <a class="button social-share"><i class="fab fa-facebook-f"> SHARE</i></a>
                                <a class="button social-tweet"><i class="fab fa-twitter"></i> TWEET</a>
                                <a class="button social-pint"><i class="fab fa-pinterest"></i> PIN IT</a>
                            </div>
                        </div>
                    </div>
                    <br>
                </section>
            
          
          `;
            }
          }
          
          customElements.define("article-template", Article);
          
