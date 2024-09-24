let name = "Yogesh      "

console.log(name.trim().length)     // but we want to do this using console.log(myName.trueLength); which is defining our own method

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.yogesh = function (){      // now this yogesh method we directly injected to Object so it is shared to all (arrays, objects, strings)
    console.log(`Yogesh is everywere ${this}`)
}

heroPower.yogesh()  //Yogesh is everywere [object Object]
myHeros.yogesh()    //Yogesh is everywere thor,spiderman

const tempFun = function(){}
tempFun.yogesh()     //Yogesh is everywere function(){}

Array.prototype.yogesh2 = function (){
    console.log(`Yogesh2 is also every were? ${this}`)
}

myHeros.yogesh2()       //Yogesh2 is also every were? thor,spiderman
//heroPower.yogesh2()     //TypeError: heroPower.yogesh2 is not a function
//tempFun.yogesh2()           //TypeError: tempFun.yogesh2 is not a function

//! Inheritance

const user = {
    name: "Yogesh",
    email: "12@.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssiment: 'JS',
    fullTime: true,
    __proto__: teachingSupport,     //! prorotypal inheritance
    temp: teacher
}

teacher.__proto__ = user        //! prorotypal inheritance -> teacher can also access properties of user

console.log(TASupport.temp.makeVideo)
console.log(TASupport.isAvailable)


//* Modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

console.log(teachingSupport.makeVideo);


//? now trueLength

String.prototype.trueLength = function(){
    return this.trim().length
}

console.log(name.trueLength())      // 6