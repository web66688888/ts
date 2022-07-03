<template>
        <div @click="hclick">
            子组件
        </div>
        <div>
            关爱:{{house}}
        </div>
       
</template>
    
<script setup lang='ts'>
// defineProps<{}>()
type PropsType={
    house?:string
}
const {house='茅草屋'}=defineProps<PropsType>()
console.log(house);
const emit = defineEmits<{
    (e:'getgift',gift: string, msg: string): void
}>()
const hclick = () => {
    emit('getgift','吃的','龙虾')
}
</script>
    
<style>
    
</style>