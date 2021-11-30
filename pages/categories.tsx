/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useState } from "react";
import Dashboard from "../layouts/Dashboard";
import { Icons } from "../components/resources/Icons";
import parse from "html-react-parser";

export default function categories() {
  const [activeTab, setActiveTab] = useState("bags");
  return (
    <Dashboard navTitle={"Main Categories"} navSubTitle={"Statistics"}>
      <div>
        <div className="bg-white rounded shadow my-2 w-full overflow-auto pb-10 px-10">
          {/* general */}
          <div className="my-5">
            <div className="grid grid-cols-2 items-center">
              <h1 className="text-md font-bold my-3 block">Category</h1>
              <div>
                <button className="bg-primary py-2 px-5 hover:opacity-50 cursor-pointer rounded text-white text-sm float-right">
                  Add +
                </button>
              </div>
            </div>

            {/* tabs */}
            <div className="flex gap-5 overflow-auto mt-5">
              <h1
                className={
                  activeTab === "bags"
                    ? "text-sm  text-primary pl-4 hover:text-primary cursor-pointer"
                    : "text-sm pl-4 hover:text-primary cursor-pointer"
                }
                onClick={() => setActiveTab("bags")}
              >
                Bags
              </h1>
              <h1
                className="text-sm pl-4 hover:text-primary cursor-pointer"
                onClick={() => setActiveTab("shoes")}
              >
                Shoes
              </h1>
              <h1
                className="text-sm pl-4 hover:text-primary cursor-pointer"
                onClick={() => setActiveTab("clothings")}
              >
                Clothings
              </h1>
            </div>
            {/* navigation line */}
            <div className="flex w-full my-1 bg-gray-200 pl-4">
              <div
                className={
                  activeTab === "bags"
                    ? "p-0.5 bg-primary w-12 ml-0"
                    : activeTab === "shoes"
                    ? "p-0.5 bg-primary w-12 ml-16"
                    : activeTab === "clothings"
                    ? "p-0.5 bg-primary w-12 ml-36"
                    : ""
                }
              ></div>
              <div className="bg-gray-200 w-5/6"></div>
            </div>

            {/* section 1 */}

            <section className="my-5">
              <h1 className="font-bold text-md block my-2">Sub-Category</h1>

              <hr />
              <form action="" className="w-full text-sm my-3">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="lg:border-r-2 lg:border-gray-400 md:pr-5 lg:pr-10">
                    <div className="form-group my-4 flex gap-1 items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control border p-3 rounded focus:outline-none w-full"
                        placeholder="Hand Bags"
                      />
                      <span>{parse(Icons.edit)}</span>
                      <span>{parse(Icons.trash)}</span>
                    </div>
                    <div className="form-group my-4 flex gap-1 items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control border p-3 rounded focus:outline-none w-full"
                        placeholder="Back Pack"
                      />
                      <span>{parse(Icons.edit)}</span>
                      <span>{parse(Icons.trash)}</span>
                    </div>
                  </div>

                  {/* col 2 */}
                  <div className="md:pl-5 lg:pl-10 w-full">
                    <div className="flex gap-5 items-center ">
                      <div className="form-group my-4 w-full">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control border p-3 rounded focus:outline-none w-full"
                          placeholder="Name"
                        />
                      </div>
                      <div className="flex">
                        <button
                          type="submit"
                          className="bg-primary text-white rounded-full h-1/2 py-2  px-5 hover:opacity-50"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>

            {/* section 2 */}

            <section className="my-5">
              <h1 className="font-bold text-md block my-2">Pattern Category</h1>

              <hr />
              <form action="" className="w-full text-sm my-3">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="lg:border-r-2 lg:border-gray-400 md:pr-5 lg:pr-10">
                    <div className="form-group my-4 flex gap-1 items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control border p-3 rounded focus:outline-none w-full"
                        placeholder="Handles"
                      />
                      <span>{parse(Icons.edit)}</span>
                      <span>{parse(Icons.trash)}</span>
                    </div>
                    <div className="form-group my-4 flex gap-1 items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control border p-3 rounded focus:outline-none w-full"
                        placeholder="Top Flaps"
                      />
                      <span>{parse(Icons.edit)}</span>
                      <span>{parse(Icons.trash)}</span>
                    </div>
                  </div>

                  {/* col 2 */}
                  <div className="md:pl-5 lg:pl-10 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-5 items-start mb-3">
                      <div className="col-span-5">
                        <div className="form-group my-4 w-full">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control border p-3 rounded focus:outline-none w-full"
                            placeholder="Name"
                          />
                        </div>

                        <div className="form-group my-4 lg:w-1/2">
                          <select
                            name=""
                            id=""
                            className="form-control border p-3 rounded focus:outline-none w-full"
                          >
                            <option placeholder="">Sub-Category</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex my-5">
                        <button
                          type="submit"
                          className="bg-primary text-white rounded-full h-1/2 py-2  px-5 hover:opacity-50"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>

            {/* section 3 */}

            <section className="my-5">
              <h1 className="font-bold text-md block my-2">
                Accessory Category
              </h1>

              <hr />
              <form action="" className="w-full text-sm my-3">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="lg:border-r-2 lg:border-gray-400 md:pr-5 lg:pr-10">
                    <div className="form-group my-4 flex gap-1 items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control border p-3 rounded focus:outline-none w-full"
                        placeholder="Leather Texture"
                      />
                      <span>{parse(Icons.edit)}</span>
                      <span>{parse(Icons.trash)}</span>
                    </div>
                    <div className="form-group my-4 flex gap-1 items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control border p-3 rounded focus:outline-none w-full"
                        placeholder="Zips"
                      />
                      <span>{parse(Icons.edit)}</span>
                      <span>{parse(Icons.trash)}</span>
                    </div>
                  </div>

                  {/* col 2 */}
                  <div className="md:pl-5 lg:pl-10 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-5 items-start mb-3">
                      <div className="col-span-5">
                        <div className="form-group my-4 w-full">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control border p-3 rounded focus:outline-none w-full"
                            placeholder="Name"
                          />
                        </div>

                        <div className="form-group my-4 lg:w-1/2">
                          <select
                            name=""
                            id=""
                            className="form-control border p-3 rounded focus:outline-none w-full"
                          >
                            <option placeholder="">Sub-Category</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex my-5">
                        <button
                          type="submit"
                          className="bg-primary text-white rounded-full h-1/2 py-2  px-5 hover:opacity-50"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
