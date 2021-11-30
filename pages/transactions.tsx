/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import Card from "../components/cards/Card";
import Transactions from "../components/tables/Transactions";
import Dashboard from "../layouts/Dashboard";
export default function transactions() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Dashboard navTitle={"Transactions"} navSubTitle={"Statistics"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 p-5 lg:p-0">
        <Card
          total="$157k Revenue"
          title="This Month"
          img={"./cube.png"}
          bgColor="bg-green-400"
        />
        <Card
          total="234 Sales"
          title="Orders this Month"
          img={"./cube.png"}
          bgColor="bg-primary"
        />
        <Card
          total="$700k Total Revenue"
          title="In Total"
          img={"./cube.png"}
          bgColor="bg-green-400"
        />
      </div>
      <div className="h-full">
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
              All
            </h1>
            <h1
              className="text-sm pl-4 hover:text-primary cursor-pointer"
              onClick={() => setActiveTab("pending")}
            >
              Pending
            </h1>
            <h1
              className="text-sm pl-4 hover:text-primary cursor-pointer"
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </h1>
          </div>
          {/* navigation line */}
          <div className="flex w-full my-1 bg-gray-200 pl-4">
            <div
              className={
                activeTab === "all"
                  ? "p-0.5 bg-primary w-12 ml-0"
                  : activeTab === "pending"
                  ? "p-0.5 bg-primary w-12 ml-12"
                  : activeTab === "completed"
                  ? "p-0.5 bg-primary w-12 ml-36"
                  : ""
              }
            ></div>
            <div className="bg-gray-200 w-5/6"></div>
          </div>
          <div className="bg-white rounded shadow my-2 w-full overflow-auto pb-10">
            <Transactions transaction_status={activeTab} />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
