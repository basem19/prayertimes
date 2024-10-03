import { useEffect, useState, useRef, useCallback } from "react";
import moment from "moment";
import Card from "./components/Card";
import Search from "./components/Search";
import Title from "./components/Title";
import allGovernorates from "./data";
import Footer from "./components/Footer";

function App() {
  const [times, setTimes] = useState(null);
  const [cityName, setCityName] = useState("القدس - Jerusalem");
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [isManualCity, setIsManualCity] = useState(false);
  const originalCityName = useRef(cityName);
  const [coordinates, setCoordinates] = useState({
    lat: 31.7683,
    lng: 35.2137,
  });
  const [nextPrayer, setNextPrayer] = useState(null);
  const [timeToNextPrayer, setTimeToNextPrayer] = useState(null);

  const fetchCityNameFromCoordinates = useCallback(
    async (lat, lng) => {
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        const data = await response.json();
        const city = data.city || "موقع غير معروف";

        if (!isManualCity && city !== originalCityName.current) {
          setCityName(city);
        }
      } catch (err) {
        console.error("فشل في جلب اسم المدينة: ", err);
      }
    },
    [isManualCity]
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationAllowed(true);
        },
        (error) => {
          console.error("فشل في جلب اللوكيشن: ", error);
          setLocationAllowed(false);
        }
      );
    } else {
      console.error("Geolocation غير مدعوم   .");
      setLocationAllowed(false);
    }
  }, []);

  const handleCityName = (cityNameValue) => {
    setIsManualCity(true);
    const selectedCity = allGovernorates.find(
      (city) => city.name === cityNameValue
    );
    if (selectedCity) {
      setCityName(cityNameValue);
      setCoordinates({
        lat: selectedCity.lat,
        lng: selectedCity.lng,
      });
    } else {
      console.warn(
        "المدينة غير موجودة في القائمة. جاري  جذب المدينة باستخدام الإحداثيات..."
      );
      fetchCityNameFromCoordinates(coordinates.lat, coordinates.lng);
    }
  };

  const prayerTimesNumber = (value) => {
    if (!value) return "";
    const hour = Number(value.slice(0, 2));
    const minute = value.slice(3, 5);

    return hour > 12 ? `${hour - 12}:${minute}` : value;
  };

  const getNextPrayer = (times) => {
    const currentTime = moment();
    const prayerTimes = [
      { name: "الفجر", time: moment(times.Fajr, "HH:mm") },
      { name: "الظهر", time: moment(times.Dhuhr, "HH:mm") },
      { name: "العصر", time: moment(times.Asr, "HH:mm") },
      { name: "المغرب", time: moment(times.Maghrib, "HH:mm") },
      { name: "العشاء", time: moment(times.Isha, "HH:mm") },
    ];

    for (let i = 0; i < prayerTimes.length; i++) {
      prayerTimes[i].time = prayerTimes[i].time.isBefore(currentTime)
        ? prayerTimes[i].time.add(1, "day")
        : prayerTimes[i].time;
    }

    for (let i = 0; i < prayerTimes.length; i++) {
      if (currentTime.isBefore(prayerTimes[i].time)) {
        return prayerTimes[i];
      }
    }

    return prayerTimes[0]; 
  };

  const calculateTimeToNextPrayer = (nextPrayerTime) => {
    const currentTime = moment();
    const timeDifference = moment.duration(nextPrayerTime.diff(currentTime));
    const hours = String(timeDifference.hours()).padStart(1, "0");
    const minutes = String(timeDifference.minutes()).padStart(2, "0");
    const seconds = String(timeDifference.seconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      if (coordinates.lat && coordinates.lng) {
        try {
          const response = await fetch(
            `https://api.aladhan.com/v1/timings?latitude=${coordinates.lat}&longitude=${coordinates.lng}&method=5`
          );
          const data = await response.json();
          setTimes(data.data.timings);
        } catch (err) {
          console.error("فشل في جلب أوقات الصلاة: ", err);
        }
      }
    };
    fetchPrayerTimes();
  }, [coordinates]);

  useEffect(() => {
    if (times) {
      const nextPrayerData = getNextPrayer(times);
      setNextPrayer(nextPrayerData.name);

      const interval = setInterval(() => {
        const timeLeft = calculateTimeToNextPrayer(nextPrayerData.time);
        setTimeToNextPrayer(timeLeft);
      }, 1000);

      return () => clearInterval(interval); 
    }
  }, [times]);

  useEffect(() => {
    if (locationAllowed && !isManualCity) {
      fetchCityNameFromCoordinates(coordinates.lat, coordinates.lng);
    }
  }, [
    coordinates,
    locationAllowed,
    isManualCity,
    fetchCityNameFromCoordinates,
  ]);

  return (
    <>
    <div className="min-h-screen font-amiri p-3 overflow-y-auto">
      <Search cityNameValue={handleCityName} />
      <Title
        cityName={cityName}
        prayerName={nextPrayer}
        timeToPrayer={timeToNextPrayer}
      />
      <hr className="flex flex-col items-center my-3 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      {times ? (
        <div className="box grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3 justify-center">
          <Card
            title="الفجر"
            time={prayerTimesNumber(times.Fajr)}
            imageSrc="https://i.imghippo.com/files/rNFjn1727750391.png"
          />
          <Card
            title="الظهر"
            time={prayerTimesNumber(times.Dhuhr)}
            imageSrc="https://img.freepik.com/premium-photo/muslim-praying-allah-front-islam-iconic-mosque-al-haram-muslim-praying-hands-front-holy-kaaba-which-is-center-islam-inside-masjid-al-haram-mecca_967785-40802.jpg"
          />
          <Card
            title="العصر"
            time={prayerTimesNumber(times.Asr)}
            imageSrc="https://img.freepik.com/premium-photo/muslim-man-praying_1031776-15725.jpg"
          />
          <Card
            title="المغرب"
            time={prayerTimesNumber(times.Maghrib)}
            imageSrc="https://img.freepik.com/premium-photo/man-prayer-position-front-mosque-sunset-practicing-his-muslim-faith_854757-5375.jpg"
          />
          <Card
            title="العشاء"
            time={prayerTimesNumber(times.Isha)}
            imageSrc="https://images.stockcake.com/public/7/5/2/75216af2-310f-4de8-9f26-b32f0d663d6e_medium/evening-prayer-gathering-stockcake.jpg"
          />
        </div>
      ) : (
        <h2 className="text-white text-5xl leading-normal text-center p-2">
          جاري تحميل أوقات الصلاة...
        </h2>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default App;
