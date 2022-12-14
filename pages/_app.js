import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import AuthContextProvider from "../store/AuthProvider";
import { Provider } from "react-redux";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthContextProvider>
  );
}

export default MyApp;
