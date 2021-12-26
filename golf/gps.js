import { geolocation } from "geolocation";

var gps_lock = false;
var latitude = 0;
var longitude = 0;

// variable and two callbacks for gps position
var watchID = geolocation.watchPosition(locationSuccess, locationError, { timeout: 60 * 1000 });

function locationSuccess(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  gps_lock = true;
  
}

function locationError(error) {
  console.log("Error: " + error.code,
              "Message: " + error.message);
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

