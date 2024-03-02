console.log("Connected");

const addBtn = document.getElementById('addBtn').addEventListener("click", function(){
    const nameField= document.getElementById("name");
    const jerseyField= document.getElementById("jersey");

    const playerName = nameField.value;
    const jerseyNo = jerseyField.value;
    
    nameField.value = ' ';
    jerseyField.value = ' ';
    displayPlayer(playerName,jerseyNo);
    addToTeam(playerName,jerseyNo)
    console.log(playerName,jerseyNo);
})

const getSavedTeam = () =>{
    let team = {};
    const savedTeam = localStorage.getItem("team");
    if(savedTeam){
        team = JSON.parse(savedTeam);
    }
    return team;
}

const addToTeam = (player, jersey) =>{

    const team = getSavedTeam();
    team[player] = jersey;
    teamStringified = JSON.stringify(team);
    localStorage.setItem('team', teamStringified);

}
const displayFromTeam = () =>{
const team = getSavedTeam();
for(const player in team){
   const jersey = team[player];
    displayPlayer(player,jersey);
}

}
function displayPlayer (player,jersey) {
    const team_container = document.getElementById('team');
    const li = document.createElement("li");
    li.innerHTML =`
    ${player} : ${jersey} `

    team_container.appendChild(li);
}

displayFromTeam();