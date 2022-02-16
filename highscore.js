const highScoreList = document.getElementById('highScoreList')
let highscores = JSON.parse(localStorage.getItem('mainHighScore')) 
 highScoreList.innerHTML = highscores.map(score =>{
    return `<li class ="highscore"> ${score.name} :  ${score.score}</li>`
}).join("");
// highScoreList.innerHTML=highscores
console.log(highscores, "in highscore page")