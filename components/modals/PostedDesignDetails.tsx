/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import PublishProduct from './PublishProduct'
import {Icons} from '../resources/Icons'    
import parse from 'html-react-parser'
export default function PostedDesignDetails(props:any) {
    const [modal,setModal] = useState(false)
    // function to open modal
    function openModal(){
        setModal(!modal)
    }

    // close modal
    const close = <span onClick={() =>openModal()}>
      {parse(Icons.close)}
    </span>

 
   
    return (
        <div className="bg-white p-5 my-3 rounded modal-content lg:w-2/3">

                   {/* view posteddesign details */}
                   {modal?
        <div className="modal lg:flex items-center justify-center">
            <PublishProduct action = {close}/>
        </div>:''    
        
        }
            <section className="grid grid-cols-2 gap-5 items-center">
                <div className="flex">
                <h1 className="text-sm  bg-primary text-white py-2 px-5 text-center">Edit</h1>
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
                </div>
                <div className="content">
                    <section>
                        <h1 className="font-bold text-lg block">Nike Air force</h1>
                        <h2 className="text-xs block">Design by: @Sergeart</h2>
                        <br />
                        <h1 className="font-bold text-md block bold">$359</h1>
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

                    <div className="w-full flex gap-5 justify-center my-5">
                       <button className="bg-primary text-white p-2 rounded">Delete post</button>
                       <button className="bg-green-500 text-white p-2 rounded"  onClick={() => openModal()}>Post Design to Store</button>
                   </div>
                   <div className="flex justify-center w-full">
                   <button className="bg-red-500 text-white p-2 rounded ml-16">Delete design</button>
                   </div>
                </div>

            </section>


        </div>
    )
}