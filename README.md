# **Sculpture List Lengths Project**

## **Overview**
This project processes a list of sculptures using JavaScript in **Node.js**. The script calculates the length of each string value in the objects and generates a new object with these lengths. The purpose is to practice object manipulation, loops, and array handling in JavaScript.

## **Files in This Repository**
- **`data.js`** → Contains the original list of sculpture objects.
- **`sculptureScript.js`** → The main script that calculates the length of each string value.
- **`readme.md`** → This file, documenting the project details.

## **How It Works**
1. The script **imports the `sculptureList`** from `data.js`.
2. It **iterates over each sculpture object** in the list.
3. It creates a **new object** where each key has the length of its corresponding string value.
4. The output is **logged to the console** for verification.

## **Example Output**
Running `node sculptureScript.js` will generate an output similar to:

```json
{
  "Homenaje a la Neurocirugía": {
    "name": 26,
    "artist": 20,
    "description": 198,
    "url": 31,
    "alt": 90
  },
  "Another Sculpture Name": {
    "name": 23,
    "artist": 18,
    "description": 152,
    "url": 28,
    "alt": 75
  }
}
```

## **How to Run the Script**
1. **Ensure Node.js is installed** on your system.
2. Clone this repository:
   ```bash
   git clone <your-repo-url>
   ```
3. Navigate to the project directory:
   ```bash
   cd sculpture-lengths-project
   ```
4. Run the script using:
   ```bash
   node sculptureScript.js
   ```

## **Submission Requirements**
- Ensure your GitHub repository contains `sculptureScript.js`, `data.js`, and `readme.md`.
- Submit a **PDF file to Canvas** that includes:
  - A link to your GitHub repository.
    

## **Author**
Bikendra Shrestha  
CSC 317 
February 25, 2025  


