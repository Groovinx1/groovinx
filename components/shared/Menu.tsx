import React from "react"
import NavLink from 'next/link'
import ActiveLink from "./ActiveLink"
import { TeamOutlined,ShoppingOutlined,HddOutlined, DollarOutlined,SkinOutlined, ApartmentOutlined } from '@ant-design/icons'
import {useRouter} from "next/router"

export default function Menu(): JSX.Element {
    const router = useRouter();
    return(
        <div className="my-5">
            <ActiveLink href="/">
            <TeamOutlined /> Users
            </ActiveLink>
            
            <ActiveLink href="/orders">
            <HddOutlined /> Orders
            </ActiveLink>

            <ActiveLink href="/products">
            <ShoppingOutlined /> Products
            </ActiveLink>

            <ActiveLink href="/transactions">
            <DollarOutlined /> Transactions
            </ActiveLink>

            <ActiveLink href="/designvaults">
            <SkinOutlined />Design vaults
            </ActiveLink>

            <ActiveLink href="/categories">
            <ApartmentOutlined /> Categories
            </ActiveLink>
            
            <button className="bg-primary text-center text-white rounded p-2 w-full"
            onClick={()=>{router.push('/logout')}}
            >Logout</button>
        </div>
        
    )
}

