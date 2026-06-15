let questions =[
  
  {
    "category": "Web Development",
    "question": "Which React Router hook is used to access the dynamic parameters from the current URL path?",
    "choices": ["useParams", "useLocation", "useNavigate"],
    "answer": "useParams"
  },
  {
    "category": "Web Development",
    "question": "Which Tailwind CSS utility class sets the display property of an element to flexbox?",
    "choices": ["display-flex", "flex", "layout-flex"],
    "answer": "flex"
  },
  {
    "category": "Mobile Technology",
    "question": "Which series of mobile system-on-a-chip (SoC) processors is designed and manufactured by Qualcomm?",
    "choices": ["Dimensity", "Snapdragon", "Helio"],
    "answer": "Snapdragon"
  },
  {
    "category": "Computer Hardware",
    "question": "When measuring graphics card or processor specifications, what does the acronym TDP stand for?",
    "choices": ["Thermal Design Power", "Total Draw Power", "Timing Delay Protocol"],
    "answer": "Thermal Design Power"
  },
  {
    "category": "General Science",
    "question": "Which planet in our solar system is most famous for its prominent, extensive planetary ring system?",
    "choices": ["Jupiter", "Mars", "Saturn"],
    "answer": "Saturn"
  }

];

function getRandomQuestion (setOfQuestions){
 const randomInt = Math.floor(Math.random() * 4);
 return setOfQuestions[randomInt];
}

function getRandomComputerChoice (setOfChoices){
 const randomInt = Math.floor(Math.random() * 4);
 return setOfChoices[randomInt];
}

function getResults(question, computerChoice){
  let result;

  if (question.answer == computerChoice){
    result = "The computer's choice is correct!";
  } else{
    result =`The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
  return result;
}


const question = getRandomQuestion(questions)
const computerChoice = getRandomComputerChoice(question.choices)
console.log(getResults(question, computerChoice))