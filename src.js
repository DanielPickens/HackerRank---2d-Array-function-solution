function hourGlass(arr) {
    // we could set this to 3 given the problems constraings, but this allows changes
    maxX = 3; // + (arr[0].length % 3)
    maxY = 3; // + (arr.length % 3)
    total = -Infinity;  // has to be -64, but
   
    // begin at y == 0
    for (let y = 0; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            // sum the top of hourglass
            let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
            
            // get the middle of hourglass
            sum += arr[y+1][x+1];
            
            // sum the bottom of hourglass
            sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
            
            // don't store result to keep space complexity down
            if (total < sum)
                 total = sum;
        }
    }
    
    return total;
}


time complx: O(n*m)



2nd solution: 

function hourGlass(arr) {
    let max = -63;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = arr[i + 1][j + 1];
            for (let k = 0; k < 3; k++) {
                sum += arr[i][j + k];
                sum += arr[i + 2][j + k]
            }
            if (sum > max) max = sum;
        }
    }

    return max;
}
