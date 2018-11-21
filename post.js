
    let dataForm = new FormData();


const post = () => {

    let health = document.querySelectorAll(".atag");
    let tagsArray = new Array();
    health.forEach(element => {
        if (element.checked) {
            tagsArray.push(element.value)
        }
    });
    
    let articleTitle = document.querySelector("#titleArticle").value;
    let imageURL = document.querySelector("#imgUrl").value;
    let writeArticle = document.querySelector("#writeArticle").value;
    let articleId = document.querySelector("#idArticle").value;
    // console.log('articleId :', articleId);
    dataForm.append("tags", tagsArray);
    // dataForm.append("id", articleId);
    dataForm.append("image", imageURL);
    dataForm.append("title", articleTitle);
    dataForm.append("text", writeArticle);
    // condition check if is empty 
    if (articleTitle == ""|| writeArticle == "") {
        alert("FILL ALL THE FIELD");
    } else {
        fetch("https://foodog.herokuapp.com/articles",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dataForm
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
    }


}

