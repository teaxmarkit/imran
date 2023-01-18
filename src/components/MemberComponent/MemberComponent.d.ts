


export type MediaObject = {
    facebook?:string,
    twitter?:string,
    linkedin?:string,
    github?:string,
    instagram?:string
}

export type MemberProps = {
    imageUrl:string,
    position:string,
    media:MediaObject,
    content:string
}
