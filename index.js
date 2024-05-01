const fs = require("fs");
const path = require("path");

// Directory of the current script
const scriptDirectory = __dirname;

// File name and path
const fileName = "newFile.txt";
const filePath = path.join(scriptDirectory, fileName);

// Word to add
const wordToAdd = "a";

// Function to add word to file
function addWordToFile(filePath, wordToAdd) {
  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // If the file doesn't exist, create it
      fs.writeFile(filePath, wordToAdd, "utf8", (err) => {
        if (err) {
          console.error("Error creating file:", err);
          return;
        }
        console.log("File created with the word:", wordToAdd);
      });
    } else {
      // If the file exists, append the word to it
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return;
        }

        // Append the word to the file content
        const updatedContent = data + " " + wordToAdd;

        // Write the updated content back to the file
        fs.writeFile(filePath, updatedContent, "utf8", (err) => {
          if (err) {
            console.error("Error writing to file:", err);
            return;
          }
          console.log("Word added to the file:", wordToAdd);
        });
      });
    }
  });
}

// Call the function to add the word to the file
addWordToFile(filePath, wordToAdd);
