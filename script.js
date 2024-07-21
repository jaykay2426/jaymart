

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const passwordInputs = signupForm.querySelectorAll("input[type='password']");
    const togglePasswordIcons = signupForm.querySelectorAll(".toggle-password");
    const submitButton = signupForm.querySelector("button[type='submit']");

    // Password match check
    signupForm.addEventListener("submit", function (event) {
        if (passwordInputs[0].value !== passwordInputs[1].value) {
            event.preventDefault();
            alert("Passwords do not match. Please check and try again.");
        }
    });

    // Toggle password visibility
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const input = this.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            }
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const passwordInputs = signupForm.querySelectorAll("input[type='password']");
    const togglePasswordIcons = signupForm.querySelectorAll(".toggle-password");
    const submitButton = signupForm.querySelector("button[type='submit']");

    // Password validation function
    function validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
    }

    // Password match and validation check
    signupForm.addEventListener("submit", function (event) {
        const password = passwordInputs[0].value;
        const confirmPassword = passwordInputs[1].value;

        if (password !== confirmPassword) {
            event.preventDefault();
            alert("Passwords do not match. Please check and try again.");
        } else if (!validatePassword(password)) {
            event.preventDefault();
            alert("Password must be at least 8 characters long, contain a mix of uppercase and lowercase letters, and include at least one number.");
        }
    });

    // Toggle password visibility
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const input = this.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            }
        });
    });
});














document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const passwordInput = loginForm.querySelector("input[type='password']");

    // Password validation function
    function validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
    }

    // Password validation check
    loginForm.addEventListener("submit", function (event) {
        const password = passwordInput.value;

        if (!validatePassword(password)) {
            event.preventDefault();
            alert("Password must be at least 8 characters long, contain a mix of uppercase and lowercase letters, and include at least one number.");
        }
    });
});












document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const passwordInput = loginForm.querySelector("input[type='password']");
    const errorMessage = document.getElementById("error-message");

    // Password validation function
    function validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        if (password.length < minLength) {
            return "Password must be at least 8 characters long.";
        }
        if (!hasUpperCase) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!hasLowerCase) {
            return "Password must contain at least one lowercase letter.";
        }
        if (!hasNumber) {
            return "Password must contain at least one number.";
        }
        return "";
    }

    // Password validation check
    loginForm.addEventListener("submit", function (event) {
        const password = passwordInput.value;
        const error = validatePassword(password);

        if (error) {
            event.preventDefault();
            errorMessage.textContent = error;
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }
    });
});





// Add this JavaScript to your script.js file

document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Display the alert message
    var alertMessage = document.getElementById('alert-message');
    alertMessage.style.display = 'block';
    
    // Simulate an asynchronous operation (e.g., sending a reset password email)
    setTimeout(function() {
        alertMessage.style.display = 'none';
        alert('Password reset link has been sent to your email.');
        // Optionally, redirect to another page or perform other actions here
    }, 3000); // Adjust the delay as needed
});




document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const passwordInput = signupForm.querySelector("input[type='password'][placeholder='Password']");
    const confirmPasswordInput = signupForm.querySelector("input[type='password'][placeholder='Confirm Password']");
    const submitButton = signupForm.querySelector("button[type='submit']");

    signupForm.addEventListener("submit", function (event) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert("Passwords do not match. Please check and try again.");
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Toggle wishlist icon
    const wishlistIcons = document.querySelectorAll('.wishlist i');
    
    wishlistIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    });
  
    // Subscribe form functionality
    const subscribeForm = document.querySelector('.footer-subscribe form');
    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
  
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
  });
  
  







































// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


















// script.js
document.addEventListener('DOMContentLoaded', function() {
    const categoryToggle = document.querySelector('.category-toggle');
    const sidebar = document.querySelector('.sidebar');

    categoryToggle.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    });

    // Close the sidebar if clicked outside
    document.addEventListener('click', function(e) {
        if (!categoryToggle.contains(e.target) && !sidebar.contains(e.target)) {
            sidebar.style.display = 'none';
        }
    });
});





























document.addEventListener("DOMContentLoaded", function() {
    // Select elements and add animation classes
    const contentElement = document.querySelector('.content');
    const imageElement = document.querySelector('.image');

    contentElement.classList.add('slide-from-left');
    imageElement.classList.add('slide-from-right');
});





















function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
    // Show the selected section
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }
  }




























  document.addEventListener('DOMContentLoaded', () => {
    const clothingToggle = document.querySelector('.clothing-toggle');
    const clothingCategory = document.querySelector('.clothing-category');

    clothingToggle.addEventListener('click', () => {
        clothingCategory.classList.toggle('visible');
    });
});




















































document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productImage = card.querySelector('img').src;
            const productDescription = card.querySelector('.product-description').textContent;
            const productPrice = card.querySelector('.product-price').textContent;

            // Store product details in localStorage
            localStorage.setItem('productImage', productImage);
            localStorage.setItem('productDescription', productDescription);
            localStorage.setItem('productPrice', productPrice);

            // Redirect to product details page
            window.location.href = 'product-details.html';
        });
    });
});

// On the product details page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('product-details.html')) {
        const mainImage = document.querySelector('.main-image img');
        const productImages = document.querySelectorAll('.product-images img');
        const productDescription = document.querySelector('.product-details h1');
        const productPrice = document.querySelector('.product-details .price');

        // Get product details from localStorage
        const productImage = localStorage.getItem('productImage');
        const productDescriptionText = localStorage.getItem('productDescription');
        const productPriceText = localStorage.getItem('productPrice');

        // Update the product details on the page
        if (productImage && productDescriptionText && productPriceText) {
            mainImage.src = productImage;
            productImages.forEach(img => img.src = productImage);
            productDescription.textContent = productDescriptionText;
            productPrice.textContent = productPriceText;
        }
    }
});
































document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productImage = card.dataset.image;
            const productDescription = card.dataset.description;
            const productPrice = card.dataset.price;

            // Store product details in localStorage
            localStorage.setItem('productImage', productImage);
            localStorage.setItem('productDescription', productDescription);
            localStorage.setItem('productPrice', productPrice);

            // Redirect to product details page
            window.location.href = 'product-details.html';
        });
    });
});

// On the product details page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('product-details.html')) {
        const mainImage = document.querySelector('.main-image img');
        const productImages = document.querySelectorAll('.product-images img');
        const productDescription = document.querySelector('.product-details h1');
        const productPrice = document.querySelector('.product-details .price');

        // Get product details from localStorage
        const productImage = localStorage.getItem('productImage');
        const productDescriptionText = localStorage.getItem('productDescription');
        const productPriceText = localStorage.getItem('productPrice');

        // Update the product details on the page
        if (productImage && productDescriptionText && productPriceText) {
            mainImage.src = productImage;
            productImages.forEach(img => img.src = productImage);
            productDescription.textContent = productDescriptionText;
            productPrice.textContent = productPriceText;
        }
    }
});
