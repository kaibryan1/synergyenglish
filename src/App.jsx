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

function App() {
  const { t, i18n } = useTranslation();

  // Localization Effect
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <>
      <LenisProvider>
        <ModalProvider>
          <ActiveNavProvider>
            <Home></Home>
          </ActiveNavProvider>
        </ModalProvider>
      </LenisProvider>
    </>
  );
}

export default App;
