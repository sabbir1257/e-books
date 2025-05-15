import PrivateCommunities from "./Components/PrivateCommunities";
import FirstBanner from "./Components/FirstBanner";
import SecondBanner from "./Components/SecondBanner";
import TableOfContents from "./Components/TableOfContents";
import VideoResource from "./Components/VideoResource";
import PrivateCommunitiesTow from "./Components/PrivateCommunitiesTow";
import CountdownTimer from "./Components/CountdownTimer";
import ReaderReview from "./Components/ReaderReview";
import Slider from "./Components/Slider";
import WhatsAppFacebookCommunityAccess from "./Components/WhatsAppFacebookCommunityAccess";
import OrderFrom from "./Components/OrderFrom";

function App() {
  return (
    <div className="w-[1050px] mx-auto">
      <FirstBanner />
      <SecondBanner />
      <PrivateCommunities />
      <TableOfContents />
      <VideoResource />
      <PrivateCommunitiesTow />
      <CountdownTimer initialHours={2} initialMinutes={0} initialSeconds={0} />
      <ReaderReview />
      <Slider jsonUrl={"/public/TableOfContents.json"} />
      <CountdownTimer initialHours={2} initialMinutes={0} initialSeconds={0} />
      <PrivateCommunitiesTow />
      <WhatsAppFacebookCommunityAccess/>
      <OrderFrom/>
    </div>
  );
}

export default App;
