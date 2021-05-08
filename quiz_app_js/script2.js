const quizDB=[
    {
        question: "What type of a surgeon was Dr. Strange?",
        a:"Neuro Surgeon",
        b:"Cardiothoracic Surgeon",
        c:"Oculoplastic Surgeon",
        d:"General Surgeon",
        ans:"ans1"
    },
    {
        question: "Why did Dr.Strange go to Kamar Taj?",
        a:"To meet the Ancient One",
        b:"To heal himself ",
        c:"As a part of tour",
        d:"To attend a Birthday Party",
        ans:"ans2"
    },
    {
        question: "What was the first trick Dr.Strange performed using the Eye of Agamotto?",
        a:"Kill the Ancient One",
        b:"Retrieve the Lost Pages of the Cagliostro Book",
        c:"Make himself invisible",
        d:"Used a time loop on a biten apple to restore it back",
        ans:"ans4"
    },
    {
        question: "Who was Dr.Strange's teacher at Kamar Taj?",
        a:"The Ancient One",
        b:"Hamir",
        c:"Kaecilius",
        d:"Dormamu",
        ans:"ans1"
    },
    {
        question: "What was used to create portals to go from place to place?",
        a:"Bare Hands",
        b:"Slip Ring",
        c:"Eye of Agamotto",
        d:"Sling Ring",
        ans:"ans4"
    },
    {
        question: "From where did the Ancient One draw her powers to become immortal?",
        a:"From a Cafe",
        b:"From The New York Sanctrum",
        c:"From The Dark Dimension",
        d:"From Kamar Taj",
        ans:"ans3"
    },
    {
        question: "'We don't lose our demons, Mordo. We only learn to live above them.' Was said by?",
        a:"Dr.Strange",
        b:"Dormamu",
        c:"Kaecilius",
        d:"The Ancient One",
        ans:"ans4"
    },
    {
        question: "Name the Book that Kaecilius tore pages from",
        a:"Diary of The Ancient One",
        b:"Book of Cagliostro",
        c:"Road To The Dark Dimension",
        d:"Book of Agamotto",
        ans:"ans2"
    },
    {
        question: "How did Dr.Strange get Dormamu to take his troops away from Earth?",
        a:"Using an endless Time Loop to Bargain",
        b:"Using the most powerfull Magic Spell",
        c:"Begged Dormamu to leave!",
        d:"By Hypnotizing Dormamu",
        ans:"ans1"
    }, 
    {
        question: "'Just Wong? Like Adele?' Was said by?",
        a:"Mordo",
        b:"Chrisitine Palmer",
        c:"Stan Lee(the Bus Driver)",
        d:"Dr.Strange",
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
