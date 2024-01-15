const print = console.log;

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1; // Fixed typo: "lenght" to "length"

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex;
        }

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

print(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
print(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
print(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
