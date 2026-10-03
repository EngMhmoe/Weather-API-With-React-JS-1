//import icons-material
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

//import material UI
import CircularProgress from "@mui/material/CircularProgress";

//import Component
import WeatherIcon from "./WeatherIcon";

// import Redux
import { useSelector } from "react-redux";

export default function WeatherDetails({ Temp, t }) {
  // start Redux
  const loading = useSelector((state) => state.weatherAPI.loading);
  const errorMass = useSelector((state) => state.weatherAPI.errorMass);

  return (
    <section className=" flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
      {/* Start Temperature */}
      <div className=" flex flex-col items-center lg:items-start">
        {loading === false ? (
          <div className=" flex items-start">
            <span className=" text-7xl font-bold leading-none tracking-tight text-[var(--text-primary)] sm:text-8xl">
              {Temp.TempValue}
            </span>

            {/* //////////////////////////////////////// */}
            {/* //////////////////////////////////////// */}

            <span className=" mt-1 text-3xl font-bold text-[var(--accent-primary)]">
              °C
            </span>
          </div>
        ) : loading === true ? (
          <CircularProgress style={{ color: "white" }} />
        ) : null}

        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}

        <h1 className="text-red-500 font-extrabold text-xl text-center text-shadow-lg text-shadow-white/15">
          {errorMass}
        </h1>

        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}

        <div className=" mt-4 flex items-center gap-2 text-lg font-semibold capitalize text-[var(--text-secondary)]">
          <ThermostatIcon
            style={{
              fontSize: "22px",
            }}
          />

          {t(Temp.NameDescription)}
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Start Weather Image */}
      <div className=" flex justify-center">
        <div className=" relative flex h-44 w-44 items-center justify-center rounded-full bg-[var(--accent-soft)] sm:h-52 sm:w-52">
          <div className=" absolute inset-3 rounded-full border border-[var(--accent-primary)] opacity-20"></div>

          {/* /////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////// */}

          <div className="flex justify-center items-center">
            <WeatherIcon
              iconCode={Temp?.IconCode}
              description={Temp?.NameDescription}
            />
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Start Min Max */}
      <div className=" grid grid-cols-2 gap-3 lg:justify-self-end">
        {/* Start Minimum */}
        <div className=" min-w-[120px] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-input)] p-4">
          <div className=" flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]">
            <ArrowDownwardIcon
              style={{
                fontSize: "16px",
              }}
            />

            {t("min")}
          </div>

          <p className=" mt-2 text-2xl font-bold text-[var(--text-primary)]">
            {Temp.temp_min}°C
          </p>
        </div>

        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}

        {/* Start Maximum */}
        <div className=" min-w-[120px] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-input)] p-4">
          <div className=" flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]">
            <ArrowUpwardIcon
              style={{
                fontSize: "16px",
              }}
            />

            {t("max")}
          </div>

          {/* /////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////// */}

          <p className=" mt-2 text-2xl font-bold text-[var(--text-primary)]">
            {Temp.temp_max}°C
          </p>
        </div>
      </div>
    </section>
  );
}
