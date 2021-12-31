import { geolocation } from "geolocation";

var gps_lock = false;
var latitude = 0;
var longitude = 0;
const earth_radius_yards = 6967410.324;

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

export function getDistance(lat1, long1, lat2, long2)
{  
  let lat1_r = lat1 * Math.PI / 180.0;
  let long1_r = long1 * Math.PI / 180.0;
  let lat2_r = lat2 * Math.PI / 180.0;
  let long2_r = long2 * Math.PI / 180.0;

  return(Math.acos(
  Math.sin(lat1_r) * Math.sin(lat2_r) + Math.cos(lat1_r) * Math.cos(lat2_r) * Math.cos(long1_r - long2_r)
  ) * earth_radius_yards);
}