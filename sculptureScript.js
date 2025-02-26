// Import the sculpture list from data.js
const sculptureData = require("./data");

// Debug: Check if sculptureList is loaded correctly
if (!sculptureData || !Array.isArray(sculptureData.sculptureList)) {
    console.error("ERROR: sculptureList is not an array. Check your data.js file.");
    process.exit(1); // Stop execution if there's an error
}

const { sculptureList } = sculptureData;

// Create an empty object to store the results
const sculptureListLengths = {};

// Loop through each sculpture object in the list
for (const sculpture of sculptureList) {
    // Create a new object to store lengths
    const sculptureLengths = {};
    
    // Loop through each key in the sculpture object
    for (const key in sculpture) {
        if (typeof sculpture[key] === "string") {
            sculptureLengths[key] = sculpture[key].length;
        }
    }
    
    // Assign the transformed object to sculptureListLengths
    sculptureListLengths[sculpture.name] = sculptureLengths;
}

// Log the exact expected result format
console.log(JSON.stringify(sculptureListLengths, null, 2));

// Export the result for potential use in other files
module.exports = { sculptureListLengths };
