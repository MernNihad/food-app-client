import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../../Components/Toast/toast";
import { Link } from "react-router-dom";

const AddtoCart = () => {
  const id = localStorage.getItem("id");
  const [data, setData] = useState([""]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await axios.get(
          `http://localhost:8080/listCart/${localStorage.getItem("user-id")}`
        );

        setData(cartData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, [refresh]);

  let handleCart = async (idOf) => {
    try {
      let response = await axios.post(
        "http://localhost:8080/addtocart/",
        { userId: localStorage.getItem("user-id"), productId: idOf },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      successToast(response.data.message || "Cart Added");
      console.log(response, "delete");
      setRefresh(!refresh);
    } catch (error) {
      errorToast(error.message);
    }
  };

  const decrementCart = async (idOf) => {
    try {
      let response = await axios.post(
        "http://localhost:8080/decrement-to-cart/",
        { userId: localStorage.getItem("user-id"), productId: idOf },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      successToast(response.data.message || "Cart Added");
      console.log(response, "delete");
      setRefresh(!refresh);
    } catch (error) {
      errorToast(error.message);
    }
  };
  let total = 0

  return (
    <>

    <div className="menu-containermap">
      {data && data.length > 0 &&
        data.map((item) => {

          total += item.productInfo?.price * item.quantity
          return (
            <>
              <div className="menulistmap">
                <p>
                  <img className="imenu" src={item?.productInfo?.ImageLink} />
                </p>
                <p className="menfon">{item.productInfo?.name}</p>
                <p className="menfon">{item.productInfo?.price}</p>
                <p className="menupara">{item.productInfo?.hotelname}</p>
                <div className="">
                  <button onClick={(e) => decrementCart(item.productInfo._id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={(e) => handleCart(item.productInfo._id)}>
                    +
                  </button>
                </div>
                <p>Total : {item.productInfo?.price * item.quantity}</p>
              </div>
            </>
          );
        })}

    </div>
      <span>Total amount of : {total}</span>
      <Link to={'/order-address'} state={{total}} className='navbtn rounded-full'>Order Now</Link>
      </>
  );
};

export default AddtoCart;
