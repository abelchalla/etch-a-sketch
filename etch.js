const div = document.querySelector(".container");
const slider = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const colorPicker = document.querySelector("#colorPicker");
const label = document.querySelector("label");
let newDiv;
let currentColor = "";
let isRainbowActive = false;
let pops;

colorPicker.addEventListener('change', (e) => {
    isRainbowActive = false;
    currentColor = `${e.target.value}`
    const pops = document.querySelectorAll(".pop");
    pops.forEach(pop => pop.addEventListener('mouseenter', () => {
        pop.style.backgroundColor = `${e.target.value}`;
        currentColor = `${e.target.value}`;
    }))
})

div.onload = addElement(50);


slider.addEventListener('input', (e) => {
    div.innerHTML = '';
    label.innerHTML = `Value: ${e.target.value}`
    div.onload = addElement(e.target.value);
    if(isRainbowActive == true) {
        const pops = document.querySelectorAll(".pop");
        pops.forEach(pop => {
            pop.addEventListener('mouseenter', () => {
                pop.style.backgroundColor = `rgba(${randomColor()})`;
            })
        })
    }
    else{
        const pops = document.querySelectorAll(".pop");
        pops.forEach(pop => {
            pop.addEventListener('mouseenter', () => {
                pop.style.backgroundColor = `${currentColor}`;
            })
        })
    }
})

buttons.forEach(button => button.addEventListener('click', (e) => {
    const pops = document.querySelectorAll(".pop");
    if (e.target.innerHTML == "Clear") {
        isRainbowActive = false;
        pops.forEach(pop => {
            pop.style.backgroundColor = "white";
        })
    }
    else if (e.target.innerHTML == "Rainbow") {
        isRainbowActive = true;
        pops.forEach(pop => {
            pop.addEventListener('mouseenter', () => {
                pop.style.backgroundColor = `rgba(${randomColor()})`;
            })
        })

    }
    else if (e.target.innerHTML == "Eraser") {
        currentColor = "white";
        isRainbowActive = false;
        pops.forEach(pop => {
            pop.addEventListener('mouseenter', () => {
                pop.style.backgroundColor = `white`;
            })
        })
    }
}))

function goThroughAll(color) {
    pops = document.querySelectorAll(".pop");
        pops.forEach(pop => {
            pop.addEventListener('mouseenter', () => {
                pop.style.backgroundColor = `color`;
            })
        })
}

function addElement(amount) {
    for(let i = 0; i < amount; i++) {
        for(let j = 0; j < amount; j++) {
            newDiv = document.createElement("div");
            newDiv.classList.add("pop");
            newDiv.setAttribute("style", "box-sizing: border-box; flex-shrink: 1;");
            newDiv.style.backgroundColor = "white";
            newDiv.style.borderWidth = "1px";
            newDiv.style.borderColor = "lightgrey";
            newDiv.style.borderStyle = "solid";
            newDiv.style.width = `${100.0 / amount}%`;
            newDiv.style.height = `${100.0 / amount}%`;
            div.appendChild(newDiv);
        }
    }
}

function randomColor() {
    return `${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()}`
}

