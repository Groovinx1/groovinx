import Link from "next/link";
import React, { useState } from "react";
import Card from "../components/cards/Card";
import AddUser from "../components/modals/AddUser";
import Users from "../components/tables/Users";
import Dashboard from "../layouts/Dashboard";
import { Icons } from "../components/resources/Icons";
import parse from "html-react-parser";

export default function Home() {
  const [modal, setModal] = useState(false);
  // function to open modal
  function openModal() {
    setModal(!modal);
  }

  // close modal
  const close = <span onClick={() => openModal()}>{parse(Icons.close)}</span>;

  return (
    <Dashboard navTitle={"Users"} navSubTitle={"Statistics"}>
      {/* add user modal */}
      {modal ? (
        <div className="modal lg:flex items-center justify-center">
          <AddUser action={close} />
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-5 p-5 lg:p-0">
        <Card
          total="+1200"
          title="Users"
          img={"./cube.png"}
          bgColor="bg-primary"
        />
        <Card
          total="200"
          title="Designs"
          img={"./cube.png"}
          bgColor="bg-primary"
        />
        <Card
          total="+1200"
          title="7K Total Users"
          img={"./cube.png"}
          bgColor="bg-green-400"
        />
      </div>
      <div className="h-full">
        {/* action links */}
        <div className="w-full text-sm">
          <div className="float-right lg:w-1/2">
            <div className="float-right flex gap-5 mr-5">
              <Link href="/messages">
                <a className="bg-primary text-center text-white py-2 px-10 rounded hover:opacity-50">
                  Message inbox
                </a>
              </Link>
              <button
                className="bg-primary text-center text-white py-2 px-10 rounded hover:opacity-50"
                onClick={() => openModal()}
              >
                Add +
              </button>
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
            <Users />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
