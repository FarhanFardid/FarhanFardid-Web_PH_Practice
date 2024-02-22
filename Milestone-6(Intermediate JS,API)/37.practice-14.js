// Class Inheritance [Prototypical Inheritance]

class playerInfo{
    name;
    age;
    team;
    role;
    constructor(name,age,team,role){
        this.name= name;
       this.age =age;
       this.team =team;
       this.role =role; 

    }

}

class player extends playerInfo{
    location;
    constructor(name,age,team,role,location){
        super (name,age,team,role);
        this.location = location;
    }
    play(){
        console.log(`${this.name} is playing for ${this.team} as a /an ${this.role} and lives in ${this.location}`)
    };
}

const shakib = new player('Shakib Al Hasan', 34, 'Bangladesh', "All-Rounder", "Dhaka");
console.log(shakib);
shakib.play();
const Tamim = new player('Tamim Iqbal', 35, 'Bangladesh', "Batsman", "Dhaka");
console.log(Tamim);
Tamim.play();