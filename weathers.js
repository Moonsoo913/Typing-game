const weather = document.querySelector(".weathers")





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