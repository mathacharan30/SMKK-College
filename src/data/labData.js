const facilitiesData = [
    {
        id: 1,
        title: "Chemistry Laboratory",
        image: "images/gallery/chemistry1.jpg",
        content:
            "Our Chemistry Laboratory is a dynamic and well-equipped center for scientific exploration and experimentation. It provides students with opportunities to observe chemical reactions, analyze substances, and understand theoretical concepts through practical application. The lab strictly follows safety standards and encourages curiosity-driven learning. <ul><li><b>Key Features:</b> Fume hoods, digital balances, volumetric glassware, reagent storage units, safety showers, fire extinguishers</li><li><b>Activities:</b> Titration experiments, salt analysis, qualitative and quantitative analysis, demonstration of chemical laws, safety awareness programs</li><li><b>Mission:</b> To develop analytical skills, scientific temper, and a deep understanding of chemistry through hands-on experimentation.</li></ul>"
    },
    {
        id: 2,
        title: "Computer Laboratory",
        image: "images/gallery/comp1.jpg",
        content:
            "Our Computer Laboratory is a modern digital learning hub designed to prepare students for the technology-driven world. It supports academic learning, programming practice, and digital creativity through high-performance systems and updated software tools. <ul><li><b>Key Features:</b> High-speed internet, multimedia projectors, licensed software, coding platforms, ergonomic seating</li><li><b>Activities:</b> Programming practice sessions, coding competitions, web development workshops, cybersecurity awareness programs</li><li><b>Mission:</b> To empower students with strong computing knowledge and practical digital skills for academic and professional success.</li></ul>"
    },
    {
        id: 3,
        title: "Geography Club",
        image: "images/gallery/geography.jpg",
        description:
            "The Geography Club serves as a platform for students to understand the physical and human aspects of the Earth. It promotes environmental awareness and spatial thinking through interactive activities and outdoor experiences. <ul><li><b>Key Features:</b> Interactive map wall, weather station instruments, globe collection, field survey tools</li><li><b>Activities:</b> Nature walks, GIS training workshops, map-reading contests, environmental awareness drives, quiz competitions</li><li><b>Mission:</b> To cultivate environmental responsibility and a deeper understanding of the Earth’s systems.</li></ul>",
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
        description:
            "The History Club provides a vibrant space for exploring the past through discussion, dramatization, and research. Students gain insight into civilizations, freedom movements, and cultural heritage while developing critical thinking skills. <ul><li><b>Key Features:</b> Archive corner, documentary screenings, historical models, photo exhibitions</li><li><b>Activities:</b> Heritage walks, debates on historical themes, history quizzes, dramatizations, guest lectures</li><li><b>Mission:</b> To instill respect for history and promote cultural awareness among students.</li></ul>",
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
        description:
            "The Language Club provides students with opportunities to improve their speaking, writing, and comprehension skills in various languages. It nurtures creativity and confidence through literary and communicative activities. <ul><li><b>Key Features:</b> Language laboratory, audio-visual aids, creative writing corner, speech practice stage</li><li><b>Activities:</b> Debates, elocution contests, essay writing, storytelling sessions, language games</li><li><b>Mission:</b> To create confident communicators and promote multilingual proficiency.</li></ul>"
    },
    {
        id: 6,
        title: "Literary Club",
        image: "images/gallery/literary.jpg",
        description:
            "The Literary Club encourages students to explore literature through reading, writing, and performance. It provides a platform for expressing ideas, emotions, and creativity while appreciating different literary forms. <ul><li><b>Key Features:</b> Open mic stage, book club meetings, creative writing workshops, drama rehearsal space</li><li><b>Activities:</b> Poetry writing, short story competitions, drama performances, literary quizzes</li><li><b>Mission:</b> To inspire artistic expression and cultivate a lifelong love for literature.</li></ul>",
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
        description:
            "The Mathematics Club develops problem-solving skills and logical thinking through engaging activities and challenges. It helps students appreciate mathematics as both a science and an art. <ul><li><b>Key Features:</b> Math lab, puzzle corner, interactive learning boards, model display units</li><li><b>Activities:</b> Math olympiads, logical reasoning games, model preparation, quiz competitions</li><li><b>Mission:</b> To promote analytical thinking and enthusiasm for mathematics.</li></ul>",
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
            "The Physics Laboratory allows students to explore physical laws through experimentation in mechanics, optics, heat, and electricity. It bridges theory with real-world observation. <ul><li><b>Key Features:</b> Oscilloscopes, laser kits, mechanics models, electrical circuits</li><li><b>Activities:</b> Physics exhibitions, hands-on experiments, working model displays, science fairs</li><li><b>Mission:</b> To make physics practical, interesting, and application-oriented.</li></ul>"
    },
    {
        id: 9,
        title: "Psychology Laboratory",
        image: "images/gallery/psy1.jpg",
        content:
            "The Psychology Laboratory provides students with an environment to understand human behavior and mental processes using scientific tools and methods. <ul><li><b>Key Features:</b> Psychological test kits, counseling resources, observation rooms</li><li><b>Activities:</b> Personality testing, group behavior studies, mental health awareness drives</li><li><b>Mission:</b> To promote emotional intelligence and scientific study of behavior.</li></ul>"
    },
    {
        id: 10,
        title: "Science Club",
        image: "images/gallery/science.jpg",
        description:
            "The Science Club nurtures innovation and curiosity by encouraging students to explore scientific ideas beyond the classroom. <ul><li><b>Key Features:</b> Innovation lab, science exhibition zone, model-making tools</li><li><b>Activities:</b> Science fairs, model construction, innovation challenges, quiz competitions</li><li><b>Mission:</b> To encourage scientific thinking and creativity.</li></ul>",
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
            "The Biology Laboratory supports learning in botany, zoology, and environmental science through direct observation and experimentation. <ul><li><b>Key Features:</b> Microscopes, specimen collections, charts, preserved samples</li><li><b>Activities:</b> Dissection sessions, biodiversity studies, biology quizzes</li><li><b>Mission:</b> To nurture curiosity about living organisms and ecosystems.</li></ul>"
    }
];

export default facilitiesData;
