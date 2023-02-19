export interface IUser{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    phone:number,
    imgUrl:string
}

export const usersList:IUser[] =[ 
    {
        id:new Date().toJSON().toString(),
        firstName:"FirstUser",
        lastName:"LastFirstUser",
        email:"firstUser@gmail.com",
        phone:+1011001,
        imgUrl:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80"
}
]