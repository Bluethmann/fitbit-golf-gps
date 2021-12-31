/*
 * Entry point for the watch app
 */
import * as document from "document";
import clock from "clock";
import { me as appbit } from "appbit";

import * as course from "../golf/courses.js";
import * as gps from "../golf/gps.js";
import * as bag from "../golf/bag-setup.js";

let holetext = document.getElementById("holetext");
let clubtext = document.getElementById("clubtext");
let middisttext = document.getElementById("middisttext");
let frontdisttext = document.getElementById("frontdisttext");
let backdisttext = document.getElementById("backdisttext");
let courseanimationtext = document.getElementById("courseanimationtext");
let timetext = document.getElementById("timetext");

courseanimationtext.text = course.getCourseName();

const holeUpBtn = document.getElementById("hole-up");
const holeDnBtn = document.getElementById("hole-down");
const clubUpBtn = document.getElementById("club-up");
const clubDnBtn = document.getElementById("club-down");
const checkBtn = document.getElementById("check");

let initialized = false;

appbit.appTimeoutEnabled = true;  // exit after a while if a round isn't started

let last_lat = 0;
let last_long = 0;
let update_dist_display = false;

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
  }, 6000);
  
  }
}

scrollTime();


// Button event handles -- move to another file???
holeUpBtn.addEventListener("click", (evt) => {
//  console.log("next hole");
  
  // when not initialized next course
  if(initialized == false)
  {
    course.changeCourse(1);
    courseanimationtext.text = course.getCourseName();
  }
  else
  {
    holetext.text = "Hole " + (course.changeHole(1) + 1);      
    last_lat = gps.getLatitude();
    last_long = gps.getLongitude();
    update_dist_display = false;
  }
})

holeDnBtn.addEventListener("click", (evt) => {
//  console.log("prev hole");
  // when not initialized next course
  if(initialized == false)
  {
    course.changeCourse(-1);
    courseanimationtext.text = course.getCourseName();
  }
  else
  {
    holetext.text = "Hole " + (course.changeHole(-1) + 1);      
    last_lat = gps.getLatitude();
    last_long = gps.getLongitude();
    update_dist_display = false;
  }

})


clubUpBtn.addEventListener("click", (evt) => {

  if(initialized == true)
  {
    clubtext.text = bag.changeClub(-1);
  }
  
})

clubDnBtn.addEventListener("click", (evt) => {
  if(initialized == true)
  {
    clubtext.text = bag.changeClub(1);
  }

})


checkBtn.addEventListener("click", (evt) => {
//  console.log("check");
  if(initialized == false)
  {
    initialized = true;
    courseanimationtext.text="";
    appbit.appTimeoutEnabled = false;  // don't exit after inactivity

    holetext.text = "Hole " + (course.getHoleNum() + 1);  // holes are zero based, add one for display
    clubtext.text = bag.getClub();
	
	// write acquiring GPS in small font, so it displays
    middisttext.style.fontSize = 42;	
    middisttext.text = "Acquiring GPS";
    frontdisttext.text = "";
    backdisttext.text = "";

    // buttons initialize off screen, move them on screen  
    holeUpBtn.x = 250;
    holeDnBtn.x = 15;
    clubUpBtn.x = 250;
    clubDnBtn.x = 15;
  }
  else  // check button calculates distance from last shot
  {
    if(gps.getLock() === true)
    {
      var dist = gps.getDistance(gps.getLatitude(), gps.getLongitude(), last_lat, last_long);
      if(update_dist_display == true)  // first time, do nothing
      {
//        console.log(dist.toFixed(0));
        clubtext.text = dist.toFixed(0) + " yds";
        setTimeout(() => clubtext.text = bag.getClub(), 10000);
      }
      last_lat = gps.getLatitude();
      last_long = gps.getLongitude();
      update_dist_display = true;
    }
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
            middisttext.style.fontSize = 72;
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
