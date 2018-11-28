

const post = () => {

    let health = document.querySelectorAll(".atag");
    let tagsArray = new Array();
    health.forEach(element => {
        if (element.checked) {
            tagsArray.push(element.value)
        }
    });

    let articleTitle = document.querySelector("#titleArticle").value;
    let imageURL = document.querySelector("#upload-file").files[0];
    let writeArticle = document.querySelector("#writeArticle").value;
    let myForm = document.querySelector("form")

    let dataForm = new FormData(myForm);
    dataForm.append("tags", tagsArray);
    dataForm.append("image", imageURL);
    dataForm.append("title", articleTitle);
    dataForm.append("text", writeArticle);
    // console.log('imageURL :', imageURL);

    // condition check if is empty 
    // if (articleTitle == "" || writeArticle == "" || writeArticle == "" || imageURL == "") {
        // alert("FILL ALL THE FIELD");
    // } else {
        
        fetch("http://cors.io?https://foodog.herokuapp.com/articles",
            {
                method: "POST",
                mode: 'no-cors', // 'cors' by default
                
                headers: {
                    "Content-Type": "application/json"
                    // "Content-Type": "application/x-www-form-urlencoded"
                },
                body: JSON.stringify({"docs" : [{ "title" : "test", "tags": ["Blah"], "text": "test"}]})
            })
            .then(function (res) { return res.json(); })
            .catch(function (res) { console.error(res); })

    // }
   
    
}

document.getElementById("postForm").addEventListener("submit", post);


// var form = document.forms.namedItem("postForm");
// form.addEventListener('submit', function(ev) {

//   var oOutput = document.querySelector("div"),
//       oData = new FormData(form);

//   oData.append("CustomField", "Données supplémentaires");

//   var oReq = new XMLHttpRequest();
//   oReq.open("POST", "https://foodog.herokuapp.com/articles", true);
//   oReq.onload = function(oEvent) {
//     if (oReq.status == 200) {
//       oOutput.innerHTML = "Envoyé !";
//     } else {
//       oOutput.innerHTML = "Erreur " + oReq.status + " lors de la tentative d’envoi du fichier.<br \/>";
//     }
//   };

//   oReq.send(oData);
//   ev.preventDefault();
// }, false);
