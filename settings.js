/* =========================================================================
   EDIT THIS FILE to manage your whole website.
   Change the text inside the quotes, save, then Commit + Push in GitHub
   Desktop. Vercel updates the live site in about a minute.
   ========================================================================= */

const SETTINGS = {
  ministry: "MINISTRY OF REPENTANCE AND HOLINESS",  // small white line above the name
  name: "THE MASENO MAIN ALTAR",                           // large yellow name
  tagline: "Welcome to Our Online Church Blessed family",
  color: "#000b49",   // main colour (sidebar, banner, buttons)
  accent: "#ffd900",  // gold: "New here?" button and highlights
  footerColor: "#bd0000", // footer background

  logo: "logo.png",   // your church logo: put the image file in the same folder as index.html
  notifyDays: 14,     // events starting within this many days show in the Notifications bell

  pastor: "Snr Pastor: Blessed Deputy Archbishop Dennis Kere",
  phone: "07 2862 1907",
  whatsapp: "",       // e.g. "2547XXXXXXXX" (country code, no + or spaces). Optional.
  email: "info@mychurch.com",

  address: "Maseno, Kenya",   // replace with your full street address
  mapsUrl: "",        // optional: paste a Google Maps share link. Leave empty to build one from the address.

  /* WHAT TO EXPECT (shown at the top of the homepage: keep each to one sentence) */
  expect: {
    dress: "Come as you are: most people wear smart casual, and you will see everything from jeans to suits.",
    parking: "Free parking is available on the church grounds, and our team in bright vests will guide you to a space.",
    kids: "Children aged 3 to 12 have their own class during the main service, so bring them to the Kids Check-in desk by the main entrance."
  },

  /* LIVE SESSIONS
     Option A (best): your YouTube channel ID (starts with UC...). The player shows whatever you are streaming right now.
     Option B: the video ID of one specific live stream.
     Leave both empty when there is no live session. */
  live: {
    channelId: "",
    videoId: "",
    link: "",         // optional: link to your YouTube or Facebook page
    note: "We stream our main services live. Join us at service time."
  }
};

/* SERVICE TIMES & FORMATS
   format: "in-person", "online" or "both" */
const SERVICES = [
  { day: "Sunday", time: "7:00 AM", name: "Sunday Services", format: "both" }
];

/* CALENDAR OF NOTIFICATIONS
   date: "YYYY-MM-DD"   time (optional): "HH:MM" in 24-hour format
   type examples: "Service", "Youth", "Outreach", "Announcement" */
const EVENTS = [
  { date: "2026-10-18", time: "09:00", title: "Harvest Thanksgiving Sunday", place: "Main sanctuary", type: "Service", details: "Bring your thanksgiving offering. Lunch will be served after service." },
  { date: "2026-10-24", time: "10:00", title: "Youth Retreat Registration", place: "Church hall", type: "Youth", details: "Register at the youth desk before the retreat." },
  { date: "2026-11-01", title: "Community Outreach Day", place: "Meet at the church gate", type: "Outreach", details: "Wear comfortable clothes. Transport is provided." }
];

/* RECORDED TEACHINGS (sermons, Bible studies, youth sessions...)
   youtube: the part after v= in a YouTube link (youtu.be/ABC123 gives ABC123)
   audio:   OR a link to an .mp3 file instead of a YouTube video
   category: used for the filter buttons (Sermon, Bible Study, Youth...) */
const TEACHINGS = [
  { title: "Sample sermon: replace me", speaker: "Pastor Name", date: "2026-10-11", category: "Sermon", series: "Faith", youtube: "VIDEO_ID_1", audio: "", description: "Short summary of the message." },
  { title: "Sample Bible study", speaker: "Teacher Name", date: "2026-10-07", category: "Bible Study", series: "Book of John", youtube: "VIDEO_ID_2", audio: "", description: "" },
  { title: "Sample youth session", speaker: "Youth Leader", date: "2026-09-26", category: "Youth", series: "", youtube: "VIDEO_ID_3", audio: "", description: "" }
];

/* WORSHIPS (worship sets, choir songs, praise sessions) */
const WORSHIPS = [
  { title: "Sample worship set: replace me", speaker: "Worship Team", date: "2026-10-11", series: "Sunday Worship", youtube: "VIDEO_ID_4", audio: "", description: "" }
];

/* PICTORIALS (photos)
   Put image files in a folder named "photos" next to index.html, then list them here.
   album: used for the filter buttons */
const PHOTOS = [
  { src: "photos/photo1.jpg", caption: "Sunday worship", album: "Services" },
  { src: "photos/photo2.jpg", caption: "Baptism day", album: "Baptisms" },
  { src: "photos/photo3.jpg", caption: "Youth retreat", album: "Youth" }
];

/* NEW HERE PAGE (new-here.html) */
const NEW_HERE = {
  welcome: "We are so glad you are thinking of visiting. You do not need to prepare anything. Here is what your first Sunday looks like.",
  flow: [
    { title: "Arrive and park", text: "Our parking team will guide you. Plan to arrive 10 minutes early." },
    { title: "Meet the welcome team", text: "Look for the friendly faces at the main entrance. They will answer questions and help you find a seat." },
    { title: "Drop off the kids", text: "Children aged 3 to 12 go to Kids Church. Check them in at the desk by the entrance." },
    { title: "Worship and message", text: "A time of singing, prayer and a message from the Bible. The whole service lasts about two hours." },
    { title: "Stay for tea", text: "Join us after service for tea and a chat. We would love to meet you." }
  ],
  faq: [
    { q: "What should I wear?", a: "Wear whatever you are comfortable in. Smart casual is common." },
    { q: "Do I have to give an offering?", a: "No. Offerings are for members and friends who want to give. Visitors are never expected to." },
    { q: "Can I join online instead?", a: "Yes. Our main Sunday service is streamed live, and recordings are on the Recorded Teachings page." },
    { q: "Is there anything for my children?", a: "Yes. Kids Church runs during the main service for ages 3 to 12." }
  ]
};

/* QUICK LINKS (header menu)
   url can be a page section (#live, #teachings, #calendar...) or a full web address (https://...).
   Web addresses open in a new tab. */
const QUICK_LINKS = [
  { label: "Watch live", url: "#live" },
  { label: "Recorded teachings", url: "#teachings" },
  { label: "Worships", url: "#worships" },
  { label: "Pictorials", url: "#pictorials" },
  { label: "Calendar of notifications", url: "#calendar" },
  { label: "New here? Plan your visit", url: "new-here.html" },
  { label: "Give online", url: "https://example.com/give" },
  { label: "Prayer request", url: "mailto:info@mychurch.com?subject=Prayer%20request" },
  { label: "WhatsApp us", url: "https://wa.me/2547XXXXXXXX" },
  { label: "YouTube channel", url: "https://youtube.com/@yourchannel" },
  { label: "Facebook page", url: "https://facebook.com/yourpage" }
];

/* NOTIFICATIONS (header bell)
   Upcoming events from EVENTS appear here automatically.
   Add announcements below. date and until are optional ("YYYY-MM-DD").
   An announcement stops showing after its "until" date. */
const NOTICES = [
  { title: "Welcome to our new website", text: "Find sermons, photos and events from the menu on the left.", date: "2026-10-12", until: "2026-12-31" }
];

/* SOCIAL LINKS (shown in the footer) */
const SOCIALS = [
  { label: "YouTube", url: "https://youtube.com/@yourchannel" },
  { label: "Facebook", url: "https://facebook.com/yourpage" }
];
