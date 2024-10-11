const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b',
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'Helicopters Terminals Motorboats Lamborginis',
        'correct': 'b',
    },
    {
        'que': 'Which of the following is a programming language?',
        'a': 'Python',
        'b': 'HTML',
        'c': 'CSS',
        'd': 'HTTP',
        'correct': 'a',
    },
    {
        'que': 'Who is the creator of Linux?',
        'a': 'Steve Jobs',
        'b': 'Linus Torvalds',
        'c': 'Bill Gates',
        'd': 'Mark Zuckerberg',
        'correct': 'b',
    },
    {
        'que': 'What does SQL stand for?',
        'a': 'Structured Query Language',
        'b': 'Statement Question Language',
        'c': 'Sequential Query Language',
        'd': 'Simple Query Language',
        'correct': 'a',
    },
    {
        'que': 'Which company developed Java?',
        'a': 'Google',
        'b': 'Microsoft',
        'c': 'Sun Microsystems',
        'd': 'Oracle',
        'correct': 'c',
    },
    {
        'que': 'What is the full form of API?',
        'a': 'Application Program Interface',
        'b': 'Application Programming Interface',
        'c': 'Automated Programming Interface',
        'd': 'Advanced Programming Interface',
        'correct': 'b',
    },
    {
        'que': 'What does DOM stand for in web development?',
        'a': 'Document Object Model',
        'b': 'Data Object Method',
        'c': 'Digital Object Management',
        'd': 'Direct Object Mapping',
        'correct': 'a',
    },
    {
        'que': 'What is the primary purpose of HTML?',
        'a': 'Designing web pages',
        'b': 'Creating server-side scripts',
        'c': 'Styling web pages',
        'd': 'Structuring web content',
        'correct': 'd',
    }
];

let index = 0;
let right = 0;
let wrong = 0;
const totalQuestion = questions.length;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const questionLoader = () => {
    if (index === totalQuestion) {
        return endQuiz();
    }
    reset();

    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.remove();
    }, 2000); // Adjust the timeout as needed
  }
  
  const submitQuiz = () => {
    const ans = getAnswer();
    const data = questions[index];
  
    if (!ans) {
      showToast("Please select an option before submitting.");
      return;
    }
  
    // Rest of the submitQuiz logic remains the same
    if (ans === data.correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    questionLoader();
  };

const endQuiz = () => {
    const box = document.getElementById("box");
    box.innerHTML = ` 
        <h3>Thank you for playing the game!</h3>
        <h2>You got ${right} out of ${totalQuestion} correct.</h2>
       
    `;
}

const reset = () => {
    optionInputs.forEach(input => {
        input.checked = false;
    });
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(input => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

const restartQuiz = () => {
    index = 0; // Reset to the first question
    right = 0; // Reset correct answers
    wrong = 0; // Reset wrong answers
    questionLoader(); // Load the first question
}

// Initial question load
questionLoader();
