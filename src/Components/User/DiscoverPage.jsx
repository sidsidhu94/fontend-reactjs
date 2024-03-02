import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Avatar,
  user,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import UserWorkDisplay from "./UserWorkDisplay";
import { baseURL } from "../Api/Url";


const DiscoverPage = () => {
  const navigate = useNavigate();

  const [userWorkData, setUserWorkData] = useState();

  const [WorkDisplay, setWorkDisplay] = useState(false);
  const [clickedWork, setclickedWork] = useState({});

  function handleModalSubmit() {
    setWorkDisplay(true);
  }

  // const [clickedData, setclickedData] = useState({})
  // console.log(clickedData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseURL}account/all_works/`
        );
        console.log(response.data, ">>>>>>>>>>>>this.");
        console.log(response.data, ">>>>>>>>>>>>this.");
        setUserWorkData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(userWorkData);
  useEffect(()=>{
    console.log(clickedWork,"clicked work testing");
  },[clickedWork])

  function handlesubmit(id) {
    console.log(id, "just testing..........");
    navigate(`app/userselected/${id}`);
  }
  function modalClose(response){
    
    setWorkDisplay(response)
  }
  useEffect(()=>{
    WorkDisplay ? document.getElementById("my_modal_1").showModal() : null;
  },[WorkDisplay])

  const [role, setrole] = useState("user")

  return (
    <>
      <>
      
        {WorkDisplay && (
          <div className="w-full h-screen">

            <UserWorkDisplay  modalClose ={modalClose} clickedWork = {clickedWork} />
            
            {/* <UserWorkDisplay
              modalClose={modalClose}
              clickedWork={clickedWork}
            /> */}
          </div>
        )}
      </>

      <div className="flex flex-wrap gap-8 ml-7 ">
        {userWorkData?.map((data) => {
          return (
            <>
              <div
                onClick={() => [handleModalSubmit(), setclickedWork(data)]}
                className="w-72 h-min-[72px] mt-10 gap-3 ml-6  "
              >
                <Card
                  isFooterBlurred
                  className="w-full h-[300px] col-span-12 sm:col-span-7 rounded-md"
                >
                  <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover rounded-none"
                    src={data?.images?.[0].image}
                  />
                  <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 rounded-none">
                    <div className="flex flex-grow gap-2 items-center">
                      <Image
                        alt="Breathing app icon"
                        className="rounded-full w-10 h-11 bg-black"
                        src="/images/breathing-app-icon.jpeg"
                      />
                      <div className="flex flex-col">
                        <p className="text-lg text-white/60 uppercase font-bold">
                          {data.work_caption}
                        </p>
                      </div>
                    </div>
                    <Button radius="full" size="sm">
                      View Work
                    </Button>
                  </CardFooter>
                </Card>
                <div className="mt-2 flex ">
                  <div className="flex items-center gap-2">
                    <Avatar
                      onClick={() => handlesubmit(data.user_id)}
                      src={data.user_profile.profile_pic}
                    />
                    <h1 className="  text-zinc-500 uppercase">
                      {data.user_profile.username}
                    </h1>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DiscoverPage;
