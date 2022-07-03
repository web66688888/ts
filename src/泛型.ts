{
    //需求:定义一个getID方法,传入一个值,返回这个值,可以传入任意类型
    //解决方案:泛型
    //期望:调用 getID 函数时来指定传入参数的类型
    //<T>   -> 在声明泛型
    //val: T ->使用泛型
    //调用函数时传入泛型指定的具体类型
    //function getID<T>(val:T){ return val}
    // function  getID<T>(val:T){
    //     return val
    // }
    // // const res =  getID<number>(111)
    // // const res1 =  getID<string>('111')
    // // const res2 =  getID<boolean>(true)
    // //简化写法: 调用时可以不加<类型> TS自动推断类型
    // const res =  getID(111)
    // const res1 =  getID('111')
    // const res2 =  getID(true)
    // function  getID<T>(val:T[]){
    //     console.log(val.length);
    //         return val
    //   }
    //   getID([1,2,3])
    interface Ilength{
        length:number
    }
    function  getID<T extends Ilength>(val:T){
        console.log(val.length);
            return val
      }
    //   console.log(getID([1,2,3,4]));
      console.log(getID<string>('123'));
     function getProp<O,K extends keyof O>(obj:O,key:K){
        return obj[key]
     } 
     const p1 = {
        name:'李四'
     }
     const req = getProp(p1,'name')
     console.log(req);
     
}