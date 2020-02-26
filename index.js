const appTl = new TimelineLite();
const imageTl = new TimelineLite();
let imgPrefix = "./assets/"

let personData = [{
    fullName: "Daisy S",
    img: "cheese.jpg",
    location: "Seattle, Wa",
}, {
    fullName: "Eric K",
    img: "pink&blue.jpg",
    location: "Bellevue, Wa",
}, {
    fullName: "Samantha B",
    img: "yellow.jpg",
    location: "Redmond, Wa",
}, {
    fullName: "Naomi E",
    img: "green&yellow.jpg",
    location: "Shoreline, Wa",
}, {
    fullName: "Emma L",
    img: "green&white.jpg",
    location: "Chelan, Wa",
},
{
    fullName: "Cece D",
    img: "Brown&Orange.jpg",
    location: "Lake Forest, Wa",
},]


let portrait = document.getElementById("portrait");
let personName = document.getElementById("name");
let personLocation = document.getElementById("location");
let wrapper = document.getElementsByClassName("image-wrapper")
let heartBtn = document.getElementById("heart-btn");
let commentBtn = document.getElementById("comment-btn");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let index = 0
portrait.src = imgPrefix + personData[index].img
personName.textContent = personData[index].fullName
personLocation.textContent = personData[index].location

imageTl
    .from(portrait, 1.2, { scale: 1.3, ease: Power3.ease }, .2)

appTl
    .from(wrapper, 1.5, { y: -1280, ease: Power3.easeOut }, .2)
    .from(prevBtn, 1.2, { x: -1280, ease: Power3.ease }, .2)
    .from(nextBtn, 1.2, { x: 1280, ease: Power3.ease }, .2)
    .staggerFrom([heartBtn, commentBtn], .5, { y: 1280, ease: Power3.easeOut, delay: 0 }, .10)

nextBtn.addEventListener("click", () => {
    index = (index === personData.length - 1) ? 0 : index + 1;
    portrait.src = imgPrefix + personData[index].img
    personName.textContent = personData[index].fullName
    personLocation.textContent = personData[index].location
    imageTl.restart()
})

prevBtn.addEventListener("click", () => {
    index = (index === 0) ? personData.length - 1 : index - 1
    portrait.src = imgPrefix + personData[index].img
    personName.textContent = personData[index].fullName
    personLocation.textContent = personData[index].location
    imageTl.restart()
})
