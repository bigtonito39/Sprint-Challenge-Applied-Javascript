// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector(".cards-container")



function cardCreater(data) {
    const cardDiv1 = document.createElement("div");
    const cardDiv2 = document.createElement("div");
    const cardDiv3 = document.createElement("div");
    const cardDiv4 = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardSpan1 = document.createElement("span");

    cardDiv1.classList.add("card");


    cardDiv2.classList.add("headline");
    cardDiv3.classList.add("author");
    cardDiv4.classList.add("img-container");


    cardDiv1.appendChild(cardDiv2);
    cardDiv1.appendChild(cardDiv3);
    cardDiv3.appendChild(cardDiv4);
    cardDiv4.appendChild(cardImg);
    cardDiv3.appendChild(cardSpan1);
    cardContainer.appendChild(cardDiv1)

    for (let key in data.bootstrap) {
        const cardDiv1 = document.createElement("div");
        const cardDiv2 = document.createElement("div");
        const cardDiv3 = document.createElement("div");
        const cardDiv4 = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardSpan1 = document.createElement("span");

        cardDiv1.classList.add("card");


        cardDiv2.classList.add("headline");
        cardDiv3.classList.add("author");
        cardDiv4.classList.add("img-container");


        cardDiv1.appendChild(cardDiv2);
        cardDiv1.appendChild(cardDiv3);
        cardDiv3.appendChild(cardDiv4);
        cardDiv4.appendChild(cardImg);
        cardDiv3.appendChild(cardSpan1);
        cardContainer.appendChild(cardDiv1)

        cardDiv2.textContent = `${data.bootstrap[key].headline}`;
        cardDiv3.textContent = `${data.bootstrap[key].authorName}`
        cardDiv4.textContent = `${data.bootstrap[key].headline}`;
        cardSpan1.textContent = `${data.bootstrap[key].authorName}`
        cardImg.setAttribute("src", data.bootstrap[key].authorPhoto)

    }


    /*for (let [key, value] of Object.entries(data.bootstrap)) {



        cardDiv2.textContent = `${data.bootstrap[key].headline}`;
        cardDiv3.textContent = `${data.bootstrap[key].authorName}`
        cardDiv2.textContent = `${data.bootstrap[key].headline}`;
        cardDiv3.textContent = `${data.bootstrap[key].authorName}`
        cardImg.setAttribute("src", data.bootstrap[key].authorPhoto)


        for (let [key, value] of Object.entries(data.javascript)) {




            cardDiv2.textContent = `${data.javascript[key].headline}`;
            cardDiv3.textContent = `${data.javascript[key].authorName}`
            cardDiv2.textContent = `${data.javascript[key].headline}`;
            cardDiv3.textContent = `${data.javascript[key].authorName}`
            cardImg.setAttribute("src", data.javascript[key].authorPhoto)
        }

        for (let [key, value] of Object.entries(data.jquery)) {




            cardDiv2.textContent = `${data.jquery[key].headline}`;
            cardDiv3.textContent = `${data.jquery[key].authorName}`
            cardDiv2.textContent = `${data.jquery[key].headline}`;
            cardDiv3.textContent = `${data.jquery[key].authorName}`
            cardImg.setAttribute("src", data.jquery[key].authorPhoto)
        }

        for (let [key, value] of Object.entries(data.node)) {




            cardDiv2.textContent = `${data.node[key].headline}`;
            cardDiv3.textContent = `${data.node[key].authorName}`
            cardDiv2.textContent = `${data.node[key].headline}`;
            cardDiv3.textContent = `${data.node[key].authorName}`
            cardImg.setAttribute("src", data.node[key].authorPhoto)
        }

        for (let [key, value] of Object.entries(data.technology)) {





            cardDiv2.textContent = `${data.technology[key].headline}`;
            cardDiv3.textContent = `${data.technology[key].authorName}`
            cardDiv2.textContent = `${data.technology[key].headline}`;
            cardDiv3.textContent = `${data.technology[key].authorName}`
            cardImg.setAttribute("src", data.technology[key].authorPhoto)
        }

}

*/
}
const savedAxios = axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {


        return cardCreater(response["data"]["articles"])


    })
    .catch(err => {
        console.log("it didnt work !")
    })