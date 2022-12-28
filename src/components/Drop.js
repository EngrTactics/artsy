import DropCountdownTimer from "./DropCountdownTimer";
import girl from "../images/girl.jpg";

const Drop = () => {
  return (
    <div className="flex flex-col space-y-5 items-start md:flex-row md:space-y-0 md:justify-between md:space-x-10">
      <div
        style={{ backgroundImage: `url(${girl})` }}
        className="p-5 w-full h-56 rounded-md flex flex-col items-end bg-cover bg-center text-white justify-between md:h-72 md:max-w-[30rem] md:justify-end"
      >
        <div className="bg-blue-500 px-5 py-2 uppercase rounded-md text-sm md:hidden">
          Upcoming
        </div>
        <DropCountdownTimer></DropCountdownTimer>
      </div>

      <div className="flex flex-col space-y-5 items-start md:items-start md:justify-between md:h-72 md:space-y-0 ">
        <div className="bg-blue-500 px-5 py-2 uppercase rounded-md text-sm hidden md:block">
          Upcoming
        </div>
        <p>November 21 at 11am WAT</p>
        <h1 className="text-3xl">Eyo: Eko for show</h1>
        <p className="text-sm leading-loose">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          ipsum laborum recusandae fugiat ratione officiis in quibusdam deleniti
          quas illum!
        </p>
        <h2 className="text-2xl">
          Creator: <span className="text-blue-500">Jacob Banks</span>
        </h2>
        <button className="border-b-[1px] border-b-blue-500 text-blue-500">
          Get Notified
        </button>
      </div>
    </div>
  );
};

export default Drop;