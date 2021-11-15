/* eslint-disable @next/next/no-img-element */
export default function Navbar(props:any){
    const profile = {
        name:"John Deree",
        account_type:"Admin"
    }
    return(
        <div className="bg-white rounded p-3 border  flex justify-between items-center">
            <div className="w-1/2">
                <div>
                    <h1 className="block font-bold text-md">{props.title}</h1> 
                    <h2 className="text-gray-400 text-xs">{props.subTitle}</h2>
                </div>
            </div>
              <div className="w-1/2">
                <div className="grid grid-cols-2 gap-3 float-right items-center">
                    <div className="block text-sm">
                        <h1 className="block font-bold">{profile.name}</h1>
                        <h2 className="text-gray-400 text-xs">{profile.account_type}</h2>
                    </div>
                        <img src="./user.png" alt="" className="rounded-full shadow-lg" width="50px" />
                    
                </div>
            </div>
        </div>
    )
}