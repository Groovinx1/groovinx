/* eslint-disable @next/next/no-img-element */
export default function HomeCard(props:any){
    return(
        <div className="shadow p-5 rounded bg-white">
            <div className="flex gap-5">
                <div className="block w-1/2">
                    <h1 className="block font-bold text-md">{props.total}</h1>
                    <h2 className="text-gray-500 text-xs lg:my-3">{props.title}</h2>
                </div>
                <div className="w-1/2">
                    <div className={"p-4 rounded-full card-circle float-right "+props.bgColor}>
                            <img src={props.img} alt="" />        
                    </div>
                </div>

            </div>
            
        </div>
    )
}