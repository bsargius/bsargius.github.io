// Dark/Light Mode Toggle
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.classList.add('theme-toggle');
themeToggle.style.position = 'fixed';
themeToggle.style.top = '20px';
themeToggle.style.right = '20px';
themeToggle.style.zIndex = '1000';
themeToggle.style.background = 'var(--primary)';
themeToggle.style.color = 'white';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '50%';
themeToggle.style.width = '40px';
themeToggle.style.height = '40px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.display = 'flex';
themeToggle.style.alignItems = 'center';
themeToggle.style.justifyContent = 'center';
themeToggle.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
document.body.appendChild(themeToggle);

let darkMode = false;

themeToggle.addEventListener('click', toggleDarkLightMode);

function toggleDarkLightMode() {
    darkMode = !darkMode;
    if (darkMode) {
        document.documentElement.style.setProperty('--primary', '#64b5f6');
        document.documentElement.style.setProperty('--secondary', '#01579b');
        document.documentElement.style.setProperty('--light', '#1e1e1e');
        document.documentElement.style.setProperty('--dark', '#f5f5f5');
        document.documentElement.style.setProperty('--accent', '#ff7043');
        document.body.style.backgroundColor = '#121212';
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.style.setProperty('--primary', '#904E55');
        document.documentElement.style.setProperty('--secondary', '#252627');
        document.documentElement.style.setProperty('--light', '#F2EFE9');
        document.documentElement.style.setProperty('--tetriery', '#B68F40');
        document.documentElement.style.setProperty('--dark', '#252627');
        document.documentElement.style.setProperty('--accent', '#e74c3c');
        document.body.style.backgroundColor = 'var(--light)';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Update project card styles
    const projectCards = document.querySelectorAll('.project-card, .experience-item, .skill-item, .contact-form');
    projectCards.forEach(card => {
        if (darkMode) {
            card.style.backgroundColor = '#2d2d2d';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        } else {
            card.style.backgroundColor = 'white';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
}