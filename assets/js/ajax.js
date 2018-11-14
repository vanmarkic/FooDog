
//Create the XHR Object
let httpreq = new XMLHttpRequest;
let articles = document.querySelector(".articles");
console.log(articles);



    //Call the open function, GET-type of request, url, true-asynchronous
httpreq.open('GET', 'http://foodog.herokuapp.com/articles', true)
    //call the onload 
httpreq.onload = function() {
        //check if the status is 200(means everything is okay)
        if (this.status === 200) {
            //return server response as an object with JSON.parse
            console.log("200");

            let data = JSON.parse(this.responseText);
            

            for (let i = 0; i < data.docs.length; i++) {
                let article = document.createElement("article");
                article.classList.add("article", "columns");

                let img = document.createElement("img");
                img.classList.add("column", "is-half");

                let descr = document.createElement("div");
                descr.classList.add("description", "column", "is-half");

                let tags = document.createElement("div");
                tags.classList.add("tags");

                let meta = document.createElement("div");
                meta.classList.add("meta");

                let meta = document.createElement("div");
                meta.classList.add("meta");

                






               

                article.classList.add("article","columns");
                articles.appendChild(article);


                




                
            }

            let article = document.createElement("article")
            article.classList.add





           


            let auth = document.createElement("h3");
            block.appendChild(auth);
            auth.innerText = response.author;





            console.log(JSON.parse(this.responseText));



        } else {
            console.log("error");
            block.innerText = "Sorry we couldn't reach the server";
        }
    }
    //call send
httpreq.send();
//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN

