import { Facility, Activity, House, UniformItem, SchoolTiming, SchoolInfo, Testimonial, NewsEvent, Achievement } from '../types';
import directorPhoto from '../assets/images/regenerated_image_1792829768015.webp';
import principalPhoto from '../assets/images/regenerated_image_1792829766204.webp';

export const SCHOOL_INFO: SchoolInfo = {
  name: "Dreams Valley Public School",
  subTitle: "[English Medium]",
  motto: "Learn, Grow, Succeed!",
  establishedYear: "2016",
  levels: "Nursery to 12th",
  streams: ["Maths", "Biology", "Commerce", "Arts"],
  logoUrl: "/assets/aistudio/Untitled_design_3fcb689c.webp",
  society: "Gaharwar Educational & Welfare Society",
  schoolCode: "312328",
  diseCode: "23130806809",
  googleMapsUrl: "https://maps.app.goo.gl/R3SMWmNfbz81ScQ96",
  address: {
    landmark: "Near Toll-way",
    road: "Satna Road",
    village: "Ichol",
    tehsil: "Teh.- Unchehra",
    district: "Distt.- Satna",
    state: "Madhya Pradesh",
    pin: "485661",
    full: "Near Toll-way, Satna Road, Ichol, Teh.- Unchehra, Distt. - Satna (M.P.), Pin - 485661"
  },
  contacts: {
    principal: "8770577137",
    director: "8770220157",
    vicePrincipalAndTransport: "7999032327",
    busIncharge: "7999032327",
    accountSection: "8770577137",
    email: "dreamsvalleypublicschool@gmail.com"
  }
};

export const SARASWATI_VANDANA = {
  shloka: "|| तमसो मा ज्योतिर्गमय ||",
  lines: [
    "हे हंसवाहिनी ज्ञानदायनी वाणी माँ, करुणामयी कल्याण कर कल्याणी माँ |",
    "धधकती है ज्वाला माता मोह की हो मोह की, शांत कर दे ज्ञानदायनी वाणी माँ",
    "दे उजाला वेद के प्रिय नाम की हो नाम की, दूर तम कर तिमिर नाशनी वाणी माँ |",
    "प्रेम भर दे वाणी में, माँ शारदे हो शारदे , राम गुण गाती रहे मम वाणी माँ |",
    "हे हंसवाहिनी ज्ञान दायनी वाणी माँ, करुणामयी कल्याण कर कल्याणी माँ |"
  ],
  meaning: "Lead us from darkness to light. Oh Mother Saraswati, the embodiment of wisdom seated on the swan, bestow upon us knowledge, benevolence, and purity of speech."
};

export const ABOUT_CONTENT = {
  overview: [
    "We respect the dignity and worth of all the children under our care. We believe that all children can be nurtured to achieve their full potential within a school environment that is both caring and challenging. We expect all children to be respectful and responsible and to rise to the challenges of life.",
    "Education is the foundation of all human excellence. School is a place of man-making. Realizing the need for a school which is committed to equitably providing high quality, efficient and effective educational programs to develop students' academic and problem-solving skills, and their social, aesthetic, and ethical awareness, Dreams Valley Public School was established under Gaharwar Educational & Welfare Society."
  ],
  aims: [
    "To work for excellent human resource development.",
    "To encourage positive thinking, creativity and innovation.",
    "To strive for comprehensive growth of each child.",
    "To instill the spirit of goodness, truth, natural beauty aspects as well as compassion, non-violence and fellow feeling.",
    "To impart real values and quality education.",
    "To produce socially productive, useful and responsible citizens.",
    "To use education as an instrument of social transformation."
  ],
  mission: "To develop inquiring, knowledgeable and caring young people who help to create a better and more peaceful world through intercultural understanding and respect.",
  vision: "Every student is achieving at his or her maximum potential in an engaging, inspiring and challenging learning environment.",
  directorMessage: {
    author: "MR. VINOD KUMAR SINGH",
    designation: "Director, Dreams Valley Public (E.M.) School",
    image: directorPhoto,
    text: [
      "A child is a unique gift of God to humanity with a bundle of talents hidden inside. A teacher is a mentor, nurturer, healer and an inspirer who polishes the various talents and virtues of the child to make him or her a responsible citizen of society. Children are the future of the nation, so they should be taught the right values of life to develop the feeling of brotherhood and nationalism.",
      "I always ask myself, 'What should be the first priority in a student's life?' The answer which I find is nothing but 'time'. The factors responsible for one's success depend on how meticulously he or she plans the little time at his or her disposal to complete the plan of studies. Hundred percent devotion within a stipulated time limit results in success.",
      "Success however, should always be combined with strong moral and ethical values. The focus should lie in preparing students to think reflectively and develop their own enhanced capacity for ethical reasoning with a correct code of conduct. This will develop good moral judgment in students and it will help to promote social values both within the classroom and beyond.",
      "Money can never buy what I have wished for my students, so let education be an all-round development with social, ethical and moral values inculcated in teaching. Let the students be a part of whatever noble we do and our good teachings would still be around, long after we have gone, making our country a 'dream-country' for all. All the best for the future!"
    ]
  },
  principalMessage: {
    author: "MR. SATYAVRAT SINGH",
    designation: "Principal, Dreams Valley Public (E.M.) School",
    image: principalPhoto,
    text: [
      "In present times, every student is a reservoir of a multitude of information and so it shifts the responsibilities of the institution to ensure that they get the right facilities and platform through quality education suffices processes.",
      "We as an organization believe in the holistic development of the child through values such as social, moral, and ethical in life. Our school is well established and sufficiently equipped to ensure fulfillment of their educational, emotional and mental needs."
    ]
  }
};

export const LEADERSHIP = {
  director: "MR. VINOD KUMAR SINGH",
  principal: "MR. SATYAVRAT SINGH"
};

export const FACILITIES: Facility[] = [
  {
    id: "digital-classrooms",
    title: "Digital Classrooms with Modern Technologies",
    shortDesc: "Smart interactive learning environments equipped with modern digital display systems.",
    fullDesc: "Smart digital classrooms equipped with state-of-the-art interactive teaching aids, visual projectors, multimedia modules, and audiovisual learning content to make complex concepts intuitive, engaging, and memorable for every child.",
    category: "Technology",
    image: "/school_assets/classroom_kids.jpg",
    highlights: ["Interactive visual boards", "Audio-visual course modules", "Ergonomic furniture setup", "Spacious and well-ventilated"]
  },
  {
    id: "ratio",
    title: "Student-Teacher Ratio 35:1",
    shortDesc: "Guaranteed personalized attention and individual care in every classroom.",
    fullDesc: "We strictly maintain a balanced student-to-teacher ratio of 35:1. This ensures our dedicated educators can give personalized mentoring, monitor individual academic progression, address doubt clearing in real time, and nurture unique pupil talents.",
    category: "Academic",
    image: "/school_assets/students.jpg",
    highlights: ["Individual pupil attention", "Continuous assessment", "Personalized remedial support", "Inclusive learning pace"]
  },
  {
    id: "teachers",
    title: "Experienced Faculty from Metro Cities",
    shortDesc: "Highly qualified educators holding PG, B.Ed., and N.T.T. qualifications.",
    fullDesc: "Our academic team consists of smart, dedicated, and experienced teachers holding Post Graduate (PG), B.Ed., and Nursery Teacher Training (N.T.T.) credentials placed from prominent educational hubs and metro cities, bringing progressive pedagogy to Ichol.",
    category: "Academic",
    image: "/school_assets/activity2.jpg",
    highlights: ["PG, B.Ed. & N.T.T. qualified", "Metro city teaching expertise", "Continuous faculty workshops", "Mentorship-first philosophy"]
  },
  {
    id: "computer-lab",
    title: "Wi-Fi, Language & Computer Lab",
    shortDesc: "Hands-on digital literacy, modern workstations, and language communication tools.",
    fullDesc: "High-speed campus Wi-Fi connectivity paired with a dedicated computer and language laboratory. Students gain foundational coding skills, digital research abilities, keyboard proficiency, and interactive spoken language training from primary grades onwards.",
    category: "Technology",
    image: "/school_assets/activity3.jpg",
    highlights: ["Individual PC terminals", "Dedicated language software", "High-speed broadband internet", "Supervised safe browsing"]
  },
  {
    id: "library",
    title: "Settled Library for All Students",
    shortDesc: "Curated collection of academic books, reference encyclopedias, literature, and periodicals.",
    fullDesc: "A serene, well-stocked library housing thousands of curriculum-aligned reference books, classic children's literature, science magazines, newspapers, and moral storytelling volumes to cultivate a lifelong reading habit among all age groups.",
    category: "Academic",
    image: "/school_assets/activity1.jpg",
    highlights: ["Curated reference books", "Periodicals & newspapers", "Quiet reading halls", "Early reader picture books"]
  },
  {
    id: "cctv-safety",
    title: "CCTV Cameras in Each Classroom",
    shortDesc: "24/7 security surveillance across classrooms, corridors, and campus perimeter.",
    fullDesc: "The safety and security of every student is our primary concern. High-definition CCTV cameras are installed inside each classroom, assembly areas, entry/exit gates, and school corridors for continuous monitoring and disciplined school decorum.",
    category: "Safety",
    image: "/school_assets/building.jpg",
    highlights: ["24/7 camera coverage", "Monitored entry & exit points", "Safe child-friendly campus", "Fire safety equipment installed"]
  },
  {
    id: "transport",
    title: "Bus Facilities with GPS Tracking Device",
    shortDesc: "Safe, fleet transportation connecting Ichol and surrounding regional routes.",
    fullDesc: "Dedicated school buses covering Ichol, Unchehra, Satna Road and adjacent villages with experienced drivers and designated bus attendants. Buses are equipped with real-time GPS tracking devices so parents and the transport desk can monitor transit safely.",
    category: "Safety",
    image: "/school_assets/building_front.jpg",
    highlights: ["GPS live route tracking", "Trained verified drivers & conductors", "Assigned bus stops", "Dedicated bus in-charge desk"]
  },
  {
    id: "sports-track",
    title: "Athletic Track & Indoor/Outdoor Sports",
    shortDesc: "Dedicated running track, spacious playground, football, cricket, and indoor games.",
    fullDesc: "Physical fitness is central to our holistic development program. The school features a vast open playground with an athletic running track, cricket pitches, football ground, badminton courts, and indoor game facilities including chess and carrom.",
    category: "Sports",
    image: "/school_assets/sports_field.jpg",
    highlights: ["Athletic running track", "Football & cricket grounds", "Yoga & PT arena", "Indoor games room"]
  },
  {
    id: "english-spoken",
    title: "Free English Spoken Classes",
    shortDesc: "Targeted phonics, conversational workshops, and public speaking development.",
    fullDesc: "To ensure students from our rural and semi-urban community compete confidently on global and national stages, the school provides complimentary Spoken English classes focusing on pronunciation, vocabulary building, debate, and everyday conversational confidence.",
    category: "Academic",
    image: "/school_assets/event_stage.jpg",
    highlights: ["Phonics & diction practice", "Extempore & speech sessions", "Confidence building exercises", "Zero extra tuition fee"]
  },
  {
    id: "green-campus",
    title: "Green & Healthy Environment",
    shortDesc: "Clean air, lush landscaped campus trees, eco-gardens, and hygienic amenities.",
    fullDesc: "Located away from industrial pollution on Satna Road, the campus provides lush green lawns, shade-giving trees, clean drinking water systems (RO purified), clean sanitary facilities, and a calm natural backdrop conducive to focused academic concentration.",
    category: "Infrastructure",
    image: "/school_assets/green_day.jpg",
    highlights: ["Lush plantation & trees", "RO drinking water plants", "Hygienic washroom facilities", "Pollution-free natural setting"]
  },
  {
    id: "faculty-residence",
    title: "Teachers Residence on School Campus",
    shortDesc: "On-campus faculty housing ensuring 24/7 student guidance and security.",
    fullDesc: "A dedicated residential facility within the school campus accommodates teaching faculty and staff. This allows round-the-clock student accessibility, disciplined campus guardianship, and extended remedial doubt-clearing sessions beyond regular classroom hours.",
    category: "Infrastructure",
    image: "/school_assets/building.jpg",
    highlights: ["Faculty residential block", "Evening doubt resolution", "Enhanced 24-hr campus supervision", "Tight-knit school community"]
  },
  {
    id: "medical-checkup",
    title: "Regular Medical Checkup for Students",
    shortDesc: "Periodic general physical, dental, and vision health screenings for all children.",
    fullDesc: "Routine medical screening camps conducted by qualified medical practitioners to monitor vision, dental hygiene, height/weight growth index, and general pediatric health. Health cards and reports are proactively shared with parents.",
    category: "Safety",
    image: "/school_assets/yellow_day.jpg",
    highlights: ["Periodic medical health camps", "Vision and dental checks", "First-aid station on-site", "Direct parent health intimation"]
  }
];

export const HOUSES: House[] = [
  {
    name: "Kalam House",
    colorName: "Red",
    hex: "#DC2626",
    bgClass: "bg-red-500",
    borderClass: "border-red-200",
    textClass: "text-red-700",
    motto: "Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.",
    namedAfter: "Dr. A.P.J. Abdul Kalam",
    description: "Symbolizes visionary zeal, scientific curiosity, persistent hard work, and national pride."
  },
  {
    name: "Maharana Pratap House",
    colorName: "Green",
    hex: "#16A34A",
    bgClass: "bg-emerald-600",
    borderClass: "border-emerald-200",
    textClass: "text-emerald-700",
    motto: "Courage, Resilience, and Unwavering Self-Respect.",
    namedAfter: "Maharana Pratap",
    description: "Inspires bravery, resilience through adversity, indomitable spirit, and commitment to the motherland."
  },
  {
    name: "Ambedkar House",
    colorName: "Blue",
    hex: "#2563EB",
    bgClass: "bg-blue-600",
    borderClass: "border-blue-200",
    textClass: "text-blue-700",
    motto: "Educate, Agitate, Organize.",
    namedAfter: "Dr. B.R. Ambedkar",
    description: "Embodies social justice, equality, relentless pursuit of knowledge, and constitutional integrity."
  },
  {
    name: "Agrasen House",
    colorName: "Yellow",
    hex: "#CA8A04",
    bgClass: "bg-amber-500",
    borderClass: "border-amber-200",
    textClass: "text-amber-700",
    motto: "Compassion, Universal Brotherhood, and Community Prosperity.",
    namedAfter: "Maharaja Agrasen",
    description: "Nurtures philanthropic values, democratic ethos, mutual cooperation, and harmonious coexistence."
  }
];

export const SCHOOL_TIMINGS: SchoolTiming[] = [
  { slot: "Reporting Time", time: "8:30 a.m.", note: "Students must arrive 5 minutes before bell" },
  { slot: "School Assembly", time: "8:45 a.m. to 9:00 a.m.", note: "Prayer, Saraswati Vandana, news & thought of the day" },
  { slot: "Classes Nursery to UKG", time: "9:00 a.m. to 12:15 p.m.", note: "Kindergarten play-way & foundational literacy hours" },
  { slot: "Classes I to VIII", time: "9:00 a.m. to 3:00 p.m.", note: "Full academic curriculum, sports & activities" },
  { slot: "School Administrative Office", time: "9:00 a.m. to 3:00 p.m.", note: "Open on all working days for inquiries & fees" },
  { slot: "Meeting Time with Principal (MR. SATYAVRAT SINGH)", time: "10:00 a.m. – 12:00 p.m. / 1:00 p.m. – 2:30 p.m.", note: "Prior appointment or designated hours" }
];

export const UNIFORMS: UniformItem[] = [
  {
    category: "Senior Students (Monday, Tuesday & Friday)",
    schedule: "Regular Academic Days (Classes 6 to 12)",
    items: [
      "Sky blue full-sleeve shirt with dark navy blue contrast collar & cuffs",
      "Tailored dark navy blue waistcoat / vest jacket with embroidered DVPS crest (Girls & Boys formal)",
      "Dark navy diagonal-striped school necktie",
      "Dark navy tailored trousers (Boys) / navy pleated skirt or trousers (Girls)",
      "Official school belt with golden crest buckle",
      "Polished black formal leather shoes and navy socks"
    ]
  },
  {
    category: "Senior Students (Wednesday & Thursday)",
    schedule: "Mid-Week Schedule (Classes 6 to 12)",
    items: [
      "Soft blush pink full-sleeve formal shirt with dark navy collar & cuff accents",
      "Dark navy waistcoat with embroidered school crest",
      "Dark navy diagonal-striped school necktie",
      "Dark navy tailored trousers (Boys) / navy trousers or skirt (Girls)",
      "Official school belt with crest buckle",
      "Polished black leather shoes with dark navy socks"
    ]
  },
  {
    category: "Junior Students (Monday, Tuesday & Friday)",
    schedule: "Regular Days (Nursery to Class 5)",
    items: [
      "Dual-tone polo T-shirt (orange upper chest & back with sky blue V-chevron) and DVPS crest",
      "Dark navy blue tailored trousers (Boys)",
      "Dark navy blue pleated skirt with neat double-braided hair (Girls)",
      "Official navy school belt with golden crest buckle",
      "Navy blue socks with white sports stripes",
      "Polished black school shoes"
    ]
  },
  {
    category: "Junior Students (Wednesday & Thursday)",
    schedule: "Mid-Week Plaid (Nursery to Class 5)",
    items: [
      "Lemon yellow polo T-shirt with brown/red plaid checkered collar, placket, and sleeve cuffs",
      "Embroidered school emblem on left chest",
      "Matching brown-and-cream checkered plaid trousers (Boys)",
      "Matching brown-and-cream pleated checkered plaid skirt (Girls)",
      "School belt with crest buckle and polished black school shoes"
    ]
  },
  {
    category: "Saturday House Sports & PT (All Students)",
    schedule: "Every Saturday (All Classes)",
    items: [
      "Emerald green sports polo T-shirt with dark navy contrast collar and placket",
      "Embroidered Dreams Valley Public School emblem on chest",
      "Comfortable black athletic track pants with elastic waist",
      "Black athletic sports shoes / sneakers and sports socks",
      "Student ID card with school lanyard"
    ]
  },
  {
    category: "Winter Season Additions (November to February)",
    schedule: "Winter Months (All Classes)",
    items: [
      "Navy blue V-neck woolen sweater / DVPS blazer with school crest",
      "Wednesday designated winter knitwear",
      "Full black athletic tracksuit over green house polo on Saturdays",
      "For girls: Black warm winter leggings under uniform skirt in cold weather",
      "Strictly formal school winter knitwear (casual jackets prohibited)"
    ]
  }
];

export const STUDENT_CLUBS = [
  {
    name: "Science Club",
    focus: "Scientific Inquiry & Experiments",
    description: "Fosters curiosity through hands-on experiments, working models, scientific exhibitions, and nature observation projects."
  },
  {
    name: "Eco Club",
    focus: "Environmental Conservation & Green Campus",
    description: "Leads plantation drives, waste reduction, water conservation awareness, and biodiversity appreciation around Ichol."
  },
  {
    name: "Heritage Club",
    focus: "Indian Culture & Local History",
    description: "Explores India's rich historical heritage, visits local monuments, folk arts, and inculcates pride in Indian civilizational values."
  },
  {
    name: "Maths Club",
    focus: "Logical Reasoning & Puzzles",
    description: "Makes mathematics playful and accessible through Vedic math tricks, geometric models, logic puzzles, and math quizzes."
  },
  {
    name: "Health & Wellness Club",
    focus: "Physical Fitness & Nutrition",
    description: "Promotes daily yoga, balanced dietary habits, hygiene awareness, sportsmanship, and mental wellness through meditation."
  }
];

export const ANNUAL_CELEBRATIONS = [
  { event: "Van Mahotsav & Green Day", date: "7th July", description: "Tree plantation across school grounds and environmental pledges." },
  { event: "Independence Day", date: "15th August", description: "Flag hoisting, patriotic cultural songs, speech competitions, and sweet distribution." },
  { event: "Raksha Bandhan", date: "August (Sawan Purnima)", description: "Celebrating sacred bonds of protection, fellowship, and brotherhood." },
  { event: "Teachers' Day", date: "5th September", description: "Tribute to Dr. Radhakrishnan, student-led homage honoring the teachers." },
  { event: "Grandparent's Day", date: "17th October", description: "Honoring elders in our families with special cultural performances and blessings." },
  { event: "Children's Day", date: "14th November", description: "Bal Mela, fun carnivals, food stalls, games, and sports contests." },
  { event: "Republic Day", date: "26th January", description: "March past, patriotic parade, cultural pageant, and national unity oaths." }
];

export const ACTIVITIES: Activity[] = [
  { id: "1", name: "Oath Ceremony & Student Council", category: "Academic & Science", description: "Annual student leadership investiture and pledge taking for school discipline." },
  { id: "2", name: "Group Dance & Solo Dance", category: "Cultural", description: "Classical, folk, and patriotic dance performances showcasing India's diverse traditions." },
  { id: "3", name: "Solo & Group Song Competitions", category: "Cultural", description: "Vocal music, devotional bhajans, patriotic choir, and classical melodies." },
  { id: "4", name: "Painting & Drawing Exhibitions", category: "Cultural", description: "Water color, sketching, landscape art, and creative visual expression for all age groups." },
  { id: "5", name: "Map Activities & Geography Skills", category: "Academic & Science", description: "Topographical mapping, state and international boundaries, and GIS concepts." },
  { id: "6", name: "Poster Making & Slogan Writing", category: "Cultural", description: "Artistic campaigns advocating social justice, cleanliness, and road safety." },
  { id: "7", name: "Animation & Computer Workshops", category: "Academic & Science", description: "Digital storytelling, fundamental graphic animations, and computer software literacy." },
  { id: "8", name: "Hindi & English Speech Competitions", category: "Academic & Science", description: "Oratory skills, debates, extempore, and public speaking forums." },
  { id: "9", name: "Science & Social Science Exhibition", category: "Academic & Science", description: "Live scientific working models, solar experiments, and historical dioramas." },
  { id: "10", name: "Sanskrit Shloka Recitation", category: "Cultural", description: "Chanting Vedic hymns, Bhagavad Gita shlokas, and classical Sanskrit poetry." },
  { id: "11", name: "Yoga, Pranayama & Meditation", category: "Sports & Yoga", description: "Morning Surya Namaskar, breathing exercises, and mindful meditation for cognitive clarity." },
  { id: "12", name: "Classroom Decoration & Displays", category: "Cultural", description: "Fostering teamwork through thematic notice board setups and classroom aesthetics." },
  { id: "13", name: "Bal Mela (Children's Carnival)", category: "Cultural", description: "Annual school fair with student-managed food kiosks, fun games, and family visits." },
  { id: "14", name: "Clay Modeling & Sculpting Art", category: "Cultural", description: "Fine motor skill development through organic clay sculpting and pottery." },
  { id: "15", name: "Inter-House Quiz Competitions", category: "Academic & Science", description: "Rapid-fire general knowledge, science trivia, and current affairs contests." },
  { id: "16", name: "Poster & Advertisement Publishing", category: "Academic & Science", description: "Copywriting, design layout, and media awareness creation." },
  { id: "17", name: "Educational Field Visits: River & Dam", category: "Field Visits", description: "Hydroelectric systems, water cycle in nature, and ecology study trips." },
  { id: "18", name: "Civic Visit: Police Station", category: "Field Visits", description: "Understanding law enforcement, emergency services, citizen duties, and crime prevention." },
  { id: "19", name: "Educational Visit: Railway Station", category: "Field Visits", description: "Learning logistics, ticketing, signaling, and public transportation networks." },
  { id: "20", name: "Nature Excursion: Forest & Zoo", category: "Field Visits", description: "Fauna observation, wildlife protection, botanical study, and habitat appreciation." },
  { id: "21", name: "Heritage Excursion: Historical Places", category: "Field Visits", description: "Exploring ancient temples, forts, and archaeological landmarks of Central India." },
  { id: "22", name: "Social Service: Old Age Home Visits", category: "Social & Nature", description: "Spending quality time with senior citizens, cultivating empathy and elder care." },
  { id: "23", name: "Tree Plantation & Van Mahotsav", category: "Social & Nature", description: "Planting saplings across campus and village boundaries to enrich local green cover." },
  { id: "24", name: "Mehndi & Rangoli Traditional Arts", category: "Cultural", description: "Intricate festive patterns, geometric rangoli art, and folk design traditions." },
  { id: "25", name: "Manav Shrankhla (Human Chain) & Rallies", category: "Social & Nature", description: "Community rallies raising awareness on voting rights, health, and literacy." },
  { id: "26", name: "Campus Cleanliness & Swachhata Drives", category: "Social & Nature", description: "Instilling dignity of labor and hygienic habits through periodic campus cleaning." },
  { id: "27", name: "Essay Writing in Hindi & English", category: "Academic & Science", description: "Creative prose, analytical literature reviews, and descriptive narrative compositions." },
  { id: "28", name: "PowerPoint Presentation Workshops", category: "Academic & Science", description: "Research synthesis, slide design, and multimedia presentation delivery." },
  { id: "29", name: "Annual Sports Meet & Athletic Races", category: "Sports & Yoga", description: "Track sprints, relay races, shot put, long jump, and house championships." }
];

export const SCHOOL_RULES_STUDENTS = [
  "The students are supposed to reach the school 5 minutes before the school starts. Attendance will be taken before the assembly.",
  "The students should converse in English only in the school premises to develop language fluency.",
  "Students should maintain strict discipline and observe good manners at all times.",
  "Every child should take proper care of school property. Damage done even by accident should be reported at once to the class teacher or principal, and damage cost will be realized from the student.",
  "Expensive articles, gold, diamond jewellery, and electronic gadgets are strictly not allowed to be brought to school. If found, they will be confiscated and returned only to parents.",
  "Every student should take care of their personal property. Money should neither be lent nor borrowed. The school is not responsible for lost goods.",
  "Students suffering from any contagious illness will not be allowed to attend classes until full recovery and submission of a medical fitness certificate from a qualified doctor.",
  "Bicycles must be properly locked and kept inside the designated cycle stand. The school will not be responsible for vehicles or bicycles left outside school premises.",
  "Students should actively participate in various co-curricular activities, national festivals, and school functions.",
  "Every student must carry his or her official school diary to school every day.",
  "The warning bell before class or assembly is a signal for all to assemble or enter classrooms in complete silence. Changing classrooms between periods must be orderly and silent.",
  "Students should be very neatly dressed. The prescribed school uniform must be worn on all working days. General turnout will be inspected during assembly and defaulters will be reprimanded.",
  "Shouting, whistling, and running in corridors are strictly prohibited.",
  "Students should bring a healthy tiffin, napkin, and clean handkerchief daily.",
  "Students will not be permitted to leave the school premises during school hours without authorized written parental permission.",
  "If a student loses their official ID card, a ₹100 fine/fee applies for re-issuing upon written application from parents.",
  "The school reserves the right to terminate the schooling of students for unsatisfactory academic progress or whose conduct sets a bad precedent for others.",
  "Taking leave during working days is strongly discouraged. Parents are responsible for making up for the loss of studies in case leave is taken.",
  "If students arrive late to school without genuine cause, they may be sent back home.",
  "Partying in class is prohibited, and sharp hazardous objects like blades, scissors, or needles are strictly banned.",
  "Every student will go home only by school transport or with their authorized escort. Regarding authorization of an escort, parents must submit a written authorization letter. Changes must be intimated in writing immediately.",
  "The school does not permit casual or dirty clothing. In emergencies, parents must submit a formal written request."
];

export const PARENT_GUIDELINES = [
  "Admission of your child to the school is not the end of your responsibilities towards them.",
  "Your children are at school for about six hours only on school days. You must supervise how they spend the remaining hours of the day and holidays.",
  "Closely monitor that your children attend school punctually every day, study at least three hours at home daily, and keep good, wholesome company.",
  "Ensure that your children keep all their required textbooks, notebooks, pens, pencils, and instruments organized neatly in their school bags.",
  "Avoid giving excessive pocket money to your children.",
  "Do not detain your children at home for petty reasons. Remember: a school day lost is lost forever.",
  "Address all your formal requests, complaints, or constructive suggestions directly to the Principal desk.",
  "The academic success and moral foundation of your children depend on the combined, cooperative efforts of parents and teachers.",
  "Without active parental cooperation, we cannot assure complete educational and personality development.",
  "We welcome your healthy and positive suggestions with great pleasure.",
  "When your child departs the bus at their designated stop, the safety of your child is the responsibility of the parents/guardians.",
  "Parents are requested to respond promptly when called upon by school authorities. Designated parent-teacher meeting hours are 10:30 a.m. to 12:30 p.m.",
  "Parents are requested to pay school fees regularly and retain all official fee receipts until the conclusion of the academic year.",
  "Parents are required to review and sign the progress report cards and teachers' remarks in the school diary, returning them within the prescribed time limit."
];

export const BUS_RULES = [
  "Subject to availability of seats, students may avail bus facility as per existing rules, routes, and prescribed fares.",
  "Bus fees must be remitted punctually along with the regular tuition fees.",
  "The school does not entertain arbitrary changes in the bus route to suit individual convenience.",
  "School buses run on precise schedules and will not wait for latecomers at bus stops.",
  "Bus facility is charged on a comprehensive basis for the full academic session.",
  "Students must maintain strict decorum and courteous behavior towards the bus driver, conductor, and fellow passengers at all times.",
  "Every bus is monitored under the supervision of the designated Vice Principal & Transport In-charge (Contact: 7999032327)."
];

export const COMMITTEES = [
  { name: "Palak (Parents-Teachers) Committee", desc: "Collaborative forum between parent representatives and senior educators for school development and community feedback." },
  { name: "Discipline Committee", desc: "Ensures highest standards of campus decorum, code of conduct, anti-bullying enforcement, and punctuality." },
  { name: "Exam Committee", desc: "Oversees academic assessments, examination scheduling, continuous evaluation, and transparent report card publishing." },
  { name: "Event Management Committee", desc: "Coordinates national festivals, annual cultural functions, Bal Mela, sports tournaments, and co-curricular competitions." }
];

export { ALL_GALLERY_PHOTOS as GALLERY_PHOTOS } from './galleryPhotos';


export const IMPORTANT_LINKS = [
  { name: "Education Portal 3.0", url: "https://sederp.educationportal3.in" },
  { name: "Samagra Shiksha Portal MP", url: "https://samagra.gov.in" },
  { name: "M.P. Board of Secondary Education", url: "http://mpbse.nic.in" },
  { name: "CBSE Central Board of Secondary Education", url: "https://cbse.gov.in" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Rajesh Kumar Tiwari",
    role: "Parent",
    childGrade: "Father of Ananya (Class VI)",
    quote: "The personalized attention given to every child at Dreams Valley is truly remarkable. The 35:1 student-teacher ratio ensures that my daughter never hesitates to ask questions. Her confidence in spoken English and mathematics has improved leaps and bounds since joining.",
    avatarBg: "bg-[#172B73]"
  },
  {
    id: "test-2",
    author: "Sunita Singh Gaharwar",
    role: "Parent",
    childGrade: "Mother of Aditya (Class IV)",
    quote: "As a working parent, the GPS tracking in school buses and continuous CCTV monitoring give me complete peace of mind. Dreams Valley is not merely an academic center; it is a second home where teachers reside on campus and mentor children with genuine warmth.",
    avatarBg: "bg-[#FF7A00]"
  },
  {
    id: "test-3",
    author: "Pooja Verma",
    role: "Senior Faculty Member",
    childGrade: "Faculty (Science & STEM)",
    quote: "Having taught in metro cities, I am proud to bring modern pedagogical methods to Ichol. Our digital classrooms, computer workstations, and frequent science exhibitions provide our rural and semi-urban students the exact same edge that top tier city schools offer.",
    avatarBg: "bg-[#F4511E]"
  },
  {
    id: "test-4",
    author: "Vivek Mishra",
    role: "Alumnus (Batch 2021)",
    childGrade: "Currently pursuing B.Tech",
    quote: "The discipline, house competitions, and values inculcated during morning assemblies and Saraswati Vandana continue to guide me in university. Dreams Valley gave me a strong foundation in science, sports, and ethical leadership.",
    avatarBg: "bg-[#172B73]"
  }
];

export const NEWS_EVENTS: NewsEvent[] = [
  {
    id: "news-1",
    title: "Admissions Open 2026–27 (Nursery to Class XII)",
    date: "Session 2026–2027",
    category: "Admissions",
    snippet: "Online applications and registration forms are now available at the campus office desk. Limited seats under the Nursery-Class I lottery quota.",
    isUrgent: true
  },
  {
    id: "news-2",
    title: "Annual Science & Social Science Exhibition 2026",
    date: "18th November 2026",
    category: "Academic",
    snippet: "Students from Classes III to XII will showcase innovative working models on renewable solar energy, robotics, and indigenous agricultural science.",
    isUrgent: false
  },
  {
    id: "news-3",
    title: "Inter-House Athletic Championship & Sports Meet",
    date: "14th December 2026",
    category: "Sports",
    snippet: "Four houses—Kalam, Maharana Pratap, Ambedkar, and Agrasen—will compete in 100m sprints, relay races, badminton, and team football.",
    isUrgent: false
  },
  {
    id: "news-4",
    title: "Free Spoken English & Personality Workshops",
    date: "Ongoing Weekly",
    category: "Student Life",
    snippet: "Complimentary phonics, debate forums, and confidence-building extempore sessions conducted every Wednesday and Saturday.",
    isUrgent: false
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "100% Board Success Rate",
    metric: "100%",
    description: "Consistent academic performance with outstanding marks in state and national board examinations.",
    badge: "Academic Excellence"
  },
  {
    id: "ach-2",
    title: "Personalized Faculty Ratio",
    metric: "35:1",
    description: "Strict teacher-pupil balance ensuring individual remedial guidance and doubt clearance.",
    badge: "Individual Mentorship"
  },
  {
    id: "ach-3",
    title: "Comprehensive GPS Routes",
    metric: "12+ Routes",
    description: "Safe, fleet transportation covering Ichol, Unchehra, Satna Road and adjacent towns with live tracking.",
    badge: "Safety First"
  },
  {
    id: "ach-4",
    title: "Co-Curricular & Sports Clubs",
    metric: "29+ Programs",
    description: "Holistic development encompassing yoga, STEM labs, classical dance, Sanskrit shlokas, and athletics.",
    badge: "Holistic Child Growth"
  }
];

export interface SeniorStream {
  id: string;
  name: string;
  badge: string;
  shortName: string;
  color: string;
  description: string;
  coreSubjects: string[];
  careerPaths: string[];
}

export const SENIOR_STREAMS: SeniorStream[] = [
  {
    id: "maths",
    name: "Mathematics Stream (PCM)",
    shortName: "Maths",
    badge: "Engineering & Applied Sciences",
    color: "#172B73",
    description: "Comprehensive curriculum focusing on mathematical modeling, computational logic, physics laboratory experiments, and competitive exam readiness.",
    coreSubjects: ["Physics", "Chemistry", "Mathematics", "English Core", "Computer Science / Physical Education"],
    careerPaths: ["IIT-JEE / Engineering", "Architecture (NATA)", "Data Science & AI", "Defense (NDA)", "Pure Mathematics & Astronomy"]
  },
  {
    id: "biology",
    name: "Biology Stream (PCB)",
    shortName: "Biology",
    badge: "Medical & Life Sciences",
    color: "#FF7A00",
    description: "Deep dive into physiology, botany, organic chemistry, biomedical research foundation, and rigorous NEET exam mentorship.",
    coreSubjects: ["Physics", "Chemistry", "Biology", "English Core", "Physical Education / Informatics Practices"],
    careerPaths: ["NEET / MBBS / BDS", "Biotechnology & Genetics", "Veterinary Sciences", "Pharmacy", "Forensic & Environmental Science"]
  },
  {
    id: "commerce",
    name: "Commerce Stream",
    shortName: "Commerce",
    badge: "Business, Finance & Corporate",
    color: "#F4511E",
    description: "Financial accounting, market economics, business organization dynamics, taxation fundamentals, and entrepreneurial mindset.",
    coreSubjects: ["Accountancy", "Business Studies", "Economics", "English Core", "Applied Mathematics / Physical Education"],
    careerPaths: ["Chartered Accountancy (CA / CS / CMA)", "Corporate Management (BBA / MBA)", "Banking & Wealth Management", "Fintech & Stock Trading", "Business Startups"]
  },
  {
    id: "arts",
    name: "Arts & Humanities Stream",
    shortName: "Arts",
    badge: "Civil Services & Social Sciences",
    color: "#7C3AED",
    description: "Analytical inquiry into Indian & world history, constitutional law, political philosophy, geographical dynamics, and communication.",
    coreSubjects: ["History", "Political Science", "Geography / Economics", "English Core", "Hindi / Sociology / Fine Arts"],
    careerPaths: ["UPSC / State Civil Services", "Judiciary & Corporate Law (CLAT)", "Journalism & Media Communications", "Public Policy & Administration", "International Relations & Psychology"]
  }
];


