const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const FinalScore = document.getElementById('finalScore')
// localStorage.setItem("highestScore", JSON.stringify([]))
const mostRecentScore = localStorage.getItem('mostRecentScore')
FinalScore.innerText =`YOUR FINAL SCORE IS : ${mostRecentScore}` 
const MAX_HIGH_SCORES = 5
const highScore = JSON.parse(localStorage.getItem("highscore")) || []
const newScore = highScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
 })
 saveHighScore = (e) => {
     e.preventDefault()
    
     const score = {
         score : mostRecentScore,
       
         name:username.value
     }
     newScore.push(score)
     newScore.sort((a,b)=>
          b.score - a.score
     )
     newScore.splice(5)
    
    //   localStorage.setItem("my", JSON.stringify(highScore));
      
      const newSetScore = [...newScore]
      console.log(newSetScore)
      localStorage.setItem("mainHighScore", JSON.stringify(newSetScore));
     
      window.location.assign('new.html')
    }
    
    