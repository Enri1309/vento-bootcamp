// ========================================
// LANDING PAGE KIT - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {

  // ========================================
  // NAVBAR FUNCTIONALITY
  // ========================================

  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  const navbarLinks = document.querySelectorAll('.navbar-link');

  // Mobile menu toggle
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');

      // Animate hamburger icon
      const spans = navbarToggle.querySelectorAll('span');
      if (navbarMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // Close mobile menu when clicking on a link
  navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navbarMenu.classList.remove('active');
        const spans = navbarToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  });

  // Navbar scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (navbar) {
      if (currentScroll > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    lastScroll = currentScroll;
  });

  // ========================================
  // SMOOTH SCROLLING
  // ========================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // CONTACT FORM HANDLING
  // ========================================

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone')?.value || '',
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        showNotification('Per favore compila tutti i campi obbligatori', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showNotification('Inserisci un indirizzo email valido', 'error');
        return;
      }

      // Simulate form submission
      // NOTA: Sostituisci questa parte con la tua logica di invio reale
      // (es: fetch API, EmailJS, FormSpree, ecc.)

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Invio in corso...';
      submitButton.disabled = true;

      // Simulazione invio
      setTimeout(() => {
        console.log('Form Data:', formData);
        showNotification('Messaggio inviato con successo! Ti risponderemo presto.', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1500);

      // ESEMPIO CON FORMSPREE:
      /*
      fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        showNotification('Messaggio inviato con successo!', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      })
      .catch(error => {
        showNotification('Errore nell\'invio. Riprova più tardi.', 'error');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      });
      */
    });
  }

  // ========================================
  // NOTIFICATION SYSTEM
  // ========================================

  function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background-color: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--error)' : 'var(--info)'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
      max-width: 400px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  // ========================================
  // SCROLL ANIMATIONS
  // ========================================

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll('.card, .feature-card, .testimonial-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // ========================================
  // PRICING CARD INTERACTION
  // ========================================

  const pricingCards = document.querySelectorAll('.pricing-card');

  pricingCards.forEach(card => {
    const button = card.querySelector('.btn');

    if (button) {
      button.addEventListener('click', function() {
        const planName = card.querySelector('.pricing-name').textContent;
        showNotification(`Hai selezionato il piano ${planName}. Verrai reindirizzato alla pagina di checkout.`, 'info');

        // Qui puoi aggiungere la logica per reindirizzare alla pagina di checkout
        // window.location.href = '/checkout?plan=' + planName.toLowerCase();
      });
    }
  });

  // ========================================
  // UTILITY FUNCTIONS
  // ========================================

  // Detect if user is on mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Handle window resize
  const handleResize = debounce(function() {
    // Close mobile menu on resize to desktop
    if (!isMobile() && navbarMenu) {
      navbarMenu.classList.remove('active');
    }
  }, 250);

  window.addEventListener('resize', handleResize);

});

// ========================================
// CSS ANIMATIONS (Add to your CSS if not present)
// ========================================

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
