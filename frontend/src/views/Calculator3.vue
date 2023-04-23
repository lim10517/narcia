<template>
    <div>
            <h2>
                computed 추가한 계산기
            </h2>
        <div>
            <input type="text" v-model="state.num1"  />
            <span> + </span>
            <input type="text" v-model="state.num2"  />
            <span> = </span>
            <span> {{state.result}}</span>
        </div>
    </div>
    </template>
    
    <script>
    import {reactive,computed} from 'vue'; //computed 추가

    export default {
        name:'calculator-3',
        setup() {
            let state = reactive({
       
                num1:0,
                num2:0,
                result :computed(() => parseInt(state.num1)+parseInt(state.num2))
                //computed를 이용해 num1과 num2의 변경이 있을 때 result로 더한 값 반환
            });
            
            return {
                state
            }
        }
    }
       
    </script>
    