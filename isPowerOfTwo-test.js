const print = console.log;

// function isPowerOfTwo(n) {
//     if(n < 1){
//         return false;
//     }
//     while (n > 1) {
//         if(n % 2 !== 0){
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }

// Big-O = O(logn) 
// IT IS LOGRITHMIC


function isPowerOfTwo(n) {
    if(n < 1){
        return false;
    }

    return (n & (n -1)) === 0;
}

// Big-O = O(n) 
// IT IS LINEAR

print(isPowerOfTwo(1));
print(isPowerOfTwo(2));
print(isPowerOfTwo(5));