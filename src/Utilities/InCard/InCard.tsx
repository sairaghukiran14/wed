import "./InCard.css";

const InCard = ({ id, imgURl, designName, price, discount }) => {
  return (
    <div
      className="InCard w-80 bg-white text-black hover:scale-105 rounded-xl transition-all cursor-pointer"
      key={id}
    >
      <img src={imgURl} alt="" className=" rounded-lg" />
      <div className="text-xl p-2 font-medium uppercase">{designName}</div>
      <div className="price flex gap-2 p-2 text-xl">
        <span>₹{price}</span>
        <span className="text-gray-400 line-through">
          ₹{Math.round((price * (100 + discount)) / 100)}
        </span>
        <span className="text-pink-700 font-semibold">{discount}%Off</span>
      </div>
    </div>
  );
};

export default InCard;
