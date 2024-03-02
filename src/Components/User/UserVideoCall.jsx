import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";
import { useSelector } from "react-redux";


const UserVideoCall = () => {
  const { roomId } = useParams();

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  
  
  
 


  const myMeeting = async (element) => {

    const appID = 1533258792;
    const serverSecret = "527e9e194868f80f76161558a126fe21";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    
      appID,
      serverSecret,
      roomId,
      // roomID,
      v4(),
     
      "sidharth"
    );

    const ui = ZegoUIKitPrebuilt.create(kitToken);

    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      sharedLinks: [
        {
          name: 'Personal link',
          // url: `http://localhost:5173/room/${roomId}`
          url: `https://fework-front-ivory.vercel.app/app/room/${roomId}`
        },
      ],
    });
  };

  return (
    // <div
    //   className="myCallContainer"
    //   // ref={myMeeting}
    //   style={{ width: '100vw', height: '100vh' }}
    // ></div>

    <>
      {/* <h1>Room{roomId}</h1> */}
      <div
        // className="myCallContainer"
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
      
    </>
  );
};

export default UserVideoCall;
