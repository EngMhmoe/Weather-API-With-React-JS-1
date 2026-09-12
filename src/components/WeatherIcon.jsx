import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FoggyIcon from "@mui/icons-material/Foggy";

export default function WeatherIcon({ iconCode, description }) {
  let Icon = CloudIcon;

  switch (iconCode) {
    /* ========================================================== */
    /* Start Clear Sky */
    /* ========================================================== */

    case "01d":
    case "01n":
      Icon = WbSunnyIcon;
      break;

    /* ========================================================== */
    /* End Clear Sky */
    /* ========================================================== */

    /* ========================================================== */
    /* Start Few Clouds */
    /* ========================================================== */

    case "02d":
    case "02n":
      Icon = WbCloudyIcon;
      break;

    /* ========================================================== */
    /* End Few Clouds */
    /* ========================================================== */

    /* ========================================================== */
    /* Start Scattered Clouds */
    /* ========================================================== */

    case "03d":
    case "03n":
    case "04d":
    case "04n":
      Icon = CloudIcon;
      break;

    /* ========================================================== */
    /* End Scattered Clouds */
    /* ========================================================== */

    /* ========================================================== */
    /* Start Rain */
    /* ========================================================== */

    case "09d":
    case "09n":
    case "10d":
    case "10n":
      Icon = GrainIcon;
      break;

    /* ========================================================== */
    /* End Rain */
    /* ========================================================== */

    /* ========================================================== */
    /* Start Thunderstorm */
    /* ========================================================== */

    case "11d":
    case "11n":
      Icon = ThunderstormIcon;
      break;

    /* ========================================================== */
    /* End Thunderstorm */
    /* ========================================================== */

    /* ========================================================== */
    /* Start Snow */
    /* ========================================================== */

    case "13d":
    case "13n":
      Icon = AcUnitIcon;
      break;

    /* ========================================================== */
    /* End Snow */
    /* ========================================================== */

    /* ========================================================== */
    /* Start Mist */
    /* ========================================================== */

    case "50d":
    case "50n":
      Icon = FoggyIcon;
      break;

    /* ========================================================== */
    /* End Mist */
    /* ========================================================== */
  }

  return (
    <Icon
      aria-label={description || "Weather Icon"}
      sx={{
        width: "75%",
        height: "75%",
        position: "relative",
        zIndex: 10,
        filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))",
      }}
    />
  );
}
