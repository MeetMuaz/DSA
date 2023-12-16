const print = console.log;

function isPowerOfTwo(n) {
    if(n < 1){
        return false;
    }
    while (n > 1) {
        if(n % 2 !== 0){
            return false;
        }
        n = n / 2;
    }
    return true;
}

print(isPowerOfTwo(1));
print(isPowerOfTwo(2));
print(isPowerOfTwo(5));
print(isPowerOfTwo(16));