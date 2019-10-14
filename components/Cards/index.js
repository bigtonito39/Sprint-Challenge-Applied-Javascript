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


const savedAxios = axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
        return response.data.articles;



    })
    .catch(err => {
        console.log('It didnt work!')
    })

savedAxios.then((data) => {


    function cardCreater() {
        console.log(data)

        for (let [key, value] of Object.entries(data.bootstrap)) {

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
            cardDiv2.textContent = `${data.bootstrap[key].headline}`;
            cardDiv3.textContent = `${data.bootstrap[key].authorName}`
            cardImg.setAttribute("src", data.bootstrap[key].authorPhoto)


            for (let [key, value] of Object.entries(data.bootstrap)) {


            }


        }

    }
    cardCreater()
})