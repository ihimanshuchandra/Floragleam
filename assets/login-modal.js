// Global functions for login modal
window.showLoginModal = function() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.hidden = false;
  }
};

window.closeLoginModal = function() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.hidden = true;
  }
};

window.proceedAsGuest = function() {
  // Store guest checkout preference
  localStorage.setItem('guest_checkout', 'true');
  localStorage.setItem('guest_checkout_time', Date.now().toString());
  
  // Close modal and proceed to checkout
  closeLoginModal();
  window.location.href = '/checkout';
};

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeLoginModal();
      }
    });
  }
});
