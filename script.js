// Video Filtering
function filterVideos(category) {
    let videos = document.querySelectorAll('.video');
    videos.forEach(video => {
        if (category === 'all' || video.classList.contains(category)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

// Contact Form Functionality
let messageCount = 0;
const maxMessages = 5;
const successMessage = document.getElementById('successMessage');

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (messageCount < maxMessages) {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        messageCount++;
    } else {
        alert('You have reached the maximum limit of 5 messages per day.');
    }
});
