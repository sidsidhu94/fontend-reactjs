import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import useRazorpay from "react-razorpay";
import FollowButton from "./FollowButton";
import { baseURL } from "../Api/Url";

const Profile = () => {
  const [userprofile, setUserprofile] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [ModalShow, setModalShow] = useState(false);
  const [Premium, setPremium] = useState([]);
  const [razorpay] = useRazorpay();

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  console.log(userId);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${baseURL}account/user_profile_display/${userId}`
        );
        console.log(response, "User Profile");
        setUserprofile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  useEffect(() => {
    const fetchPremiumPlans = async () => {
      try {
        const response = await axios.get(`${baseURL}account/all-premium/`);
        console.log(response, "Premium Plans");
        setPremium(response.data);
      } catch (error) {
        console.error("Error fetching premium plans:", error);
      }
    };
    fetchPremiumPlans();
  }, []);

  const handlePaymentButtonClick = (itemId, price) => {
    razorPay(itemId, price);
    console.log("Handle payment button click");
  };

  const completeOrder = (paymentID, orderID, signature, amount, premiumId) => {
    console.log("Payment Details:", paymentID, orderID, amount, premiumId);

    axios({
      method: "post",
      url: `${baseURL}account/verifygateway`,
      data: {
        payment_id: paymentID,
        order_id: orderID,
        signature: signature,
        amount: amount,
        payment_method: "razorpay",
        premium_selected: premiumId,
        user_id: userId,
        Payment_status: "True",
      },
    })
      .then((response) => {
        console.log("Payment Verification Response:", response.data);
        setModalShow(false);
      })
      .catch((error) => {
        console.error("Error verifying payment:", error.response.data);
      });
  };

  const razorPay = (itemId, price) => {
    if (!Premium) {
      console.error("Payment data is missing");
      return;
    }

    axios({
      method: "post",
      url: `${baseURL}account/paymentgateway`,
      data: {
        id: itemId,
      },
    })
      .then((response) => {
        console.log("Order ID:", response.data.order_id);
        const order_id = response.data.order_id;

        const amountInPaise = price * 100;

        const options = {
          key: "rzp_test_TpsHVKhrkZuIUJ",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order_id,
          amount: amountInPaise,
          handler: function (response) {
            completeOrder(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature,
              price,
              itemId
            );
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        rzp1.open();
      })
      .catch((error) => {
        console.error("Error initiating Razorpay:", error);
      });
  };

  useEffect(() => {
    console.log("???//////////////", Premium);
  });

  return (
    <>
      <div className="basis-[16%]">
        <div className="border border-stone-200 h-96 w-72 mt-16 ml-5 p-5 overflow-hidden drop-shadow rounded-lg">
          <div className=" h-24 w-full">
            <div className="avatar">
              <div className="w-24 rounded-full ml-20 ">
                <img
                  src={userprofile.profile_pic}
                  onError={() => console.log("Image failed to load")}
                />
              </div>
            </div>
          </div>
          <div>
            <h1
              className="font-bold text-center text-cyan-700  mt-5 "
              style={{ textTransform: "uppercase" }}
            >
              {userprofile.username}
            </h1>
          </div>
          <div>
            <h1
              className="font-bold text-center  text-cyan-700 mt-2"
              style={{ textTransform: "uppercase" }}
            >
              {userprofile.country}
            </h1>
          </div>
          <p className="line-clamp-3 text-center text-zinc-500 uppercase">
            {userprofile.description}
          </p>
          <p className="line-clamp-3 text-center text-zinc-500 uppercase">
            Skill:{userprofile.skills}
          </p>
          {/* <button className="btn btn-wide mt-3 bg-cyan-700 btn-circle text-cyan-500">Follow</button> */}

          <FollowButton />
          {/* buttoon */}

          {/* <button
      className={`btn btn-wide mt-3 ${isFollowing ? 'bg-red-500' : 'bg-cyan-700'} btn-circle text-cyan-500`}
      onClick={handleFollowToggle}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button> */}

          <button className="btn btn-wide mt-3 bg-zinc-300 btn-circle ">
            Message
          </button>
        </div>

        <div className="border border-stone-200 h-36 w-72  ml-5 p-5 mt-7 overflow-hidden drop-shadow rounded-lg">
          <div className="flex justify-between">
            <p className="text-zinc-500">Appreciation </p>
            <p className="text-zinc-500">100k</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-zinc-500">Followers</p>
            <p className="text-zinc-500">5k</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-zinc-500">Following</p>
            <p className="text-zinc-500">500</p>
          </div>
        </div>
        {userprofile.premium_member ? (
          <button className="btn btn-wide mt-3 ml-8 bg-cyan-700 btn-circle text-cyan-500">
            Premium Member
          </button>
        ) : (
          <button
            onClick={() => setModalShow(!ModalShow)}
            className="btn btn-wide mt-3 ml-8 bg-cyan-700 btn-circle text-cyan-500"
          >
            Unlock Premium
          </button>
        )}
      </div>
      {ModalShow && (
        <div className="w-full h-full modalcard absolute top-0 z-50 flex justify-center ">
          <div className="m-auto w-[40%] border h-fit relative bg-white rounded-2xl">
            <button
              onClick={() => setModalShow(!ModalShow)}
              className="absolute right-0 top-0  rounded-xl  p-2"
            >
              X
            </button>
            <div className="flex justify-between px-8 gap-5 py-5">
              {Premium.map((items) => {
                return (
                  <form>
                    <Card className="max-w-[300px]">
                      <CardHeader className="flex gap-3">
                        <div className="avatar placeholder">
                          <div className="w-14 mask bg-neutral text-neutral-content mask-squircle">
                            <span className="text-3xl">{items.Validity}</span>
                            {/* <input type="hidden" name="validity" value={items.Validity} /> */}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-md">
                            {items.Validity} months plan
                          </p>
                          <p className="text-small text-default-500"></p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <div className="flex items-start">
                          <h1 className="">₹</h1>
                          <h1 className="text-2xl font-bold">{items.price}</h1>
                        </div>

                        <p className="text-xs text-slate-500"></p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <Button
                          onClick={() =>
                            handlePaymentButtonClick(items.id, items.price)
                          }
                          radius="full"
                          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                        >
                          Purchase Premium
                        </Button>
                      </CardFooter>
                    </Card>
                  </form>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
