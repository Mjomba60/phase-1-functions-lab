// Code your solution in this file!
let distance;
function distanceFromHqInBlocks(location){
    const hqLocation = 42
    if (location > hqLocation){
        distance = location - hqLocation;
        return distance;
    } else {
        distance = hqLocation -location;
        return distance;
    };
};

function distanceFromHqInFeet(location){
    let distance = distanceFromHqInBlocks(location) * 264;
    return distance;
};

function distanceTravelledInFeet(start, stop){
    let distance;
    if (start > stop){
        distance = (start - stop) *264;
    } else{
        distance = (stop - start) *264;
    };
    return distance;
}

function calculatesFarePrice(start, stop){
    let fare;
    let distance = distanceTravelledInFeet(start, stop);
    if (distance <= 400){
        fare = 0
    } else if (distance > 400 && distance <= 2000){
        fare = (distance - 400) * 2/100;
    } else if (distance > 2000 && distance < 2500){
        fare = 25;
    } else if (distance => 2500){
        fare = "cannot travel that far";
    }
    return fare;

}