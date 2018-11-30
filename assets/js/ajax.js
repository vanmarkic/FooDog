//Create the XHR Object
let httpreq = new XMLHttpRequest();
// console.log(articles);

categBurger = "";

let reponse = [];

const choppeCategories = async () => {
  let response = await fetch("https://foodog.herokuapp.com/articles", {
    method: "GET"
  });
  reponse = await response.json();

  let arr = [];

  for (i = 0; i < reponse.docs.length; i++) {
    reponse.docs[i].tagForArticle.forEach(e => {
      if (!arr.includes(e)) {
        arr.push(e);
      }
    });
  }

  arr.forEach(element => {
    let burgertag = document.createElement("a");
    burgertag.id = element;
    burgertag.classList.add("burgermenu", "navbar-item");

    let headerTag = document.createElement("li");
    headerTag.id = element;
    headerTag.classList.add("menu-item");

    burgertag.innerHTML += /*html*/ `
             ${element.toUpperCase()}
     `;

    headerTag.innerHTML += /*html*/ `
    <a id="${element}" href="#" class="">${element.toUpperCase()}</a>    
      `;

    document.querySelector("#catlist").appendChild(burgertag);
    burgertag.addEventListener(`click`, e => {
      if (document.querySelector(".activeBurger")) {
        document
          .querySelector(".activeBurger")
          .classList.remove("activeBurger");
      }
      if (document.querySelector(".activeHeader")) {
        document
          .querySelector(".activeHeader")
          .classList.remove("activeHeader");
      }

      headerTag.children[0].classList.add("activeHeader");
      burgertag.classList.add("activeBurger");
      callTags(e);
    });

    document.querySelector(".main-nav-inner").appendChild(headerTag);
    headerTag.addEventListener(`click`, h => {
      if (document.querySelector(".activeBurger")) {
        document
          .querySelector(".activeBurger")
          .classList.remove("activeBurger");
      }
      if (document.querySelector(".activeHeader")) {
        document
          .querySelector(".activeHeader")
          .classList.remove("activeHeader");
      }
      headerTag.children[0].classList.add("activeHeader");
      burgertag.classList.add("activeBurger");
      callTags(h);
    });
  });
};

choppeCategories();

const callTags = f => {
  console.log(f);

  document.querySelector(
    ".pageTitleJs"
  ).innerHTML = `${f.currentTarget.id.toUpperCase()}`;

  // f.srcElement.classList.add("activeHeader");
  // document.querySelector(`#${f.srcElement.id}`)

  console.log(f.currentTarget.id);

  // .add("active");
  const id = f.currentTarget.id;
  const artiFoo = document.querySelector(".articles");
  artiFoo.innerHTML = "";

  document.querySelector("#navbarBasicExample").classList.remove("is-active");
  document.querySelector(".navbar-burger").classList.remove("is-active");

  //Call the open function, GET-type of request, url, true-asynchronous
  httpreq.open("GET", "http://foodog.herokuapp.com/articles", true);
  //call the onload
  httpreq.onload = function() {
    //check if the status is 200(means everything is okay)
    if (this.status === 200) {
      //return server response as an object with JSON.parse
      // console.log("200");

      let data = JSON.parse(httpreq.responseText);

      for (let i = 0; i < data.docs.length; i++) {
        // if (data.docs[i].tagForArticle[j] === id)
        if (data.docs[i].tagForArticle.includes(id)) {
          let article = document.createElement("article");
          article.classList.add("article", "columns");
          artiFoo.appendChild(article);

          article.innerHTML = /*html*/ ` <img class="column is-half" src="${
            data.docs[i].imgUrl
          }" alt="dogs" />
        
                                                    <div class="description column is-half">
                                                      <div id="tags${i}" class="tags"> 
                                                            <!-- TAGS ARE COMING -->                                   
                                                      </div>
        
                                                      <div class="artitle">
                                                        <a id="${data.docs[i]._id}" href="single.html?id=${data.docs[i]._id}" class="uppercase">${
                                                          data.docs[i].title
                                                        }</a>
                                                      </div>
        
                                                      <p class="extract">${data.docs[
                                                        i
                                                      ].text.substring(
                                                        0,
                                                        200
                                                      )}...</p>
        
                                                      <a href="#share" class="uppercase">Share</a>
                                                    </div>`;                            





          for (j = 0; j < data.docs[i].tagForArticle.length; j++) {
           
            
            document.querySelector(`#tags${i}`).innerHTML += `
                                                                  <div class="meta">
                                                                      <div class="underline">
                                                                          <a class="uppercase ${data.docs[i].tagForArticle[j]}" href="#">${data.docs[i].tagForArticle[j]}</a>
                                                            </div>
                                                          </div>`;

            // document.querySelector(`#tags${i}`).addEventListener(`click`, t => {
            //   if (document.querySelector(".activeBurger")) {
            //     document
            //       .querySelector(".activeBurger")
            //       .classList.remove("activeBurger");
            //   }
            //   if (document.querySelector(".activeHeader")) {
            //     document
            //       .querySelector(".activeHeader")
            //       .classList.remove("activeHeader");
            //   }
            //   document.qu.children[0].classList.add("activeHeader");
            //   burgertag.classList.add("activeBurger");
            //   callTags(t);
            // });
          }
        }
      }
    } else {
      console.log("error");
      articles.innerText = "Sorry we couldn't reach the server";
    }
  };

  //call send
  httpreq.send();
};

//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN
