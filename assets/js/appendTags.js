// categBurger = "";

// let reponse = [];

// const choppeCategories = async () => {
//   let response = await fetch("https://foodog.herokuapp.com/articles", {
//     method: "GET"
//   });
//   reponse = await response.json();

//   let arr = [];

//   for (i = 0; i < reponse.docs.length; i++) {
//     reponse.docs[i].tagForArticle.forEach(e => {
//       if (!arr.includes(e)) {
//         arr.push(e);
//       }
//     });
//   }

//   console.log(arr);

//   arr.forEach(element => {
     

//     document.querySelector(".navbar-start").innerHTML +=  /*html*/ `
//     <a class="navbar-item burgermenu" id="${element.toLowerCase()}">
//        ${element.toUpperCase()}
//   </a>`;



// document.querySelector(`#${element.toLowerCase()}`).addEventListener("click", callTags(element.toLowerCase()));

//     // document.querySelector("#catlist").innerHTML += /*html*/ `

//     //           <a href="http://digest.thefarmersdog.com/category/community/"
//     //             target="_blank">${element.toUpperCase()}</a>
//     //         `;
//   });

//   for (let pop = 0; pop < 3; pop++) {
//     document.querySelector(".featured-postContainer").innerHTML += /*html*/ `
//             <div class="post-item">
//                         <div class="popImg">
//                                     <a class="featImg" target="_blank" href=""> <img src="${
//                                       reponse.docs[pop].imgUrl
//                                     }" /> </a>
                                  
//                         </div>
//                         <h3 class="text">
//                                     ${reponse.docs[pop].title}
//   </h3>
//           </div>`;
//   }

//   //     const categories = .map()

//   //     cateBurger += /*html*/ ``
// };

// choppeCategories();
