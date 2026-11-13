import { Battle } from "./ExploreFunctions/FunctionBattle.js"

function Explore(){
    let Find = Math.ceil(Math.random * 100)
    if(Find < 20){

    }else{
        console.clear
        Battle()
    }
}

export{Explore}