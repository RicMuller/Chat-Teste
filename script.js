document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userNameInput = document.getElementById('user-name');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        sendMessage();
    });

    messageInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userName = userNameInput.value.trim();
        const message = messageInput.value.trim();
        if (userName !== '' && message !== '') {
            addMessage(userName, message);
            messageInput.value = '';
        }
    }

    function addMessage(sender, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${content}`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
