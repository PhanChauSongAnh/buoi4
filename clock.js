// //opp tính chất: ké thừa,đóng gói,đa hình, trừu tượng 
// // tính đa hình 
// class Student{ 
//     constructor(st_id,st_name,st_age){
//         this.st_id = st_id;
//         this.st_name = st_name;
//         this.st_age = st_age; 
//     }
//     getName = () =>{
//         //fuction be hon => this cua getName
//         console.log(this.st_name)
//     }
// }
// // khai báo các object 
// let SA = new Student(1,"sa",16);
// SA.getName();
// //inheritance
// class Studentkids extends Student{
//     constructor(course,st_id,st_name,st_age){
//         super(st_id,st_name,st_age)
//         this.course = course;
//     }
//     walk = () =>{
//         console.log("walking")
//     }
// }
// let Sa1 = new Studentkids("Js",1,"sa",16)
// console.log(Sa1)

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name){
//         super(name)
//         this.created = Date.now();
//     }
//     getCreated = () => {
//         console.log(this.created)
//     }

// }
// let rabbit = new Rabbit("white")
// rabbit.getCreated()
// //bai2'
// class Clock{
//     constructor(template) {
//         this.template = template;
//     }
//     render(){
//         let date = new Date();
//         let hours = date.getHours()
//         let mins = date.getMinutes()
//         let secs = date.getSeconds()
//         if (hours <10) hours = "0"+ hours;
//         if (hours <10) mins = "0"+ hours;
//         if (hours <10) secs = "0"+ hours;
        
//         let output = this.template
//         .replace('h',hours)
//         .replace('m',mins)
//         .replace('s',secs)
//         return output
//     }
//     stop(){
//         clearInterval(this.timer)
//     }
//     start(){
//         console.log(this.render());
//         this.timer = setInterval(() => console.log ( this.render(),1000));
//     }
// }
// class Mili extends Clock{

// }
// let clock1 = new Clock("h:m:s")
// clock1.start()
// clock1.stop()
// class ExtendClock extends Clock{
//     constructor(template){
//         super(template);
//     }
//     ticks = () => {
//         let date = new Date();
//         let milis = date.getMilliseconds();
//         let output = this.render().replace('ml',milis)
//         console.log(output)
//     }
//     start(){
//         this.ticks();
//         this.timer = setInterval(() => this.ticks(), 1);

//     }
// }
// let clock2 = new ExtendClock("h:m:s:ml")
// clock2.start()
//------------------------------bai4----------------------------

export default class Clock{ 
    constructor(min,sec,listComponent,id){
        this.min = min;
        this.sec = sec;
        this.listComponent = listComponent;
        this.id = id;
        this.codeHTML()
    }
    printTime(){
        let minute = "";
        let second = "";

        if(this.min<10) minute = "0" + this.min;
        else minute = this.min;

        if(this.sec<10) second = "0" + this.sec;
        else second = this.sec;

        let li_span = document.querySelector("#" + this.id + " span");
        li_span.innerHTML = minute + ";" + second;
        this.listComponent.appendChild(li_span)
    }
    codeHTML = () =>{

        let li = document.createElement("li");
        li.id = this.id;

        let span = document.createElement("span");
        span.innerText = minute + ";" + second

        let buttonStart = document.createElement("button");
        buttonStart.innerHTML = "start"
        buttonStart.addEventListener("click",this.start.bind(this));

        let buttonStop = document.createElement("button");
        buttonStop.innerHTML = "stop"
        buttonStop.addEventListener("click",this.stop.bind(this));
//add in li tag 
        li.appendChild(span);
        li.appendChild(buttonStart);
        li.appendChild(buttonStop);
//add in list
        this.listComponent.appendChild(li)


    }
    updateTimebysecond(){
        this.sec++;
        if(this.sec == 60){
            this.sec = 0;
            this.min++;
        }
    }
    start(){
        this.timer = setInterval(()=>{
            this.updateTimebysecond();
            this.this.printTime();
        },1000)

    }
    stop(){
        clearInterval(this.timer)
    }

}


