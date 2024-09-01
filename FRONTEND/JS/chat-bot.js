const botResponses = {
  // Greetings and Introductions
  "hello": "Hello! How can I assist you today?",
  "hi": "Hi there! What would you like to know about the Coder's Guild?",
  "hey": "Hey! How can I help you with your tech journey?",

  // Basic Questions about the Guild
  "what is the coder's guild": "Coder's Guild is a school club within CITCS focused on enhancing students' skills in technology and fostering a collaborative community.",
  "what does the coder's guild do": "The Coder's Guild provides learning opportunities, organizes events, and helps students develop their tech skills through collaboration and hands-on projects.",
  "purpose of the coder's guild": "Our purpose is to enhance and develop the technical skills of students and to build a strong community for collaboration and innovation.",
  
  // Learning Opportunities
  "what can i learn": "At the Coder Guild, you can learn programming languages, UI/UX design, web and mobile development, network security, and more.",
  "can i learn programming": "Absolutely! We offer resources and workshops to help you learn programming languages like Python, JavaScript, Java, and C++.",
  "do you teach ui ux design": "Yes, we cover UI/UX design principles to help you create visually appealing and user-friendly digital products.",
  "is there anything on cybersecurity": "Yes, we provide learning materials and workshops on network security and cybersecurity to protect data and networks from threats.",

  // How to Join
  "how do i join": "Joining is easy! You can ask a CITCS professor, contact our organizers, or scan the QR code around the campus.",
  "how to join": "To join, just reach out to any CITCS professor or scan the QR codes posted around the CITCS department.",
  "who can join": "Anyone from the CITCS department with an interest in technology and innovation can join the Coder's Guild!",
  
  // Events and Opportunities
  "what events do you have": "We host various events like workshops, hackathons, and pitch competitions. Would you like more details?",
  "what are the opportunities": "The Coder Guild offers hackathons, pitch competitions, certification exams, and collaborative projects to enhance your skills and experience.",
  "are there any hackathons": "Yes, we regularly organize hackathons where you can team up with peers to solve real-world problems and innovate.",
  "can i participate in competitions": "Definitely! We have several competitions, including coding challenges and startup pitches, where you can showcase your skills.",
  
  // Farewells and Closing Remarks
  "thank you": "You're welcome! If you have any more questions, feel free to ask.",
  "thanks": "No problem! I'm here to help you out.",
  "goodbye": "Goodbye! Keep coding and stay curious!",
  "bye": "Bye! Have a great day and happy coding!",
  "see you": "See you later! Don’t forget to check out our upcoming events!",
  
  // General Encouragement and Tips
  "any tips for beginners": "Start with the basics, practice regularly, and don't be afraid to ask questions or seek help when you're stuck.",
  "how can i improve my skills": "Join our workshops, participate in projects, and collaborate with other guild members to learn and grow together.",
  "what should i do next": "Explore different areas of technology, attend our events, and work on projects to expand your skills.",
  
  // Default Response
  "default": "Feel free to ask any questions you have about coding, design, technology, or our club!"
};

const MAX_MESSAGES = 10;
let currentBotResponseIndex = 0;

function openChatbotModal(event) {
  event.preventDefault();
  document.getElementById("chatbotModal").style.display = "block";
}

function closeChatbotModal() {
  document.getElementById("chatbotModal").style.display = "none";
}

function sendMessage() {
  var userInput = document.getElementById("userInput").value.toLowerCase(); // Convert to lowercase for matching
  if (userInput.trim() !== "") {
    addMessageToChat('user', userInput);
    document.getElementById("userInput").value = "";
    const botMessage = getBotResponse(userInput);
    setTimeout(() => {
      addMessageToChat('chatbot-bot', botMessage);
    }, 1000);
  }
}

function addMessageToChat(sender, message) {
  var chatWindow = document.querySelector(".chatbot-chat-window");
  var messageDiv = document.createElement("div");
  messageDiv.className = `chatbot-message ${sender}`;
  messageDiv.innerHTML = `<p>${message}</p>`;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  const messages = chatWindow.getElementsByClassName('chatbot-message');
  if (messages.length > MAX_MESSAGES) {
    chatWindow.removeChild(messages[0]);
  }
}

function getBotResponse(userInput) {
  // Check if the user input matches any predefined questions
  for (const question in botResponses) {
    if (userInput.includes(question)) {
      return botResponses[question];
    }
  }
  // If no match, return a default response
  return botResponses["default"];
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}
