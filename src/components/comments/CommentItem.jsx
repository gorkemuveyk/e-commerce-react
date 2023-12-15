import { FaStar } from "react-icons/fa";
const CommentItem = () => {
  return (
    <div className="md:w-2/5 w-full flex justify-between items-center p-3 rounded-md relative my-5 shadow-md mx-5">
      <img src="/images/user.png" className="w-[50px]" alt="" />
      <div className="comment w-full p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
          excepturi, laboriosam aut ea
        </p>
        <div className="date absolute -top-1 right-1 p-0 text text-black/50">
          15 December 2023
        </div>
        <div className="stars absolute bottom-1 right-1 p-1 text text-black/50">
          <div className="flex">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
