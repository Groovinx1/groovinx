/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Icons } from "../resources/Icons";
import UpdateOrderDetails from "./UpdateOrderDetails";
import parse from "html-react-parser";
export default function OrderDetails(props: any) {
  const [modal, setModal] = useState(false);
  // function to open modal
  function openModal() {
    setModal(!modal);
  }

  // close modal
  const close = <span onClick={() => openModal()}>{parse(Icons.close)}</span>;

  return (
    <div className="bg-white p-5 my-3 rounded modal-content lg:w-3/4">
      {/* update order details */}

      {modal ? (
        <div className="modal lg:flex items-center justify-center">
          <UpdateOrderDetails action={close} />
        </div>
      ) : (
        ""
      )}
      <section className="grid grid-cols-2 gap-5 items-center">
        <div className="">
          <h1 className="text-sm font-bold my2 block">Order 43 - Tshirt</h1>
          <div className="my-2 flex">
            <div className="text-red-500 bg-red-100 py-1 px-2 rounded-full font-bold text-xs flex gap-1 items-center">
              {" "}
              <span className="ellipse bg-red-600 rounded-full"></span> pending
            </div>
          </div>
        </div>

        {/* close icon */}
        <div>
          <span className="text-gray-400 float-right cursor-pointer hover:shadow">
            {props.action}
          </span>
        </div>
      </section>
      <hr />

      <section className="my-3 grid grid-cols-1 lg:grid-cols-2 gap-5  text-sm">
        {/* image here */}
        <div className=" w-full h-full">
          <div className="bg-gray-100 mb-5">
            <img src="./nike.jpeg" alt="" className="rounded-lg" />
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-gray-600 text-white p-2 rounded hover:opacity-50">
              Download Full Design Detail.pdf
            </button>
          </div>
        </div>
        <div className="content">
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* col 1 */}
            <div className="col">
              <div>
                <h1 className="my-4 font-bold text-primary text-md">
                  Product Details
                </h1>
                <h1 className="text-sm block">Title: </h1>
                <span className="font-bold block text-sm">
                  Big T-shirt Design{" "}
                </span>
                <span className="text-xs">Designed by @Sergeart</span>
              </div>

              <div className="my-3">
                <h1 className="text-sm block">Price: </h1>
                <div className="flex">
                  <span className="block bg-primary py-1 px-3 text-xs rounded-full text-white">
                    $200
                  </span>
                </div>
              </div>
              <br />
              <div className="my-3">
                <h1 className="text-sm block">Qty: </h1>
                <span className="font-bold text-sm block">2 items</span>
              </div>

              <button className="bg-primary my-3 text-white rounded text-sm p-2">
                Process order
              </button>
            </div>

            {/* col 2 */}

            <div className="col">
              <div>
                <h1 className="my-4 font-bold text-primary text-md">
                  Shipping Details
                </h1>
                <h1 className="text-sm block">Address: </h1>
                <span className="font-bold block text-sm">
                  2464 Royal Ln. Mesa New Jersey 45463{" "}
                </span>
              </div>
              <div className="my-3">
                <h1 className="text-sm block">Shipping Company: </h1>
                <span className="font-bold block text-sm">FEDEX</span>
              </div>

              <br />
              <div className="my-3">
                <h1 className="text-sm block">Arrival date: </h1>
                <span className="font-bold text-sm block">
                  Arrives Sunday, 5 <sup>th</sup> Jan
                </span>
              </div>
            </div>

            {/* col 3 */}

            <div className="col">
              <div>
                <h1 className="my-4 font-bold text-primary text-md">
                  Order Details
                </h1>
                <h1 className="text-sm block">Date: </h1>
                <span className="font-bold block text-sm">
                  Sund, 5th Jan 2020{" "}
                </span>
                <span className="text-xs">Designed by @Sergeart</span>
              </div>

              <div className="my-3">
                <h1 className="text-sm block">Order Note: </h1>
                <span className="font-bold text-sm block">
                  I need this clothe for my wedding this week
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center gap-5 my-5">
            <div className="bg-green-500 rounded text-white p-2 hover:opacity-50 cursor-pointer">
              Message Customer
            </div>
            <div
              className="bg-primary rounded text-white p-2 hover:opacity-50 cursor-pointer"
              onClick={() => openModal()}
            >
              Update Order Tracker
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
