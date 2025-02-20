import { useState } from 'react';
import Header from '../Components/Header.jsx';
import CCNAImg from '../Images/ccna.jpg';
import { PiMagnifyingGlass } from "react-icons/pi";
import Contact from '../Components/Contact.jsx';
import Footer from '../Components/Footer.jsx';
import Meeting from '../Images/meeting.jpg';
import Teach from '../Images/teach.jpg';
import Onsite from '../Images/onsite.jpg';


export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    Meeting,
    CCNAImg,
    Teach,
    Onsite
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }


  return(
    <div className="bg-gradient-to-r from-purple-700 to-pink-700 w-full h-auto sm:w-full h-auto">
      <div>
        <Header />
      </div>
      <div className="w-full h-screen flex items-center justify-between">
        <div className="relative w-1/2 max-w-2xl mx-auto h-3/5 bg-gray-500 flex items-center justify-between rounded-xl p-10">
          <div className="relative overflow-hidden">
            <img
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &#8249;
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &#8250;
          </button>

          {/* Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
              ></span>
            ))}
          </div>
        </div>
        <div className="w-1/2 text-white text-right p-10">
          <h1 className="text-[8rem] play-bold text-[#f4ca4f]">WHO <span className="text-white play-bold">WE</span> ARE</h1>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui neque veniam facere quis, aspernatur earum quos inventore aut sunt cupiditate minus, et mollitia minima maiores? Optio facere, quas neque commodi eius omnis animi vel, voluptates asperiores eum eos dicta architecto adipisci dolorum odio perspiciatis! Enim necessitatibus praesentium accusantium inventore!<br /><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem id accusamus quis consequuntur, aperiam illum eius. Magni hic delectus saepe, ratione nulla, labore nam ea ipsa deserunt nesciunt voluptas voluptatum distinctio? Sunt facilis earum debitis aspernatur ex amet voluptatem harum veniam, soluta ipsum ea molestiae perferendis cum esse pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur odit rerum dolorem nemo inventore? Blanditiis eaque accusamus amet corporis quam eos ratione tempora, tenetur ullam, laudantium expedita natus voluptate. A provident ex alias suscipit nemo distinctio voluptatem soluta deleniti omnis, ad totam necessitatibus, tempora aliquam cumque beatae minus aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eum architecto illo reprehenderit officiis. Deleniti enim officia iure nihil temporibus expedita similique. Fugit delectus eum possimus consequuntur eaque sequi ut laboriosam, facere, corporis velit, provident expedita hic laborum. Veritatis at excepturi necessitatibus tempore ipsum, doloremque dignissimos. Eligendi vitae porro animi tenetur qui? Voluptates temporibus deleniti voluptas vero aliquam fuga soluta.</p>
        </div>
      </div>
      <div className="w-full h-screen bg-gradient-to-r from-purple-700 to-pink-700 pt-20 flex flex-col items-center text-white">
        <div className="w-full h-100 bg-red-800 flex justify-between px-30 items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
          <div className="flex flex-col items-center h-full justify-around ">
            <h1 className="text-8xl play-bold">
              CCNA <br /> CERTIFICATION
            </h1>
            <div className="w-[50rem] bg-white flex items-center border rounded-3xl pl-2 gap-2 z-20">
              <PiMagnifyingGlass className=" w-5 h-5 text-violet-600 hover:cursor-pointer focus:outline-hidden "/>
              <input className="w-full pl-3 h-13 text-black w-full rounded-r-2xl" placeholder="Search Course"/>
            </div>
          </div>
          <div className="absolute right-100 scale-300 top-30">
            <img src={CCNAImg} alt="CCNA Image" className="w-60 h-60 rounded-full opacity-80"/>
          </div>
        </div>

        <div className="flex w-full justify-between items-center ">
          <div className="w-1/2 ml-5 mt-2 border-l-15 border-yellow-500">
            <h1 className="text-7xl play-bold pl-5">CISCO CERTIFIED NETWORK ASSOCIATE (CCNA 200-301)</h1>
          </div>
          <div className="flex bg-violet-500 rounded-xl mr-5 w-2/5 h-full mt-5 p-5 items-center justify-center">
            <div className="border-r-10 p-5 text-center border-yellow-500 w-1/3">
              <p className="text-3xl text-yellow-400 play-bold">35 HOURS</p>
              <p className="text-2xl">DURATION</p>
            </div>
            <div className="p-5 text-center p-5 w-1/3">
              <p className="text-3xl text-yellow-400 play-bold">INTERMEDIATE</p>
              <p className="text-2xl">LEVEL</p>
            </div>
            <div className="border-l-10 p-5 text-center border-yellow-500 w-1/3">
              <p className="text-3xl text-yellow-400 play-bold">ON-SITE</p>
              <p className="text-2xl">MODALITY</p>
            </div>
          </div>
        </div>
        <div className="p-20 text-2xl text-center">
          <p>{`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nihil dolorum reprehenderit optio, aliquid voluptas, dicta consequatur corrupti itaque ipsum harum veniam omnis facilis, doloremque repellendus? Quaerat accusamus ab, ad, odit, incidunt nesciunt et rem optio impedit fugiat corporis esse facilis similique aspernatur minima maxime autem assumenda omnis! Exercitationem minus impedit quaerat soluta quod consectetur provident cupiditate totam vel fuga numquam."`}</p>
          <button className="w-60 h-16 bg-yellow-500 rounded-xl play-bold mt-5">ENROLL NOW</button>
        </div>
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}