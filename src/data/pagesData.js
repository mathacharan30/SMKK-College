import { naacData } from './naacData';
import facilitiesData from './labData';

export const pagesData = {
    // ... New Pages ...
    iiqa: {
        title: "IIQA",
        sections: [{ type: 'document-grid', items: naacData.iiqa }]
    },
    annexures: {
        title: "Annexures",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="grid gap-4">
                        <a href="/criteria-1" class="block p-4 bg-white border border-l-4 border-l-primary shadow-sm hover:shadow-md transition py-4 flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-primary">1. Curricular Aspects</span>
                            <span class="text-gray-400 group-hover:text-primary">→</span>
                        </a>
                        <a href="/criteria-2" class="block p-4 bg-white border border-l-4 border-l-primary shadow-sm hover:shadow-md transition py-4 flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-primary">2. Teaching, Learning and Evaluation</span>
                            <span class="text-gray-400 group-hover:text-primary">→</span>
                        </a>
                        <a href="/criteria-3" class="block p-4 bg-white border border-l-4 border-l-primary shadow-sm hover:shadow-md transition py-4 flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-primary">3. Research and Outreach Activities</span>
                            <span class="text-gray-400 group-hover:text-primary">→</span>
                        </a>
                         <a href="/criteria-4" class="block p-4 bg-white border border-l-4 border-l-primary shadow-sm hover:shadow-md transition py-4 flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-primary">4. Infrastructure and Learning Resources</span>
                            <span class="text-gray-400 group-hover:text-primary">→</span>
                        </a>
                         <a href="/criteria-5" class="block p-4 bg-white border border-l-4 border-l-primary shadow-sm hover:shadow-md transition py-4 flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-primary">5. Student Support and Progression</span>
                            <span class="text-gray-400 group-hover:text-primary">→</span>
                        </a>
                         <a href="/criteria-6" class="block p-4 bg-white border border-l-4 border-l-primary shadow-sm hover:shadow-md transition py-4 flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-primary">6. Governance, Leadership and management</span>
                            <span class="text-gray-400 group-hover:text-primary">→</span>
                        </a>
                         <a href="/criteria-7" class="block p-4 bg-white border border-l-4 border-l-primary shadow-sm hover:shadow-md transition py-4 flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-primary">7. Institutional Values and Best Practices</span>
                            <span class="text-gray-400 group-hover:text-primary">→</span>
                        </a>
                        <a href="/extended-profile" class="block p-4 bg-white border border-l-4 border-l-secondary shadow-sm hover:shadow-md transition py-4 flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-secondary">Extended Profile (Results)</span>
                            <span class="text-gray-400 group-hover:text-secondary">→</span>
                        </a>
                    </div>
                `
            }
        ]
    },
    'criteria': { // Wrapper for sub-routes if needed, but we'll use flat IDs like criteria-1
        // Actually GenericPage uses /:pageId. So /criteria/1 won't work unless route is /criteria/:id.
        // Let's use simple IDs: criteria-1, criteria-2
        // Wait, I used /criteria/1 in links above. I should change them to /criteria-1 or update router.
        // Simpler to use /criteria-1
    },
    'criteria-1': { title: "1. Curricular Aspects", sections: [{ type: 'document-grid', items: naacData.criteria1 }] },
    'criteria-2': { title: "2. Teaching, Learning and Evaluation", sections: [{ type: 'document-grid', items: naacData.criteria2 }] },
    'criteria-3': { title: "3. Research and Outreach Activities", sections: [{ type: 'document-grid', items: naacData.criteria3 }] },
    'criteria-4': { title: "4. Infrastructure and Learning Resources", sections: [{ type: 'document-grid', items: naacData.criteria4 }] },
    'criteria-5': { title: "5. Student Support and Progression", sections: [{ type: 'document-grid', items: naacData.criteria5 }] },
    'criteria-6': { title: "6. Governance, Leadership and management", sections: [{ type: 'document-grid', items: naacData.criteria6 }] },
    'criteria-7': { title: "7. Institutional Values and Best Practices", sections: [{ type: 'document-grid', items: naacData.criteria7 }] },
    'extended-profile': { title: "Extended Profile", sections: [{ type: 'document-grid', items: naacData.extendedProfile }] },

    'ssr': { title: "Self Study Report", sections: [{ type: 'text', content: '<p>Self Study Report (SSR) is under process.</p>' }] }, // Fallback

    // IQAC Pages
    'iqac-meetings': { title: "IQAC Meetings", sections: [{ type: 'document-grid', items: naacData.iqacMeetings }] },
    'iqac-documents': { title: "IQAC Documents", sections: [{ type: 'document-grid', items: naacData.iqacDocuments }] },
    'feedback': { title: "Feedback", sections: [{ type: 'document-grid', items: naacData.iqacFeedback }] },

    // Alumni Pages
    'alumni-meetings': { title: "Alumni Meetings", sections: [{ type: 'document-grid', items: naacData.alumniMeetings }] },
    'alumni-activities': { title: "Alumni Activities", sections: [{ type: 'document-grid', items: naacData.alumniActivities }] },

    admission: {
        title: "Admission",
        sections: [
            {
                type: "text",
                title: "Admission Procedure",
                content: `
          <h3 class="text-xl font-bold mb-2">Course Offered: <span class="text-secondary">B.Ed. (Bachelor of Education)</span></h3>
          <h3 class="text-xl font-bold mb-2">Duration: <span class="text-secondary">2 years (4 Semesters)</span></h3>
          <h3 class="text-xl font-bold mb-2">Scheme: <span class="text-secondary">Semester - CBCS, CAGP</span></h3>
          
          <h3 class="text-xl font-bold mt-6 mb-4">Eligibility and Admission Procedures:</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>A Citizen of India who has passed any Bachelor’s degree examination of any Recognized University or any University in India or abroad recognized as equivalent through 10+2+3/4/5 pattern of education who has obtained 50% of marks in aggregate of all the subjects he/she has studied for degree is eligible for admission to B.Ed. programme.</li>
            <li>The candidate with 50% aggregate in the Degree or Master’s Degree is eligible for B. Ed. programme.</li>
            <li>In case of SC/ST, Category -1 and physically challenged students 45% aggregate in the Degree or Master’s Degree is eligible for B.Ed. programme.</li>
            <li>A candidate for the admission to Bachelor of Education (B. Ed.) must fulfill the eligibility criteria as per the directives of Govt. of Karnataka from time to time.</li>
            <li>Candidates shall have studied any one of the languages and two of the three electives specified below. Candidate should have studied two of the three electives for all the three years at degree or graduation level.</li>
            <li>Candidates must have passed in University Exams for all the three years and at the time of admission to B.Ed., shall compulsorily produce three years degree marks cards issued by the University.</li>
          </ul>

          <h3 class="text-xl font-bold mt-6 mb-4">Documents Required</h3>
          <h4 class="font-semibold mb-2">Following Documents are to be produced for Scrutiny:</h4>
          <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>Seat Allotment Central Admission Cell/ CTE during centralized admission process (For Government quota students)</li>
            <li>SSLC Marks Card</li>
            <li>Class-XII (PUC) Marks Card</li>
            <li>Original Transcripts of UG/PG (whichever is applicable for claiming admission)</li>
            <li>Study Certificate (As per the format issued by Centralized Admission Cell)</li>
            <li>Transfer Certificate from College last attended</li>
            <li>Caste & Income Certificate (If claiming the reservation)</li>
            <li>Copy of Identity Proof-Aadhaar</li>
            <li>Photocopy of Bank Passbook</li>
            <li>Migration Certificate (in the case of applicants coming from other Board / Universities)</li>
            <li>Eligibility / Equivalency Certificate (in the case of applicants coming from other Universities)</li>
            <li>Passport size photos – 4 copies</li>
            <li>Attested true copies of certificates (02 Nos.)</li>
          </ul>

          <h3 class="text-xl font-bold mt-6 mb-4">Other Certificates (If Applicable):</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>NCC Certificate: Signed by the Director and issued by the Directorate of NCC</li>
            <li>NSS Certificate: Signed by the respective authority</li>
            <li>Certificates concerning widows and children of Jawans and Ex-service men and Border Security Force personnel killed or disabled in an action</li>
            <li>President’s badges in Scouts and Guides, outstanding records in sports and games at the district, state or university levels.</li>
            <li>Physical Disability Certificate issued by the competent authority</li>
          </ul>
        `
            },
            {
                type: "table",
                title: "Seats Earmarked",
                headers: ["Category", "Total Seats"],
                rows: [
                    ["Government quota", "37"],
                    ["Management quota", "13"],
                    ["Total Seats", "50"]
                ]
            },
            {
                type: "text",
                title: "Rules for admission",
                content: `
            <ul class="list-disc pl-5 space-y-2 mt-4">
                <li>The college adheres to the rules and regulations stipulated by the University of Mysore, Government of Karnataka, NCTE & UGC norms.</li>
				<li>Admission procedure commences soon after the publication of the results of the qualifying examinations.</li>
				<li>Application forms to be collected from college and submitted to college only.</li>
				<li>Application for admission should reach the college office on or before the specified date.</li>
				<li>No application will be considered unless accompanied by a copy of the statement of marks obtained at the examination.</li>
				<li>Only certified copies of the certificates should be attached. Originals should be submitted at the time of admission.</li>
				<li>Migration certificates should be submitted by the students coming from the other states universities.</li>
				<li>Students coming from other universities or states seeking admission to courses in this college are required to produce a certificate from the respective universities with an eligibility certificate from the University.</li>
				<li>Only after the producing of such certificate their applications will be considered for admission.</li>
				<li>Fee paid on admission, will not be refunded.</li>
				<li>Candidates selected for admission should pay the prescribed fee and produce the original of the transfer certificate and statements of marks on or before the dates notified.</li>
				<li>Names of the students provisionally selected for admission will be announced on the college Notice Board.</li>
				<li>Admission cannot be claimed as a matter of right.</li>
				<li><b>Admission to the course is subjected to the approval from University of Mysore.</b></li>
            </ul>
         `
            },
            {
                type: 'images',
                images: [
                    '/images/about/ad-1.jpg',
                    '/images/about/ad-2.jpg'
                ]
            }
        ]
    },
    naac: {
        title: "NAAC",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="md:w-1/3 order-2 md:order-1">
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                                <h4 class="text-xl font-bold border-b-2 border-primary pb-3 mb-4 text-gray-800">Quick Links</h4>
                                <ul class="space-y-3">
                                    <li><a href="/iiqa" class="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3">IIQA</a></li>
                                    <li><a href="/annexures" class="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3">Annexures</a></li>
                                    <li><a href="/ssr" class="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3">Self Study Report</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:w-2/3 order-1 md:order-2">
                             <div class="prose max-w-none">
                                <p>Details about NAAC accreditation will be updated here. The institution strives for excellence in education and meets the quality standards set by NAAC.</p>
                             </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    iqac: {
        title: "IQAC",
        sections: [
            {
                type: 'text',
                content: `
                 <div class="flex flex-col md:flex-row gap-8">
                     <div class="md:w-2/3">
                        <div class="mb-8">
                            <img src="/images/college/qac.jpg" alt="IQAC" class="w-full h-auto rounded-lg shadow-md mb-6" />
                            <h3 class="text-2xl font-bold text-primary mb-4">About IQAC</h3>
                            <p class="text-gray-700 leading-relaxed mb-4">
                                The IQAC, constituted as per the guidelines of NAAC includes, the following members to initiate plans and supervise various activities that are necessary to increase the quality of the education imparted into the college. The IQAC was established in the Sri Kaginele Mahasamsthana Kanaka Gurupeetha College of Education in 2021, is aimed at the academic excellence of the institute enhancement activities.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">The composition of the IQAC is as follows:</p>
                        </div>
                        
                        <div class="grid gap-6">
                            <div class="bg-gray-50 p-6 rounded border-l-4 border-primary">
                                <h4 class="text-lg font-bold text-primary mb-2">Chairperson</h4>
                                <h5 class="text-gray-800 font-medium">Dr. Vishalakshi. K. K (Principal)</h5>
                            </div>

                            <div class="bg-gray-50 p-6 rounded border-l-4 border-primary">
                                <h4 class="text-lg font-bold text-primary mb-2">Members</h4>
                                <ul class="list-none space-y-1 text-gray-800">
                                    <li>Dr.Sharathkumar.S.M</li>
                                    <li>Smt. Sujatha.K</li>
                                    <li>Dr. Premkumar.S</li>
                                    <li>Sri.Sannaramegowda.M.L</li>
                                    <li>Sri.Nagesha.G.M</li>
                                </ul>
                            </div>

                             <div class="bg-gray-50 p-6 rounded border-l-4 border-primary">
                                <h4 class="text-lg font-bold text-primary mb-2">Member from the Management</h4>
                                <h5 class="text-gray-800 font-medium">Sri.M.Puttabasavegowda</h5>
                                <p class="text-sm text-gray-600">Hon.Secretary<br>Sri Kaginele Mahasamsthana Kanaka Gurupeetha College of Education</p>
                            </div>

                            <div class="bg-gray-50 p-6 rounded border-l-4 border-primary">
                                <h4 class="text-lg font-bold text-primary mb-2">Member from the Senior administrative officers</h4>
                                <h5 class="text-gray-800 font-medium">Prof. Nagaraja.N</h5>
                            </div>
                            
                             <div class="bg-gray-50 p-6 rounded border-l-4 border-primary">
                                <h4 class="text-lg font-bold text-primary mb-2">Members from Students</h4>
                                <ul class="list-none space-y-1 text-gray-800">
                                    <li>Ashwini, Sanjana, Darshini, Vivekananda, Nalini, Geetha</li>
                                </ul>
                            </div>

                            <div class="bg-gray-50 p-6 rounded border-l-4 border-primary">
                                <h4 class="text-lg font-bold text-primary mb-2">Member from Alumni</h4>
                                <h5 class="text-gray-800 font-medium">Arpitha K A P</h5>
                            </div>

                            <div class="bg-gray-50 p-6 rounded border-l-4 border-primary">
                                <h4 class="text-lg font-bold text-primary mb-2">Stakeholder</h4>
                                <h5 class="text-gray-800 font-medium">Dr.H.B.Bettaswamy</h5>
                                <p class="text-sm text-gray-600">Asst. Professor, BGS B.Ed. College, Mysuru</p>
                            </div>

                            <div class="bg-gray-50 p-6 rounded border-l-4 border-primary">
                                <h4 class="text-lg font-bold text-primary mb-2">Director/Coordinator</h4>
                                <h5 class="text-gray-800 font-medium">Dr.Selvakumar.S</h5>
                                <p class="text-sm text-gray-600">Assistant Professor</p>
                            </div>
                        </div>
                     </div>

                     <div class="md:w-1/3">
                        <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                            <h4 class="text-xl font-bold border-b-2 border-primary pb-3 mb-4 text-gray-800">Quick Links</h4>
                             <ul class="space-y-3">
                                <li><a href="/iqac" class="block text-secondary font-bold border-l-4 border-secondary pl-3">About IQAC</a></li>
                                <li><a href="/iqac-meetings" class="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3">Meetings</a></li>
                                <li><a href="/iqac-documents" class="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3">Documents</a></li>
                                <li><a href="/feedback" class="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3">Feedback</a></li>
                            </ul>
                        </div>
                     </div>
                 </div>
                `
            }
        ]
    },
    'alumni-association': {
        title: "Alumni Association",
        sections: [
            {
                type: 'text',
                content: `
                <div class="flex flex-col md:flex-row gap-8">
                     <div class="md:w-1/3 order-2 md:order-1">
                        <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                            <h4 class="text-xl font-bold border-b-2 border-primary pb-3 mb-4 text-gray-800">Quick Links</h4>
                             <ul class="space-y-3">
                                <li><a href="/alumni-association" class="block text-secondary font-bold border-l-4 border-secondary pl-3">Alumni Association</a></li>
                                <li><a href="/alumni-meetings" class="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3">Meetings</a></li>
                                <li><a href="/alumni-activities" class="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3">Activities</a></li>
                            </ul>
                        </div>
                        
                         <div class="bg-primary/90 p-6 rounded-lg text-white text-center">
                            <h6 class="text-lg font-bold mb-4">Alumni Association Certificate</h6>
                            <a href="/documents/Alumni-Association-Certificate.pdf" target="_blank" class="inline-block px-6 py-2 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors">Know More...</a>
                        </div>
                     </div>

                     <div class="md:w-2/3 order-1 md:order-2">
                        <h3 class="text-2xl font-bold text-primary mb-4">About Alumni Association</h3>
                        <p class="text-gray-700 leading-relaxed mb-8">
                            Alumni Association is established in the institution in 2001. Since then it is active and has conducts various activities for the welfare of the organization. The association fills the gap between the present and alumni students and helps in building professionalism. It uplifts the potentialities of the students by organizing guest lectures, training sessions, conducting inter/ intra college competitions. Alumni Association is registered in the year 2023.
                        </p>

                        <h4 class="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Executive Committee</h4>
                        
                         <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="p-4 bg-white shadow rounded hover:shadow-md transition-shadow">
                                <h4 class="text-primary font-bold">Hon. President</h4>
                                <h5 class="text-gray-800">Sri Puttaswamy D</h5>
                            </div>
                             <div class="p-4 bg-white shadow rounded hover:shadow-md transition-shadow">
                                <h4 class="text-primary font-bold">President</h4>
                                <h5 class="text-gray-800">Dr. Vishalakshi K K</h5>
                            </div>
                             <div class="p-4 bg-white shadow rounded hover:shadow-md transition-shadow">
                                <h4 class="text-primary font-bold">Working Committee Chairmen</h4>
                                <ul class="text-gray-800 text-sm list-inside">
                                    <li>Sri Venkataramu G</li>
                                    <li>Sri Basavaraju</li>
                                    <li>Sri Prashanth P</li>
                                </ul>
                            </div>
                             <div class="p-4 bg-white shadow rounded hover:shadow-md transition-shadow">
                                <h4 class="text-primary font-bold">Chief Secretary</h4>
                                <h5 class="text-gray-800">Sri Jagadish C</h5>
                            </div>
                            <div class="p-4 bg-white shadow rounded hover:shadow-md transition-shadow">
                                <h4 class="text-primary font-bold">Joint Secretary</h4>
                                <h5 class="text-gray-800">Sri Nandan N</h5>
                            </div>
                             <div class="p-4 bg-white shadow rounded hover:shadow-md transition-shadow">
                                <h4 class="text-primary font-bold">Member</h4>
                                <h5 class="text-gray-800">Sri. N. Nanjegowda</h5>
                            </div>
                             <div class="p-4 bg-white shadow rounded hover:shadow-md transition-shadow">
                                <h4 class="text-primary font-bold">Treasurer</h4>
                                <h5 class="text-gray-800">Dr. Sharathkumar S M</h5>
                            </div>
                        </div>

                        <div class="mt-8">
                             <h4 class="text-primary font-bold mb-2">Publicity Committee</h4>
                             <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div><span class="font-semibold">President:</span> Dr. Anthony Paul Raj</div>
                                <div><span class="font-semibold">Vice President:</span> Sri Suresh B</div>
                             </div>

                             <h4 class="text-primary font-bold mb-2">Organising Secretaries</h4>
                             <p class="text-gray-700 mb-6">Dr. Bettaswamy H, Sri Rangaswamy S, Sri Siddaramu B</p>

                             <h4 class="text-primary font-bold mb-2">Directors</h4>
                             <p class="text-gray-700 mb-6">Sri Srinivasa K, Dr. Sudarshan M, Sri. Manju J, Sri Charan Kumar, Sri. Cheluvaraju, Sri Jagadish N</p>
                        </div>
                     </div>
                </div>
                `
            }
        ]
    },
    initiatives: {
        title: "Initiatives",
        sections: [
            {
                type: 'text',
                content: `
                <div class="bg-white p-6 md:p-10 rounded-lg shadow-sm">
                    <h3 class="text-2xl font-bold text-primary mb-6 border-b pb-4">Our Initiatives</h3>
                    
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <div>
                             <p class="font-semibold text-lg mb-2">1. Memorandum of Understanding (MoU)</p>
                             <p class="pl-4">Institution has signed Memorandum of Understanding with Vidya Vikas B.Ed. College, Mysuru on 02/01/2023 for:</p>
                             <ul class="list-disc pl-10 mt-2 space-y-1">
                                <li>Faculty Exchange Programmes</li>
                                <li>Student Exchange Programmes</li>
                                <li>Cultural Exchange Programmes</li>
                             </ul>
                        </div>
                        
                        <div>
                            <p class="font-semibold text-lg mb-2">2. Village Adoption</p>
                            <p class="pl-4">College has adopted a village Doddahattihundi Village, Doddamaregowdanahalli Gram Panchayath of Mysore Taluk on 15/10/2022.</p>
                        </div>

                        <div>
                            <p class="font-semibold text-lg mb-2">3. MoU with Suraksha Foundation®</p>
                             <p class="pl-4">Signed MoU with Suraksha Foundation®, Mysuru on 25/08/2020 for the purpose of providing necessary training and assistance to B.Ed. trainees.</p>
                        </div>

                         <div>
                            <p class="font-semibold text-lg mb-2">4. Value-Added Courses</p>
                             <p class="pl-4">College as a practice of offering value-added course titled “Functional English” since 2018.</p>
                        </div>

                         <div>
                            <p class="font-semibold text-lg mb-2">5. MOOCs</p>
                             <p class="pl-4">Students are promoted to enroll self-study courses in MOOCs and their academic & Professional platforms.</p>
                        </div>
                    </div>

                    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-primary/90 p-6 rounded-lg text-white flex flex-col items-center text-center shadow-lg hover:bg-primary transition-colors">
                            <i class="lucide-file-text text-4xl mb-4 opacity-80"></i>
                            <h6 class="font-bold text-lg mb-4">Memorandum of Understanding SKMK VVTC</h6>
                            <a href="/documents/1. Memorandum of Understanding SKMK VVTC.pdf" target="_blank" class="px-6 py-2 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors uppercase text-sm">Click Here to View</a>
                        </div>

                        <div class="bg-primary/90 p-6 rounded-lg text-white flex flex-col items-center text-center shadow-lg hover:bg-primary transition-colors">
                             <i class="lucide-file-text text-4xl mb-4 opacity-80"></i>
                            <h6 class="font-bold text-lg mb-4">Brochure & Course Content of Value Added Course</h6>
                            <a href="/documents/2. Brochure and Course Content of value added Course.pdf" target="_blank" class="px-6 py-2 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors uppercase text-sm">Click Here to View</a>
                        </div>
                    </div>
                </div>
                `
            },
            {
                type: 'clients-slider', // Just usage indicator, actual slider is separate component
                title: 'Our Clients',
                content: '' // Placeholder if needed or handle in GenericPage
            }
        ]
    },
    secretary: {
        title: "Secretary's Desk",
        sections: [
            {
                type: 'profile',
                name: 'Sri.M.Puttabasave Gowda',
                role: 'Hon. Secretary',
                image: '/images/college/management2.jpg',
                content: 'Message from the Secretary goes here...'
            }
        ]
    },
    principal: {
        title: "Principal's Message",
        sections: [
            {
                type: 'profile',
                name: 'Dr. Vishalakshi K K',
                role: 'Principal',
                image: '/images/staff/Dr.Vishalakshi-K-K.jpg', // Reusing staff image
                content: 'Message from the Principal goes here...'
            }
        ]
    },
    student: {
        title: "Students",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h3 class="text-2xl font-bold text-secondary mb-4">Students</h3>
                        <p class="text-lg text-gray-700 mb-8">Check out Students.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <a href="/documents/2022.pdf" target="_blank" class="block">
                                <div class="bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105">
                                    <h4 class="text-2xl font-bold mb-2">2021-22</h4>
                                    <p class="text-sm opacity-90">View Student Information</p>
                                </div>
                            </a>
                            
                            <a href="/documents/2023.pdf" target="_blank" class="block">
                                <div class="bg-gradient-to-br from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105">
                                    <h4 class="text-2xl font-bold mb-2">2022-23</h4>
                                    <p class="text-sm opacity-90">View Student Information</p>
                                </div>
                            </a>
                            
                            <a href="/documents/2024.pdf" target="_blank" class="block">
                                <div class="bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105">
                                    <h4 class="text-2xl font-bold mb-2">2023-24</h4>
                                    <p class="text-sm opacity-90">View Student Information</p>
                                </div>
                            </a>
                        </div>
                    </div>
                `
            },
            {
                type: 'clients-slider'
            }
        ]
    },
    'student-council': {
        title: 'Student Council',
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h2 class="text-3xl font-bold text-secondary mb-4">Student Council 2022 - 23</h2>
                        <p class="text-lg text-gray-700 leading-relaxed mb-8">
                            A Student Council is a group of elected and volunteer students working together with an adult advisor 
                            within the framework of a constitution or bylaws to provide a means for student expression and assistance 
                            in school affairs and activities, give opportunities for student experience in leadership and encourage 
                            student / faculty/ community relations.
                        </p>
                    </div>
                `
            },
            {
                type: 'images',
                images: ['/images/college/student-council.jpg']
            },
            {
                type: 'text',
                content: '<h3 class="text-2xl font-bold text-gray-800 mb-4">Members of the Council</h3>'
            },
            {
                type: 'table',
                headers: ['Position', 'Name', 'Year/Role'],
                rows: [
                    ['President', 'Dr.Vishalakshi.K.K', 'Principal'],
                    ['Vice-President', 'Suban Sab', 'II year'],
                    ['Secretary', 'Vivekananda', 'I Year'],
                    ['Joint-Secretary', 'Arjun K', 'II year'],
                    ['Member', 'Siddaraju', 'II year'],
                    ['Member', 'Bindushree', 'II year'],
                    ['Member', 'Sanjana H S', 'I year'],
                    ['Member', 'Ashiwini Kashyap', 'I year'],
                    ['Member', 'Shanthisagar S', 'I year'],
                    ['Member', 'Kranthikumar', 'II year'],
                    ['Convener', 'Dr.Sharathkumar.S.M', 'Faculty Advisor'],
                    ['Convener', 'Dr. Premkumar.S', 'Faculty Advisor']
                ]
            },
            {
                type: 'clients-slider'
            }
        ]
    },
    organogram: {
        title: 'Organogram',
        sections: [
            {
                type: 'text',
                content: '<p>Organizational structure of the institution.</p>'
            }
        ]
    },
    'anti-ragging': {
        title: 'Anti-Ragging Committee',
        sections: [
            {
                type: 'text',
                content: '<p>Zero tolerance policy towards ragging. The committee ensures a safe campus for all students.</p>'
            }
        ]
    },
    'grievance-redressal': {
        title: 'Grievance Redressal',
        sections: [
            {
                type: 'text',
                content: '<p>Mechanism to address student grievances effectively and fairly.</p>'
            }
        ]
    },
    'women-harrasment': {
        title: 'Women Harassment Prevention',
        sections: [
            {
                type: 'text',
                content: '<p>Committee strictly dedicated to preventing harassment against women and ensuring their safety and dignity.</p>'
            }
        ]
    },
    library: {
        title: 'Library',
        sections: [
            {
                type: 'text',
                title: 'College Library',
                content: '<p>Our library is well-stocked with a vast collection of books, journals, and digital resources to support learning and research.</p>'
            }
        ]
    },
    computerlab: {
        title: "Computer Laboratory",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                        ${facilitiesData.find(l => l.id === 2)?.image ? `
                        <div class="md:w-1/2">
                            <img src="${facilitiesData.find(l => l.id === 2).image}" alt="Computer Laboratory" class="w-full rounded-lg shadow-lg" />
                        </div>` : ''}
                        <div class="${facilitiesData.find(l => l.id === 2)?.image ? 'md:w-1/2' : 'w-full'} prose max-w-none">
                            <h3 class="text-2xl font-bold text-primary mb-4">Computer Laboratory</h3>
                            <p>${facilitiesData.find(l => l.id === 2)?.content || ''}</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    psychology: {
        title: "Psychology Laboratory",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                         ${facilitiesData.find(l => l.id === 9)?.image ? `
                        <div class="md:w-1/2">
                            <img src="${facilitiesData.find(l => l.id === 9).image}" alt="Psychology Laboratory" class="w-full rounded-lg shadow-lg" />
                        </div>` : ''}
                        <div class="${facilitiesData.find(l => l.id === 9)?.image ? 'md:w-1/2' : 'w-full'} prose max-w-none">
                            <h3 class="text-2xl font-bold text-primary mb-4">Psychology Laboratory</h3>
                            <p>${facilitiesData.find(l => l.id === 9)?.content || ''}</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    physicslab: {
        title: "Physics Laboratory",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                         ${facilitiesData.find(l => l.id === 8)?.image ? `
                        <div class="md:w-1/2">
                            <img src="${facilitiesData.find(l => l.id === 8).image}" alt="Physics Laboratory" class="w-full rounded-lg shadow-lg" />
                        </div>` : ''}
                        <div class="${facilitiesData.find(l => l.id === 8)?.image ? 'md:w-1/2' : 'w-full'} prose max-w-none">
                            <h3 class="text-2xl font-bold text-primary mb-4">Physics Laboratory</h3>
                            <p>${facilitiesData.find(l => l.id === 8)?.content || ''}</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    chemistrylab: {
        title: "Chemistry Laboratory",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                        ${facilitiesData.find(l => l.id === 1)?.image ? `
                        <div class="md:w-1/2">
                            <img src="${facilitiesData.find(l => l.id === 1).image}" alt="Chemistry Laboratory" class="w-full rounded-lg shadow-lg" />
                        </div>` : ''}
                        <div class="${facilitiesData.find(l => l.id === 1)?.image ? 'md:w-1/2' : 'w-full'} prose max-w-none">
                            <h3 class="text-2xl font-bold text-primary mb-4">Chemistry Laboratory</h3>
                            <p>${facilitiesData.find(l => l.id === 1)?.content || ''}</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    biologylab: {
        title: "Biology Laboratory",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                         ${facilitiesData.find(l => l.id === 11)?.image ? `
                        <div class="md:w-1/2">
                            <img src="${facilitiesData.find(l => l.id === 11).image}" alt="Biology Laboratory" class="w-full rounded-lg shadow-lg" />
                        </div>` : ''}
                        <div class="${facilitiesData.find(l => l.id === 11)?.image ? 'md:w-1/2' : 'w-full'} prose max-w-none">
                            <h3 class="text-2xl font-bold text-primary mb-4">Biology Laboratory</h3>
                            <p>${facilitiesData.find(l => l.id === 11)?.content || ''}</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    playground: {
        title: 'Playground',
        sections: [
            {
                type: 'text',
                content: '<p>Spacious playground for sports and physical activities.</p>'
            }
        ]
    },
    scienceclub: {
        title: "Science Club",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h3 class="text-2xl font-bold text-secondary mb-4">About Science Club 2022 - 23</h3>
                        <p class="text-gray-700 leading-relaxed mb-8">${facilitiesData.find(l => l.id === 10)?.description || ''}</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold text-secondary mb-6 border-b-2 border-secondary pb-2">Structure of the Club</h3>
                                
                                <div class="space-y-4">
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Ex-officio President</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 10)?.structure?.president || ''}</p>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Convener</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 10)?.structure?.convener || ''}</p>
                                    </div>
                                    
                                    ${facilitiesData.find(l => l.id === 10)?.structure?.officeBearers ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-2">Club Office Bearers</h4>
                                        <ol class="list-decimal list-inside text-gray-800 space-y-1">
                                            ${facilitiesData.find(l => l.id === 10).structure.officeBearers.map(bearer => `<li>${bearer}</li>`).join('')}
                                        </ol>
                                    </div>
                                    ` : ''}
                                    
                                    ${facilitiesData.find(l => l.id === 10)?.structure?.members ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-2">Members</h4>
                                        <ol class="list-decimal list-inside text-gray-800 space-y-1">
                                            ${facilitiesData.find(l => l.id === 10).structure.members.map(member => `<li>${member}</li>`).join('')}
                                        </ol>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    mathematicsclub: {
        title: "Mathematics Club",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h3 class="text-2xl font-bold text-secondary mb-4">About Mathematics Club 2022 - 23</h3>
                        <p class="text-gray-700 leading-relaxed mb-8">${facilitiesData.find(l => l.id === 7)?.description || ''}</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold text-secondary mb-6 border-b-2 border-secondary pb-2">Structure of the Club</h3>
                                
                                <div class="space-y-4">
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Ex-officio President</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 7)?.structure?.president || ''}</p>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Convener</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 7)?.structure?.convener || ''}</p>
                                    </div>
                                    
                                    ${facilitiesData.find(l => l.id === 7)?.structure?.officeBearers ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-2">Club Office Bearers</h4>
                                        <ol class="list-decimal list-inside text-gray-800 space-y-1">
                                            ${facilitiesData.find(l => l.id === 7).structure.officeBearers.map(bearer => `<li>${bearer}</li>`).join('')}
                                        </ol>
                                    </div>
                                    ` : ''}
                                    
                                    ${facilitiesData.find(l => l.id === 7)?.structure?.members ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-2">Members</h4>
                                        <ol class="list-decimal list-inside text-gray-800 space-y-1">
                                            ${facilitiesData.find(l => l.id === 7).structure.members.map(member => `<li>${member}</li>`).join('')}
                                        </ol>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    geographyclub: {
        title: "Geography Club",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h3 class="text-2xl font-bold text-secondary mb-4">About Geography Club 2022 - 23</h3>
                        <p class="text-gray-700 leading-relaxed mb-8">${facilitiesData.find(l => l.id === 3)?.description || ''}</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold text-secondary mb-6 border-b-2 border-secondary pb-2">Structure of the Club</h3>
                                
                                <div class="space-y-4">
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Ex-officio President</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 3)?.structure?.president || ''}</p>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Convener</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 3)?.structure?.convener || ''}</p>
                                    </div>
                                    
                                    ${facilitiesData.find(l => l.id === 3)?.structure?.vicePresident ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Vice President</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 3).structure.vicePresident}</p>
                                    </div>
                                    ` : ''}
                                    
                                    ${facilitiesData.find(l => l.id === 3)?.structure?.secretary ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Secretary</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 3).structure.secretary}</p>
                                    </div>
                                    ` : ''}
                                    
                                    ${facilitiesData.find(l => l.id === 3)?.structure?.members ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-2">Members</h4>
                                        <ol class="list-decimal list-inside text-gray-800 space-y-1">
                                            ${facilitiesData.find(l => l.id === 3).structure.members.map(member => `<li>${member}</li>`).join('')}
                                        </ol>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    historyclub: {
        title: "History Club",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h3 class="text-2xl font-bold text-secondary mb-4">About History Club 2022 - 23</h3>
                        <p class="text-gray-700 leading-relaxed mb-8">${facilitiesData.find(l => l.id === 4)?.description || ''}</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold text-secondary mb-6 border-b-2 border-secondary pb-2">Structure of the Club</h3>
                                
                                <div class="space-y-4">
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Ex-officio President</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 4)?.structure?.president || ''}</p>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Convener</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 4)?.structure?.convener || ''}</p>
                                    </div>
                                    
                                    ${facilitiesData.find(l => l.id === 4)?.structure?.members ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-2">Members</h4>
                                        <ol class="list-decimal list-inside text-gray-800 space-y-1">
                                            ${facilitiesData.find(l => l.id === 4).structure.members.map(member => `<li>${member}</li>`).join('')}
                                        </ol>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    literaryclub: {
        title: "Literary Club",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h3 class="text-2xl font-bold text-secondary mb-4">About Literary Club 2022 - 23</h3>
                        <p class="text-gray-700 leading-relaxed mb-8">${facilitiesData.find(l => l.id === 6)?.description || ''}</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold text-secondary mb-6 border-b-2 border-secondary pb-2">Structure of the Club</h3>
                                
                                <div class="space-y-4">
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Ex-officio President</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 6)?.structure?.president || ''}</p>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Convener</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 6)?.structure?.convener || ''}</p>
                                    </div>
                                    
                                    ${facilitiesData.find(l => l.id === 6)?.structure?.vicePresident ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Vice-President</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 6).structure.vicePresident}</p>
                                    </div>
                                    ` : ''}
                                    
                                    ${facilitiesData.find(l => l.id === 6)?.structure?.secretary ? `
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-1">Secretary</h4>
                                        <p class="text-gray-800">${facilitiesData.find(l => l.id === 6).structure.secretary}</p>
                                    </div>
                                    ` : ''}
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                        <h4 class="text-primary font-bold mb-2">Student Members</h4>
                                        ${facilitiesData.find(l => l.id === 6)?.structure?.members?.yearII ? `
                                        <div class="mb-3">
                                            <h5 class="text-secondary font-semibold mb-1">II Year</h5>
                                            <ol class="list-decimal list-inside text-gray-800 space-y-1">
                                                ${facilitiesData.find(l => l.id === 6).structure.members.yearII.map(member => `<li>${member}</li>`).join('')}
                                            </ol>
                                        </div>
                                        ` : ''}
                                        ${facilitiesData.find(l => l.id === 6)?.structure?.members?.yearI ? `
                                        <div>
                                            <h5 class="text-secondary font-semibold mb-1">I Year</h5>
                                            <ol class="list-decimal list-inside text-gray-800 space-y-1">
                                                ${facilitiesData.find(l => l.id === 6).structure.members.yearI.map(member => `<li>${member}</li>`).join('')}
                                            </ol>
                                        </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    languageclub: {
        title: "Language Club",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                         ${facilitiesData.find(l => l.id === 5)?.image ? `
                        <div class="md:w-1/2">
                            <img src="${facilitiesData.find(l => l.id === 5).image}" alt="Language Club" class="w-full rounded-lg shadow-lg" />
                        </div>` : ''}
                        <div class="${facilitiesData.find(l => l.id === 5)?.image ? 'md:w-1/2' : 'w-full'} prose max-w-none">
                            <h3 class="text-2xl font-bold text-primary mb-4">Language Club</h3>
                            <p>${facilitiesData.find(l => l.id === 5)?.content || ''}</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    // Management duplication removal handling
    // The previous code had a management block around line 595. I should include it cleanly.
    management: {
        title: 'Management',
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h2 class="text-3xl font-bold text-secondary mb-6">Governing Council Members</h2>
                    </div>
                `
            },
            {
                type: 'table',
                headers: ['Sl No', 'Name', 'Position'],
                rows: [
                    ['1', 'Sri.Sri.Sri.Dr. Shivanandapuri Mahaswamiji', 'President'],
                    ['2', 'Sri. M. Puttabasavegowda', 'Hon. Secretary'],
                    ['3', 'Sri. M. K. Somashekar', 'Member'],
                    ['4', 'Sri. M. Nanjundaswamy', 'Member'],
                    ['5', 'Sri. M. Nagaraj', 'Member'],
                    ['6', 'Sri. N. Nanjegowda', 'Member'],
                    ['7', 'Sri.C.N.Nagesh', 'Member'],
                    ['8', 'Dr. N. Nagaraja', 'University Representative'],
                    ['9', 'Dr. Vishalakshi. K. K', 'Ex-Officio Member']
                ]
            },
            {
                type: 'clients-slider'
            }
        ]
    },
    secretary: {
        title: "Secretary's Desk",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h2 class="text-3xl font-bold text-secondary mb-6">Secretary's Desk</h2>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            It gives me an immense pleasure and the feeling of accomplishment to address you as the secretary 
                            of Sri Kaginele Mahasamsthana Kanaka Gurupeetha College of Education. Since its inception, 1996 
                            the college has been striving towards maintaining high academicals excellence in the field of teacher 
                            training. Our aim is to produce excellent teachers ready to serve at a local, state, national and global 
                            level of schools with the exemplary teaching skills enabled with technological development and with the 
                            devotion of duty. On the whole of the institution aims to achieve and adopt the students, the values and 
                            skills of all teaching methods and practices and overall dream and visions that the institution should 
                            emerge as the best teacher training institution in the country.
                        </p>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">- Sri.M.Puttabasavegowda</h3>
                        <h4 class="text-lg italic text-gray-700 mb-1">Hon. Secretary</h4>
                        <h4 class="text-base text-gray-600">Sri Kaginele Mahasamsthana Kanaka Gurupeetha College of Education, Mysuru-23</h4>
                    </div>
                `
            },
            {
                type: 'images',
                images: ['/images/college/secretary.jpg']
            },
            {
                type: 'clients-slider'
            }
        ]
    },
    principal: {
        title: "Principal's Message",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h2 class="text-3xl font-bold text-secondary mb-6">Principal's Desk</h2>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            I am very blessed and fortunate to work with dedicated, innovative and caring management, staff members, 
                            students and well wishers. As this is teacher training college the growth of each individual student is 
                            our focus. We recognise that as "We work together, learn together" students will be best able to achieve 
                            the potential. We firmly believe that our students well prepared to take charge of skilled teachers and 
                            also to become ideal members of a society. We motivate and empower the students to become best teachers, 
                            critical thinkers and productive members of an ever changing global society. We are creating future teachers 
                            who possess skills and aptitude in a ray of functional discipline.
                        </p>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">- Dr. Vishalakshi K K</h3>
                        <h4 class="text-lg italic text-gray-700 mb-1">Principal</h4>
                        <h4 class="text-base text-gray-600">Sri Kaginele Mahasamsthana Kanaka Gurupeetha College of Education, Mysuru-23</h4>
                    </div>
                `
            },
            {
                type: 'images',
                images: ['/images/college/principal.jpg']
            },
            {
                type: 'clients-slider'
            }
        ]
    },
    organogram: {
        title: "Organogram",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h2 class="text-3xl font-bold text-secondary mb-6">Organogram <span class="text-primary">Chart</span></h2>
                    </div>
                `
            },
            {
                type: 'images',
                images: ['/images/about/Organogram.jpg']
            },
            {
                type: 'clients-slider'
            }
        ]
    },
    'anti-ragging': {
        title: "Anti-Ragging Committee",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h2 class="text-3xl font-bold text-secondary mb-6">Anti-Ragging <span class="text-primary">Committee</span></h2>
                    </div>
                `
            },
            {
                type: 'images',
                images: ['/images/college/anti.jpg']
            },
            {
                type: 'text',
                content: `
                    <div class="mt-8">
                        <div class="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg shadow-lg max-w-md">
                            <h6 class="text-white text-xl font-bold mb-4">Anti-Ragging Committee</h6>
                            <a href="/documents/anti-ragging.pdf" target="_blank" 
                               class="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md">
                                Click Here..
                            </a>
                        </div>
                    </div>
                `
            },
            {
                type: 'clients-slider'
            }
        ]
    },
    'grievance-redressal': {
        title: "Grievance Redressal Committee",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h2 class="text-3xl font-bold text-secondary mb-6">Grievance Redressal <span class="text-primary">Committee</span></h2>
                    </div>
                `
            },
            {
                type: 'images',
                images: ['/images/college/gr.jpg']
            },
            {
                type: 'text',
                content: `
                    <div class="mt-8">
                        <div class="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg shadow-lg max-w-md">
                            <h6 class="text-white text-xl font-bold mb-4">Grievance Redressal Committee</h6>
                            <a href="/documents/gr.pdf" target="_blank" 
                               class="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md">
                                Click Here..
                            </a>
                        </div>
                    </div>
                `
            },
            {
                type: 'clients-slider'
            }
        ]
    },
    'women-harrasment': {
        title: "Women Harassment Prevention Committee",
        sections: [
            {
                type: 'text',
                content: `
                    <div class="prose max-w-none">
                        <h2 class="text-3xl font-bold text-secondary mb-6">Women Harassment Prevention <span class="text-primary">Committee</span></h2>
                    </div>
                `
            },
            {
                type: 'images',
                images: ['/images/college/gr.jpg']
            },
            {
                type: 'text',
                content: `
                    <div class="mt-8">
                        <div class="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg shadow-lg max-w-md">
                            <h6 class="text-white text-xl font-bold mb-4">Women Harassment Prevention Committee</h6>
                            <a href="/documents/Women-Harassment-Prevention-Committee.pdf" target="_blank" 
                               class="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md">
                                Click Here..
                            </a>
                        </div>
                    </div>
                `
            },
            {
                type: 'clients-slider'
            }
        ]
    },
};
