function moveButton() {
    const container = document.getElementById('container');
    const button = this;

    // Get the container's dimensions
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Generate random positions within the container's dimensions
    const randomX = Math.random() * (containerWidth - button.offsetWidth);
    const randomY = Math.random() * (containerHeight - button.offsetHeight);

    // Apply the new positions
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Apply the moveButton function to both mouseover and touchstart events
const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton);
