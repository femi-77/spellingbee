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
const words=document.getElementById("words");
const total=document.getElementById("total");
const final=document.getElementById("final");
const share=document.getElementById("share");
const randoms=[ "Let's see how strong your spelling is! 🧠✨",
    "📚 The difference between try and triumph is a little umph!💥",
    "Spelling is the art of putting letters in the right place ✍️🔤",
"Mistakes are proof that you are trying 💪📘✏️",
"Words have power. Spell them right! 💬⚡🧠",
"Don't just guess, spell with success! 🎯📝✨",
"Spell like a bee, sting like a champ! 🐝🥇🐝",
"Your brain is a muscle. Train it daily.🧠🏋️‍♂️📚"];

window.addEventListener("DOMContentLoaded", () => {
  const words = document.getElementById("words");
  if (!words) return;

  setInterval(() => {
    const wordd = randoms[Math.floor(Math.random() * randoms.length)];
    words.innerText = `"${wordd}"`;
  }, 2000);
});
let userResponses = [];
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
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
// Shuffle the questions array when the script loads
shuffleArray(question);
question.forEach(q => shuffleArray(q.Options));

let score=0
let current=0;
let num=0;
let timer;
let totals=20;
function showq(){
    total.innerText=`${totals} Questions left`;
    clearInterval(timer);
    let timeleft=10;
    countdown.innerText=`⏳Time left:${timeleft}s`;    const timeinterval=setInterval(()=>{
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
    answers.innerHTML="";
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
            score++;num++;totals--;
            scores.innerText=`🧠Your Score= ${score}/${num}`;
            
            
            
        }
        else{
            answers.innerText=`Wrong Answer❌😞`
            but.style.backgroundColor="red";num++;totals--;
            scores.innerText=`🧠Your Score= ${score}/${num}`;
            
            
        }
        userResponses.push({
                question: question[current].Questions,
                options: [...question[current].Options],
                correct: question[current].answer,
                selected:  but.innerText
            });
        total.innerText=`${totals} Questions left`;
        const allbtn=document.querySelectorAll("#Options button");
        allbtn.forEach(but=>{
            but.disabled=true;
            if(but.innerText===answ){
                but.style.backgroundColor="green";
            }
        })
        
        total.innerText=`${totals} Questions left`;
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
           total.innerText=""; 
           if(score===20){
            final.innerText=`Perfect Score! 💯🏆🎉 You're a spelling star! 🌟🧠`
        }
        else if(score>16){
            final.innerText=`Awesome! 17/20 🌟 You're almost perfect! 🧠🎯`
        }
        else if (score>=10){
            final.innerText=`👍✨🧠 Great job! Keep learning!`

        }
        else if (score>6){
            final.innerText=`😅💪 Needs improvement!`;
        }
        else{
            final.innerText=`😢 Don’t give up – you’ll improve! 🚀📖`;
        }showWrongSummary();
        showShareButton(score);
        
       
    }// Show share button after quiz ends

},1000) 
    }
);  optionn.appendChild(but); });
//if no button clicked...auto go to nxt q
timer=setTimeout(()=>{
    clearInterval(timeinterval)
     userResponses.push({
                question: question[current].Questions,
                options: [...question[current].Options],
                correct: question[current].answer,
                selected: "Not answered"
            });
    current++;num++;totals--;
    if (current < question.length) {
        scores.innerText=`🧠Your Score= ${score}/${num}`
        showq(); 
    } else {
        Questionn.innerText = "Quiz finished!";
        answers.innerText=``;
        scores.innerText=``
        rslt.innerText=`Congratulations!You scored ${score}/20 🏆🎉`
        optionn.innerHTML = "";    
        countdown.innerText="";  
        
        if(score===20){
            final.innerText=`Perfect Score! 💯🏆🎉 You're a spelling star! 🌟🧠`
        }
        else if(score>16){
            final.innerText=`Awesome!  🌟 You're almost perfect! 🧠🎯`
        }
        else if (score>=10){
            final.innerText=`👍✨🧠 Great job! Keep learning!`

        }
        else if (score>6){
            final.innerText=`😅💪 Needs improvement!`;
        }
        else{
            final.innerText=`😢 Don’t give up – you’ll improve! 🚀📖`;
        }

showShareButton(score);
showWrongSummary();
}},10000) 

} // <-- End of showq

function showWrongSummary() {
    summary.innerHTML = `<h3>📋 Questions You Missed:</h3>`;

    const wrongOnly = userResponses.filter(q => q.selected !== q.correct);

    if (wrongOnly.length === 0) {
        summary.innerHTML += `<p>🎉 Amazing! You got all answers correct!</p>`;
    } else {
        wrongOnly.forEach((q) => {
            summary.innerHTML += `
                <div style="border:1px solid #ccc; padding:10px; margin:10px 0; border-radius:8px; background:#f8d7da">
                    <p><strong>Q:</strong> ${q.question}</p>
                    <p><strong>Your Answer:</strong> ${q.selected === "Not answered" ? "❌ Not answered" : `${q.selected} ❌`}</p>
                    <p><strong>Correct Answer:</strong> ${q.correct}✅ </p>
                </div>
            `;
        });
    }
}


showq();
function showShareButton(score) {
  const shareButton = document.getElementById("share");
  shareButton.style.display = "inline-block";
  shareButton.onclick = () => {
    const url = "https://femi-77.github.io/spellingbee/";
    const message = `🧠 I scored ${score}/${question.length} in the Spelling Bee! Try it now:`;

    if (navigator.share) {
      navigator.share({
        title: "Spelling Bee Quiz",
        text: message,
        url: url,
      })
      .then(() => console.log("Shared successfully!"))
      .catch((error) => console.log("Sharing failed:", error));
    } else {
      navigator.clipboard.writeText(message)
        .then(() => alert("✅ Copied! Share your score anywhere."))
        .catch(() => alert("❌ Copy failed."));
    }
  };
}
restart.addEventListener("click",function(){
    
    const confirmrestart=confirm("⚠️Are you are sure to restart the game?")
    if (confirmrestart){
    current=0;
    score=0;
    num=0;
    totals=20;
    userResponses = [];
    
    body.classList.remove("pulse");
    scores.innerText=`Your Score:${score}`
    answers.innerText="";
    rslt.innerText="";
    summary.innerText="";  
    final.innerText="";
    optionn.innerHTML = "";
    countdown.innerText="";
    showq();

}})

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registered:', reg))
        .catch(err => console.log('Service Worker failed:', err));
    });
  }



