import moment from "moment";
import "moment/dist/locale/ar-dz";
moment.locale("ar");
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Title = ({ cityName, prayerName ,timeToPrayer}) => {
  const [time, setTime] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("Do MMMM  YYYY || h:mm:ss "));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const timer = moment().format("h:mm:ss ");

  //     const setUpCounterDown = () => {
  //       const timeNowe = moment();
  //       console.log(timeNowe);
  //     };
  //     setUpCounterDown();
  //     settTmeToPrayer(timer - 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);


  return (
    <div className="box flex flex-col md:flex-row text-white items-center justify-between text-center p-4 ">
      <div className="flex-1 space-y-2 md:space-y-5 ">
        <h2 className="text-4xl md:text-5xl m-3">{cityName}</h2>
        <h3 className="text-3xl md:text-4xl m-3">{time}</h3>
      </div>
      <div className="flex-1 space-y-2 md:space-y-5">
        <h3 className="text-3xl md:text-4xl m-3">
          متبقي حتى صلاة {prayerName}
        </h3>
        <h2 className="text-4xl md:text-5xl m-3">{timeToPrayer}</h2>
      </div>
    </div>
  );
};

export default Title;
