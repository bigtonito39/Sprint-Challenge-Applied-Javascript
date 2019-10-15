/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/





function carouselMaker() {
    const carousel = document.getElementsByClassName("carousel-container")[0];



    const caroudiv1 = document.createElement("div");
    const caroudiv2 = document.createElement("div");
    const carouimg1 = document.createElement("img");
    const carouimg2 = document.createElement("img");
    const carouimg3 = document.createElement("img");
    const carouimg4 = document.createElement("img");
    const caroudiv3 = document.createElement("div");


    caroudiv1.classList.add("carousel");
    caroudiv2.classList.add("left-button");
    carouimg1.setAttribute("src", "./assets/carousel/mountains.jpeg");
    carouimg2.setAttribute("src", "./assets/carousel/computer.jpeg");
    carouimg3.setAttribute("src", "./assets/carousel/trees.jpeg");
    carouimg4.setAttribute("src", "./assets/carousel/turntable.jpeg");
    carouimg1.style.display = "flex";
    caroudiv3.classList.add("right-button");


    carousel.appendChild(caroudiv1);
    caroudiv1.appendChild(caroudiv2);
    caroudiv1.appendChild(carouimg1);
    caroudiv1.appendChild(carouimg2);
    caroudiv1.appendChild(carouimg3);
    caroudiv1.appendChild(carouimg4);
    caroudiv1.appendChild(caroudiv3);
    /*
        const pullImages = document.querySelectorAll("img")
        pullImages.forEach((data) => {
            console.log(data)
            const imgCreator = document.createElement("img");
            imgCreator.src = data[0];
            imgCreator.style.display = "flex";
            caroudiv1.appendChild(imgCreator);

        })
    */



    caroudiv1.addEventListener("click", () => {
        caroudiv2.classList.toggle("left-button")
        caroudiv2.classList.toggle("left-button")



    })

    caroudiv1.addEventListener("click", (event) => {
        caroudiv3.classList.toggle("right-button")

    })


}
carouselMaker()