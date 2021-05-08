const quizDB=[
    {
        question: "Q1 DS",
        a:"Option1 q1",
        b:"Option2 q1",
        c:"Option3 q1",
        d:"Option4 q1",
        ans:"ans4"
    },
    {
        question: "Q2",
        a:"Option1",
        b:"Option2",
        c:"Option3",
        d:"Option4",
        ans:"ans4"
    },
    {
        question: "Q3",
        a:"Option1",
        b:"Option2",
        c:"Option3",
        d:"Option4",
        ans:"ans4"
    },
    {
        question: "Q4",
        a:"Option1",
        b:"Option2",
        c:"Option3",
        d:"Option4",
        ans:"ans4"
    },
    {
        question: "Q5",
        a:"Option1 q1",
        b:"Option2 q1",
        c:"Option3 q1",
        d:"Option4 q1",
        ans:"ans4"
    },
    {
        question: "Q6",
        a:"Option1 q1",
        b:"Option2 q1",
        c:"Option3 q1",
        d:"Option4 q1",
        ans:"ans4"
    },
    {
        question: "Q7",
        a:"Option1 q1",
        b:"Option2 q1",
        c:"Option3 q1",
        d:"Option4 q1",
        ans:"ans4"
    },
    {
        question: "Q8",
        a:"Option1 q1",
        b:"Option2 q1",
        c:"Option3 q1",
        d:"Option4 q1",
        ans:"ans4"
    },
    {
        question: "Q9",
        a:"Option1 q1",
        b:"Option2 q1",
        c:"Option3 q1",
        d:"Option4 q1",
        ans:"ans4"
    }, 
    {
        question: "Q10",
        a:"Option1 q1",
        b:"Option2 q1",
        c:"Option3 q1",
        d:"Option4 q1",
        ans:"ans4"
    },
    
];

const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');

const submit= document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showscore= document.querySelector('#showscore');






let questionCount=0;
let score=0;



const loadQuestion = () =>{

    

    question.innerText= quizDB[questionCount].question;
    option1.innerText= quizDB[questionCount].a;
    option2.innerText= quizDB[questionCount].b;
    option3.innerText= quizDB[questionCount].c;
    option4.innerText= quizDB[questionCount].d;

}

loadQuestion();


const getCheckAnswer = () => {

    let answer;

    answers.forEach((i) => {
        if(i.checked){
            answer = i.id
        };
       
    });
    return answer;

 
};

const deselectAll = () => {
    answers.forEach((i) => i.checked = false);
}



submit.addEventListener('click', () =>{

    const checkedAnswer = getCheckAnswer();
    
    
    
    if(checkedAnswer=== quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{

       

        showScore.innerHTML = `   
        <h3> Yayy ur score ${score}/${quizDB.length} </h3>

        <a href="finalpage.html"> Click here to check final page</a>
    
        
        `
        ;

        showScore.classList.remove('scoreArea')
    }

    
    



  

    
});