/* eslint-disable @next/next/no-img-element */
export default function UpdateOrderDetails(props: any) {
    return (
        <div className="bg-white p-5 my-3 rounded modal-content lg:w-1/2 lg:h-1/2">
            <section className="grid grid-cols-3 gap-5 items-center">
                <div className="flex">
                <h1 className="text-sm bg-primary text-white p-2 text-center">Update</h1>
                </div>
                <div className="w-full">
                    <h1 className="text-sm font-bold  p-2 text-center  uppercase">ORDER TRACKER UPDATE</h1>
                </div>

                {/* close icon */}
                <div>
                    <span className="text-gray-400 float-right cursor-pointer hover:shadow">{props.action}</span>
                </div>
            </section>
            <hr />

            <section className="my-5 px-5 lg:px-5">

                <form action="" className="w-full text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        <div className="lg:border-r-2 lg:border-gray-400 px-4">
                            <h1 className="block my-3 text-center">COMPLETED ORDER TASKS</h1>
                        <div className="form-group my-4">
                            <input type="text" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Product Name" />
                        </div>

                        <div className="form-group my-4">
                            <input type="text" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Designed By" />
                        </div>
                        </div>

                        {/* col 2 */}
                        <div className="col px-4">
                        <h1 className="block my-3 text-center">ADD COMPLETED TASKS</h1>
                        <div className="form-group my-4">
                            <input type="text" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Price" />
                        </div>

                        <div className="form-group my-4">
                            <input type="password" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Date" />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-primary text-white rounded py-2 px-5 hover:opacity-50">Add +</button>
                        </div>
                        </div>
                     

                        
                    </div>

                </form>


            </section>


        </div>
    )
}