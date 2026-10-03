// ========================
// Start Import Icons
// ========================
import LocationCityIcon from "@mui/icons-material/LocationCity";

export default function CitySelector({ nameCity, setNameCity, t }) {
  return (
    <section className=" mt-8 w-full max-w-2xl">
      <div className=" rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 shadow-xl shadow-[var(--shadow-color)] ">
        {/* Start Selector Header */}
        <div className="mb-4 flex items-center gap-3">
          <div className=" flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-primary)] ">
            <LocationCityIcon
              style={{
                fontSize: "23px",
              }}
            />
          </div>

          <div>
            <p className=" text-xs font-semibold text-[var(--text-secondary)] ">
              {t("Selector")}
            </p>

            <h3 className="text-basefont-boldtext-[var(--text-primary)]">
              Choose your city
            </h3>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////// */}

        {/* Start Select */}
        <select
          value={nameCity}
          onChange={(e) => {
            setNameCity(e.target.value);
          }}
          className=" w-full cursor-pointer appearance-none rounded-2xl border border-[var(--border-color)] bg-[var(--bg-input)] px-5 py-4 font-semibold text-[var(--text-primary)] outline-none transition duration-300 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 "
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
    </section>
  );
}
