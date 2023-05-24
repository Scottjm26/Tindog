// Remember to import the data and Dog class!
import {dogs} from "./data.js"
import Dogs from "./Dog.js"

let hasBeenSwiped = false
let hasBeenLiked = false
let dogArray =["dog1", "dog2", "dog3", "dog4"]
let dogIndex = 0

document.getElementById("liked-button").addEventListener("click", likedNextDog)
document.getElementById("pass-button").addEventListener("click", passNextDog)

function getNewDog() {
    const nextdogData = dogs[dogArray.shift()]
    return nextdogData ? new Dogs(nextdogData) : {}
}

function likedNextDog(){
    dogIndex +=1
    const likedImage = document.getElementById("liked-image")
    likedImage.style.display="flex"
    setTimeout(()=>{
    likedImage.style.display="none"
    newDog = getNewDog()
    if (dogIndex < 4){
     render()}},1500);
       if(dogArray.length <= 0 ){
     setTimeout(()=> {
        end()},1500)}
}

function passNextDog(){
    dogIndex +=1
   const passImage = document.getElementById("pass-image")
    passImage.style.display="flex"
    setTimeout(()=>{
    passImage.style.display="none"
     newDog = getNewDog()
      if (dogIndex < 4){
     render()}},1500)
       if(dogArray.length <= 0 ){
     setTimeout(()=> {
        end()},1500)}
}

function end(){
     document.body.innerHTML =`<div><h1> There are no more dogs in your area. <BR>😭<h1></div>`
}

function render(){
    document.getElementById("dogCard").innerHTML = newDog.getDogHtml();
}

let newDog = getNewDog()

render()



