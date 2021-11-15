import Link from "next/link";
import React from "react";
import Dashboard from "../layouts/Dashboard";
import { Icons } from "../components/resources/Icons";
import parse from "html-react-parser";

export default function addDesign() {
  return (
    <Dashboard navTitle={"Add Design"} navSubTitle={"Statistics"}>
      <div>
        <div className="bg-white rounded shadow my-2 w-full overflow-auto pb-10 px-10">
          {/* general */}
          <section className="my-5">
            <div className="grid grid-cols-2 items-center">
              <h1 className="text-md font-bold my-3 block">General</h1>
              <div>
                <button className="bg-primary px-5 py-1 hover:opacity-50 cursor-pointer rounded-full text-white text-sm float-right">
                  Cancel
                </button>
              </div>
            </div>

            <hr />
            <form action="" className="my-5 text-sm">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="form-group">
                  <select
                    name=""
                    id=""
                    className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                  >
                    <option value="">Bags</option>
                    <option value="">Clothes</option>
                    <option value="">Shoes</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name=""
                    id=""
                    className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                  >
                    <option value="">Sub-Category</option>
                    <option value="">Handbags</option>
                    <option value="">Travel Bags</option>
                    <option value="">Back Packs</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name=""
                    id=""
                    className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                  >
                    <option value="">Bags</option>
                    <option value="">Clothes</option>
                    <option value="">Shoes</option>
                  </select>
                </div>
              </div>
            </form>
          </section>

          {/* section 2 */}
          <section className="my-5">
            <h1 className="text-md font-bold my-3 block">Full Design</h1>
            <hr />
            <form action="" className="my-5 text-sm w-full">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    name=""
                    id=""
                    className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Cost in US$:"
                    name=""
                    id=""
                    className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Price in US$:"
                    name=""
                    id=""
                    className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                  />
                </div>
                <label className="my-2" htmlFor="design_file">
                  <div className="border border-1 border-primary rounded p-3  flex items-center gap-2 justify-center cursor-pointer">
                    <span>Upload file</span> {parse(Icons.upload)}
                    <input type="file" name="" id="design_file" hidden />
                  </div>
                </label>
                {/* submit button */}
                <div>
                  <button
                    type="submit"
                    className="bg-primary px-5 py-1 hover:opacity-50 cursor-pointer rounded-full text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="my-5">
            <h1 className="text-md font-bold my-3 block">Single Pattern</h1>
            <hr />
            <form action="" className="my-5 text-sm">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-8 justify-between gap-5">
                <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="form-group">
                    <select
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    >
                      <option value="">Pattern Category</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price in US$:"
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price in US$:"
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    />
                  </div>
                  <label className="my-2" htmlFor="pattern_file_one">
                    <div className="border border-1 border-primary rounded p-3  flex items-center gap-2 justify-center cursor-pointer">
                      <span>Upload file</span> {parse(Icons.upload)}
                      <input type="file" name="" id="pattern_file_one" hidden />
                    </div>
                  </label>
                  {/* lower bound */}
                  <div className="form-group">
                    <select
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    >
                      <option value="">Pattern Category</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price in US$:"
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price in US$:"
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    />
                  </div>
                  <label className="my-2" htmlFor="pattern_file_two">
                    <div className="border border-1 border-primary rounded p-3  flex items-center gap-2 justify-center cursor-pointer">
                      <span>Upload file</span> {parse(Icons.upload)}
                      <input type="file" name="" id="pattern_file_two" hidden />
                    </div>
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-700 rounded-full md-ellipse text-center hover:opacity-50 text-white text-3xl shadow-lg"
                  >
                    +
                  </button>
                </div>

                {/* submit button */}
                <div>
                  <button
                    type="submit"
                    className="bg-primary px-5 py-1 hover:opacity-50 cursor-pointer rounded-full text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>

          {/* section 4 */}
          <section className="my-5">
            <h1 className="text-md font-bold my-3 block">Accessories</h1>
            <hr />
            <form action="" className="my-5 text-sm">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-8 justify-between gap-5">
                <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="form-group">
                    <select
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    >
                      <option value="">Accessory Category</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price in US$:"
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price in US$:"
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    />
                  </div>
                  <label className="my-2" htmlFor="pattern_file_one">
                    <div className="border border-1 border-primary rounded p-3  flex items-center gap-2 justify-center cursor-pointer">
                      <span>Upload file</span> {parse(Icons.upload)}
                      <input type="file" name="" id="pattern_file_one" hidden />
                    </div>
                  </label>
                  {/* lower bound */}
                  <div className="form-group">
                    <select
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    >
                      <option value="">Accessory Category</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price in US$:"
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price in US$:"
                      name=""
                      id=""
                      className="form-control my-2 border w-full p-3 rounded focus:outline-none"
                    />
                  </div>
                  <label className="my-2" htmlFor="pattern_file_two">
                    <div className="border border-1 border-primary rounded p-3  flex items-center gap-2 justify-center cursor-pointer">
                      <span>Upload file</span> {parse(Icons.upload)}
                      <input type="file" name="" id="pattern_file_two" hidden />
                    </div>
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-700 rounded-full md-ellipse text-center hover:opacity-50 text-white text-3xl shadow-lg"
                  >
                    +
                  </button>
                </div>

                {/* submit button */}
                <div>
                  <button
                    type="submit"
                    className="bg-primary px-5 py-1 hover:opacity-50 cursor-pointer rounded-full text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Dashboard>
  );
}
