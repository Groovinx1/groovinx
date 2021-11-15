/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import Menu from './Menu';
import { route } from 'next/dist/next-server/server/router';

export default function Sidebar() {
    const router = useRouter();
    const [openSidebar, setOpenSidebar] = useState<boolean>(false)

    const mobileNav = <div className="grid grid-cols-2 items-center">
        <div className="">
        <img src="./logo.png" alt="" className="" />
        </div>
        <div className="block lg:hidden ">
            <MenuOutlined className="float-right text-xl text-primary" onClick={() => setOpenSidebar(true)} />
        </div>

    </div>
    const sidebar = <div className="block  bg-white p-5 lg:rounded sidebar">
        {openSidebar &&
            <div className="grid grid-cols-2 items-center">
                <div className="flex items-center">
                    <img src="./logo.png" alt="" className="" />
                </div>
                <div className="block lg:hidden">
                    <CloseOutlined className="float-right text-xl text-primary" onClick={() => setOpenSidebar(false)} />
                </div>

            </div>

        }
        {/* mobile to menu */}
        {/* <div className="block lg:hidden w-full z-40"> */}
        {!openSidebar &&
            mobileNav

        }
        {/* </div> */}


        <div className="app-menu mt-10 text-sm ">
            <h1 className="text-sm text-primary">
                General
            </h1>
            <br />
            {/* sidebar links */}
            <Menu />

        </div>
    </div>
    return (
        <>
            <div className=" hidden lg:block h-full border">
                {sidebar}
            </div>
            <div className="block lg:hidden w-full bg-white p-3">
                {mobileNav}
            </div>



            {/* mobile slider */}
            {openSidebar &&
                <div className="block lg:hidden modal">
                    <div className="modal-content w-full">
                        <div className="float-right h-screen w-2/3">
                            {sidebar}
                        </div>

                    </div>

                </div>
            }
        </>
    )
}