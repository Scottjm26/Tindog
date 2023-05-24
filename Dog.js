// Create the Dog class here
import {dogs} from "./data.js"


class Dogs{
    constructor(data){
    Object.assign(this, data)
    
}

getDogHtml(){
      const { name, avatar, age, bio} = this
        
        return `<div class="character-card">
                <img class="avatar" src="${avatar}" />
                <h4 class="name"> ${name}, ${age} </h4>
                <div class ="bio"> ${bio} </div>
               </div>`



}
}


export default Dogs