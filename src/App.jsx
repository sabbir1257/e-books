import Booking from "./Components/Booking";
import FirstBanner from "./Components/FirstBanner";
import SecondBanner from "./Components/SecondBanner";

function App() {
  return (
    <div className="w-[950px] mx-auto">
      <FirstBanner />
      <SecondBanner />
      <Booking />
    </div>
  );
}

export default App;