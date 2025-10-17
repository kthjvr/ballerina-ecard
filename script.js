// ============================================
// EVENT CONFIGURATION (UPDATE THIS AS NEEDED)
// ============================================
const EVENT_CONFIG = {

    // Celebrants name and age
    childName: "Kyline Chandria",
    age: "7",

    // Envelope letter content
    invitationMessage: "Join us for a magical celebration filled with joy, and sweet memories!",

    // Event Details
    calendarStart: "2025-11-19T10:00:00", //YYYY-MM-DD Time in 24H T(HR:MM:SS)
    calendarEnd: "2025-11-19T14:00:00", //YYYY-MM-DD Time in 24H T(HR:MM:SS)
    venue: "Captain's Place",
    venueFull: "Captain's Place (Private Pool and Events Place)",
    venueAddress: "Malvar, Batangas",
    venueAddressFull: "24XP+J63, Malvar, Batangas, Philippines",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4656.66708953913!2d121.1329733758458!3d14.04901398637461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6f0013a95c6d%3A0xbb25fb40d9416062!2sCaptain's%20Place!5e1!3m2!1sen!2sph!4v1757579424131!5m2!1sen!2sph",
    nearbyLandmarks: "San Pedro 2, Chapel",

    // Contact
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfVJDQGwyQ2Ce1TIaJsLjp-neMOTRsKmQECSKIUS49a6FuaMA/viewform",
    parentContact: "(contact Details)",
    parentPhone: "+1234567890",

    // Theme colors
    themeColors: {
        primary: "#ffd5df",
        secondary: "#f5e9f0",
        quaternary: "#f5d5e3",
        accent: "#FFD700"
    },

    // For gallery cover
    galleryCoverImage: "/assets/story/first.png",

    // For dress code
    dressCodeParagraph1: "🩰 Dress code: Ballerina Chic! Whether it's a tutu, a pretty dress, ballet shoes, or simply your favorite pink or purple outfit — come ready to dance and celebrate!",
    dressCodeParagraph2: "Feel free to accessorize with ribbons, bows, tiaras, or anything sparkly. Our theme colors are blush pink, lavender, cream, and gold — but most importantly, wear what makes you feel beautiful and comfortable!",
    outfitImages: {
        women: "/assets/attire/women-attire.png",
        men: "/assets/attire/men-attire.png"
    },

    // For rsvp
    rsvpTitle: "Save Your Spot at the Ballet! 🌟",
    rsvpSubtitle: "Will you join us for Kyline Chandria's magical 7th birthday ballet celebration? We'd love to have you pirouette into this special day!",
    guestListThankYou: "Every guest is part of this magical story. Thank you for celebrating with us! ✨🎉",

    // Computed properties for UI (calendar) (NO CHANGES NEEDED)
    get eventDate() {
        return new Date(this.calendarStart).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    },
    get eventDateFull() {
        return new Date(this.calendarStart).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' });
    },
    get eventTime() {
        const start = new Date(this.calendarStart);
        const end = new Date(this.calendarEnd);
        return `${start.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} - ${end.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    }

};

// For story book content (UPDATE THIS AS NEEDED)
const storyBookData = [
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

// For polaroid content (UPDATE THIS AS NEEDED)
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

// For section icons (UPDATE THIS AS NEEDED)
const SECTION_ICONS = {
    calendar: `<svg class="event-section-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" id="Heart-Calendar--Streamline-Cyber">
        <path fill="#ffffff" d="M21.7999 5.6496H2.19995v17.64H21.7999v-17.64Z" stroke-width="1"></path>
        <path fill="#ffd5df" d="m17.88 12.98 -3.43 -3.92L12 11.02v7.84l5.88 -5.88Z" stroke-width="1"></path>
        <path fill="#ffd5df" d="M21.7999 2.69H2.19995v2.94H21.7999V2.69Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="M21.7999 5.63H2.19995v17.64H21.7999V5.63Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="M21.7999 2.69H2.19995v2.94H21.7999V2.69Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="M7.09998 3.67001V0.730011" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="M16.9 3.67001V0.730011" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="m12 18.86 5.88 -5.88 -3.43 -3.92L12 11.02 9.55 9.06l-3.43 3.92L12 18.86Z" stroke-width="1"></path>
    </svg>`,

    map: `<svg class="event-section-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" id="Location-Map--Streamline-Cyber">
        <path fill="#ffffff" d="M20.82 5.62998H16.9v-1.764L12 0.72998l-4.90003 3.136v1.764h-3.92L1.21997 23.27H22.78L20.82 5.62998Z" stroke-width="1"></path>
        <path fill="#ffd5df" d="M12 0.72998v3.43l1.96 1.274v1.96L12 8.56998V15.43l4.9 -7.35002v-4.214L12 0.72998Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.86 5.63h1.96l1.96 17.64H1.21997l1.96 -17.64h1.96" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1.90601 17.39H22.094" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.8799 10.53h3.528" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.59204 10.53h3.528" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m6.61011 23.27 0.686 -10.29" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m17.3901 23.27 -0.686 -10.29" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m12.0001 15.43 4.9 -7.35002v-4.214l-4.9 -3.136 -4.9 3.136v4.214l4.9 7.35002Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.96 7.39403 12 8.57003l-1.96 -1.176v-1.96l1.96 -1.274 1.96 1.274v1.96Z" stroke-width="1"></path>
    </svg>`,

    dressCode: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" id="Dress--Streamline-Cyber">
        <path fill="#ffffff" d="M12 5.63 9.06001 3.67l-2.94 1.96 2.45 5.88 -6.37 9.8 3.92 1.96H17.88l3.92 -1.96 -6.37 -9.8 2.45 -5.88 -2.94 -1.96L12 5.63Z" stroke-width="1"></path>
        <path fill="#ffd5df" d="m12 5.63 2.94 -1.96 2.94 1.96 -2.45 5.88 6.37 9.8 -3.92 1.96H12V5.63Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M12 5.63 9.06001 3.67l-2.94 1.96 2.45 5.88 -6.37 9.8 3.92 1.96H17.88l3.92 -1.96 -6.37 -9.8 2.45 -5.88 -2.94 -1.96L12 5.63Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.94 3.67V0.73" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M9.06 3.67V0.73" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.43 11.51 12 12l-3.42999 -0.49" stroke-width="1"></path>
    </svg>`,

    rsvp: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" id="Pen-2--Streamline-Cyber">
        <path fill="#ffffff" d="M23 1 18.5 0.5 16 3 4.8 15.8 2 17 0.5 23.5 7 22l1.3 -2.7L21 8l2.5 -2.5L23 1Z" stroke-width="1"></path>
        <path fill="#ffd5df" d="m23 1 -4.5 4.5 -18 18L7 22l1.3 -2.7L21 8l2.5 -2.5L23 1Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16 3 4.8 15.8 2 17 0.5 23.5 7 22l1.3 -2.7L21 8l-5 -5Z" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m4.69995 15.8 3.5 3.5" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M5 19 0.5 23.5" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16 3 18.5 0.5 23 1l0.5 4.5L21 8" stroke-width="1"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16 3 13.5 0.5l-7 10h-2" stroke-width="1"></path>
        <path stroke="#ffd5df" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.5 23.5h15" stroke-width="1"></path>
    </svg>`,

    guest: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1 -1 48 48" id="Badge-Favorite-Heart-2--Streamline-Cyber" height="48" width="48">
        <path fill="#ffffff" d="M34.7599 30.83993333333333v-6.859941666666667l5.880141666666667 -4.899958333333334 -5.880141666666667 -5.87995V7.319941666666668h-5.87995L23 1.4399935833333335 17.120126666666668 7.319941666666668h-5.880141666666667v6.860133333333334l-5.87995 4.899958333333334 5.87995 4.899958333333334v6.859941666666667L1.4400740833333334 38.680058333333335H10.259993333333334l4.90015 5.87995 4.776448333333334 -11.514949999999999L23 36.720075l3.0614916666666665 -3.6750166666666666 4.778441666666667 11.514949999999999 4.899958333333334 -5.87995h8.820116666666667l-9.800108333333334 -7.840125Z" stroke-width="2"></path>
        <path fill="#ffd5df" d="m30.83993333333333 19.080033333333336 -3.919966666666667 -4.899958333333334L23 17.12005v9.799916666666668l7.839933333333334 -7.839933333333334Z" stroke-width="2"></path>
        <path fill="#ffd5df" d="m10.259974166666668 38.680058333333335 7.840125 -7.840125 1.8364925 2.2051250000000002 -4.7764675 11.514949999999999 -4.90015 -5.87995Z" stroke-width="2"></path>
        <path fill="#ffd5df" d="m35.74008333333333 38.680058333333335 -7.840125 -7.840125 -1.838466666666667 2.2051250000000002 4.778441666666667 11.514949999999999 4.90015 -5.87995Z" stroke-width="2"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="m23 26.919966666666667 7.839933333333334 -7.839933333333334 -3.919966666666667 -4.899958333333334L23 17.12005 19.08012916666667 14.180075l-3.9201583333333336 4.899958333333334L23 26.919966666666667Z" stroke-width="2"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="m19.93659166666667 33.04505833333334 -4.776448333333334 11.514949999999999 -4.899958333333334 -5.87995H1.4400740833333334l9.799910916666667 -7.840125" stroke-width="2"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="m26.06149166666667 33.04505833333334 4.778441666666667 11.514949999999999 4.899958333333334 -5.87995h8.820116666666667l-9.800108333333334 -7.840125" stroke-width="2"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="m26.06149166666667 33.04505833333334 4.778441666666667 11.514949999999999 4.899958333333334 -5.87995h8.820116666666667l-9.800108333333334 -7.840125" stroke-width="2"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="m19.93659166666667 33.04505833333334 -4.776448333333334 11.514949999999999 -4.899958333333334 -5.87995H1.4400740833333334l9.799910916666667 -7.840125" stroke-width="2"></path>
        <path stroke="#4b3b47" stroke-linecap="round" stroke-linejoin="round" d="M18.100060833333334 30.83993333333333h-6.859941666666667v-6.859941666666667l-5.880141666666667 -4.899958333333334 5.880141666666667 -4.899958333333334V7.319941666666668h5.87995L23 1.4399935833333335 28.87995 7.319941666666668h5.880141666666667V13.200083333333334l5.87995 5.87995 -5.87995 4.899958333333334v6.859941666666667h-6.860133333333334L23 36.720075l-4.899939166666667 -5.880141666666667Z" stroke-width="2"></path>
    </svg>`,

};

// For guest lists
const GUEST_LISTS = [
    {
        title: "7 Roses",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-flower">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 1a4 4 0 0 1 4 4l-.002 .055l.03 -.018a3.97 3.97 0 0 1 2.79 -.455l.237 .056a3.97 3.97 0 0 1 2.412 1.865a4.01 4.01 0 0 1 -1.455 5.461l-.068 .036l.071 .039a4.01 4.01 0 0 1 1.555 5.27l-.101 .186a3.97 3.97 0 0 1 -5.441 1.468l-.03 -.02l.002 .057a4 4 0 0 1 -3.8 3.995l-.2 .005a4 4 0 0 1 -4 -4l.001 -.056l-.029 .019a3.97 3.97 0 0 1 -2.79 .456l-.236 -.056a3.97 3.97 0 0 1 -2.413 -1.865a4.01 4.01 0 0 1 1.453 -5.46l.07 -.038l-.071 -.038a4.01 4.01 0 0 1 -1.555 -5.27l.1 -.187a3.97 3.97 0 0 1 5.444 -1.468l.026 .018v-.055a4 4 0 0 1 3.8 -3.995zm0 8a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
        </svg>`,
        guests: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"]
    },
    {
        title: "7 Bills",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cash">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" />
            <path d="M7 9m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            <path d="M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        </svg>`,
        guests: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"]
    },
    {
        title: "7 Balloons",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-balloon">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 1a7 7 0 0 1 7 7c0 5.457 -3.028 10 -7 10c-3.9 0 -6.89 -4.379 -6.997 -9.703l-.003 -.297l.004 -.24a7 7 0 0 1 6.996 -6.76zm0 4a1 1 0 0 0 0 2l.117 .007a1 1 0 0 1 .883 .993l.007 .117a1 1 0 0 0 1.993 -.117a3 3 0 0 0 -3 -3z" />
            <path d="M12 16a1 1 0 0 1 .993 .883l.007 .117v1a3 3 0 0 1 -2.824 2.995l-.176 .005h-3a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 1 -2 0a3 3 0 0 1 2.824 -2.995l.176 -.005h3a1 1 0 0 0 .993 -.883l.007 -.117v-1a1 1 0 0 1 1 -1z" />
        </svg>`,
        guests: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"]
    },
    {
        title: "7 Gifts",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-gift">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z" />
        </svg>`,
        guests: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"]
    }
];

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

            // Start checking for images
            this.checkAllImagesLoaded();
        });
    }

    checkAllImagesLoaded() {
        // Get all images in the main content
        const images = Array.from(this.mainContent.querySelectorAll('img'));

        // If no images, proceed immediately
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
                // Image already loaded
                imageLoadHandler();
            } else {
                // Wait for image to load
                img.addEventListener('load', imageLoadHandler);
                img.addEventListener('error', imageLoadHandler);
            }
        });
    }

    handleLoadingComplete() {
        const elapsedTime = Date.now() - this.loadingStartTime;
        const remainingTime = Math.max(0, this.minLoadingTime - elapsedTime);

        // Wait for minimum loading time if images loaded too quickly
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