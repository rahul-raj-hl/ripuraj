import appStore from "@/components/utils/appStore";
import "@/styles/globals.css"; // Import global styles here
import { Provider } from "react-redux";
import "../components/utils/i18n"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={appStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
