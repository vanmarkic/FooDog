//Create the XHR Object
let httpreq = new XMLHttpRequest();
let artiFoo = document.querySelector(".articles");
// console.log(articles);


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
                              // console.log(data.docs[i].text);
                              if (data.docs[i].tagForArticle.includes("wellness")) {

                              let article = document.createElement("article");
                              article.classList.add("article", "columns");

                              artiFoo.appendChild(article);
                              article.innerHTML = /*html*/ `
                                              <img class="column is-half" src="${data.docs[i].imgUrl}" alt="dogs" />

                                              <div class="description column is-half">
                                                <div id="tags${i}" class="tags"> 
                                                      <!-- TAGS ARE COMING -->                                   
                                                </div>

                                                <div class="artitle">
                                                  <a href="single.html" class="uppercase">${data.docs[i].title}</a>
                                                </div>

                                                <p class="extract">${data.docs[i].text.substring(0,200)}...</p>

                                                <a href="#share" class="uppercase">Share</a>
                                              </div>`;

                              for (j = 0; j < data.docs[i].tagForArticle.length; j++) {
                                
                                                                      document.createElement("div").classList.add("meta");

                                                                      document.querySelector(`#tags${i}`).appendChild                    

                                                                      
                                                                      document.querySelector(`#tags${i}`).innerHTML = /*html*/ `
                                                                                                    <div class="meta">
                                                                                                        <div class="underline">
                                                                                                            <a class="uppercase" href="${data.docs[i].tagForArticle[j]}.html">${data.docs[i].tagForArticle[j]}</a>
                                                                                              </div>
                                                                                            </div>`;
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
//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN
