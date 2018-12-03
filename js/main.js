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

let myHeaderTags = htmlSelect(".headerTags");
let selectAllImage = document.querySelectorAll("img");
let selectTitle = document.querySelectorAll(".description");
let selectText = document.querySelectorAll(".testClass");
let imglatest = document.querySelectorAll(".imglatest")


let listOfTags = new Array();
//             // Get all data from API
//             getDocs.map(function (result) {
//                 let getTags = result.tagForArticle;

//                 //Send all tags of the arrays
//                 getTags.map(function (allTags) {
//                     listOfTags.push(allTags);
//                 })

//             })

//             //Sort the array and remove duplicate tags from the array
//             for (let index = 0; index < listOfTags.length; index++) {
//                 listOfTags.sort();
//                 if (listOfTags[index] == listOfTags[index +1]) {
//                     listOfTags.splice(index, 2);
//                 }
//             }
//             // Create HTML element for visualize API
//             listOfTags.forEach(element => {
//                 let createLI = createNode("li");
//                 let createA = createNode("a");
//                 createA.href = "";
//                 createA.innerHTML = element;
//                 appendNode(createLI, createA)
//                 appendNode(myHeaderTags, createLI);
//             });


//Limit number of text into articles overviews
const textTruncate = (str, length, ending) => {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};

let newAA = new Array()
// Assign image/Text/Title/tags to the page
const attributeImgFirstPage = (result) => {
    for (let index = 0; index < 10; index++) {
        selectAllImage[index].src = result.docs[index].imgUrl;
        selectAllImage[index].style.maxWidth = "300px";
        
        for (let index = 0; index < 3; index++) {
            selectText[index].innerHTML = textTruncate(result.docs[index].text, 500, ` ... `);
        }
    }

}

const attributeImgSecondPage = (result2) => {
    for (let index = 0; index < imglatest.length; index++) {
        console.log('result2.docs[index].imgUrl :', result2.docs[index].imgUrl);
        imglatest[index].src = result2.docs[index].imgUrl;
        imglatest[index].style.maxWidth = "300px";
    }
}

const getArticleFormAPI = () => {
    const url = "https://foodog.herokuapp.com/articles";
    const url2 = "https://foodog.herokuapp.com/articles/?page=2";

    fetch(url)
        .then((response) => response.json())
        .then(dataResult => attributeImgFirstPage(dataResult))
        .then(
            fetch(url2)
                .then((response2) => response2.json())
                .then(dataResultPage2 => attributeImgSecondPage(dataResultPage2))
        )


}
getArticleFormAPI();

let array = [{name: "a", age:"11"}]
console.log('array :', array);