
import "./style.css";
import Hero from "../../Sections/hero/hero";
import Member from "../../Sections/member/member";
import Train from "../../Sections/train/train";
import Communicate from "../../Sections/communicate/communicate";
import Get_app from "../../Sections/get_app/get_app";
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
      <Get_app />
      <Lock />
      <Video />
      <Footer />
    </div>
  );
};

export default LandingPage;
