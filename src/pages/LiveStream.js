import { FaEye, FaHeart } from "react-icons/fa";
import girl from "../images/girl.jpg";
import { AiOutlineClose, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Checkbox } from "@mui/material";
import { FiSend } from "react-icons/fi";
import avatar1 from "../images/avatar1.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Comment from "../components/Comment";
import commentsData from "../data/CommentsData";

const LiveStream = () => {
  const [commentBox, setCommentBox] = useState(null);
  const [sendButton, setSendButton] = useState(null);
  const [commentBoxD, setCommentBoxD] = useState(null);
  const [sendButtonD, setSendButtonD] = useState(null);
  const [comments, setComments] = useState(commentsData);
  useEffect(() => {
    setCommentBox(document.getElementById("commentBox"));
    setSendButton(document.getElementById("sendButton"));
    setCommentBoxD(document.getElementById("commentBoxD"));
    setSendButtonD(document.getElementById("sendButtonD"));
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/drop");
  };
  const AddComment = (commentToAdd) => {
    setComments((previousComments) => {
      return previousComments.concat(commentToAdd);
    });
  };
  const sendComment = () => {
    AddComment({
      id: comments.length + 1,
      comment: commentBox.value,
      name: "Tray Foster",
      img: avatar1,
    });
    commentBox.value = "";
  };

  const AddCommentD = (commentToAdd) => {
    setComments((previousComments) => {
      return previousComments.concat(commentToAdd);
    });
  };
  const sendCommentD = () => {
    AddComment({
      id: comments.length + 1,
      comment: commentBoxD.value,
      name: "Tray Foster",
      img: avatar1,
    });
    commentBoxD.value = "";
  };
  return (
    <div className="relative mx-auto container md:p-10 md:flex">
      {/* Product being bidded: Image */}
      <div
        style={{ backgroundImage: `url(${girl})` }}
        className="p-5 w-full min-w-[400px] h-screen flex flex-col  bg-cover bg-center text-white justify-between items-center md:items-start md:border-[1.5px] border-black"
      >
        {/* Tag, views and close */}
        <div className="w-full flex justify-between items-center">
          <h1 className="md:hidden">Tag: Lost or Winter</h1>
          <div className="flex items-center justify-around w-1/2 md:flex-row-reverse md:w-full md:justify-between">
            <div className="bg-blue-500 px-3 py-2 uppercase rounded-md text-sm">
              Live
            </div>
            <div className=" flex items-center space-x-2 bg-gray-200 bg-opacity-50 justify-around px-3 py-2 uppercase rounded-md text-sm md:hidden">
              <FaEye></FaEye>
              <h1>233</h1>
            </div>
            <AiOutlineClose
              className="cursor-pointer"
              size={25}
              onClick={handleClick}
            ></AiOutlineClose>
          </div>
        </div>
        {/* Current Bid */}
        <h1 className="text-3xl font-bold w-full text-center">
          Current Bid : $45.00
        </h1>
        {/* Comments */}
        <div className="absolute bottom-20 left-5 flex flex-col space-y-6  justify-end w-1/2 h-1/3 overflow-hidden text-white md:hidden">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              img={comment.img}
              name={comment.name}
              message={comment.comment}
            ></Comment>
          ))}
        </div>
        {/* write comment and Like section */}
        <div className="flex justify-between items-center space-x-5 w-full md:hidden">
          <div className=" w-full flex items-center border-white border-2 rounded-full px-5 py-3">
            <input
              autoCapitalize="false"
              id="commentBoxD"
              type="text"
              className="bg-transparent w-full focus:border-none focus:outline-none"
              onKeyDown={(e) => {
                if (e.key == "enter") {
                  sendButtonD.click();
                }
              }}
            />
            <button id="sendButtonD" onClick={sendCommentD}>
              <FiSend></FiSend>
            </button>
          </div>
          {/* Love icon */}
          <Checkbox
            checkedIcon={<AiFillHeart color="red" size={30}></AiFillHeart>}
            icon={<AiOutlineHeart color="red" size={30}></AiOutlineHeart>}
          ></Checkbox>
        </div>
        <h1 className="hidden md:block">Tag: Lost or Winter</h1>
      </div>
      {/* comment section for desktop view */}
      <div className="hidden md:flex flex-col justify-end md:p-5 md:justify-self-start md:border-y-[1.5px] border-black min-w-[400px] border-r-[1.5px] space-y-5">
        {/* Comments */}
        <div className="flex flex-col space-y-6 text-gray-700 justify-end w-full  max-h-[33.5rem] overflow-hidden ">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              img={comment.img}
              name={comment.name}
              message={comment.comment}
            ></Comment>
          ))}
        </div>
        <div className="hidden md:flex justify-between items-center space-x-5 w-full">
          <div className=" w-full flex items-center border-black border-2 rounded-full px-5 py-3">
            <input
              autoCapitalize="false"
              id="commentBox"
              type="text"
              className="bg-transparent w-full focus:border-none focus:outline-none"
              onKeyDown={(e) => {
                if (e.key == "enter") {
                  sendButton();
                }
              }}
            />
            <button id="sendButton" onClick={sendComment}>
              <FiSend></FiSend>
            </button>
          </div>
          {/* Love icon */}
          <Checkbox
            checkedIcon={<AiFillHeart color="red" size={30}></AiFillHeart>}
            icon={<AiOutlineHeart color="red" size={30}></AiOutlineHeart>}
          ></Checkbox>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
