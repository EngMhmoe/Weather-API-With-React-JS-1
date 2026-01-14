import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useTranslation } from "react-i18next";

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: "EG", label: "Arabic", phone: "20" },

  { code: "PT", label: "Portuguese", phone: "351" },

  { code: "ES", label: "Spanish", phone: "34" },

  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },

  {
    code: "FR",
    label: "French",
    phone: "33",
    suggested: true,
  },

  {
    code: "US",
    label: "English",
    phone: "1",
    suggested: true,
  },
];

export default function ChangeLanguage({ setDirection }) {
  //hook i18next with useTranslation
  const { i18n } = useTranslation();

  function click(changeCode) {
    if (changeCode === "EG" || changeCode === "SA") {
      i18n.changeLanguage("ar");
      setDirection("rtl");
    } else if (changeCode === "US") {
      i18n.changeLanguage("en");
      setDirection("ltr");
    } else if (changeCode === "PT") {
      i18n.changeLanguage("pt");
      setDirection("ltr");
    } else if (changeCode === "ES") {
      i18n.changeLanguage("ES");
      setDirection("ltr");
    } else if (changeCode === "DE") {
      i18n.changeLanguage("DE");
      setDirection("ltr");
    } else if (changeCode === "FR") {
      i18n.changeLanguage("FR");
      setDirection("ltr");
    }
  }
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <div onClick={() => click(option.code)}>
            <Box
              key={key}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...optionProps}
            >
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code})
            </Box>
          </div>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose Language a country"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  );
}
