/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import Card from "../components/cards/Card";
import Products from "../components/tables/Products";
import DashboardWithNoNavbar from "../layouts/DashboardWithNoNavbar";
export default function products() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <DashboardWithNoNavbar navTitle={"Products"} navSubTitle={"Statistics"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-10 p-5 lg:p-0">
        <Card
          total="7k Followers"
          title="In Total"
          img={"./cube.png"}
          bgColor="bg-green-400"
        />
        <Card
          total="23 Designs "
          title="In Total"
          img={"./cube.png"}
          bgColor="bg-primary"
        />
        <Card
          total="5.5k Votes"
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
                Message user
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
              onClick={() => setActiveTab("published_in_store")}
            >
              Published In-Store
            </h1>
          </div>
          {/* navigation line */}
          <div className="flex w-full my-1 bg-gray-200 pl-4">
            <div
              className={
                activeTab === "all"
                  ? "p-0.5 bg-primary w-12 ml-0"
                  : activeTab === "published_in_store"
                  ? "p-0.5 bg-primary w-12 ml-28"
                  : ""
              }
            ></div>
            <div className="bg-gray-200 w-5/6"></div>
          </div>
          <div className="bg-white rounded shadow my-2 w-full overflow-auto pb-10">
            <Products product_status={activeTab} />
          </div>
        </div>
      </div>
    </DashboardWithNoNavbar>
  );
}
