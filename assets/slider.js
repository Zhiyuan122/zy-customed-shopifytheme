// Slider JavaScript for Testimonials Carousel

class TestimonialSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
        this.dots = [];
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.track = document.getElementById('testimonial-track');
        this.dotsContainer = document.getElementById('carousel-dots');
        
        this.init();
    }
    
    init() {
        // Get all testimonial cards
        this.slides = this.track.querySelectorAll('.testimonial-card');
        this.totalSlides = this.slides.length;
        
        if (this.totalSlides === 0) return;
        
        // Create dots
        this.createDots();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Show first slide
        this.showSlide(0);
        
        // Auto-play functionality
        this.startAutoPlay();
    }
    
    createDots() {
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => this.showSlide(i));
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        }
    }
    
    setupEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    showSlide(index) {
        // Update current slide
        this.currentSlide = index;
        
        // Calculate transform
        const slideWidth = this.slides[0].offsetWidth + 30; // Include margin
        const transform = -index * slideWidth;
        
        // Apply transform to track
        this.track.style.transform = `translateX(${transform}px)`;
        
        // Update dots
        this.updateDots();
        
        // Update button states
        this.updateButtons();
    }
    
    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    updateButtons() {
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 0;
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        }
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.showSlide(prevIndex);
    }
    
    startAutoPlay() {
        // Auto-advance slides every 5 seconds
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

// Utility functions
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

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if testimonials section exists
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
        new TestimonialSlider();
    }
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize slider if needed
    const slider = window.testimonialSlider;
    if (slider) {
        slider.showSlide(slider.currentSlide);
    }
}, 250));

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestimonialSlider;
} 