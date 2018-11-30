// Small library for myself   
const createNode = (element) => {
    return document.createElement(element);
}

const appendNode = (parent, element) => {
    return parent.append(element);
}

const htmlSelect = (element) => {
    return document.querySelector(element)
}

let listOfTags = new Array();


const getArticleFormAPI = () => {
    let myHeaderTags = htmlSelect(".headerTags");
    let selectAllImage = document.querySelectorAll("img");
    let selectTitle = document.querySelectorAll(".description");
    let selectText = document.querySelectorAll(".testClass");
    fetch("https://foodog.herokuapp.com/articles")
        .then((response) => response.json())
        .then(function (data) {
            let getDocs = data.docs;

            // Get all data from API
            getDocs.map(function (result) {
                let getTags = result.tagForArticle;
                for (let i = 0; i < selectAllImage.length; i++) {
                    if (i >= data.docs.length || i >= selectText.length) {
                        true;
                    } else {
                        selectAllImage[i].src = data.docs[i].imgUrl;
                        selectTitle[i].innerHTML = data.docs[i].title;
                        selectText[i].innerHTML = data.docs[i].text;

                    }
                }
                //Send all tags of the arrays
                getTags.map(function (allTags) {
                    listOfTags.push(allTags);
                })
                
            })
            
            //Sort the array and remove duplicate tags from the array
            for (let index = 0; index < listOfTags.length; index++) {
                listOfTags.sort();
                if (listOfTags[index] == listOfTags[index +1]) {
                    listOfTags.splice(index, 2);
                }
            }
            // Create HTML element for visualize API
            listOfTags.forEach(element => {
                let createLI = createNode("li");
                let createA = createNode("a");
                createA.href = "";
                createA.innerHTML = element;
                appendNode(createLI, createA)
                appendNode(myHeaderTags, createLI);
            });
        })

}




getArticleFormAPI();