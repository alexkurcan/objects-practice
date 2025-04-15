const outputDiv = document.getElementById("output"); // keep this to output to page.

// Problem 1
// 1. Create an object called gameSettings
const gameSettings = {
  // 2. with the properties: difficulty, soundOn, and maxPlayers.
  difficulty: "Hard",
  soundOn: true,
  maxPlayers: 4
};

function problem1() {
  // 3. Loop through the object and
  // 4. display the results to the page.
  // Output results in a new result variable. use let result = ______
  let result = "<strong>Game Settings:</strong><ul>";
  for (let key in gameSettings) {
    result += `<li>${key}: ${gameSettings[key]}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result; // keep this to output to page.
}

// Problem 2
// 1. Add a method to the gameSettings object called toggleSound 
gameSettings.toggleSound = function () {
  // 2. that switches the soundOn property between true and false. 
  this.soundOn = !this.soundOn;
};

function problem2() {
  // Add ONE line IN THIS function that calls toggleSound method.
  gameSettings.toggleSound(); // <-- This is the line to toggle the sound.
  // 3. Call the method and output the soundOn property to the page. 
  // 4. Each time you click the button, it should alternate between true and false.
  outputDiv.innerHTML = `<strong>Sound is now:</strong> ${gameSettings.soundOn}`;
}

// Problem 3
// 1. Create an object called smoothie 
const smoothie = {
  // 2. with the properties flavor, size, and hasProtein (boolean). 
  flavor: "Strawberry",
  size: "Medium",
  hasProtein: true
};

function problem3() {
  // 3. Prompt the user for a size, then 
  const newSize = prompt("Enter a new smoothie size:");
  // 4. display the updated size on the page.
  // keep this if else block to help with overwriting the old size. 
  // You will need to have created a newSize variable with the use of a prompt.
  if (newSize && newSize.trim() !== "") {
    smoothie.size = newSize.trim();
  }
  outputDiv.innerHTML = `<strong>Smoothie Size Updated:</strong> ${smoothie.size}`;
}

// Problem 4
// 1. Create an object called gadget. 
const gadget = {
  // 2. gadget should have properties of name, batteryLife, and isWireless. 
  name: "Smartwatch",
  batteryLife: 18,
  isWireless: true
};

// 3. Write a function called printGadgetSpecs that 
// 4. takes the properties of gadget and 
// 5. displays a formatted string to the page like:
// 6. "Name: [name], Battery Life: [batteryLife] hrs, Wireless: [true/false]".
function printGadgetSpecs(gadget) {
  return `Name: ${gadget.name}, Battery Life: ${gadget.batteryLife} hrs, Wireless: ${gadget.isWireless}`;
}

function problem4() {
  outputDiv.innerHTML = `<strong>Gadget Specs:</strong> ${printGadgetSpecs(gadget)}`;
}

// Problem 5
// 1. Create an object called garden that
const garden = {
  // 2. has a property plants (an array of strings). 
  plants: [],
  // 3. Add a method addPlant to garden that 
  // 4. takes user input (text entry box) and 
  // 5. PUSHes a new plant into the array. 
  addPlant: function (plant) {
    this.plants.push(plant);
  }
};

function problem5() {
  // This helps with keeping your text entry box clean after every input.
  // No need to change this, just keep the variable and object naming in mind.
  const newPlant = document.getElementById("plantInput").value;
  if (newPlant.trim() !== "") {
    garden.addPlant(newPlant);
    document.getElementById("plantInput").value = "";
  }

  // Keep this and make use of it to help with outputting your results :)
  let result = "<strong>Plants in Garden:</strong><ul>";
  for (let plant of garden.plants) {
    result += `<li>${plant}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}

// Problem 6
// 1. Create an object called playlist that
const playlist = {
  // 2. has a name and a songList (array). 
  name: "Chill Vibes",
  songList: [],
  // 3. Add a method addSong that adds a new song to the list. 
  addSong: function (song) {
    this.songList.push(song);
  }
};

function problem6() {
  // 4. This should take user input (prompt) to add the song to songList. 
  // 5. Then add two songs and log the playlist.
  // Use a for loop that iterates 2 times to ask for two songs.
  // No need to touch the for loop except uncommenting and replacing the PLACEHOLDER.
  for (let i = 0; i < 2; i++) {
    const song = prompt(`Enter song ${i + 1}:`);
    if (song && song.trim() !== "") {
      playlist.addSong(song.trim());
    }
  }

  // This will output to the page for you:
  // Just fill in the PLACEHOLDERs with the correct info.
  let result = `<strong>Playlist: ${playlist.name} </strong><ul>`;
  for (let song of playlist.songList) {
    result += `<li>${song}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}
