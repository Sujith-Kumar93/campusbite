function showSuccessMessage() {
    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    var successIcon = document.createElement('i');
    successIcon.className = 'success-icon';
    successIcon.innerHTML = '&#10004;';

    var heading = document.createElement('h1');
    heading.textContent = 'Payment Successful';

    var paragraph = document.createElement('p');
    paragraph.textContent = 'Thank you for your order. Your payment was successful, and your order has been placed.';

    messageContainer.appendChild(successIcon);
    messageContainer.appendChild(heading);
    messageContainer.appendChild(paragraph);

    document.body.appendChild(messageContainer);

    // Redirect after a delay
    setTimeout(function () {
        window.location.href = 'https://example.com/thank-you'; // Replace with your desired URL
    }, 5000); // 5000 milliseconds (5 seconds) delay before redirection
}
