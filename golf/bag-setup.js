
var club_num = 0;

export const setup = 
[
  "Driver",
  "3 wood",
  "3 hybrid",
  "4 hybrid",
  "5 iron",
  "6 iron",
  "7 iron",
  "8 iron",
  "9 iron",
  "PW",
  "GW",
  "SW",
  "LW",
  "Putter"
];

export function getClub()
{
    return(setup[club_num]);
}

export function changeClub(delta)
{
  club_num += delta;
  
  if(club_num >= setup.length)
  {
    club_num = 0;
  }
  else if(club_num < 0)
  {
    club_num = setup.length-1; 
  }
  return(setup[club_num]);
}
