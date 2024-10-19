import { useState } from "react"

export default function Counter(){
    const [count, SetCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        SetCount(newCount);
    }
    const handleReduce = () => {
     const  newCount = count -1;
     SetCount (newCount);
    }
    
    return (

        <div style={{border: '2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}