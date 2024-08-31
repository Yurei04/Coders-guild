const botResponses = [
    "Hello! How can I assist you today?",
    "Coder's Guild is here to help with all your tech and innovation needs!",
    "Feel free to ask any questions you have about coding, design, or technology.",
    "Our club is a great place to learn and grow. Would you like to know more about our events?",
    "Keep coding and stay curious! Do you need any tips?",
    "Thank you for reaching out. We're here to support you in your tech journey."
  ];
  
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
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
      addMessageToChat('user', userInput);
      document.getElementById("userInput").value = "";
      const botMessage = getBotResponse();
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
  
  function getBotResponse() {
    const response = botResponses[currentBotResponseIndex];
    currentBotResponseIndex = (currentBotResponseIndex + 1) % botResponses.length;
    return response;
  }
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }
  