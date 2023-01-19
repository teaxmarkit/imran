export type ContactFormObject = {
    fullname?:string,
    email?:string,
    subject?:string,
    message?:string
};

export interface Action{
    type?:string,
    payload?:string,
}