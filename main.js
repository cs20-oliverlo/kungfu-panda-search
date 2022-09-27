// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statement - Test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Ahuh huh huh huh!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "I am Jackie Chan.";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "viper";
    charQuoteEl.innerHTML = "Ssss sss, ssssss sss!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML = "Today is the present, that is why it is called the gift. There are no accidents.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML = "Feel the fury of my Tai Lungs!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (name === "storming ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "When you mess with the bull, you get the horns.";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML = "I didn't even know I had a name.";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML = "I am a pea-cock.";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Ca-Ca!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML = "I don't know!";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "boss wolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML = "Woof woof.";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "It's time for sport mode!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML = "I'm like that guy from Lego Ninjago";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr ping") {
    charNameEl.innerHTML = "Mr Ping";
    charQuoteEl.innerHTML = "Noodles!";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "--------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}