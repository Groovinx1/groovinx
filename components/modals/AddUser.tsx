/* eslint-disable @next/next/no-img-element */
export default function AddUser(props: any) {
    return (
        <div className="bg-white p-5 my-3 rounded modal-content lg:w-2/3 lg:h-1/2">
            <section className="grid grid-cols-2 gap-5 items-center">
                <div className="w-full">
                    <h1 className="text-sm font-bold  p-2 text-center float-right uppercase">add user</h1>
                </div>

                {/* close icon */}
                <div>
                    <span className="text-gray-400 float-right cursor-pointer hover:shadow">{props.action}</span>
                </div>
            </section>
            <hr />

            <section className="my-5 px-5 lg:px-20">

                <form action="" className="w-full text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-group">
                            <input type="text" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Full name" />
                        </div>

                        <div className="form-group">
                            <input type="text" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Username" />
                        </div>

                        <div className="form-group">
                            <input type="text" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Country" />
                        </div>

                        <div className="form-group">
                            <input type="password" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="" id="" className="form-control bg-gray-100 p-3 rounded focus:outline-none w-full" placeholder="Email" />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-primary text-white rounded py-2 px-5 hover:opacity-50">Add user</button>
                        </div>
                    </div>

                </form>


            </section>


        </div>
    )
}