export type channelsList={
    id:number
    name:string
}[]

export type data={
    data:{
        channels:channelsList
    }
    message:string
}
export type Newlist={
    title:string
    pubdate:string
    is_top:number
    cover:{
        images:string[]
        type:number
    }
    comm_count
    aut_name
    aut_id
    art_id
}[]
export type Newdata={
    data:{
        results:Newlist
        pre_timestamp:string
    }
    message:string
}