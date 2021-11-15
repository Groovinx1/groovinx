/* eslint-disable @next/next/no-img-element */
import { Icons } from '../resources/Icons'
import parse from 'html-react-parser'
import PostedDesignDetails from '../modals/PostedDesignDetails'
import { useState } from 'react'
export default function PostedDesigns(props: any) {
    const data = [
        {
            image: "./shoes.png",
            name: "Big Shirt Design",
            type: "T-shirt Design",
            designer: "Eric McKinnon",
            date: "14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            total_sales: "$58,200",

        },
        {
            image: "./shoes.png",
            name: "Big Shirt Design",
            type: "T-shirt Design",
            designer: "Eric McKinnon",
            date: "14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            total_sales: "$58,200",

        },
        {
            image: "./shoes.png",
            name: "Big Shirt Design",
            type: "T-shirt Design",
            designer: "Eric McKinnon",
            date: "14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            total_sales: "$58,200",

        }, {
            image: "./shoes.png",
            name: "Big Shirt Design",
            type: "T-shirt Design",
            designer: "Eric McKinnon",
            date: "14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            total_sales: "$58,200",

        }


    ]
    const [modal, setModal] = useState(false)
    // function to open modal
    function openModal() {
        setModal(!modal)
    }

    // close modal
    const close = <span onClick={() => openModal()}>
        {parse(Icons.close)}
    </span>

    return (
        <div>
            {/* view posteddesign details */}
            {modal ?
                <div className="modal lg:flex items-center justify-center">
                    <PostedDesignDetails action={close} />
                </div> : ''

            }

            <div className="mb-2 p-5">
                <div className="flex gap-5 text-sm items-center cursor-pointer">
                    <div className="py-2 px-3 border rounded flex gap-2">
                        {parse(Icons.filter)}
                        Filter</div>
                    <div className="bg-gray-50 w-1/2 flex items-center px-3 gap-2">
                        {parse(Icons.search)}
                        <input type="search" name="" id="" className="py-3 bg-gray-50 w-full text-dark focus:outline-none" placeholder="Search Designers by Names, or Sales" />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <div className="w-max md:w-full">
                    <table className="w-full">

                        <thead className="text-xs w-full bg-primary-50 ">
                            <tr className="thead w-full">
                                <th><input type="checkbox" className="" name="" id="" /></th>
                                <th className="uppercase">image</th>
                                <th className="uppercase">name</th>
                                <th className="uppercase">designer</th>
                                <th className="uppercase">date</th>
                                <th className="uppercase">total sales</th>
                                <th className="uppercase">action</th>

                            </tr>
                        </thead>
                        <tbody className="text-sm w-full">
                            {data?.map((item, i) => {
                                return (
                                    <tr key={i} className="">
                                        <td><input type="checkbox" name="" id="" /></td>
                                        <td className="flex justify-center">
                                            <img src={item.image} alt="" className=" rounded-md" width="50px" />

                                        </td>
                                        <td>
                                            <span className="block">{item.name}</span>
                                            <span className="block text-xs text-gray-400">{item.type}</span>
                                        </td>
                                        <td className="">
                                            <span className="block">{item.designer}</span>
                                            {/* <span className="block text-xs ">{item.designer_login_status}</span> */}
                                        </td>
                                        <td className="">
                                            <span className="block">{item.date}</span>
                                        </td>
                                        <td>{item.total_sales}</td>
                                        <td className=""> <div className="flex justify-center items-center cursor-pointer"><button className="bg-primary-50 p-1 rounded-md px-3" onClick={() => openModal()}>View more</button> {parse(Icons.more)}</div> </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>

            {/* footer actions */}
            <section className="hidden lg:block">
                <div className="text-sm w-full bg-primary-50 px-5 grid">
                    <div className="col-start-11 col-end-12 bg-primary-50">
                        <div className="w-full flex gap-20 text-xs items-center">
                            <div className="flex items-center">
                                <span className="font-bold">Rows per page</span>

                                <select name="" id="" className="bg-primary-50 focus:outline-none p-3">
                                    <option value="10">10</option>
                                    <option value="10">50</option>
                                    <option value="10">100</option>
                                    <option value="10">500</option>
                                </select>
                            </div>
                            <p className="font-bold">1-10 of 276</p>
                            <div className="flex gap-5">
                                {parse(Icons.leftArrow)}
                                {parse(Icons.rightArrow)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}