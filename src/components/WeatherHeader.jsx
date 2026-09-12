// ==========================================================
// Start Import Icons
// ==========================================================

import LocationOnIcon from "@mui/icons-material/LocationOn";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// ==========================================================
// End Import Icons

// ==========================================================
// Start Component Weather Header
// ==========================================================

export default function WeatherHeader({ Temp, t }) {
  return (
    <header
      className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
    >
      {/* ========================================================== */}
      {/* Start City */}
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
                        bg-[var(--accent-soft)]
                        text-[var(--accent-primary)]
                    "
        >
          <LocationOnIcon
            style={{
              fontSize: "26px",
            }}
          />
        </div>

        <div>
          <p
            className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-widest
                            text-[var(--text-secondary)]
                        "
          >
            {t("CurrentLocation")}
          </p>

          <h2
            className="
                            mt-1
                            text-3xl
                            font-bold
                            text-[var(--text-primary)]
                            sm:text-4xl
                        "
          >
            {t(Temp.NameCity)}
          </h2>
        </div>
      </div>

      {/* ========================================================== */}
      {/* End City */}

      {/* ========================================================== */}
      {/* Start Date */}
      {/* ========================================================== */}

      <div
        className="
                    flex
                    items-center
                    gap-2
                    self-start
                    rounded-xl
                    border
                    border-[var(--border-color)]
                    bg-[var(--bg-input)]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-[var(--text-secondary)]
                    sm:self-auto
                "
      >
        <CalendarMonthIcon
          style={{
            fontSize: "18px",
          }}
        />

        <span>{t(Temp.DateValue)}</span>
      </div>

      {/* ========================================================== */}
      {/* End Date */}
    </header>
  );
}

// ==========================================================
// End Component Weather Header
// ==========================================================
