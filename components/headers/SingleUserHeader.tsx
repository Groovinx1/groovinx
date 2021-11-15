/* eslint-disable @next/next/no-img-element */
import parse from 'html-react-parser'
import {Icons} from '../resources/Icons'
export default function Navbar(props: any) {
    const profile = {
        name: "Devon Lane",
        username: "@devoneric",
        email:"ericmckin@gmail.com",
        location:"Nigeria",
        status:"Active",
        login_status:"Last login: 14/APR/2020",
    }
    return (
        <div className="p-3 flex gap-5 items-center justify-between">

                    <div className="rounded-full shadow-lg">
                        <img src="./user.png" alt="" width="50px" className="rounded-full" />
                    </div>
                    <div className="block text-sm">
                        <h1 className="block font-bold">{profile.username}</h1>
                        <h2 className="text-gray-400 text-xs">{profile.name}</h2>
                    </div>
                    <div className="block text-sm">
                                    {(profile.status).toLowerCase() ==='active'?
                                     <div className="flex justify-center my-1"><span className="text-green-500 bg-green-100  py-1 px-2 rounded-full m-auto font-bold text-xs flex gap-1 items-center"><span className="ellipse bg-green-600 rounded-full"></span>{profile.status}</span></div>
                                   : <div className="flex justify-center my-1"><span className="text-red-500 bg-red-100  py-1 px-2 rounded-full m-auto font-bold text-xs flex gap-1 items-center"><span className="ellipse bg-red-600 rounded-full"></span>{profile.status}</span></div>
                                   
                                }
                                    <span className="text-xs text-gray-400">{profile.login_status}</span>
                                
                    </div>
                    <h1 className="text-sm">{profile.email}</h1>
                    <h1 className="text-sm">{profile.location}</h1>
                    <span>{parse(Icons.more)}</span>
             

        </div>
    )
}