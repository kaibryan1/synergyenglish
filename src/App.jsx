import "./styles/index.scss";

// react
import { useEffect } from "react";

// Components
import Home from "./pages/home/Home";
import { LenisProvider } from "./utils/LenisProvider";
import ActiveNavProvider from "./store/ActiveNavProvider";
import ModalProvider from "./store/ModalProvider";

// Localization
import "./localization/i18n";
import { useTranslation } from "react-i18next";

// Themning
import { ThemeProvider } from "styled-components";
import { enTheme, myTheme } from "./themes/theme";
function App() {
  // Localization
  const { t, i18n } = useTranslation();

  // Theme based on lanauge
  const currentLanguage = i18n.language;
  const theme = currentLanguage === "en" ? enTheme : myTheme;

  // Localization Effect
  // useEffect(() => {
  //   const savedLanguage = localStorage.getItem("language") || "en";
  //   console.log(savedLanguage);
  //   // i18n.changeLanguage(savedLanguage);
  // }, []);

  return (
    <>
      <LenisProvider>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <ActiveNavProvider>
              <Home></Home>
            </ActiveNavProvider>
          </ModalProvider>
        </ThemeProvider>
      </LenisProvider>
    </>
  );
}

export default App;
