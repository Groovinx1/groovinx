/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useForm } from 'react-hook-form'
import React, { useState } from "react";
import Button from "../components/buttons/Button";
import Logo from "../components/shared/Logo";
import { OperationStatus, UserLogin } from "../util/types";
import { UserServices } from "./api/services/User";
import { Toast } from "../components/toasts/Toast";
import { useRouter } from "next/router";

export default function login(): JSX.Element {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState<boolean>(false)
    const [operationStatus, setOperationStatus] = useState<OperationStatus>({ status: true, message: '' })

    async function handleLogin(data: UserLogin) {
        setLoading(true)
        try {
            const services = new UserServices();
            const response = await services.login(data);
            setOperationStatus({ status: response.success, message: response.message })
            if (response.success) {
                router.push('/')
            }

            localStorage.setItem('token', JSON.stringify(response.token))
        } catch (error) {
            setLoading(false)
        }
        setLoading(false)
        //  {/* change state of toast */}
        setTimeout(() => {
            setOperationStatus({ status: true, message: '' })
        }, 2000)
    }
    return (
        <div className="md:flex items-center justify-center h-screen lg:py-10">

            {/* modal */}
            {operationStatus?.status === false &&
                <Toast status='error' message={operationStatus?.message} />}

            <div className="w-full lg:w-2/3 bg-primary text-sm h-screen md:h-full px-5 py-10">

                <Logo style="my-2" />
                <div className=" flex justify-center items-center">
                    <div className="bg-gray-50 p-5 w-full md:w-2/3 lg:w-1/2 lg:h-full rounded-lg flex items-center">
                        <div className="w-full">
                            <div className="my-5 text-center">
                                <h1 className="font-bold text-2xl mb-3">Login to Groovinx</h1>
                                <h2 className="">Login to access the admin dashboard</h2>
                            </div>
                            <form action="" className="w-full" onSubmit={handleSubmit((data: UserLogin) => { handleLogin(data) })}>
                                <div className="form-group">
                                    <input type="email" className="form-control my-2 border p-3 rounded-lg w-full outline-none" placeholder="Email address"
                                        {...register('email', { required: '*Email address is required' })}
                                    />
                                    <span className="text-red-500 text-xs">{errors.email && errors.email.message}</span>
                                </div>
                                <div className="form-group my-5">
                                    <input type="password" className="form-control my-2 border p-3 rounded-lg w-full outline-none" placeholder="Password"
                                        {...register('password', { required: '*Password is required' })}
                                    />
                                    <span className="text-red-500 text-xs">{errors.email && errors.email.message}</span>
                                </div>

                                <div className="w-full flex justify-center">
                                    <Button title="Login" style="py-3 rounded-md w-full md:w-1/2" loading={loading} loadingTitle="Authenticating..." />
                                </div>
                                <p className="text-center my-5">
                                    <Link href="/forgotpassword">
                                        <a className="underline">Forgot password</a>
                                    </Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}