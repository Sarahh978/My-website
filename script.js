//navbar
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const hamburgerIcon = document.querySelector(".hamburger i");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        // Toggle between bars and close icons
        if (navLinks.classList.contains("show")) {
            hamburgerIcon.classList.remove("fa-bars");
            hamburgerIcon.classList.add("fa-times");
        } else {
            hamburgerIcon.classList.remove("fa-times");
            hamburgerIcon.classList.add("fa-bars");
        }
    });
});




// feature 
// Slide-in Animation for Feature Cards
document.addEventListener("DOMContentLoaded", () => {
    const featureCards = document.querySelectorAll(".feature-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    featureCards.forEach(card => {
        observer.observe(card);
    });
});



// product section
// Slide-in Animation for Product Cards
document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    productCards.forEach(card => {
        observer.observe(card);
    });
});




// customer
document.addEventListener("DOMContentLoaded", function () {
    let testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            testimonial.style.opacity = "0";
            if (i === index) {
                testimonial.classList.add("active");
                setTimeout(() => {
                    testimonial.style.opacity = "1";
                }, 100);
            }
        });
    }

    document.querySelector(".prev-btn").addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    }, 5000);

    // Show first testimonial on page load
    showTestimonial(currentIndex);
});




//faq section
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            item.classList.toggle("active");

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});





// CTA section
document.addEventListener("DOMContentLoaded", function () {
    const ctaContainer = document.querySelector(".cta-container");
    
    // Show CTA with fade-in effect when scrolled into view
    function revealCTA() {
        const ctaPosition = ctaContainer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (ctaPosition < screenPosition) {
            ctaContainer.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealCTA);
});





//shop section
// Select all shop items
const shopItems = document.querySelectorAll('.shop-item');

shopItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});




// why our items are un matched
// Select all cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});





// why chose us section
document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature-item");

    function revealFeatures() {
        features.forEach((feature, index) => {
            setTimeout(() => {
                feature.style.opacity = "1";
                feature.style.transform = "translateY(0)";
            }, index * 300);
        });
    }

    // Trigger animation when the section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                revealFeatures();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".why-choose-us"));
});





// craftmanship section
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function revealOnScroll() {
        timelineItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight - 100) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});





// esclusive services
document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});






// category section
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = "none";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = "transform 0.5s ease-in-out";
        card.style.transform = "rotateY(0) rotateX(0)";
    });
});





//best selling products - category section
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    const productWidth = document.querySelector(".product-card").offsetWidth + 20; // Card width + gap
    const maxIndex = document.querySelectorAll(".product-card").length - 3; // Adjust for visible items

    function updateSlider() {
        slider.style.transform = `translateX(-${index * productWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < maxIndex) {
            index++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    // Auto-slide function
    function autoSlide() {
        if (index < maxIndex) {
            index++;
        } else {
            index = 0;
        }
        updateSlider();
    }

    setInterval(autoSlide, 5000); // Auto-slide every 5 seconds
});






// luxury experience
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".experience-item");

    function animateItems() {
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, index * 200);
        });
    }

    window.addEventListener("scroll", function () {
        const section = document.querySelector(".luxury-experience");
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            animateItems();
        }
    });

    // Initially hide the items
    items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(-50px)";
    });
});






// membership benefits
document.addEventListener("DOMContentLoaded", function () {
    const benefitCards = document.querySelectorAll(".benefit-card");

    benefitCards.forEach((card) => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});






// category - men section
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let scrollAmount = 0;
    const scrollMax = slider.scrollWidth - slider.clientWidth;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    function scrollLeft() {
        if (scrollAmount > 0) {
            scrollAmount -= 300;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }

    function scrollRight() {
        if (scrollAmount < scrollMax) {
            scrollAmount += 300;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }

    function touchStart(event) {
        isDragging = true;
        startPos = event.type.includes("mouse") ? event.clientX : event.touches[0].clientX;
        animationID = requestAnimationFrame(animation);
        slider.style.transition = "none";
    }

    function touchMove(event) {
        if (!isDragging) return;
        const currentPosition = event.type.includes("mouse") ? event.clientX : event.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
    }

    function touchEnd() {
        cancelAnimationFrame(animationID);
        isDragging = false;
        prevTranslate = currentTranslate;
        slider.style.transition = "transform 0.5s ease-in-out";
    }

    function animation() {
        slider.style.transform = `translateX(${currentTranslate}px)`;
        if (isDragging) requestAnimationFrame(animation);
    }

    nextBtn.addEventListener("click", scrollRight);
    prevBtn.addEventListener("click", scrollLeft);
    slider.addEventListener("mousedown", touchStart);
    slider.addEventListener("mousemove", touchMove);
    slider.addEventListener("mouseup", touchEnd);
    slider.addEventListener("mouseleave", touchEnd);
    slider.addEventListener("touchstart", touchStart);
    slider.addEventListener("touchmove", touchMove);
    slider.addEventListener("touchend", touchEnd);
});





//hero section category men
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero-section");
    const images = [
        "imges/men-banner.jpeg",
        "imges/men3.jpeg",
        "imges/men2.jpeg",
        "imges/men4.jpeg",
    ];
    let index = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    setInterval(changeBackground, 5000); // Change every 5 seconds
    changeBackground(); // Initial Call
});





//men choice
document.querySelectorAll('.choice-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});




// elite membership
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".perk-card");

    const revealCards = () => {
        const triggerBottom = window.innerHeight * 0.8;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealCards);
    revealCards();
});







//men wardrobe
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    let index = 0;

    function moveSlide(n) {
        index += n;
        if (index >= slide.length) index = 0;
        if (index < 0) index = slide.length - 1;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));

    setInterval(() => moveSlide(1), 5000);
});






//bespoke tailoring
function changeSuit(imagePath) {
    document.getElementById("suit-display").src = imagePath;
    document.querySelector(".suit-display-wrapper").style.transform = "rotateY(10deg)";
    setTimeout(() => {
        document.querySelector(".suit-display-wrapper").style.transform = "rotateY(0)";
    }, 500);
}

function changeFabric(fabric) {
    let suitImg = document.getElementById("suit-display");
    let shadowColor = "";

    if (fabric === "wool") {
        shadowColor = "rgba(212, 175, 55, 0.6)";
    } else if (fabric === "silk") {
        shadowColor = "rgba(255, 255, 255, 0.4)";
    } else if (fabric === "cashmere") {
        shadowColor = "rgba(150, 100, 50, 0.5)";
    }

    suitImg.style.boxShadow = `0 0 30px ${shadowColor}`;
}







//Elite Lounge
document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Your inquiry has been submitted! We will contact you shortly.");
});







// WOMEN SECTION - HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "imges/women1.jpeg",
        "imges/women2.jpeg",
        "imges/women3.jpeg"
    ];
    
    let currentIndex = 0;
    const heroSection = document.querySelector(".women-hero");

    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000); // Change image every 5 seconds
});






// women wardrobe
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slideImages = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;

    function showSlide(n) {
        index = (n + slideImages.length) % slideImages.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener("click", () => showSlide(index - 1));
    nextButton.addEventListener("click", () => showSlide(index + 1));

    // Auto-slide every 5 seconds
    setInterval(() => showSlide(index + 1), 5000);
});







// women lookbook section
document.addEventListener("DOMContentLoaded", function () {
    const lookbookSlides = document.querySelectorAll(".lookbook-slide");

    function revealSlides() {
        lookbookSlides.forEach((slide, index) => {
            setTimeout(() => {
                slide.style.opacity = "1";
                slide.style.transform = "translateX(0)";
            }, index * 300);
        });
    }

    window.addEventListener("scroll", function () {
        let sectionPosition = document.querySelector(".womens-lookbook").offsetTop;
        let scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionPosition) {
            revealSlides();
        }
    });
});





//women accesories
// Product Details Modal
function showDetails(productId) {
    const modal = document.getElementById("product-modal");
    const title = document.getElementById("product-title");
    const description = document.getElementById("product-description");

    const products = {
        1: { title: "Luxury Jewelry", desc: "Exquisite diamonds & gold pieces that redefine luxury." },
        2: { title: "Designer Handbags", desc: "Crafted for elegance, designed for luxury." },
        3: { title: "Luxury Watches", desc: "Timepieces that blend tradition with modernity." },
        4: { title: "Designer Eyewear", desc: "Premium frames for the ultimate fashion statement." }
    };

    title.innerText = products[productId].title;
    description.innerText = products[productId].desc;

    modal.style.display = "block";
}

// Close Modal
function closeDetails() {
    document.getElementById("product-modal").style.display = "none";
}






// women lounge
document.addEventListener("DOMContentLoaded", function () {
    const benefitCards = document.querySelectorAll(".benefit-card");

    function revealOnScroll() {
        benefitCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight * 0.9) {
                card.style.transform = "translateY(0)";
                card.style.opacity = "1";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
});




//cta section
document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".word");

    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
        }, index * 400);
    });
});







// HERO SECTION - ELECTRONICS SECTION
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".hero-slider img");
    let currentIndex = 0;

    function slideImages() {
        images.forEach((img, index) => {
            img.style.opacity = index === currentIndex ? "1" : "0";
        });
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(slideImages, 5000); // Change image every 5 seconds
});





// DEALS CATEGORY SECTION


