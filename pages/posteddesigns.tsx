/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import Card from "../components/cards/Card";
import PostedDesigns from "../components/tables/PostedDesigns";
import Dashboard from "../layouts/Dashboard";
export default function posteddesigns() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Dashboard navTitle={"Posted Design"} navSubTitle={"Statistics"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-10 p-5 lg:p-0">
        <Card
          total="7k Posts"
          title="In Total"
          img={"./cube.png"}
          bgColor="bg-green-400"
        />
        <Card
          total="234k Total votes  "
          title="In Total"
          img={"./cube.png"}
          bgColor="bg-primary"
        />
        <Card
          total="5.5k Owned by Users"
          title="In Total"
          img={"./cube.png"}
          bgColor="bg-green-400"
        />
      </div>
      <div className="h-full">
        {/* action links */}
        <div className="w-full text-sm">
          <div className="float-right lg:w-1/2">
            <div className="float-right flex mr-5">
              <button className="bg-primary text-center text-white py-2 px-10 rounded">
                Add +
              </button>
            </div>
          </div>
        </div>

        {/* table of users */}

        <div className="relative top-10 p-5 lg:p-0">
          {/* tabs */}
          <div className="flex gap-5 overflow-auto">
            <h1
              className={
                activeTab === "all"
                  ? "text-sm  text-primary pl-4 hover:text-primary cursor-pointer"
                  : "text-sm pl-4 hover:text-primary cursor-pointer"
              }
              onClick={() => setActiveTab("all")}
            >
              All designs
            </h1>
            <h1
              className="text-sm pl-4 hover:text-primary cursor-pointer"
              onClick={() => setActiveTab("most_purchased")}
            >
              Most purchased
            </h1>
            <h1
              className="text-sm pl-4 hover:text-primary cursor-pointer"
              onClick={() => setActiveTab("posted_designs")}
            >
              Posted designs
            </h1>
          </div>
          {/* navigation line */}
          <div className="flex w-full my-1 bg-gray-200 pl-4">
            <div
              className={
                activeTab === "all"
                  ? "p-0.5 bg-primary w-12 ml-0"
                  : activeTab === "most_purchased"
                  ? "p-0.5 bg-primary w-12 ml-32"
                  : "p-0.5 bg-primary w-12 ml-64"
              }
            ></div>
            <div className="bg-gray-200 w-5/6"></div>
          </div>
          <div className="bg-white rounded shadow my-2 w-full overflow-auto pb-10">
            <PostedDesigns design_status={activeTab} />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
