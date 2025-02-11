import "./styles/index.scss";

// Components
import Home from "./pages/home/Home";
import { LenisProvider } from "./utils/LenisProvider";
// import SmoothScroll from "./utils/SmoothScroll";
import ActiveNavProvider from "./store/ActiveNavProvider";
import ModalProvider from "./store/ModalProvider";

function App() {
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
