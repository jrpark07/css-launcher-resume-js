// Yell real loud
let yellButton = document.getElementById('yell')
yellButton.addEventListener('click', () => {
  yell()
})

let yell = () => {
  // your code here
  let name = document.getElementsByTagName("h1")
  name[0].textContent = "THIS IS JR PARK'S WEBPAGE!!"
}
// Make me fierce
let fierceButton = document.getElementById('fierceify')
fierceButton.addEventListener('click', () => {
  fierceify()
})

let img = document.getElementsByTagName("img")

let fierceify = () => {
  // your code here
  img[0].src="https://wallpapersdsc.net/wp-content/uploads/2016/10/High-Resolution-Halloween-Images-10.jpg"
  document.querySelector("img").setAttribute("width", "1rem")
  document.querySelector("img").setAttribute("height", "300rem")
}
// Reveal an Easter egg
let easterEggButton = document.getElementById('easter-egg')
easterEggButton.addEventListener('click', () => {
  eggify()
})

let eggify = () => {
// your code here
let egg = document.createElement("img")
egg.src = "https://www.guinnessworldrecords.com/Images/Largest-Easter-Egg-decoration_tcm25-567653.jpg"
document.body.appendChild(egg)
}
// Select the first paragraph in the document
let selectMeButton = document.getElementById('select-me')
selectMeButton.addEventListener('click', () => {
  selectFirstParagraph()
})

let mark = document.getElementsByTagName("p")

let selectFirstParagraph = () => {
  // your code here
  mark[0].className = "selected"
}
// Deselect the first paragraph in the document
let deselectMeButton = document.getElementById('deselect-me')
deselectMeButton.addEventListener('click', () => {
  deselectFirstParagraph()
})

let deselectFirstParagraph = () => {
  // your code here
  mark[0].className = ""
}
// Toggle the visibility of the image of your face
let toggleFaceButton = document.getElementById('toggle-my-face')
toggleFaceButton.addEventListener('click', () => {
  toggleMyFace()
})

let toggleMyFace = () => {
  // your code here
  if(img[0].className === "hidden"){
    img[0].className = ""
  }else{
    img[0].className = "hidden"
  }
}
// Reload page when reload button is clicked -- no need to modify anything here!
let reloadButton = document.getElementById('reload')

reloadButton.addEventListener('click', () => {
  location.reload()
})
