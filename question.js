function gotonextpage(){
    window.location.href="newpage.html";
}
const Questionn=document.getElementById("Questions");
const optionn=document.getElementById("Options");
const answers=document.getElementById("ans")
const nxtq=document.getElementById("nxtq")
const scores=document.getElementById("scores")
const restart=document.getElementById("restart");
const rslt=document.getElementById("rslt")
const countdown=document.getElementById("countdown")
const summary=document.getElementById("summary");

const body=document.body;
const question=[
    {Questions:"Which is correct?",
    Options:["Recieve","Receive" ,"Receeve","Recive"],
    answer:"Receive"
    },
    {
        Questions: "Choose the right spelling:",
        Options: ["Accomodate", "Accommodate", "Acommodate", "Acommadate"],
        answer: "Accommodate"
    },
    {
        Questions: "Pick the correctly spelled word:",
        Options: ["Definately", "Definetly", "Definitely", "Definintely"],
        answer: "Definitely"
    },
    {
        Questions: "Which word is correct?",
        Options: ["Embarras", "Embarass", "Embarrass", "Embarrase"],
        answer: "Embarrass"
    },
    {
        Questions: "Choose the correct spelling:",
        Options: ["Occured", "Occurred", "Ocurred", "Occurredd"],
        answer: "Occurred"
    },
    {
        Questions: "Which is right?",
        Options: ["Government", "Goverment", "Govarnment", "Governmant"],
        answer: "Government"
    },
    {
        Questions: "Choose the correct spelling:",
        Options: ["Neccessary", "Necessary", "Necesary", "Neccesary"],
        answer: "Necessary"
    },
    {
        Questions: "Which one is correct?",
        Options: ["Consciense", "Consciensce", "Conscience", "Consceince"],
        answer: "Conscience"
    },
    {
        Questions: "Pick the right word:",
        Options: ["Priviledge", "Privilege", "Priveledge", "Previlige"],
        answer: "Privilege"
    },
    {
        Questions: "Which spelling is correct?",
        Options: ["Maintenance", "Maintainance", "Maintanence", "Mainntenance"],
        answer: "Maintenance"
    },
    {
        Questions: "Which is the correct spelling?",
        Options: ["Committment", "Commitment", "Commitement", "Comittment"],
        answer: "Commitment"
    },
    {
        Questions: "Pick the correctly spelled word:",
        Options: ["Supress", "Surpress", "Suppress", "Soppres"],
        answer: "Suppress"
    },
    {
        Questions: "Choose the correct word:",
        Options: ["Harassment", "Harrassment", "Harasment", "Harressment"],
        answer: "Harassment"
    },
    {
        Questions: "Which spelling is right?",
        Options: ["Questionnaire", "Questionaire", "Questonaire", "Queshionaire"],
        answer: "Questionnaire"
    },
    {
        Questions: "Pick the correct spelling:",
        Options: ["Perseverence", "Perseverance", "Perserverance", "Persevarance"],
        answer: "Perseverance"
    },
    {
        Questions: "Which word is spelled correctly?",
        Options: ["Unneccessary", "Unnesesary", "Unnecessary", "Unnescessary"],
        answer: "Unnecessary"
    },
    {
        Questions: "Choose the right spelling:",
        Options: ["Indispensible", "Indispensable", "Indespensable", "Indespencible"],
        answer: "Indispensable"
    },
    {
        Questions: "Which is correct?",
        Options: ["Acknowledge", "Aknowladge", "Acknolege", "Aknoledge"],
        answer: "Acknowledge"
    },
    {
        Questions: "Pick the correctly spelled word:",
        Options: ["Mischievious", "Mischievous", "Mischevous", "Mischivious"],
        answer: "Mischievous"
    },
    {
        Questions: "Which one is correct?",
        Options: ["Restaurant", "Restuarant", "Restorant", "Restauraunt"],
        answer: "Restaurant"
    }
];
let score=0
let current=0;
let num=0;
let timer;
function showq(){
    clearTimeout(timer);
    let timeleft=7;
    countdown.innerText=`⏳Time left:${timeleft}s`;
    const timeinterval=setInterval(()=>{
        timeleft--;
        countdown.innerText=`⏳Time left:${timeleft}s`;
        if(timeleft<3 ){
          
          body.classList.add("pulse")
        }
        else{
            body.classList.remove("pulse")

        }
        if(timeleft===0){
            body.classList.remove("pulse")
            clearInterval(timeinterval)
        }
    },1000)

    const qu=question[current].Questions
    
    Questionn.innerText=qu;
    optionn.innerHTML = "";
    answers.innerHTML=""
    const an=question[current].Options
    an.forEach(options => {
        const but=document.createElement("button");
        but.innerText=options
        
        
    but.addEventListener("click",function(){
        clearTimeout(timer)
         clearInterval(timeinterval)
        const answ=question[current].answer;
        
        if(but.innerText===answ){
            answers.innerText=`Correct Answer✅🎉`
            but.style.backgroundColor="green";
            score++;num++
            scores.innerText=`🧠Your Score= ${score}/${num}`
            
        }
        else{
            answers.innerText=`Wrong Answer❌😞`
            but.style.backgroundColor="red";num++
            scores.innerText=`🧠Your Score= ${score}/${num}`
            
        }
        const allbtn=document.querySelectorAll("#Options button");
        allbtn.forEach(but=>{
            but.disabled=true;
            if(but.innerText===answ){
                but.style.backgroundColor="green";
            }
        })
        
        
        setTimeout(()=>{ 
            
            current++;
       if (current < question.length) {
           scores.innerText=`🧠Your Score= ${score}/${num}`
           showq(); 
           
       } else {
           Questionn.innerText = "Quiz finished!";
           answers.innerText=``;
           scores.innerText=``
           rslt.innerText=`Congratulations!You scored ${score}/20🏆🎉`
           optionn.innerHTML = "";  
           countdown.innerText="";   
           if(score===20){
            summary.innerText=`Perfect Score! 💯🏆🎉 You're a spelling star! 🌟🧠`
        }
        else if(score>16){
            summary.innerText=`Awesome! 17/20 🌟 You're almost perfect! 🧠🎯`
        }
        else if (score>=10){
            summary.innerText=`👍✨🧠 Great job! Keep learning!`

        }
        else if (score>6){
            summary.innerText=`😅💪 Needs improvement!`;
        }
        else{
            summary.innerText=`😢 Don’t give up – you’ll improve! 🚀📖`;
        }
       }},1000) 
    }
);  optionn.appendChild(but); });
//if no button clicked...auto go to nxt q
timer=setTimeout(()=>{
    clearInterval(timeinterval)
    current++;num++
    if (current < question.length) {
        scores.innerText=`🧠Your Score= ${score}/${num}`
        showq(); 
    } else {
        Questionn.innerText = "Quiz finished!";
        answers.innerText=``;
        scores.innerText=``
        rslt.innerText=`Congragulations!You scored ${score}/20 🏆🎉`
        optionn.innerHTML = "";    
        countdown.innerText="";  
        if(score===20){
            summary.innerText=`Perfect Score! 💯🏆🎉 You're a spelling star! 🌟🧠`
        }
        else if(score>16){
            summary.innerText=`Awesome! 17/20 🌟 You're almost perfect! 🧠🎯`
        }
        else if (score>11){
            summary.innerText=`👍✨🧠 "Great job! Keep learning!`

        }
        else if (score>6){
            summary.innerText=`😅💪 "Needs improvement!`;
        }
        else{
            summary.innerText=`😢 Don’t give up  you’ll improve! 🚀📖`;
        }
    }},7000) 
    
}
showq();
restart.addEventListener("click",function(){
    
    const confirmrestart=confirm("⚠️Are you are sure to restart the game?Scores you earned will lose")
    if (confirmrestart){
    current=0;
    score=0;
    num=0;
    body.classList.remove("pulse");
    scores.innerText=`Your Score:${score}`
    answers.innerText="";
    
    showq();

}})

