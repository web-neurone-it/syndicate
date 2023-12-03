// export interface IService{
//     id: number;
//     title: string;
//     subtitle: string;
//     price: number[] | string;
//     description: string;
// }
export interface IServiceChild{
    id: number
    title: string;
    description: string
    services: string[]
    image: string
}
export interface IServiceParent{
    id: number
    title: string;
    image: string
    children: IServiceChild[]
}