console.log("script is loading");

// select HTML elements
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

console.log(descriptionText, optionButtons);

// function that starts the game
function startAdventure() {
  console.log("Adventure has begun!");
  showAdventureDescription(2);
}

// function that adds the options and tracks the choices

// create a function that shows the description
function showAdventureOptions(textAdventureID) {
  const newDescriptionText = textAdventure.find(gameNode => gameNode.id === textAdventureID );
  descriptionText.innerText = newDescriptionText.description;
  //iterate through the buttons and insert the option text in each button
  for(let i = 0; i < newDescriptionText.options.length; i++) {
    //console.log(newDescriptionText.options[i].buttontext);
    optionButtons.innerText = newDescriptionText.options[i].buttontext;
  }
}

// function that tracks options and passes the id to the showAdventureOptions function

// optional: function that shows end of the game



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
        buttontext: "Jump in the water to face the mystery in the water",
        nextText: 3
      }
    ]
  },
  ]


textAdventure()
