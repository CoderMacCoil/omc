import Banner from "./components/Banner";
import Button from "./components/Button";
import SocialMediaLinks from "./components/SocialMediaLinks";


function App() {
  return (
    <main className="app">
      <div className="background w-full h-dvh bg-no-repeat bg-center bg-cover">
        <div className="banner-content p-4 lg:p-16 text-center lg:text-right">
          <Banner />
          <SocialMediaLinks />
          <Button text="Contact Me"/>
        </div>
      </div>
    </main>
  );
}

export default App;
