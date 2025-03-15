/* eslint-disable react/prop-types */
const CardInformation = ({ course, onClose, onOpenModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full m-2 relative text-black sm:max-w-1/2">
        <h1 className="text-xl font-bold oswald-bold">{course.title}</h1>
        <p className="text-sm mb-5">{course.modality}</p>
        <p className="montserrat-semibold">{course.description}</p>
        <p className="mt-5">Discounted Price: {course.discountedPrice}</p>

        {/* Button to open the modal */}
        <button
          onClick={onOpenModal}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Enroll Now
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-2 p-2 text-sm text-black rounded-full hover:cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CardInformation;