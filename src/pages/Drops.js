import DropList from "../components/DropList";
import Footer from "../components/Footer";

const Drops = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="text-center px-10">
        <h1 className="text-3xl font-bold mb-10">Upcoming Drops</h1>
        <p className="mb-5">
          Turn on the notification so that no drops will miss you
        </p>
        <button className="px-5 py-2 text-2xl border-black border-[1px] rounded-lg">
          Notify me
        </button>
      </div>
      <div className="flex flex-col">
        <DropList></DropList>
      </div>
      <Footer></Footer>

    </div>
  );
};

export default Drops;
