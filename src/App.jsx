// ==========================================================
// Start Import Hooks React
// ==========================================================

import { useEffect, useState } from "react";

// ==========================================================
// End Import Hooks React

// ==========================================================
// Start Import Axios
// ==========================================================

import axios from "axios";

// ==========================================================
// End Import Axios

// ==========================================================
// Start Import i18next
// ==========================================================

import { useTranslation } from "react-i18next";

// ==========================================================
// End Import i18next

// ==========================================================
// Start Import Components
// ==========================================================

import ChangeLanguage from "./components/ChangeLang";

import WeatherCard from "./components/WeatherCard";

import CitySelector from "./components/CitySelector";

import OfflineMessage from "./components/OfflineMessage";

// ==========================================================
// End Import Components

// ==========================================================
// Start Component App
// ==========================================================

export default function App() {
  // ==========================================================
  // Start Temp State
  // ==========================================================

  const [Temp, setTemp] = useState({
    NameCity: "",

    TempValue: null,

    NameDescription: "",

    temp_min: null,

    temp_max: null,

    DateValue: "",

    IconTemp: "",
  });

  // ==========================================================
  // End Temp State

  // ==========================================================
  // Start State Name City
  // ==========================================================

  const [ChangeNam2, setChangeName] = useState("Egypt");

  // ==========================================================
  // End State Name City

  // ==========================================================
  // Start Get API
  // ==========================================================

  useEffect(() => {
    // ==========================================================
    // Start Abort Controller
    // ==========================================================

    const controller = new AbortController();

    // ==========================================================
    // End Abort Controller

    // ==========================================================
    // Start Axios Request
    // ==========================================================

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
        // ==========================================================
        // Start Get Name City
        // ==========================================================

        const NameCity = response.data.name;

        // ==========================================================
        // End Get Name City

        // ==========================================================
        // Start Get Temp Value
        // ==========================================================

        const TempValue = Math.round(response.data.main.temp);

        // ==========================================================
        // End Get Temp Value

        // ==========================================================
        // Start Get Weather Icon
        // ==========================================================

        const IconCode = response.data.weather[0].icon;

        // ==========================================================
        // End Get Weather Icon

        // ==========================================================
        // Start Get Description
        // ==========================================================

        const NameDescription = response.data.weather[0].description;

        // ==========================================================
        // End Get Description

        // ==========================================================
        // Start Get Min Max
        // ==========================================================

        const Temp_min = Math.round(response.data.main.temp_min);

        const Temp_max = Math.round(response.data.main.temp_max);

        // ==========================================================
        // End Get Min Max

        // ==========================================================
        // Start Get Date
        // ==========================================================

        const DateValue = new Date(response.data.dt * 1000).toLocaleDateString(
          "en-EG",
          {
            weekday: "long",

            year: "numeric",

            month: "long",

            day: "numeric",
          },
        );

        // ==========================================================
        // End Get Date

        // ==========================================================
        // Start Set Temp
        // ==========================================================

        setTemp({
          NameCity: NameCity,

          TempValue: TempValue,

          NameDescription: NameDescription,

          temp_min: Temp_min,

          temp_max: Temp_max,

          DateValue: DateValue,

          IconTemp: IconCode,
        });

        // ==========================================================
        // End Set Temp
      })

      .catch((error) => {
        console.log(error);
      });

    // ==========================================================
    // Start CleanUp
    // ==========================================================

    return () => {
      controller.abort();
    };

    // ==========================================================
    // End CleanUp
  }, [ChangeNam2]);

  // ==========================================================
  // End Get API

  // ==========================================================
  // Start Check Online
  // ==========================================================

  const [online, setOnline] = useState(true);

  // ==========================================================
  // End Check Online

  // ==========================================================
  // Start UseEffect Check Online
  // ==========================================================

  useEffect(() => {
    if (window.navigator.onLine) {
      setOnline(true);
    } else {
      setOnline(false);
    }
  }, []);

  // ==========================================================
  // End UseEffect Check Online

  // ==========================================================
  // Start Function Reload
  // ==========================================================

  function HandClickReload() {
    window.location.reload();
  }

  // ==========================================================
  // End Function Reload

  // ==========================================================
  // Start Translation
  // ==========================================================

  const { t, i18n } = useTranslation();

  // ==========================================================
  // End Translation

  // ==========================================================
  // Start Direction State
  // ==========================================================

  const [direction, setDirection] = useState("ltr");

  // ==========================================================
  // End Direction State

  // ==========================================================
  // Start Initial Language
  // ==========================================================

  useEffect(() => {
    i18n.changeLanguage("ar");

    setDirection("rtl");
  }, []);

  // ==========================================================
  // End Initial Language

  return (
    <>
      {/* ========================================================== */}
      {/* Start Component App UI */}
      {/* ========================================================== */}

      {online === true ? (
        <div
          className="
                        container-WeatherAPI
                        min-h-screen
                        w-full
                        bg-[var(--bg-main)]
                        px-4
                        py-6
                        font-[IBM]
                        text-[var(--text-primary)]
                        transition-all
                        duration-500
                        sm:px-6
                        lg:px-10
                    "
        >
          <div
            className="
                            mx-auto
                            flex
                            min-h-[calc(100vh-3rem)]
                            w-full
                            max-w-6xl
                            flex-col
                        "
          >
            {/* ========================================================== */}
            {/* Start Header */}
            {/* ========================================================== */}

            <header
              className="
                                flex
                                flex-col
                                gap-5
                                rounded-3xl
                                border
                                border-[var(--border-color)]
                                bg-[var(--bg-card)]
                                p-4
                                shadow-xl
                                shadow-[var(--shadow-color)]
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
            >
              {/* ========================================================== */}
              {/* Start Logo */}
              {/* ========================================================== */}

              <div
                className="
                                    flex
                                    items-center
                                    gap-3
                                "
              >
                <div
                  className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-[var(--accent-gradient)]
                                        text-xl
                                        font-bold
                                        text-white
                                        shadow-lg
                                    "
                >
                  ☀
                </div>

                <div>
                  <h1
                    className="
                                            text-xl
                                            font-bold
                                            text-[var(--text-primary)]
                                        "
                  >
                    Weather App
                  </h1>

                  <p
                    className="
                                            text-sm
                                            text-[var(--text-secondary)]
                                        "
                  >
                    Weather information
                  </p>
                </div>
              </div>

              {/* ========================================================== */}
              {/* End Logo */}

              {/* ========================================================== */}
              {/* Start Change Language */}
              {/* ========================================================== */}

              <div>
                <ChangeLanguage
                  direction={direction}
                  setDirection={setDirection}
                />
              </div>

              {/* ========================================================== */}
              {/* End Change Language */}
            </header>

            {/* ========================================================== */}
            {/* End Header */}

            {/* ========================================================== */}
            {/* Start Main */}
            {/* ========================================================== */}

            <div
              className="
                                flex
                                flex-1
                                flex-col
                                items-center
                                justify-center
                                py-8
                                sm:py-12
                            "
              dir={direction}
            >
              {/* ========================================================== */}
              {/* Start Hero */}
              {/* ========================================================== */}

              <section
                className="
                                    mb-8
                                    w-full
                                    text-center
                                "
              >
                <span
                  className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-[var(--border-color)]
                                        bg-[var(--accent-soft)]
                                        px-4
                                        py-2
                                        text-sm
                                        font-semibold
                                        text-[var(--accent-primary)]
                                    "
                >
                  <span
                    className="
                                            h-2
                                            w-2
                                            animate-pulse
                                            rounded-full
                                            bg-[var(--accent-primary)]
                                        "
                  ></span>

                  {t("Weather")}
                </span>

                <h2
                  className="
                                        mt-5
                                        text-4xl
                                        font-bold
                                        tracking-tight
                                        text-[var(--text-primary)]
                                        sm:text-5xl
                                    "
                >
                  {t("WeatherToday")}
                </h2>

                <p
                  className="
                                        mx-auto
                                        mt-4
                                        max-w-2xl
                                        text-base
                                        leading-7
                                        text-[var(--text-secondary)]
                                        sm:text-lg
                                    "
                >
                  {t("WeatherDescription")}
                </p>
              </section>

              {/* ========================================================== */}
              {/* End Hero */}

              {/* ========================================================== */}
              {/* Start Weather Card */}
              {/* ========================================================== */}

              <WeatherCard Temp={Temp} t={t} />

              {/* ========================================================== */}
              {/* End Weather Card */}

              {/* ========================================================== */}
              {/* Start City Selector */}
              {/* ========================================================== */}

              <CitySelector value={ChangeNam2} setValue={setChangeName} t={t} />

              {/* ========================================================== */}
              {/* End City Selector */}
            </div>

            {/* ========================================================== */}
            {/* End Main */}

            {/* ========================================================== */}
            {/* Start Footer */}
            {/* ========================================================== */}

            <footer
              className="
                                border-t
                                border-[var(--border-color)]
                                py-5
                                text-center
                                text-sm
                                text-[var(--text-secondary)]
                            "
            >
              {t("FooterText")}
            </footer>

            {/* ========================================================== */}
            {/* End Footer */}
          </div>
        </div>
      ) : (
        <OfflineMessage onReload={HandClickReload} />
      )}

      {/* ========================================================== */}
      {/* End Component App UI */}
    </>
  );
}

// ==========================================================
// End Component App
// ==========================================================
