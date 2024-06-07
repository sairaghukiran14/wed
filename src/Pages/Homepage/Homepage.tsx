import "./Homepage.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import card from "../../assets/Images/couple.jpeg";
import card1 from "../../assets/Images/couple1.jpeg";
import card2 from "../../assets/Images/couple2.jpeg";
import card3 from "../../assets/Images/couple3.jpeg";
const Homepage = () => {
  return (
    <div className="homePageSection text-white h-screen overflow-hidden">
      <div className="homemain flex w-full justify-around items-start h-full">
        <div className="right w-[50%] flex flex-wrap gap-4 p-2 overflow-y-hidden">
          <img
            src={card}
            alt=""
            className="w-80 object-cover rounded-xl hover:scale-105 transition-all"
          />
          <img
            src={card1}
            alt=""
            className="w-80 object-cover rounded-xl hover:scale-105 transition-all"
          />

          <img
            src={card2}
            alt=""
            className="w-80 object-cover rounded-xl hover:scale-105 transition-all"
          />
          <img
            src={card3}
            alt=""
            className="w-80 object-cover rounded-xl hover:scale-105 transition-all"
          />
        </div>
        <div className="left  w-[50%] flex flex-col gap-2 mt-60">
          <div className="headline flex flex-col text-5xl ">
            <span>
              Plan your <b>Weddings</b>
            </span>
            <span>
              We make them <b>Perfect</b>
            </span>
          </div>
          <div className="w-[80%]">
            Turning your love story into a beautiful reality. From intimate
            ceremonies to grand celebrations, we handle every detail with care.
            Let us create unforgettable moments on your special day.
          </div>
          <div className="flex gap-2 justify-center items-center bg-pink-500 text-white py-3 px-4 rounded-xl mt-2 w-[40%] cursor-pointer hover:translate-x-3 transition-all">
            <span>Get Free Quote</span>
            <IoArrowForwardOutline className="hover:translate-x-3 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
