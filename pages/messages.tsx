import React from "react";
import Card from "../components/cards/Card";
import UserMessages from "../components/tables/UserMessages";
import Dashboard from "../layouts/Dashboard";

export default function Home() {
  return (
    <Dashboard navTitle={"Users Messages"} navSubTitle={"Statistics"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-10 p-5 lg:p-0">
        <Card total="+1,257  Messages" title="this Month" img={'./cube.png'} bgColor="bg-primary" />
        <Card total="234 Unread" title="Designs this Month" img={'./cube.png'} bgColor="bg-primary" />
        <Card total="7k Read" title="In Total" img={'./cube.png'} bgColor="bg-green-400" />
      </div>
      <div className="h-full">
        {/* action links */}
        <div className="w-full text-sm">
          <div className="float-right lg:w-1/2">
            <div className="float-right flex gap-5 mr-5">
              <button className="bg-primary text-center text-white py-2 px-10 rounded">Message a user</button>
            </div>
          </div>
        </div>
        {/* table of users */}

{/* tabs */}
        <div className="relative top-10 p-5 lg:p-0">
          <h1 className="text-sm text-primary pl-4 block">All</h1>
{/* navigation line */}
          <div className="flex w-full my-1 bg-gray-200 pl-4">
            <div className="p-0.5 bg-primary w-12"></div>
            <div className="bg-gray-200 w-5/6"></div>
          </div>

          <div className="bg-white rounded shadow my-2 w-full overflow-auto pb-10">

            <UserMessages />
          </div>
        </div>

      </div>
    </Dashboard>
  )
}
