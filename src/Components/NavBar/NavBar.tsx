import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const Navigate = useNavigate();
  return (
    <div className="navBarSection bg-white p-4 flex justify-between items-center">
      <div className="logo text-2xl text-pink-700 pl-8">
        <span className="font-semibold">EverLasting</span>
        <span className="font-light">Vows</span>
        <span className="font-semibold">Co.</span>
      </div>
      <div className="rightNav flex gap-10 justify-center items-center text-base font-medium cursor-pointer">
        <div
          className="hover:scale-110 transition-all"
          onClick={() => {
            Navigate("/");
          }}
        >
          Home
        </div>
        <div
          className="hover:scale-110 transition-all"
          onClick={() => {
            Navigate("/invitation");
          }}
        >
          Invitation Cards
        </div>

        <div
          className="hover:scale-110 transition-all"
          onClick={() => {
            Navigate("/biodata");
          }}
        >
          Bio Data
        </div>
        <div
          className="hover:scale-110 transition-all"
          onClick={() => {
            Navigate("/contact");
          }}
        >
          ContactUs
        </div>
      </div>
    </div>
  );
};

export default NavBar;
