import Header from "../Components/Header";
import Footer from "../Components/Footer";

const nexus = [
  {
    title: "What is NexusCloud IT Solutions?",
    description: "NexusCloud IT Solutions is an IT training and solutions provider offering professional courses and seminars in various IT fields, including cybersecurity, networking, and cloud computing.",
  },
  {
    title: "Where is NexusCloud IT Solutions located?",
    description: "We are based in ADB Avenue Tower, ADB Ave, Ortigas Center, Pasig, Metro Manila. You can also access some of our seminars online.",
  },
  {
    title: "Who can enroll in the seminars?",
    description: "Our seminars are open to students, IT professionals, and anyone interested in learning new tech skills.",
  },
  {
    title: "Do I need prior experience to join a course?",
    description: "It depends on the course. Some are for beginners, while others require basic IT knowledge.",
  },
  {
    title: "Are there any age restrictions for enrollment?",
    description: "No, as long as you have a passion for learning, you can enroll.",
  },
  {
    title: "How do I contact NexusCloud IT Solutions for more questions?",
    description: "You can email us at kdoz@live.com or call us at +63 995 8494 428.",
  },
  {
    title: "What makes NexusCloud IT Solutions different from other IT training providers?",
    description: "We focus on hands-on learning, industry-relevant skills, and expert-led training to ensure real-world application of IT concepts.",
  },
  {
    title: "Does NexusCloud IT Solutions offer corporate training?",
    description: "Yes! We provide customized corporate training programs tailored to businesses and organizations looking to upskill their teams.",
  },
];


const courses = [
  {
    title: "What can I expect from the training sessions?",
    description: "Our hands-on learning approach, led by expert instructors, immerses you in real-world IT scenarios, ensuring you gain practical skills and earn a certification upon completion.",
  },
  {
    title: "What are the benefits of taking these courses?",
    description: "Gain in-demand IT skills, earn industry-recognized certificates, and boost your career opportunities with our expert-led training programs.",
  },
  {
    title: "Are Certificates Provided?",
    description: "Yes, a certificate of completion is awarded after successfully finishing a seminar.",
  },
  {
    title: "How Long Do Courses Last?",
    description: "Course durations vary from one-day seminars to multi-week training sessions.",
  },
  {
    title: "Are the courses industry-certified?",
    description: "Some courses align with industry certifications like CompTIA, Cisco, and VMware.",
  },
  {
    title: "Do You Offer Corporate Training?",
    description: "Yes, we provide customized IT training programs for businesses.",
  },
  {
    title: "Do you provide study materials?",
    description: "Yes! We provide PDF slides, software tools, and recorded sessions to support your learning.",
  },
  {
    title: "Can I take multiple courses at once?",
    description: "Yes, you can enroll in multiple courses based on your availability and learning goals.",
  },
];


const teaching = [
  {
    title: "Who are the instructors?",
    description: "Our instructors are industry professionals with years of experience in IT training.",
  },
  {
    title: "What teaching methods do you use?",
    description: "Experience live lectures, hands-on labs, case studies, and interactive Q&A sessions designed to enhance your IT learning journey.",
  },
  {
    title: "Can I ask questions during the seminar?",
    description: "Absolutely! We encourage interactive learning.",
  },
  {
    title: "Are one-on-one mentorship sessions available?",
    description: "Yes, you can book a private consultation with our instructors.",
  },
  {
    title: "Can I request a customized training program for my team?",
    description: "Yes! We offer corporate training and customized courses.",
  },
  {
    title: "Do instructors provide real-world examples?",
    description: "Yes! Our training includes case studies and real-world applications to enhance learning.",
  },
  {
    title: "What qualifications do the instructors have?",
    description: "Our instructors hold certifications such as CCNA, CompTIA, and VMware, along with extensive industry experience.",
  },
  {
    title: "How do instructors support students after the seminar?",
    description: "Instructors provide post-seminar guidance, answer follow-up questions, and offer additional resources for continuous learning.",
  },
];


const certifications = [
  {
    title: "Will I receive a certificate after completing a course?",
    description: "Yes! You will receive an official certificate of completion after successfully finishing the course.",
  },
  {
    title: "Are your certificates recognized by employers?",
    description: "Yes, our certificates are industry-recognized and can boost your resume and career prospects.",
  },
  {
    title: "Do you offer job placement assistance?",
    description: "We provide career guidance, resume-building tips, and job referrals through our industry network.",
  },
  {
    title: "Can this training help me get IT certifications like CCNA or VMware?",
    description: "Yes! Our courses are designed to prepare you for industry certification exams such as CCNA, VMware, and more.",
  },
  {
    title: "What career opportunities can I expect after completing a course?",
    description: "You can pursue roles such as IT support specialist, network administrator, cybersecurity analyst, or cloud engineer, depending on the course.",
  },
  {
    title: "Do you offer internship opportunities?",
    description: "Yes, we collaborate with partner companies to provide internship and on-the-job training opportunities.",
  },
  {
    title: "How can I showcase my certification to potential employers?",
    description: "You can add it to your LinkedIn profile, resume, and job applications to enhance your professional credibility.",
  },
  {
    title: "Do you provide career mentoring or coaching?",
    description: "Yes, we offer one-on-one career mentoring to help you plan your next steps in the IT industry.",
  },
];

const reschedulings = [
  {
    title: "Can I reschedule my course after enrolling?",
    description: "Yes, you can reschedule your course by contacting our support team at least 3 days before the start date.",
  },
  {
    title: "Is there a fee for rescheduling a course?",
    description: "Rescheduling is free if requested within the allowed timeframe. Late requests may incur additional charges.",
  },
  {
    title: "What if my scheduled course gets canceled?",
    description: "If we cancel a course, you can either receive a full refund or transfer your enrollment to another session.",
  },
  {
    title: "Can I cancel my enrollment and get a refund?",
    description: "Yes, cancellations made at least 5 days before the course start date are eligible for a full refund.",
  },
  {
    title: "What happens if I miss a session?",
    description: "If you miss a live session, you can access the recorded version or attend a makeup class if available.",
  },
  {
    title: "Can I transfer my enrollment to someone else?",
    description: "Yes, you can transfer your enrollment to another person before the course starts by notifying us in advance.",
  },
  {
    title: "Are there exceptions for emergency cancellations?",
    description: "Yes, we allow emergency cancellations with proper documentation, and we’ll work with you to find the best solution.",
  },
  {
    title: "How do I request a reschedule or cancellation?",
    description: "You can request a reschedule or cancellation by emailing our support team or through your student dashboard.",
  },
];

const additionalInfos = [
  {
    title: "Do you offer hands-on training?",
    description: "Yes! Our seminars are designed to provide hands-on experience with real-world scenarios and practical exercises.",
  },
  {
    title: "Are the courses conducted online or in person?",
    description: "We offer both in-person seminars and online sessions via Zoom, allowing flexibility for all learners.",
  },
  {
    title: "What learning materials will I receive?",
    description: "Participants receive software tools, PDF slides, and recorded sessions for future reference.",
  },
  {
    title: "Can I access the course materials after the seminar?",
    description: "Yes, all participants will have continued access to course materials, including slides and recorded sessions.",
  },
  {
    title: "Do I need to install any software before the seminar?",
    description: "Yes, we provide a list of required software before the seminar, along with installation guides to ensure a smooth learning experience.",
  },
  {
    title: "Will I receive a certificate after the seminar?",
    description: "Yes, all participants who complete the seminar will receive an official certificate of completion.",
  },
  {
    title: "Can I interact with the instructor during Zoom sessions?",
    description: "Yes, our Zoom sessions are interactive, allowing participants to ask questions and engage with the instructor in real time.",
  },
  {
    title: "Are there any additional fees for course materials?",
    description: "No, all essential learning materials, including software tools and slides, are included in the seminar fee.",
  },
];

const paymentEnrollments = [
  {
    title: "How do I enroll in a seminar?",
    description: "You can enroll by visiting our website, selecting your desired course, and completing the registration form.",
  },
  {
    title: "What payment methods do you accept?",
    description: "We accept GCash, BDO, PayMaya, and cash payments at our office.",
  },
  {
    title: "Is there an installment payment option?",
    description: "Yes, we offer installment plans for select courses. Contact our support team for details.",
  },
  {
    title: "Will I receive a confirmation after payment?",
    description: "Yes, you will receive a confirmation email with your enrollment details and payment receipt.",
  },
  {
    title: "Can I get a refund if I can’t attend?",
    description: "Refunds are available if requested at least 5 days before the seminar starts. Processing fees may apply.",
  },
  {
    title: "Can I change my payment method after enrolling?",
    description: "Yes, but changes must be made before the seminar begins. Contact our support team for assistance.",
  },
  {
    title: "Do you offer group discounts?",
    description: "Yes, we provide discounts for group enrollments. Contact us for more details.",
  },
  {
    title: "Is there a deadline for enrollment?",
    description: "Yes, enrollment deadlines vary per course. We recommend registering early to secure your slot.",
  },
];




export default function FAQs() {
  return (
    <div className="h-auto con">
      <div>
        <Header />
      </div>

      <div className="w-full h-full con py-16 pt-30 sm:h-screen">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text px-3">Here are some of the frequently asked questions about NexusCloud IT Solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {nexus.map((nexu, index) => (
            <div key={index} className="flex items-start gap-2 border-l-2 border-red-500 pl-4">
              <div>
                <h3 className="text-lg montserrat-bold">{nexu.title}</h3>
                <p className="text">{nexu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full con py-16 sm:h-screen">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text px-3">Here are some of the frequently asked questions about Courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {courses.map((course, index) => (
            <div key={index} className="flex items-start gap-4 border-l-2 border-red-500 pl-4">
              <div>
                <h3 className="text-lg montserrat-bold">{course.title}</h3>
                <p className="text">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full con py-16 ">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text px-3">Here are some of the frequently asked questions about Courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {paymentEnrollments.map((paymentEnrollment, index) => (
            <div key={index} className="flex items-start gap-4 border-l-2 border-red-500 pl-4">
              <div>
                <h3 className="text-lg montserrat-bold">{paymentEnrollment.title}</h3>
                <p className="text">{paymentEnrollment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full con py-16 ">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text px-3">Here are some of the frequently asked questions about Instructor & Teaching Style
          .</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {teaching.map((teach, index) => (
            <div key={index} className="flex items-start gap-4 border-l-2 border-red-500 pl-4">
              <div>
                <h3 className="text-lg montserrat-bold">{teach.title}</h3>
                <p className="text">{teach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full con py-16 ">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text px-3">Here are some of the frequently asked questions about Certification & Career Opportunities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {certifications.map((certification, index) => (
            <div key={index} className="flex items-start gap-4 border-l-2 border-red-500 pl-4">
              <div>
                <h3 className="text-lg montserrat-bold">{certification.title}</h3>
                <p className="text">{certification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full con py-16 ">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text px-3">Here are some of the frequently asked questions about Course Rescheduling & Cancellations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {reschedulings.map((rescheduling, index) => (
            <div key={index} className="flex items-start gap-4 border-l-2 border-red-500 pl-4">
              <div>
                <h3 className="text-lg montserrat-bold">{rescheduling.title}</h3>
                <p className="text">{rescheduling.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full con py-16 ">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text px-3">Here are some of the frequently asked questions for Additional Information.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {additionalInfos.map((additionalInfo, index) => (
            <div key={index} className="flex items-start gap-4 border-l-2 border-red-500 pl-4">
              <div>
                <h3 className="text-lg montserrat-bold">{additionalInfo.title}</h3>
                <p className="text">{additionalInfo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
