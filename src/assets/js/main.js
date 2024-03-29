import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import emailJsKey from './data';
import '../styles/styles.css'

document.addEventListener('DOMContentLoaded', function () {
  // Delay AOS initialization by 100 milliseconds
  setTimeout(function() {
    AOS.init();
  }, 100);
});

(function() {
  emailjs.init(emailJsKey);
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

          Swal.fire({
          title: 'Sending...',
          allowOutsideClick: false,
          onBeforeOpen: () => {
              Swal.showLoading();
          }
      });
    
      // these IDs from the previous steps
      emailjs.sendForm('service_0e6fqgp', 'template_cuwcyme', this)
      .then(function() {
              Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                timer: 2000, 
                showConfirmButton: false
              });

            setTimeout(function() {
              window.location.href = window.location.href;
            }, 2000);
          })
          .catch(function() {
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong. Please try again later.',
              icon: 'error',
              timer: 3000,
              showConfirmButton: false
            });
          });
      });
    };
