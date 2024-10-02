// eslint-disable-next-line react/prop-types
const Card = ({ title, time, imageSrc }) => {
  return (
    <div className="flex flex-col justify-evenly bg-gray-800  transition duration-300 w-68 max-w-80 mb-4 ">
      <img
        src={imageSrc}
        alt="Card Image"
        className="object-cover rounded-t-xl w-full h-full"

      />
      <div className="flex flex-1 items-center justify-start p-4 bg-white flex-nowrap rounded-b-xl ">
        <div className="text-right mx-2">
          <h2 className="font-bold text-black text-3xl ">{title}</h2>
          <br />
          <h3 className="text-gray-700 text-4xl font-semibold tracking-[.3em]">
            {time}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
