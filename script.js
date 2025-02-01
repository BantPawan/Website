// Combined JavaScript File with All Features
const initTypingEffect = () => {
    const words = ["Data Scientist", "ML Engineer", "Big Data Analyst"];
    const typingElement = document.querySelector(".typing");
    if (!typingElement) return;

    let i = 0, j = 0;
    let isDeleting = false;

    const typeEffect = () => {
        const currentWord = words[i];
        if (!isDeleting && j <= currentWord.length) {
            typingElement.textContent = currentWord.substring(0, j++);
        } else if (isDeleting && j >= 0) {
            typingElement.textContent = currentWord.substring(0, j--);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) i = (i + 1) % words.length;
            setTimeout(typeEffect, 500);
            return;
        }
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    };
    typeEffect();
};

const initAboutTypingEffect = () => {
    const roles = ["Data Scientist", "Machine Learning Enthusiast", "Deep Learning Enthusiast"];
    const typingTextAbout = document.querySelector(".typing-text");
    if (!typingTextAbout) return;

    let roleIndex = 0, charIndex = 0;
    let isDeleting = false;

    const typeRole = () => {
        const currentRole = roles[roleIndex];
        if (!isDeleting) {
            typingTextAbout.textContent = currentRole.substring(0, charIndex++);
            if (charIndex <= currentRole.length) {
                setTimeout(typeRole, 100);
            } else {
                isDeleting = true;
                setTimeout(typeRole, 2000);
            }
        } else {
            typingTextAbout.textContent = currentRole.substring(0, charIndex--);
            if (charIndex >= 0) {
                setTimeout(typeRole, 50);
            } else {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 500);
            }
        }
    };
    typeRole();
};

const setupContentToggles = () => {
    // About Section Toggle
    const aboutToggleBtn = document.getElementById("toggleBtn");
    const fullSummary = document.querySelector(".full-summary");
    if (aboutToggleBtn && fullSummary) {
        aboutToggleBtn.addEventListener("click", () => {
            const isVisible = fullSummary.style.display === "block";
            fullSummary.style.display = isVisible ? "none" : "block";
            aboutToggleBtn.textContent = isVisible ? "Full Profile" : "Short Profile";
        });
    }

    // Skills Section Toggle
    const skillsToggle = document.querySelector(".skills-toggle");
    const fullSkills = document.querySelector(".full-skills");
    if (skillsToggle && fullSkills) {
        skillsToggle.addEventListener("click", () => {
            const isVisible = fullSkills.style.display === "block";
            fullSkills.style.display = isVisible ? "none" : "block";
            skillsToggle.textContent = isVisible ? "Know More" : "Know Less";
        });
    }
};

const handleFormSubmission = () => {
    const contactForm = document.querySelector('.contact-form form');
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !message) {
            alert("Please fill out both the name and message fields.");
            return;
        }

        contactForm.reset();
        alert("Your message has been sent successfully!");
    });
};

const makeProjectsClickable = () => {
    document.querySelectorAll('.project-box').forEach(box => {
        box.addEventListener('click', (e) => {
            // Prevent triggering if clicking on nested link
            if (e.target.tagName === 'A') return;
            
            const link = box.querySelector('a');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
};

const initializeSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    initTypingEffect();
    initAboutTypingEffect();
    setupContentToggles();
    handleFormSubmission();
    makeProjectsClickable();
    initializeSmoothScroll();
});
