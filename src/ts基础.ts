// //学习使用
// // let arr:number[] = [1,2,3]
// // let arr1:(number|string)[] =['1',2,3]
// // function add(a:number,b:number):number {
// //     return a+b
// // }
// //  type Student = {
// //     name:string,
// //     gender:string,
// //     chengji:number,
// //     height:number,
// //     study:(content:string)=>void,
// //     game:(content:string)=>void
// // }

// // const p1:Student={
// //     name:'张三',
// //     gender:'男',
// //     chengji:99,
// //     height:170,
// //     study(content){
// //         console.log('学习'+content);
// //     },
// //     game(content) {
// //         console.log('打游戏'+content);
// //     },   
// // }
// // console.log(p1.study('111'));

// interface  IStudent{
//     name:string
//     age:number
//     sayHi:()=>void
// }
// const s1:IStudent={
//     name:'张三',
//     age:18,
//     sayHi() {
//         console.log(111);       
//     },   
// }
// s1.sayHi()
// let a:boolean=true
// type FNtype=(a:number,b:number)=>number
// const fn:FNtype=function(a,b){
//     return a+b
// }
// let str1='李三'
// type Direction='上'|'下'|'左'|'又'
// function changeDirection(direction:Direction){
//     console.log(direction);   
// }
// changeDirection('下')
// type Gender='男'|'女'
// function changeGender(gender:Gender) {
//     console.log(gender);   
// }
// changeGender('女')