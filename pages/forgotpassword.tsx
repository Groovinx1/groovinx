import Link from "next/link";
import React from "react";
import Button from "../components/buttons/Button";
import Logo from "../components/shared/Logo";

export default function forgotpassword(): JSX.Element {
    return (
        <div className="md:flex items-center justify-center h-screen lg:py-10">
            <div className="w-full lg:w-2/3 bg-primary text-sm h-screen md:h-full px-5 py-10">
                <Logo style="my-5" />
                <div className=" flex justify-center items-center">
                      <div className="bg-gray-50 p-5 w-full md:w-2/3 lg:w-1/2 lg:h-full rounded-lg flex items-center">
                            <div className="w-full">
                                <div className="my-5 text-center">
                                    <h1 className="font-bold text-2xl mb-3">Forgot Password</h1>
                                    <h2 className="">Forgot password? Change!</h2>
                                </div>
                                <form action="" className="w-full">
                                    <div className="form-group mb-5">
                                        <input type="email" name="" id="" className="form-control border p-3 rounded-lg w-full outline-none" placeholder="Email address" />
                                    </div>


                                    <div className="w-full flex justify-center">
                                    <Button title="Send OTP code" style="py-3 rounded-md w-full md:w-1/2" loading={false} loadingTitle="Sending..." />
                                    </div>
                                    <p className="text-center my-5">
                                        <Link href="/login">
                                            <a className="underline">Login</a>
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