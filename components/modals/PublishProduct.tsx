/* eslint-disable @next/next/no-img-element */
export default function PublishProduct(props: any) {
    return (
        <div className="bg-white p-5 my-3 rounded modal-content lg:w-3/4 ">
            <section className="grid grid-cols-2 gap-5 items-center">
                <div className="flex">
                <h1 className="text-sm bg-primary text-white p-2 text-center">Publish</h1>
                </div>

                {/* close icon */}
                <div>
                    <span className="text-gray-400 float-right cursor-pointer hover:shadow">{props.action}</span>
                </div>
            </section>
            <hr />

            <section className="my-5 px-5 lg:px-20">

                <form action="" className="w-full text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                        <div className="form-group my-4">
                            <input type="text" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Product Name" />
                        </div>

                      

                        <div className="form-group my-4">
                            <textarea name="" className="form-control  bg-gray-100 p-3 rounded focus:outline-none w-full " id="" cols={30} rows={10} placeholder="Description"></textarea>
                        </div>
                        <div className="form-group my-4">
                            <input type="text" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Designed By" />
                        </div>

                        
                        <select name="" id="" className="mt-10 form-control bg-gray-100 p-3 rounded focus:outline-none w-full">
                            <option value="">Sub-Category</option>
                        </select>
                        </div>
                        <div>

                        <div className="form-group my-4 flex gap-2 items-center">
                            <input type="number" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none lg:w-1/2" placeholder="Price" /> $
                        </div>
                        <div className="form-group my-4 flex gap-2 items-center">
                            <input type="number" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none lg:w-1/2" placeholder="Cost" /> $
                        </div>
                        
                        <div className="flex justify-center w-full gap-5 mt-20">
                        <button type="submit" className="bg-green-500 text-white rounded py-2 px-5 hover:opacity-50">Upload images</button>
                            <button type="submit" className="bg-primary text-white rounded py-2 px-5 hover:opacity-50">Add Photo +</button>
                        </div>

                        
                        <div className="w-full flex gap-5 my-5">
                            <div className="w-1/2">
                            <img src="./nike.jpeg" alt="" />
                            </div>
                            <div className="w-1/2">
                            <img src="./nike.jpeg" alt="" />
                            </div>
                        </div>
                        </div>

                    </div>

                </form>


            </section>


        </div>
    )
}