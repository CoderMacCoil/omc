import Banner from "./components/Banner";
import SocialMediaLinks from "./components/SocialMediaLinks";
import BirthdayGreeting from "./components/BirthdayGreeting";

function App() {
  return (
    <div className="app border-16 rounded-lg border-secondary-dark bg-primary-dark h-svh">
      <Banner />
      <SocialMediaLinks />
      <BirthdayGreeting />
    </div>
  );
}

export default App;
