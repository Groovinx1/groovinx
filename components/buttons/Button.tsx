import { ButtonProps } from "../../util/types";
import {LoadingOutlined} from '@ant-design/icons'

export default function Button(props:ButtonProps):JSX.Element{
    return(
        <button
        type='submit'
        className={`${props.style} text-white bg-primary hover:opacity-50 outline-none ${props.loading&&'opacity-50 disabled'}`}
        >
            {props.loading?<div className="flex items-center gap-2 justify-center"><LoadingOutlined/> {props.loadingTitle}</div>: props.title}
        </button>
    )
}