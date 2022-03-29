// JavaScript code for Sight Numbers
// Inspired by Sight Words app @BlawblawLaw
// #100Devs 2022 side project by Anna Kim @annakim_dev

// Define array of numbers
const numberList = [
    1,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    110,
    120,
    130,
    140,
    150,
    160,
    170,
    180,
    190,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000,
];

// Define variable for speechSynthesis
const synth = window.speechSynthesis;

// Define variable to store randomly selected number from the numberList array
let readNumber = 0;

// Define variables for counters to reset readNumber
let nextCounter = 0;
let repeatCounter = 0;

// Helper function - Returns a random integer between 0 and the last index of a given array
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Returns the value at a random index of a given array
function getRandomNumber(arr) {
    return arr[getRandomIndex(arr)];
}

// Change the inner html of #numberDisplay to a random number in a given array.
function placeNumber(arr) {
    // Declare variable to store the random number
    let currentNumber = getRandomNumber(arr);
    // For display, format the random number to include comma(s)
    document.querySelector('#numberDisplay').innerHTML = currentNumber.toLocaleString('en-US');

    /* Commented out: Without comma format */
    // document.querySelector('#numberDisplay').innerHTML = getRandomNumber(arr);
    // let currentNumber = document.querySelector('#numberDisplay').innerHTML 

    return currentNumber;
}

// SpeechSynthesisUtterance used to speak the currentNumber
function saveNumber(arr) {
    // Resets readNumber used for the repeatNumber and koreanNumber functions
    if (nextCounter >= 1) {
        readNumber = 0;
    }
    // Define variable for string type of currentNumber
    let speakNumber = placeNumber(arr);
    console.log(`speakNumber: ${speakNumber}`);
    // Reassign readNumber with integer type of currentNumber
    readNumber += Number(speakNumber);
    console.log(`readNumber: ${readNumber}`);

    // Make SpeechSynthesis to speak string type speakNumber
    let speech = new SpeechSynthesisUtterance(speakNumber);
    // Get voices
    let voices = synth.getVoices();
    // Select voice
    speech.voice = voices[22]; // 1 to 21
    // Setup volume, rate, pitch of speech
    speechSynthesis.volume = 1; // 0 to 1
    speechSynthesis.rate = 1; // 0.1 to 10
    speechSynthesis.pitch = 1; //0 to 2
    synth.speak(speech);

    // Increment counter for Next button
    nextCounter++;
    console.log(`nextCounter: ${nextCounter}`);

    // Reset counter for Repeat function
    repeatCounter = 0;

    return speakNumber;
}

// Next button click runs saveNumber function
document.querySelector('#next').addEventListener("click",() => saveNumber(numberList));

// SpeechSynthesisUtterance used to repeat the currentNumber
function repeatNumber(num) {
    // Speak string type of readNumber
    let speech = new SpeechSynthesisUtterance(num.toString());
    // Get voices
    let voices = synth.getVoices();
    // Select voice
    speech.voice = voices[22]; // 1 to 21
    // Setup volume, rate, pitch of speech
    speechSynthesis.volume = 1; // 0 to 1
    speechSynthesis.rate = 1; // 0.1 to 10
    speechSynthesis.pitch = 1; //0 to 2
    synth.speak(speech);
    console.log(`num: ${num}`);
    
    // Increment counter for Repeat button
    repeatCounter++;
    console.log(`repeatCounter: ${repeatCounter}`);

    /* Commented out: Reset readNumber no longer needed */
    // if (repeatCounter == 0) {
    //     readNumber = 0;
    // }

}    

// Repeat button click runs repeatNumber function
document.querySelector('#repeat').addEventListener("click",() => repeatNumber(readNumber));


// SpeechSynthesisUtterance used to speak the currentNumber in different language
function diffLanguageNumber(num) {
    let speech = new SpeechSynthesisUtterance(num.toString());
    let voices = synth.getVoices();
    speech.voice = voices[14]; // 14: Korean
    speechSynthesis.volume = 1; // 0 to 1
    speechSynthesis.rate = 1; // 0.1 to 10
    speechSynthesis.pitch = 1; //0 to 2
    synth.speak(speech);
    console.log(num);
    
}  

// The third button click runs diffLanguageNumber function
document.querySelector('#diffLanguage').addEventListener("click",() => diffLanguageNumber(readNumber));


