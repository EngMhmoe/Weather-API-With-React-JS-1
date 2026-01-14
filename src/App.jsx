//import Hooks React
import { useEffect, useState } from "react";

//import axios
import axios from "axios";

//import moment(1)
// import moment from "moment";
// // // // // //
// // // // // //
// // // // // //
//import Day js(2)
// import dayjs from "dayjs";

//ده ال hook الخاص بيهم هما
import { useTranslation } from "react-i18next";

//import material icons UI
import CloudIcon from "@mui/icons-material/Cloud";
import ChangeLanguage from "./components/ChangeLang";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Component App
export default function App() {
  //Temp
  const [Temp, setTemp] = useState({
    NameCity: "",
    TempValue: null,
    NameDescription: "",
    temp_min: null,
    temp_max: null,
    DateValue: "",
    IconTemp: "",
  });
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  //state Name city
  const [ChangeNam2, setChangeName] = useState("Egypt");

  //useEffect Get ApI
  useEffect(() => {
    // function ChangeNAmeCity(ChangeName) {
    const controller = new AbortController();

    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: ChangeNam2,
          appid: "ed428933e5cc85e43a00b8f2c296d78a",
          units: "metric",
          lang: "en",
        },

        signal: controller.signal,
      })
      .then((response) => {
        // // // // //
        // // // // //
        //Get Name City أسم المديه
        const NameCity = response.data.name;
        // // // // //
        // // // // //
        //Get Temp Value درجه الحرار
        const TempValue = Math.round(response.data.main.temp);
        // // // // //
        // // // // //
        //Temp State Icon
        const IconTemp = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        // // // // //
        // // // // //
        //Get Name Description Temp Value وصف درجه الحراره
        const NameDescription = response.data.weather[0].description;
        // // // // //
        // // // // //
        //temp_min AND temp_max Values قيمه درجه الحراره الكبرى و الصغرى
        const Temp_min = Math.round(response.data.main.temp_min);
        const Temp_max = Math.round(response.data.main.temp_max);
        // // // // //
        // // // // //
        //Get Date
        const DateValue = new Date(response.data.dt * 1000).toLocaleDateString(
          "en-EG",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );
        setTemp({
          NameCity: NameCity,
          TempValue: TempValue,
          NameDescription: NameDescription,
          temp_min: Temp_min,
          temp_max: Temp_max,
          // DateValue: moment().format("MMMM D YYYY"),
          // DateValue: dayjs().format("MMMM-D-YYYY"),
          DateValue: DateValue,
          IconTemp: IconTemp,
        });
      })
      .catch((error) => console.log(error));

    //CleanUp(كود التنضيف)
    return () => {
      controller.abort();
    };
    // }
  }, [ChangeNam2]);

  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  //check online
  const [online, setOnline] = useState(true);

  //useEffect Check online
  useEffect(() => {
    if (window.navigator.onLine) {
      setOnline(true);
    } else {
      setOnline(false);
    }
  }, []);

  //Function onclick Reload
  function HandClickReload() {
    window.location.reload();
  }

  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  //hook i18next with useTranslation
  const { t, i18n } = useTranslation();

  //State
  const [direction, setDirection] = useState("ltr");

  //بدايه الصفحه يحصل ده الاول اكيد يعنى
  useEffect(() => {
    i18n.changeLanguage("ar");
    setDirection("rtl");
  }, []);

  const [Language, setLanguage] = useState("ar");

  const clickChangeLan = () => {
    if (Language === "en") {
      setLanguage("ar");
      i18n.changeLanguage("ar");
      setDirection("rtl");
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
      setDirection("ltr");
    }
  };

  return (
    <>
      {/* Start Component App UI */}
      {online === true ? (
        <div className="container-WeatherAPI font-[IBM] bg-blue-700 w-full sm:h-screen pt-10 text-blue-50 flex flex-col gap-20 items-center justify-evenly">
          <header className="bg-white/90 rounded">
            <ChangeLanguage direction={direction} setDirection={setDirection} />
          </header>
          <div
            className="flex flex-col justify-center items-center"
            dir={direction}
          >
            {/* Start Component Header */}
            {/* End Component Header */}

            {/* ////////////////////////////////////// */}
            {/* ////////////////////////////////////// */}
            {/* ////////////////////////////////////// */}
            {/* ////////////////////////////////////// */}
            {/* ////////////////////////////////////// */}

            {/* Start Component Contents */}
            <main className="bg-blue-900 shadow-lg shadow-blue-950 rounded pt-3 pb-5 ">
              {/* Component Header */}
              <header className="flex justify-start items-center gap-2 mx-5 ">
                <h1 className="sm:text-6xl text-5xl font-medium">
                  {t(Temp.NameCity)}
                </h1>
                {/*  */}
                <p className="font-semibold text-blue-100 self-end">
                  {t(Temp.DateValue)}
                </p>
              </header>

              {/* ////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////// */}
              <hr className="my-4" />
              {/* ////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////// */}

              {/* Component Body */}
              <section className="flex flex-row sm:justify-between justify-center flex-wrap sm:gap-20 gap-y-5 gap-x-15 mx-5">
                {/* section right */}
                <div className="flex flex-col justify-around gap-3">
                  <div className="flex items-center  gap-5">
                    <div className="flex justify-center items-center">
                      {" "}
                      <h2 className="text-8xl">{Temp.TempValue}</h2>
                      <sup className="text-3xl flex font-bold">
                        °<span className="text-4xl">C</span>
                      </sup>
                    </div>

                    {/* <CloudIcon style={{ fontSize: "50px" }} /> */}
                    <img src={Temp.IconTemp} alt="" />
                  </div>
                  {/*  */}
                  <div className="text-blue-100">
                    <h3 className="text-2xl font-semibold">
                      {t(Temp.NameDescription)}
                    </h3>
                  </div>
                  {/*  */}
                  <div className="font-medium text-blue-100 flex items-center gap-3">
                    <p>
                      {t("min")}: {Temp.temp_min}
                    </p>

                    <div className="border-r-2 h-4"></div>

                    <p>
                      {t("max")}: {Temp.temp_max}
                    </p>
                  </div>
                </div>

                {/* section left */}
                <div className="">
                  <CloudIcon style={{ fontSize: "180px" }} />
                </div>
              </section>
            </main>
            {/* End Component Contents */}

            {/* ////////////////////////////////////// */}
            {/* ////////////////////////////////////// */}
            {/* ////////////////////////////////////// */}
            {/* ////////////////////////////////////// */}
            {/* ////////////////////////////////////// */}

            {/* Start Change Language */}
            <footer className="font-[IBM] w-full font-semibold flex flex-col gap-20 items-center justify-end px-5 mt-10">
              <div className="flex justify-center items-center gap-2 ">
                <label htmlFor="Changecity">{t("Selector")}: </label>
                <select
                  onChange={(e) => {
                    setChangeName(e.target.value);
                  }}
                  name=""
                  id=""
                  className="bg-black p-2 rounded cursor-pointer"
                >
                  <option value="Egypt">{t("Egypt")}</option>
                  <option value="Medina">{t("Medina")}</option>
                  <option value="Riyadh">{t("Riyadh")}</option>
                  <option value="Morocco">{t("Morocco")}</option>
                  <option value="Portugal">{t("Portugal")}</option>
                  <option value="Brazil">{t("Brazil")}</option>
                  <option value="France">{t("France")}</option>
                  <option value="Germany">{t("Germany")}</option>
                </select>
              </div>
              {/* //////////////////// */}
              {/* //////////////////// */}
              {/* //////////////////// */}

              <div>
                <button
                  onClick={clickChangeLan}
                  className="bg-emerald-700 py-4 px-10 rounded cursor-pointer "
                >
                  {Language === "ar" ? " English" : "عربى"}
                </button>
              </div>
            </footer>
            {/* End Change Language */}
          </div>
        </div>
      ) : (
        <div
          className="container-WeatherAPI font-[IBM] bg-blue-700 w-full h-dvh text-blue-50 flex flex-col justify-center items-center gap-10"
          dir="rtl"
        >
          <div className="bg-red-800 shadow-lg shadow-blue-950 rounded p-20">
            <h1 className="sm:text-4xl text-3xl text-center font-bold">
              أنت غير متصل بالانترنيت
            </h1>
          </div>

          <button
            onClick={HandClickReload}
            className="bg-black cursor-pointer hover:scale-110 duration-1500 px-5 py-3 rounded text-2xl font-bold"
          >
            تحميل
          </button>
        </div>
      )}
      {/* End Component App UI */}
    </>
  );
}

// <h1 className="font-[IBM] font-[400]">السلام عليكم</h1>
// <h1 className="font-[IBM] font-[500]">السلام عليكم</h1>
// <h1 className="font-[IBM] font-[600]">السلام عليكم</h1>
