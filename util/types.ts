export interface ButtonProps{
    title:string
    style:string
    loading:boolean | false
    loadingTitle:string | null


}
export interface LinkProps{
    href:string
    children:object
}
export interface ToastProps{
    status:string
    message:any
}
export interface UserLogin{
    email:string
    password:string
}

export interface OperationStatus{
    status:boolean
    message:string
}