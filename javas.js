const words=document.getElementById("words");
const randoms=[ "Let's see how strong your spelling is! 🧠✨",
    "📚 The difference between try and triumph is a little umph!💥",
    "Spelling is the art of putting letters in the right place ✍️🔤",
"Mistakes are proof that you are trying 💪📘✏️",
"Words have power. Spell them right! 💬⚡🧠",
"Don't just guess, spell with success! 🎯📝✨",
"Spell like a bee, sting like a champ! 🐝🥇🐝",
"Your brain is a muscle. Train it daily.🧠🏋️‍♂️📚"];

setInterval(()=>{
   const wordd=randoms[ Math.floor(Math.random()*randoms.length)]
   words.innerText=`"${wordd}"`
},2000)





