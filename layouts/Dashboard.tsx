import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";

export default function Dashboard(props: any) {
    return (
        <div className="bg-gray-50 lg:h-screen">
            {/* inner block */}
            <div className="lg:flex gap-5 lg:p-5 h-5/6">
                <div className="lg:w-1/5 h-full top-0 lg:sticky">
                    <Sidebar />
                </div>
                {/* navbar and body */}
                <div className="block lg:w-4/5">
                    <div className="hidden lg:block">

                        <Navbar title={props.navTitle} subTitle={props.navSubTitle} />
                    </div>
                    <div className="block w-full overflow-y-auto h-full lg:p-5">
                        {props.children}
                    </div>
                    {/* for small devices */}
                    <div className="block lg:hidden relative h-1/6">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative h-1/6">
                <Footer />
            </div>
        </div>
    )
}