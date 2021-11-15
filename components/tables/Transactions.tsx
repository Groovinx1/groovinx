/* eslint-disable @next/next/no-img-element */
import { Icons } from '../resources/Icons'
import parse from 'html-react-parser'
export default function Transactions(props: any) {
    const data = [
        {
            order_number: "Order-2935",
            order: "Custom",
            customer: "Eric McKinnon",
            designer: "Groovinx",
            customer_login_status: "Last login: 14/APR/2020",
            designer_login_status: "Last login: 14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            amount: "$58,200",

        },
        {
            order_number: "Order-2935",
            order: "Custom",
            customer: "Eric McKinnon",
            designer: "Groovinx",
            customer_login_status: "Last login: 14/APR/2020",
            designer_login_status: "Last login: 14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            amount: "$58,200",

        },
        {
            order_number: "Order-2935",
            order: "Custom",
            customer: "Eric McKinnon",
            designer: "Groovinx",
            customer_login_status: "Last login: 14/APR/2020",
            designer_login_status: "Last login: 14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Completed",
            amount: "$58,200",

        },
        {
            order_number: "Order-2935",
            order: "Custom",
            customer: "Eric McKinnon",
            designer: "Groovinx",
            customer_login_status: "Last login: 14/APR/2020",
            designer_login_status: "Last login: 14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            amount: "$58,200",

        }, {
            order_number: "Order-2935",
            order: "Custom",
            customer: "Eric McKinnon",
            designer: "Groovinx",
            customer_login_status: "Last login: 14/APR/2020",
            designer_login_status: "Last login: 14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            amount: "$58,200",

        }, {
            order_number: "Order-2935",
            order: "Custom",
            customer: "Eric McKinnon",
            designer: "Groovinx",
            customer_login_status: "Last login: 14/APR/2020",
            designer_login_status: "Last login: 14/APR/2020",
            payment_date: "Published on: 14/APR/2020",
            status: "Pending",
            amount: "$58,200",

        },
    ]


    return (
        <div>

            <div className="mb-2 p-5">
                <div className="flex gap-5 text-sm items-center cursor-pointer">
                    <div className="py-2 px-3 border rounded flex gap-2">
                        {parse(Icons.filter)}
                        Filter</div>
                    <div className="bg-gray-50 w-1/2 flex items-center px-3 gap-2">
                        {parse(Icons.search)}
                        <input type="search" name="" id="" className="py-3 bg-gray-50 w-full text-dark focus:outline-none" placeholder="Search Orders by Date or Category" />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <div className="w-max md:w-full">
                    <table className="w-full">

                        <thead className="text-xs w-full bg-primary-50 ">
                            <tr className="thead w-full">
                                <th><input type="checkbox" className="" name="" id="" /></th>
                                <th className="uppercase">order</th>
                                <th className="uppercase">customer</th>
                                <th className="uppercase">designer</th>
                                <th className="uppercase">status</th>
                                <th className="uppercase">amount</th>
                                <th className="uppercase">action</th>

                            </tr>
                        </thead>
                        <tbody className="text-sm w-full">
                            {data?.map((item, i) => {
                                return (
                                    <tr key={i} className="">
                                        <td><input type="checkbox" name="" id="" /></td>
                                        <td className="text-justify">
                                            <span className="block">{item.order_number}</span>
                                            <span className="block text-xs ">{item.order}</span>
                                        </td>
                                        <td>
                                            <span className="block">{item.customer}</span>
                                            <span className="block text-xs">{item.customer_login_status}</span>
                                        </td>
                                        <td className="text-justify">
                                            <span className="block">{item.designer}</span>
                                            <span className="block text-xs ">{item.designer_login_status}</span>
                                        </td>
                                        <td className="text-justify">
                                            {(item.status).toLowerCase() === 'completed' ?
                                                <div className=" my-1 lg:w-1/3 text-center"><span className="text-green-500 bg-green-100  py-1 px-2 rounded-full m-auto font-bold text-xs flex gap-1 items-center"> <span className="ellipse bg-green-600 rounded-full"></span> {item.status}</span></div>
                                                : <div className=" my-1 lg:w-1/3 text-center"><span className="text-red-500 bg-red-100  py-1 px-2 rounded-full m-auto font-bold text-xs flex gap-1 items-center"> <span className="ellipse bg-red-600 rounded-full"></span> {item.status}</span></div>

                                            }
                                            <span className="text-xs text-gray-400">{item.payment_date}</span>
                                        </td>
                                        <td>{item.amount}</td>
                                        <td className="text-sm"> <div className="w-full cursor-pointer "><button className="bg-primary text-white p-1 rounded-md lg:w-4/5">View more</button></div> </td>
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