// ========================================
// INITIALIZE AOS (Animate On Scroll)
// ========================================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    }
});

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// VIDEO PLACEHOLDER CLICK
// ========================================
const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
        // Alert user - you can replace this with actual video embed
        alert('Video demo akan ditampilkan di sini.\n\nUntuk menambahkan video:\n1. Upload video ke YouTube\n2. Ganti komentar di HTML dengan iframe YouTube\n3. Masukkan Video ID Anda');
        
        // Optional: Replace with iframe
        // const videoWrapper = this.parentElement;
        // videoWrapper.innerHTML = '<iframe width="100%" height="500" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>';
    });
}

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showAlert('Mohon isi semua field yang wajib!', 'warning');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Format email tidak valid!', 'danger');
            return;
        }
        
        // Success message
        showAlert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Here you can add AJAX call to send form data to your backend
        // Example using fetch API:
        /*
        fetch('your-backend-endpoint.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            showAlert('Pesan berhasil dikirim!', 'success');
            contactForm.reset();
        })
        .catch(error => {
            showAlert('Terjadi kesalahan. Silakan coba lagi.', 'danger');
        });
        */
    });
}

// ========================================
// ALERT HELPER FUNCTION
// ========================================
function showAlert(message, type = 'info') {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Add to body
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// MOBILE MENU AUTO CLOSE ON OUTSIDE CLICK
// ========================================
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Check if click is outside navbar
    if (navbarCollapse.classList.contains('show') && 
        !navbar.contains(event.target) && 
        !navbarToggler.contains(event.target)) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});

// ========================================
// PARALLAX EFFECT (Optional)
// ========================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.product-showcase');
    
    parallaxElements.forEach(element => {
        const speed = 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// FLOATING FEATURES ANIMATION
// ========================================
function animateFloatingFeatures() {
    const features = document.querySelectorAll('.floating-feature');
    
    features.forEach((feature, index) => {
        // Random animation delay
        const delay = Math.random() * 2;
        feature.style.animationDelay = `${delay}s`;
    });
}

// Run on page load
window.addEventListener('load', animateFloatingFeatures);

// ========================================
// LAZY LOADING IMAGES (if you add images)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// PREVENT FORM RESUBMISSION ON PAGE REFRESH
// ========================================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c🔆 Clap Bright - IoT Smart Light', 'color: #ffc107; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cWebsite Pengenalan Produk Profesional', 'color: #0d6efd; font-size: 16px; font-weight: bold;');
console.log('%cDibuat dengan ❤️ untuk Proyek PJBL IoT', 'color: #6c757d; font-size: 14px;');
console.log('---');
console.log('Tech Stack:');
console.log('• HTML5 & Bootstrap 5');
console.log('• CSS3 dengan Responsive Design');
console.log('• JavaScript (Vanilla) & AOS Animation');
console.log('• Font Awesome Icons');
console.log('---');
console.log('Fitur:');
console.log('✓ Fully Responsive (Mobile First)');
console.log('✓ Smooth Scroll & Animations');
console.log('✓ Interactive Elements');
console.log('✓ SEO Optimized');
console.log('✓ Fast Loading');

// ========================================
// PAGE LOAD PERFORMANCE LOG
// ========================================
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%cPage loaded in ${loadTime}ms`, 'color: #198754; font-weight: bold;');
});

// ========================================
// DETECT DEVICE TYPE
// ========================================
function detectDevice() {
    const width = window.innerWidth;
    let device = '';
    
    if (width < 576) {
        device = 'Mobile';
    } else if (width < 768) {
        device = 'Large Mobile';
    } else if (width < 992) {
        device = 'Tablet';
    } else if (width < 1200) {
        device = 'Desktop';
    } else {
        device = 'Large Desktop';
    }
    
    console.log(`%cDevice: ${device} (${width}px)`, 'color: #0dcaf0;');
}

// Log device on load and resize
window.addEventListener('load', detectDevice);
window.addEventListener('resize', detectDevice);

// ========================================
// ADD SMOOTH REVEAL ANIMATION
// ========================================
const revealElements = document.querySelectorAll('.feature-card, .info-box, .step-item, .contact-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Initially hide elements
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    revealObserver.observe(element);
});

// ========================================
// EASTER EGG - KONAMI CODE (Optional Fun)
// ========================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 3s linear infinite';
        showAlert('🎉 Konami Code Activated! Easter egg found!', 'info');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showAlert('Text copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Format number with thousand separator
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Get current year for copyright
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);
}

// Run on load
window.addEventListener('load', updateCopyrightYear);

// ========================================
// PRINT PAGE FUNCTION (if needed)
// ========================================
function printPage() {
    window.print();
}

// ========================================
// SHARE FUNCTIONALITY (Web Share API)
// ========================================
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: 'Clap Bright - Lampu Pintar IoT',
            text: 'Lihat produk inovatif Clap Bright - Lampu pintar yang dikontrol dengan tepukan tangan!',
            url: window.location.href
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback - copy link
        copyToClipboard(window.location.href);
    }
}

// ========================================
// END OF SCRIPT
// ========================================
console.log('%c✓ All scripts loaded successfully!', 'color: #198754; font-weight: bold;');
