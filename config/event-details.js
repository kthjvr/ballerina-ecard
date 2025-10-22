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
    calendarStart: "2025-11-09T14:00:00", //YYYY-MM-DD Time in 24H T(HR:MM:SS)
    calendarEnd: "2025-11-09T18:00:00", //YYYY-MM-DD Time in 24H T(HR:MM:SS)
    venue: "Nonette's Green Leaf Garden Resort",
    venueFull: "Nonette's Green Leaf Garden Resort",
    venueAddress: "Malvar, Batangas",
    venueAddressFull: "W5J2+7V3, Bolbok, Lipa City, Batangas, Philippines",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.475297025878!2d121.15194350000002!3d13.9302817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6cb421414f1d%3A0x46bf47272446e579!2sGreen%20Leaf!5e0!3m2!1sen!2sph!4v1761127397455!5m2!1sen!2sph",
    nearbyLandmarks: "---",

    // Contact
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfVJDQGwyQ2Ce1TIaJsLjp-neMOTRsKmQECSKIUS49a6FuaMA/viewform",
    parentContact: "Mommy Carol",
    parentPhone: "(0915-0860435)",

    // Theme colors
    themeColors: {
        primary: "#ffd5df",
        secondary: "#e3d4f3",
        quaternary: "#ffd5df",
        accent: "#FFD700"
    },

    // For gallery cover
    galleryCoverImage: "/assets/gallery/cover.jpg",

    // For dress code
    dressCodeParagraph1: "🌸 Dress code: Any Pastel Color! Think soft hues of pink, lavender, mint, sky blue, or butter yellow — gentle tones that bring out a dreamy and elegant vibe. Whether it’s a flowy dress, a crisp shirt, or coordinated separates, pastel is the way to go!",
    dressCodeParagraph2: "✨ Feel free to mix and match your favorite shades or keep it simple with one soft tone. Add subtle accessories like pearls, ribbons, or florals to complete your look. The goal is to keep it light, fresh, and effortlessly charming!",
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