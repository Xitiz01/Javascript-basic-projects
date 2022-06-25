// A program that checks the typing speed of the user
// and displays the result in a message.

// when the user clicks the button or reloads, new  quote is rendered every time using this api
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'; 
    // using dom to get the elements  
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');

// adding event listener which will split the rendered quote into different span 
quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');


    let correct = true;   // so it helps in changing the text color

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];   
        if (character == null) {         //if the text field is null timer goes on nothing else happens
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        }else if (character === characterSpan.innerText) { //if user is typing the correct words the text 
            characterSpan.classList.add('correct');        //  color changes accordingly
            characterSpan.classList.remove('incorrect');
        }else {
            characterSpan.classList.remove('correct');     //else the opposite of the above happens
            characterSpan.classList.add('incorrect');
            correct = false;
        }
    })
    if (correct) renderNewQuote();              //if the user is correct the  next quote is rendered again
})                                              //which is automatically generated through the api


function getRandomQuote() {                     //api to get the random quote
    return fetch(RANDOM_QUOTE_API_URL)          //using fetch to get the data from the api
        .then(response => response.json())       
        .then(data => data.content);            //using json to get the data from the api
}

async function renderNewQuote() {                //function to render the new quote
    const quote = await getRandomQuote();        //using await to get the new data from the api
    quoteDisplayElement.innerHTML = '';          //clearing the quote display element
    quote.split('').forEach(character => {        //splitting the quote into characters
        const characterSpan = document.createElement('span');  //creating a span for each character                  
        characterSpan.innerText = character;                    //adding the character to the span
        quoteDisplayElement.appendChild(characterSpan);      //adding the span to the quote display element
})
    quoteInputElement.value = null;                       //clearing the text field
    startTimer();                                         //starting the timer
}
let startTime;                                           //variable to store the start time
function startTimer() {                                  //function to start the timer
    timerElement.innerText = 0;                          //clearing the timer element
    startTime = new Date();                              //storing the start time
    setInterval(() => {                                  //setting the interval to update the timer
        timer.innerText = getTimerTime();                //updating the timer
    }, 1000);
    }
function getTimerTime() {                                 //function to get the time
    return Math.floor((new Date() - startTime) / 1000);   //getting the time in seconds
}
renderNewQuote();                                    //rendering the first quote




