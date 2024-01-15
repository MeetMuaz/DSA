const print = console.log;

function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

print(linearSearch([-5, 2, 10, 6], 10)) // 2
print(linearSearch([-5, 2, 10, 6], 6)) // 4
print(linearSearch([-5, 2, 10, 6], 20)) // -1

// Big-O = O(n)
// IT IS LINEAR
