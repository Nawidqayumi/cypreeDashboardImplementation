class Car{

    constructor(carName, model, year){
        this.carName = carName;
        this.model= model;
        this.year = year;
    }

    carAge(){
        let date = new Date();
        return date.getFullYear()-this.year
    }
}


var myCar = new Car('Ford','Fiesta', "1990");

console.log('Car age is : ' , myCar.carAge());