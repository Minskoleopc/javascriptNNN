class Vehicle {
    type = "sedane"
    color = "red"
    city = "pune"
    displayColor(){
        console.log("red")
    }
}

let audi  =  new Vehicle()
let bmw  =  new Vehicle()

console.log(audi)
console.log(bmw)

audi.displayColor()
bmw.displayColor()

class VehicleB {
    constructor(type,color,city){
        this.type = type
        this.color = color
        this.city = city
    }

    displayColor(){
        console.log("red")
    }
}
let audiB  =  new VehicleB("SUV","red","pune")
let bmwB  =  new VehicleB("SUV","green","pune")

audiB.displayColor()
bmwB.displayColor()

// using getter and setter method



class VehicleC {

    setColor(cl){
        this.color = cl
    }

    setType(type){
        this.type  = type
    }

    setCity(city){
        this.city = city
    }

}

let audiC  =  new VehicleC()
let bmwC  =  new VehicleC()

console.log(audiC)
console.log(bmwC)

audiC.setCity("pune")
audiC.setType("SUV")
audiC.setColor("Green")
console.log(audiC)