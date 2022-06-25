// sample of some questions and answers for the quiz using js object

const quizDB = [
    {
        question: "What is the capital of Nepal?",   //list of questions as a javasciprt object
        a : "Kathmandu",
        b : "Hetauda",
        c : "Janakpur",
        d : "Pokhara",
        ans: "ans1"
    },
    {
        question: "What is the capital of India?",
        a : "Kathmandu",
        b : "New Delhi",
        c : "Hetauda",
        d : "Janakpur",
        ans: "ans2"
    },
    {
        question: "What is the capital of Bangladesh?",
        a : "Dhaka",
        b : "Kathmandu",
        c : "Hetauda",
        d : "Janakpur",
        ans: "ans1"
    },
    {
        question: "What is the capital of Bhutan?",
        a : "Dhaka",
        b : "Kathmandu",
        c : "Hetauda",
        d : "Thimpu",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

 
const loadQuestion = () => {

    const questionList = quizDB[questionCount];  //getting the question from the quizDB

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;    //setting the options for the question
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {

    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    
    return answer;

}
// unchecking the answer after submitting
const deselectAnswers = () => {
    answers.forEach((curAnsElem) =>curAnsElem.checked = false);
    }
// checking answers and updating the score
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score ++;
    };

    questionCount ++;
    deselectAnswers();  // unchecking the answer after submitting

    if(questionCount < quizDB.length){    // if the question is not finished yet
        loadQuestion();
    }else{      //after the question is finished 
        showScore.innerHTML = `
        <h3>Your score is ${score}/${quizDB.length} </h3>
        <button class= 'btn' onclick='location.reload()'> Play Again </button> 
        `;
    }
        showScore.classList.remove('scoreArea'); 

});

