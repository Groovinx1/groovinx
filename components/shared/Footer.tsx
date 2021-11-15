/* eslint-disable @next/next/no-img-element */

import NavLink from 'next/link'
export default function Footer() {
    return (
        <div className="bg-black w-full px-5 py-1 text-white lg:fixed bottom-0">
            <div className=" grid grid-cols-1 sm:grid-r md:grid-cols-3 items-center gap-5">
                <div className="app-header flex gap-2 items-center">
                    <img src="./groovin_logo.png" alt="" />
                    <img src="./Groovin_white.png" alt="" className="h-1/2" />

                </div>
                {/* copyright */}
                <div className="text-sm lg:text-center">
                    <p>&copy; {new Date().getFullYear()} Groovin. All rights reserved</p>
                </div>
                {/* actions */}
                <div className="text-sm lg:flex gap-5 items-center justify-center">

                    <NavLink href="/" >
                        <a className="block lg:inline-block mb-4 lg:mb-0">Logout</a>
                    </NavLink>
                    <NavLink href="/" >
                        <a className="block lg:inline-block mb-4 lg:mb-0">Terms and conditions</a>
                    </NavLink>
                    <NavLink href="/" >
                        <a className="block lg:inline-block mb-4 lg:mb-0">Privacy Policy</a>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}