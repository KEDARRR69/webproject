// Friends Data - Add your friends' information here
const friends = [
    {
        name: 'Utkaarsh',
        images: [
            'IMG_4858.jpg',
            'IMG_0676.jpg',
            '103563297_185903402844306_2758461062154708123_n.jpg',
            'uk.jpg',
            'uk (2).jpg',
            'uk (3).jpg',
            'uk (4).jpg',
            'uk (5).jpg',
        ],
        bio: 'Helps friends without expecting anything in return, Listens patiently to others\' problems, Supports people during tough times, Treats everyone with respect',
        hobbies: 'Photography, Traveling, Reading',
        skills: 'Web Development, Graphic Design, Public Speaking',
        funFact: 'Can solve a Rubik\'s cube in under 2 minutes!',
        education: 'Bachelor of Computer Science, XYZ University (2020-2024)',
        achievements: 'Won first place in coding competition, Published 3 research papers, Volunteer of the Year 2023',
        social: {
            facebook: '#',
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Kaib',
        images: [
            'IMG_0090.JPG',
            'kaib5.jpg',
            'kaib6.jpg',
            'kaib7.png',
        ],
        bio: 'An incredible person with a passion for making the world a better place. Always spreading positivity wherever they go.',
        hobbies: 'Music, Cooking, Hiking',
        skills: 'Digital Marketing, Content Writing, Video Editing',
        funFact: 'Has visited 15 countries and counting!',
        education: 'Master of Business Administration, ABC University (2021-2023)',
        achievements: 'Started a successful startup, TEDx Speaker, Mentored 50+ students',
        social: {
            facebook: '#',
            instagram: '#',
            twitter: '#'
        }
    },
    {
        name: 'Darshan',
        images: [
            'IMG_1969.HEIC',
            '133896472_204031218032764_4918260448027232953_n.jpg',
            '157742594_445880466697315_4096058401716381120_n.jpg'
        ],
        bio: 'A talented individual who brings joy and laughter to every gathering. Their energy is absolutely contagious!',
        hobbies: 'Gaming, Sports, Art',
        skills: 'UI/UX Design, Animation, Project Management',
        funFact: 'Can speak 4 languages fluently!',
        education: 'Bachelor of Fine Arts, Design Institute (2019-2023)',
        achievements: 'Award-winning designer, Featured in design magazine, Led team of 10 designers',
        social: {
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Kedar',
        images: [
            'IMG_2911.jpg',
            '200242240_837991160174219_3156616464441777689_n.jpg',
            '244566838_4340351559374393_6856797067195928564_n.jpg'
        ],
        bio: 'An inspiring person with a heart of gold. Always ready to help others and make a positive difference in the community.',
        hobbies: 'Volunteering, Reading, Yoga',
        skills: 'Leadership, Communication, Problem Solving',
        funFact: 'Has run 5 marathons and counting!',
        education: 'Bachelor of Social Work, Community College (2018-2022)',
        achievements: 'Community Service Award, Founded local charity, Mentored 100+ youth',
        social: {
            facebook: '#',
            instagram: '#',
            linkedin: '#'
        }
    }
];

let currentFriendIndex = 0;
let currentPhotoIndex = 0;

// Generate Dropdown Menu
function generateDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    friends.forEach((friend, index) => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        if (index === currentFriendIndex) {
            item.classList.add('active');
        }
        
        item.innerHTML = `
            <img src="${friend.images[0]}" alt="${friend.name}" class="dropdown-item-image">
            <span class="dropdown-item-name">${friend.name}</span>
        `;
        
        item.addEventListener('click', () => {
            currentFriendIndex = index;
            currentPhotoIndex = 0;
            displayFriend();
            updateDropdownActive();
            closeDropdown();
        });
        
        dropdownMenu.appendChild(item);
    });
}

// Update Active State in Dropdown
function updateDropdownActive() {
    const items = document.querySelectorAll('.dropdown-item');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentFriendIndex);
    });
}

// Toggle Dropdown
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('show');
}

// Close Dropdown
function closeDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.remove('show');
}

// Display Current Friend
function displayFriend() {
    const friend = friends[currentFriendIndex];
    const friendCard = document.getElementById('friendCard');
    
    friendCard.innerHTML = `
        <div class="card-image-container">
            <button class="photo-nav-btn prev-photo" id="prevPhoto">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="card-image">
                <img src="${friend.images[currentPhotoIndex]}" alt="${friend.name}">
            </div>
            <button class="photo-nav-btn next-photo" id="nextPhoto">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="photo-counter">${currentPhotoIndex + 1} / ${friend.images.length}</div>
        </div>
        <h3 class="card-name">${friend.name}</h3>
        <p class="card-bio">${friend.bio}</p>
        <div class="card-details">
            <div class="detail-item">
                <i class="fas fa-heart"></i>
                <div>
                    <span class="detail-label">Hobbies:</span>
                    <span class="detail-value">${friend.hobbies}</span>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-star"></i>
                <div>
                    <span class="detail-label">Skills:</span>
                    <span class="detail-value">${friend.skills}</span>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-lightbulb"></i>
                <div>
                    <span class="detail-label">Fun Fact:</span>
                    <span class="detail-value">${friend.funFact}</span>
                </div>
            </div>
        </div>
        ${generateSocialIcons(friend.social, 'card-social')}
    `;
    
    // Update counter
    document.getElementById('friendCounter').textContent = `${currentFriendIndex + 1} / ${friends.length}`;
    
    // Add event listeners for photo navigation
    document.getElementById('prevPhoto').addEventListener('click', (e) => {
        e.stopPropagation();
        prevPhoto();
    });
    
    document.getElementById('nextPhoto').addEventListener('click', (e) => {
        e.stopPropagation();
        nextPhoto();
    });
}

// Navigate to Previous Photo
function prevPhoto() {
    const friend = friends[currentFriendIndex];
    currentPhotoIndex = (currentPhotoIndex - 1 + friend.images.length) % friend.images.length;
    updatePhoto();
}

// Navigate to Next Photo
function nextPhoto() {
    const friend = friends[currentFriendIndex];
    currentPhotoIndex = (currentPhotoIndex + 1) % friend.images.length;
    updatePhoto();
}

// Update Photo Only
function updatePhoto() {
    const friend = friends[currentFriendIndex];
    const cardImage = document.querySelector('.card-image img');
    const photoCounter = document.querySelector('.photo-counter');
    
    cardImage.style.opacity = '0';
    setTimeout(() => {
        cardImage.src = friend.images[currentPhotoIndex];
        cardImage.style.opacity = '1';
        photoCounter.textContent = `${currentPhotoIndex + 1} / ${friend.images.length}`;
    }, 200);
}

// Generate Social Icons
function generateSocialIcons(social, className) {
    if (!social || Object.keys(social).length === 0) return '';
    
    let icons = `<div class="${className}">`;
    
    if (social.facebook) {
        icons += `<a href="${social.facebook}" class="social-icon" target="_blank"><i class="fab fa-facebook-f"></i></a>`;
    }
    if (social.instagram) {
        icons += `<a href="${social.instagram}" class="social-icon" target="_blank"><i class="fab fa-instagram"></i></a>`;
    }
    if (social.twitter) {
        icons += `<a href="${social.twitter}" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>`;
    }
    if (social.linkedin) {
        icons += `<a href="${social.linkedin}" class="social-icon" target="_blank"><i class="fab fa-linkedin-in"></i></a>`;
    }
    
    icons += '</div>';
    return icons;
}

// Open Modal with Friend Details
function openModal() {
    const friend = friends[currentFriendIndex];
    const modal = document.getElementById('profileModal');
    
    document.getElementById('modalImage').src = friend.images[0];
    document.getElementById('modalName').textContent = friend.name;
    document.getElementById('modalBio').textContent = friend.bio;
    document.getElementById('modalEducation').textContent = friend.education;
    document.getElementById('modalAchievements').textContent = friend.achievements;
    document.getElementById('modalHobbies').textContent = friend.hobbies;
    document.getElementById('modalSkills').textContent = friend.skills;
    document.getElementById('modalFunFact').textContent = friend.funFact;
    
    const socialContainer = document.getElementById('modalSocial');
    socialContainer.innerHTML = generateSocialIcons(friend.social, 'modal-social').replace('<div class="modal-social">', '').replace('</div>', '');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners
document.getElementById('viewDetailsBtn').addEventListener('click', openModal);
document.getElementById('dropdownBtn').addEventListener('click', toggleDropdown);
document.querySelector('.close-btn').onclick = closeModal;

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDropdown();
    }
});

// Close dropdown when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    const dropdown = document.getElementById('dropdownMenu');
    const dropdownBtn = document.getElementById('dropdownBtn');
    
    if (event.target === modal) {
        closeModal();
    }
    
    if (!dropdownBtn.contains(event.target) && !dropdown.contains(event.target)) {
        closeDropdown();
    }
};

// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

generateDropdown();
displayFriend();
