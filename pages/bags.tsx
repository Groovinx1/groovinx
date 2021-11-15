/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

import Card from "../components/cards/Card";
import Bags from '../components/tables/Bags';
import Dashboard from "../layouts/Dashboard";
export default function vaults() {
    const [activeTab, setActiveTab] = useState('all')
    return (
        <Dashboard navTitle={"Bags"} navSubTitle={"Statistics"}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 p-5 lg:p-0">
                <Card total="7k Full Design" title="In Total" img={'./cube.png'} bgColor="bg-green-400" />
                <Card total="15.2k Single Pattern  " title="In Total" img={'./cube.png'} bgColor="bg-primary" />
                <Card total="3 Categories" title="In Total" img={'./cube.png'} bgColor="bg-green-400" />
            </div>
            <div className="h-full">

                {/* table of users */}

                <div className="relative top-10 p-5 lg:p-0">
                    {/* tabs */}
                    <div className="flex gap-5 overflow-auto">
                        <h1 className={activeTab==='all'?"text-sm  text-primary pl-4 hover:text-primary cursor-pointer":"text-sm pl-4 hover:text-primary cursor-pointer"} onClick={() =>setActiveTab('all')}>All</h1>
                        <h1 className="text-sm pl-4 hover:text-primary cursor-pointer" onClick={() =>setActiveTab('hand_bag')}>Hand Bag</h1>
                        <h1 className="text-sm pl-4 hover:text-primary cursor-pointer" onClick={() =>setActiveTab('back_pack')}>Back Pack</h1>
                        <h1 className="text-sm pl-4 hover:text-primary cursor-pointer" onClick={() =>setActiveTab('wallet')}>Wallet</h1>
                        <h1 className="text-sm pl-4 hover:text-primary cursor-pointer" onClick={() =>setActiveTab('travel_bag')}>Travel Bag</h1>
                    </div>
                    {/* navigation line */}
                    <div className="flex w-full my-1 bg-gray-200 pl-4">
                    <div className=
                    
                        {
                            activeTab==='all'?"p-0.5 bg-primary w-12 ml-0":
                            activeTab==='hand_bag'?"p-0.5 bg-primary w-12 ml-12":
                            activeTab==='back_pack'?"p-0.5 bg-primary w-12 ml-36":
                            activeTab==='wallet'?"p-0.5 bg-primary w-12 ml-64":
                            activeTab==='travel_bag'?"p-0.5 bg-primary w-12 ml-85":''
                        }
                        ></div>
                        <div className="bg-gray-200 w-5/6"></div>
                    </div>
                    <div className="bg-white rounded shadow my-2 w-full overflow-auto pb-10">

                        <Bags order_status={activeTab} />
                    </div>
                </div>

            </div>
        </Dashboard>
    )
}
