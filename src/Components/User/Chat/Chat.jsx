import React from "react";
import InputEmoji from "react-input-emoji";
const Chat = () => {
  return (
    <>
      <div className="bg-white
                bg-opacity-60
                shadow-xl
                rounded-lg 
                grid 
                grid-rows-[14vh,60vh,13vh]
">
        <div
          className="
flex
flex-row
justify-between
items-center
rounded-md
p-4
hover:bg-gray-300
 cursor-pointer
"
        >
          <div className="flex flex-row  items-center gap-1">
            <div
              className="flex items-center justify-center bg-rose-500 rounded-full  w-12 
         h-12 "
            >
              <span className="font-semibold text-2xl text-white">A</span>
            </div>

            <div
              className="
            flex
            flex-col
            justify-start
            items-center
            text-sm
            "
            >
              <span className="font-semibold">Sidhu</span>
              <span>Online</span>
            </div>
          </div>
        </div>
        <hr />
        {/*chat body*/}

        <div className="w-[875px] h-[380px] absolute top-[90px] overflow-y-scroll ">
          <div
            className="
                            flex
                            flex-col
                            gap-2
                            p-6
                            "
          >
            
              <>
                <div
                  className=
                       "text-white p-2.5 rounded-br-[1rem] rounded-tr-[0] max-w-[28rem] w-auto flex flex-col gap-2 self-end rounded-bl-[1rem] rounded-tl-[1rem] bg-gradient-to-r from-sky-500 to-blue-500"

                
                >
                  <span>hi</span>
                  <span className="text-neutral-300 self-end text-xs">
                    date
                  </span>
                </div>
                <div
                  className=
                  "text-white p-2.5 rounded-br-[1rem] rounded-tr-[1rem] max-w-[28rem] w-auto flex flex-col gap-2 self-start rounded-bl-[1rem] rounded-tl-[0] bg-gradient-to-r  from-rose-500 to-red-500"      
                >
                  <span>hi</span>
                  <span className="text-neutral-300 self-end text-xs">
                    date
                  </span>
                </div>
              </>
            
          </div>
        </div>
{/*chat sender*/}


                        {/* chat-sender */}
                        < div className="bg-white flex justify-start items-center gap-4 p-2 rounded-md self-start w-full mt-auto"

                        >
                            <InputEmoji
                              
                            />
                            <div
                                className='flex items-center justify-center text-white border-none rounded-xl
                                bg-rose-500 transition-all duration-100 ease-out p-2 cursor-pointer'>
                                Send
                            </div>
                        </div >




      </div>
    </>
  );
};

export default Chat;
