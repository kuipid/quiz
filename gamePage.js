const qTag = document.getElementById("qustionTag")
const qCounter = document.getElementById("question-counter")
const Scoretag = document.getElementById("score")

const progressFull = document.getElementById("progressFull")

const choices = Array.from(document.getElementsByClassName('tions'))



let currentQuestion= {};
let aceptingQuestions = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [] 

let questions = [
    {
        question:'whats stephens favaourite food',
        option1:'Rice and beans',    
        option2:'Rice and YAm',
        option3:'Pounded Yam and Egusi',
        option4:'beans',
        answer:1
       
    },
    {
        question:'whats stephens favaourite country',
        option1:'Spain',    
        option2:'Usa',
        option3:'North Korea',
        option4:'South Korea',
        answer:3
    },
    {
        question:'whats stephens favaourite sport',
        option1:'Football',    
        option2:'Tennis',
        option3:'VolleyBall',
        option4:'Ice Hockey',
        answer:1
    },
    {
        question:'whats stephens favaourite sneaker',
        option1:'Nike',    
        option2:'Umbro',
        option3:'Addidas',
        option4:'Puma',
        answer:3
    },
    {
        question:'what phisophical priciple does stephen hold dear onto.',
        option1:'Stoicism',    
        option2:'Sadism',
        option3:'Massochism',
        option4:'YOLO',
        answer:1
    },
    {
        question:'whats stephens favaourite footbal',
        option1:'Lionel',    
        option2:'Messi',
        option3:'La pulga',
        option4:'All of the Above(winks)',
        answer:4
    },
    {
        question:'Which of thes am i most likely to keep as a pet. ',
        option1:'Cat',    
        option2:'Dog',
        option3:'Snake',
        option4:'Possum',
        answer:2
    },
    {
        question:'what phisophical priciple does stephen hold dear onto.',
        option1:'Stoicism',    
        option2:'Sadism',
        option3:'Massochism',
        option4:'YOLO',
        answer:1
    },
    {
        question:'What Is Stephen"s Zodiac Sign',
        option1:'Taurus',    
        option2:'Aries',
        option3:'calirs(omo)',
        option4:'Not this',
        answer:1
    },
    {
        question:'Whats Stephen Favourite Social Media App',
        option1:'Whatsapp',    
        option2:'Twitter',
        option3:'Tiktok',
        option4:'Linkedln',
        answer:2
    }
]


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;
    // loader.classList.add('hidden')

loader = () => {
    setTimeout(() => {
        let loader = document.getElementById("loader")
        loader.classList.add('hidden')
        let gamePAge = document.getElementById("gamePAge")
        gamePAge.classList.remove('hidden')
        startGame()
    }, 1500)
    
}
loader()
startGame = ()  =>{
    
    questionCounter =0 ;
    score = 0;
    availableQuestions= [...questions]
    getNewQuestion()
    

}
getNewQuestion = () =>{
    
    if (availableQuestions.length===0|| questionCounter >= MAX_QUESTIONS){
       localStorage.setItem("mostRecentScore",score)
        return window.location.assign("end.html")
    }
   
    questionCounter++;
    qCounter.textContent= questionCounter + "/" + MAX_QUESTIONS 
    progressFull.style.width= `${(questionCounter/MAX_QUESTIONS)*100}%`
    const questionIndex=  Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    qTag.textContent=   currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.textContent=  currentQuestion['option' + number]
    })
    availableQuestions.splice(questionIndex,1)
    aceptingQuestions=true
}
choices.forEach(choice =>{
    choice.addEventListener("click" , e =>{
       
       if (!aceptingQuestions) return;
       aceptingQuestions=false;
       const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset['number']
       console.log(selectedAnswer==currentQuestion.answer)
       const classToApply = selectedAnswer== currentQuestion.answer ? 'correct' : 'incorrect';
       if(classToApply==='correct') {
           incrementScore(CORRECT_BONUS)
       }
       selectedChoice.parentElement.classList.add(classToApply)
       setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
    }, 1000)
    
    });
    
})
incrementScore = num =>{
    score+=num;
    Scoretag.textContent= score;
}
