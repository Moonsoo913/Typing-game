const weather = document.querySelector(".weathers")



function handleGeoSuccess(position){
    const latitude=position.coords.latitude,
    longitude = position.coords.longitude;

    const coordsObj={
        latitude,
        longitude
    };
    


}

function handleGeoError(){
    console.log("Error!!!");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);  
}



function loadCoords(){


    const loadedCoord=localStorage.getItem(COORDS);
    if(loadedCoord===null){
        askForCoords();
    }
    else{

    }
}



function init(){

}