import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Hotel.css";
import { ServerUrl } from "../../serverUrl";
import { errorToast } from "../../Components/Toast/toast";
import { Link } from "react-router-dom";

const ViewHotel = () => {
  const [data, setData] = useState([""]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const hotelData = await axios.get(
          "http://localhost:8080/api/v1/hotel/"
        );
        console.log("hoteldata", hotelData);
        setData(hotelData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHotel();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${ServerUrl}/api/v1/hotel-delete/${id}`);
      setRefresh(!refresh)
    } catch (error) {
      errorToast(
        error.response.data.message || error.message || "error couured!"
      );
    }
  };

  return (
    <div>
      <div className="gridview">
        {data.map((item, index) => (
          <div className="">
            <div className="box">
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.location}</p>
              <p>{item.number}</p>
            </div>
            <div className="">
              <Link to={`/admin/edit-hotel/${item._id}`}>
                <span>Edit</span>
              </Link>
              <span onClick={() => handleDelete(item._id)}>Delete</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewHotel;
