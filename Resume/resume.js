document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Optional: Delay setting 'active' class until scroll ends
            setTimeout(() => {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }, 600);
        }
    });
});


// Show project details in a modal
function showDetails(project) {
    let projectDetails = {
        mask: {
            title: "Face Mask Detection + Flask API",
            description: "Built a Face Mask Detection system using OpenCV, Flask API, and MongoDB to detect masks in real-time.",
        },
        spotify: {
            title: "Spotify Clone",
            description: "A responsive clone of Spotify UI using HTML, CSS, and JavaScript. Implemented API for streaming songs.",
        },
        covid: {
            title: "COVID-19 Prediction",
            description: "Built a predictive ML model to predict COVID-19 infection rates with Flask for the backend.",
        },
        library: {
            title: "Library Management System",
            description: "Developed an interactive system using HTML, CSS, JS, and SQLite for managing books and members.",
        }
    };

    let details = projectDetails[project];
    if (details) {
        openModal(details.title, details.description);
    } else {
        openModal("Coming Soon", "More details will be available soon.");
    }
}

// Open modal with project details
function openModal(title, description) {
    const modal = document.getElementById("projectModal");
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    modal.style.display = "block";
}

// Close modal when clicked outside or close button
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal on clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function showAchievement(achievement) {
    const achievements = {
        iitkgp: {
            title: "1st Place – Hackathon at IIT Kharagpur",
            description: "Developed a real-time traffic management system using OpenCV and Flask during a 48-hour hackathon."
        },
        analytics: {
            title: "Top 10 – ML Challenge by Analytics Vidhya",
            description: "Ranked among top 10 out of 300+ participants in a predictive modeling competition."
        },
        gcloud: {
            title: "Certificate of Excellence – Google Cloud Study Jam",
            description: "Completed Google Cloud skill badges and contributed to open cloud projects."
        }
    };

    const detail = achievements[achievement];
    if (detail) {
        openModal(detail.title, detail.description);
    } else {
        openModal("Coming Soon", "Achievement details will be updated shortly.");
    }
}



// Highlight active section in navbar
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    document.querySelectorAll('section').forEach(section => {
        let top = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
            document.querySelector('nav a[href*=' + id + ']').classList.add('active');
        } else {
            document.querySelector('nav a[href*=' + id + ']').classList.remove('active');
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTop");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Form validation for contact section
function validateForm() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email === "" || message === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    alert("Thank you! Your message has been sent.");
    return true;
}
