//Getting data from the previous loging file.
const json = localStorage.getItem('form');
const obj = JSON.parse(json);
// Welcoming the User.
const header =  document.querySelector('h1');

if(obj.fName === undefined || obj.fName.trim() === "") {
  console.error("First name is missing in the stored data.");
  obj.fName = "User";
}

if(header) {
  header.textContent = `Hi, ${obj.fName}!`; 
}
else  {
  console.warn("Header element not found!");
}

const form = document.querySelector('form');
if (!form) {
  console.error("Form not found!");
}

const questions = [
  {
    text: "I _ very happy to see you!",
    id: "q1",
    name: "select1",
    options: ["", "Be", "'m", "Are"]
  },
  {
    text: "He _ a good friend of mine.",
    id: "q2",
    name: "select2",
    options: ["", "are", "'s is", "'s"]
  },
  {
    text: "We _ teachers.",
    id: "q3",
    name: "select3",
    options: ["", "'re not", "'s not", "no are"]
  },
  {
    text: "It _ important.",
    id: "q4",
    name: "select4",
    options: ["", "no is", "isn't", "aren't"]
  },
  {
    text: " _ in Egypt in this photo?",
    id: "q5",
    name: "select5",
    options: ["", "you are", "are you", "is you"]
  },
  {
    text: "Yes, _ .",
    id: "q6",
    name: "select6",
    options: ["", "we aren't", "we're", "we are"]
  },
  {
    text: "I can't talk now, I _ busy!",
    id: "q7",
    name: "select7",
    options: ["", "'s", "'m", "'re"]
  },
  {
    text: "We _ students.",
    id: "q8",
    name: "select8",
    options: ["", "aren't", "no are", "isn't"]
  },
  {
    text: "_ at work today.",
    id: "q9",
    name: "select9",
    options: ["", "you are", "you're are", "are you"]
  },
  {
    text: " Yes, I _ .",
    id: "q10",
    name: "select10",
    options: ["", "'m", "am", "do"]
  }
]

const submitDiv = document.getElementById('submitDiv');

questions.forEach((question, index) => {

        // Make a div for each question
        const questionDiv = document.createElement('div');
        questionDiv.className = 'questions-container';
        // Create paragraph element
        const p = document.createElement('p');
        p.textContent = `${index + 1}. `;

        const textParts = question.text.split('_');
        if(textParts.length === 2) {
          p.appendChild(document.createTextNode(textParts[0]));

          const select = document.createElement('select');
          select.id = question.id;
          select.name = question.name;

          question.options.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText === "" ? "blank" : optionText;
            option.textContent = optionText;
            select.appendChild(option);
          });

          questionDiv.appendChild(p);
          p.appendChild(select);
          p.appendChild(document.createTextNode(textParts[1]));
        }

        form.insertBefore(questionDiv, submitDiv);
    });

const selectElements = form.querySelectorAll('select');
const numberOfQuestions = selectElements.length;

// An object for user results
const userResults = {
  firstName : obj.fName,
  lastName : obj.lName,
  rightAnswers : 0,
  falseAnswers : 0,
  score : 0,
  numberOfQuestions : form.querySelectorAll('select').length,
}

// The correct answers for the questions
const correctAnswers = {
  answers: [
    select1 = "'m",
    select2 = "'s",
    select3 = "'re not",
    select4 = "isn't",
    select5 = "are you",
    select6 = "we are",
    select7 = "'m",
    select8 = "aren't",
    select9 = "you are",
    select10 = "am",
  ]
};


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userAnswers = Array.from(selectElements).map(select => select.options[select.selectedIndex]?.value || "blank");
  console.log(userAnswers);

  if(userAnswers.includes("blank")) {
    alert("Please answer all of the questions before submitting.");
    return;
  }

  for(let i = 0; i < numberOfQuestions; i++) {
    if(`${userAnswers[i]}` === `${correctAnswers.answers[i]}`) {
      userResults.rightAnswers ++;
      userResults.score ++;
      console.log(userResults.score);
    } 
    else {
      userResults.falseAnswers ++;
    }
  }
  const json = JSON.stringify(userResults);
  localStorage.setItem('form', json);

  window.location.href = "result.html";
});