import  Clock from "./clock.js";

let  listComponent = document.getElementById("clock-list")

 for( let index = 0;index < 6; index++){
    let clock = new Clock(0,0,listComponent,index)
 }