console.log("script is loading");

// select HTML elements
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

console.log(descriptionText, optionButtons);

let startIndex = 0;

// function that starts the game
function startAdventure(objectID) {
  console.log("Adventure has begun!");
  
  let ids = textAdventure.map((item) => {
    console.log(item.id);
    return item.id;
  });

  if (startIndex > ids.length -1){
    startIndex = 0;
  }
  showAdventureDescription(ids[startIndex]);
}


// create a function that shows the description
function showAdventureOptions(textAdventureID) {
  
  const newDescriptionText = textAdventure.find(gameNode => gameNode.id === textAdventureID );
  if (!newDescriptionText.options) {
    
    document.getElementById("button1").style.display = "none";

    
    descriptionText.innerHTML = newDescriptionText.message;

    document.getElementById("button2").innerHTML = "Play Again";
    return;
  }

  descriptionText.innerText = newDescriptionText.description;
  
  //iterate through the buttons and insert the option text in each button
  for(let i = 0; i < newDescriptionText.options.length; i++) {
    optionButtons.innerText = newDescriptionText.options[i].buttontext;
  }
}

//  functions for button events

function onNextOption(event) {
  event.preventDefault();
  startIndex++;
  startAdventure();
}

function onPlayAgain(event) {
  event.preventDefault();
  
  document.getElementById("button1").style.display = "inline";

  startIndex = 0;

  startAdventure();
}



// create an object that holds the text for the game and options. It also tracks state
const textAdventure = [
  {
    id: 1,
    text: 'This is the adventure of Al, who got lost in the sewer system when chasing a mouse down the drain hole. Al needs your help to find his way out. Choose one of the options below',
    options: [
      {
        buttontext: "Head down the left entry-way", 
        setState: {headback: true},
        nexttext: 2
      },
      {
        buttontext: "Head down the right entry-way",
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    description: "Great! Al can start to see the light outside, but he can see something in the water. What should he do?",
    options: [
      {
        buttontext: "Continue towards the light",
        setState: {headback: true},
        nextText: 3
      },
      {
        buttontext: "Jump in the water and start swimming",
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    desription: " Al found the exit! He sees his house but doesn't want to go back. What should he do?",
    options: [
  {
    buttontext: "Head home anyway",
    setState: {headback: true},
  },
  {
    buttontext: "Go to the park to start a new adventure",
    setState: {daylight: true},
    nexttext: 4,
  },
],
  },
  {
    id: 4,
    message: "Thanks for saving Al!"
      
  },
  ];


startAdventure(startIndex);
