
import "./style.css";
import Hero from "../../Sections/hero/hero";
import Member from "../../Sections/member/member";
import Train from "../../Sections/train/train";
import Communicate from "../../Sections/communicate/communicate";
import GetApp from "../../Sections/getApp/getApp";
import Tech from "../../Sections/tech/tech";
import Lock from "../../Sections/lock/lock";
import Video from "../../Sections/video/video";
import Footer from "../../Sections/footer/footer";
import Stream from "../../Sections/stream/stream";

const LandingPage = () => {
  return (
    <div className="App overflow-x-hidden">
      <Hero />
      <Member />
      <Train />
      <Stream />
      <Communicate />
      <Tech />
      <GetApp />
      <Lock />
      <Video />
      <Footer />
    </div>
  );
};

export default LandingPage;
