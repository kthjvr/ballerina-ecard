import { EVENT_CONFIG } from "./config/event-details.js";
import { storyBookData } from "./data/storybook.js";
import { galleryImages } from "./data/gallery.js";
import { SECTION_ICONS } from "./data/icons.js";
import { GUEST_LISTS } from "./data/guests.js";

// (NO CHANGES NEEDED)
function initEventDetails() {
    document.querySelectorAll('[data-event]').forEach(el => {
        const key = el.getAttribute('data-event');
        const value = key.split('.').reduce((obj, prop) => obj?.[prop], EVENT_CONFIG);
        if (value) {
            el.textContent = value;
        }
    });

    // Update map iframe
    const mapIframe = document.querySelector('[data-event-map]');
    if (mapIframe && EVENT_CONFIG.mapEmbedUrl) {
        mapIframe.src = EVENT_CONFIG.mapEmbedUrl;
    }

    // Update Google Form iframe
    const formIframe = document.getElementById('rsvpForm');
    if (formIframe && EVENT_CONFIG.googleFormUrl) {
        formIframe.src = `${EVENT_CONFIG.googleFormUrl}?embedded=true`;
    }

    // Update form fallback link
    const formLink = document.querySelector('.form-btn');
    if (formLink && EVENT_CONFIG.googleFormUrl) {
        formLink.href = EVENT_CONFIG.googleFormUrl;
    }

    // Update gallery cover image
    const galleryCover = document.querySelector('[data-event-gallery-cover]');
    if (galleryCover && EVENT_CONFIG.galleryCoverImage) {
        galleryCover.src = EVENT_CONFIG.galleryCoverImage;
    }

    // Update icons
    document.querySelectorAll('[data-icon]').forEach(el => {
        const iconKey = el.getAttribute('data-icon');
        if (SECTION_ICONS[iconKey]) {
            el.innerHTML = SECTION_ICONS[iconKey];
        }
    });

    // Update dress code images
    document.querySelectorAll('[data-outfit]').forEach(el => {
        const outfitKey = el.getAttribute('data-outfit');
        if (EVENT_CONFIG.outfitImages?.[outfitKey]) {
            el.src = EVENT_CONFIG.outfitImages[outfitKey];
        }
    });
}

function initGuestList() {
    const grid = document.getElementById('guestCardsGrid');
    if (!grid) return;

    grid.innerHTML = GUEST_LISTS.map(list => `
        <div class="guest-card">
            <div class="guest-card-header">
                <div class="guest-card-icon">
                    ${list.icon}
                </div>
                <h3 class="guest-card-title">${list.title}</h3>
            </div>
            <ul class="guest-list">
                ${list.guests.map(guest => `<li>${guest}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

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
        // this.autoOpen();
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
        }, 1000);

        setTimeout(() => {
            const storySection = document.getElementById('story-section');
            if (storySection) {
                storySection.classList.add('visible');
                storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 3000);

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
        this.stories = this.stories = storyBookData;
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

        const trademarkSection = document.getElementById('trademark');
        trademarkSection.classList.add('visible');

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

class EventDetailsManager {
    constructor() {
        this.eventDetails = {
            title: `${EVENT_CONFIG.childName}'s ${EVENT_CONFIG.age}th Birthday Party`,
            start: EVENT_CONFIG.calendarStart,
            end: EVENT_CONFIG.calendarEnd,
            location: `${EVENT_CONFIG.venueFull}, ${EVENT_CONFIG.venueAddressFull}`,
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
            initialDate: EVENT_CONFIG.calendarStart.split('T')[0],
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
                alert(`🎉 ${EVENT_CONFIG.childName}'s ${EVENT_CONFIG.age}th Birthday Party\n📅 ${EVENT_CONFIG.eventDateFull}\n⏰ ${EVENT_CONFIG.eventTime}\n📍 ${EVENT_CONFIG.venueFull}`);
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
        this.loadingScreen = document.getElementById('loadingScreen');
        this.mainContent = document.getElementById('mainContent');
        this.imagesLoaded = false;
        this.minLoadingTime = 4000;
        this.loadingStartTime = null;

        this.init();
    }

    init() {
        this.introScreen.addEventListener('click', () => {
            if (window.musicManager) {
                window.musicManager.startMusic();
            }

            this.introScreen.classList.add('opening');
            this.loadingScreen.classList.add('active');
            this.loadingStartTime = Date.now();

            this.checkAllImagesLoaded();
        });
    }

    checkAllImagesLoaded() {
        const images = Array.from(this.mainContent.querySelectorAll('img'));

        if (images.length === 0) {
            this.handleLoadingComplete();
            return;
        }

        let loadedCount = 0;
        const totalImages = images.length;

        const imageLoadHandler = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                this.imagesLoaded = true;
                this.handleLoadingComplete();
            }
        };

        images.forEach(img => {
            if (img.complete && img.naturalHeight !== 0) {
                imageLoadHandler();
            } else {
                img.addEventListener('load', imageLoadHandler);
                img.addEventListener('error', imageLoadHandler);
            }
        });
    }

    handleLoadingComplete() {
        const elapsedTime = Date.now() - this.loadingStartTime;
        const remainingTime = Math.max(0, this.minLoadingTime - elapsedTime);

        setTimeout(() => {
            this.loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                this.mainContent.classList.add('visible');
                sparkleConfetti.magicalShower(4000);

                if (window.envelopeAnimation) {
                    window.envelopeAnimation.open();
                }
            }, 1000);
        }, remainingTime);
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

    new initEventDetails();

    new initGuestList();

    const envelopeAnimation = new EnvelopeAnimation('envelope', 1500);
    window.envelopeAnimation = envelopeAnimation;

    new ParticlesBackground('tsparticles');

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