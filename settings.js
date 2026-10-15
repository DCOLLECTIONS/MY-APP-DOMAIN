/* =========================================================================
   EDIT THIS FILE to manage your whole website.
   Change the text inside the quotes, save, then Commit + Push in GitHub
   Desktop. Vercel updates the live site in about a minute.
   ========================================================================= */

const SETTINGS = {
  ministry: "MINISTRY OF REPENTANCE AND HOLINESS",  // small white line above the name
  name: "THE MASENO MAIN ALTAR",                           // large yellow name
  tagline: "Welcome to Our Online Church Blessed family",
  color: "#010b42",   // main colour (sidebar, banner, buttons)
  accent: "#ffffff",  // gold: "New here?" button and highlights
  footerColor: "#bd0000", // footer background

  logo: "logo.png",   // your church logo: put the image file in the same folder as index.html
  notifyDays: 14,     // events starting within this many days show in the Notifications bell

  pastor: "Snr Pastor: Blessed Deputy Archbishop Dennis Kere",
  phone: "+2547 2862 1907",
  whatsapp: "",       // e.g. "2547XXXXXXXX" (country code, no + or spaces). Optional.
  email: "masenomainaltar@gmail.com",

  address: "Maseno, Kenya",   // replace with your full street address
  mapsUrl: "https://maps.app.goo.gl/B8mQDNyXRT4RvuRv7",        // optional: paste a Google Maps share link. Leave empty to build one from the address.

  /* WHAT TO EXPECT (shown at the top of the homepage: keep each to one sentence) */
  expect: {
    dress: "Come as you are: just to pour out your heart to the Lord and soak deeply in worship and prayer.",
    parking: "Free parking is available on the church grounds, and our ushering team will guide you to a space.",
    kids: "Children aged 3 to 12 have their own sunday school sessions during the main service, so bring them to the Kids Check-in."
  },

  /* LIVE SESSIONS
     Option A (best): your YouTube channel ID (starts with UC...). The player shows whatever you are streaming right now.
     Option B: the video ID of one specific live stream.
     Leave both empty when there is no live session. */
  live: {
    channelId: "",
    videoId: "",
    link: "https://youtube.com/@themasenomainaltarchurch?si=jatp_qO6LFi3z5_f",         // optional: link to your YouTube or Facebook page
    note: "We stream some of our services live. Join us at service time."
  }
};

/* SERVICE TIMES
   format: "in-person", "online" or "both" */
const SERVICES = [
  { day: "Sunday", time: "7:00 AM", name: "Sunday Services", format: "both" }
];

/* CALENDAR OF NOTIFICATIONS
   date: "YYYY-MM-DD"   time (optional): "HH:MM" in 24-hour format
   type examples: "Service", "Youth", "Outreach", "Announcement" */
const EVENTS = [
  { date: "2026-10-18", time: "09:00", title: "Thanksgiving Sunday", place: "Main Altar", type: "Service", details: "Join us for a special moment of thanksgiving and worship." },
  { date: "2026-10-24", time: "10:00", title: "Youth Fellowship", place: "Church And Virtual", type: "Youth", details: "Power-packed brotherly fellowship for spiritual nourishment" },
  { date: "2026-11-01", title: "Community Outreach Day", place: "Meet at the church gate", type: "Evangelism", details: "A spirited outreach event to share the love of Christ and win souls" }
];

/* RECORDED TEACHINGS (sermons, Bible studies, youth sessions...)
   youtube: the part after v= in a YouTube link (youtu.be/ABC123 gives ABC123)
   audio:   OR a link to an .mp3 file instead of a YouTube video
   category: used for the filter buttons (Sermon, Bible Study, Youth...) */
const TEACHINGS = [
  { title: "Teachings By The Mightiest Prophet of God: replace me", speaker: "Prophet Dr. David Owuor", date: "2026-10-11", category: "Sermon", series: "Holiness", youtube: "VIDEO_ID_1", audio: "", description: "Short summary of the message." },
  { title: " Bible study", speaker: "DAB Dennis Kere", date: "2026-10-07", category: "Bible Study", series: "The People of The Way", youtube: "VIDEO_ID_2", audio: "", description: "" },
  { title: "Special Fellowship", speaker: "DAB Dennis Kere", date: "2026-09-26", category: "The Rupture Church", series: "", youtube: "VIDEO_ID_3", audio: "", description: "" }
];

/* WORSHIPS (worship sets, choir songs, praise sessions) */
const WORSHIPS = [
  { title: "Worship Series: replace me", speaker: "Worship Team", date: "2026-10-11", series: "Sunday Worship Hours", youtube: "VIDEO_ID_4", audio: "", description: "" }
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
  welcome: "We are so glad to have you join us today. We are looking foward to have endless fellowships with you!. Here is what your first Sunday looks like.",
  flow: [
    { title: "Arrival to the church ", text: "Our ushering team will guide you. Arrive early to catch up with every moment." },
    { title: "Kids Sunday School Sessions", text: "Children aged 3 to 12 go to their specific church session. Check them in at the desk by the entrance." },
    { title: "Worship and The Word", text: "A time of worship, prayer and bible teachings. The whole service ends normally by 1pm." },
    { title: "Stay for Optional After Service Meetings", text: "Join any departments for service reflections and team building sessions. We would love to meet you." }
  ],
  faq: [
    { q: "What should I wear?", a: "Come as you are." },
    { q: "Can I join online instead?", a: "Yes. Our main Sunday service is streamed live, and recordings are on the Recorded Teachings page." },
    { q: "Is there anything for my children?", a: "Yes. Kids Sessions runs during the main service" }
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
  { label: "Prayer request", url: "mailto:masenomainaltar@gmail.com?subject=Prayer%20request" },
  { label: "WhatsApp us", url: "https://wa.me/254728621907" },
  { label: "YouTube channel", url: "https://youtube.com/@themasenomainaltarchurch?si=jatp_qO6LFi3z5_f" },
  { label: "Tiktok page", url: "https://tiktok.com/@tiktok.com/@maseno.mainaltar" }
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
  { label: "YouTube", url: "https://youtube.com/@themasenomainaltarchurch?si=jatp_qO6LFi3z5_f" },
  { label: "Tiktok", url: "https://tiktok.com/@tiktok.com/@maseno.mainaltar" }
];
