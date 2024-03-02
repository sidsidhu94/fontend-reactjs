import React,{useState,useEffect} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import UserWorkDisplay from "./UserWorkDisplay";

const SelectedUserWork = ({ works }) => {
  console.log(works);

  const [WorkDisplay, setWorkDisplay] = useState(false);

  const [clickedWork, setclickedWork] = useState({})
  
  function modalClose(response){
    
    setWorkDisplay(response)
  }

  useEffect(()=>{
    WorkDisplay ? document.getElementById("my_modal_1").showModal() : null;
  },[WorkDisplay])

  function handleSubmit() {
    setWorkDisplay(true);
  }


  return (
    <>
      <>
        {WorkDisplay && (
          <div className="w-full h-screen">
            <UserWorkDisplay
              modalClose={modalClose}
              clickedWork={clickedWork}
            />
          </div>
        )}
      </>
      <div className="flex flex-wrap gap-10">
        {works?.map((data, index) => {
          return (
            <>
              <div onClick={() => [handleSubmit(), setclickedWork(data)]} className="w-72 h-72">
                <Card
                  isFooterBlurred
                  className="w-full h-full col-span-12 sm:col-span-7 rounded-lg"
                >
                  <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover rounded-lg"
                    src={data?.images?.[0].image}
                  />

                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    {/* <p className="text-lg text-sky-200 uppercase font-bold">Available soon.</p> */}
                    <Button
                      className="text-xl text-white bg-black/20 uppercase font-bold"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      {data.work_caption}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SelectedUserWork;
