function largestSubarraySum(array) {
    let highestNum = array[0]
    let lowestNum = array[0]
    let maxSum = array[0]
    let currentSum = 0

    for (let i = 0; i < array.length; i++) {
        // address edge case where all numbers are negative or zero
        if (array[i] > highestNum) { highestNum = array[i] }
        if (array[i] < lowestNum) { lowestNum = array[i] }

        if (highestNum < 0) {
            maxSum = 0
        }
        // begin evaluation on expected cases with 1 or more positive numbers
        else {
            currentSum += array[i]
            if (currentSum <= 0) { currentSum = 0 }
            else if (currentSum > maxSum) { maxSum = currentSum }
        }
    }
    return maxSum
}