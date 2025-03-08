/* eslint-disable react/prop-types */

const Card = ({ course, onClick }) => {
  return (
    <div 
      className="w-full rounded-4xl h-[30rem] drop-shadow-3xl sm:w-68 sm:h-80 cursor-pointer"
      onClick={onClick} // Open modal when clicked
    >
      <div className="h-3/5 rounded-t-3xl overflow-hidden">
        <img src={course.img} alt={course.title} className="w-full h-full object-cover"/>
      </div>
      <div className="h-35 relative p-2 card rounded-b-3xl">
        <h1 className="card-text">{course.title}</h1>
        <p className="card-text absolute bottom-0 right-5">
          <span className="text-gray-400 line-through">{course.originalPrice}</span> {course.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
