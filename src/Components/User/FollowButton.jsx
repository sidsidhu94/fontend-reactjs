import axios from "axios";
import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { baseURL } from "../Api/Url";

const FollowButton = (userAccountId) => {
  console.log(userAccountId.userAccountId);

  const follow_id = userAccountId.userAccountId;

  const [isFollowing, setIsFollowing] = useState(false);

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  console.log(userId);

  const handleFollow = async () => {
    try {
      const response = await axios.post(
        `${baseURL}account/follow_user/${follow_id}/`,
        { userId }
      );
      const { action, following_user } = response.data;

      const follow = response.data.following_users;
      console.log(follow);
      const followed = follow.includes(follow_id);
      // console.log("Is user 2 followed?", isUser2Followed);

      // const result = follow.filter(checkFollow)

      // print(result)

      setIsFollowing(followed);

      
    } catch (error) {
      console.error("Error following user:", error);
    }
  };
  useEffect(() => {
    const fetchFollowStatus = async () => {

        console.log(userId)
        console.log(follow_id)
        const response = await axios.get(`${baseURL}account/follow_status/${userId}` );
        console.log(response)
        const follow = response.data.following_users
        console.log(follow)
        const followed = follow.includes(follow_id);
        console.log(followed)
        

        setIsFollowing(followed);

        console.log("Initial follow status:", followed);
      
    };

    fetchFollowStatus();
  }, [userId,follow_id]);


  return (
    <div>
      <button
        onClick={handleFollow}
        className="btn btn-wide mt-3 bg-cyan-700 btn-circle text-black"
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default FollowButton;
