// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Image modal for gallery section
  const galleryImages = document.querySelectorAll('.galleryPic');
  
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <img src="${this.src}" class="modal-image" />
        </div>
      `;
      document.body.appendChild(modal);
  
      const closeBtn = modal.querySelector('.close-btn');
      closeBtn.onclick = () => {
        document.body.removeChild(modal);
      };
  
      // Close modal on clicking outside the image
      modal.onclick = (e) => {
        if (e.target === modal) {
          document.body.removeChild(modal);
        }
      };
    });
  });
  
  // Ensure Discover buttons have interactive functionality
  const discoverButtons = document.querySelectorAll('.btn-outline-light');
  
  discoverButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Explore the wonders of tourism with us!');
    });
  });
  
  // Event Listener for Input Subscription
  const subscribeButton = document.querySelector('.btn-warning');
  
  if (subscribeButton) {
    subscribeButton.addEventListener('click', (e) => {
      const emailInput = document.querySelector('input[type="email"]');
  
      if (emailInput.value) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = ''; // Clear input after submission
      } else {
        alert('Please enter a valid email address!');
      }
    });
  });
  