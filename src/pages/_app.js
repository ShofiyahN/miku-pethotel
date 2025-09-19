import "@/styles/globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { dynapuff, inter, roboto } from "@/lib/fonts/fonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${dynapuff.variable} ${inter.variable} ${roboto.variable}`}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
