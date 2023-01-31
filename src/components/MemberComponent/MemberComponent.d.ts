


export type MediaObject = {
    facebook?:string,
    twitter?:string,
    linkedin?:string,
    github?:string,
    instagram?:string
}

export default interface MemberProps {
    id:number,
    imageUrl:string,
    position:string,
    media:MediaObject,
    content:string
}
