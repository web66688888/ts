import { defineStore } from "pinia";
import axios from 'axios'
import { channelsList,Newlist,data,Newdata } from "../types";
export default defineStore('channel',{
    state() {
        return {
            ChannelList:[] as channelsList,
            active:-1,
            NewList:[] as Newlist
        }
    },
    actions:{
      async  getChannelList(){
        const res = await axios.get<data>('http://geek.itheima.net/v1_0/channels')
        // console.log(res.data.data.channels);
        this.ChannelList=res.data.data.channels
    },
    async getNewlist(id:number,time:number){
        const res = await axios.get<Newdata>(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${time}`)
        console.log(res);
        this.NewList=res.data.data.results
     }
    }
})