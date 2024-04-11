import Banner from "./components/Banner";
import SocialMediaLinks from "./components/SocialMediaLinks";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="app">
      <div className="background w-full h-dvh bg-[url('./assets/bg-desktop.jpg')]  bg-no-repeat bg-center bg-cover">
        <div className="banner-content p-16">
          <Banner />
          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2.5, delay: 2 }}
            className="w-48 h-1 mx-auto my-4 lg:me-0 bg-primary-dark text-end border-0 rounded"
          />
          <SocialMediaLinks />
        </div>
      </div>
    </main>
  );
}

export default App;
