
const questions = [
  {
    class: "🐴",
    category:"animal",
    id:"horse",
    emoji:"🐴",
    color:getColor()
  },
  {
    class: "🐮",
    category:"animal",
    id:"cow",
    emoji:"🐮",
    color:getColor()
  },
  {
    class: "🐐",
    category:"animal",
    id:"goat",
    emoji:"🐐",
    color:getColor()
  },
  {
    class: "🐇",
    category:"animal",
    id:"rabbit",
    emoji:"🐇",
    color:getColor()
  },
  {
    class: "🦘",
    category:"animal",
    id:"kangroo",
    emoji:"🦘",
    color:getColor()
  },
  {
    class: "🐧",
    category:"animal",
    id: "penguin",
    emoji:"&#x1F427;",
    color:getColor()
  },
  {
    class: "🐺",
    category:"animal",
    id:"wolf",
    emoji:"🐺",
    color:getColor()
  },

  {
    class: "🦝",
    category:"animal",
    id:"racoon",
    emoji:"🦝",
    color:getColor()
  },
  {
    class: "🦄",
    category:"animal",
    id: "unicorn",
    emoji:"🦄",
    color:getColor()
  },
  {
    class: "🦓",
    category:"animal",
    id: "zebra",
    emoji:"🦓",
    color:getColor()
  },
  {
    class: "🍉",
    category:"fruit",
    id: "watermelon",
    emoji:"🍉",
    color:getColor()
  },
  {
    class: "🦜",
    category:"animal",
    id:"parrot",
    emoji:"🦜",
    color:getColor()
  },
  {
    class: "🦔",
    category:"animal",
    id:"hedgehog",
    emoji:"🦔",
    color:getColor()
  },{
    class: "🦉",
    category:"animal",
    id:"owl",
    emoji:"🦉",
    color:getColor()
  },{
    class: "🦢",
    category:"animal",
    id:"swan",
    emoji:"🦢",
    color:getColor()
  },{
    class: "🐢",
    category:"animal",
    id:"turtle",
    emoji:"🐢",
    color:getColor()
  },{
    class: "🐘",
    category:"animal",
    id:"elephant",
    emoji:"🐘",
    color:getColor()
  },{
    class: "🦚",
    category:"animal",
    id:"peacock",
    emoji:"🦚",
    color:getColor()
  },{
    class: "🐓",
    category:"animal",
    id:"rooster",
    emoji:"🐓",
    color:getColor()
  },{
    class: "🐸",
    category:"animal",
    id:"frog",
    emoji:"🐸",
    color:getColor()
  },{
    class: "🐍",
    category:"animal",
    id:"snake",
    emoji:"🐍",
    color:getColor()
  },{
    class: "🐬",
    category:"animal",
    id:"dolphin",
    emoji:"🐬",
    color:getColor()
  },{
    class: "🐠",
    category:"animal",
    id:"fish",
    emoji:"🐠",
    color:getColor()
  },{
    class: "🐛",
    category:"animal",
    id:"caterpillar",
    emoji:"🐛",
    color:getColor()
  },{
    class: "🦋",
    category:"animal",
    id:"butterfly",
    emoji:"🦋",
    color:getColor()
  },{
    class: "🦀",
    category:"animal",
    id:"crab",
    emoji:"🦀",
    color:getColor()
  },{
    class: "🐪",
    category:"animal",
    id:"camel",
    emoji:"🐪",
    color:getColor()
  },{
    class: "🦕",
    category:"animal",
    id:"dinosaur",
    emoji:"🦕",
    color:getColor()
  },{
    class: "🕷️",
    category:"animal",
    id:"spider",
    emoji:"🕷",
    color:getColor()
  },{
    class: "🦐",
    category:"animal",
    id:"shrimp",
    emoji:"🦐",
    color:getColor()
  },{
    class: "🐞",
    category:"animal",
    id:"ladybug",
    emoji:"🐞",
    color:getColor()
  },{
    class: "🐨",
    category:"animal",
    id:"koala",
    emoji:"🐨",
    color:getColor()
  },{
    class: "🐶",
    category:"animal",
    id:"dog",
    emoji:"🐕",
    color:getColor()
  },{
    class: "🍓",
    category:"fruit",
    id:"strawberry",
    emoji:"🍓",
    color:getColor()
  },{
    class: "🦅",
    category:"animal",
    id:"eagle",
    emoji:"🦅",
    color:getColor()
  },{
    class: "🌻",
    category:"plant",
    id:"sunflower",
    emoji:"🌻",
    color:getColor()
  },{
    class: "🌷",
    category:"plant",
    id:"tulip",
    emoji:"🌷",
    color:getColor()
  },{
    class: "🌹",
    category:"plant",
    id:"rose",
    emoji:"🌹",
    color:getColor()
  },{
    class: "🌵",
    category:"plant",
    id:"cactus",
    emoji:"🌵",
    color:getColor()
  },{
    class: "🍄",
    category:"plant",
    id:"mushroom",
    emoji:"🍄",
    color:getColor()
  },{
    class: "🛴",
    category:"travel",
    id:"scooter",
    emoji:"🛴",
    color:getColor()
  },{
    class: "🚀",
    category:"travel",
    id:"rocket",
    emoji:"🚀",
    color:getColor()
  }
]


//const listItems = []
let draggableSection = document.getElementById("keypad");

function createDragList() {
  [...questions]
      .map(a => ({ value: a, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)
      .forEach((ele) => {
        const listItem = document.createElement('button');
        listItem.setAttribute("class","draggable");
        listItem.setAttribute('draggable', 'true');
        listItem.setAttribute("style",`background-color:${ele.color}`)
        listItem.setAttribute('id', ele.id);
        listItem.innerHTML = ele.class;
        draggableSection.appendChild(listItem);
      })
}

let droppableSection = document.createElement("section");
droppableSection.setAttribute("class", "droppable-elements");

function createDropList(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  const randomResult = shuffled.slice(min);

  randomResult.forEach(item=>{
    // console.log(item.id)
    const answerItem = document.createElement("div");
    answerItem.setAttribute("class","droppable");
    answerItem.setAttribute("data-draggable-id",item.id);
    answerItem.appendChild(document.createElement("br"));
    const answerItemChild = document.createElement("span");
    answerItemChild.innerHTML = item.id+item.emoji;
    answerItem.appendChild(answerItemChild);
    //console.log(answerItem);
    droppableSection.appendChild(answerItem);
  })
}
createDragList();
createDropList(questions,5);

var parentElement = document.getElementById("gameContainer");
var theFirstChild = parentElement.firstElementChild;
parentElement.insertBefore(draggableSection, theFirstChild);
parentElement.insertBefore(droppableSection,draggableSection.nextSibling);


const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");
const POINT = 100;

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - 
  //This is where we can define the drag data
  // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
  // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

function getColor() {
  let num = Math.random();
  num = "#" + num.toString(16).substring(2, 8).toUpperCase(); //substring(start,end),substr(start,length)
  return (num);
}

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
}

//Events fired on the drop target

function dragEnter(event) {
  if (!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if (!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }
}

function dragLeave(event) {
  if (!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault(); // This is in order to prevent the browser default handling of the data
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = (draggableElementData === droppableElementData);
  if (isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
    event.target.style.backgroundColor = window.getComputedStyle(draggableElement).backgroundColor;
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    speak(draggableElementData);
    let currentScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = crtScore = currentScore + POINT;
    totalScore = droppableElements.length * 100;
    document.getElementById("totalScore").innerText = "/" + totalScore;
    crtScore==totalScore&&setTimeout(()=>{congra();},1400);

  }
}
function congra(){
  speak("congratulations! You did it!");
  document.getElementById("gameContainer").style.display = "none";
  var childElement = document.getElementById('title');
  var imgElementParent = document.createElement("div");
  var imgElement = document.createElement("img");
  imgElement.setAttribute('src','congratulations.jpg');
  imgElement.setAttribute('width','80%');
  imgElement.setAttribute("class","congra");
  imgElementParent.appendChild(imgElement);
  insertAfter(imgElementParent,childElement);
  setTimeout(()=>{
    location.reload();
  },3000);
}
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
function speak(message){
  var msg = new SpeechSynthesisUtterance(message);
  msg.volume = 0.4;
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg);
}
