import React from 'react'


let data = [
  {
    name : "Building MicroServices in Java for Cloud",
    duration : "16 Sep 2023 - 16 Sep 2025",
    lectureType : " Live Lectures + Recorded Lectures ",
    otherDetails : ["JOB Assurance Program","Building MicroServices in Java for Cloud Certification", "One year of Internship Anytime", "10+ hands-on industry Real-Time projects", "Doubt clearing one to one", "Assignments & Quizzes in every module", "Live projects with Real-Time implementation", "Mock Interview"],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/887893dd-5f52-4b79-bf00-0b2461c199cc.jpg",
    teacherName : "JAVAPRO",
    subject : ["Java"],
    price : "20,000"

  },
  {
    name : "Mastering Full Stack Data Analytics",
    duration : "16 Sep 2023 - 16 Sep 2025",
    lectureType : " Live Lectures + Recorded Lectures ",
    otherDetails : ["What is the Full Stack Data Analytics course?" ,"What is the meaning of job assurance program?", "Can I be a part of this course ?", 
  "Will the program be conducted in live or recorded mode ?", "What are we going to learn in this course ?", "What Kind Of A Internship I Will Able To Get As A Part Of This Program?",
"How will I be able to resolve my doubts?", "How is Data Analytics Different from Data Science?"],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/971b4a4b-384a-489b-a798-92ca8701524b.jpg",
    teacherName : "ANALYTIX",
    subject : ["Data Analytics"],
    price : "20,000"

  },
  {
    name : " Full Stack Data Science Pro",
    duration : "12 Aug 2023 - 12 Aug 2025",
    lectureType : "Recorded Lectures ",
    otherDetails : ["For Career Counselling With Academic Counselor - Dial 7666122288 ", "Job Assurance Program", "Instructor Led Live Classes", "500+ hours Live Classes by Industry Veterans", 
  "2 year Dashboard access", "Doubt clearing live classes", "Doubt clearing through mail and support team", "Full Stack Data Science Pro Certification"],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/b4d55d14-3437-485b-b4f9-e4547abd03fd.png",
    teacherName : "ADVANCE AI",
    subject : ["Data Science"],
    price : "25,000"

  },
  {
    name : "Java with DSA & System Design 2.0 (BINARY 2.0)",
    duration : "13 May 2023 - 13 May 2025",
    lectureType : " Live Lectures + Recorded Lectures",
    otherDetails : ["Fundamentals of Computer Science", "Getting Started with JAVA", "Understand Advance Java", "Getting Started with Database", "Exploring MongoDB", 
  "Learning JDBC", "Introduction to Algorithms and Analysis", "Design Principal and its importance", "Spring Rest", "Java with DSA & System Design Certification"],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/7a622173-a4b0-4a10-afc7-729ac86d7eeb.png",
    teacherName : "System Design",
    subject : ["java with dsa algorithm"],
    price : "50,000"

  },
  {
    name : "DECODE DSA with C++ 2.0",
    duration : "10 Aug 2023 - 10 Aug 2025",
    lectureType : " Live Lectures + Recorded Lectures",
    otherDetails : ["This batch is for students & who are aiming for learning C++ and Data structure and algorithms", "You just need to click on “Enroll Now” button to avail it at INR 2750.",
  "Recorded lectures will be provided on the course dashboard.", "A live revision session will be held every week on Sunday 10AM IST.", "There will be three recorded classes of C++.", 
"Timings will be weekly 6hrs content will be uploaded for a single module", "This batch is paid on the PWskills website."],
img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/b1bcd6ad-37d0-4dfb-964d-81d9a9d4113d.png",
    teacherName : "DECODE 2.o",
    subject : ["DSA"],
    price : "35,000"

  },
  {
    name : " Full Stack Web Development",
    duration : "19 Aug 2023 - 19 Aug 2025",
    lectureType : " Live Lectures + Recorded Lectures",
    otherDetails : ["This batch is for students & who are aiming for learning Web Development", "This is a Job Assurance Program please read all the ", "The batch will be starting from 19th August’23.", 
  "You just need to click on the “Enroll Now” button to avail it at INR 20000.", "This batch is paid on the PWskills website and PW app.", 
"You will receive a refund only if PW Skills does not provide you with an opportunity for an interview within the 9 months after completing the course, which is 12 + 9 = 21 months from the date of enrollment. "],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/1e43e3c8-b4a2-4540-9065-88e3b29cfcc4.png",
    teacherName : "WEBPRO",
    subject : ["Full Stack"],
    price : "30,000"

  },
  {
    name : "Java with DSA & System Design 2.0 ",
    duration : "13 May 2023 - 13 May 2025",
    lectureType : " Live Lectures + Recorded Lectures",
    otherDetails : ["Fundamentals of Computer Science", "Version Control System and Git", "Getting Started with JAVA", "Getting Started with Database", 
  "Hanson’s with Sql - MySQL", "Understanding Array, String, Recursion LLD, Stack and Queue and Much More", "System Design", "Starting and Completing Full Fledge Project"],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/e39ffc2b-e0fd-43e0-86c5-b23ad314c0f0.png",
    teacherName : "java algoruthm",
    subject : ["java", "dsa"],
    price : "40,000"

  },

  // neeeeet
  {
    name : "Arjuna NEET 3.0 2024",
    duration : " 17 July 2023- 30 Jan 2024 ",
    lectureType : " Live Lectures",
    otherDetails : ["Complete 11th and NEET Syllabus will be covered", "We will cover Physics, Chemistry, Botany and Zoology.", "6 Days scheduled classes will be held.", 
  "Classes will be live, per day 2 classes will be held.", "PDF Notes of each Class will be uploaded on PW App", "Daily Practice Problems with their Video Solution in Quiz format.", 
"Dedicated faculties for solving doubts through best-in-class doubt engine.", "Scheduled tests will be held according to the planner."],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/ef41acc0-1747-47fb-9786-0b6efb239eda.png",
    teacherName : "",
    subject : [ "Physics"," Chemistry", "Botany", "Zoology"],
    price : "40,000"

  },
  {
    name : "Arjuna NEET 2024",
    duration : "10 April 2023- 10 Jan 2024",
    lectureType : " Live Lectures",
    otherDetails : ["Complete 11th board and NEET Syllabus will be covered", "We will cover Physics, Chemistry, Botany & Zoology", "6 Days scheduled classes will be held.", 
  "Classes will be live, per day 2 classes will be held.", "PDF Notes of each Class will be uploaded on PW App.", "Dedicated faculties for solving doubts through best-in-class doubt engine.", 
"No Wallet Points Applicable."],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/91c520ed-2c2f-4183-99d2-626d702cc5d5.png",
    teacherName : "",
    subject : ["Physics"," Chemistry", "Botany", "Zoology"],
    price : "42,000"

  },
  {
    name : "Mole Concept Pocket Course for NEET",
    duration : "25 July 2023 - 30 June 2024.",
    lectureType : "Recorded Lectures",
    otherDetails : ["A single-shot lecture will be provided in a recorded format.", "PDF notes will be uploaded on the PW App.", "The lecture duration will be approximately 6 hours on average.", 
  "A practice sheet containing 50 questions in quiz format will be included with the course.", "A test will be conducted 7 days after the course start date."],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/3f5e186b-680b-4301-949f-10a6e1877174.png",
    teacherName : "",
    subject : ["Chemistry"],
    price : "200"

  },
  {
    name : "Class 11th NEET One shot (ARJUNA NEET YT)",
    duration : "03 August 2023 - 31 May 2024.",
    lectureType : "Recorded Lectures",
    otherDetails : ["The complete syllabus of the 11th + NEET exam.", "We will cover Physics, Chemistry, Botany, and Zoology", "All students can clear their BACKLOG through this series", 
  "All lectures will be provided in Recorded Form", "6 Days scheduled classes with ONE lecture per day", " PDF Notes of each Class will be uploaded on PW App", "07. Each lecture will be 4-5 Hours"],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/ccf39efa-1d75-4038-b30c-bec7bfc2def1.jpg",
    teacherName : "",
    subject : ["Physics", "Chemistry" ,"Zoology"],
    price : "15000"

  },
  {
    name : "PW IOQM 2023",
    duration : " 8th June 2023 - 31 Oct 2024",
    lectureType : "Recorded Lectures",
    otherDetails : ["A single-shot lecture will be provided in a recorded format.", "PDF notes will be uploaded on the PW App.", "The lecture duration will be approximately 6 hours on average.", 
  "A practice sheet containing 50 questions in quiz format will be included with the course.", "A test will be conducted 7 days after the course start date."],
    img : "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/3f5e186b-680b-4301-949f-10a6e1877174.png",
    teacherName : "",
    subject : ["Chemistry"],
    price : "200"

  },
]




function Home() {
  return (
    <div>Dashboard



    </div>
  )
}

export default Home