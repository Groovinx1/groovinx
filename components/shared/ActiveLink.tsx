import Link from "next/link";
import { useRouter } from "next/router";
import { LinkProps } from '../../util/types'

export default function ActiveLink(props: LinkProps): JSX.Element {
    const router = useRouter();
    return (
        <Link href={props.href} >
            <a className={`${props.href === router.pathname ? 'text-primary px-5 active ' : 'px-6'} text-sm py-2 flex items-center gap-2 hover:text-primary my-2`}>{props.children}</a>
        </Link>
    )
}