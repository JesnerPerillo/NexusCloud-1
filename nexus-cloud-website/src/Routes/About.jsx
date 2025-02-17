import OnlineImg from '../Images/online.jpg';
import OnsiteImg from '../Images/onsite.jpg';

export default function About() {
  return(
    <div className="bg-gradient-to-r h-auto from-purple-700 to-pink-700">
      <div className="flex flex-col items-center px-3 text-justify">
        <h1 className="text-white text-5xl play-bold tracking-wide text-center">Discover the Future of Learning with NexusCloud IT Solutions</h1>
        <div className="w-full sm:w-1/2 mt-5">
          <p className="text-justify text-white">At NexusCloud IT Solutions, we believe in empowering individuals with the skills needed to thrive in the ever-evolving tech industry. That’s why we offer both online and face-to-face seminars designed to help aspiring IT professionals, students, and career shifters gain hands-on knowledge in the most in-demand courses.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around text-white mt-20 sm:flex-row">
        <div className="w-full px-5 sm:w-1/3 text-justify">
          <img src={OnlineImg} alt="Online Image" className="rounded-xl"/>
          <p className="mt-5">💻 <span className="underline text-xl">Online Seminars</span>: {`Learn from the comfort of your home with our expert-led virtual sessions. Our interactive online training includes live discussions, hands-on exercises, and real-world applications to ensure a comprehensive learning experience. These sessions are designed to be flexible, allowing you to balance your education with your personal and professional commitments. Whether you're a beginner or an experienced professional, our online seminars provide high-quality instruction, accessible from anywhere in the world.`}</p>
          <br />
          <p>Pros of Online Seminars:<br />
          ✅ Convenience & Flexibility - Attend sessions from anywhere with an internet connection, eliminating travel time and expenses.<br />
          ✅ Interactive Learning - Engage in live discussions, Q&A sessions, and hands-on exercises with expert instructors.<br />
          ✅ Recorded Sessions - Access recorded lectures and revisit materials anytime for better retention and learning at your own pace.<br />
          ✅ Cost-Effective - Save money on transportation, accommodation, and venue costs while still receiving high-quality training.<br />
          ✅ Diverse Networking Opportunities - Connect with professionals and learners from different locations, broadening your industry connections.</p>
        </div>
        <div className="w-full px-5 mt-20 sm:w-1/3 text-justify sm:mt-0">
          <img src={OnsiteImg} alt="Onsite Image" className="rounded-xl"/>
          <p className="mt-5">🏢  <span className="underline text-xl">Face-to-face Seminars</span>: For those who prefer in-person learning, we offer on-site seminars where participants can engage directly with instructors, collaborate with peers, and experience hands-on training in a classroom setting. These sessions provide a structured learning environment, allowing for immediate feedback, real-time interaction, and networking opportunities that foster professional growth. The hands-on approach ensures that participants gain practical experience, making complex concepts easier to understand and apply.</p><br />
          <p>
            Pros of Face-to-Face Seminars: <br />
            ✅ Personalized Instruction - Direct access to instructors for immediate clarification, guidance, and in-depth discussions.<br />
            ✅ Hands-On Training - Experience practical exercises in a controlled learning environment, enhancing skills through real-world applications.<br />
            ✅ Stronger Peer Collaboration - Build relationships, collaborate with fellow participants, and engage in group activities for a more interactive learning experience.<br />
            ✅ Distraction-Free Environment - Stay fully focused and immersed in the learning experience without common home distractions.<br />
            ✅ In-Person Networking - Establish valuable professional connections through face-to-face interactions with industry experts and fellow learners.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <h1 className="w-full px-5 sm:w-4/6 text-2xl text-white text-justify">Both options provide valuable learning experiences tailored to different preferences and lifestyles. Whether you choose the flexibility of online seminars or the immersive nature of face-to-face training, NexusCloud IT Solutions ensures top-tier education to help you excel in your tech journey! 🚀</h1>
      </div>
    </div>
  );
}