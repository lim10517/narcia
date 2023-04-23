<template>
    <div>
            <h2>
                common.js를 이용한 계산기
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
    import {plusCalculator} from '../common.js'; //toRefs 추가

    
    export default {
        name :'calculator-5',
        setup() {
            let {num1,num2,result} = plusCalculator() ; 
            return { num1,num2,result
            }
        }
    }



    
       
    </script>
    