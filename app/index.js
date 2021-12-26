/*
 * Entry point for the watch app
 */
import * as document from "document";
import clock from "clock";

import * as course from "../golf/courses.js";
import * as gps from "../golf/gps.js";

let holetext = document.getElementById("holetext");
let clubtext = document.getElementById("clubtext");
let middisttext = document.getElementById("middisttext");
let frontdisttext = document.getElementById("frontdisttext");
let backdisttext = document.getElementById("backdisttext");
let courseanimationtext = document.getElementById("courseanimationtext");
let timetext = document.getElementById("timetext");

let hole_num = 0;   // zero based, hole 1 is hole_num=0, hole 18 is hole_num=17
courseanimationtext.text = course.getCourseName();

const holeUpBtn = document.getElementById("hole-up");
const holeDnBtn = document.getElementById("hole-down");
const clubUpBtn = document.getElementById("club-up");
const clubDnBtn = document.getElementById("club-down");
const checkBtn = document.getElementById("check");

let initialized = false;


function scrollTime()
{
  if(initialized == false)
  {
     // Animate after a 5 second delay
      setTimeout(() => {
      if(initialized == false)
      {
        courseanimationtext.animate("enable"); // Specify the name of the event to trigger
        scrollTime();            
      }
      else
      {
        courseanimationtext.animate("disable"); // Specify the name of the event to trigger
            
      }
      console.log("intialized = " + initialized);
  }, 6000);
  
  }
}

scrollTime();


// Button event handles -- move to another file???
holeUpBtn.addEventListener("click", (evt) => {
  console.log("next hole");
  
  // when not initialized next course
  if(initialized == false)
  {
    course.changeCourse(1);
    courseanimationtext.text = course.getCourseName();
  }
  else
  {
    var hole = course.changeHole(1) + 1;
    holetext.text = "Hole " + hole;      
  }
})

holeDnBtn.addEventListener("click", (evt) => {
  console.log("prev hole");
  // when not initialized next course
  if(initialized == false)
  {
    course.changeCourse(-1);
    courseanimationtext.text = course.getCourseName();
  }
  else
  {
    var hole = course.changeHole(-1) + 1;
    holetext.text = "Hole " + hole;      
  }

})


clubUpBtn.addEventListener("click", (evt) => {
  console.log("next club");
  
})

clubDnBtn.addEventListener("click", (evt) => {
  console.log("prev club");
})


checkBtn.addEventListener("click", (evt) => {
  console.log("check");

  if(initialized == false)
  {
    initialized = true;
    courseanimationtext.text="";
  
    holetext.text = "Hole " + (course.getHoleNum() + 1);  // holes are zero based, add one for display
    clubtext.text = "Driver";
    middisttext.text = "";
    frontdisttext.text = "";
    backdisttext.text = "";

    // buttons initialize off screen, move them on screen  
    holeUpBtn.x = 250;
    holeDnBtn.x = 15;
    clubUpBtn.x = 250;
    clubDnBtn.x = 15;
  }
  
})

//*************** Begin Clock display ********************
clock.granularity = "seconds";
var ticks_per_update = 1;
var ticks = 0;

// hacky way to get time to display properly (there's got to be a better way)
function formatString(the_time)
{
  var hours = the_time.getHours();
  var minutes = the_time.getMinutes();
  var seconds = the_time.getSeconds();
  var time_str = "";
  
  if(hours == 0)
  {
    time_str += "12:";      
  }
  else if(hours < 13)
  {
    time_str += hours + ":"; 
  }
  else
  {
    time_str += hours - 12 + ":";      
  }
  time_str += (minutes > 9) ? minutes  : "0" + minutes;
  time_str += (hours < 12) ? " AM" : " PM";

  return(time_str);
}

clock.ontick = (evt) => {
    if(ticks > ticks_per_update)
    {
        ticks = 0;    
        if(gps.getLock() == true)
        {
          var hole = course.getHoleNum();
          if(initialized == true)
          {
            middisttext.text = course.distanceTo(hole, "center").toFixed(0);
            frontdisttext.text = course.distanceTo(hole, "front").toFixed(0);
            backdisttext.text = course.distanceTo(hole, "back").toFixed(0);
          }
        }
        timetext.text = formatString(evt.date);
    }
    else
    {
        ticks++;
    }
    
}
//*************** End Clock display ********************
