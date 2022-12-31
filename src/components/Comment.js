import avatar3 from "../images/avatar3.png";

const Comment = ({ img, name, message }) => {
  return (
    <div className="flex space-x-5">
      <img src={img} alt="" />
      <div className="flex flex-col pace-y-3 items-start">
        <h1 className="font-bold">{name}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Comment;
