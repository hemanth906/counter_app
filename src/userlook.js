import { useState } from "react";

function userlook(){
    let[count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count -1);
    }
    return{
        count,
        increment,
        decrement,
    }
}