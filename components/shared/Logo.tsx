/* eslint-disable @next/next/no-img-element */
type LogoProps = {
    style:string
}
export default function Logo(props:LogoProps):JSX.Element{

    return(
           <div className={`${props.style} flex justify-center md:justify-start`}>
                <img src="./logo.png" alt="" className="md:w-1/5" />
            </div>
    )
}