// ============================================
// EVENT CONFIGURATION (UPDATE THIS AS NEEDED)
// ============================================

export const EVENT_CONFIG = {

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
    galleryCoverImage: "/assets/gallery/cover.jpg",

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