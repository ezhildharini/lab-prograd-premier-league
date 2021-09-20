//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  var managerDetails = [managerName, managerAge, currentTeam, trophiesWon];
  return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length == 0)
    return null;
  else
  {
    var form = {defender:formation[0], midfield:formation[1], forward:formation[2]};
    return form;
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
  var debutedPlayers = [], j=0;
  for(let i=0;i<players.length;i++)
  {
    if(year==players[i]["debut"])
    {
      debutedPlayers[j]=players[i];
      j++;
    }
  }
  return debutedPlayers;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position)
{
  var playersPosition = [],j=0;
  for(i=0;i<players.length; i++)
  {
    if(position==players[i]["position"])
    {
      playersPosition[j]=players[i];
      j++;
    }
  }
  return playersPosition;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName)
{
  var awardPlayers=[];
  for(let i=0;i<players.length;i++)
  {
    for(let j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName)
      {
        if(!(awardPlayers.includes(players[i])))
          awardPlayers.push(players[i]);
      }
    }
  }
  return awardPlayers;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes)
{
  let playersWon=[];
  for(let i=0; i<players.length; i++)
  {
    let count =0;
    for(let j=0; j<players[i].awards.length; j++)
    {
      if(players[i].awards[j].name == awardName)
        count++;
    }
    if(count == noOfTimes)
      playersWon.push(players[i]);
  }
  return playersWon;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country)
{
  let filteredPlayers =[];
  for(let i=0; i<players.length; i++)
  {
    for(let j=0; j<players[i].awards.length; j++)
    {
      if((players[i].awards[j].name == awardName) && players[i].country == country)
      {
        if(!(filteredPlayers.includes(players[i])))
          filteredPlayers.push(players[i]);
      }
    }
  }
  return filteredPlayers;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  let filterPlayers=[];
  for(let i=0; i<players.length; i++)
  { 
    if((players[i].awards.length>=noOfAwards) && (players[i].team == team) && (players[i].age <= age))
      filterPlayers.push(players[i]);
  }
  return filterPlayers;
}

//Progression 9 - Sort players in descending order of their age
function sortByAge()
{
  let oldestPlayer = players.sort((player1,player2) => (player1.age < player2.age) ? 1 : (player1.age > player2.age) ? -1 : 0);
  return oldestPlayer;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team)
{
  let filteredTeam = players.filter(player => player.team == team);
  let sortedPlayers = filteredTeam.sort((player1,player2)=>(player1.awards.length<player2.awards.length) ? 1 : (player1.awards.length>player2.awards.length)? -1 : 0 );
  return sortedPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
