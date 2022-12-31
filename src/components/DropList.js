import dropsData from "../data/DropsData";
import Drop from "./Drop";
const DropList = () => {
  return (
    <div className="flex flex-col my-10 space-y-10">
      {dropsData.map((drop) => (
        <Drop
          key={drop.id}
          creator={drop.creator}
          date={drop.date}
          desc={drop.desc}
          title={drop.title}
          url={drop.url}
          status={drop.status}
        ></Drop>
      ))}
    </div>
  );
};

export default DropList;
