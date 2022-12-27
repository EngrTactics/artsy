import CountdownTimer from "./CountDownTimer";
import girl from "./images/girl.jpg";

const Auction = () => {
  return (
    <div
      style={{ backgroundImage: `url(${girl})` }}
      className="relative p-8 h-full bg-cover bg-center w-60 bg-black rounded-xl shrink-0 mr-5 flex items-end justify-center"
    >
      <CountdownTimer className=""></CountdownTimer>
    </div>
  );
};

export default Auction;
