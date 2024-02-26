export interface Book{
    id:number,
    name:string,
    price:number,
    sales:number,
    slug:string,
    author:string,
    cover:string,
    created_at:string,
    description: string
    likes_aggregate: {aggregate:{count:number}}
}

export interface Category{
    id:number,
    name:string,
    created_at:string,
    books?:Array<Book>
}