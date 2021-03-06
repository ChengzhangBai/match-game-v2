
const questions = [
  {
    class: "ðī",
    category:"animal",
    id:"horse",
    emoji:"ðī",
    color:getColor()
  },
  {
    class: "ðŪ",
    category:"animal",
    id:"cow",
    emoji:"ðŪ",
    color:getColor()
  },
  {
    class: "ð",
    category:"animal",
    id:"goat",
    emoji:"ð",
    color:getColor()
  },
  {
    class: "ð",
    category:"animal",
    id:"rabbit",
    emoji:"ð",
    color:getColor()
  },
  {
    class: "ðĶ",
    category:"animal",
    id:"kangroo",
    emoji:"ðĶ",
    color:getColor()
  },
  {
    class: "ð§",
    category:"animal",
    id: "penguin",
    emoji:"&#x1F427;",
    color:getColor()
  },
  {
    class: "ðš",
    category:"animal",
    id:"wolf",
    emoji:"ðš",
    color:getColor()
  },

  {
    class: "ðĶ",
    category:"animal",
    id:"racoon",
    emoji:"ðĶ",
    color:getColor()
  },
  {
    class: "ðĶ",
    category:"animal",
    id: "unicorn",
    emoji:"ðĶ",
    color:getColor()
  },
  {
    class: "ðĶ",
    category:"animal",
    id: "zebra",
    emoji:"ðĶ",
    color:getColor()
  },
  {
    class: "ð",
    category:"fruit",
    id: "watermelon",
    emoji:"ð",
    color:getColor()
  },
  {
    class: "ðĶ",
    category:"animal",
    id:"parrot",
    emoji:"ðĶ",
    color:getColor()
  },
  {
    class: "ðĶ",
    category:"animal",
    id:"hedgehog",
    emoji:"ðĶ",
    color:getColor()
  },{
    class: "ðĶ",
    category:"animal",
    id:"owl",
    emoji:"ðĶ",
    color:getColor()
  },{
    class: "ðĶĒ",
    category:"animal",
    id:"swan",
    emoji:"ðĶĒ",
    color:getColor()
  },{
    class: "ðĒ",
    category:"animal",
    id:"turtle",
    emoji:"ðĒ",
    color:getColor()
  },{
    class: "ð",
    category:"animal",
    id:"elephant",
    emoji:"ð",
    color:getColor()
  },{
    class: "ðĶ",
    category:"animal",
    id:"peacock",
    emoji:"ðĶ",
    color:getColor()
  },{
    class: "ð",
    category:"animal",
    id:"rooster",
    emoji:"ð",
    color:getColor()
  },{
    class: "ðļ",
    category:"animal",
    id:"frog",
    emoji:"ðļ",
    color:getColor()
  },{
    class: "ð",
    category:"animal",
    id:"snake",
    emoji:"ð",
    color:getColor()
  },{
    class: "ðŽ",
    category:"animal",
    id:"dolphin",
    emoji:"ðŽ",
    color:getColor()
  },{
    class: "ð ",
    category:"animal",
    id:"fish",
    emoji:"ð ",
    color:getColor()
  },{
    class: "ð",
    category:"animal",
    id:"caterpillar",
    emoji:"ð",
    color:getColor()
  },{
    class: "ðĶ",
    category:"animal",
    id:"butterfly",
    emoji:"ðĶ",
    color:getColor()
  },{
    class: "ðĶ",
    category:"animal",
    id:"crab",
    emoji:"ðĶ",
    color:getColor()
  },{
    class: "ðŠ",
    category:"animal",
    id:"camel",
    emoji:"ðŠ",
    color:getColor()
  },{
    class: "ðĶ",
    category:"animal",
    id:"dinosaur",
    emoji:"ðĶ",
    color:getColor()
  },{
    class: "ð·ïļ",
    category:"animal",
    id:"spider",
    emoji:"ð·",
    color:getColor()
  },{
    class: "ðĶ",
    category:"animal",
    id:"shrimp",
    emoji:"ðĶ",
    color:getColor()
  },{
    class: "ð",
    category:"animal",
    id:"ladybug",
    emoji:"ð",
    color:getColor()
  },{
    class: "ðĻ",
    category:"animal",
    id:"koala",
    emoji:"ðĻ",
    color:getColor()
  },{
    class: "ðķ",
    category:"animal",
    id:"dog",
    emoji:"ð",
    color:getColor()
  },{
    class: "ð",
    category:"fruit",
    id:"strawberry",
    emoji:"ð",
    color:getColor()
  },{
    class: "ðĶ",
    category:"animal",
    id:"eagle",
    emoji:"ðĶ",
    color:getColor()
  },{
    class: "ðŧ",
    category:"plant",
    id:"sunflower",
    emoji:"ðŧ",
    color:getColor()
  },{
    class: "ð·",
    category:"plant",
    id:"tulip",
    emoji:"ð·",
    color:getColor()
  },{
    class: "ðđ",
    category:"plant",
    id:"rose",
    emoji:"ðđ",
    color:getColor()
  },{
    class: "ðĩ",
    category:"plant",
    id:"cactus",
    emoji:"ðĩ",
    color:getColor()
  },{
    class: "ð",
    category:"plant",
    id:"mushroom",
    emoji:"ð",
    color:getColor()
  },{
    class: "ðī",
    category:"travel",
    id:"scooter",
    emoji:"ðī",
    color:getColor()
  },{
    class: "ð",
    category:"travel",
    id:"rocket",
    emoji:"ð",
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
