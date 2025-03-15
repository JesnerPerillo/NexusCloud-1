/* eslint-disable react/prop-types */

const Card = ({ course, onClick }) => {
  return (
    <div className="p-2 px-5 gap-5 flex mb-10 justify-around flex-col sm:flex-row">
      <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80 hover:cursor-pointer" onClick={onClick}>
        <div className="h-3/5 rounded-t-3xl bg-white overflow-hidden" >
          <img src={course.imgSrc} alt="CCNA Image" className={`w-full h-full ${["Certified Cisco Network Associate (CCNA 200-301)", "VMware vSphere 7 Data Center Virtualization", "Microsoft Windows Server 2019 Administration Automation", "Microsoft Certified: Security Operations Analyst Associate (SC-200)", "Microsoft Certified: Identity and Access Administrator Associate (SC-300)", "Facebook Ads Strategies 2025"].includes(course.title) ? "object-cover" : "object-contain"}`}/>
        </div>
        <div className="h-1/3 relative p-2">
          <h1 className="card-text">{course.title}</h1>
          <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through mr-2">{course.originalPrice}</span>{course.discountedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
