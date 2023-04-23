<template>
    <div>
            <h2>
                composition API 제대로 쓴 계산기??
            </h2>
        <div>
            <input type="text" v-model="num1"  />
            <span> + </span>
            <input type="text" v-model="num2"  />
            <span> = </span>
            <span> {{result}}</span>
        </div>
    </div>
    </template>
    
    <script>
    import {reactive,computed,toRefs} from 'vue'; //toRefs 추가

    function plusCalculator() {
            let state = reactive({
       
                num1:0,
                num2:0,
                result :computed(() => parseInt(state.num1)+parseInt(state.num2))
                //computed를 이용해 num1과 num2의 변견이 있을 때 result로 더한 값 반환
            });
            
            return toRefs(state); //
    }
    export default {
        name :'calculator-4',
        setup() {
            let {num1,num2,result} = plusCalculator() ; 
            return { num1,num2,result}
        }
    }



    
       
    </script>
    