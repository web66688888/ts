type channelsList={
    id:number
    name:string
}[]

type data={
    data:{
        channels:channelsList
    }
    message:string
}
type Newlist={
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
type Newdata={
    data:{
        results:Newlist
        pre_timestamp:string
    }
    message:string
}