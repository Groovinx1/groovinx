/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

import Card from "../components/cards/Card";
import DesignVaults from "../components/tables/DesignVaults";
import Dashboard from "../layouts/Dashboard";
export default function designvaults() {
    const [activeTab, setActiveTab] = useState('all')
    return (
        <Dashboard navTitle={"Design Vaults"} navSubTitle={"Statistics"}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 p-5 lg:p-0">
                <Card total="7k Full Design" title="In Total" img={'./cube.png'} bgColor="bg-green-400" />
                <Card total="15.2k Single Pattern  " title="In Total" img={'./cube.png'} bgColor="bg-primary" />
                <Card total="3 Categories" title="In Total" img={'./cube.png'} bgColor="bg-green-400" />
            </div>
            <div className="h-full">
                  {/* action links */}
    

                {/* table of users */}

                <div className="relative top-10 p-5 lg:p-0">
                  
                    <div className="bg-white rounded shadow my-2 w-full overflow-auto pb-10">

                        <DesignVaults design_status={activeTab} />
                    </div>
                </div>

            </div>
        </Dashboard>
    )
}
