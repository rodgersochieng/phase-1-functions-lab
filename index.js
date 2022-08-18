// function distanceFromHqInBlocks (pickup){
//     if (pickup <= 42){
//         return 42 - pickup
//     }
//     else if (pickup >= 42){
//         return pickup - 42 } 
    
//  }
//  distanceFromHqInBlocks(42)
 
//  function distanceFromHqInFeet(someValue) {
//     distanceFromHqInBlocks(someValue);
//  }
function distanceFromHqInBlocks(distance) {
    return Math.abs (distance - 42) }
    function distanceFromHqInFeet (distance){
        return distanceFromHqInBlocks(distance) * 264 


        }

        function distanceTravelledInFeet(start, destination) {
            return Math.abs(start - destination) * 264;
        }
        function calculatesFarePrice(start, destination){
            let traveled = distanceTravelledInFeet(start, destination) 
            
            if(traveled <= 400){
                return 0;
            } else if((traveled > 400)  && (traveled < 2000)) {
                return (traveled - 400) * 0.02;
            } else if ((traveled > 2000) && (traveled < 2500)) {
                return 25;
            } else if(traveled > 2500) {
                return 'cannot travel that far';
            }
                
            }

 