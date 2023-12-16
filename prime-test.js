const print = console.log;

// function isPrime(num) {
//     if(num < 2){
//         return false;
//     }
    
//     for(let i = 2; i < num; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true;
// }

// Big-O = O(n)
// IT IS LINEAR


function isPrime(num) {
    if(num < 2){
        return false;
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}

print(isPrime(8));

// Big-O = O(sqrt(n))
// IT IS LINEAR