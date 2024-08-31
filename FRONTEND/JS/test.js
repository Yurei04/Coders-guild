function openTestItModal(event) {
  event.preventDefault();
  document.getElementById("testItModal").style.display = "block";
}

function closeTestItModal() {
  document.getElementById("testItModal").style.display = "none";
}

function showProblem(problemType) {
  const problems = ['htmlProblem', 'cssProblem', 'jsProblem'];

  problems.forEach(problem => {
    document.getElementById(problem).style.display = 'none';
  });

  if (problemType === 'html') {
    document.getElementById('htmlProblem').style.display = 'block';
  } else if (problemType === 'css') {
    document.getElementById('cssProblem').style.display = 'block';
  } else if (problemType === 'js') {
    document.getElementById('jsProblem').style.display = 'block';
  }
}

function checkTestItAnswers() {
  const htmlAnswer = document.getElementById("htmlAnswer").value.trim();
  const cssAnswer = document.getElementById("cssAnswer").value.trim();
  const jsAnswer = document.getElementById("jsAnswer").value.trim();
  let score = 0;

  // HTML Check
  if (htmlAnswer.includes('<img src="image.jpg" alt="description">')) {
    score++;
  }

  // CSS Check
  if (cssAnswer.includes("text-align: center;") && cssAnswer.includes("font-weight: bold;")) {
    score++;
  }

  // JavaScript Check
  if (jsAnswer.includes('document.getElementById("demo").innerHTML = "Hello, World!";')) {
    score++;
  }

  // Show result in alert
  let message = `You got ${score} out of 3 correct.`;

  if (score === 3) {
    message += " Excellent!";
  } else if (score === 2) {
    message += " Good job, but there's room for improvement.";
  } else {
    message += " Keep practicing!";
  }

  alert(message);
}
