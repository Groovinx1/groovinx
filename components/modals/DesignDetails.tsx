/* eslint-disable @next/next/no-img-element */
export default function DesignDetails(props:any) {
    return (
        <div className="bg-white p-5 my-3 rounded modal-content lg:w-2/3">
            <section className="grid grid-cols-2 gap-5">
                <div className="flex">
                <h1 className="text-sm  bg-primary text-white p-2 text-center">Details</h1>
                </div>
              
                {/* close icon */}
                <div>
                    <span className="text-gray-400 float-right cursor-pointer hover:shadow">{props.action}</span>
                </div>
            </section>
            <hr />

            <section className="my-3 grid grid-cols-1 lg:grid-cols-2 gap-5 text-sm">
                {/* image here */}
                <div className=" w-full h-full">
                    <div className="bg-gray-100 mb-5">

                    <img src="./nike.jpeg" alt="" className="rounded-lg" />
                    </div>
                    <div className="w-full flex justify-center">
                    <button className="bg-green-500 text-white p-2 rounded">Add to Store</button>

                    </div>
                </div>
                <div className="content">
                    <section>
                        <h1 className="font-bold text-lg block">Nike Air force</h1>
                        <div className="my-3">
                            <h2 className="text-sm font-bold block">Description</h2>
                            <p>
                                Enginiered Mesh and Half-Mesh Visible Air for Ultimate flexibility and Cusioning
                            </p>
                        </div>
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold text-sm block">Date Uploaded:</h1>
                            <span>1st Jan 2020</span>
                        </div>

                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold text-sm block">Number of Votes:</h1>
                            <span>1st Jan 2020</span>
                        </div>

                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold text-sm block">Total Sales:</h1>
                            <span>1st Jan 2020</span>
                        </div>
                    </section>

                    <section className="text-sm my-3">
                        <h1 className="font-bold block my-2">Comments 20</h1>
                        <div className="h-36 overflow-y-scroll">
                        <p className="block my-2">
                            @sergeart: Enginiered Mesh and Half-Mesh Visible Air for Ultimate flexibility and Cusioning
                        </p>
                        <p className="block my-2">
                            @sergeart: Enginiered Mesh and Half-Mesh Visible Air for Ultimate flexibility and Cusioning
                        </p>
                        <p className="block my-2">
                            @sergeart: Enginiered Mesh and Half-Mesh Visible Air for Ultimate flexibility and Cusioning
                        </p>
                      
                        </div>
                       
                    </section>
                </div>

            </section>


        </div>
    )
}