// console.log("Hey Brian you look great today!")
const headers = document.getElementsByTagName('h1');
console.log(headers);


const secondHeader = headers[1];
console.log(secondHeader);
secondHeader.innerHTML = 'New Text';

const colorChange = () => {
    const headersToChange = document.getElementsByTagName('h1');
    for (header of headersToChange){
        if (header.className === ""){
            header.className = "color-change";
        } else {
            header.className = "";
        }
    }
};





// Add event listener as opposed to onclick

const colorButton = document.getElementById('color-button');
console.log(colorButton);

colorButton.addEventListener('click', colorChange);


// Other Event Listeners
secondHeader.addEventListener('mouseenter', ()=>{
    secondHeader.innerHTML = 'Test123';
})

secondHeader.addEventListener('mouseleave', () => {
    secondHeader.innerHTML = '123Test';
})

// Create HTML via JavaScript
let newButton = document.createElement("button");
newButton.innerHTML = "I am alive!"
newButton.style = "color: green; padding: 20px; display: block; margin-top: 15px;"

// Add the button to the end of the body
document.body.append(newButton);

// Add an event listener to our new button to add more text to the page
newButton.addEventListener('dblclick', ()=>{
    let moreText = document.createElement('h1');
    moreText.innerHTML = prompt("What would you like to add to our page?");
    moreText.className = 'color-change';
    document.body.append(moreText);
})



// GRABBING DATA FROM A FORM //

// Get the form
const dataForm = document.querySelector('#testDataForm');
console.log(dataForm);

// Add an Event Listener to the form listening for a submit event
// Pass SubmitEvent object through your callback function
dataForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the page from reloading
    console.log(e);

    // Method 1: Using the event object to grab data
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    console.log(firstName, lastName);

    // Method 2: Using document object
    const docFirst = document.getElementById("firstName").value;
    const docLast = document.querySelector('#lastName').value;
    console.log(docFirst, docLast);

    // Add data from form to our html
    let greeting = document.createElement('h3');
    greeting.innerHTML = `Welcome ${firstName} ${lastName}`;
    document.body.append(greeting);
})