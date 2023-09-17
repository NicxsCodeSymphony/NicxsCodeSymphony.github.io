const numberElement = document.getElementById('number');
const containerElement = document.querySelector('.container');
const messageElement = document.getElementById('message'); // Added message element
const initialNumber = 100;  // The initial number displayed
const maxFontSize = 600;     // The maximum font size for the number

// Update the number and its font size based on scroll position
function updateNumber() {
    const scrolledDistance = containerElement.scrollTop;
    const scrollPercentage = (scrolledDistance / (containerElement.scrollHeight - containerElement.clientHeight));

    // Check if scrollbar is at the bottom
    const isAtBottom = scrolledDistance === (containerElement.scrollHeight - containerElement.clientHeight);

    // Calculate the updated number as a countdown
    let updatedNumber;

    if (isAtBottom) {
        updatedNumber = 0;  // Set the number to 0 when scrollbar is at the bottom
        document.body.style.overflowY = 'auto';  // Show body scroll
        showMessage()
    } else {
        updatedNumber = Math.round(initialNumber - (initialNumber * scrollPercentage));
        updatedNumber = Math.max(0, updatedNumber);
        document.body.style.overflowY = 'hidden';  // Hide body scroll when number is not zero
        hideMessage();
    }

    // Calculate the font size based on the scroll percentage
    const fontSize = maxFontSize - (maxFontSize * scrollPercentage);
    numberElement.style.fontSize = `${fontSize}px`;

    // Update the number
    numberElement.textContent = updatedNumber;
}

// Listen for scroll events and update the number and font size
containerElement.addEventListener('scroll', updateNumber);

function showMessage() {
    messageElement.classList.remove('hidden');
    messageElement.classList.add('fade-in');
}

function hideMessage() {
    messageElement.classList.remove('fade-in');
    messageElement.classList.add('hidden');
}
