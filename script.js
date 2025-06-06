// Confetti effect
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#4a90e2', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiContainer.appendChild(confetti);
        
        gsap.to(confetti, {
            y: '100vh',
            x: Math.random() * 200 - 100 + 'px',
            rotation: Math.random() * 360,
            duration: Math.random() * 3 + 2,
            ease: 'none',
            repeat: -1,
            delay: Math.random() * 2
        });
    }
}

// Floating elements animation
function animateFloatingElements() {
    const elements = document.querySelectorAll('.floating-item');
    
    elements.forEach((element, index) => {
        gsap.to(element, {
            y: '100vh',
            duration: 10 + index * 2,
            ease: 'none',
            repeat: -1,
            delay: index * 0.5
        });
    });
}

// Achievement card hover effect
function setupAchievementCard() {
    const card = document.querySelector('.achievement-card');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// Initialize all animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    animateFloatingElements();
    setupAchievementCard();
    
    // Animate hero content
    gsap.from('.hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Animate achievement card
    gsap.from('.achievement-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });
});
