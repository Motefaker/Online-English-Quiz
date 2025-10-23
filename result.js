const json = localStorage.getItem ('form');
const userResults = JSON.parse(json);

const scorePercentage = (userResults.score / userResults.numberOfQuestions) * 100;


const shareBtn = document.getElementById('shareScoreBtn');

shareBtn.addEventListener("click", () => {

  const shareData = {
    title: 'My Quiz Score!',
    text: `I scored ${userResults.rightAnswers} out of ${userResults.numberOfQuestions} in the quiz!`,
    url: window.location.href
  };

  const scoreText = shareData.text;
  function copyScore() {
    navigator.clipboard.writeText(scoreText)
  .then(() => {
    alert("The score has been copied! you can share it with others.");
  })
  .catch(err => {
    console.error("Failed to copy text!");
  })
  console.log(scoreText);
  }
  copyScore();
});


const score = document.getElementById('score');
const scoreP = document.getElementById('scoreP');
const resultMessage = document.getElementById('resultMessage');
//Showing the correct answers
if(score) {
  score.textContent = `Correct Answers : ${userResults.rightAnswers}/${userResults.numberOfQuestions}`;
} else {
  console.warn("element not found!!!");
}

if(scoreP) {
  scoreP.textContent = `Score: ${scorePercentage}%`;
}

if(isNaN(scorePercentage)) {
  scoreP.textContent = `Score: 0%`;
}

if(resultMessage && scorePercentage > 70) {
  resultMessage.textContent = "Good job!";
} 
else {
  resultMessage.textContent = "Practice more next time!";
}





















