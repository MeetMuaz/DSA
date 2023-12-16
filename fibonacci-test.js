const print = console.log;

function fabonacci(num){
    let fib = [0,1];

    for(let i = 2; i < num; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

print(fabonacci(10));

// Big-O = O(n) 
// IT IS LINEAR



