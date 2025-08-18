const fortunes = {
    red: [`If you eat something and nobody sees you eat it, it has no calories.`,
         `You will invent a new dance move in the shower.`,
          `Error 404: Fortune not found`, 
          `You need a mint. Like, bad!`],
    blue: [`You will be hungry again in an hour.`,
         `Its a good day to have a good day.`, 
         `Come back later, I'm napping`, 
         `You will be abducted by aliens, stay indoors!`],
    yellow: [`Your good vibes are scheduled to arrive in 3, 2, 1... NOW!`,
         `A compliment storm is coming your way!`, 
         `Your hands will be clammy during an important handshake`, 
         `It's all downhill from here.`],
    green: [`You will finally find that thing you weren't looking for.`, 
        `You will find money in an old pair of pants exactly when you need it.`, 
        `Your pet is plotting something against you!`, 
        `You might wanna get back in that shower`],
};

// Cache my elements
let fieldset = document.querySelector('fieldset');
let boxes = document.querySelectorAll('.box');
let nameInput = document.getElementsByName('username')[0];
let redBox = document.getElementById('red')
let blueBox = document.getElementById('blue')
let yellowBox = document.getElementById('yellow')
let greenBox = document.getElementById('green')


// Create and Append Submit and Reset buttons
let submit = document.createElement('button');
submit.type = 'button';
submit.textContent = "Pick a color for your fortune!";
fieldset.appendChild(submit);

// Should be hidden until fortune has been presented
let reset = document.createElement('button')
reset.type = 'button';
reset.textContent = "Play again";
reset.style.marginLeft = "10px";
fieldset.appendChild(reset);

// Validating Name form
submit.addEventListener('click', (e) => {
    e.preventDefault()
    if(nameInput.value.length < 1){
        nameInput.setCustomValidity("Please fill in a name");
        nameInput.reportValidity()
    } else {
        nameInput.setCustomValidity("")
    }
});

// Double check validation before moving onto color selection
submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (!nameInput.checkValidity()) {
        alert("Please fill in a name!");
        return;
    }
    confirm("Please select a color!");
    submit.disabled = true;
    submit.textContent = "Choose a color above!"
});

// Box Event Listeners
for (let box of boxes){
box.addEventListener('click', handleColorClicks)
}

// Handling color clicks

function handleColorClicks(e){
    e.preventDefault();

    if (!nameInput.checkValidity()){
        alert("Please fill in name before selecting color");
        return;
    }

    redBox.textContent = "1";
    blueBox.textContent = "2";
    yellowBox.textContent = "3";
    greenBox.textContent = "4";

}

function handleNumberClicks(e){

    redBox.textContent = "1";
    blueBox.textContent = "2";
    yellowBox.textContent = "3";
    greenBox.textContent = "4";

}



