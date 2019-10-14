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

function cardCreater(data1) {

    data1.bootstrap.forEach((bootvalue) => {

        const cardDiv1 = document.createElement("div");
        cardDiv1.classList.add("card");
        cardContainer.appendChild(cardDiv1)


        const cardDiv2 = document.createElement("div");
        const cardDiv3 = document.createElement("div");
        const cardDiv4 = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardSpan1 = document.createElement("span");


        cardDiv2.classList.add("headline");
        cardDiv3.classList.add("author");
        cardDiv4.classList.add("img-container");



        cardDiv1.appendChild(cardDiv2);
        cardDiv1.appendChild(cardDiv3);
        cardDiv3.appendChild(cardDiv4);
        cardDiv4.appendChild(cardImg);
        cardDiv3.appendChild(cardSpan1);

        cardDiv2.textContent = `${bootvalue.headline}`;
        cardImg.setAttribute("src", bootvalue.authorPhoto)
        cardSpan1.textContent = ` by ${bootvalue.authorName}`

    });
    data1.javascript.forEach((javascriptvalue) => {
        const cardDiv1 = document.createElement("div");
        cardDiv1.classList.add("card");
        cardContainer.appendChild(cardDiv1)


        const cardDiv2 = document.createElement("div");
        const cardDiv3 = document.createElement("div");
        const cardDiv4 = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardSpan1 = document.createElement("span");


        cardDiv2.classList.add("headline");
        cardDiv3.classList.add("author");
        cardDiv4.classList.add("img-container");



        cardDiv1.appendChild(cardDiv2);
        cardDiv1.appendChild(cardDiv3);
        cardDiv3.appendChild(cardDiv4);
        cardDiv4.appendChild(cardImg);
        cardDiv3.appendChild(cardSpan1);

        cardDiv2.textContent = `${javascriptvalue.headline}`;
        cardImg.setAttribute("src", javascriptvalue.authorPhoto)
        cardSpan1.textContent = ` by ${javascriptvalue.authorName}`
    })

    data1.jquery.forEach((jqueryvalue) => {
        const cardDiv1 = document.createElement("div");
        cardDiv1.classList.add("card");
        cardContainer.appendChild(cardDiv1)


        const cardDiv2 = document.createElement("div");
        const cardDiv3 = document.createElement("div");
        const cardDiv4 = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardSpan1 = document.createElement("span");


        cardDiv2.classList.add("headline");
        cardDiv3.classList.add("author");
        cardDiv4.classList.add("img-container");



        cardDiv1.appendChild(cardDiv2);
        cardDiv1.appendChild(cardDiv3);
        cardDiv3.appendChild(cardDiv4);
        cardDiv4.appendChild(cardImg);
        cardDiv3.appendChild(cardSpan1);

        cardDiv2.textContent = `${jqueryvalue.headline}`;
        cardImg.setAttribute("src", jqueryvalue.authorPhoto)
        cardSpan1.textContent = ` by ${jqueryvalue.authorName}`;

    });

    data1.node.forEach((nodevalue) => {
        const cardDiv1 = document.createElement("div");
        cardDiv1.classList.add("card");
        cardContainer.appendChild(cardDiv1)


        const cardDiv2 = document.createElement("div");
        const cardDiv3 = document.createElement("div");
        const cardDiv4 = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardSpan1 = document.createElement("span");


        cardDiv2.classList.add("headline");
        cardDiv3.classList.add("author");
        cardDiv4.classList.add("img-container");



        cardDiv1.appendChild(cardDiv2);
        cardDiv1.appendChild(cardDiv3);
        cardDiv3.appendChild(cardDiv4);
        cardDiv4.appendChild(cardImg);
        cardDiv3.appendChild(cardSpan1);

        cardDiv2.textContent = `${nodevalue.headline}`;
        cardImg.setAttribute("src", nodevalue.authorPhoto)
        cardSpan1.textContent = ` by ${nodevalue.authorName}`;
    })

    data1.technology.forEach((technologyvalue) => {
        const cardDiv1 = document.createElement("div");
        cardDiv1.classList.add("card");
        cardContainer.appendChild(cardDiv1)


        const cardDiv2 = document.createElement("div");
        const cardDiv3 = document.createElement("div");
        const cardDiv4 = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardSpan1 = document.createElement("span");


        cardDiv2.classList.add("headline");
        cardDiv3.classList.add("author");
        cardDiv4.classList.add("img-container");



        cardDiv1.appendChild(cardDiv2);
        cardDiv1.appendChild(cardDiv3);
        cardDiv3.appendChild(cardDiv4);
        cardDiv4.appendChild(cardImg);
        cardDiv3.appendChild(cardSpan1);
        cardDiv2.textContent = `${technologyvalue.headline}`;
        cardImg.setAttribute("src", technologyvalue.authorPhoto)
        cardSpan1.textContent = ` by ${technologyvalue.authorName}`;

    })

}


const savedAxios = axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {

    console.log(response)

    for (let [key, value] of Object.entries(response["data"]["articles"])) {
        const savedData1 = new cardCreater(response["data"]["articles"]);
        cardContainer.appendChild(savedData1);

    }
})

.catch(err => {
    console.log("it didnt work !")

})