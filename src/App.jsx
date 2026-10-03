// ========================
// Start Import Hooks React
// ========================
import { useEffect, useState } from "react";

// ========================
// Start Import i18next
// ========================
import { useTranslation } from "react-i18next";

// ========================
// Start Import Components
// ========================
import ChangeLanguage from "./components/ChangeLang";
import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";
import OfflineMessage from "./components/OfflineMessage";

// ========================
// Start Import Redux
// ========================
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAPI } from "./features/API/witherAPISlice";

export default function App() {
  // Start Redux
  const Temp = useSelector((state) => state.weatherAPI.weatherAPI);
  const dispatch = useDispatch();

  // ++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++

  // Start State Name City
  const [NameCity, setNameCity] = useState("Egypt");

  // ++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++

  // Start Check Online
  const [online, setOnline] = useState(true);

  // ++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++

  // Start Translation
  const { t, i18n } = useTranslation();

  // ++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++

  // Start Direction State
  const [direction, setDirection] = useState("ltr");

  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////

  // Start UseEffect Get API
  useEffect(() => {
    dispatch(fetchWeatherAPI({ changeNameCity: NameCity }));
  }, [NameCity]);

  // ++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++

  // Start UseEffect Check Online
  useEffect(() => {
    if (window.navigator.onLine) {
      setOnline(true);
    } else {
      setOnline(false);
    }
  }, []);

  // ++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++

  // Start UseEffect Initial Language
  useEffect(() => {
    i18n.changeLanguage("ar");

    setDirection("rtl");
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////

  // Start Function Reload
  function HandClickReload() {
    window.location.reload();
  }

  return (
    <>
      {/* ========================================================== */}
      {/* Start Component App UI */}
      {/* ========================================================== */}
      {online === true ? (
        <div className=" container-WeatherAPI min-h-screen w-full bg-[var(--bg-main)] px-4 py-6 font-[IBM] text-[var(--text-primary)] transition-all duration-500 sm:px-6 lg:px-10">
          <div className=" mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col">
            {/* ========================================================== */}
            {/* Start Header */}
            {/* ========================================================== */}
            <header className=" flex flex-col gap-5 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 shadow-xl shadow-[var(--shadow-color)] sm:flex-row sm:items-center sm:justify-between">
              {/* Start Logo */}
              <div className=" flex items-center gap-3 ">
                <div className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-gradient)] text-xl font-bold text-white shadow-lg">
                  ☀
                </div>

                <div>
                  <h1 className=" text-xl font-bold text-[var(--text-primary)]">
                    Weather App
                  </h1>

                  <p className=" text-sm text-[var(--text-secondary)]">
                    Weather information
                  </p>
                </div>
              </div>

              {/* Start Change Language */}
              <div>
                <ChangeLanguage
                  // direction={direction}
                  setDirection={setDirection}
                />
              </div>
            </header>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* ========================================================== */}
            {/* Start Main */}
            {/* ========================================================== */}
            <div
              className=" flex flex-1 flex-col items-center justify-center py-8 sm:py-12"
              dir={direction}
            >
              {/* Start Hero */}
              <section className=" mb-8 w-full text-center">
                <span className=" inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent-primary)]">
                  <span className=" h-2 w-2 animate-pulse rounded-full bg-[var(--accent-primary)]"></span>

                  {t("Weather")}
                </span>

                <h2 className=" mt-5 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                  {t("WeatherToday")}
                </h2>

                <p className=" mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
                  {t("WeatherDescription")}
                </p>
              </section>

              {/* Start Weather Card */}
              <WeatherCard Temp={Temp} t={t} />

              {/* Start City Selector */}
              <CitySelector
                nameCity={NameCity}
                setNameCity={setNameCity}
                t={t}
              />
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* ========================================================== */}
            {/* Start Footer */}
            {/* ========================================================== */}
            <footer className=" border-t border-[var(--border-color)] py-5 text-center text-sm text-[var(--text-secondary)]">
              {t("FooterText")}
            </footer>
          </div>
        </div>
      ) : (
        <OfflineMessage onReload={HandClickReload} />
      )}
    </>
  );
}
