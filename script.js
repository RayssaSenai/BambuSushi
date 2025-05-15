 document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('show');
      });
      
      // Smooth Scrolling for Internal Links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          document.querySelector('.nav-links').classList.remove('show');
        });
      });
      
      // Form Submission (placeholder)
      document.querySelector('.contact-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
        this.reset();
      });