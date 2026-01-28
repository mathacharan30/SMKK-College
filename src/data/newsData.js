const newsData = [
  {
    id: 1,
    title: "Community Living Camp",
    image: "images/news/2019/community.jpg",
    date: { day: "03", month: "Oct", year: "2019" },
    content:
      "From 3rd October to 5th October 2019, Citizenship Living Camp was organised for both first and second year students at minorities Morarji Desai Residential School Dodda Kanya Village near Nanjangud."
  },
  {
    id: 2,
    title: "Constitution Day",
    image: "images/news/2019/constitution.jpg",
    date: { day: "26", month: "Nov", year: "2019" },
    content:
      "On 26th November 2019 (Tuesday), Indian Constitution Day was celebrated to create awareness among the students regarding the provisions of the Constitution of India."
  },
  {
    id: 3,
    title: "Debate Competition",
    image: "images/news/2019/debate.jpg",
    date: { day: "28", month: "Jun", year: "2019" },
    content:
      "On 28th June 2019, a State Level Debate Competition on the topic “Impact of Artificial Intelligence and Emergence of Technology” was organised. Students actively participated and expressed their views."
  },
  {
    id: 4,
    title: "Gandhi Jayanthi",
    image: "images/news/2019/gandhi.jpg",
    date: { day: "02", month: "Oct", year: "2019" },
    content:
      "On 2nd October 2019, Gandhi Jayanthi was celebrated by chanting Sarva Dharma Prarthana and paying tribute to Mahatma Gandhi."
  },
  {
    id: 5,
    title: "Independence Day",
    image: "images/news/2019/independence.jpg",
    date: { day: "15", month: "Aug", year: "2019" },
    content:
      "On 15th August 2019, Independence Day was celebrated in the college campus. Teaching and non-teaching staff and students participated in the flag hoisting ceremony."
  },
  {
    id: 6,
    title: "Kannada Rajyotsava",
    image: "images/news/2019/kannada.jpg",
    date: { day: "30", month: "Nov", year: "2019" },
    content:
      "On 30th November 2019 (Saturday), Kannada Rajyotsava was celebrated followed by various cultural programmes performed by the teacher trainees."
  },
  {
    id: 7,
    title: "Student Council",
    image: "images/news/2019/student.jpg",
    date: { day: "10", month: "Jul", year: "2019" },
    content:
      "In order to promote leadership qualities among the students, Student Council was formed with President, Secretary and Joint Secretary elected by the students."
  },
  {
    id: 8,
    title: "Teachers Day",
    image: "images/news/2019/teachers.jpg",
    date: { day: "05", month: "Sep", year: "2019" },
    content:
      "On 5th September 2019, Teachers Day was celebrated with cultural programmes followed by sports competitions for the teaching staff."
  },
  {
    id: 9,
    title: "Yuva Sambrama",
    image: "images/news/2019/yuva.jpg",
    date: { day: "21", month: "Sep", year: "2019" },
    content:
      "On 21st September 2019, students participated in the Yuva Sambrama programme held at the Open Air Theatre, Manasagangotri Campus, Mysore."
  },

  {
    id: 10,
    title: "Debate",
    image: "images/news/2020/debate.jpg",
    date: { day: "21", month: "Dec", year: "2019" },
    content:
      "On 21st December 2019 (Saturday), the students of 3rd Semester conducted a debate on the topic ‘How teacher acts as a Guide?’"
  },
  {
    id: 11,
    title: "Election Awareness Jatha",
    image: "images/news/2020/ele1.jpg",
    date: { day: "06", month: "Jan", year: "2020" },
    content:
      "On 06th January 2020 (Monday), Election Awareness Jatha was organised in Kuvempunagar and the media persons also witnessed the Jatha."
  },
  {
    id: 12,
    title: "Food Exhibition",
    image: "images/news/2020/food1.jpg",
    date: { day: "03", month: "Feb", year: "2020" },
    content:
      "On 03rd February 2020 (Monday), Food Exhibition was organised by the students to showcase different varieties of food and develop entrepreneurial skills."
  },
  {
    id: 13,
    title: "Freshers Day",
    image: "images/news/2020/fresh1.jpg",
    date: { day: "10", month: "Feb", year: "2020" },
    content:
      "On 10th February 2020 (Monday), Freshers Day was celebrated with cultural programmes and interaction sessions for the newly admitted students."
  },
  {
    id: 14,
    title: "Geography Day",
    image: "images/news/2020/geo.jpg",
    date: { day: "12", month: "Feb", year: "2020" },
    content:
      "On 12th February 2020 (Wednesday), Geography Day was celebrated with various academic and cultural activities by the students."
  },
  {
    id: 15,
    title: "Geography Field Trip",
    image: "images/news/2020/geotrip.jpg",
    date: { day: "14", month: "Feb", year: "2020" },
    content:
      "On 14th February 2020 (Friday), a Geography field trip was organised for the students to enhance practical learning and environmental awareness."
  },
  {
    id: 16,
    title: "ICT Training Programme",
    image: "images/news/2020/ict.jpg",
    date: { day: "17", month: "Feb", year: "2020" },
    content:
      "On 17th February 2020 (Monday), an ICT training programme was organised for the students to improve their technical and digital learning skills."
  },
  {
    id: 17,
    title: "Job Fair",
    image: "images/news/2020/job.jpg",
    date: { day: "20", month: "Feb", year: "2020" },
    content:
      "On 20th February 2020 (Thursday), Job Fair was organised for the second year trainees at Maharaja College Grounds, Mysuru."
  },
  {
    id: 18,
    title: "Martyrs Day",
    image: "images/news/2020/mart.jpg",
    date: { day: "30", month: "Jan", year: "2020" },
    content:
      "On 30th January 2020 (Wednesday), Martyrs Day was observed as a mark of gratitude to the soldiers and also to Mahatma Gandhiji."
  },
  {
    id: 19,
    title: "Model Preparation Day",
    image: "images/news/2020/mod1.jpg",
    date: { day: "14", month: "Jan", year: "2020" },
    content:
      "On 14th January 2020 (Tuesday), Model Preparation Day was organised for the first semester trainees as a part of curriculum."
  },

  {
    id: 20,
    title: "Pedagogy Day",
    image: "images/news/2020/pedagogy.jpg",
    date: { day: "19", month: "Feb", year: "2020" },
    content:
      "On 19th February 2020 (Wednesday), Pedagogy Day was celebrated with academic activities and presentations by the students."
  },

  {
    id: 21,
    title: "DIET Visit",
    image: "images/news/2021/diet.jpg",
    date: { day: "05", month: "Jan", year: "2021" },
    content:
      "On 5th January 2021 (Tuesday), the students visited District Institute of Education and Training (DIET)."
  },
  {
    id: 22,
    title: "Kanaka Jayanthi",
    image: "images/news/2021/kanaka.jpg",
    date: { day: "19", month: "Jan", year: "2021" },
    content:
      "On 19th January 2021 (Tuesday), Kanaka Jayanthi was celebrated to commemorate Saint Kanakadasa."
  },
  {
    id: 23,
    title: "Kannada Rajyotsava",
    image: "images/news/2021/kannada.jpg",
    date: { day: "01", month: "Nov", year: "2021" },
    content:
      "On 1st November 2021 (Monday), Kannada Rajyotsava was celebrated with various cultural activities."
  },
  {
    id: 24,
    title: "Koti Koti Pranam",
    image: "images/news/2021/koti.jpg",
    date: { day: "23", month: "Jan", year: "2021" },
    content:
      "On 23rd January 2021 (Saturday), Koti Koti Pranam programme was organised to pay tribute to freedom fighters."
  },
  {
    id: 25,
    title: "Pedagogy Quiz",
    image: "images/news/2021/pedaquiz.jpg",
    date: { day: "27", month: "Jan", year: "2021" },
    content:
      "On 27th January 2021 (Wednesday), Pedagogy Quiz competition was organised for the students."
  },
  {
    id: 26,
    title: "R. N. Mukherjee Memorial Lecture",
    image: "images/news/2021/rnmh.jpg",
    date: { day: "02", month: "Feb", year: "2021" },
    content:
      "On 2nd February 2021 (Tuesday), R. N. Mukherjee Memorial Lecture was organised to inspire students."
  },
  {
    id: 27,
    title: "Webinar Programme",
    image: "images/news/2021/webinar.jpg",
    date: { day: "10", month: "Feb", year: "2021" },
    content:
      "On 10th February 2021 (Wednesday), a Webinar Programme was conducted to enhance digital learning."
  },

  {
    id: 28,
    title: "Community Living Camp",
    image: "images/news/2022/community.jpg",
    date: { day: "12", month: "Jan", year: "2022" },
    content:
      "On 12th January 2022 (Wednesday), Community Living Camp was organised for the students."
  },

  {
    id: 29,
    title: "World AIDS Day",
    image: "images/news/2023/aids.jpg",
    date: { day: "01", month: "Dec", year: "2023" },
    content:
      "On 1st December 2023 (Friday), World AIDS Day was observed to create awareness among students."
  },
  {
    id: 30,
    title: "Ambedkar Jayanthi",
    image: "images/news/2023/ambedkar.jpg",
    date: { day: "14", month: "Apr", year: "2023" },
    content:
      "On 14th April 2023 (Friday), Dr. B. R. Ambedkar Jayanthi was celebrated."
  },
  {
    id: 31,
    title: "Anatomy Chart Exhibition",
    image: "images/news/2023/anatomy.jpg",
    date: { day: "18", month: "Jan", year: "2023" },
    content:
      "On 18th January 2023 (Wednesday), an Anatomy Chart Exhibition was organised."
  },
  {
    id: 32,
    title: "Basava Jayanthi",
    image: "images/news/2023/basava.jpg",
    date: { day: "23", month: "May", year: "2023" },
    content:
      "On 23rd May 2023 (Tuesday), Basava Jayanthi was celebrated."
  },
  {
    id: 33,
    title: "Visit of BEO",
    image: "images/news/2023/beo.jpg",
    date: { day: "07", month: "Feb", year: "2023" },
    content:
      "On 7th February 2023 (Tuesday), the Block Education Officer visited the institution."
  },
  {
    id: 34,
    title: "Calligraphy Exhibition",
    image: "images/news/2023/calligraphy.jpg",
    date: { day: "20", month: "Jan", year: "2023" },
    content:
      "On 20th January 2023 (Friday), a Calligraphy Exhibition was organised."
  },
  {
    id: 35,
    title: "Chart Display Programme",
    image: "images/news/2023/chart.jpg",
    date: { day: "25", month: "Jan", year: "2023" },
    content:
      "On 25th January 2023 (Wednesday), a Chart Display Programme was organised."
  },
  {
    id: 36,
    title: "Communication Skills Programme",
    image: "images/news/2023/communication.jpg",
    date: { day: "30", month: "Jan", year: "2023" },
    content:
      "On 30th January 2023 (Monday), a Communication Skills Programme was conducted."
  },
  {
    id: 37,
    title: "Community Living Camp",
    image: "images/news/2023/community.jpg",
    date: { day: "15", month: "Feb", year: "2023" },
    content:
      "On 15th February 2023 (Wednesday), Community Living Camp was organised."
  },
  {
    id: 38,
    title: "Cultural Programme",
    image: "images/news/2023/cultural.jpg",
    date: { day: "22", month: "Feb", year: "2023" },
    content:
      "On 22nd February 2023 (Wednesday), a Cultural Programme was organised."
  },

  {
    id: 39,
    title: "Cycle Rally",
    image: "images/news/2023/cyclerally.jpg",
    date: { day: "25", month: "Jan", year: "2023" },
    content:
      "On 25th January 2023 (Wednesday), a Cycle Rally was organised to create awareness among students."
  },
  {
    id: 40,
    title: "DIET Visit",
    image: "images/news/2023/diet.jpg",
    date: { day: "27", month: "Jan", year: "2023" },
    content:
      "On 27th January 2023 (Friday), the students visited DIET as part of academic exposure."
  },
  {
    id: 41,
    title: "EVM Awareness Programme",
    image: "images/news/2023/evm.jpg",
    date: { day: "01", month: "Feb", year: "2023" },
    content:
      "On 1st February 2023 (Wednesday), an EVM Awareness Programme was organised."
  },
  {
    id: 42,
    title: "Founders Day",
    image: "images/news/2023/foundersday.jpg",
    date: { day: "04", month: "Feb", year: "2023" },
    content:
      "On 4th February 2023 (Saturday), Founders Day was celebrated."
  },
  {
    id: 43,
    title: "Freshers Day",
    image: "images/news/2023/freshers.jpg",
    date: { day: "06", month: "Feb", year: "2023" },
    content:
      "On 6th February 2023 (Monday), Freshers Day was celebrated."
  },
  {
    id: 44,
    title: "Health Awareness Programme",
    image: "images/news/2023/health.jpg",
    date: { day: "09", month: "Feb", year: "2023" },
    content:
      "On 9th February 2023 (Thursday), a Health Awareness Programme was organised."
  },
  {
    id: 45,
    title: "History Quiz",
    image: "images/news/2023/historyquiz.jpg",
    date: { day: "13", month: "Feb", year: "2023" },
    content:
      "On 13th February 2023 (Monday), a History Quiz competition was conducted."
  },
  {
    id: 46,
    title: "ICT Training Programme",
    image: "images/news/2023/ict.jpg",
    date: { day: "16", month: "Feb", year: "2023" },
    content:
      "On 16th February 2023 (Thursday), an ICT Training Programme was organised."
  },
  {
    id: 47,
    title: "ICT Model Exhibition",
    image: "images/news/2023/ictmodel.jpg",
    date: { day: "20", month: "Feb", year: "2023" },
    content:
      "On 20th February 2023 (Monday), an ICT Model Exhibition was organised."
  },
  {
    id: 48,
    title: "Independence Day",
    image: "images/news/2023/independence.jpg",
    date: { day: "15", month: "Aug", year: "2023" },
    content:
      "On 15th August 2023 (Tuesday), Independence Day was celebrated."
  },
  {
    id: 49,
    title: "Lal Bahadur Shastri Jayanthi",
    image: "images/news/2023/lal.jpg",
    date: { day: "02", month: "Oct", year: "2023" },
    content:
      "On 2nd October 2023 (Monday), Lal Bahadur Shastri Jayanthi was celebrated."
  },
  {
    id: 50,
    title: "Local Visit",
    image: "images/news/2023/localvisit.jpg",
    date: { day: "06", month: "Feb", year: "2023" },
    content:
      "On 6th February 2023 (Monday), students went on a local visit."
  },
  {
    id: 51,
    title: "Martyrs Day",
    image: "images/news/2023/mart.jpg",
    date: { day: "30", month: "Jan", year: "2023" },
    content:
      "On 30th January 2023 (Monday), Martyrs Day was observed."
  },
  {
    id: 52,
    title: "Museum Visit",
    image: "images/news/2023/museum.jpg",
    date: { day: "11", month: "Feb", year: "2023" },
    content:
      "On 11th February 2023 (Saturday), students visited the museum."
  },
  {
    id: 53,
    title: "National Science Day",
    image: "images/news/2023/nationalscience.jpg",
    date: { day: "28", month: "Feb", year: "2023" },
    content:
      "On 28th February 2023 (Tuesday), National Science Day was celebrated."
  },
  {
    id: 54,
    title: "Oriental Research Institute Visit",
    image: "images/news/2023/oriental.jpg",
    date: { day: "17", month: "Feb", year: "2023" },
    content:
      "On 17th February 2023 (Friday), students visited the Oriental Research Institute."
  },
  {
    id: 55,
    title: "Panel Discussion",
    image: "images/news/2023/panel.jpg",
    date: { day: "21", month: "Feb", year: "2023" },
    content:
      "On 21st February 2023 (Tuesday), a Panel Discussion was organised."
  },
  {
    id: 56,
    title: "Paper Bag Making Programme",
    image: "images/news/2023/paperbag.jpg",
    date: { day: "24", month: "Feb", year: "2023" },
    content:
      "On 24th February 2023 (Friday), a Paper Bag Making Programme was organised."
  },
  {
    id: 57,
    title: "Residential School Visit",
    image: "images/news/2023/residential.jpg",
    date: { day: "27", month: "Feb", year: "2023" },
    content:
      "On 27th February 2023 (Monday), students visited a Residential School."
  },
  {
    id: 58,
    title: "School Visit",
    image: "images/news/2023/schoolvisit.jpg",
    date: { day: "01", month: "Mar", year: "2023" },
    content:
      "On 1st March 2023 (Wednesday), a School Visit was organised."
  },
  {
    id: 59,
    title: "Science Exhibition",
    image: "images/news/2023/science.jpg",
    date: { day: "05", month: "Mar", year: "2023" },
    content:
      "On 5th March 2023 (Sunday), a Science Exhibition was organised."
  },
  {
    id: 60,
    title: "Udyoga Mela",
    image: "images/news/2023/udyoga.jpg",
    date: { day: "08", month: "Mar", year: "2023" },
    content:
      "On 8th March 2023 (Wednesday), Udyoga Mela (Job Fair) was organised."
  },
  {
    id: 61,
    title: "Udyoga Mela – II",
    image: "images/news/2023/udyoga2.jpg",
    date: { day: "09", month: "Mar", year: "2023" },
    content:
      "On 9th March 2023 (Thursday), the second phase of Udyoga Mela was organised."
  },
  {
    id: 62,
    title: "Voters Awareness Programme",
    image: "images/news/2023/vote.jpg",
    date: { day: "13", month: "Mar", year: "2023" },
    content:
      "On 13th March 2023 (Monday), a Voters Awareness Programme was organised."
  },
  {
    id: 63,
    title: "Wildlife Awareness Programme",
    image: "images/news/2023/wildlife.jpg",
    date: { day: "16", month: "Mar", year: "2023" },
    content:
      "On 16th March 2023 (Thursday), a Wildlife Awareness Programme was conducted."
  },
  {
    id: 64,
    title: "International Yoga Day",
    image: "images/news/2023/yoga.jpg",
    date: { day: "21", month: "Jun", year: "2023" },
    content:
      "On 21st June 2023 (Wednesday), International Yoga Day was celebrated."
  },
  {
    id: 65,
    title: "Youth Programme",
    image: "images/news/2023/youth.jpg",
    date: { day: "12", month: "Aug", year: "2023" },
    content:
      "On 12th August 2023 (Saturday), a Youth Programme was organised."
  }
];

export default newsData;
