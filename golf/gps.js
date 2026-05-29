import { geolocation } from "geolocation";

var gps_lock = false;
var latitude = 0;
var longitude = 0;

// variable and two callbacks for gps position
/* old way
var watchID = geolocation.watchPosition(locationSuccess, locationError, { timeout: 30 * 1000, maximumAge: 10*1000 });

function locationSuccess(position) {
//  latitude = position.coords.latitude;
//  longitude = position.coords.longitude;
//  gps_lock = true;
  if (position && position.coords) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    gps_lock = true;
    console.log("GPS Lock: " + latitude + ", " + longitude);
  }  
}
*/

// new way
export function refreshLocation() {
  console.log("Fetching yardage...");
  
  geolocation.getCurrentPosition(
    (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      gps_lock = true;
      console.log(`Position Updated: ${latitude}, ${longitude}`);
    },
    (error) => {
      console.log("GPS Error: " + error.code);
      gps_lock = false;
    },
    { 
      enableHighAccuracy: true, 
      maximumAge: 5000, // Use a position if it was found in the last 5 seconds
      timeout: 10000    // Give up after 10 seconds to save battery
    }
  );
}

function locationError(error) {
  console.log("Error: " + error.code, "Message: " + error.message);
  gps_lock = false;
}

// accessor functions
export function getLatitude()
{
  return(latitude);
}

export function getLongitude()
{
  return(longitude);
}

export function getLock()
{
  return gps_lock;
}

