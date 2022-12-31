import CountdownTimer from "./CountDownTimer";
import girl from "../images/girl.jpg";

const AuctionCard = ({ url, hr, min, sec }) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="relative transition-all p-8 h-full bg-cover bg-center w-60 bg-black rounded-xl shrink-0 mr-5 flex items-end justify-center md:w-96 hover:scale-75"
    >
      <CountdownTimer thr={hr} tmin={min} tsec={sec}></CountdownTimer>
    </div>
  );
};

export default AuctionCard;
