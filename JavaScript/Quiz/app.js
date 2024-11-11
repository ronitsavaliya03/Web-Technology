const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2
    },
    {
      question: "What is the largest planet in our Solar System?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 2
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: 2
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question-title").innerText = `Question ${currentQuestion + 1}:`;
    document.getElementById("question-text").innerText = questionData.question;
    document.getElementById("label1").innerText = questionData.options[0];
    document.getElementById("label2").innerText = questionData.options[1];
    document.getElementById("label3").innerText = questionData.options[2];
    document.getElementById("label4").innerText = questionData.options[3];
  }

  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
      alert("Please select an answer");
      return;
    }

    const answer = parseInt(selectedOption.value);
    if (answer === questions[currentQuestion].answer) {
      score++;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = score;
    document.getElementById("total").innerText = questions.length;
  }

  window.onload = loadQuestion;