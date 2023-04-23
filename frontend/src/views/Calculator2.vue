<template>
    <div>
            <h2>
                reactive를 쓴 계산기
            </h2>
        <div>
            <input type="text" v-model="state.num1" @keyup="plusNumbers" />
            <span> + </span>
            <input type="text" v-model="state.num2" @keyup="plusNumbers" />
            <span> = </span>
            <span> {{state.result}}</span>
        </div>
    </div>
    </template>
    
    <script>
    import {reactive} from 'vue'; //reactive 추가

    export default {
        name:'calculator-2',
        setup() {
            let state = reactive({
       
                num1:0,
                num2:0,
                result :0
            });
            function plusNumbers() {
                state.result = parseInt(state.num1) + parseInt(state.num2);
            }
            return {
                state,plusNumbers
            }
        }
    }
       
    </script>
    