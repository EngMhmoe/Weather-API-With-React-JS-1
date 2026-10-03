// ========================
// Start Import Components
// ========================
import WeatherHeader from "./WeatherHeader";
import WeatherDetails from "./WeatherDetails";

export default function WeatherCard({ Temp, t }) {
  return (
    <main className=" relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-card)] p-5 shadow-2xl shadow-[var(--shadow-color)] sm:p-8 lg:p-10">
      {/* Start Background Decoration */}
      <div className=" pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent-primary)] opacity-10 blur-3xl"></div>

      <div className=" pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[var(--accent-secondary)] opacity-10 blur-3xl"></div>

      {/* //////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////// */}

      {/* Start Weather Header */}
      <WeatherHeader Temp={Temp} t={t} />

      {/* //////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////// */}

      {/* Start Divider */}
      <div className=" my-6 h-px bg-[var(--border-color)]"></div>

      {/* //////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////// */}

      {/* Start Weather Details */}
      <WeatherDetails Temp={Temp} t={t} />
    </main>
  );
}
