heights.push(0);  // Add a zero at the end to ensure all bars are processed
let stack = [];   // Stack stores pairs of [position, height] where 'position' is the index of the bar and 'height' is the bar's height
let res = 0;      // Initialize the result to store the maximum area found

for (let i = 0; i < heights.length; i++) {
    let heightStart = i;  // Initialize heightStart to the current index
    
    // Process all bars that are taller than the current one
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
        // If current height is smaller than the height of the bar at the top of the stack,
        // we pop the stack because we found the right boundary for that taller bar.
        let [pos, height] = stack.pop();  // Pop the position and height of the taller bar
        
        // Calculate the area using the popped bar's height.
        // Width is (i - pos) since 'i' is the right boundary and 'pos' is where the bar started.
        res = Math.max(res, (i - pos) * height);  // Update max area found so far
        
        // Set heightStart to 'pos' to account for the start of the rectangle we're about to push.
        // This allows us to extend the rectangle for future bars.
        heightStart = pos;  
    }

    // Push the current bar's start position and height to the stack
    stack.push([heightStart, heights[i]]);
}

return res;  // Return the largest area found
