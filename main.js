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
class Clock{ 
    constructor(min,sec){
        this.min = min;
        this.sec = sec;
        // document.querySelector("body").innerHTML = this.codeHTML()
    }
    render(){
        //+1 giây
        let mins = parseInt(this.min);//convert string to number 
        let secs = parseInt(this.sec);
        if(secs < 59 ){
            secs++
        }else{
            secs = 0;
            mins++
        }
        //add 0 -> num < 10
        if(secs<10) secs = '0'+ secs;
        if(mins<10) mins = '0'+ mins;
        //dom -> html
        this.min = mins;
        this.sec = secs;
    }
    codeHTML = () =>{
        let code = ``;
        code = `<ol>
                    <li id="clock1"></li>
                    <li id="clock2"></li>
                    <li id="clock3"></li>
                    <li id="clock4"></li>
                    <li id="clock5"></li>
                </ol>`
    return code;
    }
    star(){
        this.render();
        console.log(this.mins+ ":"+this.sec);

        this.timer = setInterval(()=>{
            this.render();
            console.log(this.min + ":" + this.sec)
        },1000)
    }
    stop(){
        clearInterval(this.timer)
    }

}
let clock1 = new Clock("00","00")
document.getElementById("clock1").innerHTML = clock1.min+":"+clock1.sec

