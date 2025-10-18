const json = localStorage.getItem ('form');
const userResults = JSON.parse(json);


const score = document.getElementById('score');
const scoreP = document.getElementById('scoreP');
const resultMessage = document.getElementById('resultMessage');
//Showing the correct answers
if(score) {
  score.textContent = `Correct Answers : ${userResults.rightAnswers}/${userResults.numberOfQuestions}`;
} else {
  console.warn("element not found!!!");
}

const scorePercentage = (userResults.score / userResults.numberOfQuestions) * 100;

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





















