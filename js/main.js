// Sample data for faculty and team members
const facultyData = [
    
    {
        name: "Dr. R. Shivakumar",
        position: "Chairman",
        image: "assets/faculties/chairman.jpg",
        details: "Chairman\nSRM Group of Institutions\nRamapuram & Trichy"
    },
    {
        name: "Mr. S. Niranjan",
        position: "Co-Chairman",
        image: "assets/faculties/co-chairman.jpg",
        details: "Co-Chairman\nSRM Group of Institutions\nRamapuram & Trichy"
    },
    {
        name: "Dr. M. Sakthi Ganesh",
        position: "Dean E&T",
        image: "assets/faculties/dean.jpg",
        details: "Dean of Engineering & Technology"
    },
    {
        name: "Dr. Visnu Dharshini",
        position: "Campus Life Overall Coordinator",
        image: "assets/faculties/fc1.jpg",
        details: "Department of Computer Science and Engineering"
    },
    {
        name: "Dr. Monika",
        position: "Campus Life Overall Coordinator",
        image: "assets/faculties/fc2.jpg",
        details: "Department of Biotechnology"
    }
];

const teamData = [
    {
        name: "Jane Smith",
        position: "Cultural Secretary",
        image: "assets/images/team1.jpg",
        details: "Final Year, Computer Science Engineering..."
    },
    // Add more team members...
];

// Replace the slideshow functionality with this carousel code
function initCarousel() {
    const images = Array.from({length: 16}, (_, i) => 
        `assets/events/${i + 1}.jpg`
    );
    
    const carousel = document.querySelector('.carousel-inner');
    const indicators = document.querySelector('.carousel-indicators');
    let currentSlide = 0;
    
    // Create carousel items and indicators
    images.forEach((src, index) => {
        // Create carousel item
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Event ${index + 1}`;
        
        item.appendChild(img);
        carousel.appendChild(item);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });
    
    // Navigation functions
    function updateSlides() {
        document.querySelectorAll('.carousel-item').forEach((item, index) => {
            item.classList.toggle('active', index === currentSlide);
        });
        document.querySelectorAll('.indicator').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(n) {
        currentSlide = n;
        updateSlides();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        updateSlides();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        updateSlides();
    }
    
    // Add event listeners for controls
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
    
    // Auto advance slides
    setInterval(nextSlide, 3000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderFacultyGrid();
    renderTeamGrid();

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// Add this function to render faculty cards
function renderFacultyGrid() {
    const facultyGrid = document.querySelector('.faculty-grid');
    facultyGrid.innerHTML = '';

    facultyData.forEach(faculty => {
        const card = document.createElement('div');
        card.className = 'person-card';
        
        card.innerHTML = `
            <img src="${faculty.image}" alt="${faculty.name}">
            <div class="person-info">
                <h3>${faculty.name}</h3>
                <h4>${faculty.position}</h4>
                <p>${faculty.details.replace(/\n/g, '<br>')}</p>
            </div>
        `;

        // Add click event for details
        card.addEventListener('click', () => {
            // You can add modal or expand card functionality here
        });

        facultyGrid.appendChild(card);
    });
}
  