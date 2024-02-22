// creating Object using Class

class player {
  name;
  age;
  team;
  role;
  constructor(name, age, team, role) {
    this.name = name;
    this.age = age;
    this.team = team;
    this.role = role;
  };

   play () {
    console.log(`${this.name} is playing for ${this.team} as a/an ${this.role}`);
    
  }
};

const shakib = new player('Shakib', 34, 'Bangladesh', "All-Rounder");
console.log(shakib);
shakib.play();

const viratKohli  = new player("Virat Kohli", 34, 'India', "Batsman");
console.log(viratKohli);
viratKohli.play();

// console.log(allRounder.play);
