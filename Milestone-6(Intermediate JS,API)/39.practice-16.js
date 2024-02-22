// Object seal,freeze, delete

let players = {
name: 'shakib',
jersey: 75,
role: 'All-rounder',
team: ["Bangladesh", "KKR", "Bengal TIgers", "Peshwar Zalmi" ]

};

console.log(players);

Object.seal(players);
Object.freeze(players);
delete players.jersey;
players.jersey= 74;

console.log(players);