
function distanceFromHqInBlocks (location) {
    const destination = 42;
    const numBlocks = ((destination-location)**2)**.5; //exponents to fix sign so location can be above or below destination 
    return numBlocks;
}

//console.log(distanceFromHqInBlocks(50));
//console.log(distanceFromHqInBlocks(37));

function distanceFromHqInFeet (location){
    const numBlocks = distanceFromHqInBlocks(location);
    const numFeet = 264*numBlocks;
    return numFeet;
}

function distanceTravelledInFeet (start, destination){
    const blockLengthInFeet = 264;
    const numFeet = blockLengthInFeet*(((start-destination)**2)**.5);
    return numFeet;
}

function calculatesFarePrice(start, destination){
    const numFeetTravelled = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (numFeetTravelled <= 400){
        farePrice = 0;
    }
    else if (numFeetTravelled > 400 && numFeetTravelled <= 2000){
        farePrice = .02 * (numFeetTravelled-400);
    }
    else if (numFeetTravelled > 2000 && numFeetTravelled <= 2500) {
        farePrice = 25;
    }
    else if(numFeetTravelled > 2500) {
        farePrice = `cannot travel that far`;
    }
    return farePrice;
}