import React from "react";
import "./AllChocolate.css";
import { Link, useLoaderData } from "react-router-dom";
import logo1 from "../../assets/1 (1).png";
import logo2 from "../../assets/1 (2).png";
import ChocolateCard from "../ChocolateCard/ChocolateCard";
const AllChocolate = () => {
  const allChocolates = useLoaderData();
  return (
    <div>
      <Link to="/" className="flex b p-2 m-5">
        <>
          <img src={logo2} alt="" />
          <button>New Chocolate</button>
          <img src={logo1} alt="" />
        </>
      </Link>
      <div className="flex justify-center items-center mt-5">
        {" "}
        <p
          className="rounded w-96 text-white text-2xl p-5 text-center"
          style={{ backgroundColor: "#48301E" }}
        >
          Chocolate Management System
        </p>
      </div>
      <div className="overflow-x-auto mt-10 ps-20 pe-20 mx-auto">
        <table className="table">
          <thead
            style={{ color: "#141414CC" }}
            className="table-bg rounded border"
          >
            <tr className="">
              <th>Image</th>
              <th>Name</th>
              <th>Country/Factory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
       
      <tbody
        style={{ paddingRight: "20px" }}
        className="overflow-x-auto mt-2 ps-20 mx-auto"
      >
        {allChocolates.map((allChocolate) => (
          <ChocolateCard
            key={allChocolate._id}
            allChocolate={allChocolate}
          ></ChocolateCard>
        ))}
      </tbody>
      </table>
      </div>
    </div>
  );
};

export default AllChocolate;
