class EnvelopeAnimation {
    constructor(envelopeId, autoOpenDelay = 1500) {
        this.envelope = document.getElementById(envelopeId);
        this.lid1 = document.getElementById('lid1');
        this.lid = document.getElementById('lid');
        this.letter = document.getElementById('letter');
        this.autoOpenDelay = autoOpenDelay;
        this.isOpen = false;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.autoOpen();
    }

    setupEventListeners() {
        this.envelope.addEventListener('click', () => this.open());
    }

    open() {
        if (this.isOpen) return;

        this.lid1.classList.add('open');
        this.lid.classList.add('open');

        setTimeout(() => {
            this.letter.classList.add('visible');
        }, 500);

        this.isOpen = true;
    }

    autoOpen() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.open();
            }, this.autoOpenDelay);
        });
    }
}

class ParticlesBackground {
    constructor(containerId) {
        this.containerId = containerId;
        this.init();
    }

    init() {
        tsParticles.load(this.containerId, {
            fpsLimit: 30,
            particles: {
                color: { value: "#ffd5df" },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "out" }
                },
                number: { value: 100 },
                opacity: {
                    value: { min: 0.1, max: 1 },
                    animation: { enable: true, speed: 1, minimumValue: 0.1 }
                },
                shape: { type: "circle" },
                size: { value: { min: 0.5, max: 5 } }
            }
        });
    }
}

class StoryBook {
    constructor() {
        this.stories = [
            {
                title: "Once Upon a Twirl...",
                image: "/assets/story/cover.png",
                text: "Every little ballerina has a story that begins with dreams of dancing under the spotlight. Come along as we pirouette through the magical years of birthdays, tutus, and twirls! Let the curtain rise on this enchanting journey... 🌟"
            },
            {
                title: "My First Dance!",
                image: "/assets/story/first.png",
                text: "One year old and already stealing the show! My first birthday was filled with tiny tutus, baby steps, and the beginning of something magical. The stage was set for a lifetime of beautiful moments!"
            },
            {
                title: "Two Twirls of Joy!",
                image: "/assets/story/second.png",
                text: "At two, I'm learning to spin and leap! Two candles on my cake and twice the giggles. Every day is a new dance, and I'm discovering the rhythm of life with every little step!"
            },
            {
                title: "Three Graceful Years!",
                image: "/assets/story/third.png",
                text: "Three years of pirouettes and plies! I can twirl on my tiptoes (well, almost!) and my tutus are getting fluffier. Watch me dance through this magical year of growing and glowing!"
            },
            {
                title: "Four Fabulous Leaps!",
                image: "/assets/story/fourth.png",
                text: "Four candles dancing like spotlights on my stage! I'm practicing my grand jetés and dreaming bigger dreams. Every birthday is a new performance, and this one is my best encore yet!"
            },
            {
                title: "Fifth Position at Five!",
                image: "/assets/story/fifth.png",
                text: "Five years of twirling through life! I've mastered my ballet positions, and my arabesques are getting higher. With ribbon in my hair and magic in my feet, I'm ready to dance into new adventures!"
            },
            {
                title: "Six and En Pointe!",
                image: "/assets/story/sixth.png",
                text: "Six wonderful years of birthdays and ballet! I'm a little ballerina with big dreams, spinning through life with grace and sparkles. Each year is another beautiful chapter in my dance story!"
            },
            {
                title: "Let's Celebrate! 🎉",
                image: "/assets/story/cover.png",
                text: "The music is playing, the stage is set, and it's time for the grandest performance of all - my birthday celebration! Put on your dancing shoes and join me for a magical party filled with tutus, twirls, and treats! 💖"
            }
        ];

        this.currentStory = 0;
        this.imageCache = new Map();
        this.init();
        this.preloadImages();
    }

    init() {
        this.initializeIndicators();
        this.setupNextButton();
        this.setupBackButton();
        this.setupIntersectionObserver();

        const backButton = document.getElementById('backButton');
        if (backButton) {
            this.updateBackButton(backButton);
        }
    }

    preloadImages() {
        this.stories.forEach((story, index) => {
            const img = new Image();
            img.onload = () => {
                this.imageCache.set(index, img);
                // console.log(`Preloaded story ${index + 1} image`);
            };
            img.onerror = () => {
                console.warn(`Failed to load story ${index + 1} image:`, story.image);
            };
            img.src = story.image;
        });
    }

    initializeIndicators() {
        const indicator = document.getElementById('storyIndicator');
        if (!indicator) return;

        indicator.innerHTML = '';
        const totalDots = this.stories.length + 1;
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'story-dot';
            if (i === 0) dot.classList.add('active');
            indicator.appendChild(dot);
        }
    }

    setupNextButton() {
        const nextButton = document.getElementById('nextButton');
        if (!nextButton) return;

        const totalSlides = this.stories.length + 1;
        nextButton.addEventListener('click', () => {
            if (this.currentStory < totalSlides - 1) {
                this.currentStory++;
                this.updateStory();
                console.log(this.currentStory);
            } else {
                this.scrollToPartySection();
                console.log('Moving to next section...');
            }
        });
    }

    setupBackButton() {
        const backButton = document.getElementById('backButton');
        if (!backButton) return;

        backButton.addEventListener('click', () => {
            // If on last story and user clicks "Check it again", go to first story
            if (this.currentStory === this.stories.length) {
                this.currentStory = 1;
                this.updateStory();
                return;
            }

            if (this.currentStory > 0) {
                this.currentStory--;
                if (this.currentStory === 0) {
                    this.showPlaceholder();
                } else {
                    this.updateStory();
                }
            } else {
                console.log('Already at first story...');
            }
        });
    }

    showPlaceholder() {
        document.getElementById('storyTitle').textContent = "Once upon a time...";
        document.getElementById('storyText').textContent = "Once upon a time, there was a little one whose birthdays were filled with wonder and magic. Are you ready to discover the enchanting tale of my growing years? Let's turn the page and begin! 🎂";
        document.getElementById('storyImage').src = "https://ik.imagekit.io/e3wiv79bq/header-image-Photoroom.png?updatedAt=1758197452989";

        const backButton = document.getElementById('backButton');
        if (backButton) {
            this.updateBackButton(backButton);
        }

        this.updateIndicators();
    }

    updateStory() {
        const elements = {
            storyCard: document.getElementById('storyCard'),
            storyTitle: document.getElementById('storyTitle'),
            storyImage: document.getElementById('storyImage'),
            storyText: document.getElementById('storyText'),
            nextButton: document.getElementById('nextButton'),
            backButton: document.getElementById('backButton'),
        };

        if (!elements.storyCard) return;

        elements.storyCard.classList.add('turning');

        setTimeout(() => {
            const story = this.stories[this.currentStory - 1];

            elements.storyTitle.textContent = story.title;

            // Use cached image
            const cachedImg = this.imageCache.get(this.currentStory - 1);
            if (cachedImg) {
                elements.storyImage.src = cachedImg.src;
            } else {
                elements.storyImage.src = story.image;
            }

            elements.storyImage.alt = `Story illustration ${this.currentStory + 1}`;
            elements.storyText.textContent = story.text;
            document.getElementById('story-section').scrollIntoView({ behavior: 'smooth', block: 'end' });

            this.updateIndicators();
            this.updateNextButton(elements.nextButton);
            this.updateBackButton(elements.backButton);

            elements.storyCard.classList.remove('turning');
        }, 300);
    }

    updateIndicators() {
        const dots = document.querySelectorAll('.story-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentStory);
        });
    }

    updateNextButton(button) {
        const totalSlides = this.stories.length + 1; // +1 for placeholder
        const isLastStory = this.currentStory === totalSlides - 1;
        button.innerHTML = isLastStory
            ? `Party Time! <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>`
            : `Next <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>`;
    }

    updateBackButton(button) {
        const isFirstSlide = this.currentStory === 0;
        const isLastStory = this.currentStory === this.stories.length;

        // hide the back button
        if (isFirstSlide) {
            button.style.opacity = '0';
            return;
        }

        button.style.opacity = '1';

        button.innerHTML = isLastStory
            ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg> Replay`
            : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg> Back`;
    }

    scrollToPartySection() {
        const galerySection = document.getElementById('gallery-section');
        galerySection.classList.add('visible');
        galerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        const polaroidSection = document.getElementById('polaroid-section');
        polaroidSection.classList.add('visible');

        const eventSection = document.getElementById('event-details');
        eventSection.classList.add('visible');

        const dressSection = document.getElementById('dress-code');
        dressSection.classList.add('visible');

        const rsvpSection = document.getElementById('rsvp-section');
        rsvpSection.classList.add('visible');

        const guestSection = document.getElementById('guest-list-section');
        guestSection.classList.add('visible');

        const footerSection = document.getElementById('footer-section');
        footerSection.classList.add('visible');

        // console.log('Moving to party section...');
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.story-card')?.classList.add('visible');
                }
            });
        });

        const storySection = document.getElementById('story-section');
        if (storySection) observer.observe(storySection);
    }
}

class PolaroidCarousel {
    constructor(containerId, images) {
        this.container = document.getElementById(containerId);
        this.galleryImages = images;
        this.polaroids = [];
        this.isAnimating = false;
        this.rotations = [-2, 1, -1, 0, 0];

        this.init();
    }

    init() {
        this.createPolaroids();
        this.updateStack();
        this.container.addEventListener('click', () => this.handleClick());
    }

    createPolaroids() {
        this.galleryImages.forEach((item, index) => {
            const polaroid = document.createElement('div');
            polaroid.className = 'polaroid';
            polaroid.dataset.index = index;

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.alt;

            // const caption = document.createElement('div');
            // caption.className = 'caption';
            // caption.textContent = item.alt;

            polaroid.appendChild(img);
            // polaroid.appendChild(caption);
            this.container.appendChild(polaroid);

            this.polaroids.push(polaroid);
        });
    }

    updateStack() {
        this.polaroids.forEach((polaroid, idx) => {
            const offset = Math.min(idx * 4, 12);
            const rotation = this.rotations[idx] || 0;
            polaroid.style.transform = `translateY(${offset}px) rotate(${rotation}deg)`;
            polaroid.style.zIndex = this.polaroids.length - idx;
            polaroid.dataset.index = idx;
        });
    }

    handleClick() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        const firstPolaroid = this.polaroids[0];

        firstPolaroid.classList.add('animating');

        setTimeout(() => {
            firstPolaroid.classList.remove('animating');
            this.polaroids.push(this.polaroids.shift());
            this.updateStack();
            this.isAnimating = false;
        }, 600);
    }
}

const galleryImages = [
    {
        image: "/assets/story/first.png",
        alt: "First Birthday"
    },
    {
        image: "/assets/story/second.png",
        alt: "Second Birthday"
    },
    {
        image: "/assets/story/third.png",
        alt: "Third Birthday"
    },
    {
        image: "/assets/story/fourth.png",
        alt: "Fourth Birthday"
    },
    {
        image: "/assets/story/fifth.png",
        alt: "Fifth Birthday"
    },
    {
        image: "/assets/story/sixth.png",
        alt: "Sixth Birthday"
    }
];

class EventDetailsManager {
    constructor() {
        this.eventDetails = {
            title: "Damaris Alexa's 7th Birthday Party",
            start: "2025-11-09T10:00:00",
            end: "2025-11-09T14:00:00",
            location: "Captain's Place (Private Pool and Events Place), 24XP+J63, Malvar, Batangas, Philippines",
            description: "Join us for an amazing birthday celebration with games, cake, and fun!"
        };

        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    container.classList.add('event-details-animated');

                    setTimeout(() => container.querySelector('.calendar-section')?.classList.add('visible'), 100);
                    setTimeout(() => container.querySelector('.map-section')?.classList.add('visible'), 300);
                    setTimeout(() => this.initializeCalendar(), 500);
                }
            });
        });

        const eventDetailsSection = document.getElementById('event-details');
        if (eventDetailsSection) observer.observe(eventDetailsSection);
    }

    initializeCalendar() {
        const calendarEl = document.getElementById('calendar');
        if (!calendarEl || typeof FullCalendar === 'undefined') return;

        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            initialDate: '2025-11-09',
            height: 'auto',
            dayHeaderFormat: { weekday: 'narrow' },
            headerToolbar: { left: 'title', center: '', right: '' },
            events: [{
                title: this.eventDetails.title,
                start: this.eventDetails.start,
                end: this.eventDetails.end,
                backgroundColor: 'transparent',
                borderColor: '',
                textColor: '#FFFFFF'
            }],
            eventClick: (info) => {
                info.jsEvent.preventDefault();
                alert(`🎉 ${info.event.title}\n📅 ${info.event.start.toLocaleDateString()}\n⏰ ${info.event.start.toLocaleTimeString()} - ${info.event.end.toLocaleTimeString()}`);
            }
        });

        calendar.render();
        this.setupCalendarButton();
    }

    setupCalendarButton() {
        const addToCalendarBtn = document.getElementById('addToCalendar');
        if (addToCalendarBtn) {
            addToCalendarBtn.addEventListener('click', () => this.addToGoogleCalendar());
        }
    }

    addToGoogleCalendar() {
        const startDate = new Date(this.eventDetails.start).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
        const endDate = new Date(this.eventDetails.end).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(this.eventDetails.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(this.eventDetails.description)}&location=${encodeURIComponent(this.eventDetails.location)}`;

        window.open(googleCalendarUrl, '_blank');
    }
}

// =============================================================================
// RSVP & DRESS CODE MODULE
// =============================================================================

class RSVPManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupFormLoading();
        this.setupIntersectionObservers();
    }

    setupFormLoading() {
        const rsvpForm = document.getElementById('rsvpForm');
        const formLoading = document.getElementById('formLoading');

        setTimeout(() => {
            if (formLoading) formLoading.style.display = 'none';
            if (rsvpForm) rsvpForm.style.display = 'block';
        }, 2000);

        if (rsvpForm) {
            rsvpForm.addEventListener('load', () => {
                if (formLoading) formLoading.style.display = 'none';
                rsvpForm.style.display = 'block';
            });
        }
    }

    setupIntersectionObservers() {
        const rsvpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const rsvpCard = entry.target.querySelector('.rsvp-card');
                    if (rsvpCard) rsvpCard.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const dressCodeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const header = entry.target.querySelector('.section-header');
                    const colorTheme = entry.target.querySelector('.color-theme');
                    const content = entry.target.querySelector('.dress-code-content');

                    if (header) header.classList.add('visible');
                    if (colorTheme) setTimeout(() => colorTheme.classList.add('visible'), 200);
                    if (content) setTimeout(() => content.classList.add('visible'), 400);
                }
            });
        }, { threshold: 0.1 });

        const dressCodeSection = document.getElementById('dress-code');
        const rsvpSection = document.getElementById('rsvp-section');

        if (dressCodeSection) dressCodeObserver.observe(dressCodeSection);
        if (rsvpSection) rsvpObserver.observe(rsvpSection);
    }
}

class GuestListManager {
    constructor() {
        this.checkGuestBtn = document.getElementById('checkGuestBtn');
        this.guestListContent = document.getElementById('guestListContent');
        this.guestCards = document.querySelectorAll('.guest-card');
        this.thankYouMessage = document.getElementById('thankYouMessage');

        // Debug logging
        // console.log('=== ELEMENT SELECTION DEBUG ===');
        // console.log('Check button found:', !!this.checkGuestBtn);
        // console.log('Content found:', !!this.guestListContent);
        // console.log('Cards found:', this.guestCards.length);
        // console.log('Thank you message found:', !!this.thankYouMessage);

        if (!this.checkGuestBtn || !this.guestListContent) {
            console.error('Critical elements not found!');
            return;
        }

        this.init();
    }

    init() {
        this.setupMobileToggle();
        this.setupIntersectionObserver();
        this.setupResizeHandler();
    }

    setupMobileToggle() {
        if (!this.checkGuestBtn || !this.guestListContent) return;

        this.checkGuestBtn.addEventListener('click', () => {
            this.guestListContent.classList.toggle('show');

            if (this.guestListContent.classList.contains('show')) {
                this.showGuestList();
            } else {
                this.hideGuestList();
            }
        });
    }

    showGuestList() {
        console.log('=== SHOW GUEST LIST DEBUG ===');
        console.log('Button element:', this.checkGuestBtn);
        console.log('Content element:', this.guestListContent);
        console.log('Button current HTML:', this.checkGuestBtn.innerHTML);
        console.log('Content current classes:', this.guestListContent.className);
        console.log('Content current display:', getComputedStyle(this.guestListContent).display);

        // Update button text
        this.checkGuestBtn.innerHTML = `
            Hide Guest List
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                <path d="m18 15-6-6-6 6"/>
            </svg>
        `;

        // console.log('Button HTML after update:', this.checkGuestBtn.innerHTML); 

        // Force display change
        this.guestListContent.style.display = 'block';
        console.log('Content display after force:', getComputedStyle(this.guestListContent).display);

        setTimeout(() => {
            this.guestListContent.classList.add('visible');
            console.log('Added visible class. Classes now:', this.guestListContent.className);
            this.animateCards();
            this.scrollToContent();
        }, 100);
    }

    hideGuestList() {
        this.checkGuestBtn.innerHTML = `
            Check Guest List
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                <path d="m9 18 6-6-6-6"/>
            </svg>
        `;

        this.guestListContent.classList.remove('visible');
        this.guestCards.forEach(card => card.classList.remove('visible'));
        this.thankYouMessage.classList.remove('visible');
    }

    animateCards() {
        this.guestCards.forEach((card, index) => {
            setTimeout(() => card.classList.add('visible'), index * 150);
        });

        setTimeout(() => {
            this.thankYouMessage.classList.add('visible');
        }, this.guestCards.length * 150 + 200);
    }

    scrollToContent() {
        setTimeout(() => {
            this.guestListContent.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 300);
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const header = document.getElementById('guestListHeader');
                    if (header) header.classList.add('visible');

                    if (window.innerWidth > 768) {
                        setTimeout(() => {
                            this.guestListContent.classList.add('visible');
                            this.animateCards();
                        }, 300);
                    }
                }
            });
        }, { threshold: 0.1 });

        const guestListSection = document.getElementById('guest-list-section');
        if (guestListSection) observer.observe(guestListSection);
    }

    setupResizeHandler() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                // Desktop: Always show content if visible class is present
                this.guestListContent.style.display = 'block';
                if (this.guestListContent.classList.contains('visible')) {
                    this.guestCards.forEach(card => card.classList.add('visible'));
                    this.thankYouMessage.classList.add('visible');
                }
            } else {
                // Mobile: Only hide if not manually shown by button
                if (!this.guestListContent.classList.contains('show')) {
                    this.guestListContent.style.display = 'none';
                    this.guestListContent.classList.remove('visible');
                    this.guestCards.forEach(card => card.classList.remove('visible'));
                    this.thankYouMessage.classList.remove('visible');
                }
            }
        });
    }
}

class MusicManager {
    constructor() {
        this.musicBtn = document.getElementById('musicBtn');
        this.bgMusic = document.getElementById('bgMusic');
        this.isMusicPlaying = false;

        this.init();
    }

    init() {
        if (this.musicBtn) {
            this.musicBtn.addEventListener('click', this.toggleMusic.bind(this), { passive: true });
        }
    }

    toggleMusic() {
        if (!this.bgMusic) return;

        if (this.isMusicPlaying) {
            this.pauseMusic();
        } else {
            this.startMusic();
        }
    }

    startMusic() {
        if (!this.bgMusic || !this.musicBtn) return;

        this.bgMusic.play()
            .then(() => {
                this.musicBtn.classList.add('playing');
                this.isMusicPlaying = true;
            })
            .catch(() => {
                console.log('Auto-play prevented. User interaction required.');
            });
    }

    pauseMusic() {
        if (!this.bgMusic || !this.musicBtn) return;

        this.bgMusic.pause();
        this.musicBtn.classList.remove('playing');
        this.isMusicPlaying = false;
    }

    playSound(audioElement) {
        if (audioElement) {
            audioElement.play().catch(() => {
                console.log('Audio play failed - user interaction required');
            });
        }
    }

    setVolume(volume) {
        if (this.bgMusic) {
            this.bgMusic.volume = Math.max(0, Math.min(1, volume));
        }
    }
}

class intro {
    constructor() {
        this.introScreen = document.getElementById('introScreen');
        this.mainContent = document.getElementById('mainContent');
        this.openSound = document.getElementById('openSound');

        this.init();
    }

    init() {
        this.introScreen.addEventListener('click', () => {
            this.playSound(this.openSound);
            if (window.musicManager) {
                window.musicManager.startMusic();
            }

            introScreen.classList.add('opening');

            setTimeout(() => {
                sparkleConfetti.magicalShower(4000);
            }, 1200);
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 800);
        });
    }

    playSound(audioElement) {
        if (audioElement) {
            audioElement.play().catch(() => {
                console.log('Audio play failed - user interaction required');
            });
        }
    }
}

class SparkleConfetti {
    constructor() {
        if (typeof confetti === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
            document.head.appendChild(script);
        }
    }

    magicalShower(duration = 800000) {
        const end = Date.now() + duration;
        const colors = ['#FFD700', '#FFFFFF', '#FFF8DC', '#FFFACD'];

        (function frame() {
            confetti({
                particleCount: 3,
                startVelocity: 10,
                ticks: 400,
                origin: {
                    x: Math.random(),
                    y: -0.1
                },
                colors: colors,
                shapes: ['rectangle'],
                gravity: 0.25,
                scalar: 1,
                drift: Math.random() - 0.5,
                spread: 600
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}

const sparkleConfetti = new SparkleConfetti();

function initializeApp() {
    const musicManager = new MusicManager();

    new ParticlesBackground('tsparticles');

    new EnvelopeAnimation('envelope', 1500);

    new StoryBook();

    new PolaroidCarousel('carousel', galleryImages);

    new EventDetailsManager();

    new RSVPManager();

    new GuestListManager();

    new MusicManager();

    new intro();

    // Make managers globally accessible
    window.musicManager = musicManager;
}

document.addEventListener('DOMContentLoaded', initializeApp);