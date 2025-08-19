// Array of fortunes and misfortunes
const fortunes = {
    red: [`If you eat something and nobody sees you eat it, it has no calories`,
        `You will invent a new dance move in the shower`,
        `Uh oh, Error 404: Fortune not found`,
        `You need a mint. Like, bad!`],
    blue: [`You will be hungry again in an hour`,
        `Its a good day to have a good day`,
        `Come back later, I'm napping`,
        `You will be abducted by aliens, stay indoors`],
    yellow: [`Your good vibes are scheduled to arrive in 3, 2, 1... NOW!`,
        `A compliment storm is coming your way`,
        `That group of people was indeed talking about YOU`,
        `It's all downhill from here`],
    green: [`You will finally find that thing you weren't looking for`,
        `You will find money in an old pair of pants exactly when you need it`,
        `Your pet is plotting something against you`,
        `You might wanna get back in that shower`],
};

// Cache my elements
let fieldset = document.querySelector('fieldset');
let boxes = document.querySelectorAll('.box');
let nameInput = document.getElementsByName('username')[0];
let redBox = document.getElementById('red');
let blueBox = document.getElementById('blue');
let yellowBox = document.getElementById('yellow');
let greenBox = document.getElementById('green');

// Create fortune and append display
let fortuneDisplay = document.createElement('div');
fortuneDisplay.classList.add('fortune');
fieldset.appendChild(fortuneDisplay);


// Create and Append Submit and Reset buttons
let submit = document.createElement('button');
submit.type = 'button';
submit.textContent = "Pick a color for your fortune!";
submit.style.borderRadius = '7px'
submit.style.padding = '10px'
submit.style.fontSize = '20px'
submit.classList.add('button');
fieldset.appendChild(submit);

// Should be hidden until fortune has been presented
let reset = document.createElement('button')
reset.type = 'button';
reset.textContent = "Play again";
reset.style.marginLeft = "10px";
reset.style.borderRadius = '7px'
reset.style.padding = '10px'
reset.style.fontSize = '20px'
reset.style.display = "none";
reset.classList.add('button');
fieldset.appendChild(reset);

// Store boxes original text
const originalText = {
    red: "Red",
    blue: "Blue",
    yellow: "Yellow",
    green: "Green"
}

// Point boxes to their fortunes
const boxIndex = {
    red: 0,
    blue: 1,
    yellow: 2,
    green: 3,
};

let selectedColor = null;
let choosingNumber = false;


// Validating Name form
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(nameInput.value)) {
        nameInput.setCustomValidity("Please fill in a name");
        nameInput.reportValidity()
        return;
    } else {
        nameInput.setCustomValidity("")
    }
    confirm("Please select a color!");
    submit.disabled = true;
    submit.textContent = "Choose a color above!"
});

// Box Event Listeners
for (let box of boxes) {
    box.addEventListener('click', handleColorClicks)
}

// Handling of user clicks
function handleColorClicks(e) {
    e.preventDefault();
    if (!nameInput.checkValidity()) {
        alert("Please fill in name before selecting color");
        return;
    }

    const box = e.currentTarget;

    if(box.disabled) return;

    if (!choosingNumber){
        colorChoice(box);
    } else if (choosingNumber && selectedColor){
        numberChoice(box);
    }
}

// Choosing color
function colorChoice(box) {
    selectedColor = box.id; // store the chosen color
    choosingNumber = true;

    redBox.textContent = "1";
    blueBox.textContent = "2";
    yellowBox.textContent = "3";
    greenBox.textContent = "4";

    submit.textContent = "Now select a number!"
}

// Choosing number
function numberChoice(box) {
    const index = boxIndex[box.id];
    const fortune = fortunes[selectedColor][index];

    fortuneDisplay.textContent = ` Hey ${nameInput.value}, ${fortune}!`;

    // Prevent multiple fortunes until reset
    choosingNumber = false;
    for (let box of boxes){
        box.disabled = true
    }
    submit.textContent = "Fortune given!";
    reset.style.display = "inline-block";
}

// Reset game
reset.addEventListener('click', () => {
    for (let box of boxes) {
        box.disabled = false;
        box.textContent = originalText[box.id];
    }
    selectedColor = null;
    choosingNumber = false;
    fortuneDisplay.textContent = "";
    nameInput.value = ""
    submit.disabled = false;
    submit.textContent = "Pick a color for your fortune!";
    reset.style.display = "none"
});






