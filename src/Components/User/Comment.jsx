import { React, useState, useEffect } from "react";
import { BiSolidLike } from "react-icons/bi";
import { Avatar } from "@nextui-org/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../Api/Url";

const Comment = (props) => {
  const clickedWork = props.clickedWork.id;
  console.log(props, "shdfwefhhjwefwehjfwefhwejfhwejfwefwef");

  const commentdata = props.clickedWork.comments.map((x) => {
    return {
      date: x.date,
      comments: x.comments,
      image: x.user_profile.profile_pic,
      name: x.user_profile.username,
    };
  });

  // console.log(hi)

  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [userprofile, setUserprofile] = useState([]);

  const [Comments, setComments] = useState("");
  console.log(Comments, "wfjqwhefgwkqfjerf iuehqrfnqerv");

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  console.log(userId);
  useEffect(() => {
    const userprofile = async () => {
      const response = await axios.get(
        `${baseURL}account/user_profile_display/${userId}`
      );
      console.log(response, ">>>>>>>>>>>>.");
      setUserprofile(response.data);
    };
    userprofile();
  }, []);

  const handleSubmit = async (e) => {
    console.log("just testing fv,bviejkvnerver");
    e.preventDefault();
    try {
      console.log(Comments);
      const response = await axios.post(
        `${baseURL}account/workcomment/`,
        { Comments, userId, clickedWork }
      );
      console.log(response);
      if (response.status == 200) {
        setComments("");
        const response = await axios.get(
          `${baseURL}account/user-work/${userId}`
        );
        
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div>
        <div>
          <form action="">
            <div className="flex justify-center gap-4 mb-10 ">
              <Avatar src={userprofile.profile_pic} size="lg" />

              <textarea
                name="Comment"
                id=""
                cols="30"
                rows="10"
                placeholder="Post Your Comment"
                value={Comments}
                onChange={(e) => setComments(e.target.value)}
                className=" w-[75%] h-24 border border-cyan-700 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-end mr-[75px] ">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-wide mt-3  bg-zinc-300 btn-circle "
              >
                Post Your Comment
              </button>
            </div>
          </form>
        </div>

        {/* //////////////////comments////////////////////// */}

        {commentdata.map((element) => {
          return (
            <div className="flex ml-[87px] gap-4 mb-10 mt-5  ">
              <Avatar
                src={element.image}
                size="lg"
              />
              <div>
                <div className="flex gap-3">
                  <h1 className="font-bold text-lg ">{element.name}</h1>
                  <h1>{element.date}</h1>
                  {/* {element.date.split('T')[0]} */}
                </div>

                <h1>{element?.comments}</h1>
               
              </div>
            </div>
          );
        })}

        {/* //////////////////comments////////////////////// */}
      </div>
    </>
  );
};

export default Comment;
