import * as gps from "../golf/gps.js";

export const course_list = 
[
  "Magnolia Creek Scotland-Ireland",
  "Magnolia Creek Ireland-England",
  "Magnolia Creek England-Scotland",
  "SSH Harbor-South",
  "Home Test"
];

const course0 =    // mag creek scotland-ireland
 [
    29.472511411876773,-95.14309003341464,29.472586135346614,-95.14323487270144,29.472474050121228,-95.14294787633685,
    29.473823734805435,-95.14040514219073,29.47367895979997,-95.1403649090555,29.473912467771086,-95.14038904893664,
    29.471863416977335,-95.1401751427677,29.472011697256665,-95.14012619245318,29.47175833633309,-95.14029450106887,
    29.469447702196412,-95.13575553286341,29.46943836147657,-95.13593322921065,29.469381149548735,-95.13558387148646,
    29.47422536760912,-95.13399130988387,29.474110949123627,-95.13403221357134,29.47435613143441,-95.13404093075064,
    29.470426137834288,-95.13441711056498,29.47058609598451,-95.13443186271456,29.470287195878573,-95.13448885965613,
    29.470491522218172,-95.14018788326052,29.470357250669995,-95.1401214985874,29.47064914511312,-95.1402187286642,
    29.471411569434483,-95.14280907202033,29.471334509962613,-95.14270245421199,29.471469947783277,-95.14293781805304,
    29.47528898633001,-95.1446859477785,29.475167563900882,-95.14471612262992,29.47545710945328,-95.14465510237483,
    29.474943873927593,-95.14960857469994,29.475031467577114,-95.14946936806844,29.47490493691761,-95.14977326239894,
    29.471810505113464,-95.15235193821134,29.471849093004057,-95.15223311638472,29.471779243579444,-95.15245949480921,
    29.47089294249475,-95.14826237417545,29.470976102848226,-95.14840131265153,29.470807446942366,-95.14814274763701,
    29.472726307850483,-95.14694755536546,29.47252785297771,-95.14692958461417,29.47290079836877,-95.14692126983171,
    29.470240646379377,-95.146507941488,29.470386389534998,-95.14647763255887,29.470099193856598,-95.14659269939109,
    29.470675102234217,-95.1522923936296,29.470624400248084,-95.15217223061661,29.470790254322488,-95.15237366461186,
    29.471227422444432,-95.15367212201234,29.471152960639113,-95.153604262157,29.47133046035887,-95.15373676334782,
    29.474057425260348,-95.15212207352086,29.473930893385095,-95.15215667408263,29.474185445604867,-95.15203168320802,
    29.476989622458305,-95.1463373534694,29.47686589624668,-95.14644598293451,29.477014898880604,-95.14622416429809      
];

const course1 =    // mag creek ireland-england
 [
    29.474943873927593,-95.14960857469994,29.475031467577114,-95.14946936806844,29.47490493691761,-95.14977326239894,
    29.471810505113464,-95.15235193821134,29.471849093004057,-95.15223311638472,29.471779243579444,-95.15245949480921,
    29.47089294249475,-95.14826237417545,29.470976102848226,-95.14840131265153,29.470807446942366,-95.14814274763701,
    29.472726307850483,-95.14694755536546,29.47252785297771,-95.14692958461417,29.47290079836877,-95.14692126983171,
    29.470240646379377,-95.146507941488,29.470386389534998,-95.14647763255887,29.470099193856598,-95.14659269939109,
    29.470675102234217,-95.1522923936296,29.470624400248084,-95.15217223061661,29.470790254322488,-95.15237366461186,
    29.471227422444432,-95.15367212201234,29.471152960639113,-95.153604262157,29.47133046035887,-95.15373676334782,
    29.474057425260348,-95.15212207352086,29.473930893385095,-95.15215667408263,29.474185445604867,-95.15203168320802,
    29.476989622458305,-95.1463373534694,29.47686589624668,-95.14644598293451,29.477014898880604,-95.14622416429809,
    29.474891889579837,-95.13832023080575,29.474934416731596,-95.13846962988062,29.474887277824006,-95.13818021954428,
    29.478095990357325,-95.13540579231973,29.478036579810606,-95.13554643327515,29.478069881053514,-95.13522286522682,
    29.478412402777675,-95.13253408728407,29.478417958644673,-95.13263620082085,29.478402177247762,-95.13243541959798,
    29.475521024860207,-95.13710413296263,29.475588685667905,-95.13697132288672,29.475454011589065,-95.13719716271368,
    29.477293857263685,-95.13269720873805,29.477265617026028,-95.13284627901099,29.47724835330508,-95.13252930540732,
    29.476529526805912,-95.13291682399874,29.476533451976554,-95.13278307586572,29.476507365138726,-95.13308217380184,
    29.47439323356096,-95.1350277465694,29.474480457747976,-95.13496230892916,29.47425487662975,-95.13499742180929,
    29.474294928244102,-95.13727305572812,29.474231047119737,-95.13711760148995,29.47442060618336,-95.13741286889108,
    29.476371720456434,-95.14202542450893,29.476264489856383,-95.14195551797613,29.476492949580614,-95.14214353156679
 ];

const course2 =    // mag creek england-scotland
 [
    29.474891889579837,-95.13832023080575,29.474934416731596,-95.13846962988062,29.474887277824006,-95.13818021954428,
    29.478095990357325,-95.13540579231973,29.478036579810606,-95.13554643327515,29.478069881053514,-95.13522286522682,
    29.478412402777675,-95.13253408728407,29.478417958644673,-95.13263620082085,29.478402177247762,-95.13243541959798,
    29.475521024860207,-95.13710413296263,29.475588685667905,-95.13697132288672,29.475454011589065,-95.13719716271368,
    29.477293857263685,-95.13269720873805,29.477265617026028,-95.13284627901099,29.47724835330508,-95.13252930540732,
    29.476529526805912,-95.13291682399874,29.476533451976554,-95.13278307586572,29.476507365138726,-95.13308217380184,
    29.47439323356096,-95.1350277465694,29.474480457747976,-95.13496230892916,29.47425487662975,-95.13499742180929,
    29.474294928244102,-95.13727305572812,29.474231047119737,-95.13711760148995,29.47442060618336,-95.13741286889108,
    29.476371720456434,-95.14202542450893,29.476264489856383,-95.14195551797613,29.476492949580614,-95.14214353156679,
    29.472511411876773,-95.14309003341464,29.472586135346614,-95.14323487270144,29.472474050121228,-95.14294787633685,
    29.473823734805435,-95.14040514219073,29.47367895979997,-95.1403649090555,29.473912467771086,-95.14038904893664,
    29.471863416977335,-95.1401751427677,29.472011697256665,-95.14012619245318,29.47175833633309,-95.14029450106887,
    29.469447702196412,-95.13575553286341,29.46943836147657,-95.13593322921065,29.469381149548735,-95.13558387148646,
    29.47422536760912,-95.13399130988387,29.474110949123627,-95.13403221357134,29.47435613143441,-95.13404093075064,
    29.470426137834288,-95.13441711056498,29.47058609598451,-95.13443186271456,29.470287195878573,-95.13448885965613,
    29.470491522218172,-95.14018788326052,29.470357250669995,-95.1401214985874,29.47064914511312,-95.1402187286642,
    29.471411569434483,-95.14280907202033,29.471334509962613,-95.14270245421199,29.471469947783277,-95.14293781805304,
    29.47528898633001,-95.1446859477785,29.475167563900882,-95.14471612262992,29.47545710945328,-95.14465510237483
 ];

const course3 =    // ssh harbor south
 [
    29.530837048038155,-95.050091657548,29.530939616901957,-95.05016354055314,29.53075711649438,-95.0500390866442,
    29.528767911005875,-95.04930738022139,29.528885885056287,-95.0493921382882,29.528663589507467,-95.04925802783745,
    29.53113390228719,-95.05170956687707,29.531020131456785,-95.05169776541933,29.531253623965558,-95.05178037758796,
    29.532749199869897,-95.05281571026771,29.532598091278384,-95.05272666105938,29.53291372682313,-95.05286077151013,
    29.53745445416497,-95.05840650713125,29.537396697180387,-95.05832174939187,29.53752189544366,-95.05847302604579,
    29.540942093721156,-95.05421582402832,29.540824600327607,-95.05426410379059,29.541046869145784,-95.05408922389378,
    29.53996142228083,-95.05730680208998,29.540019411098722,-95.05713621366212,29.53987951455451,-95.05738619573876,
    29.53799876760867,-95.06047395495315,29.53812221496466,-95.06038168722498,29.537881504186988,-95.0606016283642,
    29.535623602168215,-95.0560794242925,29.53566117390203,-95.05616740055174,29.53557727905314,-95.05599681212388,
    29.529521787260673,-95.05165431589248,29.529606795707775,-95.05176214072762,29.529449089515264,-95.05153093427779,
    29.528293445104453,-95.05074129204203,29.528372853426543,-95.05087272028376,29.52824128410623,-95.05056641198152,
    29.527800248654998,-95.05542872061469,29.527788171043348,-95.05527690764993,29.527796631150512,-95.05557999726861,
    29.527011117633915,-95.06068155881493,29.52703264739505,-95.06052974585018,29.52702803804876,-95.06083927283598,
    29.52902865505117,-95.05790600895907,29.52891015593024,-95.05800525069262,29.529196805618064,-95.05778262750809,
    29.529467117920696,-95.06458631899349,29.529617472634353,-95.06449244167797,29.52936454747463,-95.06469682603765,
    29.527022845078836,-95.06387177861015,29.52716386802836,-95.06392595926499,29.526896000072846,-95.06387070582477,
    29.530179273218366,-95.06108496360739,29.530088780832877,-95.06125072425547,29.530310081449578,-95.06100664339883,
    29.53203571968065,-95.05457416970657,29.531952696949542,-95.05470130647936,29.532117983860072,-95.05447010002953,
 ];

const course4 =    // home test
 [
    29.602117689908102,-95.122041474296,29.602013003980375,-95.12199738823746,29.602228136913386,-95.12209501417667,
    29.602876,-95.121217,29.602969,-95.121296,29.602947,-95.121358 
 ];

var all_courses = [];
var course_num = 0;
var hole_num = 0;

all_courses.push(course0);
all_courses.push(course1);
all_courses.push(course2);
all_courses.push(course3);
all_courses.push(course4);

export function setCourseNum(num)
{
  if(course_num >= 0 && course_num < course_list.length)
  {
      course_num = num;
  }  
}

export function getCourseNum()
{
  return(course_num);
}

export function getCourseName()
{
  return(course_list[course_num]);
}

export function changeCourse(delta)
{
  course_num += delta;
  
  if(course_num == course_list.length)
  {
    course_num = 0;
  }
  else if(course_num < 0)
  {
      course_num = course_list.length-1; 
  }
  return(course_list[course_num]);
}

export function getHoleNum()
{
    return(hole_num);
}

export function setHoleNum(num)
{
  var num_holes = course_list[course_num.length/6];
  if(num >= 0 && num < num_holes)
  {
      hole_num = num;
  }  
}

export function changeHole(delta)
{
  var holes =  all_courses[course_num].length/6;
  hole_num += delta;
  
  if(hole_num >= holes)
  {
    hole_num = 0;
  }
  else if(hole_num < 0)
  {
      hole_num = holes-1; 
  }
  return(hole_num);
}


// function to get distance to current hole
export function distanceTo(hole, which)
{
  
  var val = -1.0;
  if(gps.getLock() == true)
  {
    let lat = gps.getLatitude();  // current lat
    let long = gps.getLongitude(); // current long
    let lat_long_hole = getLatLongOfHole(hole, which);    
    val = gps.getDistance(lat, long, lat_long_hole[0], lat_long_hole[1]);
    /*
    let lat1_r = lat * Math.PI / 180.0;
    let long1_r = long * Math.PI / 180.0;
    let lat2_r = lat_long_hole[0] * Math.PI / 180.0;
    let long2_r = lat_long_hole[1] * Math.PI / 180.0;
    /*
    val = Math.acos(
    Math.sin(lat1_r) * Math.sin(lat2_r) + Math.cos(lat1_r) * Math.cos(lat2_r) * Math.cos(long1_r - long2_r)
    ) * earth_radius_yards;
    */
  }
// ACOS ((sin(G2*PI()/180)*sin(I2*PI()/180)+cos(G2*PI()/180)*cos(I2*PI()/180)*cos(H2*PI()/180-J2*PI()/180)) ) *$O$23  
  return val;
}

function getLatLongOfHole(hole, cent_front_back)
{
  var holes =  all_courses[course_num].length/6;
  if(hole >= 0 && hole < holes)
  {
    let idx = (hole) * 6;
    var lat_idx = idx+0;
    var long_idx = idx+1;
    switch(cent_front_back)
    {
        case "center":
          lat_idx = idx+0;
          long_idx = idx+1;
          break;
        case "front":
          lat_idx = idx+2;
          long_idx = idx+3;
          break;
        case "back":
          lat_idx = idx+4;
          var long_idx = idx+5;
          break;
        default:
          break;
      }
    var lat = all_courses[course_num][lat_idx];
    var long = all_courses[course_num][long_idx];
    return [ lat, long];
  }
  else
  {
      return [0, 0];
  }
}
