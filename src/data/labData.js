const facilitiesData = [
    {
        id: 1,
        title: "Chemistry Laboratory",
        image: "images/gallery/chemistry1.jpg",
        content:
            "Our Chemistry Laboratory is a vibrant hub for scientific discovery, equipped with modern apparatus, safety equipment, and a wide range of chemicals. Students engage in hands-on experiments, learn about chemical reactions, and develop analytical skills. <ul><li><b>Key Features:</b> Fume hood, digital balances, glassware, safety showers</li><li><b>Activities:</b> Titration competitions, demonstration of chemical phenomena, safety workshops</li><li><b>Mission:</b> To inspire curiosity and a scientific mindset through practical chemistry.</li></ul>"
    },
    {
        id: 2,
        title: "Computer Laboratory",
        image: "images/gallery/comp1.jpg",
        content:
            "Our Computer Laboratory features high-speed internet, the latest software, and ergonomic workstations. Students learn programming, digital literacy, and multimedia skills. <ul><li><b>Key Features:</b> 24/7 Wi-Fi, projectors, coding bootcamps</li><li><b>Activities:</b> Coding challenges, app development workshops, tech talks</li><li><b>Mission:</b> To empower students with digital skills for the modern world.</li></ul>"
    },
    {
        id: 3,
        title: "Geography Club",
        image: "images/gallery/geography.jpg",
        description: "The Geography Club sparks curiosity about our planet, encouraging students to explore the world through maps, fieldwork, and environmental projects.",
        content:
            "Join the Geography Club to participate in map reading contests, field trips, and environmental awareness campaigns. <ul><li><b>Key Features:</b> Interactive map wall, weather station, field equipment</li><li><b>Activities:</b> Nature walks, GIS workshops, quiz competitions</li><li><b>Mission:</b> To foster a love for geography and environmental stewardship.</li></ul>",
        structure: {
            president: "Dr. Vishalakshi. K. K (Principal)",
            convener: "Manju J - Asst. Professor",
            vicePresident: "Archana A S",
            secretary: "Deepika S",
            members: ["Chethana N R", "Sukanya", "Veena H R", "Deepthi N R", "Manjunatha G J", "Priyanka M"]
        }
    },
    {
        id: 4,
        title: "History Club",
        image: "images/gallery/history.jpg",
        description: "The History Club is a creative space for students to debate, deliberate, and experience new perspectives on historical events, shaping personalities and critical thinking.",
        content:
            "Step into the past with the History Club! We host debates, heritage walks, and exhibitions to bring history alive. <ul><li><b>Key Features:</b> Archive corner, documentary screenings, artifact displays</li><li><b>Activities:</b> History quizzes, dramatizations, guest lectures</li><li><b>Mission:</b> To inspire a deep appreciation for history and culture.</li></ul>",
        structure: {
            president: "Dr. Vishalakshi. K. K (Principal)",
            convener: "Smt. Sujatha.K",
            members: ["Subhansab", "Chandrashekar", "Manjunatha.G.J", "Chathana.N.R", "Chiranjeevi.A.K", "Ramya.M", "Manjushree", "AshiwiniKaashyap", "Vivekananda", "Anusha", "Nagamani"]
        }
    },
    {
        id: 5,
        title: "Language Club",
        image: "images/clients/i1.png",
        content:
            "The Language Club is a vibrant platform for students to enhance their communication and literary skills. <ul><li><b>Key Features:</b> Language lab, creative writing corner, public speaking stage</li><li><b>Activities:</b> Debates, elocution, essay writing, language games</li><li><b>Mission:</b> To nurture confident communicators and creative writers.</li></ul>"
    },
    {
        id: 6,
        title: "Literary Club",
        image: "images/gallery/literary.jpg",
        description: "The Literary Club celebrates the rich heritage of languages and literature, empowering students to express themselves and explore cultural diversity.",
        content:
            "Unleash your creativity with the Literary Club! Participate in poetry slams, storytelling sessions, and drama workshops. <ul><li><b>Key Features:</b> Open mic events, book club, creative writing workshops</li><li><b>Activities:</b> Poetry writing, drama, essay competitions</li><li><b>Mission:</b> To foster a love for literature and self-expression.</li></ul>",
        structure: {
            president: "Dr. Vishalakshi. K. K - Principal",
            convener: "Dr. Sharath Kumar S M - Asst. Professor",
            vicePresident: "Vivekananda - I Year",
            secretary: "Bindushree K G - II Year",
            members: {
                yearII: ["Ramya M", "Chiranjivi A K", "RevathammaSwamy M", "Sunitha M R"],
                yearI: ["Chitra K", "Shravyashree K S", "Deepashree C", "Darshini S", "Pooja A P", "Nagaveni", "Nagamani", "Ashwini S Kashyap", "Yathish K S"]
            }
        }
    },
    {
        id: 7,
        title: "Mathematics Club",
        image: "images/gallery/mathematics.jpg",
        description: "The Mathematics Club motivates students to explore the beauty of mathematics through fun and challenging activities.",
        content:
            "Join the Mathematics Club for math quizzes, model making, and problem-solving marathons. <ul><li><b>Key Features:</b> Math lab, puzzle corner, interactive games</li><li><b>Activities:</b> Math olympiads, model preparation, logic games</li><li><b>Mission:</b> To develop logical thinking and a passion for mathematics.</li></ul>",
        structure: {
            president: "Dr. Vishalakshi. K. K - Principal",
            convener: "Dr. Premkumar S - Asst. Professor",
            officeBearers: ["Arjun B K", "Yeshaswini", "Dharshini"],
            members: ["Kranthi Kumar", "Shobarani", "Divyashree", "Anusha", "Shashikala", "Shalini", "Bindushree", "Sahana", "Gowthami", "HeenaJabeen", "Sindhu", "Jagadesh", "Ramesh", "Venkatesh", "Pooja", "Lakshmi"]
        }
    },
    {
        id: 8,
        title: "Physics Laboratory",
        image: "images/gallery/physics1.jpg",
        content:
            "The Physics Laboratory is a space for discovery, equipped with apparatus for mechanics, optics, and electricity. <ul><li><b>Key Features:</b> Oscilloscopes, laser kits, mechanics models</li><li><b>Activities:</b> Physics fairs, hands-on experiments, science demonstrations</li><li><b>Mission:</b> To make physics engaging and accessible through practical learning.</li></ul>"
    },
    {
        id: 9,
        title: "Psychology Laboratory",
        image: "images/gallery/psy1.jpg",
        content:
            "The Psychology Laboratory offers a unique environment to explore human behavior and mental processes. <ul><li><b>Key Features:</b> Psychological test kits, observation rooms, counseling resources</li><li><b>Activities:</b> Personality assessments, group experiments, mental health awareness drives</li><li><b>Mission:</b> To promote understanding of psychology through interactive learning.</li></ul>"
    },
    {
        id: 10,
        title: "Science Club",
        image: "images/gallery/science.jpg",
        description: "The Science Club develops scientific attitude and genuine interest in science, supplementing classroom learning with exciting activities.",
        content:
            "Ignite your curiosity with the Science Club! Take part in exhibitions, model making, and science shows. <ul><li><b>Key Features:</b> Science fair, innovation lab, guest scientist sessions</li><li><b>Activities:</b> Model making, science quizzes, innovation challenges</li><li><b>Mission:</b> To nurture scientific curiosity and innovation.</li></ul>",
        structure: {
            president: "Dr. Vishalakshi. K. K - Principal",
            convener: "Dr. Selvakumar S - Asst. Professor",
            officeBearers: ["Prathibha Gopi", "Shravyashree K S", "Pooja E S"],
            members: ["Yathish K S", "Chandan B U", "Dharshini", "Lakshmi C N", "Sanjana H S", "HeenaJabin", "Gowthami P", "Ramesha M", "Sindhushree K G", "Bindushree", "Priyanka M", "Yashashvini", "Kavya M", "Pallavi", "Arjun B K"]
        }
    },
    {
        id: 11,
        title: "Biology Laboratory",
        image: "images/gallery/bio2.jpg",
        content:
            "The Biology Laboratory is a lively space for exploring the wonders of life. Students use microscopes, models, and specimens to learn about plants, animals, and ecosystems. <ul><li><b>Key Features:</b> Microscopes, specimen collection, interactive charts</li><li><b>Activities:</b> Dissection workshops, nature studies, biology quizzes</li><li><b>Mission:</b> To cultivate a passion for life sciences through hands-on learning.</li></ul>"
    }
];

export default facilitiesData;
