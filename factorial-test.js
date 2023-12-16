const print = console.log;

function factorial(num) {
    let fac = 1; 

    for(let i = 1; i <= num; i++) {
        fac *= i;
    }

    return fac;
}

print(factorial(0));
print(factorial(1));
print(factorial(5));

// Big-O = O(n)
// IT IS LINEAR
