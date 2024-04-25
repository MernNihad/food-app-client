import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [data, setData] = useState([""]);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await axios.get(
          `http://localhost:8080/api/v1/admin/product/grt-order-address/${localStorage.getItem(
            "user-id"
          )}`
        );
        setData(userData.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [refresh]);
  console.log(data);

  return (
    <div className="menu-containermap">
      {data.map((item, index) => (
        <div className="menulistmap">
          <div className="iconstyle"></div>
          <p>
            <img alt="loading..." className="imenu" src={item.ImageLink} />
          </p>
          <p className="menfon">Name : {item.name}</p>
          <p className="menfon">Mobile Number : {item.number}</p>
          {item?.cartsArray?.map((i) => {
            return (
              <div className="">
                <p>
                  <img alt="loading..." className="imenu" src={i.ImageLink} />
                </p>
                <p className="menfon">{i.price}</p>
                <p className="menupara">{i.hotelname}</p>
              </div>
            );
          })}
          <p className="menupara">total amount: {item.total}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
